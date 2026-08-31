/**
 * service-worker.js — PWA 離線快取 + 背景同步
 * 快取策略：
 *   - app.js / app.css / index.html → 快取優先（Cache-First）
 *   - Firebase / CDN 資源 → 網路優先（Network-First），失敗回退快取
 *   - 其他 → stale-while-revalidate
 */

var CACHE_VERSION = 'tw-app-v2.4.11';  /// 2026-08-31 v2.4.11 三大封存需求（與 WEB v1.7.12 對齊）：(1) 按月批量封存（PendingPage 按鈕+月份下拉，級聯封存帳務/預支/錢包流水）；(2) 已封存團錢包流水/預支隱藏到歷史查詢（錢包頁只顯示未封存、編輯/刪除/批量刪除守門，歷史查詢補顯示預支開銷+錢包流水明細）；(3) 股東分潤月報快照（ProfitSnapshots，批量封存自動固定該月分潤，分潤頁月份切換+快照全頁只讀+匯出分潤月報 PDF）
var STATIC_CACHE = CACHE_VERSION + '-static';
var RUNTIME_CACHE = CACHE_VERSION + '-runtime';

var STATIC_ASSETS = [
  './',
  './index.html',
  './app.js',
  './app.css',
  './manifest.json',
  './version.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/brand-360.png',
  './icons/brand-240.png',
  './icons/splash-1290x2796.png',
  './icons/splash-1284x2778.png',
  './icons/splash-1179x2556.png',
  './icons/splash-1170x2532.png',
  './icons/splash-1125x2436.png',
  './icons/splash-828x1792.png',
  './icons/splash-750x1334.png',
];

// =========================================================================
// Install: 預快取靜態資源
// =========================================================================
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(function(cache) {
      return cache.addAll(STATIC_ASSETS).catch(function(e) {
        console.warn('[SW] 部分靜態資源快取失敗', e);
      });
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// =========================================================================
// Activate: 清除舊版快取
// =========================================================================
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== STATIC_CACHE && key !== RUNTIME_CACHE;
        }).map(function(key) {
          return caches.delete(key);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// =========================================================================
// Fetch: 請求攔截與快取策略
// =========================================================================
self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // Firebase Realtime Database 請求 → 不攔截（由 SDK 處理離線）
  if (url.hostname.indexOf('firebasedatabase') !== -1 ||
      url.hostname.indexOf('firebaseio') !== -1) {
    return;
  }

  // Firebase CDN SDK → 網路優先
  if (url.hostname.indexOf('gstatic.com') !== -1 ||
      url.hostname.indexOf('firebase') !== -1) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // html2pdf CDN → 網路優先
  if (url.hostname.indexOf('cdnjs') !== -1) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // 本地靜態資源 → 快取優先
  if (STATIC_ASSETS.indexOf(url.pathname) !== -1 ||
      url.pathname === '/' ||
      url.pathname === '/index.html' ||
      url.pathname === '/app.js' ||
      url.pathname === '/app.css') {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  // 其他 → stale-while-revalidate
  event.respondWith(staleWhileRevalidate(event.request));
});

// =========================================================================
// 快取策略函數
// =========================================================================
function cacheFirst(request) {
  return caches.match(request).then(function(cached) {
    return cached || fetch(request).then(function(response) {
      return cacheResponse(request, response);
    });
  });
}

function networkFirst(request) {
  return fetch(request).then(function(response) {
    return cacheResponse(request, response);
  }).catch(function() {
    return caches.match(request);
  });
}

function staleWhileRevalidate(request) {
  return caches.match(request).then(function(cached) {
    var fetchPromise = fetch(request).then(function(response) {
      return cacheResponse(request, response);
    }).catch(function() {
      return cached;
    });
    return cached || fetchPromise;
  });
}

function cacheResponse(request, response) {
  if (response && response.status === 200 && response.type === 'basic') {
    var responseClone = response.clone();
    caches.open(RUNTIME_CACHE).then(function(cache) {
      cache.put(request, responseClone);
    });
  }
  return response;
}

// =========================================================================
// Message: 接收來自頁面的控制指令
// =========================================================================
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CACHE_VERSION') {
    event.ports[0].postMessage({ version: CACHE_VERSION });
  }
});

// =========================================================================
// Sync: 背景同步（待網路恢復時觸發）
// =========================================================================
self.addEventListener('sync', function(event) {
  if (event.tag === 'tw-sync-pending') {
    event.waitUntil(
      self.clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
          client.postMessage({ type: 'BACKGROUND_SYNC_TRIGGER' });
        });
      })
    );
  }
});

// =========================================================================
// Push: 推播通知
// =========================================================================
self.addEventListener('push', function(event) {
  var payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch(e) {
    payload = { title: '系統通知', body: event.data ? event.data.text() : '' };
  }

  var title = payload.title || '台灣版整合系統';
  var options = {
    body: payload.body || '',
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png',
    vibrate: [200, 100, 200],
    data: payload.data || {},
    requireInteraction: payload.requireInteraction || false
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// =========================================================================
// Notification click: 點擊通知後開啟 APP
// =========================================================================
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(function(clientList) {
      if (clientList.length > 0) {
        clientList[0].focus();
        clientList[0].postMessage({ type: 'NOTIFICATION_CLICK', data: event.notification.data });
      } else {
        self.clients.openWindow('./');
      }
    })
  );
});
