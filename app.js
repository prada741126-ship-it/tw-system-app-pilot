// [BUILD] v2.4.8_1788104698
window.TW_BUILD_VERSION = "v2.4.10_1788106091";

// [DEV BUILD] 測試環境 — 資料導向 taiwan_data_dev/，不污染正式資料
window.TW_DEV_MODE = true;

// === icons.js — 全站 SVG 圖示系統（P3-3，與 WEB src/ui/icons.js 同款同內容） ===
(function () {
  function ic(path) {
    return '<svg class="ic" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + path + '</svg>';
  }
  window.ICONS = {
    check: ic('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>'),
    alert: ic('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>'),
    chart: ic('<path d="M3 3v18h18"/><path d="M8 17v-5"/><path d="M13 17V8"/><path d="M18 17v-3"/>'),
    calendar: ic('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>'),
    file: ic('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>'),
    save: ic('<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/>'),
    gear: ic('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),
    edit: ic('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>')
  };
})();

// === src/core/constants.js ===
/**
 * tw-system 核心常量 — 单一真相来源
 * 依赖: 无
 * 影响: 全系統所有模組
 */
// ============================================================================
// 系統識別
// ============================================================================
var APP = {
  VERSION:       'v1.0.0',
  TITLE:         '台灣版整合系統',
  SYSTEM_NAME:   '博盈國際會',
  SYSTEM_SUB:    '台灣版整合管理',
  SYSTEM_EN:     'BOYING INTERNATIONAL CLUB',
  LOGIN_TITLE:   '授 權 驗 證',
  LOGO_CHAR:     '\u2660',
  PWD_HASH:      '2926a2731f4b312c08982cacf8061eb14bf65c1a87cc5d70e864e079c6220731',
};

// ============================================================================
// 时间与安全
// ============================================================================
var CONFIG = {
  SESSION_TIMEOUT:    30 * 60 * 1000,
  MAX_PW_ATTEMPTS:    5,
  LOCK_DURATION:      60 * 1000,
  TOMBSTONE_TTL_MS:   30 * 24 * 60 * 60 * 1000,
  SYNC_RETRY_MAX:     3,
  SYNC_RETRY_BASE:    500,
  UPLOAD_BATCH_MAX:   200,
  PRODUCTION:         true,
  // Phase 1A 離線登入寬限：上次線上驗證後 7 天內可離線登入（快取權限）
  OFFLINE_GRACE_MS:   7 * 24 * 60 * 60 * 1000,
  // Phase 1B 審計紀錄保留期限（決策 #11：雲端 1 年、本機 90 天自動清理）
  AUDIT_LOCAL_MAX_DAYS:  90,
  AUDIT_CLOUD_MAX_DAYS:  365,
  // Phase 1D：衝突記錄與回收站本機保留（過期自動清理，避免儲存爆滿）
  CONFLICT_RETENTION_DAYS:  30,
  RECYCLE_BIN_RETENTION_DAYS: 30,
};

// ============================================================================
// 环境識別（E0 测试环境隔离）
// dev 建構由 build-app.js 於 bundle 頂端注入 dev 旗標（TW_DEV_MODE）
// 未注入（正式出包、網頁版、Node 測試）一律走 taiwan_data 正式路徑
// ============================================================================
var _TW_IS_DEV = (typeof window !== 'undefined' && window.TW_DEV_MODE === true);
// 2026-08-22: 改用 taiwan_data/pilot/（獨立子路徑）— 試點測試與正式資料完全隔離，
// 測試完畢確認沒問題後才會合併回 taiwan_data。
// （taiwan_data 頂層現在是正式營運資料：18 會員/9 代理/7 股東/32 訂房/44 帳務）
var FB_DATA_ROOT = 'taiwan_data/pilot';
// 本機 localStorage 仍用 dev 前綴，避免測試快取混入本機正式快取
var STORAGE_PREFIX = _TW_IS_DEV ? 'tw1d_' : 'tw1_';

// ============================================================================
// localStorage 键 (tw1_ 前缀；dev 建構改用 tw1d_ 前綴，避免測試資料混入)
// ============================================================================
var STORAGE_KEYS = {
  MEMBERS:           STORAGE_PREFIX + 'members',
  AGENTS:            STORAGE_PREFIX + 'agents',
  SHAREHOLDERS:      STORAGE_PREFIX + 'shareholders',
  TRIPS:             STORAGE_PREFIX + 'trips',
  MEMBER_TXS:        STORAGE_PREFIX + 'member_txs',
  WALLET_TXS:        STORAGE_PREFIX + 'wallet_txs',
  PENDING_EXPS:      STORAGE_PREFIX + 'pending_exps', // v2.1 預支開銷（先記帳後歸屬）
  CATALOG:           STORAGE_PREFIX + 'catalog',          // v2.2.2 品項主檔（水舞間/水樂園等常用票券固定價）
  LOANS:             STORAGE_PREFIX + 'loans', // v2.2 港幣借支（借出→回收→未回收追蹤）
  BOOKINGS:          STORAGE_PREFIX + 'bookings',
  SUPPLEMENTS:       STORAGE_PREFIX + 'supplements',
  SETTINGS:          STORAGE_PREFIX + 'settings',
  EXTRA_INCOME:      STORAGE_PREFIX + 'extra_income',
  ARCHIVES:          STORAGE_PREFIX + 'archives',
  CLOSED_MONTHS:     STORAGE_PREFIX + 'closed_months',
  VIP_HALLS:         STORAGE_PREFIX + 'vip_halls',
  HOTEL_CONFIG:      STORAGE_PREFIX + 'hotel_config',
  EMPLOYEE_LIST:     STORAGE_PREFIX + 'employee_list',
  USERS:             STORAGE_PREFIX + 'users',
  AUDIT_LOG:          STORAGE_PREFIX + 'audit_log',
  SYNC_CONFLICTS:     STORAGE_PREFIX + 'sync_conflicts',
  RECYCLE_BIN:        STORAGE_PREFIX + 'recycle_bin',
  AUTH:               STORAGE_PREFIX + 'auth',
  LAST_SYNC_TIME:    STORAGE_PREFIX + 'last_sync_time',
  RECENTLY_DELETED:  STORAGE_PREFIX + 'recently_deleted',
  APP_VERSION:       STORAGE_PREFIX + 'app_version',
  SYNC_OP_LOG:       STORAGE_PREFIX + 'op_log',
  SYNC_QUEUE:        STORAGE_PREFIX + 'sync_queue',
};

// ============================================================================
// Firebase 配置 (共用 macau-app 專案, 獨立路徑 taiwan_data/)
// ============================================================================
var TW_FIREBASE_CONFIG = {
  apiKey:             'AIzaSyC3NKqEVUpL-9WYvun7pBbJe8P7T8o4Y74',
  authDomain:         'macau-app.firebaseapp.com',
  databaseURL:        'https://macau-app-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId:          'macau-app',
  storageBucket:      'macau-app.firebasestorage.app',
  messagingSenderId:  '638116698004',
  appId:              '1:638116698004:web:1dcbca626fa229e11f6181',
};

var TW_FIREBASE_SDK_VERSION = '9.23.0';

var FIREBASE_CDN = {
  APP:      'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
  DATABASE: 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js',
  AUTH:     'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js',
};

// ============================================================================
// Firebase 路径 (FB_DATA_ROOT 前缀；dev 建構走 taiwan_data_dev/)
// ============================================================================
var FB_PATH = {
  MEMBERS:        FB_DATA_ROOT + '/members',
  AGENTS:         FB_DATA_ROOT + '/agents',
  SHAREHOLDERS:   FB_DATA_ROOT + '/shareholders',
  TRIPS:          FB_DATA_ROOT + '/trips',
  MEMBER_TXS:     FB_DATA_ROOT + '/memberTxs',
  WALLET_TXS:     FB_DATA_ROOT + '/walletTxs', // v2.0 港幣現鈔錢包流水
  PENDING_EXPS:   FB_DATA_ROOT + '/pendingExps', // v2.1 預支開銷（先記帳後歸屬）
  CATALOG:        FB_DATA_ROOT + '/catalog',      // v2.2.2 品項主檔（常用票券＋預設單價）
  LOANS:          FB_DATA_ROOT + '/loans', // v2.2 港幣借支
  BOOKINGS:       FB_DATA_ROOT + '/bookings',
  SUPPLEMENTS:    FB_DATA_ROOT + '/supplements',
  ARCHIVES:       FB_DATA_ROOT + '/archives',
  VIP_HALLS:      FB_DATA_ROOT + '/vipHalls',
  SETTINGS:       FB_DATA_ROOT + '/settings',
  CLOSED_MONTHS:  FB_DATA_ROOT + '/closedMonths',
  EMPLOYEE_LIST:  FB_DATA_ROOT + '/employeeList',
  EXTRA_INCOME:   FB_DATA_ROOT + '/extraIncome',
  HOTEL_CONFIG:   FB_DATA_ROOT + '/hotelConfig',
  USERS:          FB_DATA_ROOT + '/users',
  AUDIT_LOG:      FB_DATA_ROOT + '/auditLog',
  SYNC_CONFLICTS: FB_DATA_ROOT + '/syncConflicts',
  CLEARED:        FB_DATA_ROOT + '/clearedAt',
  PUSH_TOKENS:    FB_DATA_ROOT + '/pushTokens',
  // #22 APP 更新檢查：管理端寫入 { latestVersion, apkUrl?, note? }，App 啟動/回前台時比對
  APP_INFO:       FB_DATA_ROOT + '/appInfo',
  CONNECTED:      '.info/connected',
};

// ============================================================================
// 事件名称 (Event Bus)
// ============================================================================
var EVENTS = {
  MEMBER_CREATED:    'member:created',
  MEMBER_UPDATED:    'member:updated',
  MEMBER_DELETED:    'member:deleted',
  MEMBERS_LOADED:    'members:loaded',
  AGENT_CREATED:     'agent:created',
  AGENT_UPDATED:     'agent:updated',
  AGENT_DELETED:     'agent:deleted',
  AGENTS_LOADED:     'agents:loaded',
  SHAREHOLDER_CREATED:  'shareholder:created',
  SHAREHOLDER_UPDATED:  'shareholder:updated',
  SHAREHOLDER_DELETED:  'shareholder:deleted',
  SHAREHOLDERS_LOADED:  'shareholders:loaded',
  TRIP_CREATED:      'trip:created',
  TRIP_UPDATED:      'trip:updated',
  TRIP_SEALED:       'trip:sealed',
  TRIPS_LOADED:      'trips:loaded',
  MTX_CREATED:       'mtx:created',
  MTX_UPDATED:       'mtx:updated',
  MTX_DELETED:       'mtx:deleted',
  MTX_LOADED:        'mtx:loaded',
  WALLET_TXS_LOADED: 'walletTxs', // v2.0 港幣現鈔錢包（與 State key 同名，照 memberTxs 慣例）
  PEXP_CREATED:      'pexp:created', // v2.1 預支開銷
  PEXP_UPDATED:      'pexp:updated',
  PEXP_DELETED:      'pexp:deleted',
  PENDING_EXPS_LOADED: 'pendingExps', // v2.1（與 State key 同名）
  CATALOG_CREATED: 'catalog:created', CATALOG_UPDATED: 'catalog:updated', CATALOG_DELETED: 'catalog:deleted', CATALOG_LOADED: 'catalog:loaded', // v2.2.2
  LOAN_CREATED:      'loan:created', // v2.2 港幣借支
  LOAN_UPDATED:      'loan:updated',
  LOAN_DELETED:      'loan:deleted',
  LOANS_LOADED:      'loans', // v2.2（與 State key 同名）
  BOOKING_CREATED:   'booking:created',
  BOOKING_UPDATED:   'booking:updated',
  BOOKING_DELETED:   'booking:deleted',
  BOOKINGS_LOADED:   'bookings:loaded',
  SUPPLEMENT_CREATED:  'supplement:created',
  SUPPLEMENT_UPDATED:  'supplement:updated',
  SUPPLEMENT_DELETED:  'supplement:deleted',
  SETTINGS_UPDATED:  'settings:updated',
  SETTINGS_LOADED:   'settings:loaded',
  HOTEL_CONFIG_LOADED:  'hotelConfig:loaded',
  HOTEL_CONFIG_UPDATED: 'hotelConfig:updated',
  SYNC_START:        'sync:start',
  SYNC_COMPLETE:     'sync:complete',
  SYNC_ERROR:        'sync:error',
  CONNECTION_CHANGED: 'connection:changed',
  PAGE_CHANGED:      'page:changed',
  AUTH_LOGGED_IN:    'auth:logged_in',
  AUTH_LOGGED_OUT:   'auth:logged_out',
  PERMISSIONS_CHANGED: 'permissions:changed',
  USERS_LOADED:      'users:loaded',
  USER_SAVED:        'user:saved',
  USER_DELETED:      'user:deleted',
  AUDIT_LOGGED:      'audit:logged',
  AUDIT_LOADED:      'audit:loaded',
  SYNC_CONFLICT:     'sync:conflict',
  CONFLICTS_CHANGED: 'conflicts:changed',
  RESTORED:          'restore:done',
  TOAST:             'ui:toast',
  LOADING_SHOW:      'ui:loading:show',
  LOADING_HIDE:      'ui:loading:hide',
  MODAL_OPEN:        'ui:modal:open',
  MODAL_CLOSE:       'ui:modal:close',
};

// ============================================================================
// E2.2 State key → 事件名 明確對照表
// 原寫法 EVENTS[key.toUpperCase() + '_LOADED'] 動態組字，拼錯永遠靜默不觸發。
// 本表「逐字保留」動態寫法的實際結果（湊不出 EVENTS 常數的 key 照舊用 key 本身），
// 之後要調整事件名，改這裡即可被建構期驗證涵蓋。
// ============================================================================
var STATE_EVENTS = {
  members:       EVENTS.MEMBERS_LOADED,
  agents:        EVENTS.AGENTS_LOADED,
  shareholders:  EVENTS.SHAREHOLDERS_LOADED,
  trips:         EVENTS.TRIPS_LOADED,
  memberTxs:     'memberTxs',
  walletTxs:     EVENTS.WALLET_TXS_LOADED,
  pendingExps:   EVENTS.PENDING_EXPS_LOADED, // v2.1 預支開銷
  catalog:       EVENTS.CATALOG_LOADED,     // v2.2.2 品項主檔
  loans:         EVENTS.LOANS_LOADED, // v2.2 港幣借支
  bookings:      EVENTS.BOOKINGS_LOADED,
  supplements:   'supplements',
  settings:      EVENTS.SETTINGS_LOADED,
  extraIncome:   'extraIncome',
  hotelConfig:   'hotelConfig',
  archives:      'archives',
  closedMonths:  'closedMonths',
  employeeList:  'employeeList',
  users:         EVENTS.USERS_LOADED,
  auditLog:      EVENTS.AUDIT_LOADED,
  syncConflicts: EVENTS.CONFLICTS_CHANGED,
  recycleBin:   EVENTS.CONFLICTS_CHANGED,
  connected:     'connected',
  syncing:       'syncing',
  currentPage:   'currentPage',
};

// ============================================================================
// 贵宾厅设定
// ============================================================================
var VIP_HALLS = [
  // rate = 退傭(總) = cashRate(現結/盈利) + rebateRate(月退) + guestRate(客人退佣)
  { id: 'lyi', name: '勵盈會', rate: 0.0123, cashRate: 0.0018, guestRate: 0.01, hasMonthlyRebate: true,  rebateRate: 0.0005 },
  { id: 'yub', name: '御匾會', rate: 0.0120, cashRate: 0.0015, guestRate: 0.01, hasMonthlyRebate: true,  rebateRate: 0.0005 },
  { id: 'jm1', name: '金門1',  rate: 0.0123, cashRate: 0.0023, guestRate: 0.01, hasMonthlyRebate: true,  rebateRate: 0 },
  { id: 'jm8', name: '金門8',  rate: 0.0118, cashRate: 0.0018, guestRate: 0.01, hasMonthlyRebate: true,  rebateRate: 0 },
];

// ============================================================================
// 团状态
// ============================================================================
var TRIP_STATUS = {
  ACTIVE:             'active',
  PENDING_SETTLEMENT: 'pending_settlement',
  SEALED:             'sealed',
};

// ============================================================================
// 代理分潤模式
// ============================================================================
var PROFIT_MODE = {
  STANDARD:    'standard',     // 標準模式：現結+月退都進錢池，洗碼計入個人貢獻
  MONTHLY_ONLY:'monthlyOnly',  // 僅月退模式：現結不進錢池，月退用自定費率進錢池，洗碼不計入個人貢獻
};

// ============================================================================
// 订房状态
// ============================================================================
var BOOKING_STATUS = {
  PENDING:    'pending',
  CONFIRMED:  'confirmed',
  CHECKED_IN: 'checked-in',
  CHECKED_OUT:'checked-out',
  CANCELLED:  'cancelled',
};

// ============================================================================
// 订房费用类型
// ============================================================================
var FEE_TYPE = {
  AUTO:     'auto',
  FREE:     'free',
  PAID:     'paid',
  DISCOUNT: 'discount',
};

// ============================================================================
// 會員状态
// ============================================================================
var MEMBER_STATUS = {
  DRAFT:    'draft',
  COMPLETE: 'complete',
};

// ============================================================================
// 体系排序
// ============================================================================
var CASINO_ORDER = ['新濠天地', '新濠影滙', '金沙', '銀河', '永利', '上葡京'];

// ============================================================================
// 页面清单 (10 页)
// ============================================================================
var PAGES = [
  { id: 'page-overview',    name: 'overview',    label: '總覽',       icon: '\uD83D\uDCCA', shortcut: '1' },
  { id: 'page-pending',     name: 'pending',     label: '待結帳',     icon: '\u23F3',       shortcut: '2' },
  { id: 'page-member',      name: 'member',      label: '帳務',       icon: '\uD83D\uDCB3', shortcut: '3' },
  { id: 'page-wallet',      name: 'wallet',      label: '錢包',       icon: '\uD83D\uDCBC' }, // v2.0 港幣現鈔錢包（底部導航）
  { id: 'page-room',        name: 'room',        label: '房務管理',   icon: '\uD83C\uDFE8', shortcut: '4' },
  { id: 'page-shareholder', name: 'shareholder', label: '股東分潤',   icon: '\uD83D\uDCB0', shortcut: '5' },
  { id: 'page-members-mgmt',name: 'membersMgmt', label: '會員管理',   icon: '\u2699\uFE0F', shortcut: '6' },
  { id: 'page-history',     name: 'history',     label: '歷史查詢',   icon: '\uD83D\uDD0D', shortcut: '7' },
  { id: 'page-reports',     name: 'reports',     label: '報表中心',   icon: '\uD83D\uDCC4', shortcut: '8' },
  { id: 'page-settings',    name: 'settings',    label: '系統設定',   icon: '\u2699\uFE0F', shortcut: '0' },
];

// ============================================================================
// 快捷键
// ============================================================================
var SHORTCUTS = [
  { keys: 'Ctrl+1', desc: '總覽' },
  { keys: 'Ctrl+2', desc: '待結帳' },
  { keys: 'Ctrl+3', desc: '帳務' },
  { keys: 'Ctrl+4', desc: '房務管理' },
  { keys: 'Ctrl+5', desc: '股東分潤' },
  { keys: 'Ctrl+6', desc: '會員管理' },
  { keys: 'Ctrl+7', desc: '歷史查詢' },
  { keys: 'Ctrl+8', desc: '報表中心' },
  { keys: 'Ctrl+0', desc: '系統設定' },
  { keys: 'Escape', desc: '關閉彈窗' },
];

// ============================================================================
// 預設酒店配置 (復用 v13/BookingHub 資料)
// ============================================================================
var PRESET_HOTEL_CONFIG = [
  // 金沙
  { casino: '金沙', hotel: '倫敦人名滙', code: 'RK',  room: '名匯普通房',     threshold: 600000 },
  { casino: '金沙', hotel: '倫敦人名滙', code: 'LS2', room: '名匯一房一廳',   threshold: 1500000 },
  { casino: '金沙', hotel: '倫敦人名滙', code: 'N2B', room: '名匯兩房一廳',   threshold: 4000000 },
  { casino: '金沙', hotel: '倫敦人',     code: 'KC',  room: '路易套房',       threshold: 600000 },
  { casino: '金沙', hotel: '倫敦人',     code: 'KS',  room: '溫莎套房',       threshold: 1200000 },
  { casino: '金沙', hotel: '御園',       code: 'CM1', room: '御園一房一廳',   threshold: 1500000 },
  { casino: '金沙', hotel: '御園',       code: 'CK2', room: '御園兩房一廳',   threshold: 4000000 },
  // 新濠天地
  { casino: '新濠天地', hotel: '摩珀斯', code: 'PK',  room: '摩珀斯豪華客房(大床)', threshold: 800000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'PT',  room: '摩珀斯豪華客房(雙床)', threshold: 800000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'CPK', room: '摩珀斯行政豪華(大床)', threshold: 1000000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'CPT', room: '摩珀斯行政豪華(雙床)', threshold: 1000000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'PS',  room: '摩珀斯豪華套房',       threshold: 1200000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'ES',  room: '摩珀斯尊尚套房',       threshold: 2000000 },
  { casino: '新濠天地', hotel: '摩珀斯', code: 'S1',  room: '摩珀斯尊致套房',       threshold: 10000000 },
  { casino: '新濠天地', hotel: '頣居',   code: 'PK_N',room: '頣居尊尚客房(大床)',   threshold: 800000 },
  { casino: '新濠天地', hotel: '頣居',   code: 'PQ',  room: '頣居尊尚雙床',         threshold: 800000 },
  { casino: '新濠天地', hotel: '頣居',   code: 'DS',  room: '頣居豪華套房',         threshold: 1200000 },
  { casino: '新濠天地', hotel: '頣居',   code: 'PS_N',room: '頣居尊尚套房',         threshold: 2000000 },
  { casino: '新濠天地', hotel: '頣居',   code: 'V1',  room: '頣居套房',             threshold: 10000000 },
  { casino: '新濠天地', hotel: '君悅',   code: 'DLXK',room: '君悅豪華客房(大床)',   threshold: 300000 },
  { casino: '新濠天地', hotel: '君悅',   code: 'DLX1',room: '君悅豪華客房(雙床)',   threshold: 300000 },
  { casino: '新濠天地', hotel: '君悅',   code: 'GRSK',room: '君悅套房(大床)',       threshold: 500000 },
  // 新濠影滙
  { casino: '新濠影滙', hotel: '明星滙', code: 'CRK', room: '明星滙經典(大床)',     threshold: 300000 },
  { casino: '新濠影滙', hotel: '明星滙', code: 'CRT', room: '明星滙經典雙床',       threshold: 300000 },
  { casino: '新濠影滙', hotel: '明星滙', code: 'CDK', room: '明星滙豪華(大床)',     threshold: 300000 },
  { casino: '新濠影滙', hotel: '巨星滙', code: 'SDK', room: '巨星滙尊貴(大床)',     threshold: 600000 },
  { casino: '新濠影滙', hotel: '巨星滙', code: 'SDT', room: '巨星滙尊貴(雙床)',     threshold: 600000 },
  { casino: '新濠影滙', hotel: '巨星滙', code: 'SPS', room: '巨星滙行政套房',       threshold: 2000000 },
  { casino: '新濠影滙', hotel: '映星滙', code: 'EDK', room: '映星滙套房(大床)',     threshold: 600000 },
  { casino: '新濠影滙', hotel: '映星滙', code: 'EDT', room: '映星滙套房(雙床)',     threshold: 600000 },
  { casino: '新濠影滙', hotel: '映星滙', code: 'EG1', room: '映星滙悠然套房',       threshold: 1000000 },
  { casino: '新濠影滙', hotel: '映星滙', code: 'ES1', room: '映星滙華麗套房',       threshold: 2000000 },
  // 永利
  { casino: '永利', hotel: '永利皇宮',   code: 'CRK',  room: '大床',           threshold: 1600000 },
  { casino: '永利', hotel: '永利皇宮',   code: 'CRT',  room: '雙床',           threshold: 1800000 },
  { casino: '永利', hotel: '永利皇宮',   code: 'LCRK', room: '湖景大床',       threshold: 2200000 },
  { casino: '永利', hotel: '永利皇宮',   code: 'LCRT', room: '湖景雙床',       threshold: 2400000 },
  { casino: '永利', hotel: '永利皇宮',   code: 'EXEC', room: '行政套房',       threshold: 1900000 },
  // 銀河
  { casino: '銀河', hotel: '銀河',       code: 'GK',   room: '銀河大床',       threshold: 800000 },
  { casino: '銀河', hotel: '銀河',       code: 'GT',   room: '銀河雙床',       threshold: 800000 },
  { casino: '銀河', hotel: '悅榕庄',     code: 'BK',   room: '悅榕庄套房',     threshold: 2000000 },
  // 上葡京
  { casino: '上葡京', hotel: '上葡京',   code: 'SK',   room: '上葡京大床',     threshold: 600000 },
  { casino: '上葡京', hotel: '上葡京',   code: 'ST',   room: '上葡京雙床',     threshold: 600000 },
];

// ============================================================================
// 預設系統參數
// ============================================================================
var DEFAULT_SETTINGS = {
  monthlyRates: {
    '2026-07': { exchangeRate: 4.2, shareholderRate: 4.2 }
  },
  vipHalls: VIP_HALLS,
  roomFeeRate: 150,
  extraProfit: 0,
  ticketPrices: {
    waterDance: [
      { name: '貴賓席', guestPrice: 1298, ourPrice: 1038 },
      { name: '豪華席', guestPrice: 1098, ourPrice: 878 },
      { name: '尊享席', guestPrice: 898, ourPrice: 718 },
      { name: '景觀席', guestPrice: 698, ourPrice: 558 },
    ],
    waterPark: { guestPrice: 450, ourPrice: 406 },
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    APP: APP, CONFIG: CONFIG, STORAGE_KEYS: STORAGE_KEYS,
    FB_DATA_ROOT: FB_DATA_ROOT, STORAGE_PREFIX: STORAGE_PREFIX,
    TW_FIREBASE_CONFIG: TW_FIREBASE_CONFIG, TW_FIREBASE_SDK_VERSION: TW_FIREBASE_SDK_VERSION,
    FIREBASE_CDN: FIREBASE_CDN, FB_PATH: FB_PATH, EVENTS: EVENTS, STATE_EVENTS: STATE_EVENTS,
    VIP_HALLS: VIP_HALLS, PROFIT_MODE: PROFIT_MODE, TRIP_STATUS: TRIP_STATUS, BOOKING_STATUS: BOOKING_STATUS,
    FEE_TYPE: FEE_TYPE, MEMBER_STATUS: MEMBER_STATUS, CASINO_ORDER: CASINO_ORDER,
    PAGES: PAGES, SHORTCUTS: SHORTCUTS, PRESET_HOTEL_CONFIG: PRESET_HOTEL_CONFIG,
    DEFAULT_SETTINGS: DEFAULT_SETTINGS,
  };
}



// === src/core/datetime.js ===
/**
 * core/datetime.js — 台灣時間（UTC+8）日期工具
 * 依赖: 无
 *
 * 所有「今天日期」「本月月份」的判斷一律使用本模組，
 * 禁止用 new Date().toISOString()（UTC，台灣凌晨 0–8 點會差一天）
 * 也禁止用裝置本機時間（裝置時區設定錯誤會跟著錯）。
 *
 * 原理：UTC 毫秒 + 8 小時偏移後取 UTC 字串，即為台灣當地時間。
 */
var TWDate = (function() {
  var TW_OFFSET_MS = 8 * 60 * 60 * 1000;

  // 將時間點轉為台灣時間的 ISO 完整字串
  function toTWISOString(ms) {
    return new Date(ms + TW_OFFSET_MS).toISOString();
  }

  // 今天（台灣時間）→ 'YYYY-MM-DD'
  function todayStr(nowMs) {
    return toTWISOString(nowMs === undefined ? Date.now() : nowMs).slice(0, 10);
  }

  // 本月（台灣時間）→ 'YYYY-MM'
  function monthStr(nowMs) {
    return toTWISOString(nowMs === undefined ? Date.now() : nowMs).slice(0, 7);
  }

  // 任意時間戳/日期字串 → 台灣時間 'YYYY-MM-DD'（顯示用）
  function dateStrFrom(ts) {
    var ms = (ts instanceof Date) ? ts.getTime() : new Date(ts).getTime();
    if (isNaN(ms)) return '';
    return toTWISOString(ms).slice(0, 10);
  }

  return {
    toTWISOString: toTWISOString,
    todayStr: todayStr,
    monthStr: monthStr,
    dateStrFrom: dateStrFrom,
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TWDate;
}


// === src/core/escape.js ===
/**
 * core/escape.js — E2.4 HTML escape 統一工具
 * 依赖: 无
 *
 * 用法：頁面以字串拼接 innerHTML 時，所有「使用者可輸入的自由文字」
 * （會員/代理/股東名稱、備註、描述、客人姓名、酒店/房型等）
 * 一律先過 esc()，防止名稱含 < > " ' 時破版或注入（XSS）。
 *
 * 注意：confirm() / alert() 等純文字場合「不需要」escape（跳脫反而顯示 &lt; 等符號）。
 * 數字與系統產生的 id（M+timestamp、T+日期+序號）無需 escape。
 */
var esc = (function() {
  var _map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  var _re = /[&<>"']/g;

  function esc(value) {
    if (value === null || value === undefined) return '';
    return String(value).replace(_re, function(c) { return _map[c]; });
  }
  return esc;
})();

// 別名：部分頁面原名使用 escHtml — 統一由這裡提供，移除各頁複製貼上的本地版本
var escHtml = esc;
// v1.8.0 屬性值跳脫別名（esc 已含引號，屬性安全）
var escAttr = esc;
// v1.8.0 JS 內嵌字串跳脫（onclick="fn('...')" 情境：先 & 再反斜線再引號）
function escJs(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { esc: esc, escHtml: escHtml };
}


// === src/core/events.js ===
/**
 * core/events.js — Event Bus (发布订阅)
 * 依赖: 无
 */
var EventBus = (function() {
  var listeners = {};
  function on(event, fn) {
    (listeners[event] = listeners[event] || []).push(fn);
  }
  function off(event, fn) {
    if (!listeners[event]) return;
    listeners[event] = listeners[event].filter(function(f) { return f !== fn; });
  }
  function emit(event, data) {
    if (!listeners[event]) return;
    listeners[event].forEach(function(fn) {
      try { fn(data); } catch(e) { console.error('[EventBus] ' + event, e); }
    });
  }
  return { on: on, off: off, emit: emit };
})();


// === src/core/state.js ===
/**
 * core/state.js — 全局状态管理
 * 依赖: core/constants.js, core/events.js
 */
var State = (function() {
  var _data = {
    members: [],
    agents: [],
    shareholders: [],
    trips: [],
    memberTxs: [],
    walletTxs: [], // v2.0 港幣現鈔錢包流水
    pendingExps: [], // v2.1 預支開銷
    catalog:     [], // v2.2.2 品項主檔（常用票券＋預設單價）
    loans: [], // v2.2 港幣借支
    bookings: [],
    supplements: [],
    settings: null,
    extraIncome: [],
    archives: [],
    closedMonths: [],
    hotelConfig: [],
    auditLog: [],
    currentPage: 'overview',
    connected: false,
    syncing: false,
  };

  function get(key) { return _data[key]; }
  function set(key, val) {
    _data[key] = val;
    // E2.2: 明確對照表取代動態組字（原 EVENTS[key.toUpperCase()+'_LOADED'] 拼錯會靜默失敗）
    EventBus.emit(STATE_EVENTS[key] || key, val);
  }
  function getAll() { return _data; }

  return { get: get, set: set, getAll: getAll };
})();


// === src/core/store.js ===
/**
 * core/store.js — localStorage 存取
 * 依赖: 无
 *
 * Phase 1D / 1.14 寫入保護：所有寫入走「計算→驗證→寫入→回讀核對」
 *  - write() 序列化→寫入→回讀比對字串→不一致即回滾舊值並回報（onWriteFail）
 *  - 攔截：配額超限(QuotaExceededError)、序列化失敗(循環參考)、回讀不一致（併發分頁/外部竄改）
 *  - 不擋「內容相同」的寫入（回讀等於序列化即視為成功）
 */
var Store = (function() {
  var _onWriteFail = null;

  function _fail(key, reason) {
    console.error('[Store] 寫入失敗(' + reason + '): ' + key);
    if (typeof _onWriteFail === 'function') {
      try { _onWriteFail(key, reason); } catch (e) { /* 回報失敗不影響主流程 */ }
    }
  }

  function read(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch(e) {
      console.error('[Store] read ' + key, e);
      return null;
    }
  }

  /**
   * 1.14 驗證寫入：序列化 → 寫入 → 回讀比對 → 不一致回滾
   * 回傳 true = 寫入並回讀核對成功；false = 失敗（已回滾至舊值）
   */
  function write(key, data) {
    var prev = null;
    try { prev = localStorage.getItem(key); } catch (e) { prev = null; }

    var serialized;
    try { serialized = JSON.stringify(data); }
    catch (e) { _fail(key, 'serialize'); return false; }

    try { localStorage.setItem(key, serialized); }
    catch (e) { _fail(key, (e && e.name === 'QuotaExceededError') ? 'quota' : 'io'); return false; }

    var readback = null;
    try { readback = localStorage.getItem(key); } catch (e) { readback = null; }

    if (readback !== serialized) {
      // 回讀不一致 → 回滾至舊值（保留舊值不讓壞資料留著）
      try {
        if (prev !== null) localStorage.setItem(key, prev);
        else localStorage.removeItem(key);
      } catch (e) { /* 回滾失敗也無能為力 */ }
      _fail(key, 'verify');
      return false;
    }
    return true;
  }

  function remove(key) {
    try { localStorage.removeItem(key); } catch (e) {}
  }

  function readArray(key) {
    var data = read(key);
    return Array.isArray(data) ? data : [];
  }

  function writeArray(key, arr) {
    return write(key, arr || []);
  }

  return {
    read: read,
    write: write,
    remove: remove,
    readArray: readArray,
    writeArray: writeArray,
    onWriteFail: function(fn) { _onWriteFail = typeof fn === 'function' ? fn : null; },
  };
})();


// === src/core/schema.js ===
/**
 * core/schema.js — E2.3 資料 schema 驗證層
 * 依赖: 无
 *
 * 職責：在 data/*.js 的 create()/update() 入口驗證欄位型別，
 * 壞資料（金額非數字、日期格式錯、必填缺漏）當場被擋，不流入計算與雲端。
 *
 * 設計原則（避免「驗證過嚴擋掉舊資料」）：
 *  - 只驗證「列出」的欄位；未列出的欄位一律放行（寬容舊資料/擴充欄位）
 *  - 數字欄位接受數字或可轉數字的字串（自動 normalize 轉正，不擋）
 *  - save()/同步合併路徑「不」呼叫本層（舊資料不擋）；
 *    只有「新寫入」（create/update）走嚴格驗證
 *  - 違規透過 onViolation 掛鉤回報（app.js 啟動時接 Toast），本模組零 UI 依賴
 *
 * 型別代號：
 *  's' 字串 | 'n' 數字 | 'b' 布林 | 'a' 陣列 | 'd' 日期字串 YYYY-MM-DD
 *  '!' 後綴 = 必填（不得為 undefined/null/空字串）
 */
var Schema = (function() {
  'use strict';

  var _onViolation = null;

  // 各集合欄位規格（保守列舉 — 只列「壞了會影響計算」的欄位）
  var COLLECTIONS = {
    members: {
      id: 's!', name: 's', casinoId: 's', agentId: 's', shareholderId: 's',
      rate1: 'n', rebate1: 'n', rate2: 'n', rebate2: 'n',
      status: 's', active: 'b', createdAt: 'n',
    },
    agents: {
      id: 's!', name: 's', shareholderId: 's',
      profitMode: 's', active: 'b', createdAt: 'n',
    },
    shareholders: {
      id: 's!', name: 's', shares: 'n', active: 'b', createdAt: 'n',
    },
    trips: {
      id: 's!', shareholderId: 's', agentId: 's',
      startDate: 'd', endDate: 'd', status: 's',
      visitDate: 'd', hotelNote: 's', // v1.9.0 預計前往日 + 預計酒店（客戶通知階段）
      label: 's', // v2.1 團備註名稱（例：猴哥團東哥——同上級多團並行時區分開銷歸屬）
      hallIds: 'a', memberIds: 'a', notes: 's', sealedMonth: 's',
    },
    memberTxs: {
      id: 's!', tripId: 's!', memberId: 's!', createdAt: 'n',
      source: 's',
    },
    walletTxs: { // v2.0 港幣現鈔錢包流水
      id: 's!', type: 's', amountHKD: 'n', date: 'd',
      refId: 's', tripId: 's', memberId: 's', category: 's', note: 's',
    },
    pendingExps: { // v2.1 預支開銷（先記帳後歸屬）；memberId 為 v2.2.1 備註會員（純顯示，帶入帳務時仍可細分給任何人）
      id: 's!', tripId: 's!', date: 'd', note: 's',
      agentId: 's', shareholderId: 's', memberId: 's', rows: 'a',
    },
    loans: { // v2.2 港幣借支（純現金借貸，不與帳務回碼/上下分抵銷）
      id: 's!', memberId: 's', date: 'd', note: 's',
      amountHKD: 'n', repayments: 'a', // repayments: [{ date, amountHKD, note }]
    },
    bookings: {
      id: 's!', tripId: 's', memberId: 's', guestName: 's',
      agentId: 's', shareholderId: 's',
      checkIn: 'd', checkOut: 'd', nights: 'n',
      threshold: 'n', discountRate: 'n', chargeGuest: 'n', chargeCompany: 'n',
      status: 's', feeManualOverride: 'b',
    },
    supplements: {
      id: 's!', tripId: 's!', memberId: 's', agentId: 's', shareholderId: 's',
      type: 's', description: 's',
      amountHK: 'n', exchangeRate: 'n', amountNT: 'n',
    },
    extraIncome: {
      id: 's!', month: 's', description: 's', amountHK: 'n', type: 's',
    },
    hotelConfig: {
      id: 's!', casino: 's', hotel: 's', code: 's', room: 's', threshold: 'n',
    },
    users: {
      id: 's!', email: 's!', name: 's!', role: 's!',
      enabled: 'b', createdAt: 'n',
    },
    auditLog: {
      id: 's!', actorId: 's', actorName: 's', module: 's!', action: 's!',
      entityId: 's', summary: 's', at: 'n',
    },
  };

  var DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

  function isEmpty(v) {
    return v === undefined || v === null || v === '';
  }

  function isNumeric(v) {
    return typeof v === 'number' ? isFinite(v)
      : (typeof v === 'string' && v.trim() !== '' && isFinite(Number(v)));
  }

  /**
   * normalize：把「可轉數字的字串」就地轉成數字（表單 parseFloat 缺漏時的自動補救）。
   * 回傳 record 本體（就地修改）。
   */
  function normalize(collection, record) {
    var spec = COLLECTIONS[collection];
    if (!spec || !record || typeof record !== 'object') return record;
    Object.keys(spec).forEach(function(f) {
      if (spec[f] === 'n' && typeof record[f] === 'string' && isNumeric(record[f])) {
        record[f] = Number(record[f]);
      }
    });
    return record;
  }

  /**
   * validate：回傳錯誤字串陣列（空陣列 = 通過）。不做任何修改。
   */
  function validate(collection, record) {
    var spec = COLLECTIONS[collection];
    var errs = [];
    if (!spec) return errs; // 未登記的集合 → 放行（寬容）
    if (!record || typeof record !== 'object') {
      return ['記錄非物件: ' + String(record)];
    }
    Object.keys(spec).forEach(function(f) {
      var rule = spec[f];
      var required = rule.charAt(rule.length - 1) === '!';
      var type = required ? rule.slice(0, -1) : rule;
      var v = record[f];

      if (isEmpty(v)) {
        if (required) errs.push(collection + '.' + f + ' 為必填，不得為空');
        return; // 非必填的空值一律放行（endDate=null、notes='' 皆合法）
      }
      switch (type) {
        case 's':
          if (typeof v !== 'string') errs.push(collection + '.' + f + ' 應為字串，實際 ' + typeof v);
          break;
        case 'n':
          if (!isNumeric(v)) errs.push(collection + '.' + f + ' 應為數字，實際 ' + JSON.stringify(v));
          else if (typeof v === 'string') record[f] = Number(v); // 順手 normalize
          break;
        case 'b':
          if (typeof v !== 'boolean') errs.push(collection + '.' + f + ' 應為布林，實際 ' + typeof v);
          break;
        case 'a':
          if (!Array.isArray(v)) errs.push(collection + '.' + f + ' 應為陣列，實際 ' + typeof v);
          break;
        case 'd':
          if (typeof v !== 'string' || !DATE_RE.test(v)) {
            errs.push(collection + '.' + f + ' 應為 YYYY-MM-DD 日期，實際 ' + JSON.stringify(v));
          }
          break;
      }
    });
    return errs;
  }

  /**
   * sanitize：入口閘門（create/update 用）。
   * normalize + validate；有錯 → 回報（console + onViolation 掛鉤）並回傳 false（擋下寫入）。
   */
  function sanitize(collection, record) {
    normalize(collection, record);
    var errs = validate(collection, record);
    if (errs.length) {
      var msg = errs.join('；');
      console.error('[Schema] 寫入被擋（' + collection + '）: ' + msg);
      if (typeof _onViolation === 'function') {
        try { _onViolation(collection, errs); } catch (e) { /* 回報失敗不影響主流程 */ }
      }
      return false;
    }
    return true;
  }

  /** 大批資料體檢（審計/測試用，不擋寫入）：回傳 { collection, id, errors } 清單 */
  function validateCollection(collection, arr) {
    var problems = [];
    (arr || []).forEach(function(rec) {
      var errs = validate(collection, rec);
      if (errs.length) problems.push({ collection: collection, id: rec && rec.id, errors: errs });
    });
    return problems;
  }

  return {
    sanitize: sanitize,
    validate: validate,
    normalize: normalize,
    validateCollection: validateCollection,
    onViolation: function(fn) { _onViolation = fn; },
    collections: COLLECTIONS,
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    sanitize: Schema.sanitize, validate: Schema.validate,
    normalize: Schema.normalize, validateCollection: Schema.validateCollection,
    onViolation: Schema.onViolation, collections: Schema.collections,
  };
}


// === src/core/permissions.js ===
/**
 * core/permissions.js — Phase 1A 角色权限矩阵 + 權限 API（UI/Toast 零依賴）
 * 5 預設角色 + 逐用戶微調（逐頁 none/read/write + 特殊權限）。
 * 資料層寫入閘門：canWriteCollection(collection) — 未登入（無 session）時放行，
 * 維持 Node 測試與匯入合併路徑現行為。
 * 依赖: 无
 */
var Perm = (function() {
  var MODE_RANK = { none: 0, read: 1, write: 2 };

  // 全部可管制頁面（與 renderMap / PAGES 對齊；fees/profit/agent 不在側欄但可 Router.go）
  var PAGE_KEYS = [
    'overview', 'pending', 'member', 'wallet', 'room', 'fees', 'profit',
    'agent', 'shareholder', 'membersMgmt', 'history', 'reports', 'settings', 'auditLog',
  ];

  // 特殊權限（與業務動作對應，非頁面）
  var SPECIAL_KEYS = ['export', 'backup', 'userMgmt', 'settingsEdit', 'unlockArchived'];

  function _allPages(mode) {
    var m = {};
    PAGE_KEYS.forEach(function(p) { m[p] = mode; });
    return m;
  }
  function _allSpecials(v) {
    var m = {};
    SPECIAL_KEYS.forEach(function(s) { m[s] = v; });
    return m;
  }

  // ============================================================================
  // 5 預設角色（2026-08-20 拍板）
  // ============================================================================
  var ROLES = {
    super_admin: {
      label: '超級管理員',
      pages: _allPages('write'),
      special: _allSpecials(true),
    },
    admin: {
      label: '管理員',
      pages: _allPages('write'),
      special: _allSpecials(true), // 與超管差異：不可編輯/停用 super_admin 帳號（帳號管理頁把關）
    },
    accountant: {
      label: '會計',
      pages: {
        overview: 'read', pending: 'write', member: 'write', wallet: 'write', room: 'read',
        fees: 'write', profit: 'write', agent: 'read', shareholder: 'write',
        membersMgmt: 'write', history: 'write', settings: 'read',
      },
      special: { export: true },
    },
    room: {
      label: '房務',
      pages: {
        overview: 'read', pending: 'read', member: 'read', room: 'write',
        history: 'read',
      },
      special: {},
    },
    staff: {
      label: '員工',
      pages: {
        /* v2.4.9 員工角色（9/1 上線）：僅總覽/帳務/會員管理/房務/錢包，且可登錄編輯刪除 */
        overview: 'read',
        member: 'write', membersMgmt: 'write', room: 'write', wallet: 'write',
      },
      special: {},
    },
    viewer: {
      label: '唯讀',
      pages: Object.assign(_allPages('read'), { auditLog: 'none' }),
      special: {},
    },
  };

  // ============================================================================
  // 集合 → 擁有頁面對照（資料層寫入閘門用；任一擁有頁面有 write 即放行）
  // ============================================================================
  var COLLECTION_PAGES = {
    members:       ['member', 'membersMgmt'],
    memberTxs:     ['member', 'membersMgmt'],
    walletTxs:     ['wallet'], // v2.0 港幣現鈔錢包
    pendingExps:   ['member'], // v2.1 預支開銷（帳務頁操作，隨帳務權限）
    catalog:       ['member'], // v2.2.2 品項主檔（員工常用，隨會員頁權限）
    loans:         ['wallet'], // v2.2 港幣借支（錢包頁操作）
    trips:         ['member', 'pending'],
    supplements:   ['fees', 'member'],
    bookings:      ['room', 'pending'],
    agents:        ['agent'],
    shareholders:  ['shareholder'],
    settings:      ['settings'],
    extraIncome:   ['settings'],
    hotelConfig:   ['settings'],
    employeeList:  ['settings'],
    users:         ['settings'],
  };

  var _session = null;      // 目前登入者 { uid, email, name, role, permissions, ... }
  var _pagePerms = null;    // 合併後的逐頁權限
  var _specials = null;     // 合併後的特殊權限
  var _onWriteDenied = null;

  function _mode(v) {
    return MODE_RANK.hasOwnProperty(v) ? v : 'none';
  }

  // 合併角色預設 + 用戶覆寫（覆寫值必須合法，否則忽略）
  function _buildPerms(role, overrides) {
    var base = ROLES[role];
    var pages, specials;
    if (!base) {
      // 未知角色 → 全部關閉（fail closed）
      pages = _allPages('none');
      specials = _allSpecials(false);
    } else {
      pages = Object.assign({}, base.pages);
      specials = Object.assign({}, base.special);
    }
    if (overrides && typeof overrides === 'object') {
      var op = overrides.pages || {};
      PAGE_KEYS.forEach(function(p) {
        if (op[p] !== undefined) pages[p] = _mode(op[p]);
      });
      var os = overrides.special || {};
      SPECIAL_KEYS.forEach(function(s) {
        if (typeof os[s] === 'boolean') specials[s] = os[s];
      });
    }
    return { pages: pages, specials: specials };
  }

  function setSession(user) {
    _session = user ? {
      uid: user.uid || user.id || '',
      email: user.email || '',
      name: user.name || '',
      role: user.role || '',
    } : null;
    var built = _buildPerms(user && user.role, user && user.permissions);
    _pagePerms = built.pages;
    _specials = built.specials;
  }

  function clear() {
    _session = null;
    _pagePerms = null;
    _specials = null;
  }

  function hasSession() { return _session !== null; }
  function sessionUser() { return _session; }

  function can(page, mode) {
    var need = MODE_RANK[mode] !== undefined ? mode : 'read';
    if (!_pagePerms) return true; // 無 session（未登入）→ 放行（UI 由 Router/登入流程把關）
    var have = _pagePerms[page] !== undefined ? _pagePerms[page] : 'none';
    return MODE_RANK[have] >= MODE_RANK[need];
  }

  function canWrite(page) { return can(page, 'write'); }
  function canRead(page) { return can(page, 'read'); }

  function canSpecial(name) {
    if (!_specials) return true; // 無 session → 放行
    return _specials[name] === true;
  }

  function canManageUsers() {
    // users 集合寫入另需 userMgmt 特殊權限（新增/停用/改角色帳號管理動作）
    if (!_session) return true;
    return canSpecial('userMgmt');
  }

  // 資料層寫入閘門：集合對應任一擁有頁面具 write 即放行
  function canWriteCollection(collection) {
    if (!_pagePerms) return true; // 未登入（Node 測試/合併路徑）→ 放行
    var pages = COLLECTION_PAGES[collection];
    if (!pages) return true; // 未登記的集合 → 放行（保守不擋未知）
    for (var i = 0; i < pages.length; i++) {
      if (canWrite(pages[i])) return true;
    }
    return false;
  }

  // 違規回報掛鉤（app.js 啟動時接 Toast — 權限層零 UI 依賴）
  function onWriteDenied(fn) { _onWriteDenied = typeof fn === 'function' ? fn : null; }
  function notifyWriteDenied(collection) {
    if (typeof _onWriteDenied === 'function') {
      try { _onWriteDenied(collection); } catch (e) {}
    }
  }

  // 供 UI 顯示／測試檢查
  function effectivePerms() {
    return { pages: Object.assign({}, _pagePerms), specials: Object.assign({}, _specials) };
  }
  function roleLabel(role) { return ROLES[role] ? ROLES[role].label : (role || '未知角色'); }
  function roleIds() { return Object.keys(ROLES); }
  function pageKeys() { return PAGE_KEYS.slice(); }
  function specialKeys() { return SPECIAL_KEYS.slice(); }

  return {
    setSession: setSession,
    clear: clear,
    hasSession: hasSession,
    sessionUser: sessionUser,
    can: can,
    canRead: canRead,
    canWrite: canWrite,
    canSpecial: canSpecial,
    canManageUsers: canManageUsers,
    canWriteCollection: canWriteCollection,
    onWriteDenied: onWriteDenied,
    notifyWriteDenied: notifyWriteDenied,
    effectivePerms: effectivePerms,
    roleLabel: roleLabel,
    roleIds: roleIds,
    pageKeys: pageKeys,
    specialKeys: specialKeys,
    ROLES: ROLES,
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Perm;
}


// === src/core/router.js ===
/**
 * core/router.js — 页面路由
 * 依赖: core/constants.js, core/events.js, core/permissions.js
 */
var Router = (function() {
  var _current = 'overview';
  var _history = [];      // v1.8.0 返回堆疊（邊緣滑動返回用）
  var _suppressPush = false;

  function go(pageName) {
    // Phase 1A：頁面讀取權限攔截（未登入放行 — 登入流程另有把關）
    if (typeof Perm !== 'undefined' && Perm.hasSession() && !Perm.can(pageName, 'read')) {
      if (typeof window !== 'undefined' && window.Toast) {
        window.Toast.error('您的角色無權限存取此頁面');
      }
      return;
    }
    var page = PAGES.find(function(p) { return p.name === pageName; });
    var pageId = page ? page.id : 'page-' + pageName;

    // v1.8.0 記錄返回堆疊（同頁重複 go 不記）
    if (!_suppressPush && pageName !== _current) _history.push(_current);
    _current = pageName;

    document.querySelectorAll('.page-section').forEach(function(el) { el.classList.remove('active'); });
    var target = document.getElementById(pageId);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-item').forEach(function(el) { el.classList.remove('active'); });
    // v1.4.0：同名 data-page 可能同時存在於側欄與手機標籤列，全部一起高亮
    document.querySelectorAll('[data-page="' + pageName + '"]').forEach(function(el) { el.classList.add('active'); });

    // v1.4.0：手機底部標籤列 — 次要頁面時高亮「更多」；切頁自動收起選單
    if (typeof closeMoreSheet === 'function') closeMoreSheet();
    var tabBar = document.getElementById('app-tabbar');
    if (tabBar && !tabBar.querySelector('.tab-btn.active')) {
      var moreBtn = tabBar.querySelector('[data-page="__more"]');
      if (moreBtn) moreBtn.classList.add('active');
    }

    EventBus.emit(EVENTS.PAGE_CHANGED, pageName);

    if (typeof window !== 'undefined' && window.onPageChange) {
      window.onPageChange(pageName);
    }
  }

  function getCurrent() { return _current; }

  // v1.8.0 返回上一頁（邊緣滑動返回用）
  function back() {
    var prev = _history.length > 0 ? _history.pop() : 'overview';
    _suppressPush = true;
    try { go(prev); } finally { _suppressPush = false; }
  }

  return { go: go, getCurrent: getCurrent, back: back };
})();


// === src/calc/round.js ===
/**
 * calc/round.js — ROUNDDOWN 精度函数
 * 依赖: 无
 * 照搬 Excel ROUNDDOWN 行为：往零方向截断
 */

function roundDown(value, digits) {
  if (value === 0 || isNaN(value)) return 0;
  var factor = Math.pow(10, -digits);
  return Math.trunc(value / factor) * factor;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { roundDown: roundDown };
}


// === src/calc/member.js ===
/**
 * calc/member.js — 會員帐务公式（照搬試算表）
 * 依赖: calc/round.js
 * 不碰 DOM/Firebase
 */

// 上下分 = 回码 - 出码
function calcUpDown(backCode, outCode) {
  return (backCode || 0) - (outCode || 0);
}

// 两道验证：比对客上/客下
function verifyUpDown(upDown, customerUp, customerDown) {
  var tolerance = 0.01;
  if (customerUp && customerUp > 0) {
    var diff = Math.abs(Math.abs(upDown) - customerUp);
    return diff <= tolerance ? 'verified' : 'pending_review';
  }
  if (customerDown && customerDown > 0) {
    var diff2 = Math.abs(Math.abs(upDown) - customerDown);
    return diff2 <= tolerance ? 'verified' : 'pending_review';
  }
  return 'verified';
}

// NT输赢 = 上下分 × 倍率1 + 上下分 × 倍率2
function calcNtResult(upDown, rate1, rate2) {
  return upDown * (rate1 || 0) + upDown * (rate2 || 0);
}

// 退佣1 = 洗码 × 倍率1 × 返水1
function calcCommission1(washCode, rate1, rebate1) {
  return (washCode || 0) * (rate1 || 0) * (rebate1 || 0);
}

// 退佣2 = 洗码 × 倍率2 × 返水2
function calcCommission2(washCode, rate2, rebate2) {
  return (washCode || 0) * (rate2 || 0) * (rebate2 || 0);
}

// 开销NT = Σ(amountHK × exchangeRate) 四捨五入
// v1.9.5 標記 absorbed（代理吸收）的開銷不計入——不從會員交收扣除，由代理自行負擔
function calcExpensesNT(expenses) {
  if (!expenses || !expenses.length) return 0;
  var total = expenses.reduce(function(sum, e) {
    if (e.absorbed) return sum;
    return sum + (e.amountHK || 0) * (e.exchangeRate || 0);
  }, 0);
  return Math.round(total);
}

// v1.9.5 代理吸收開銷NT（單獨列示，向上級交代由代理負擔的金額）
function calcAbsorbedNT(expenses) {
  if (!expenses || !expenses.length) return 0;
  var total = expenses.reduce(function(sum, e) {
    if (!e.absorbed) return sum;
    return sum + (e.amountHK || 0) * (e.exchangeRate || 0);
  }, 0);
  return Math.round(total);
}

// 完整计算链
function calcMemberTx(input) {
  var upDown = calcUpDown(input.backCode, input.outCode);
  var ntResult = calcNtResult(upDown, input.rate1, input.rate2);
  var comm1 = calcCommission1(input.washCode, input.rate1, input.rebate1);
  var comm2 = calcCommission2(input.washCode, input.rate2, input.rebate2);
  var subtotal = ntResult + comm1 + comm2;
  var expensesNT = calcExpensesNT(input.expenses);
  var absorbedNT = calcAbsorbedNT(input.expenses); // v1.9.5 代理吸收（不扣會員交收）
  // 總交收NT = 小計 - 開銷NT（代理吸收的不扣）
  var totalSettlement = subtotal - expensesNT;
  var settlementAmount = roundDown(totalSettlement, -2);
  var verifyStatus = verifyUpDown(upDown, input.customerUp, input.customerDown);

  return {
    upDown: upDown,
    ntResult: ntResult,
    commission1: comm1,
    commission2: comm2,
    subtotal: subtotal,
    expensesNT: expensesNT,
    absorbedNT: absorbedNT,
    totalSettlement: totalSettlement,
    settlementAmount: settlementAmount,
    verifyStatus: verifyStatus,
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calcUpDown: calcUpDown,
    verifyUpDown: verifyUpDown,
    calcNtResult: calcNtResult,
    calcCommission1: calcCommission1,
    calcCommission2: calcCommission2,
    calcExpensesNT: calcExpensesNT,
    calcAbsorbedNT: calcAbsorbedNT,
    calcMemberTx: calcMemberTx,
  };
}


// === src/calc/stats.js ===
/**
 * calc/stats.js — 统计计算（股东分潤 + 代理折抵 + 团统计）
 * 依赖: calc/round.js, core/constants.js
 * 不碰 DOM/Firebase
 */

// 代理级折抵计算
// opts.includeSealed: true → 封存團的洗碼/門檻「計入」達標計算（代理管理頁用）
// 預設（false）→ 封存團不計入（帳務頁/房間頁維持原行為）
function calcAgentQuota(agentId, memberTxs, bookings, opts) {
  var includeSealed = !!(opts && opts.includeSealed);
  var scopeTripId = (opts && opts.tripId) || null; // v2.3.7 帳務頁「團歸團」：指定只算該團
  function _effectiveAgentId(t) {
    if (t.agentId) return t.agentId;
    if (typeof Trips !== 'undefined' && t.tripId) {
      var trip = Trips.getById(t.tripId);
      return trip ? (trip.agentId || '') : '';
    }
    return '';
  }
  // 過濾掉團已被墓碑刪除的交易/訂房（一律不算入）
  // - 有 tripId 但 Trips.getById 找不到 → 團已被墓碑刪除 → 視為失效，不計入
  // - 封存團 → 僅代理管理頁（includeSealed）計入
  function _isValid(t) {
    if (!t.tripId || typeof Trips === 'undefined') return true;
    var trip = Trips.getById(t.tripId);
    if (!trip) return false;
    if (trip.status === 'sealed') return includeSealed;
    return true;
  }
  var agentTxs = (memberTxs || []).filter(function(t) { return _effectiveAgentId(t) === agentId && _isValid(t) && (!scopeTripId || t.tripId === scopeTripId); });
  var agentBookings = (bookings || []).filter(function(b) { return _effectiveAgentId(b) === agentId && _isValid(b) && (!scopeTripId || b.tripId === scopeTripId); });

  var totalWash = agentTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
  var totalThreshold = agentBookings.reduce(function(s, b) {
    var nights = b.nights || 1;
    return s + (b.threshold || 0) * nights;
  }, 0);

  // 洗码以万为单位，门檻以原始数字为单位 → 统一为原始数字
  var totalWashRaw = totalWash * 10000;
  var hasBookings = agentBookings.length > 0;
  var isMet = hasBookings && totalWashRaw >= totalThreshold;

  return {
    agentId: agentId,
    totalWashCode: totalWash,
    totalWashRaw: totalWashRaw,
    totalThreshold: totalThreshold,
    isMet: isMet,
    hasBookings: hasBookings,
    roomCount: agentBookings.reduce(function(s, b) { return s + (b.nights || 1); }, 0),
    rooms: agentBookings,
  };
}

// 团统计
function calcTripStats(trip, memberTxs, bookings) {
  var tripTxs = (memberTxs || []).filter(function(t) { return t.tripId === trip.id; });
  var tripBookings = (bookings || []).filter(function(b) { return b.tripId === trip.id; });

  var totalWash = tripTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
  var totalSettlement = tripTxs.reduce(function(s, t) { return s + (t.settlementAmount || 0); }, 0);
  var memberCount = new Set(tripTxs.map(function(t) { return t.memberId; })).size;
  var roomCount = tripBookings.reduce(function(s, b) { return s + (b.nights || 1); }, 0);

  // 按厅分组洗码
  var hallWash = {};
  tripTxs.forEach(function(t) {
    var hall = t.vipHallId || 'unknown';
    hallWash[hall] = (hallWash[hall] || 0) + (t.washCode || 0);
  });

  return {
    tripId: trip.id,
    totalWashCode: totalWash,
    totalSettlement: totalSettlement,
    memberCount: memberCount,
    roomCount: roomCount,
    txCount: tripTxs.length,
    hallWash: hallWash,
  };
}

// 股东分潤计算
// 支援 monthlyOnly 代理：現結不進錢池、月退用自定費率、洗碼不計入個人貢獻
function calcShareholderProfit(shareholder, allTxs, settings, month) {
  var sId = shareholder.id;
  // v1.9.4 當月匯率未設定 → 自動沿用最近一個已設定月份（與 Settings.getMonthlyRate 同邏輯）
  var _rates = (settings && settings.monthlyRates) || {};
  var monthlyRate = _rates[month];
  if (!monthlyRate) {
    var _mkeys = Object.keys(_rates).sort();
    for (var _mi = _mkeys.length - 1; _mi >= 0; _mi--) {
      if (_mkeys[_mi] <= month) { monthlyRate = _rates[_mkeys[_mi]]; break; }
    }
    if (!monthlyRate && _mkeys.length > 0) monthlyRate = _rates[_mkeys[0]];
  }
  if (!monthlyRate) monthlyRate = { exchangeRate: 4.2, shareholderRate: 4.2 };
  var exchangeRate = monthlyRate.shareholderRate || 4.2;
  var halls = settings.vipHalls || VIP_HALLS;

  // 该股东线下所有交易
  var shTxs = (allTxs || []).filter(function(t) { return t.shareholderId === sId; });

  // 輔助：取得交易廳 ID（交易自身 vipHallId 優先，無指定才回退到團 hallIds）
  function getHallId(t) {
    if (t.vipHallId) return t.vipHallId;
    if (t.tripId && typeof Trips !== 'undefined') {
      var trip = Trips.getById(t.tripId);
      if (trip && Array.isArray(trip.hallIds) && trip.hallIds.length > 0) {
        return trip.hallIds[0];
      }
    }
    return 'unknown';
  }

  // 輔助：判斷交易是否屬於 monthlyOnly 代理
  function isMonthlyOnlyTx(t) {
    if (!t.agentId || typeof Agents === 'undefined') return false;
    var agent = Agents.getById(t.agentId);
    if (!agent) return false;
    return agent.profitMode === PROFIT_MODE.MONTHLY_ONLY;
  }

  // 分組洗碼
  var hallWash = {};            // 全量（含 monthlyOnly），供分布表用
  var standardHallWash = {};    // 標準交易，供盈利計算用
  var moAgentHallWash = {};     // monthlyOnly 按 agentId→hallId 分組，供自定月退計算用
  var monthlyOnlyWash = 0;      // monthlyOnly 洗碼合計（供 UI 顯示）

  shTxs.forEach(function(t) {
    var hallId = getHallId(t);
    var wash = t.washCode || 0;
    hallWash[hallId] = (hallWash[hallId] || 0) + wash;

    if (isMonthlyOnlyTx(t)) {
      monthlyOnlyWash += wash;
      if (!moAgentHallWash[t.agentId]) moAgentHallWash[t.agentId] = {};
      moAgentHallWash[t.agentId][hallId] = (moAgentHallWash[t.agentId][hallId] || 0) + wash;
    } else {
      standardHallWash[hallId] = (standardHallWash[hallId] || 0) + wash;
    }
  });

  // 個人總洗碼（只計標準交易，不含 monthlyOnly → 貢獻度 < 100%）
  var personalWash = 0;
  Object.keys(standardHallWash).forEach(function(h) {
    personalWash += standardHallWash[h];
  });

  // 各廳盈利（現結）和月退費分開計算
  var hallProfit = {};
  var totalProfit = 0;   // 盈利(現結)
  var monthlyRebate = 0; // 月退費（標準+特殊）
  var monthlyOnlyRebate = 0; // 特殊代理月退費（僅 monthlyOnly）

  // 標準交易：按現有邏輯計算各廳盈利和月退費
  halls.forEach(function(hall) {
    var stdWash = standardHallWash[hall.id] || 0;
    var washRaw = stdWash * 10000;
    var cashRate = hall.cashRate || hall.rate; // 向後相容
    var profit = washRaw * cashRate;           // 盈利 = 洗碼 × 現結%
    hallProfit[hall.id] = { wash: stdWash, profit: profit };
    totalProfit += profit;
    if (hall.hasMonthlyRebate) {
      monthlyRebate += washRaw * hall.rebateRate;  // 月退費 = 洗碼 × 月退%
    }
  });

  // monthlyOnly 交易：現結不進 totalProfit；月退用各代理自定費率（無自定則用廳預設）
  Object.keys(moAgentHallWash).forEach(function(agentId) {
    var agent = (typeof Agents !== 'undefined') ? Agents.getById(agentId) : null;
    if (!agent) return;
    var hallsForAgent = moAgentHallWash[agentId];
    Object.keys(hallsForAgent).forEach(function(hallId) {
      var hall = halls.find(function(h) { return h.id === hallId; });
      if (!hall || !hall.hasMonthlyRebate) return;
      // 優先用代理自定費率，無自定則用廳預設費率
      var rate = (agent.customRebateRates && typeof agent.customRebateRates[hallId] === 'number')
        ? agent.customRebateRates[hallId]
        : hall.rebateRate;
      var moWash = hallsForAgent[hallId];
      var moRebateAmt = moWash * 10000 * rate;
      monthlyRebate += moRebateAmt;
      monthlyOnlyRebate += moRebateAmt;
    });
  });

  // totalProfit 用於分潤計算 = 盈利 + 月退費 = 合計（含標準+特殊）
  totalProfit += monthlyRebate;

  return {
    shareholderId: sId,
    shareholderName: shareholder.name,
    shares: shareholder.shares,
    personalWash: personalWash,         // 標準交易洗碼（不含 monthlyOnly）
    monthlyOnlyWash: monthlyOnlyWash,    // monthlyOnly 代理洗碼（供 UI 顯示）
    hallWash: hallWash,                  // 全量洗碼（含 monthlyOnly，供分布表用）
    hallProfit: hallProfit,              // 標準交易盈利（含 wash + profit）
    totalProfit: totalProfit,
    monthlyRebate: monthlyRebate,        // 總月退費（標準+特殊）
    monthlyOnlyRebate: monthlyOnlyRebate, // 特殊代理月退費（僅 monthlyOnly）
    exchangeRate: exchangeRate,
  };
}

// 合計应付计算（需要所有股东資料）
// monthlyOnlyRebateTotal: 全公司特殊代理月退總額，100%按持股均分，不參與50/50拆分
function calcShareholderTotal(profitData, allShareholders, totalWash, totalProfit, extraProfit, monthlyOnlyRebateTotal) {
  var totalShares = allShareholders.reduce(function(s, sh) { return s + (sh.shares || 0); }, 0);
  var sh = profitData.shares || 0;
  var moRebate = monthlyOnlyRebateTotal || 0;

  // 標準部分 = grandTotal − 特殊代理月退（走原50/50拆分）
  var standardGrand = totalProfit - moRebate;

  // 資金股 = 標準部分50%按持股 + 額外收入按持股
  var capital50 = (standardGrand * sh / totalShares) / 2 + (extraProfit * sh / totalShares);

  // 貢獻度 = 個人標準洗碼 / 總洗碼
  var contribution = totalWash > 0 ? profitData.personalWash / totalWash : 0;

  // 貢獻可得 = (標準部分 / 2) × 貢獻度
  var contribution50 = (standardGrand / 2) * contribution;

  // 特殊代理月退 100% 按持股均分
  var moRebateShare = moRebate * sh / totalShares;

  // 合計應付HK = 資金股 + 貢獻可得 + 特殊月退分潤
  var totalPayableHK = capital50 + contribution50 + moRebateShare;

  // 合計應付TW = ROUNDDOWN(合計應付HK × 匯率, -2)
  var totalPayableTW = roundDown(totalPayableHK * profitData.exchangeRate, -2);

  return {
    capital50: capital50,
    contribution: contribution,
    contribution50: contribution50,
    moRebateShare: moRebateShare,
    totalPayableHK: totalPayableHK,
    totalPayableTW: totalPayableTW,
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calcAgentQuota: calcAgentQuota,
    calcTripStats: calcTripStats,
    calcShareholderProfit: calcShareholderProfit,
    calcShareholderTotal: calcShareholderTotal,
  };
}


// === src/calc/filters.js ===
/**
 * calc/filters.js — 筛选与排序（纯函数）
 * 依赖: 无
 * 不碰 DOM/Firebase
 */

function filterByTrip(arr, tripId) {
  return (arr || []).filter(function(item) { return item.tripId === tripId; });
}

function filterByMonth(arr, monthStr, dateField) {
  var field = dateField || 'date';
  return (arr || []).filter(function(item) {
    var d = item[field];
    if (!d) return false;
    return d.substring(0, 7) === monthStr;
  });
}

function filterByAgent(arr, agentId) {
  return (arr || []).filter(function(item) { return item.agentId === agentId; });
}

function filterByShareholder(arr, shareholderId) {
  return (arr || []).filter(function(item) { return item.shareholderId === shareholderId; });
}

function filterByStatus(arr, status) {
  return (arr || []).filter(function(item) { return item.status === status; });
}

function filterNotDeleted(arr) {
  return (arr || []).filter(function(item) { return !item._deleted; });
}

/**
 * 過濾掉已封存(sealed)團的訂房
 * 處理 tripId 為空的 Bot 訂房：用 agentId 反查代理是否有活躍(active)團
 * @param {Array} bookings - 所有訂房
 * @param {Array} trips - 所有團
 * @returns {Array} 過濾後的訂房（排除已封存團的）
 */
function filterActiveBookings(bookings, trips) {
  var sealedTripIds = {};
  var agentHasActiveTrip = {};
  var tripsById = {};

  (trips || []).forEach(function(t) {
    tripsById[t.id] = t;
    if (t.status === 'sealed') {
      sealedTripIds[t.id] = true;
    }
    if (t.status === 'active' && t.agentId) {
      agentHasActiveTrip[t.agentId] = true;
    }
  });

  return (bookings || []).filter(function(b) {
    /* 有 tripId 且該團已封存 → 過濾掉 */
    if (b.tripId && sealedTripIds[b.tripId]) return false;
    /* tripId 為空或找不到對應團 → 用 agentId 判斷，代理無活躍團則視為已封存 */
    if ((!b.tripId || !tripsById[b.tripId]) && b.agentId) {
      return agentHasActiveTrip[b.agentId] === true;
    }
    return true;
  });
}

// 跨月判断
function overlapsMonth(checkIn, checkOut, monthStr) {
  if (!checkIn || !checkOut) return false;
  var monthStart = monthStr + '-01';
  var monthEnd = monthStr + '-31';
  return checkIn <= monthEnd && checkOut >= monthStart;
}

// 泛型排序
function sortBy(items, compareFn, asc) {
  var sorted = (items || []).slice().sort(compareFn);
  return asc ? sorted : sorted.reverse();
}

// 日期排序比较函数
function compareByDate(field) {
  return function(a, b) {
    var da = a[field] || '';
    var db = b[field] || '';
    return da < db ? -1 : da > db ? 1 : 0;
  };
}

// 数字排序比较函数
function compareByNumber(field) {
  return function(a, b) {
    return (a[field] || 0) - (b[field] || 0);
  };
}

// 字符串排序比较函数
function compareByString(field) {
  return function(a, b) {
    var sa = a[field] || '';
    var sb = b[field] || '';
    return sa.localeCompare(sb);
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    filterByTrip: filterByTrip,
    filterByMonth: filterByMonth,
    filterByAgent: filterByAgent,
    filterByShareholder: filterByShareholder,
    filterByStatus: filterByStatus,
    filterNotDeleted: filterNotDeleted,
    filterActiveBookings: filterActiveBookings,
    overlapsMonth: overlapsMonth,
    sortBy: sortBy,
    compareByDate: compareByDate,
    compareByNumber: compareByNumber,
    compareByString: compareByString,
  };
}


// === src/sync/merger.js ===
/**
 * sync/merger.js — 墓碑永远赢的合并器
 * 依赖: 无
 * 规则: 墓碑(_deleted=true)永远赢 > 显式复活(_reviveAt 新于墓碑) > 时间戳决胜 > 取联集
 *
 * Phase 1D / 1.15 衝突可視化：
 *  - mergeArrayWithConflicts() 額外回傳 conflicts 清單（雙方都活著且資料不同的「真衝突」）
 *  - 既有 mergeArray() 行為不變（backup 匯入等非同步路徑沿用，不產生衝突記錄）
 *  - 1.16 復活規則：活記錄帶 _reviveAt 且新於墓碑 _updatedAt → 活記錄贏（跨裝置還原）
 */

// 比較兩個活記錄是否「資料不同」（忽略 _updatedAt / _reviveAt 自身欄位）
// v1.9.1 顺序无关的稳定序列化（Firebase 回传的物件键序与本机不同，JSON.stringify 直接比对会造成假性衝突）
function _stableStringify(v) {
  if (v === undefined) return 'null';
  if (v === null || typeof v !== 'object') return JSON.stringify(v) === undefined ? 'null' : JSON.stringify(v);
  if (Array.isArray(v)) return '[' + v.map(function(x) { return _stableStringify(x); }).join(',') + ']';
  return '{' + Object.keys(v).sort().map(function(k) {
    return JSON.stringify(k) + ':' + _stableStringify(v[k]);
  }).join(',') + '}';
}

function _dataDiffers(a, b) {
  if (!a || !b) return true;
  var keys = {};
  Object.keys(a).forEach(function(k) { keys[k] = true; });
  Object.keys(b).forEach(function(k) { keys[k] = true; });
  for (var k in keys) {
    if (k === '_updatedAt' || k === '_reviveAt' || k === '_run') continue; // v2.1.2 _run 為顯示用欄位，不參與衝突比對
    if (_stableStringify(a[k]) !== _stableStringify(b[k])) return true;
  }
  return false;
}

/* v2.3.1 三方比對同步基準（解決「WEB 單方面編輯 → APP 誤報衝突」）：
 * 舊邏輯只看「本地 vs 雲端」 內容不同就記衝突——但 WEB 編輯後 APP 本地只是還沒收到更新的舊版，
 * 這是正常同步而非衝突，導致 APP 一直跳衝突提示。
 * 新邏輯：每次合併完成後記下「同步基準」（內容簽名）；下次合併時，
 * 只有「本地內容 ≠ 基準（本地這邊也改過）」且「雲端內容 ≠ 本地（雲端也改過）」才算真衝突。
 * 基準為本機記憶體（重啟後重置）——重啟後本地即上次合併結果，視為未修改，不誤報。 */
var _syncBaseline = {}; // { collection: { fbKey: contentSignature } }

function _contentSig(item) {
  if (!item) return '';
  var copy = {};
  Object.keys(item).forEach(function(k) {
    if (k === '_updatedAt' || k === '_reviveAt' || k === '_run') return;
    copy[k] = item[k];
  });
  return _stableStringify(copy);
}

/** 合併結果持久化後呼叫：更新該集合的同步基準（watcher / _resyncAll / syncUploadAll 皆須呼叫） */
function updateSyncBaseline(collection, arr) {
  var c = collection || '_';
  var base = {};
  (arr || []).forEach(function(item) {
    if (item && item._fbKey) base[item._fbKey] = _contentSig(item);
  });
  _syncBaseline[c] = base;
}

/** 本地此筆是否在上次同步後被修改過（無基準＝視為未修改，避免誤報） */
function _localModifiedSinceSync(collection, fbKey, lItem) {
  var base = _syncBaseline[collection || '_'];
  if (!base) return false;
  var sig = base[fbKey];
  if (sig === undefined) return false;
  return sig !== _contentSig(lItem);
}

function mergeArray(local, remote, collection) {
  var localArr = local || [];
  var remoteArr = remote || [];
  var map = {};
  var result = [];
  var isTrips = collection === 'trips';

  localArr.forEach(function(item) {
    if (item && item._fbKey) map[item._fbKey] = item;
  });

  remoteArr.forEach(function(rItem) {
    if (!rItem || !rItem._fbKey) return;
    var lItem = map[rItem._fbKey];
    if (!lItem) {
      // 远程新增
      map[rItem._fbKey] = rItem;
    } else if (rItem._deleted) {
      // 墓碑永远赢，不管时间戳
      map[rItem._fbKey] = rItem;
    } else if (lItem._deleted) {
      // 本地已是墓碑；除非远程显式复活（_reviveAt 新于墓碑），否则保持墓碑
      if (rItem._reviveAt && rItem._reviveAt > (lItem._updatedAt || 0)) {
        map[rItem._fbKey] = rItem; // 显式复活赢过旧墓碑
      }
      // 否则 map[rItem._fbKey] 已是 lItem (墓碑)
    } else {
      // 两者都活着
      if (isTrips) {
        var lSealed = lItem.status === 'sealed';
        var rSealed = rItem.status === 'sealed';
        if (lSealed !== rSealed) {
          // v2.3.8 封存保護：sealed 一方永远赢（封存不可逆，任何一端不得复原另一端已封存的团）
          map[rItem._fbKey] = lSealed ? lItem : rItem;
          return;
        }
      }
      // → 时间戳决胜
      var lTs = lItem._updatedAt || 0;
      var rTs = rItem._updatedAt || 0;
      map[rItem._fbKey] = rTs >= lTs ? rItem : lItem;
    }
  });

  Object.keys(map).forEach(function(key) { result.push(map[key]); });
  return result;
}

/**
 * Phase 1D / 1.15 带冲突追踪的合并
 * 回传 { merged, conflicts }
 *  conflicts: [{ fbKey, collection, local, remote, winner: 'local'|'remote', at }]
 *  真衝突定義：兩者都活著、且資料內容不同（忽略時間戳自身）
 *  合併結果與 mergeArray 一致（時間戳贏家勝出），衝突清單供操作者事後審視
 */
function mergeArrayWithConflicts(local, remote, collection) {
  var localArr = local || [];
  var remoteArr = remote || [];
  var map = {};
  var conflicts = [];
  var result = [];
  var isTrips = collection === 'trips';

  localArr.forEach(function(item) {
    if (item && item._fbKey) map[item._fbKey] = item;
  });

  remoteArr.forEach(function(rItem) {
    if (!rItem || !rItem._fbKey) return;
    var lItem = map[rItem._fbKey];
    if (!lItem) {
      map[rItem._fbKey] = rItem;
      return;
    }
    if (rItem._deleted) {
      map[rItem._fbKey] = rItem; // 墓碑赢
      return;
    }
    if (lItem._deleted) {
      if (rItem._reviveAt && rItem._reviveAt > (lItem._updatedAt || 0)) {
        map[rItem._fbKey] = rItem;
      }
      return;
    }
    // 两者都活着
    var lTs = lItem._updatedAt || 0;
    var rTs = rItem._updatedAt || 0;
    var winner;
    if (isTrips) {
      var lSealed = lItem.status === 'sealed';
      var rSealed = rItem.status === 'sealed';
      if (lSealed !== rSealed) {
        // v2.3.8 封存保護：sealed 一方永远赢（封存不可逆）
        winner = lSealed ? 'local' : 'remote';
        map[rItem._fbKey] = lSealed ? lItem : rItem;
      } else {
        winner = rTs >= lTs ? 'remote' : 'local';
        map[rItem._fbKey] = winner === 'remote' ? rItem : lItem;
      }
    } else {
      winner = rTs >= lTs ? 'remote' : 'local';
      map[rItem._fbKey] = winner === 'remote' ? rItem : lItem;
    }
    // 真衝突（v2.3.1 三方比對）：雲端內容 ≠ 本地，且本地自上次同步基準後也被改過
    // （WEB 單方面編輯 → 本地未改 → 只同步不報衝突）
    if (_dataDiffers(lItem, rItem) && _localModifiedSinceSync(collection, rItem._fbKey, lItem)) {
      conflicts.push({
        fbKey: rItem._fbKey,
        collection: collection || '',
        local: lItem,
        remote: rItem,
        winner: winner,
        at: Date.now(),
      });
    }
  });

  Object.keys(map).forEach(function(key) { result.push(map[key]); });
  return { merged: result, conflicts: conflicts };
}

function mergeObject(local, remote) {
  if (!remote) return local;
  if (!local) return remote;
  var lTs = local._updatedAt || 0;
  var rTs = remote._updatedAt || 0;
  return rTs >= lTs ? remote : local;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    mergeArray: mergeArray,
    mergeArrayWithConflicts: mergeArrayWithConflicts,
    mergeObject: mergeObject,
  };
}


// === src/sync/firebase.js ===
/**
 * sync/firebase.js — Firebase 初始化 + CRUD
 * 依赖: core/constants.js
 */

var _db = null;
var _app = null;
var _authReady = false;
var _onReady = null;
var _initPromise = null;

function initFirebase() {
  if (_initPromise) return _initPromise;
  _initPromise = new Promise(function(resolve) {
    if (!TW_FIREBASE_CONFIG.apiKey) {
      console.warn('[Firebase] apiKey 未设置，离线模式');
      resolve(null);
      return;
    }

    var scriptsToLoad = [
      FIREBASE_CDN.APP,
      FIREBASE_CDN.DATABASE,
      FIREBASE_CDN.AUTH,
    ];
    var loaded = 0;

    scriptsToLoad.forEach(function(src) {
      var script = document.createElement('script');
      script.src = src;
      script.onload = function() {
        loaded++;
        if (loaded === scriptsToLoad.length) {
          _initApp();
        }
      };
      script.onerror = function() {
        console.error('[Firebase] SDK load failed: ' + src);
        resolve(null);
      };
      document.head.appendChild(script);
    });

    function _initApp() {
      try {
        var app = firebase.initializeApp(TW_FIREBASE_CONFIG, 'tw-booking');
        _db = firebase.database(app);
        _app = app;

        firebase.auth(app).signInAnonymously()
          .then(function() {
            _authReady = true;
            console.log('[Firebase] 匿名认证成功');
            if (_onReady) _onReady(_db);
            resolve(_db);
          })
          .catch(function(err) {
            console.error('[Firebase] 匿名认证失败', err);
            resolve(_db); // 仍允许离线使用
          });
      } catch(e) {
        console.error('[Firebase] init error', e);
        resolve(null);
      }
    }
  });
  return _initPromise;
}

function getDB() { return _db; }

// Phase 1A：Firebase Auth 實例（email/password 個別帳號登入用；未初始化回 null）
function getAuth() {
  try {
    if (_app && typeof firebase !== 'undefined' && firebase.auth) return firebase.auth(_app);
  } catch (e) {}
  return null;
}

function isReady() { return _db !== null && _authReady; }
function onReady(fn) { _onReady = fn; }

// 全量覆写（仅用于初始化和清除）
function fbPut(path, data) {
  if (!_db) return Promise.reject('no db');
  return _db.ref(path).set(data);
}

// 部分更新（PATCH，不全量覆写）
function fbPatch(path, data) {
  if (!_db) return Promise.reject('no db');
  return _db.ref(path).update(data);
}

// 删除
function fbRemove(path) {
  if (!_db) return Promise.reject('no db');
  return _db.ref(path).remove();
}

// 读取一次
function fbOnce(path) {
  if (!_db) return Promise.resolve(null);
  return _db.ref(path).once('value').then(function(snap) { return snap.val(); });
}

// 监听
function fbOn(path, callback) {
  if (!_db) return function() {};
  var ref = _db.ref(path);
  ref.on('value', function(snap) { callback(snap.val()); });
  return function() { ref.off('value'); };
}

var FirebaseSync = {
  init: initFirebase,
  getDB: getDB,
  getAuth: getAuth,
  isReady: isReady,
  onReady: onReady,
  put: fbPut,
  patch: fbPatch,
  remove: fbRemove,
  once: fbOnce,
  on: fbOn,
};


// === src/sync/uploader.js ===
/**
 * sync/uploader.js — 上傳队列 + 全量同步
 * 依赖: core/constants.js, sync/firebase.js
 */

var _queue = [];
var _uploading = false;

function enqueue(path, data) {
  _queue.push({ path: path, data: data });
  if (!_uploading) _processQueue();
}

function _processQueue() {
  if (_queue.length === 0) { _uploading = false; return; }
  _uploading = true;

  var job = _queue.shift();
  var batch = _queue.splice(0, CONFIG.UPLOAD_BATCH_MAX - 1);
  batch.unshift(job);

  Promise.all(batch.map(function(j) {
    return fbPatch(j.path, j.data).catch(function(e) {
      console.error('[Uploader] failed: ' + j.path, e);
    });
  })).then(function() {
    setTimeout(_processQueue, 100);
  });
}

// 每個集合對應的本地寫回目標（與 watchers watchList 一致）
var _UPLOAD_META = {
  MEMBERS:       { stateKey: 'members',      event: 'MEMBERS_LOADED' },
  AGENTS:        { stateKey: 'agents',       event: 'AGENTS_LOADED' },
  SHAREHOLDERS:  { stateKey: 'shareholders', event: 'SHAREHOLDERS_LOADED' },
  TRIPS:         { stateKey: 'trips',        event: 'TRIPS_LOADED' },
  MEMBER_TXS:    { stateKey: 'memberTxs',    event: 'MTX_LOADED' },
  WALLET_TXS:    { stateKey: 'walletTxs',    event: 'WALLET_TXS_LOADED' },
  PENDING_EXPS:  { stateKey: 'pendingExps',  event: 'PENDING_EXPS_LOADED' },
  CATALOG:       { stateKey: 'catalog',      event: 'CATALOG_LOADED' },
  LOANS:         { stateKey: 'loans',        event: 'LOANS_LOADED' },
  BOOKINGS:      { stateKey: 'bookings',     event: 'BOOKINGS_LOADED' },
  SUPPLEMENTS:   { stateKey: 'supplements',  event: 'SYNC_COMPLETE' },
  SETTINGS:      { stateKey: 'settings',     event: 'SETTINGS_LOADED' },
  EXTRA_INCOME:  { stateKey: 'extraIncome',  event: 'SYNC_COMPLETE' },
  HOTEL_CONFIG:  { stateKey: 'hotelConfig',  event: 'HOTEL_CONFIG_LOADED' },
  USERS:         { stateKey: 'users',        event: 'USERS_LOADED' },
  AUDIT_LOG:     { stateKey: 'auditLog',     event: 'AUDIT_LOADED' },
};

// 全量同步上傳 —— 修正「盲寫全量覆蓋雲端」的根本缺陷：
// 舊版直接把本地所有「非 _deleted」資料 PATCH 上雲端，無條件覆蓋雲端同名 _fbKey，
// 導致本端（APP/WEB）本地舊資料把另一端的新修改 / 刪除墓碑覆蓋回去（刪除復活、修改被蓋回）。
// 新版改為「先拉後合併差異上傳」：
//   1) 先 fbOnce 拉取雲端
//   2) mergeArrayWithConflicts 合併（墓碑永遠贏 > 時間戳決勝 > 聯集），真衝突交 Conflicts 記錄
//   3) 只上傳「本地確實比雲端新」的差異項（含本地墓碑；雲端墓碑絕不覆蓋）
//   4) 合併結果寫回本地，確保與雲端對齊
function syncUploadAll(dataMap) {
  return Promise.all(Object.keys(dataMap).map(function(key) {
    var path = FB_PATH[key];
    var data = dataMap[key];
    if (!path || !data) return Promise.resolve();

    if (Array.isArray(data)) {
      return fbOnce(path).then(function(remoteVal) {
        var remoteObj = remoteVal || {};
        var remoteArr = Object.keys(remoteObj).map(function(k) { return remoteObj[k]; });

        // 1) 合併（帶衝突偵測）
        var mergeRes = mergeArrayWithConflicts(data, remoteArr, (_UPLOAD_META[key] || {}).stateKey || key);
        var merged = mergeRes.merged;
        if (mergeRes.conflicts.length > 0 && typeof Conflicts !== 'undefined') {
          Conflicts.record((_UPLOAD_META[key] || {}).stateKey || key, mergeRes.conflicts);
        }

        // MEMBER_TXS：合併後重新計算衍生欄位（與 watchers 一致）
        if (key === 'MEMBER_TXS' && typeof calcMemberTx === 'function') {
          merged = merged.map(function(tx) {
            if (!tx || tx._deleted) return tx;
            if (tx.outCode === undefined && tx.backCode === undefined && tx.washCode === undefined) return tx;
            return Object.assign({}, tx, calcMemberTx(tx));
          });
        }

        // 2) 只上傳「本地贏家」的差異項（關鍵：雲端墓碑永遠贏，任何本地資料不得覆蓋）
        var toUpload = {};
        data.forEach(function(item) {
          if (!item || !item._fbKey) return;
          var rItem = remoteObj[item._fbKey];
          if (!rItem) {
            // 雲端無此筆 → 新增（含本地墓碑）
            toUpload[item._fbKey] = item;
          } else if (rItem._deleted) {
            // 雲端已是墓碑 → 墓碑永遠贏，本地資料（活或墓碑）一律不得覆蓋
            return;
          } else if (item._deleted) {
            // 本地墓碑、雲端活資料 → 上傳墓碑，確保雲端執行刪除
            toUpload[item._fbKey] = item;
          } else if (key === 'TRIPS' && rItem.status === 'sealed' && item.status !== 'sealed') {
            // v2.3.8 封存保護：雲端已封存、本地是舊狀態 → 不得上傳覆蓋（封存不可逆）
            return;
          } else if ((item._updatedAt || 0) > (rItem._updatedAt || 0)) {
            // 兩者皆活、本地較新 → 上傳
            toUpload[item._fbKey] = item;
          }
        });

        // 3) 合併結果寫回本地（與雲端對齊）
        var meta = _UPLOAD_META[key];
        if (meta) {
          var storeKey = STORAGE_KEYS[key];
          if (storeKey) Store.writeArray(storeKey, merged);
          State.set(meta.stateKey, merged);
          if (EVENTS[meta.event]) EventBus.emit(EVENTS[meta.event], merged);
          updateSyncBaseline(meta.stateKey, merged); // v2.3.1 三方比對基準（須在 recalc 之後）
        }

        if (Object.keys(toUpload).length > 0) {
          console.log('[Uploader] syncUploadAll ' + key + ' 上傳 ' + Object.keys(toUpload).length + ' 筆差異');
          return fbPatch(path, toUpload);
        }
        return null;
      }).catch(function(e) {
        console.error('[Uploader] syncUploadAll ' + key + ' 失敗（沿用本地資料）', e);
        return null;
      });
    }

    if (typeof data === 'object') {
      // EMPLOYEE_LIST 等物件型：比對 addedAt 差異上傳
      return fbOnce(path).then(function(remoteVal) {
        var remoteObj = remoteVal || {};
        var toUpd = {};
        Object.keys(data).forEach(function(k) {
          var l = data[k]; var r = remoteObj[k];
          if (!r) { toUpd[k] = l; }
          else if (l && r && (l.addedAt || 0) > (r.addedAt || 0)) { toUpd[k] = l; }
        });
        if (Object.keys(toUpd).length > 0) return fbPatch(path, toUpd);
        return null;
      }).catch(function(e) {
        console.error('[Uploader] syncUploadAll 物件 ' + key + ' 失敗', e);
        return null;
      });
    }
    return Promise.resolve();
  }));
}

var Uploader = {
  enqueue: enqueue,
  syncUploadAll: syncUploadAll,
};


// === src/sync/conflicts.js ===
/**
 * sync/conflicts.js — Phase 1D / 1.15 同步衝突可視化
 *
 * 職責：記錄 mergeArrayWithConflicts 偵測到的「真衝突」（雙方都改且資料不同），
 *   讓操作者事後審視，而非靜默以時間戳覆蓋。
 *
 * 資料流：watchers 合併遠端 → 偵測衝突 → record() → 寫入本機佇列 +
 *   emit EVENTS.SYNC_CONFLICT → app.js 接 Toast 提示 → 設定頁「同步衝突」卡片列出
 *   → 操作者 resolve(id, 'local'|'remote') → 套用所選版本（新 _updatedAt）→
 *   下一輪同步以操作者選擇為準 → 衝突解決。
 *
 * 設計：
 *  - 衝突僅存本機（STORAGE_KEYS.SYNC_CONFLICTS），不上雲（純客端可視化）
 *  - resolve 套用版本時用新 _updatedAt + 既有 enqueue 上傳 → 跨裝置一致
 *  - 過期自動清理（CONFLICT_RETENTION_DAYS，預設 30 天）
 *
 * 依赖: core/constants.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var Conflicts = (function() {
  'use strict';

  // 集合 → 寫回所需 meta（storeKey / fbPath / 廣播事件 / stateKey）
  var COLLECTION_META = {
    members:       { storeKey: STORAGE_KEYS.MEMBERS,      fbPath: FB_PATH.MEMBERS,      event: EVENTS.MEMBERS_LOADED,      stateKey: 'members' },
    agents:        { storeKey: STORAGE_KEYS.AGENTS,        fbPath: FB_PATH.AGENTS,       event: EVENTS.AGENTS_LOADED,        stateKey: 'agents' },
    shareholders:  { storeKey: STORAGE_KEYS.SHAREHOLDERS,  fbPath: FB_PATH.SHAREHOLDERS, event: EVENTS.SHAREHOLDERS_LOADED, stateKey: 'shareholders' },
    trips:         { storeKey: STORAGE_KEYS.TRIPS,        fbPath: FB_PATH.TRIPS,        event: EVENTS.TRIPS_LOADED,         stateKey: 'trips' },
    memberTxs:     { storeKey: STORAGE_KEYS.MEMBER_TXS,   fbPath: FB_PATH.MEMBER_TXS,   event: EVENTS.MTX_LOADED,           stateKey: 'memberTxs' },
    bookings:      { storeKey: STORAGE_KEYS.BOOKINGS,     fbPath: FB_PATH.BOOKINGS,     event: EVENTS.BOOKINGS_LOADED,       stateKey: 'bookings' },
    supplements:   { storeKey: STORAGE_KEYS.SUPPLEMENTS,   fbPath: FB_PATH.SUPPLEMENTS,  event: EVENTS.SYNC_COMPLETE,        stateKey: 'supplements' },
    extraIncome:   { storeKey: STORAGE_KEYS.EXTRA_INCOME, fbPath: FB_PATH.EXTRA_INCOME, event: EVENTS.SYNC_COMPLETE,        stateKey: 'extraIncome' },
    hotelConfig:   { storeKey: STORAGE_KEYS.HOTEL_CONFIG, fbPath: FB_PATH.HOTEL_CONFIG, event: EVENTS.HOTEL_CONFIG_LOADED,  stateKey: 'hotelConfig' },
    settings:      { storeKey: STORAGE_KEYS.SETTINGS,     fbPath: FB_PATH.SETTINGS,     event: EVENTS.SETTINGS_LOADED,       stateKey: 'settings' },
    users:         { storeKey: STORAGE_KEYS.USERS,        fbPath: FB_PATH.USERS,        event: EVENTS.USERS_LOADED,         stateKey: 'users' },
  };

  function _load() {
    return Store.readArray(STORAGE_KEYS.SYNC_CONFLICTS);
  }

  function _save(arr) {
    Store.writeArray(STORAGE_KEYS.SYNC_CONFLICTS, arr || []);
  }

  function _emit() {
    EventBus.emit(EVENTS.CONFLICTS_CHANGED, _load());
  }

  /**
   * 記錄一組衝突（由 watchers 呼叫）。已存在同 fbKey 的舊衝突會被覆蓋（保留最新）。
   */
  function record(collection, conflicts) {
    if (!conflicts || !conflicts.length) return;
    // v1.9.1 假性衝突防線：本机与云端资料实质相同（仅键序/时间戳不同）者不记录
    conflicts = conflicts.filter(function(c) {
      return c && c.local && c.remote && _dataDiffers(c.local, c.remote);
    });
    if (!conflicts.length) return;
    var arr = _load();
    conflicts.forEach(function(c) {
      // 移除同 collection + fbKey 的舊衝突（避免堆疊）
      arr = arr.filter(function(x) {
        return !(x.collection === collection && x.fbKey === c.fbKey);
      });
      var id = 'C' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
      arr.push({
        id: id,
        collection: collection,
        fbKey: c.fbKey,
        local: c.local,
        remote: c.remote,
        winner: c.winner,
        at: c.at || Date.now(),
      });
    });
    // 上限 200 筆，超出丟最舊
    if (arr.length > 200) arr = arr.slice(-200);
    _save(arr);
    _emit();
    EventBus.emit(EVENTS.SYNC_CONFLICT, { count: conflicts.length, collection: collection });
  }

  function getAll() {
    return _load();
  }

  function count() {
    return _load().length;
  }

  /**
   * 解決衝突：操作者選擇 local 或 remote 版本
   *  - choice === 'local'  → 套用本機版本（新 _updatedAt）→ 上傳 → 下輪同步本機贏
   *  - choice === 'remote' → 直接採用遠端版本（已在 merged 中）→ 僅移除衝突記錄
   *  - choice === winner   → 同採用勝方，僅移除衝突記錄（不改資料）
   */
  function resolve(conflictId, choice) {
    var arr = _load();
    var idx = arr.findIndex(function(c) { return c.id === conflictId; });
    if (idx < 0) return false;
    var c = arr[idx];

    // 選擇非勝方 → 套用敗方版本（給新時間戳，下輪同步此版本贏）
    if ((choice === 'local' && c.winner === 'remote') ||
        (choice === 'remote' && c.winner === 'local')) {
      var meta = COLLECTION_META[c.collection];
      if (meta) {
        var chosen = choice === 'local' ? c.local : c.remote;
        if (chosen && chosen._fbKey) {
          var list = Store.readArray(meta.storeKey);
          var i = list.findIndex(function(x) { return x._fbKey === chosen._fbKey; });
          var now = Date.now();
          var revived = Object.assign({}, chosen, {
            _deleted: false,
            _updatedAt: now,
            _reviveAt: now,
          });
          if (i >= 0) list[i] = revived; else list.push(revived);
          Store.writeArray(meta.storeKey, list);
          if (typeof State !== 'undefined') State.set(meta.stateKey, list);
          if (typeof enqueue === 'function') {
            var obj = {}; obj[revived._fbKey] = revived;
            enqueue(meta.fbPath, obj);
          }
          if (typeof EventBus !== 'undefined') EventBus.emit(meta.event, list);
        }
      }
    }
    // 移除衝突記錄
    arr.splice(idx, 1);
    _save(arr);
    _emit();
    return true;
  }

  /** 清除所有衝突（管理員一鍵忽略） */
  function clearAll() {
    _save([]);
    _emit();
  }

  /** 過期自動清理（CONFLICT_RETENTION_DAYS） */
  function prune() {
    var cutoff = Date.now() - CONFIG.CONFLICT_RETENTION_DAYS * 24 * 60 * 60 * 1000;
    var arr = _load();
    var kept = arr.filter(function(c) { return c.at >= cutoff; });
    if (kept.length < arr.length) {
      _save(kept);
      console.log('[Conflicts] Pruned ' + (arr.length - kept.length) + ' conflicts older than ' + CONFIG.CONFLICT_RETENTION_DAYS + ' days');
    }
  }

  /** v1.9.1 清除历史假性衝突（本机与云端资料实质相同者，旧版误报留下的记录） */
  function pruneFalsePositives() {
    var arr = _load();
    var kept = arr.filter(function(c) {
      return _dataDiffers(c.local, c.remote);
    });
    if (kept.length < arr.length) {
      _save(kept);
      console.log('[Conflicts] Removed ' + (arr.length - kept.length) + ' false-positive conflicts');
      _emit();
    }
  }

  return {
    record: record,
    getAll: getAll,
    count: count,
    resolve: resolve,
    clearAll: clearAll,
    prune: prune,
    pruneFalsePositives: pruneFalsePositives,
    COLLECTION_META: COLLECTION_META,
  };
})();


// === src/data/auditLog.js ===
/**
 * data/auditLog.js — Phase 1B 審計紀錄（Append-only）
 *
 * 1.7 資料模型：每筆記錄 = 操作者(uid+name) + 時間 + 模組 + 動作 + 變更前後摘要
 * 1.8 寫入掛鉤：autoLog() 訂閱 EventBus CRUD 事件（統一埋點，不怕漏）；log() 供顯式呼叫
 * 1.10 同步：enqueue 上雲；本機 90 天自動清理（CONFIG.AUDIT_LOCAL_MAX_DAYS）
 *
 * 與其他集合同構（陣列 + _fbKey + 墓碑欄位保留相容），但：
 *  - 無 update/remove（append-only）
 *  - _fbKey = 'audit_' + id（必唯一）
 *  - 不入 COLLECTION_PAGES（審計寫入不走權限閘門——系統自動記錄）
 *
 * 依赖: core/constants.js, core/events.js, core/permissions.js, core/schema.js, core/state.js, core/store.js, sync/uploader.js
 */
var AuditLog = (function() {
  'use strict';

  // EventBus CRUD 事件 → 審計模組/動作 對照（統一埋點，不怕 data 模組漏呼叫）
  var CRUD_MAP = [
    { event: EVENTS.MEMBER_CREATED,     module: 'members',     action: 'create' },
    { event: EVENTS.MEMBER_UPDATED,     module: 'members',     action: 'update' },
    { event: EVENTS.MEMBER_DELETED,     module: 'members',     action: 'delete' },
    { event: EVENTS.AGENT_CREATED,      module: 'agents',      action: 'create' },
    { event: EVENTS.AGENT_UPDATED,      module: 'agents',      action: 'update' },
    { event: EVENTS.AGENT_DELETED,      module: 'agents',      action: 'delete' },
    { event: EVENTS.SHAREHOLDER_CREATED, module: 'shareholders', action: 'create' },
    { event: EVENTS.SHAREHOLDER_UPDATED, module: 'shareholders', action: 'update' },
    { event: EVENTS.SHAREHOLDER_DELETED, module: 'shareholders', action: 'delete' },
    { event: EVENTS.TRIP_CREATED,       module: 'trips',       action: 'create' },
    { event: EVENTS.TRIP_UPDATED,       module: 'trips',       action: 'update' },
    { event: EVENTS.TRIP_SEALED,        module: 'trips',       action: 'seal' },
    { event: EVENTS.MTX_CREATED,        module: 'memberTxs',  action: 'create' },
    { event: EVENTS.MTX_UPDATED,        module: 'memberTxs',  action: 'update' },
    { event: EVENTS.MTX_DELETED,        module: 'memberTxs',  action: 'delete' },
    { event: EVENTS.BOOKING_CREATED,    module: 'bookings',    action: 'create' },
    { event: EVENTS.BOOKING_UPDATED,    module: 'bookings',    action: 'update' },
    { event: EVENTS.BOOKING_DELETED,    module: 'bookings',    action: 'delete' },
    { event: EVENTS.SUPPLEMENT_CREATED,  module: 'supplements', action: 'create' },
    { event: EVENTS.SUPPLEMENT_UPDATED, module: 'supplements', action: 'update' },
    { event: EVENTS.SUPPLEMENT_DELETED, module: 'supplements', action: 'delete' },
    { event: EVENTS.SETTINGS_UPDATED,   module: 'settings',    action: 'update' },
    { event: EVENTS.HOTEL_CONFIG_UPDATED, module: 'hotelConfig', action: 'update' },
    { event: EVENTS.USER_SAVED,         module: 'users',       action: 'update' },
    { event: EVENTS.USER_DELETED,       module: 'users',       action: 'delete' },
  ];

  function load() {
    var arr = Store.readArray(STORAGE_KEYS.AUDIT_LOG);
    State.set('auditLog', arr);
    return arr;
  }

  function save(arr) {
    Store.writeArray(STORAGE_KEYS.AUDIT_LOG, arr || []);
    State.set('auditLog', arr || []);
  }

  function getAll() {
    return (State.get('auditLog') || []).filter(function(r) { return !r._deleted; });
  }

  function _actor() {
    if (typeof Perm !== 'undefined' && Perm.sessionUser()) {
      var s = Perm.sessionUser();
      return { uid: s.uid || 'system', name: s.name || '系統' };
    }
    return { uid: 'system', name: '系統' };
  }

  function _summarize(entity) {
    if (!entity) return null;
    try {
      var s = JSON.stringify(entity);
      if (s.length > 500) s = s.substring(0, 497) + '...';
      return s;
    } catch (e) { return String(entity); }
  }

  function _log(module, action, entityId, summary, before, after) {
    var actor = _actor();
    var now = Date.now();
    var id = 'A' + now + '_' + Math.random().toString(36).substr(2, 6);
    var record = {
      id: id,
      actorId: actor.uid,
      actorName: actor.name,
      module: module,
      action: action,
      entityId: entityId || '',
      summary: summary || '',
      before: _summarize(before),
      after: _summarize(after),
      at: now,
      _fbKey: 'audit_' + id,
      _updatedAt: now,
    };
    // Schema 驗證（擋壞記錄）
    if (typeof Schema !== 'undefined' && !Schema.sanitize('auditLog', record)) return null;
    var arr = State.get('auditLog') || [];
    arr.push(record);
    save(arr);
    // 上雲（append-only：_fbKey 唯一，Security Rules 禁止覆蓋既有節點）
    var obj = {};
    obj[record._fbKey] = record;
    if (typeof enqueue === 'function') enqueue(FB_PATH.AUDIT_LOG, obj);
    EventBus.emit(EVENTS.AUDIT_LOGGED, record);
    return record;
  }

  /**
   * 顯式記錄（非 CRUD 動作用：登入/登出/匯出/備份/解封等）
   */
  function log(module, action, entityId, summary, before, after) {
    return _log(module, action, entityId, summary, before, after);
  }

  /**
   * 1.8 統一埋點：訂閱 EventBus CRUD 事件，自動產生審計記錄
   * 在 initApp 中呼叫一次即可涵蓋所有 data 模組的 create/update/delete
   */
  function autoLog() {
    CRUD_MAP.forEach(function(m) {
      EventBus.on(m.event, function(payload) {
        var entityId = '';
        var after = null;
        if (typeof payload === 'string') {
          entityId = payload; // delete 事件只傳 id
        } else if (payload && typeof payload === 'object') {
          entityId = payload.id || '';
          after = payload;
        }
        var labelMap = {
          members: '會員', agents: '代理', shareholders: '股東', trips: '團務',
          memberTxs: '會員交易', bookings: '訂房', supplements: '補充',
          settings: '系統設定', hotelConfig: '酒店設定', users: '帳號',
        };
        var label = labelMap[m.module] || m.module;
        var desc;
        if (m.action === 'create') desc = '新增' + label + (payload && payload.name ? ' ' + payload.name : ' ' + entityId);
        else if (m.action === 'update') desc = '修改' + label + ' ' + entityId;
        else if (m.action === 'delete') desc = '刪除' + label + ' ' + entityId;
        else if (m.action === 'seal') desc = '封存' + label + ' ' + entityId;
        else desc = m.action + ' ' + label + ' ' + entityId;
        _log(m.module, m.action, entityId, desc, null, after);
      });
    });
  }

  /**
   * 1.10 本機自動清理：刪除超過 AUDIT_LOCAL_MAX_DAYS 天的記錄
   * 雲端清理由 Security Rules 限制寫入 + 管理員手動/Cloud Function（待辦）
   */
  function prune() {
    var cutoff = Date.now() - CONFIG.AUDIT_LOCAL_MAX_DAYS * 24 * 60 * 60 * 1000;
    var arr = State.get('auditLog') || [];
    var kept = arr.filter(function(r) { return r.at >= cutoff; });
    if (kept.length < arr.length) {
      save(kept);
      console.log('[AuditLog] Pruned ' + (arr.length - kept.length) + ' records older than ' + CONFIG.AUDIT_LOCAL_MAX_DAYS + ' days');
    }
  }

  /**
   * 1.9 查詢 API：按人員/時間/模組/動作篩選
   */
  function query(filters) {
    var arr = getAll();
    filters = filters || {};
    if (filters.actorId) arr = arr.filter(function(r) { return r.actorId === filters.actorId; });
    if (filters.module) arr = arr.filter(function(r) { return r.module === filters.module; });
    if (filters.action) arr = arr.filter(function(r) { return r.action === filters.action; });
    if (filters.from) arr = arr.filter(function(r) { return r.at >= filters.from; });
    if (filters.to) arr = arr.filter(function(r) { return r.at <= filters.to; });
    if (filters.keyword) {
      var kw = filters.keyword.toLowerCase();
      arr = arr.filter(function(r) {
        return (r.summary || '').toLowerCase().indexOf(kw) >= 0 ||
               (r.entityId || '').toLowerCase().indexOf(kw) >= 0 ||
               (r.actorName || '').toLowerCase().indexOf(kw) >= 0;
      });
    }
    arr.sort(function(a, b) { return b.at - a.at; }); // 最新優先
    return arr;
  }

  function count() {
    return getAll().length;
  }

  return {
    load: load, save: save, getAll: getAll, count: count,
    log: log, autoLog: autoLog, prune: prune, query: query,
  };
})();


// === src/sync/recentlyDeleted.js ===
/**
 * sync/recentlyDeleted.js — Phase 1D / 1.16 回收站（刪除/封存一律進回收站，可還原）
 *
 * 1.16 強化要點：
 *  - autoTrack() 訂閱 EventBus *_DELETED + TRIP_SEALED 事件，自動快照進回收站
 *    （data 模組零改動——與審計 autoLog 同一模式）
 *  - restore(itemId)：刪除→取消墓碑（_reviveAt 新時間戳讓跨裝置復活贏過舊墓碑）；
 *    封存→解封（status 回復、清 sealedAt/sealedMonth）
 *  - prune() 過期自動清理（RECYCLE_BIN_RETENTION_DAYS，預設 30 天）
 *  - 與審計/衝突同構：本機陣列 + Store 持久化；復活時 enqueue 上雲
 *
 * 相容：保留 `var RecentlyDeleted = RecycleBin` 別名（app.js / bridge.js 既有接線不破壞）
 *
 * 依赖: core/constants.js, core/events.js, core/state.js, core/store.js, sync/uploader.js, data/auditLog.js
 */
var RecycleBin = (function() {
  'use strict';

  // 追蹤事件 → 集合 + 動作類型（delete = 墓碑可復活；seal = 封存可解封）
  var TRACK_EVENTS = [
    { event: EVENTS.MEMBER_DELETED,     collection: 'members',      storeKey: STORAGE_KEYS.MEMBERS,      fbPath: FB_PATH.MEMBERS,      stateKey: 'members',      loaded: EVENTS.MEMBERS_LOADED,      kind: 'delete' },
    { event: EVENTS.AGENT_DELETED,      collection: 'agents',       storeKey: STORAGE_KEYS.AGENTS,       fbPath: FB_PATH.AGENTS,       stateKey: 'agents',       loaded: EVENTS.AGENTS_LOADED,       kind: 'delete' },
    { event: EVENTS.SHAREHOLDER_DELETED, collection: 'shareholders', storeKey: STORAGE_KEYS.SHAREHOLDERS, fbPath: FB_PATH.SHAREHOLDERS, stateKey: 'shareholders', loaded: EVENTS.SHAREHOLDERS_LOADED, kind: 'delete' },
    { event: EVENTS.MTX_DELETED,        collection: 'memberTxs',   storeKey: STORAGE_KEYS.MEMBER_TXS,   fbPath: FB_PATH.MEMBER_TXS,   stateKey: 'memberTxs',   loaded: EVENTS.MTX_LOADED,          kind: 'delete' },
    { event: EVENTS.BOOKING_DELETED,    collection: 'bookings',     storeKey: STORAGE_KEYS.BOOKINGS,     fbPath: FB_PATH.BOOKINGS,     stateKey: 'bookings',     loaded: EVENTS.BOOKINGS_LOADED,     kind: 'delete' },
    { event: EVENTS.SUPPLEMENT_DELETED,  collection: 'supplements',  storeKey: STORAGE_KEYS.SUPPLEMENTS,   fbPath: FB_PATH.SUPPLEMENTS,  stateKey: 'supplements',  loaded: EVENTS.SYNC_COMPLETE,       kind: 'delete' },
    { event: EVENTS.USER_DELETED,       collection: 'users',        storeKey: STORAGE_KEYS.USERS,        fbPath: FB_PATH.USERS,        stateKey: 'users',        loaded: EVENTS.USERS_LOADED,        kind: 'delete' },
    { event: EVENTS.TRIP_SEALED,        collection: 'trips',       storeKey: STORAGE_KEYS.TRIPS,        fbPath: FB_PATH.TRIPS,        stateKey: 'trips',       loaded: EVENTS.TRIPS_LOADED,        kind: 'seal' },
    // 備註：trips 的「刪除」(TRIP_DELETED) 目前未定義事件；trip.remove() 走 TRIP_UPDATED
    //        未來若新增 TRIP_DELETED 事件再補追蹤；現行 trip 刪除較少見
  ];

  var _list = [];

  function init() {
    _list = Store.readArray(STORAGE_KEYS.RECYCLE_BIN);
  }

  function _save() {
    Store.writeArray(STORAGE_KEYS.RECYCLE_BIN, _list);
  }

  function _snapshot(meta, payload) {
    // delete 事件 payload 常為 id 字串；需從 state 反查實體快照（含 _fbKey）
    if (payload && typeof payload === 'object' && payload._fbKey) return payload;
    var entityId = (typeof payload === 'string') ? payload : (payload && payload.id) || '';
    if (!entityId) return null;
    var arr = (typeof State !== 'undefined' ? State.get(meta.stateKey) : null) || [];
    var found = arr.find(function(x) { return x && x.id === entityId; });
    return found || null;
  }

  /**
   * 1.16 統一埋點：訂閱 EventBus 刪除/封存事件，自動快照進回收站
   * 在 initApp 中呼叫一次即可涵蓋所有 data 模組的 remove/sealTrip
   */
  function autoTrack() {
    TRACK_EVENTS.forEach(function(m) {
      EventBus.on(m.event, function(payload) {
        var snap = _snapshot(m, payload);
        var entityId = (typeof payload === 'string') ? payload : (payload && payload.id) || '';
        var fbKey = (snap && snap._fbKey) || '';
        _list.push({
          id: 'R' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
          kind: m.kind,
          collection: m.collection,
          entityId: entityId,
          fbKey: fbKey,
          snapshot: snap,
          at: Date.now(),
        });
        if (_list.length > 500) _list = _list.slice(-500);
        _save();
      });
    });
  }

  function list() {
    return _list.slice().sort(function(a, b) { return b.at - a.at; });
  }

  function count() {
    return _list.length;
  }

  /**
   * 還原：刪除→取消墓碑（_reviveAt 新時間戳跨裝置復活）；封存→解封
   */
  function restore(itemId) {
    var idx = _list.findIndex(function(x) { return x.id === itemId; });
    if (idx < 0) return false;
    var item = _list[idx];
    var meta = TRACK_EVENTS.find(function(m) { return m.collection === item.collection; });
    if (!meta) return false;

    var arr = Store.readArray(meta.storeKey);
    var i = arr.findIndex(function(x) { return x && x._fbKey === item.fbKey; });
    var now = Date.now();

    if (item.kind === 'delete') {
      if (i >= 0) {
        arr[i]._deleted = false;
        arr[i]._updatedAt = now;
        arr[i]._reviveAt = now; // 復活旗標：merge 時活記錄帶 _reviveAt 新於墓碑 _updatedAt 即贏
      }
    } else if (item.kind === 'seal') {
      if (i >= 0) {
        // 解封：status 回復為待結帳（封存前的狀態）；清封存專屬欄位
        arr[i].status = 'pending_settlement';
        delete arr[i].sealedAt;
        delete arr[i].sealedMonth;
        arr[i]._updatedAt = now;
      }
    }

    Store.writeArray(meta.storeKey, arr);
    if (typeof State !== 'undefined') State.set(meta.stateKey, arr);
    if (typeof enqueue === 'function') {
      var obj = {}; obj[arr[i]._fbKey] = arr[i];
      enqueue(meta.fbPath, obj);
    }
    if (typeof EventBus !== 'undefined') EventBus.emit(meta.loaded, arr);
    if (typeof AuditLog !== 'undefined') {
      try { AuditLog.log(item.collection, 'restore', item.entityId, '還原' + (item.kind === 'seal' ? '（解封）' : '（取消刪除）'), null, arr[i]); } catch (e) {}
    }

    _list.splice(idx, 1);
    _save();
    if (typeof EventBus !== 'undefined') EventBus.emit(EVENTS.RESTORED, item);
    return true;
  }

  /** 永久移除（不還原，僅從回收站清掉；實體墓碑/封存不動） */
  function removeItem(itemId) {
    var idx = _list.findIndex(function(x) { return x.id === itemId; });
    if (idx < 0) return false;
    _list.splice(idx, 1);
    _save();
    return true;
  }

  function clear() {
    _list = [];
    _save();
  }

  /** 過期自動清理（RECYCLE_BIN_RETENTION_DAYS） */
  function prune() {
    var cutoff = Date.now() - CONFIG.RECYCLE_BIN_RETENTION_DAYS * 24 * 60 * 60 * 1000;
    var kept = _list.filter(function(x) { return x.at >= cutoff; });
    if (kept.length < _list.length) {
      _list = kept;
      _save();
      console.log('[RecycleBin] Pruned ' + (_list.length - 0) + ' items; kept ' + kept.length);
    }
  }

  // 舊 RecentlyDeleted API 相容（add/has 已無呼叫者；保留以防外部引用）
  function add(fbKey, collection) {
    _list.push({ id: 'R' + Date.now() + '_' + Math.random().toString(36).substr(2, 6), kind: 'delete', collection: collection, fbKey: fbKey, entityId: '', snapshot: null, at: Date.now() });
    if (_list.length > 500) _list = _list.slice(-500);
    _save();
  }
  function has(fbKey) {
    return _list.some(function(x) { return x.fbKey === fbKey; });
  }

  return {
    init: init,
    autoTrack: autoTrack,
    list: list,
    count: count,
    restore: restore,
    removeItem: removeItem,
    clear: clear,
    prune: prune,
    add: add,
    has: has,
  };
})();

// 相容別名：app.js 既呼叫 RecentlyDeleted.init()，bridge.js 暴露 window.RecentlyDeleted
var RecentlyDeleted = RecycleBin;


// === src/sync/backup.js ===
/**
 * sync/backup.js — 全系統 JSON 備份匯出 / 匯入復原 / 定期提醒 (Phase 1C)
 * 依赖: core/constants.js, core/datetime.js, core/events.js, core/state.js, core/store.js, data/auditLog.js, sync/merger.js, sync/uploader.js
 *
 * 1.11 匯出：打包所有資料集合 + 版本資訊，時間戳檔名
 * 1.12 匯入：走 mergeArray 合併（墓碑贏 > 時間戳決勝 > 取聯集），不覆蓋、不重複
 * 1.13 提醒：可配置頻率，逾期在啟動時提醒一次
 */

var Backup = (function() {
  var FORMAT = 'tw-backup';
  var FORMAT_VERSION = 1;

  // 本機狀態鍵（不入備份檔）
  var LAST_BACKUP_KEY  = STORAGE_PREFIX + 'last_backup_time';
  var REMINDER_KEY     = STORAGE_PREFIX + 'backup_reminder';

  // 陣列型集合（與 watchers.js watchList 對齊：mergeArray + State.set + 事件）
  // 注意：事件一律靜態引用（E2.2 禁止 EVENTS[動態組字]）
  var _ARRAY_COLLECTIONS = [
    { name: 'members',      storeKey: STORAGE_KEYS.MEMBERS,      stateKey: 'members',      event: EVENTS.MEMBERS_LOADED,      fbKey: 'MEMBERS' },
    { name: 'agents',       storeKey: STORAGE_KEYS.AGENTS,       stateKey: 'agents',       event: EVENTS.AGENTS_LOADED,       fbKey: 'AGENTS' },
    { name: 'shareholders', storeKey: STORAGE_KEYS.SHAREHOLDERS, stateKey: 'shareholders', event: EVENTS.SHAREHOLDERS_LOADED, fbKey: 'SHAREHOLDERS' },
    { name: 'trips',        storeKey: STORAGE_KEYS.TRIPS,        stateKey: 'trips',        event: EVENTS.TRIPS_LOADED,        fbKey: 'TRIPS' },
    { name: 'memberTxs',    storeKey: STORAGE_KEYS.MEMBER_TXS,   stateKey: 'memberTxs',    event: EVENTS.MTX_LOADED,          fbKey: 'MEMBER_TXS' },
    { name: 'bookings',     storeKey: STORAGE_KEYS.BOOKINGS,     stateKey: 'bookings',     event: EVENTS.BOOKINGS_LOADED,     fbKey: 'BOOKINGS' },
    { name: 'supplements',  storeKey: STORAGE_KEYS.SUPPLEMENTS,  stateKey: 'supplements',  event: EVENTS.SYNC_COMPLETE,       fbKey: 'SUPPLEMENTS' },
    { name: 'settings',     storeKey: STORAGE_KEYS.SETTINGS,     stateKey: 'settings',     event: EVENTS.SETTINGS_LOADED,     fbKey: 'SETTINGS' },
    { name: 'extraIncome',  storeKey: STORAGE_KEYS.EXTRA_INCOME, stateKey: 'extraIncome',  event: EVENTS.SYNC_COMPLETE,       fbKey: 'EXTRA_INCOME' },
    { name: 'hotelConfig',  storeKey: STORAGE_KEYS.HOTEL_CONFIG, stateKey: 'hotelConfig',  event: EVENTS.HOTEL_CONFIG_LOADED, fbKey: 'HOTEL_CONFIG' },
    { name: 'users',        storeKey: STORAGE_KEYS.USERS,       stateKey: 'users',        event: EVENTS.USERS_LOADED,        fbKey: 'USERS' },
    { name: 'auditLog',      storeKey: STORAGE_KEYS.AUDIT_LOG,    stateKey: 'auditLog',     event: EVENTS.AUDIT_LOADED,        fbKey: 'AUDIT_LOG' },
  ];

  // 物件型集合（鍵值合併，addedAt 新者勝 — 與 watchers.js EMPLOYEE_LIST 同規則）
  var _OBJECT_COLLECTIONS = [
    { name: 'employeeList', storeKey: STORAGE_KEYS.EMPLOYEE_LIST, fbKey: 'EMPLOYEE_LIST' },
  ];

  // 原樣保存鍵：匯出帶走；匯入僅在本機為空時回填（不搶既有資料）
  var _RAW_KEYS = [
    { name: 'recycleBin',       storeKey: STORAGE_KEYS.RECYCLE_BIN },
    { name: 'recentlyDeleted',  storeKey: STORAGE_KEYS.RECYCLE_BIN }, // 遺留相容：舊備份檔以 recentlyDeleted 命名 → 還原至同一回收站
    { name: 'archives',        storeKey: STORAGE_KEYS.ARCHIVES },
    { name: 'closedMonths',    storeKey: STORAGE_KEYS.CLOSED_MONTHS },
    { name: 'vipHalls',        storeKey: STORAGE_KEYS.VIP_HALLS },
  ];

  // 絕不進備份（auth/sync/op_log/衝突暫存 等本機運行狀態）：
  // 匯出僅打包上面列舉的資料集合，其餘 localStorage 鍵一律不帶走。
  // SYNC_CONFLICTS 為設備本機可視化暫存（不跨設備），不備份。

  /* ================================================================
   * 1.11 全系統 JSON 備份匯出
   * ================================================================ */

  function buildBackupPayload() {
    var data = {};
    var counts = {};

    _ARRAY_COLLECTIONS.concat(_OBJECT_COLLECTIONS).concat(_RAW_KEYS).forEach(function(c) {
      var raw = localStorage.getItem(c.storeKey);
      if (raw === null) return; // 未使用的集合不打包
      var parsed;
      try { parsed = JSON.parse(raw); } catch (e) { return; }
      data[c.name] = parsed;
      if (Array.isArray(parsed)) counts[c.name] = parsed.length;
      else if (parsed && typeof parsed === 'object') counts[c.name] = Object.keys(parsed).length;
    });

    return {
      meta: {
        format: FORMAT,
        version: FORMAT_VERSION,
        exportedAt: Date.now(),
        exportedAtStr: TWDate.toTWISOString(Date.now()).replace('T', ' ').slice(0, 19),
        appVersion: (typeof APP !== 'undefined' && APP && APP.VERSION) || '',
        buildVersion: (typeof window !== 'undefined' && window.TW_BUILD_VERSION) || '',
        devMode: !!_TW_IS_DEV,
        dataPath: FB_DATA_ROOT,
        counts: counts,
      },
      data: data,
    };
  }

  function exportBackup() {
    var payload = buildBackupPayload();
    var json = JSON.stringify(payload, null, 2);

    // 檔名時間戳用台灣時間（與資料判斷同一時鐘）
    var ts = TWDate.toTWISOString(Date.now());
    var filename = 'tw-backup-' + ts.slice(0, 10).replace(/-/g, '') + '-' +
                   ts.slice(11, 19).replace(/:/g, '') + '.json';

    var b64 = _utf8ToBase64(json);
    var delivered = false;

    // 原生環境：Filesystem + Share（APP_MODULES 在後段載入，故經 window 取用）
    if (typeof window !== 'undefined' && window.NativeBridge && window.NativeBridge.shareFile) {
      try { delivered = window.NativeBridge.shareFile(filename, b64, 'application/json'); }
      catch (e) { console.error('[Backup] shareFile', e); }
    }
    if (!delivered) _webDownload(filename, json);

    localStorage.setItem(LAST_BACKUP_KEY, String(Date.now()));
    if (typeof AuditLog !== 'undefined') AuditLog.log('backup', 'export', '', '匯出全系統備份（' + filename + '）', null, payload.meta.counts);
    return { filename: filename, sizeBytes: json.length, counts: payload.meta.counts };
  }

  function _utf8ToBase64(str) {
    if (typeof btoa === 'function') return btoa(unescape(encodeURIComponent(str)));
    if (typeof Buffer !== 'undefined' && Buffer.from) return Buffer.from(str, 'utf8').toString('base64');
    throw new Error('此環境不支援 base64 編碼');
  }

  function _webDownload(filename, text) {
    if (typeof document === 'undefined') return; // Node 測試環境
    var blob = new Blob([text], { type: 'application/json' });
    // v1.9.1 iOS PWA：優先用系統分享面板（可直接存到「檔案」或傳到微信），
    // 舊的 a[download] 在 iOS 主畫面模式常無反應
    if (navigator.share && navigator.canShare) {
      try {
        var file = new File([blob], filename, { type: 'application/json' });
        if (navigator.canShare({ files: [file] })) {
          navigator.share({ files: [file], title: filename }).catch(function() {});
          return;
        }
      } catch (e) { /* fallthrough */ }
    }
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(function() { URL.revokeObjectURL(url); }, 5000);
  }

  /* ================================================================
   * 1.12 備份匯入復原（merger 合併：不覆蓋、不重複）
   * ================================================================ */

  // 讀檔頭供頁面確認（不執行匯入）：回傳 meta 或拋錯
  function peekMeta(jsonText) {
    var payload = _parseAndValidate(jsonText);
    return payload.meta;
  }

  function importBackup(jsonText, options) {
    options = options || {};
    var payload = _parseAndValidate(jsonText);
    var backupData = payload.data || {};
    var results = [];
    var uploadMap = {};
    var touched = false;

    // 陣列集合：mergeArray（墓碑贏 > 時間戳 > 聯集）
    _ARRAY_COLLECTIONS.forEach(function(c) {
      var backupArr = backupData[c.name];
      if (backupArr === undefined) return;
      if (!Array.isArray(backupArr)) {
        results.push({ name: c.name, error: '格式不符（非陣列），已跳過' });
        return;
      }
      var local = Store.readArray(c.storeKey);
      var merged = mergeArray(local, backupArr);
      Store.writeArray(c.storeKey, merged);
      State.set(c.stateKey, merged);
      EventBus.emit(c.event, merged);
      if (c.fbKey) uploadMap[c.fbKey] = merged;
      touched = true;
      results.push({
        name: c.name,
        before: local.length,
        fromBackup: backupArr.length,
        after: merged.length,
        added: merged.length - local.length,
      });
    });

    // 物件集合：鍵值合併（addedAt 新者勝）
    _OBJECT_COLLECTIONS.forEach(function(c) {
      var backupObj = backupData[c.name];
      if (backupObj === undefined) return;
      if (!backupObj || typeof backupObj !== 'object' || Array.isArray(backupObj)) {
        results.push({ name: c.name, error: '格式不符（非物件），已跳過' });
        return;
      }
      var local = Store.read(c.storeKey) || {};
      var merged = Object.assign({}, local);
      var added = 0;
      Object.keys(backupObj).forEach(function(k) {
        var r = backupObj[k];
        if (!merged[k] || (r && r.addedAt && r.addedAt > (merged[k].addedAt || 0))) {
          if (!merged[k]) added++;
          merged[k] = r;
        }
      });
      Store.write(c.storeKey, merged);
      if (c.fbKey) uploadMap[c.fbKey] = merged;
      touched = true;
      results.push({
        name: c.name,
        before: Object.keys(local).length,
        fromBackup: Object.keys(backupObj).length,
        after: Object.keys(merged).length,
        added: added,
      });
    });

    // 原樣鍵：僅本機為空時回填（不搶既有資料）
    _RAW_KEYS.forEach(function(c) {
      var backupVal = backupData[c.name];
      if (backupVal === undefined) return;
      var local = Store.read(c.storeKey);
      var localEmpty = local === null || local === undefined ||
                       (Array.isArray(local) && local.length === 0) ||
                       (local && typeof local === 'object' && !Array.isArray(local) && Object.keys(local).length === 0);
      if (localEmpty) {
        Store.write(c.storeKey, backupVal);
        results.push({ name: c.name, before: 0, fromBackup: 1, after: 1, added: 1, rawRestored: true });
      } else {
        results.push({ name: c.name, skipped: '本機已有資料，保留本機版' });
      }
    });

    // 合併結果推上雲端（同步用聯集，遠端舊資料時間戳決勝不會被倒退）
    if (touched && options.upload !== false && typeof Uploader !== 'undefined') {
      try { Uploader.syncUploadAll(uploadMap); } catch (e) {
        console.error('[Backup] 上傳合併結果失敗（本機資料已救回，稍後同步）', e);
      }
    }

    if (typeof AuditLog !== 'undefined') AuditLog.log('backup', 'import', '', '匯入備份（' + results.length + ' 個集合）', null, payload.meta.counts);
    return { ok: true, meta: payload.meta, collections: results, uploaded: touched && options.upload !== false };
  }

  function _parseAndValidate(jsonText) {
    var payload;
    try { payload = JSON.parse(jsonText); }
    catch (e) { throw new Error('不是合法的 JSON 檔案'); }
    if (!payload || !payload.meta || payload.meta.format !== FORMAT) {
      throw new Error('不是本系統的備份檔（缺少格式標記）');
    }
    if (payload.meta.version > FORMAT_VERSION) {
      throw new Error('備份檔版本較新（v' + payload.meta.version + '），請先升級 App');
    }
    if (!payload.data || typeof payload.data !== 'object') {
      throw new Error('備份檔缺少資料區塊');
    }
    return payload;
  }

  /* ================================================================
   * 1.13 定期自動備份提醒
   * ================================================================ */

  var DEFAULT_INTERVAL_DAYS = 7;

  function getReminderConfig() {
    var raw = localStorage.getItem(REMINDER_KEY);
    if (!raw) return { enabled: false, intervalDays: DEFAULT_INTERVAL_DAYS };
    try {
      var cfg = JSON.parse(raw);
      return {
        enabled: !!cfg.enabled,
        intervalDays: Number(cfg.intervalDays) > 0 ? Number(cfg.intervalDays) : DEFAULT_INTERVAL_DAYS,
      };
    } catch (e) {
      return { enabled: false, intervalDays: DEFAULT_INTERVAL_DAYS };
    }
  }

  function setReminderConfig(enabled, intervalDays) {
    localStorage.setItem(REMINDER_KEY, JSON.stringify({
      enabled: !!enabled,
      intervalDays: intervalDays > 0 ? intervalDays : DEFAULT_INTERVAL_DAYS,
      savedAt: Date.now(),
    }));
  }

  function getLastBackupAt() {
    var raw = localStorage.getItem(LAST_BACKUP_KEY);
    var ts = raw ? Number(raw) : 0;
    return (raw && !isNaN(ts)) ? ts : null;
  }

  // 是否逾期未備份（供設定頁顯示）
  function isOverdue() {
    var cfg = getReminderConfig();
    if (!cfg.enabled) return false;
    var last = getLastBackupAt();
    if (!last) return true;
    return (Date.now() - last) > cfg.intervalDays * 86400000;
  }

  // 啟動時檢查：逾期 → 回傳提醒文字（每 24 小時最多提醒一次）；未逾期 → null
  function checkReminder() {
    var cfg = getReminderConfig();
    if (!cfg.enabled) return null;
    if (!isOverdue()) return null;

    var lastRemind = _getLastRemindAt();
    if (lastRemind && (Date.now() - lastRemind) < 86400000) return null;
    localStorage.setItem(REMINDER_KEY, JSON.stringify({
      enabled: cfg.enabled,
      intervalDays: cfg.intervalDays,
      lastRemindAt: Date.now(),
    }));

    var days = Math.floor((Date.now() - (getLastBackupAt() || 0)) / 86400000);
    return '距離上次資料備份已 ' + days + ' 天，建議到「設定 → 資料備份」匯出備份檔';
  }

  function _getLastRemindAt() {
    try {
      var cfg = JSON.parse(localStorage.getItem(REMINDER_KEY) || '{}');
      return cfg.lastRemindAt || null;
    } catch (e) { return null; }
  }

  return {
    FORMAT: FORMAT,
    exportBackup: exportBackup,
    buildBackupPayload: buildBackupPayload,
    importBackup: importBackup,
    peekMeta: peekMeta,
    getReminderConfig: getReminderConfig,
    setReminderConfig: setReminderConfig,
    getLastBackupAt: getLastBackupAt,
    isOverdue: isOverdue,
    checkReminder: checkReminder,
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Backup;
}


// === src/sync/watchers.js ===
/**
 * sync/watchers.js — 即时监听器
 * 依赖: calc/member.js, core/constants.js, core/events.js, core/state.js, core/store.js, sync/conflicts.js, sync/firebase.js, sync/merger.js
 *          core/state.js, core/store.js, core/events.js
 */

var _watchers = [];
var _initialized = false;

// 每個 watcher 獨立 syncing flag，避免共用旗標導致 MEMBER_TXS 被其他 watcher 阻塞
// → Bot 寫入後 Web 端無法即時顯示的根因

function initWatchers() {
  if (_initialized) return;
  _initialized = true;
  if (!isReady()) {
    onReady(function() { _setupWatchers(); });
  } else {
    _setupWatchers();
  }
}

function _setupWatchers() {
  var watchList = [
    { key: 'MEMBERS',       storeKey: STORAGE_KEYS.MEMBERS,       event: EVENTS.MEMBERS_LOADED,       stateKey: 'members' },
    { key: 'AGENTS',        storeKey: STORAGE_KEYS.AGENTS,        event: EVENTS.AGENTS_LOADED,        stateKey: 'agents' },
    { key: 'SHAREHOLDERS',  storeKey: STORAGE_KEYS.SHAREHOLDERS,  event: EVENTS.SHAREHOLDERS_LOADED,  stateKey: 'shareholders' },
    { key: 'TRIPS',         storeKey: STORAGE_KEYS.TRIPS,         event: EVENTS.TRIPS_LOADED,         stateKey: 'trips' },
    { key: 'MEMBER_TXS',    storeKey: STORAGE_KEYS.MEMBER_TXS,    event: EVENTS.MTX_LOADED,           stateKey: 'memberTxs' },
    { key: 'WALLET_TXS',    storeKey: STORAGE_KEYS.WALLET_TXS,    event: EVENTS.WALLET_TXS_LOADED,    stateKey: 'walletTxs' },
    { key: 'PENDING_EXPS',   storeKey: STORAGE_KEYS.PENDING_EXPS,   event: EVENTS.PENDING_EXPS_LOADED,  stateKey: 'pendingExps' }, // v2.1 預支開銷
    { key: 'CATALOG',        storeKey: STORAGE_KEYS.CATALOG,        event: EVENTS.CATALOG_LOADED,       stateKey: 'catalog' },          // v2.2.2 品項主檔
    { key: 'LOANS',          storeKey: STORAGE_KEYS.LOANS,          event: EVENTS.LOANS_LOADED,         stateKey: 'loans' }, // v2.2 港幣借支
    { key: 'BOOKINGS',      storeKey: STORAGE_KEYS.BOOKINGS,      event: EVENTS.BOOKINGS_LOADED,      stateKey: 'bookings' },
    { key: 'SUPPLEMENTS',   storeKey: STORAGE_KEYS.SUPPLEMENTS,   event: EVENTS.SYNC_COMPLETE,        stateKey: 'supplements' },
    { key: 'SETTINGS',      storeKey: STORAGE_KEYS.SETTINGS,      event: EVENTS.SETTINGS_LOADED,      stateKey: 'settings' },
    { key: 'EXTRA_INCOME',  storeKey: STORAGE_KEYS.EXTRA_INCOME,  event: EVENTS.SYNC_COMPLETE,        stateKey: 'extraIncome' },
    { key: 'HOTEL_CONFIG',  storeKey: STORAGE_KEYS.HOTEL_CONFIG,  event: EVENTS.HOTEL_CONFIG_LOADED,  stateKey: 'hotelConfig' },
    { key: 'USERS',         storeKey: STORAGE_KEYS.USERS,         event: EVENTS.USERS_LOADED,         stateKey: 'users' },
    { key: 'AUDIT_LOG',      storeKey: STORAGE_KEYS.AUDIT_LOG,      event: EVENTS.AUDIT_LOADED,         stateKey: 'auditLog' },
  ];

  watchList.forEach(function(w) {
    var path = FB_PATH[w.key];
    var _syncing = false;  // 每個 watcher 獨立旗標，不互相阻塞
    var off = fbOn(path, function(remoteVal) {
      if (_syncing) return;
      _syncing = true;
      try {
        var local = Store.readArray(w.storeKey);
        var remote = remoteVal ? Object.values(remoteVal) : [];
        // 1.15 衝突可視化：用帶衝突偵測的合併，衝突交由 Conflicts 記錄供操作者審視
        var mergeRes = mergeArrayWithConflicts(local, remote, w.stateKey);
        var merged = mergeRes.merged;
        if (mergeRes.conflicts.length > 0 && typeof Conflicts !== 'undefined') {
          Conflicts.record(w.stateKey, mergeRes.conflicts);
        }

        /* MEMBER_TXS: Bot 只寫入 outCode/backCode/washCode��需重新計算衍生欄位 */
        if (w.key === 'MEMBER_TXS' && typeof calcMemberTx === 'function') {
          var recalcCount = 0;
          merged = merged.map(function(tx) {
            if (!tx || tx._deleted) return tx;
            if (tx.outCode === undefined && tx.backCode === undefined && tx.washCode === undefined) return tx;
            var calcResult = calcMemberTx(tx);
            var needsUpdate = false;
            ['upDown', 'ntResult', 'commission1', 'commission2', 'subtotal', 'totalSettlement', 'settlementAmount', 'verifyStatus'].forEach(function(k) {
              if (calcResult[k] !== undefined && calcResult[k] !== (tx[k] || 0)) {
                needsUpdate = true;
              }
            });
            if (needsUpdate) {
              recalcCount++;
              return Object.assign({}, tx, calcResult);
            }
            return tx;
          });
          if (recalcCount > 0) {
            console.log('[Watchers] MEMBER_TXS recalculated', recalcCount, 'transactions');
          }
        }

        /* v2.3.6 孤兒 Bot 訂房自動綁團：Bot 寫入 tripId 恆為空，
           用會員隸屬反查團補綁，讓房務明細/配額即時歸屬正確 */
        if (w.key === 'BOOKINGS' && typeof Bookings !== 'undefined' && Bookings.bindOrphans) {
          var orphanChanged = Bookings.bindOrphans(merged, State.get('trips') || []);
          if (orphanChanged.length > 0) {
            var oPayloads = {};
            orphanChanged.forEach(function(b) { if (b._fbKey) oPayloads[b._fbKey] = b; });
            if (Object.keys(oPayloads).length > 0 && typeof enqueue === 'function') {
              enqueue(FB_PATH.BOOKINGS, oPayloads);
            }
            console.log('[Watchers] BOOKINGS orphan-bind:', orphanChanged.length);
          }
        }
        /* v2.3.6 團建立/異動後回頭綁既有孤兒 Bot 訂房（先有訂房後建團的情境） */
        if (w.key === 'TRIPS' && typeof Bookings !== 'undefined' && Bookings.bindOrphans) {
          var bkArr = State.get('bookings') || [];
          var orphanChanged2 = Bookings.bindOrphans(bkArr, merged);
          if (orphanChanged2.length > 0) {
            Store.writeArray(STORAGE_KEYS.BOOKINGS, bkArr);
            State.set('bookings', bkArr);
            EventBus.emit(EVENTS.BOOKINGS_LOADED, bkArr);
            if (typeof updateSyncBaseline === 'function') updateSyncBaseline('bookings', bkArr);
            var oPayloads2 = {};
            orphanChanged2.forEach(function(b) { if (b._fbKey) oPayloads2[b._fbKey] = b; });
            if (Object.keys(oPayloads2).length > 0 && typeof enqueue === 'function') {
              enqueue(FB_PATH.BOOKINGS, oPayloads2);
            }
            console.log('[Watchers] TRIPS orphan-bind:', orphanChanged2.length);
          }
        }

        Store.writeArray(w.storeKey, merged);
        State.set(w.stateKey, merged);
        EventBus.emit(w.event, merged);
        updateSyncBaseline(w.stateKey, merged); // v2.3.1 三方比對基準（須在 recalc 之後）
      } catch(e) {
        console.error('[Watchers] ' + w.key, e);
      }
      _syncing = false;
    });
    _watchers.push(off);
  });

  /* EMPLOYEE_LIST 特殊處理（物件非陣列） */
  (function() {
    var _elSyncing = false;
    var off = fbOn(FB_PATH.EMPLOYEE_LIST, function(remoteVal) {
      if (_elSyncing) return;
      _elSyncing = true;
      try {
        var local = Store.read(STORAGE_KEYS.EMPLOYEE_LIST) || {};
        var remote = remoteVal || {};
        var merged = Object.assign({}, local);
        Object.keys(remote).forEach(function(k) {
          if (!merged[k] || (remote[k].addedAt && remote[k].addedAt > (merged[k].addedAt || 0))) {
            merged[k] = remote[k];
          }
        });
        Store.write(STORAGE_KEYS.EMPLOYEE_LIST, merged);
      } catch(e) {
        console.error('[Watchers] EMPLOYEE_LIST', e);
      }
      _elSyncing = false;
    });
    _watchers.push(off);
  })();

  // 连接状态追蹤 + 斷線重連自動全量同步
  var _wasConnected = undefined;
  fbOn(FB_PATH.CONNECTED, function(val) {
    var isConnected = !!val;
    State.set('connected', isConnected);
    EventBus.emit(EVENTS.CONNECTION_CHANGED, isConnected);

    // 從斷線恢復時，觸發全量同步確保與遠端一致
    if (isConnected && _wasConnected === false) {
      console.log('[Watchers] Connection restored, triggering full re-sync...');
      _resyncAll();
    }
    _wasConnected = isConnected;
  });
}

// 斷線重連時，手動從 Firebase 拉取最新數據合併到本地
function _resyncAll() {
  var syncPaths = [
    FB_PATH.MEMBERS, FB_PATH.AGENTS, FB_PATH.SHAREHOLDERS,
    FB_PATH.TRIPS, FB_PATH.MEMBER_TXS, FB_PATH.WALLET_TXS, FB_PATH.PENDING_EXPS, FB_PATH.LOANS, FB_PATH.CATALOG, FB_PATH.BOOKINGS,
    FB_PATH.SUPPLEMENTS, FB_PATH.SETTINGS, FB_PATH.EXTRA_INCOME,
    FB_PATH.HOTEL_CONFIG, FB_PATH.USERS,
    FB_PATH.AUDIT_LOG,
  ];
  var storeMap = {};
  storeMap[FB_PATH.MEMBERS]       = { storeKey: STORAGE_KEYS.MEMBERS,       event: EVENTS.MEMBERS_LOADED,       stateKey: 'members' };
  storeMap[FB_PATH.AGENTS]        = { storeKey: STORAGE_KEYS.AGENTS,        event: EVENTS.AGENTS_LOADED,        stateKey: 'agents' };
  storeMap[FB_PATH.SHAREHOLDERS]  = { storeKey: STORAGE_KEYS.SHAREHOLDERS,  event: EVENTS.SHAREHOLDERS_LOADED,  stateKey: 'shareholders' };
  storeMap[FB_PATH.TRIPS]         = { storeKey: STORAGE_KEYS.TRIPS,         event: EVENTS.TRIPS_LOADED,         stateKey: 'trips' };
  storeMap[FB_PATH.MEMBER_TXS]    = { storeKey: STORAGE_KEYS.MEMBER_TXS,    event: EVENTS.MTX_LOADED,           stateKey: 'memberTxs' };
  storeMap[FB_PATH.WALLET_TXS]    = { storeKey: STORAGE_KEYS.WALLET_TXS,    event: EVENTS.WALLET_TXS_LOADED,    stateKey: 'walletTxs' }; // v2.0 錢包
  storeMap[FB_PATH.PENDING_EXPS]  = { storeKey: STORAGE_KEYS.PENDING_EXPS,  event: EVENTS.PENDING_EXPS_LOADED,  stateKey: 'pendingExps' }; // v2.1 預支開銷
  storeMap[FB_PATH.LOANS]         = { storeKey: STORAGE_KEYS.LOANS,         event: EVENTS.LOANS_LOADED,         stateKey: 'loans' }; // v2.2 港幣借支
  storeMap[FB_PATH.CATALOG]       = { storeKey: STORAGE_KEYS.CATALOG,       event: EVENTS.CATALOG_LOADED,       stateKey: 'catalog' }; // v2.2.2 品項主檔
  storeMap[FB_PATH.BOOKINGS]      = { storeKey: STORAGE_KEYS.BOOKINGS,      event: EVENTS.BOOKINGS_LOADED,      stateKey: 'bookings' };
  storeMap[FB_PATH.SUPPLEMENTS]   = { storeKey: STORAGE_KEYS.SUPPLEMENTS,   event: EVENTS.SYNC_COMPLETE,        stateKey: 'supplements' };
  storeMap[FB_PATH.SETTINGS]      = { storeKey: STORAGE_KEYS.SETTINGS,      event: EVENTS.SETTINGS_LOADED,      stateKey: 'settings' };
  storeMap[FB_PATH.EXTRA_INCOME]  = { storeKey: STORAGE_KEYS.EXTRA_INCOME,  event: EVENTS.SYNC_COMPLETE,        stateKey: 'extraIncome' };
  storeMap[FB_PATH.HOTEL_CONFIG]  = { storeKey: STORAGE_KEYS.HOTEL_CONFIG,  event: EVENTS.HOTEL_CONFIG_LOADED,  stateKey: 'hotelConfig' };
  storeMap[FB_PATH.USERS]         = { storeKey: STORAGE_KEYS.USERS,         event: EVENTS.USERS_LOADED,         stateKey: 'users' };
  storeMap[FB_PATH.AUDIT_LOG]      = { storeKey: STORAGE_KEYS.AUDIT_LOG,      event: EVENTS.AUDIT_LOADED,         stateKey: 'auditLog' };

  syncPaths.forEach(function(path) {
    var cfg = storeMap[path];
    if (!cfg) return;
    fbOnce(path).then(function(remoteVal) {
      var local = Store.readArray(cfg.storeKey);
      var remote = remoteVal ? Object.values(remoteVal) : [];
      if (remote.length === 0) return; // 無遠端數據，不覆蓋
      // 1.15 衝突偵測（與主 watcher 一致）
      var mergeRes = mergeArrayWithConflicts(local, remote, cfg.stateKey);
      var merged = mergeRes.merged;
      if (mergeRes.conflicts.length > 0 && typeof Conflicts !== 'undefined') {
        Conflicts.record(cfg.stateKey, mergeRes.conflicts);
      }

      // MEMBER_TXS 需要重新計算衍生欄位
      if (cfg.event === EVENTS.MTX_LOADED && typeof calcMemberTx === 'function') {
        merged = merged.map(function(tx) {
          if (!tx || tx._deleted) return tx;
          if (tx.outCode === undefined && tx.backCode === undefined && tx.washCode === undefined) return tx;
          return Object.assign({}, tx, calcMemberTx(tx));
        });
      }

      Store.writeArray(cfg.storeKey, merged);
      State.set(cfg.stateKey, merged);
      EventBus.emit(cfg.event, merged);
      updateSyncBaseline(cfg.stateKey, merged); // v2.3.1 三方比對基準（須在 recalc 之後）
    }).catch(function(e) {
      console.error('[Watchers] _resyncAll failed for ' + path, e);
    });
  });
}

function stopWatchers() {
  _watchers.forEach(function(off) { try { off(); } catch(e) {} });
  _watchers = [];
}

var Watchers = {
  init: initWatchers,
  stop: stopWatchers,
};


// === src/data/members.js ===
/**
 * data/members.js — 會員 CRUD
 * 依赖: core/constants.js, core/schema.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var Members = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.MEMBERS);
    State.set('members', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.MEMBERS, arr);
    State.set('members', arr);
  }
  function getAll() {
    return (State.get('members') || []).filter(function(m) { return !m._deleted; });
  }
  function getById(id) {
    return getAll().find(function(m) { return m.id === id; });
  }
  function create(data) {
    var now = Date.now();
    var member = {
      id: data.id || ('M' + now),
      casinoId: data.casinoId || '',
      name: data.name || '',
      agentId: data.agentId || '',
      shareholderId: data.shareholderId || '',
      rate1: data.rate1 || 4.2,
      rebate1: data.rebate1 || 0.01,
      rate2: data.rate2 || 0.8,
      rebate2: data.rebate2 || 0.018,
      status: data.status || MEMBER_STATUS.DRAFT,
      active: true,
      createdAt: now,
      _fbKey: 'member_' + (data.id || now),
      _updatedAt: now,
    };
    if (!Schema.sanitize('members', member)) return null; // E2.3 入口驗證
    var arr = State.get('members') || [];
    arr.push(member);
    save(arr);
    var obj = {}; obj[member._fbKey] = member;
    enqueue(FB_PATH.MEMBERS, obj);
    EventBus.emit(EVENTS.MEMBER_CREATED, member);
    return member;
  }
  function update(id, patch) {
    var arr = State.get('members') || [];
    var idx = arr.findIndex(function(m) { return m.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    if (!Schema.sanitize('members', merged)) return null; // E2.3 入口驗證（含 normalize 後回寫）
    Object.assign(arr[idx], merged, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.MEMBERS, obj);
    EventBus.emit(EVENTS.MEMBER_UPDATED, arr[idx]);
    return arr[idx];
  }
  function remove(id) {
    var arr = State.get('members') || [];
    var idx = arr.findIndex(function(m) { return m.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.MEMBERS, obj);
    EventBus.emit(EVENTS.MEMBER_DELETED, id);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, create: create, update: update, remove: remove };
})();


// === src/data/agents.js ===
/**
 * data/agents.js — 代理 CRUD
 * 依赖: core/constants.js, core/schema.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var Agents = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.AGENTS);
    State.set('agents', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.AGENTS, arr);
    State.set('agents', arr);
  }
  function getAll() {
    return (State.get('agents') || []).filter(function(a) { return !a._deleted; });
  }
  function getById(id) {
    return getAll().find(function(a) { return a.id === id; });
  }
  function getByShareholder(shId) {
    return getAll().filter(function(a) { return a.shareholderId === shId; });
  }
  function create(data) {
    var now = Date.now();
    var agent = {
      id: data.id || ('A' + now),
      name: data.name || '',
      shareholderId: data.shareholderId || '',
      profitMode: data.profitMode || PROFIT_MODE.STANDARD,
      customRebateRates: data.customRebateRates || null,
      active: true,
      createdAt: now,
      _fbKey: 'agent_' + (data.id || now),
      _updatedAt: now,
    };
    if (!Schema.sanitize('agents', agent)) return null; // E2.3 入口驗證
    var arr = State.get('agents') || [];
    arr.push(agent);
    save(arr);
    var obj = {}; obj[agent._fbKey] = agent;
    enqueue(FB_PATH.AGENTS, obj);
    EventBus.emit(EVENTS.AGENT_CREATED, agent);
    return agent;
  }
  function update(id, patch) {
    var arr = State.get('agents') || [];
    var idx = arr.findIndex(function(a) { return a.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    if (!Schema.sanitize('agents', merged)) return null; // E2.3 入口驗證
    Object.assign(arr[idx], merged, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.AGENTS, obj);
    EventBus.emit(EVENTS.AGENT_UPDATED, arr[idx]);
    return arr[idx];
  }
  function remove(id) {
    var arr = State.get('agents') || [];
    var idx = arr.findIndex(function(a) { return a.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.AGENTS, obj);
    EventBus.emit(EVENTS.AGENT_DELETED, id);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, getByShareholder: getByShareholder, create: create, update: update, remove: remove };
})();


// === src/data/shareholders.js ===
/**
 * data/shareholders.js — 股东 CRUD
 * 依赖: core/constants.js, core/schema.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var Shareholders = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.SHAREHOLDERS);
    State.set('shareholders', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.SHAREHOLDERS, arr);
    State.set('shareholders', arr);
  }
  function getAll() {
    return (State.get('shareholders') || []).filter(function(s) { return !s._deleted; });
  }
  function getById(id) {
    return getAll().find(function(s) { return s.id === id; });
  }
  function create(data) {
    var now = Date.now();
    var sh = {
      id: data.id || ('S' + now),
      name: data.name || '',
      shares: data.shares || 0,
      active: true,
      createdAt: now,
      _fbKey: 'sh_' + (data.id || now),
      _updatedAt: now,
    };
    if (!Schema.sanitize('shareholders', sh)) return null; // E2.3 入口驗證
    var arr = State.get('shareholders') || [];
    arr.push(sh);
    save(arr);
    var obj = {}; obj[sh._fbKey] = sh;
    enqueue(FB_PATH.SHAREHOLDERS, obj);
    EventBus.emit(EVENTS.SHAREHOLDER_CREATED, sh);
    return sh;
  }
  function update(id, patch) {
    var arr = State.get('shareholders') || [];
    var idx = arr.findIndex(function(s) { return s.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    if (!Schema.sanitize('shareholders', merged)) return null; // E2.3 入口驗證
    Object.assign(arr[idx], merged, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.SHAREHOLDERS, obj);
    EventBus.emit(EVENTS.SHAREHOLDER_UPDATED, arr[idx]);
    return arr[idx];
  }
  function remove(id) {
    var arr = State.get('shareholders') || [];
    var idx = arr.findIndex(function(s) { return s.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.SHAREHOLDERS, obj);
    EventBus.emit(EVENTS.SHAREHOLDER_DELETED, id);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, create: create, update: update, remove: remove };
})();


// === src/data/trips.js ===
/**
 * data/trips.js — 团生命周期管理
 * 依赖: core/constants.js, core/schema.js, core/datetime.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var Trips = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.TRIPS);
    State.set('trips', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.TRIPS, arr);
    State.set('trips', arr);
  }
  function getAll() {
    return (State.get('trips') || []).filter(function(t) { return !t._deleted; });
  }
  function getById(id) {
    return getAll().find(function(t) { return t.id === id; });
  }
  function getActiveByShareholder(shId) {
    return getAll().find(function(t) {
      return t.shareholderId === shId && t.status === TRIP_STATUS.ACTIVE;
    });
  }
  function create(data) {
    var now = Date.now();
    var dateStr = TWDate.todayStr().replace(/-/g, '');
    /* 序号取「同日所有团（含已删除墓碑）」的最大值+1，防止删除后撞号 */
    var seq = 1;
    (State.get('trips') || []).forEach(function(t) {
      if (t.id && t.id.indexOf('T' + dateStr) === 0) {
        var n = parseInt(t.id.substring(1 + dateStr.length), 10);
        if (!isNaN(n) && n >= seq) seq = n + 1;
      }
    });
    var seqStr = String(seq).padStart(3, '0');

    var trip = {
      id: 'T' + dateStr + seqStr,
      shareholderId: data.shareholderId || '',
      agentId: data.agentId || '',
      vipHallId: data.vipHallId || '',
      hallIds: data.hallIds || [],
      memberIds: data.memberIds || [],
      startDate: TWDate.todayStr(),
      visitDate: data.visitDate || TWDate.todayStr(), // v1.9.0 預計前往日
      hotelNote: data.hotelNote || '',                 // v1.9.0 預計酒店（客戶通知時記錄）
      label: data.label || '',                         // v2.1 團備註名稱（例：猴哥團東哥）
      endDate: null,
      status: TRIP_STATUS.ACTIVE,
      lastSettlementDate: null,
      sealedAt: null,
      sealedMonth: null,
      notes: data.notes || '',
      createdAt: now,
      _fbKey: 'trip_T' + dateStr + seq,
      _updatedAt: now,
    };
    if (!Schema.sanitize('trips', trip)) return null; // E2.3 入口驗證
    var arr = State.get('trips') || [];
    arr.push(trip);
    save(arr);
    var obj = {}; obj[trip._fbKey] = trip;
    enqueue(FB_PATH.TRIPS, obj);
    EventBus.emit(EVENTS.TRIP_CREATED, trip);
    return trip;
  }
  function update(id, patch) {
    var arr = State.get('trips') || [];
    var idx = arr.findIndex(function(t) { return t.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    if (!Schema.sanitize('trips', merged)) return null; // E2.3 入口驗證
    Object.assign(arr[idx], merged, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.TRIPS, obj);
    EventBus.emit(EVENTS.TRIP_UPDATED, arr[idx]);
    return arr[idx];
  }
  function sealTrip(id) {
    var trip = getById(id);
    if (!trip) return null;
    var lastDate = trip.lastSettlementDate || trip.startDate;
    var sealedMonth = lastDate ? lastDate.substring(0, 7) : TWDate.monthStr();
    var updated = update(id, {
      status: TRIP_STATUS.SEALED,
      endDate: TWDate.todayStr(),
      sealedAt: Date.now(),
      sealedMonth: sealedMonth,
    });
    /* v2.3.4 級聯封存：該團關聯訂房一併綁定團並標記 sealedAt，讓房務明細跟著團封存 */
    _cascadeSealBookingsForTrip(id);
    // Phase 1D / 1.16：封存事件獨立廣播（供審計 autoLog 記錄 seal 動作 + 回收站追蹤可還原）
    if (updated) EventBus.emit(EVENTS.TRIP_SEALED, updated);
    return updated;
  }
  // v1.9.11 撤回待結帳：退回 active 恢復可編輯（交收完成封存前都可反悔）
  function revertPending(id) {
    var trip = getById(id);
    if (!trip || trip.status !== TRIP_STATUS.PENDING_SETTLEMENT) return null;
    return update(id, { status: TRIP_STATUS.ACTIVE, lastSettlementDate: null });
  }
  function remove(id) {
    var arr = State.get('trips') || [];
    var idx = arr.findIndex(function(t) { return t.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.TRIPS, obj);
    EventBus.emit(EVENTS.TRIP_UPDATED, arr[idx]);

    /* v2.3.2 級聯刪除該團所有 booking：避免「房間使用額度」孤兒繼續佔用配額 */
    _cascadeDeleteBookingsForTrip(id);
    /* v2.3.4 級聯刪除該團所有預支單（含衍生錢包流水）：
       避免孤兒預支被對帳機制重建錢包流水，導致已刪資料復活 */
    _cascadeDeletePendExpsForTrip(id);
  }
  /* 級聯刪除指定團的所有 booking（墓碑 + enqueue） */
  function _cascadeDeleteBookingsForTrip(tripId) {
    if (typeof Bookings === 'undefined' || !Bookings || typeof Bookings.getByTrip !== 'function') return;
    var bks = Bookings.getByTrip(tripId);
    if (!bks || bks.length === 0) return;
    var now = Date.now();
    var payloads = {};
    var fullArr = State.get('bookings') || [];
    bks.forEach(function(b) {
      var i = fullArr.findIndex(function(x) { return x.id === b.id; });
      if (i >= 0) {
        fullArr[i]._deleted = true;
        fullArr[i]._updatedAt = now;
        payloads[fullArr[i]._fbKey] = fullArr[i];
      }
    });
    if (typeof Bookings.save === 'function') Bookings.save(fullArr);
    if (Object.keys(payloads).length > 0 && typeof enqueue === 'function') enqueue(FB_PATH.BOOKINGS, payloads);
  }
  /* v2.3.4 級聯封存指定團的所有訂房：
     - 有 tripId 且屬於該團 → 標記 sealedAt
     - 無 tripId（Bot 訂房）但會員屬於該團 → 補綁 tripId + sealedAt
     封存後由 filterActiveBookings 排除（房務明細跟著團封存）；代理配額含封存口徑照算 */
  function _cascadeSealBookingsForTrip(tripId) {
    if (typeof Bookings === 'undefined' || !Bookings) return;
    var trip = getById(tripId);
    if (!trip) return;
    var memberIds = {};
    (trip.memberIds || []).forEach(function(mid) { memberIds[mid] = true; });
    var now = Date.now();
    var payloads = {};
    var fullArr = State.get('bookings') || [];
    fullArr.forEach(function(b) {
      if (!b || b._deleted) return;
      var linked = (b.tripId === tripId) || (!b.tripId && b.memberId && memberIds[b.memberId]);
      if (!linked) return;
      b.tripId = tripId;
      b.sealedAt = now;
      b._updatedAt = now;
      if (b._fbKey) payloads[b._fbKey] = b;
    });
    if (Object.keys(payloads).length > 0) {
      if (typeof Bookings.save === 'function') Bookings.save(fullArr);
      if (typeof enqueue === 'function') enqueue(FB_PATH.BOOKINGS, payloads);
    }
  }
  /* v2.3.4 級聯刪除指定團的所有預支單（PendExps.remove 發 PEXP_DELETED → Wallet.removeForPend 連動刪流水） */
  function _cascadeDeletePendExpsForTrip(tripId) {
    if (typeof PendExps === 'undefined' || !PendExps || typeof PendExps.getByTrip !== 'function') return;
    (PendExps.getByTrip(tripId) || []).forEach(function(p) {
      if (p && p.id && typeof PendExps.remove === 'function') PendExps.remove(p.id);
    });
  }
  // v2.1 顯示名稱：T20260823 · 猴哥團東哥（無備註只顯示 ID）
  function displayName(tripOrId) {
    var t = typeof tripOrId === 'string' ? getById(tripOrId) : tripOrId;
    if (!t) return typeof tripOrId === 'string' ? tripOrId : '';
    return t.label ? (t.id + ' · ' + t.label) : t.id;
  }
  return { load: load, save: save, getAll: getAll, getById: getById, getActiveByShareholder: getActiveByShareholder, create: create, update: update, sealTrip: sealTrip, revertPending: revertPending, remove: remove, displayName: displayName };
})();


// === src/data/memberTxs.js ===
/**
 * data/memberTxs.js — 會員帐务 CRUD
 * 依赖: calc/member.js, core/schema.js, core/constants.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var MemberTxs = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.MEMBER_TXS);
    State.set('memberTxs', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.MEMBER_TXS, arr);
    State.set('memberTxs', arr);
  }
  function getAll() {
    return (State.get('memberTxs') || []).filter(function(t) { return !t._deleted; });
  }
  function getById(id) {
    return getAll().find(function(t) { return t.id === id; });
  }
  function getByTrip(tripId) {
    return getAll().filter(function(t) { return t.tripId === tripId; });
  }
  function getByMember(memberId) {
    return getAll().filter(function(t) { return t.memberId === memberId; });
  }
  function create(data) {
    var now = Date.now();
    var id = 'mtx_' + data.tripId + '_' + data.memberId + '_' + now + '_' + Math.random().toString(36).slice(2, 4); // v2.2.4 防同毫秒碰撞
    var calcResult = calcMemberTx(data);

    var tx = Object.assign({}, data, calcResult, {
      id: id,
      isArchived: false,
      archivedAt: null,
      createdAt: now,
      _fbKey: id,
      _updatedAt: now,
    });
    if (!Schema.sanitize('memberTxs', tx)) return null; // E2.3 入口驗證

    var arr = State.get('memberTxs') || [];
    arr.push(tx);
    save(arr);
    var obj = {}; obj[tx._fbKey] = tx;
    enqueue(FB_PATH.MEMBER_TXS, obj);
    EventBus.emit(EVENTS.MTX_CREATED, tx);
    return tx;
  }
  function update(id, patch) {
    var arr = State.get('memberTxs') || [];
    var idx = arr.findIndex(function(t) { return t.id === id; });
    if (idx < 0) return null;

    // 如果改了输入项，重新计算
    var merged = Object.assign({}, arr[idx], patch);
    if (patch.outCode !== undefined || patch.backCode !== undefined ||
        patch.washCode !== undefined || patch.rate1 !== undefined ||
        patch.rebate1 !== undefined || patch.rate2 !== undefined ||
        patch.rebate2 !== undefined || patch.expenses !== undefined) {
      var calcResult = calcMemberTx(merged);
      Object.assign(merged, calcResult);
    }

    merged._updatedAt = Date.now();
    if (!Schema.sanitize('memberTxs', merged)) return null; // E2.3 入口驗證
    arr[idx] = merged;
    save(arr);
    var obj = {}; obj[merged._fbKey] = merged;
    enqueue(FB_PATH.MEMBER_TXS, obj);
    EventBus.emit(EVENTS.MTX_UPDATED, merged);
    return merged;
  }
  function remove(id) {
    var arr = State.get('memberTxs') || [];
    var idx = arr.findIndex(function(t) { return t.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.MEMBER_TXS, obj);
    EventBus.emit(EVENTS.MTX_DELETED, id);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, getByTrip: getByTrip, getByMember: getByMember, create: create, update: update, remove: remove };
})();


// === src/data/wallet.js ===
/**
 * data/wallet.js — v2.0 港幣現鈔錢包（現金制流水）
 *
 * 定位：即時掌握公司手上還有多少港幣現鈔。只記「實際掏出/收回的錢」，
 * 交收回款不進錢包（走應收制結算系統），NT 結算計算完全不受影響。
 *
 * 流水來源：
 *  - open      啟用錢包時自填目前現鈔數（不回溯歷史）
 *  - member_tx 現金碼帳務：淨額 =（回碼−出碼）×10000
 *  - credit_tx 信用碼帳務：出碼不動錢包；僅淨贏（回碼>出碼）部分進帳
 *  - expense   開銷：扣公司實支 Σpayout（預設=金額，門票預設=ourPrice×數量；招待照扣）
 *  - manual    手動補登（換匯/墊付/老闆存提/對帳調整/其他）
 *
 * 同步：訂閱 MTX_CREATED/UPDATED/DELETED/LOADED（initApp 接線），冪等 upsert，
 *       編輯帳務 = diff 覆蓋、刪除 = 移除流水；自動流水不可手動修改。
 *
 * 依赖: core/constants.js, core/schema.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var Wallet = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.WALLET_TXS);
    // v2.1.2 遷移：清除 v2.0 誤存進流水的顯示用 _run 欄位（污染雲端比對造成重複衝突誤報）
    var dirty = false;
    arr.forEach(function(w) {
      if (w && w._run !== undefined) { delete w._run; w._updatedAt = Date.now(); dirty = true; }
    });
    State.set('walletTxs', arr);
    if (dirty) {
      save(arr);
      var obj = {};
      arr.forEach(function(w) { if (w && w._fbKey) obj[w._fbKey] = w; });
      enqueue(FB_PATH.WALLET_TXS, obj); // 回傳乾淨版蓋掉雲端污染
      // 一併清掉此 bug 產生的 walletTxs 衝突記錄（皆為誤報）
      if (typeof Conflicts !== 'undefined') {
        Conflicts.getAll().forEach(function(c) {
          if (c && c.collection === 'walletTxs') { try { Conflicts.resolve(c.id, 'winner'); } catch (e) {} }
        });
      }
    }
    return arr;
  }
  function save(arr) {
    if (arr) arr.forEach(function(w) { if (w && w._run !== undefined) delete w._run; }); // v2.1.2 防禦
    Store.writeArray(STORAGE_KEYS.WALLET_TXS, arr);
    State.set('walletTxs', arr);
  }
  function getAll() {
    return (State.get('walletTxs') || []).filter(function(w) { return !w._deleted; });
  }
  function getById(id) {
    return getAll().find(function(w) { return w.id === id; });
  }
  function balance() {
    return getAll().reduce(function(s, w) { return s + (w.amountHKD || 0); }, 0);
  }

  // 籌碼淨額（HKD，正=現鈔流入公司）
  // 現金碼：回碼−出碼（出20回18 → −2萬，公司掏現鈔）
  // 信用碼：出碼跳過；僅淨贏（回碼>出碼）時超贏港幣存入公司錢包
  function chipNetHKD(tx) {
    var out = (tx.outCode || 0) * 10000;
    var back = (tx.backCode || 0) * 10000;
    if (tx.chipType === 'credit') return back > out ? back - out : 0;
    return back - out;
  }

  // 開銷公司實支（HKD）
  // payout 未手填時的預設：門票類有 ourPrice → ourPrice×數量；其餘 → 金額（公司一定支出）
  // v2.1 帶 fromPend 的行（由預支單帶入）不計——預支登錄當下錢包已扣，不可重複
  function _expPayout(e) {
    if (e.fromPend) return 0;
    if (e.payout !== undefined && e.payout !== null) return e.payout || 0;
    if (e.ourPrice !== undefined && e.ourPrice !== null && e.ticketType && e.ticketType !== 'other' && e.ticketType !== 'loan') {
      return (e.ourPrice || 0) * (e.quantity || 1);
    }
    return e.amountHK || 0;
  }
  function expensePayoutHKD(tx) {
    var list = tx.expenses || [];
    var total = list.reduce(function(s, e) { return s + _expPayout(e); }, 0);
    return Math.round(total);
  }

  // —— 冪等寫入：內容相同則不動（避免同步迴圈）——
  function _same(a, b) {
    if (!a || !b) return false;
    var keys = ['type', 'amountHKD', 'date', 'refId', 'tripId', 'memberId', 'category', 'note'];
    for (var i = 0; i < keys.length; i++) {
      if ((a[keys[i]] || '') !== (b[keys[i]] || '')) return false;
    }
    return JSON.stringify(a.detail || null) === JSON.stringify(b.detail || null);
  }
  function _upsert(entry) {
    var arr = State.get('walletTxs') || [];
    var idx = arr.findIndex(function(w) { return w.id === entry.id; });
    var now = Date.now();
    if (idx >= 0) {
      if (arr[idx]._deleted) return; // v2.3.4 已刪除（墓碑）流水不得由衍生對帳重建復活（刪除永遠贏）
      if (_same(arr[idx], entry)) return; // 完全相同 → 不動
      entry.createdAt = arr[idx].createdAt || now;
    } else {
      entry.createdAt = now;
    }
    entry._fbKey = entry.id;
    entry._updatedAt = now;
    if (!Schema.sanitize('walletTxs', entry)) return;
    if (idx >= 0) arr[idx] = entry; else arr.push(entry);
    save(arr);
    var obj = {}; obj[entry._fbKey] = entry;
    enqueue(FB_PATH.WALLET_TXS, obj);
  }
  function _removeById(id) {
    var arr = State.get('walletTxs') || [];
    var idx = arr.findIndex(function(w) { return w.id === id; });
    if (idx < 0 || arr[idx]._deleted) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.WALLET_TXS, obj);
  }

  /**
   * 帳務 → 錢包同步（create/update 後呼叫；刪除呼叫 removeForTx）
   * 一筆帳務最多產生兩筆流水：籌碼淨額一筆（wtx_<txId>）＋開銷實支一筆（wtx_<txId>_exp）
   * 淨額為 0 → 不產生流水（既有流水移除）
   */
  function syncForTx(tx) {
    if (!tx) return;
    if (tx._deleted) { removeForTx(tx.id); return; }
    var m = (typeof Members !== 'undefined') ? Members.getById(tx.memberId) : null;

    var chip = Math.round(chipNetHKD(tx));
    var chipId = 'wtx_' + tx.id;
    if (chip !== 0) {
      _upsert({
        id: chipId,
        type: tx.chipType === 'credit' ? 'credit_tx' : 'member_tx',
        refId: tx.id, tripId: tx.tripId, memberId: tx.memberId,
        amountHKD: chip, date: tx.date,
        note: m ? (m.id + ' ' + (m.name || '')) : (tx.memberId || ''),
        detail: { outCode: tx.outCode || 0, backCode: tx.backCode || 0, chipType: tx.chipType || 'cash' },
      });
    } else {
      _removeById(chipId);
    }

    var pay = expensePayoutHKD(tx);
    var expId = chipId + '_exp';
    if (pay > 0) {
      _upsert({
        id: expId,
        type: 'expense',
        refId: tx.id, tripId: tx.tripId, memberId: tx.memberId,
        amountHKD: -pay, date: tx.date,
        note: m ? (m.id + ' ' + (m.name || '')) : (tx.memberId || ''),
        detail: { items: (tx.expenses || []).map(function(e) {
          return { name: e.name || '', amountHK: e.amountHK || 0, payout: _expPayout(e), absorbed: !!e.absorbed, fromPend: !!e.fromPend };
        }) },
      });
    } else {
      _removeById(expId);
    }
  }

  // —— v2.1 預支開銷 → 錢包：登錄當下就扣（錢真的付出去的那一刻）——
  function pendPayoutHKD(p) {
    var total = (p.rows || []).reduce(function(s, e) {
      var v;
      if (e.payout !== undefined && e.payout !== null) v = e.payout || 0;
      else if (e.ourPrice !== undefined && e.ourPrice !== null && e.ticketType && e.ticketType !== 'other' && e.ticketType !== 'loan') v = (e.ourPrice || 0) * (e.quantity || 1);
      else v = e.amountHK || 0;
      return s + v;
    }, 0);
    return Math.round(total);
  }
  function syncForPend(p) {
    if (!p) return;
    if (p._deleted) { removeForPend(p.id); return; }
    var t = (typeof Trips !== 'undefined') ? Trips.getById(p.tripId) : null;
    var pay = pendPayoutHKD(p);
    var id = 'wtx_pexp_' + p.id;
    if (pay > 0) {
      _upsert({
        id: id,
        type: 'pexp',
        refId: p.id, tripId: p.tripId,
        amountHKD: -pay, date: p.date,
        note: (t ? Trips.displayName(t) : p.tripId) + ' 預支',
        detail: { items: (p.rows || []).map(function(e) {
          return { name: e.name || '', qty: e.quantity || 1, amountHK: e.amountHK || 0, payout: _expPayout(e) || e.payout || e.amountHK || 0 };
        }) },
      });
    } else {
      _removeById(id);
    }
  }
  function removeForPend(pendId) {
    if (!pendId) return;
    _removeById('wtx_pexp_' + pendId);
  }

  // —— v2.2 港幣借支 → 錢包：借出扣款一條、回收加回一條（聚合）——
  function syncForLoan(l) {
    if (!l) return;
    if (l._deleted) { removeForLoan(l.id); return; }
    var m = (typeof Members !== 'undefined') ? Members.getById(l.memberId) : null;
    var label = m ? (m.id + ' ' + (m.name || '')) : (l.memberId || '');
    var amt = Math.round(l.amountHKD || 0);
    var outId = 'wtx_loan_' + l.id;
    if (amt > 0) {
      _upsert({
        id: outId,
        type: 'loan',
        refId: l.id, memberId: l.memberId,
        amountHKD: -amt, date: l.date,
        note: label + ' 借支',
        detail: { note: l.note || '' },
      });
    } else {
      _removeById(outId);
    }
    var reps = l.repayments || [];
    var repTotal = reps.reduce(function(s, r) { return s + (r.amountHKD || 0); }, 0);
    var inId = 'wtx_loanr_' + l.id;
    if (repTotal > 0) {
      var lastDate = reps.length ? reps[reps.length - 1].date : l.date;
      _upsert({
        id: inId,
        type: 'loan_repay',
        refId: l.id, memberId: l.memberId,
        amountHKD: Math.round(repTotal), date: lastDate,
        note: label + ' 借支回收',
        detail: { items: reps.map(function(r) { return { date: r.date, amountHK: r.amountHKD || 0, note: r.note || '' }; }) },
      });
    } else {
      _removeById(inId);
    }
  }
  function removeForLoan(loanId) {
    if (!loanId) return;
    _removeById('wtx_loan_' + loanId);
    _removeById('wtx_loanr_' + loanId);
  }
  /** v2.2 借支流水對帳：LOANS_LOADED 後重算所有借支流水＋清孤兒 */
  function reconcileLoans() {
    if (typeof Loans === 'undefined') return;
    var alive = {};
    Loans.getAll().forEach(function(l) {
      alive[l.id] = true;
      syncForLoan(l);
    });
    (State.get('walletTxs') || []).forEach(function(w) {
      if (w._deleted) return;
      if (w.type !== 'loan' && w.type !== 'loan_repay') return;
      if (w.refId && !alive[w.refId]) _removeById(w.id);
    });
  }

  function removeForTx(txId) {
    if (!txId) return;
    _removeById('wtx_' + txId);
    _removeById('wtx_' + txId + '_exp');
  }

  /** 全量對帳：MTX_LOADED（遠端合併/回收站還原/Bot 寫入）後重算所有帳務流水（冪等） */
  function reconcileAll() {
    var txs = (typeof MemberTxs !== 'undefined') ? MemberTxs.getAll() : [];
    var alive = {};
    txs.forEach(function(tx) {
      if (!tx || tx._deleted) return;
      alive[tx.id] = true;
      syncForTx(tx);
    });
    // 清孤兒流水（帳務已不存在但流水還活著）——v2.1 僅清帳務型流水（pexp 由 reconcilePends 管）
    (State.get('walletTxs') || []).forEach(function(w) {
      if (w._deleted) return;
      if (w.type !== 'member_tx' && w.type !== 'credit_tx' && w.type !== 'expense') return;
      if (w.refId && !alive[w.refId]) _removeById(w.id);
    });
    reconcilePends();
    reconcileLoans(); // v2.2 借支
  }

  /** v2.1 預支流水對帳：PENDING_EXPS_LOADED 後重算所有預支流水＋清孤兒 */
  function reconcilePends() {
    if (typeof PendExps === 'undefined') return;
    var alive = {};
    PendExps.getAll().forEach(function(p) {
      alive[p.id] = true;
      syncForPend(p);
    });
    (State.get('walletTxs') || []).forEach(function(w) {
      if (w._deleted) return;
      if (w.type !== 'pexp') return;
      if (w.refId && !alive[w.refId]) _removeById(w.id);
    });
  }

  // —— 手動操作 ——
  function isOpened() {
    return getAll().length > 0;
  }
  function openAccount(amountHKD, date, note) {
    if (isOpened()) return null;
    var entry = {
      id: 'wtx_open_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      type: 'open', amountHKD: Math.round(amountHKD) || 0,
      date: date || TWDate.todayStr(),
      note: note || '錢包開帳（目前現鈔數）',
    };
    _upsert(entry);
    return entry;
  }
  function addManual(data) {
    var entry = {
      id: 'wtx_m_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      type: 'manual',
      category: data.category || 'other',
      amountHKD: Math.round(data.amountHKD) || 0,
      date: data.date || TWDate.todayStr(),
      note: data.note || '',
    };
    _upsert(entry);
    return entry;
  }
  function updateManual(id, data) {
    var arr = State.get('walletTxs') || [];
    var idx = arr.findIndex(function(w) { return w.id === id; });
    if (idx < 0 || arr[idx].type !== 'manual') return null;
    Object.assign(arr[idx], {
      category: data.category || arr[idx].category || 'other',
      amountHKD: Math.round(data.amountHKD) || 0,
      date: data.date || arr[idx].date,
      note: data.note !== undefined ? data.note : (arr[idx].note || ''),
      _updatedAt: Date.now(),
    });
    Schema.sanitize('walletTxs', arr[idx]);
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.WALLET_TXS, obj);
    return arr[idx];
  }
  function removeManual(id) {
    var w = getById(id);
    if (!w || w.type !== 'manual') return false; // 自動流水不可手動刪
    _removeById(id);
    return true;
  }

  // v2.1.1 開帳可編輯（key 錯時修正；金額改對即可，不影響其他流水）
  function updateOpen(id, data) {
    var arr = State.get('walletTxs') || [];
    var idx = arr.findIndex(function(w) { return w.id === id; });
    if (idx < 0 || arr[idx].type !== 'open') return null;
    Object.assign(arr[idx], {
      amountHKD: Math.round(data.amountHKD) || 0,
      date: data.date || arr[idx].date,
      note: data.note !== undefined ? data.note : (arr[idx].note || ''),
      _updatedAt: Date.now(),
    });
    Schema.sanitize('walletTxs', arr[idx]);
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.WALLET_TXS, obj);
    return arr[idx];
  }
  // v2.1.1 開帳刪除：僅當錢包只剩這一筆開帳時允許（回到未開帳可重開；有其他流水請改用編輯）
  function removeOpen(id) {
    var alive = getAll();
    if (alive.length !== 1) return false;
    if (!alive[0] || alive[0].id !== id || alive[0].type !== 'open') return false;
    _removeById(id);
    return true;
  }

  return {
    load: load, save: save, getAll: getAll, getById: getById, balance: balance,
    chipNetHKD: chipNetHKD, expensePayoutHKD: expensePayoutHKD,
    syncForTx: syncForTx, removeForTx: removeForTx, reconcileAll: reconcileAll,
    syncForPend: syncForPend, removeForPend: removeForPend, reconcilePends: reconcilePends, pendPayoutHKD: pendPayoutHKD,
    syncForLoan: syncForLoan, removeForLoan: removeForLoan, reconcileLoans: reconcileLoans,
    isOpened: isOpened, openAccount: openAccount,
    addManual: addManual, updateManual: updateManual, removeManual: removeManual,
    updateOpen: updateOpen, removeOpen: removeOpen,
  };
})();


// === src/data/pendingExps.js ===
/**
 * v2.1 預支開銷（先記帳，後歸屬）
 * 流程：員工先買票墊錢 → 立即登錄（選團，可不選會員）→ 錢包當下扣實支
 *       → 會員收工開帳務時逐行「帶入」（可細分數量，例：4 張門票分 2+2 給兩個會員）
 *       → 帶入的行在帳務錢包同步時跳過（預支已扣，不重複）
 *       → 純旅遊不開工：預支單一鍵轉為零碼「純旅遊帳務」
 *
 * 歸屬量不落庫：以所有帳務 expenses[].fromPend = {pid, rid, qty} 隨需重算
 * （編輯/刪除/回收站還原自動正確，無狀態不同步問題）
 *
 * 依赖: core/constants.js, core/schema.js, core/events.js, core/state.js, core/store.js
 */
var PendExps = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.PENDING_EXPS);
    State.set('pendingExps', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.PENDING_EXPS, arr);
    State.set('pendingExps', arr);
  }
  function getAll() {
    return (State.get('pendingExps') || []).filter(function(p) { return !p._deleted; });
  }
  function getById(id) {
    return getAll().find(function(p) { return p.id === id; });
  }
  function getByTrip(tripId) {
    return getAll().filter(function(p) { return p.tripId === tripId; });
  }

  // —— 歸屬量：掃描所有帳務的 fromPend 標記（隨需計算，不落庫）——
  // 回傳 { pid: { rid: 已帶入數量 } }
  function _claimedMap() {
    var map = {};
    var txs = (typeof MemberTxs !== 'undefined') ? MemberTxs.getAll() : [];
    txs.forEach(function(tx) {
      if (!tx || tx._deleted) return;
      (tx.expenses || []).forEach(function(e) {
        var fp = e.fromPend;
        if (!fp || !fp.pid || !fp.rid) return;
        if (!map[fp.pid]) map[fp.pid] = {};
        map[fp.pid][fp.rid] = (map[fp.pid][fp.rid] || 0) + (fp.qty || 0);
      });
    });
    return map;
  }
  function _claimedQty(p, row, cm) {
    var q = (cm[p.id] && cm[p.id][row.rid]) || 0;
    return Math.min(q, row.quantity || 1); // 上限夾在原數量（防帳務手改數量超帶）
  }

  /**
   * 某團未完全歸屬的預支行
   * 回傳 [{ pend, row, remaining }] — remaining > 0 才列出
   */
  function unclaimedRows(tripId) {
    var cm = _claimedMap();
    var out = [];
    getByTrip(tripId).forEach(function(p) {
      (p.rows || []).forEach(function(row) {
        var rem = (row.quantity || 1) - _claimedQty(p, row, cm);
        if (rem > 0) out.push({ pend: p, row: row, remaining: rem });
      });
    });
    return out;
  }
  function unclaimedCount(tripId) {
    return unclaimedRows(tripId).length;
  }
  // 預支單是否完全歸屬（守門用：傳帳/封存前須全部歸屬）
  function hasUnclaimed(tripId) {
    return unclaimedCount(tripId) > 0;
  }
  // 刪除守門：已有帶入的預支單不可刪（先從帳務移除那些行）
  function isClaimed(p) {
    var cm = _claimedMap();
    return (p.rows || []).some(function(row) { return _claimedQty(p, row, cm) > 0; });
  }

  function create(data) {
    var now = Date.now();
    var uid = 'PE' + now + '_' + Math.random().toString(36).slice(2, 6); // v2.2.4 防同毫秒碰撞
    var p = {
      id: uid,
      tripId: data.tripId || '',
      agentId: data.agentId || '',
      shareholderId: data.shareholderId || '',
      memberId: data.memberId || '', // v2.2.1 備註會員
      date: data.date || TWDate.todayStr(),
      note: data.note || '',
      rows: (data.rows || []).map(function(r, i) {
        var row = Object.assign({}, r);
        row.rid = row.rid || ('pr' + now + '_' + i); // 行識別（帳務 fromPend 引用）
        row.quantity = row.quantity || 1;
        return row;
      }),
      createdAt: now,
      _fbKey: uid,
      _updatedAt: now,
    };
    if (!Schema.sanitize('pendingExps', p)) return null;
    var arr = State.get('pendingExps') || [];
    arr.push(p);
    save(arr);
    var obj = {}; obj[p._fbKey] = p;
    enqueue(FB_PATH.PENDING_EXPS, obj);
    EventBus.emit(EVENTS.PEXP_CREATED, p);
    return p;
  }
  function update(id, patch) {
    var arr = State.get('pendingExps') || [];
    var idx = arr.findIndex(function(p) { return p.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    if (merged.rows) {
      merged.rows = merged.rows.map(function(r) {
        var row = Object.assign({}, r);
        if (!row.rid) row.rid = 'pr' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
        row.quantity = row.quantity || 1;
        return row;
      });
    }
    if (!Schema.sanitize('pendingExps', merged)) return null;
    Object.assign(arr[idx], merged, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.PENDING_EXPS, obj);
    EventBus.emit(EVENTS.PEXP_UPDATED, arr[idx]);
    return arr[idx];
  }
  function remove(id) {
    var arr = State.get('pendingExps') || [];
    var idx = arr.findIndex(function(p) { return p.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.PENDING_EXPS, obj);
    EventBus.emit(EVENTS.PEXP_DELETED, id);
  }

  return {
    load: load, save: save, getAll: getAll, getById: getById, getByTrip: getByTrip,
    unclaimedRows: unclaimedRows, unclaimedCount: unclaimedCount, hasUnclaimed: hasUnclaimed, isClaimed: isClaimed,
    claimInfo: function(p) {
      var cm = _claimedMap();
      return (p.rows || []).map(function(row) {
        var c = _claimedQty(p, row, cm);
        return { row: row, claimed: c, remaining: (row.quantity || 1) - c };
      });
    },
    create: create, update: update, remove: remove,
  };
})();


// === src/data/loans.js ===
/**
 * data/loans.js — v2.2 港幣借支（純現金借貸，不與帳務回碼/上下分抵銷）
 * 借出即扣錢包；部分/全額回收逐筆記錄；未回收隨時計算（outstanding）
 * 依赖: core/constants.js, core/schema.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var Loans = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.LOANS);
    State.set('loans', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.LOANS, arr);
    State.set('loans', arr);
  }
  function getAll() {
    return (State.get('loans') || []).filter(function(l) { return !l._deleted; });
  }
  function getById(id) {
    return getAll().find(function(l) { return l.id === id; });
  }
  function getByMember(memberId) {
    return getAll().filter(function(l) { return l.memberId === memberId; });
  }

  function repaidTotal(l) {
    return (l.repayments || []).reduce(function(s, r) { return s + (r.amountHKD || 0); }, 0);
  }
  function outstanding(l) {
    return Math.max(0, Math.round((l.amountHKD || 0) - repaidTotal(l)));
  }
  function openLoans() {
    return getAll().filter(function(l) { return outstanding(l) > 0; });
  }
  function openTotalByMember(memberId) {
    return getByMember(memberId).reduce(function(s, l) { return s + outstanding(l); }, 0);
  }

  function create(data) {
    var now = Date.now();
    var amount = Math.round(data.amountHKD || 0);
    if (!data.memberId || amount <= 0) return null;
    var uid = 'LN' + now + '_' + Math.random().toString(36).slice(2, 6); // v2.2.4 防同毫秒碰撞
    var l = {
      id: uid,
      memberId: data.memberId,
      date: data.date || TWDate.todayStr(),
      note: data.note || '',
      amountHKD: amount,
      repayments: [],
      createdAt: now,
      _fbKey: uid,
      _updatedAt: now,
    };
    if (!Schema.sanitize('loans', l)) return null;
    var arr = State.get('loans') || [];
    arr.push(l);
    save(arr);
    var obj = {}; obj[l._fbKey] = l;
    enqueue(FB_PATH.LOANS, obj);
    EventBus.emit(EVENTS.LOAN_CREATED, l);
    return l;
  }
  function update(id, patch) {
    var arr = State.get('loans') || [];
    var idx = arr.findIndex(function(l) { return l.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    // 守門：借出金額不可低於已回收總額
    if (Math.round(merged.amountHKD || 0) < repaidTotal(arr[idx])) return null;
    merged.amountHKD = Math.round(merged.amountHKD || 0);
    if (!Schema.sanitize('loans', merged)) return null;
    Object.assign(arr[idx], merged, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.LOANS, obj);
    EventBus.emit(EVENTS.LOAN_UPDATED, arr[idx]);
    return arr[idx];
  }
  /** 部分回收：金額自動夾在 1~尚欠 */
  function repay(id, amountHKD, date, note) {
    var arr = State.get('loans') || [];
    var idx = arr.findIndex(function(l) { return l.id === id; });
    if (idx < 0) return null;
    var l = arr[idx];
    var amt = Math.round(amountHKD || 0);
    var max = outstanding(l);
    if (amt <= 0) return null;
    if (amt > max) amt = max;
    l.repayments = (l.repayments || []).concat([{ date: date || TWDate.todayStr(), amountHKD: amt, note: note || '' }]);
    l._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[l._fbKey] = l;
    enqueue(FB_PATH.LOANS, obj);
    EventBus.emit(EVENTS.LOAN_UPDATED, l);
    return l;
  }
  /** 刪單筆回收（key 錯修正用） */
  function removeRepayment(id, idx) {
    var arr = State.get('loans') || [];
    var i = arr.findIndex(function(l) { return l.id === id; });
    if (i < 0) return null;
    var l = arr[i];
    if (!l.repayments || idx < 0 || idx >= l.repayments.length) return null;
    l.repayments.splice(idx, 1);
    l._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[l._fbKey] = l;
    enqueue(FB_PATH.LOANS, obj);
    EventBus.emit(EVENTS.LOAN_UPDATED, l);
    return l;
  }
  function remove(id) {
    var arr = State.get('loans') || [];
    var idx = arr.findIndex(function(l) { return l.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.LOANS, obj);
    EventBus.emit(EVENTS.LOAN_DELETED, id);
  }

  return {
    load: load, save: save, getAll: getAll, getById: getById, getByMember: getByMember,
    repaidTotal: repaidTotal, outstanding: outstanding, openLoans: openLoans, openTotalByMember: openTotalByMember,
    create: create, update: update, repay: repay, removeRepayment: removeRepayment, remove: remove,
  };
})();


// === src/data/catalog.js ===
/**
 * data/catalog.js — 品項主檔 v2.2.2
 * 依賴: core/constants.js, core/schema.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 * 預載常用票券單價，可隨時 CRUD；墊付／預支／帳務開銷三處皆可選擇帶入預設單價。
 */
var Catalog = (function() {
  // v2.2.3 水舞間/水上樂園改吃設定頁「門票預設價格」（單一資料來源），Catalog 只種設定頁沒有的品項
  var SEED_ITEMS = [
    { name: '新濠影匯 - 童夢天地', category: 'park', defaultPriceHK: 0 },
    { name: '巴黎人 - 巴黎鐵塔', category: 'tower', defaultPriceHK: 0 },
    { name: '巴黎人 - teamLab 門票', category: 'show', defaultPriceHK: 0 },
    { name: '永利皇宮 - 觀光纜車', category: 'transport', defaultPriceHK: 0 },
    { name: '美獅美高梅 - 悠然自得', category: 'show', defaultPriceHK: 0 },
    { name: '摩珀斯酒店 - 餐飲券', category: 'food', defaultPriceHK: 0 },
  ];
  var CATEGORY_LABELS = {
    show: '表演/門票',
    park: '樂園',
    tower: '觀景塔',
    transport: '交通/纜車',
    food: '餐飲',
    hotel: '酒店',
    other: '其他',
  };

  function load() {
    var arr = Store.readArray(STORAGE_KEYS.CATALOG);
    if (!arr || arr.length === 0) {
      // 首次載入 seed
      var now = Date.now();
      arr = SEED_ITEMS.map(function(it, i) {
        return {
          id: 'CATS' + (now + i),
          name: it.name,
          defaultPriceHK: it.defaultPriceHK || 0,
          category: it.category || 'other',
          isSeed: true,
          createdAt: now,
          _fbKey: 'CATS' + (now + i),
          _updatedAt: now,
        };
      });
      save(arr);
    }
    // v2.2.3 遷移：水舞間/水樂園改吃設定頁價格，舊 seed 未補價的軟刪（用戶已補價的保留）
    var now2 = Date.now();
    var dropped = [];
    arr = arr.map(function(c) {
      if (!c._deleted && c.isSeed && !(c.defaultPriceHK > 0)
          && (String(c.name).indexOf('水舞間') === 0 || c.name === '新濠天地 - 水樂園門票')) {
        c._deleted = true;
        c._updatedAt = now2;
        dropped.push(c);
      }
      return c;
    });
    if (dropped.length) {
      save(arr);
      var obj = {};
      dropped.forEach(function(c) { obj[c._fbKey] = c; });
      enqueue(FB_PATH.CATALOG, obj);
    }
    State.set('catalog', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.CATALOG, arr);
    State.set('catalog', arr);
  }
  function getAll() {
    return (State.get('catalog') || []).filter(function(c) { return !c._deleted; });
  }
  function getById(id) {
    return getAll().find(function(c) { return c.id === id; });
  }
  /** 依名稱查（用於避免重複新增同名品項） */
  function findByName(name) {
    if (!name) return null;
    var n = String(name).trim();
    return getAll().find(function(c) { return c.name === n; }) || null;
  }
  function byCategory(cat) {
    return getAll().filter(function(c) { return c.category === cat; }).sort(function(a, b) { return a.name.localeCompare(b.name, 'zh'); });
  }
  function categoryLabel(cat) { return CATEGORY_LABELS[cat] || '其他'; }
  function allCategories() {
    var seen = {}; var order = [];
    getAll().forEach(function(c) { if (c.category && !seen[c.category]) { seen[c.category] = 1; order.push(c.category); } });
    return order;
  }

  // ===== v2.2.3 固定票種：直接讀設定頁「門票預設價格」，價格隨設定即時變動（單一資料來源）=====
  function fixedTickets() {
    var tp = (typeof Settings !== 'undefined' && Settings.getTicketPrices) ? Settings.getTicketPrices() : {};
    var out = [];
    (tp.waterDance || []).forEach(function(t, i) {
      out.push({ key: 'WD' + i, name: '水舞間 ' + t.name, guestPrice: t.guestPrice || 0, ourPrice: t.ourPrice || 0, category: 'show' });
    });
    var wp = tp.waterPark || { guestPrice: 450, ourPrice: 406 };
    out.push({ key: 'WP', name: '水上樂園手帶', guestPrice: wp.guestPrice || 0, ourPrice: wp.ourPrice || 0, category: 'park' });
    return out;
  }
  function findFixedByName(name) {
    if (!name) return null;
    var n = String(name).trim();
    return fixedTickets().find(function(t) { return t.name === n; }) || null;
  }
  /**
   * 產生下拉 options（optgroup：門票(設定頁價格) → 品項設定 → ＋自訂品名…）
   * selectedKey: 'WD0'/'WP'（固定票）或 catalog id 或 '__custom__'；selectedName 當 key 未知時 fallback 比對
   * includeFixed=false 時不含固定票組（會員帳務已有票種下拉，避免繞過 ticketType 利潤計算）
   */
  function pickerOptionsHtml(selectedKey, selectedName, includeFixed) {
    if (includeFixed === undefined) includeFixed = true;
    var fixed = fixedTickets();
    var selFixed = (selectedKey && fixed.some(function(t) { return t.key === selectedKey; }))
      ? fixed.find(function(t) { return t.key === selectedKey; })
      : (selectedName ? findFixedByName(selectedName) : null);
    if (!includeFixed) selFixed = null;
    var selCat = null;
    if (!selFixed && selectedKey && selectedKey !== '__custom__') selCat = getById(selectedKey) || null;
    if (!selFixed && !selCat && selectedName) selCat = findByName(selectedName);
    var html = '';
    if (includeFixed) {
      html += '<optgroup label="門票（設定頁價格）">';
      fixed.forEach(function(t) {
        var s = (selFixed && selFixed.key === t.key) ? ' selected' : '';
        html += '<option value="' + t.key + '"' + s + '>' + esc(t.name) + '（售 ' + t.guestPrice + '／成本 ' + t.ourPrice + '）</option>';
      });
      html += '</optgroup>';
    }
    html += '<optgroup label="其他品項">';
    getAll().slice().sort(function(a, b) { return a.name.localeCompare(b.name, 'zh'); }).forEach(function(c) {
      var s = (selCat && selCat.id === c.id) ? ' selected' : '';
      var lbl = c.name + (c.defaultPriceHK ? '（' + c.defaultPriceHK + '）' : '');
      html += '<option value="' + escAttr(c.id) + '"' + s + '>' + esc(lbl) + '</option>';
    });
    html += '</optgroup>';
    html += '<option value="__custom__"' + ((!selFixed && !selCat) ? ' selected' : '') + '>＋ 自訂品名…</option>';
    return html;
  }
  /** 由下拉值解析品項：固定票 { name, guestPrice, ourPrice, isFixed:true, ticketType } / catalog 品項 / null(自訂) */
  function resolvePick(val) {
    if (!val || val === '__custom__') return null;
    var fixed = fixedTickets().find(function(t) { return t.key === val; });
    if (fixed) {
      // 'WD1' → 'wd-1'、'WP' → 'wp'（與會員帳務票種下拉同鍵，利潤報表才能計入）
      var tt = (val === 'WP') ? 'wp' : ('wd-' + val.substring(2));
      return { name: fixed.name, guestPrice: fixed.guestPrice, ourPrice: fixed.ourPrice, isFixed: true, ticketType: tt };
    }
    var c = getById(val);
    if (!c) return null;
    return { name: c.name, guestPrice: c.defaultPriceHK || 0, ourPrice: c.defaultPriceHK || 0, isFixed: false, ticketType: 'other' };
  }

  function create(data) {
    if (!data || !data.name) return null;
    var name = String(data.name).trim();
    if (!name) return null;
    // 重名檢查（含固定票種：水舞間/水上樂園由設定頁管理，不可另建同名品項）
    if (findByName(name) || findFixedByName(name)) return null;
    var now = Date.now();
    var uid = 'CAT' + now + '_' + Math.random().toString(36).slice(2, 6);
    var c = {
      id: uid,
      name: name,
      defaultPriceHK: Math.round(data.defaultPriceHK || 0),
      category: data.category || 'other',
      isSeed: false,
      createdAt: now,
      _fbKey: uid,
      _updatedAt: now,
    };
    if (!Schema.sanitize('catalog', c)) return null;
    var arr = State.get('catalog') || [];
    arr.push(c);
    save(arr);
    var obj = {}; obj[c._fbKey] = c;
    enqueue(FB_PATH.CATALOG, obj);
    EventBus.emit(EVENTS.CATALOG_CREATED, c);
    return c;
  }
  function update(id, patch) {
    var arr = State.get('catalog') || [];
    var idx = arr.findIndex(function(c) { return c.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    merged.name = String(merged.name || '').trim();
    merged.defaultPriceHK = Math.round(merged.defaultPriceHK || 0);
    if (!merged.name) return null;
    // 重名檢查（排除自己）
    var dup = getAll().find(function(c) { return c.name === merged.name && c.id !== id; });
    if (dup) return null;
    if (!Schema.sanitize('catalog', merged)) return null;
    Object.assign(arr[idx], merged, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.CATALOG, obj);
    EventBus.emit(EVENTS.CATALOG_UPDATED, arr[idx]);
    return arr[idx];
  }
  function remove(id) {
    var arr = State.get('catalog') || [];
    var idx = arr.findIndex(function(c) { return c.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.CATALOG, obj);
    EventBus.emit(EVENTS.CATALOG_DELETED, id);
  }

  return {
    load: load, save: save, getAll: getAll, getById: getById,
    findByName: findByName, byCategory: byCategory,
    allCategories: allCategories, categoryLabel: categoryLabel,
    create: create, update: update, remove: remove,
    fixedTickets: fixedTickets, findFixedByName: findFixedByName,
    pickerOptionsHtml: pickerOptionsHtml, resolvePick: resolvePick,
    CATEGORY_LABELS: CATEGORY_LABELS,
  };
})();


// === src/data/bookings.js ===
/**
 * data/bookings.js — 订房 CRUD
 * 依赖: core/constants.js, core/schema.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var Bookings = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.BOOKINGS);
    State.set('bookings', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.BOOKINGS, arr);
    State.set('bookings', arr);
  }
  function getAll() {
    return (State.get('bookings') || []).filter(function(b) { return !b._deleted; });
  }
  function getById(id) {
    return getAll().find(function(b) { return b.id === id; });
  }
  function getByTrip(tripId) {
    return getAll().filter(function(b) { return b.tripId === tripId; });
  }
  function getByAgent(agentId) {
    return getAll().filter(function(b) { return b.agentId === agentId; });
  }
  function calcNights(checkIn, checkOut) {
    if (!checkIn || !checkOut) return 1;
    var d1 = new Date(checkIn);
    var d2 = new Date(checkOut);
    var diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }
  function create(data) {
    var now = Date.now();
    var nights = calcNights(data.checkIn, data.checkOut);

    var booking = {
      id: data.id || ('BK' + now),
      tripId: data.tripId || '',
      memberId: data.memberId || null,
      guestName: data.guestName || '',
      agentId: data.agentId || '',
      shareholderId: data.shareholderId || '',
      hotel: data.hotel || '',
      roomType: data.roomType || '',
      checkIn: data.checkIn || '',
      checkOut: data.checkOut || '',
      nights: nights,
      status: data.status || BOOKING_STATUS.CONFIRMED,
      confirmNo: data.confirmNo || '',
      threshold: data.threshold || 0,
      feeType: data.feeType || FEE_TYPE.AUTO,
      feeManualOverride: data.feeManualOverride || false,
      discountRate: data.discountRate || null,
      chargeGuest: data.chargeGuest || 0,
      chargeCompany: data.chargeCompany || 0,
      createdAt: now,
      _fbKey: 'bk_' + (data.id || now),
      _updatedAt: now,
    };
    if (!Schema.sanitize('bookings', booking)) return null; // E2.3 入口驗證
    var arr = State.get('bookings') || [];
    arr.push(booking);
    save(arr);
    var obj = {}; obj[booking._fbKey] = booking;
    enqueue(FB_PATH.BOOKINGS, obj);
    EventBus.emit(EVENTS.BOOKING_CREATED, booking);
    return booking;
  }
  function update(id, patch) {
    var arr = State.get('bookings') || [];
    var idx = arr.findIndex(function(b) { return b.id === id; });
    if (idx < 0) return null;

    var merged = Object.assign({}, arr[idx], patch);
    // 重新计算天数
    if (patch.checkIn || patch.checkOut) {
      merged.nights = calcNights(merged.checkIn, merged.checkOut);
    }
    merged._updatedAt = Date.now();
    if (!Schema.sanitize('bookings', merged)) return null; // E2.3 入口驗證
    arr[idx] = merged;
    save(arr);
    var obj = {}; obj[merged._fbKey] = merged;
    enqueue(FB_PATH.BOOKINGS, obj);
    EventBus.emit(EVENTS.BOOKING_UPDATED, merged);
    return merged;
  }
  function remove(id) {
    var arr = State.get('bookings') || [];
    var idx = arr.findIndex(function(b) { return b.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.BOOKINGS, obj);
    EventBus.emit(EVENTS.BOOKING_DELETED, id);
  }
  /* v2.3.6 孤兒 Bot 訂房自動綁團：
     Bot 建房 tripId 恆為空 → 房務頁選團檢視、配額結算、結帳歸屬都看不到該筆明細。
     對帳規則（與 sealTrip 級聯綁定口徑一致：以會員隸屬為準，不看日期）：
       - 無 tripId、未封存、未刪除的訂房，若其會員隸屬某未刪除的團 → 綁到該團
       - 優先綁活躍（非 sealed）團；若只隸屬 sealed 團 → 綁並補 sealedAt（跟著封存）
     回傳被修改的 bookings（呼叫端負責 save + enqueue 上傳） */
  function bindOrphans(bookings, trips) {
    var liveTrips = (trips || []).filter(function(t) { return t && !t._deleted; });
    var changed = [];
    (bookings || []).forEach(function(b) {
      if (!b || b._deleted || b.tripId || b.sealedAt || !b.memberId) return;
      var cands = liveTrips.filter(function(t) {
        return (t.memberIds || []).indexOf(b.memberId) !== -1 &&
               (!b.agentId || !t.agentId || t.agentId === b.agentId);
      });
      if (cands.length === 0) return;
      var nonSealed = cands.filter(function(t) { return t.status !== 'sealed'; });
      var pool = nonSealed.length > 0 ? nonSealed : cands;
      var pick = pool[0];
      for (var i = 1; i < pool.length; i++) {
        if ((pool[i].createdAt || 0) > (pick.createdAt || 0)) pick = pool[i];
      }
      b.tripId = pick.id;
      b._updatedAt = Date.now();
      if (pick.status === 'sealed') b.sealedAt = pick.sealedAt || b._updatedAt;
      changed.push(b);
    });
    return changed;
  }
  return { load: load, save: save, getAll: getAll, getById: getById, getByTrip: getByTrip, getByAgent: getByAgent, calcNights: calcNights, create: create, update: update, remove: remove, bindOrphans: bindOrphans };
})();


// === src/data/supplements.js ===
/**
 * data/supplements.js — 补帐 CRUD
 * 依赖: calc/round.js, core/schema.js, core/constants.js, core/datetime.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var Supplements = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.SUPPLEMENTS);
    State.set('supplements', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.SUPPLEMENTS, arr);
    State.set('supplements', arr);
  }
  function getAll() {
    return (State.get('supplements') || []).filter(function(s) { return !s._deleted; });
  }
  function getById(id) {
    return getAll().find(function(s) { return s.id === id; });
  }
  function getByTrip(tripId) {
    return getAll().filter(function(s) { return s.tripId === tripId; });
  }
  function create(data) {
    var now = Date.now();
    var amountNT = (data.amountHK || 0) * (data.exchangeRate || 4.2);
    var settlementAmount = roundDown(amountNT, -2);

    var sup = {
      id: data.id || ('SUP' + now),
      tripId: data.tripId || '',
      memberId: data.memberId || '',
      agentId: data.agentId || '',
      shareholderId: data.shareholderId || '',
      type: data.type || 'other',
      description: data.description || '',
      amountHK: data.amountHK || 0,
      exchangeRate: data.exchangeRate || 4.2,
      amountNT: amountNT,
      settlementAmount: settlementAmount,
      status: data.status || 'pending',
      sealedAt: null,
      originalMonth: data.originalMonth || '',
      createdDate: TWDate.todayStr(),
      collectedAt: null,
      createdAt: now,
      _fbKey: 'sup_' + (data.id || now),
      _updatedAt: now,
    };
    if (!Schema.sanitize('supplements', sup)) return null; // E2.3 入口驗證
    var arr = State.get('supplements') || [];
    arr.push(sup);
    save(arr);
    var obj = {}; obj[sup._fbKey] = sup;
    enqueue(FB_PATH.SUPPLEMENTS, obj);
    EventBus.emit(EVENTS.SUPPLEMENT_CREATED, sup);
    return sup;
  }
  function update(id, patch) {
    var arr = State.get('supplements') || [];
    var idx = arr.findIndex(function(s) { return s.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    if (patch.amountHK !== undefined || patch.exchangeRate !== undefined) {
      merged.amountNT = (merged.amountHK || 0) * (merged.exchangeRate || 4.2);
      merged.settlementAmount = roundDown(merged.amountNT, -2);
    }
    merged._updatedAt = Date.now();
    if (!Schema.sanitize('supplements', merged)) return null; // E2.3 入口驗證
    arr[idx] = merged;
    save(arr);
    var obj = {}; obj[merged._fbKey] = merged;
    enqueue(FB_PATH.SUPPLEMENTS, obj);
    EventBus.emit(EVENTS.SUPPLEMENT_UPDATED, merged);
    return merged;
  }
  function remove(id) {
    var arr = State.get('supplements') || [];
    var idx = arr.findIndex(function(s) { return s.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.SUPPLEMENTS, obj);
    EventBus.emit(EVENTS.SUPPLEMENT_DELETED, id);
  }
  return { load: load, save: save, getAll: getAll, getById: getById, getByTrip: getByTrip, create: create, update: update, remove: remove };
})();


// === src/data/settings.js ===
/**
 * data/settings.js — 系統设定管理
 * 依赖: core/constants.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var Settings = (function() {
  function load() {
    var data = Store.read(STORAGE_KEYS.SETTINGS);
    if (!data) {
      data = Object.assign({}, DEFAULT_SETTINGS);
      // 不推 Firebase（铁律2：绝不初始化推 Firebase）
      Store.write(STORAGE_KEYS.SETTINGS, data);
    }
    State.set('settings', data);
    return data;
  }
  function save(data) {
    data._updatedAt = Date.now();
    Store.write(STORAGE_KEYS.SETTINGS, data);
    State.set('settings', data);
    enqueue(FB_PATH.SETTINGS, data);
    EventBus.emit(EVENTS.SETTINGS_UPDATED, data);
  }
  function get() {
    return State.get('settings') || load();
  }
  function getMonthlyRate(month) {
    var s = get();
    var rates = s.monthlyRates || {};
    if (rates[month]) return rates[month];
    // v1.9.4 當月未設定 → 自動沿用最近一個已設定的月份（使用者要求：無需每月手動重設）
    var keys = Object.keys(rates).sort();
    for (var i = keys.length - 1; i >= 0; i--) {
      if (keys[i] <= month) return rates[keys[i]];
    }
    if (keys.length > 0) return rates[keys[0]];
    return { exchangeRate: 4.2, shareholderRate: 4.2 };
  }
  function setMonthlyRate(month, rate) {
    var s = get();
    if (!s.monthlyRates) s.monthlyRates = {};
    s.monthlyRates[month] = rate;
    save(s);
  }
  function getVipHalls() {
    var s = get();
    return s.vipHalls || VIP_HALLS;
  }
  function updateVipHalls(halls) {
    var s = get();
    s.vipHalls = halls;
    save(s);
  }
  function setExtraProfit(month, amount) {
    var s = get();
    if (!s.extraProfits) s.extraProfits = {};
    s.extraProfits[month] = amount;
    save(s);
  }
  function getExtraProfit(month) {
    var s = get();
    return (s.extraProfits || {})[month] || 0;
  }
  function getTicketPrices() {
    var s = get();
    return s.ticketPrices || DEFAULT_SETTINGS.ticketPrices;
  }
  function updateTicketPrices(tp) {
    var s = get();
    s.ticketPrices = tp;
    save(s);
  }
  return {
    load: load, save: save, get: get,
    getMonthlyRate: getMonthlyRate, setMonthlyRate: setMonthlyRate,
    getVipHalls: getVipHalls, updateVipHalls: updateVipHalls,
    setExtraProfit: setExtraProfit, getExtraProfit: getExtraProfit,
    getTicketPrices: getTicketPrices, updateTicketPrices: updateTicketPrices,
  };
})();


// === src/data/extraIncome.js ===
/**
 * data/extraIncome.js — 额外收入 CRUD
 * 依赖: core/constants.js, core/schema.js, core/state.js, core/store.js, sync/uploader.js
 */
var ExtraIncome = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.EXTRA_INCOME);
    State.set('extraIncome', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.EXTRA_INCOME, arr);
    State.set('extraIncome', arr);
  }
  function getAll() {
    return (State.get('extraIncome') || []).filter(function(e) { return !e._deleted; });
  }
  function getByMonth(month) {
    return getAll().filter(function(e) { return e.month === month; });
  }
  function create(data) {
    var now = Date.now();
    var item = {
      id: data.id || ('EI' + now),
      month: data.month || '',
      description: data.description || '',
      amountHK: data.amountHK || 0,
      type: data.type || 'other',
      createdAt: now,
      _fbKey: 'ei_' + (data.id || now),
      _updatedAt: now,
    };
    if (!Schema.sanitize('extraIncome', item)) return null; // E2.3 入口驗證
    var arr = State.get('extraIncome') || [];
    arr.push(item);
    save(arr);
    var obj = {}; obj[item._fbKey] = item;
    enqueue(FB_PATH.EXTRA_INCOME, obj);
    return item;
  }
  function update(id, patch) {
    var arr = State.get('extraIncome') || [];
    var idx = arr.findIndex(function(e) { return e.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    if (!Schema.sanitize('extraIncome', merged)) return null; // E2.3 入口驗證
    Object.assign(arr[idx], merged, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.EXTRA_INCOME, obj);
    return arr[idx];
  }
  function remove(id) {
    var arr = State.get('extraIncome') || [];
    var idx = arr.findIndex(function(e) { return e.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.EXTRA_INCOME, obj);
  }
  return { load: load, save: save, getAll: getAll, getByMonth: getByMonth, create: create, update: update, remove: remove };
})();


// === src/data/hotelConfig.js ===
/**
 * data/hotelConfig.js — 酒店配置 CRUD
 * 可線上編輯酒店門檻數，取代硬編碼 PRESET_HOTEL_CONFIG
 * 初始載入時若 localStorage 為空，自動匯入 PRESET_HOTEL_CONFIG 作為預設值
 * 依赖: core/constants.js, core/schema.js, core/events.js, core/state.js, core/store.js, sync/uploader.js
 */
var HotelConfig = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.HOTEL_CONFIG);
    /* 首次載入：若 localStorage 無資料，用 PRESET_HOTEL_CONFIG 初始化 */
    if (!arr || arr.length === 0) {
      arr = seedFromPreset();
      Store.writeArray(STORAGE_KEYS.HOTEL_CONFIG, arr);
    }
    State.set('hotelConfig', arr);
    return arr;
  }

  function seedFromPreset() {
    var now = Date.now();
    return PRESET_HOTEL_CONFIG.map(function(h, i) {
      return {
        id: 'HC' + now + '_' + i,
        casino: h.casino,
        hotel: h.hotel,
        code: h.code,
        room: h.room,
        threshold: h.threshold,
        _fbKey: 'hc_' + now + '_' + i,
        _updatedAt: now,
      };
    });
  }

  function save(arr) {
    Store.writeArray(STORAGE_KEYS.HOTEL_CONFIG, arr);
    State.set('hotelConfig', arr);
  }

  function getAll() {
    return (State.get('hotelConfig') || []).filter(function(h) { return !h._deleted; });
  }

  function getById(id) {
    return getAll().find(function(h) { return h.id === id; });
  }

  /* 取所有體系（去重，按 CASINO_ORDER 排序） */
  function getCasinos() {
    var all = getAll();
    var set = {};
    all.forEach(function(h) { set[h.casino] = true; });
    /* 按 CASINO_ORDER 排序，不在 ORDER 中的排最後 */
    var result = [];
    CASINO_ORDER.forEach(function(c) { if (set[c]) { result.push(c); delete set[c]; } });
    /* 加入不在 CASINO_ORDER 中的自定義體系 */
    Object.keys(set).forEach(function(c) { result.push(c); });
    return result;
  }

  /* 取指定體系下的酒店（去重） */
  function getHotels(casino) {
    var all = getAll().filter(function(h) { return h.casino === casino; });
    var seen = {};
    var result = [];
    all.forEach(function(h) {
      if (!seen[h.hotel]) { seen[h.hotel] = true; result.push(h.hotel); }
    });
    return result;
  }

  /* 取指定體系+酒店下的房型列表 */
  function getRooms(casino, hotel) {
    return getAll().filter(function(h) { return h.casino === casino && h.hotel === hotel; });
  }

  function getByCasino(casino) {
    return getAll().filter(function(h) { return h.casino === casino; });
  }

  function getByHotel(casino, hotel) {
    return getAll().filter(function(h) { return h.casino === casino && h.hotel === hotel; });
  }

  function create(data) {
    var now = Date.now();
    var item = {
      id: data.id || ('HC' + now),
      casino: data.casino || '',
      hotel: data.hotel || '',
      code: data.code || '',
      room: data.room || '',
      threshold: data.threshold || 0,
      _fbKey: 'hc_' + (data.id || now),
      _updatedAt: now,
    };
    if (!Schema.sanitize('hotelConfig', item)) return null; // E2.3 入口驗證
    var arr = State.get('hotelConfig') || [];
    arr.push(item);
    save(arr);
    var obj = {}; obj[item._fbKey] = item;
    enqueue(FB_PATH.HOTEL_CONFIG, obj);
    EventBus.emit(EVENTS.HOTEL_CONFIG_UPDATED, item);
    return item;
  }

  function update(id, patch) {
    var arr = State.get('hotelConfig') || [];
    var idx = arr.findIndex(function(h) { return h.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    if (!Schema.sanitize('hotelConfig', merged)) return null; // E2.3 入口驗證
    Object.assign(arr[idx], merged, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.HOTEL_CONFIG, obj);
    EventBus.emit(EVENTS.HOTEL_CONFIG_UPDATED, arr[idx]);
    return arr[idx];
  }

  function remove(id) {
    var arr = State.get('hotelConfig') || [];
    var idx = arr.findIndex(function(h) { return h.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.HOTEL_CONFIG, obj);
    EventBus.emit(EVENTS.HOTEL_CONFIG_UPDATED, id);
  }

  return {
    load: load, save: save,
    getAll: getAll, getById: getById,
    getCasinos: getCasinos, getHotels: getHotels, getRooms: getRooms,
    getByCasino: getByCasino, getByHotel: getByHotel,
    create: create, update: update, remove: remove,
  };
})();


// === src/data/users.js ===
/**
 * data/users.js — Phase 1A 帳號集合 CRUD（與其他集合同構：陣列 + 墓碑 + 上傳佇列）
 * 記錄欄位：id(=Firebase Auth uid)/email/name/role/permissions(覆寫)/enabled/createdAt
 * 寫入閘門：canManageUsers()（未登入放行 — 首次設定精靈建立首位管理員）
 * 依赖: core/constants.js, core/schema.js, core/events.js, core/state.js, core/store.js, core/permissions.js, sync/uploader.js
 */
var Users = (function() {
  function load() {
    var arr = Store.readArray(STORAGE_KEYS.USERS);
    State.set('users', arr);
    return arr;
  }
  function save(arr) {
    Store.writeArray(STORAGE_KEYS.USERS, arr);
    State.set('users', arr);
  }
  function getAll() {
    return (State.get('users') || []).filter(function(u) { return u && !u._deleted; });
  }
  function getById(id) {
    return getAll().find(function(u) { return u.id === id; }) || null;
  }
  function getByEmail(email) {
    var e = String(email || '').toLowerCase();
    return getAll().find(function(u) { return String(u.email || '').toLowerCase() === e; }) || null;
  }
  function count() { return getAll().length; }

  function _checkWrite() {
    if (!Perm.canManageUsers()) {
      Perm.notifyWriteDenied('users');
      return false;
    }
    return true;
  }

  // permissions 覆寫格式檢查（pages 值 ∈ none/read/write；special 值為 boolean）
  function _validPermissions(p) {
    if (p === undefined || p === null) return true;
    if (typeof p !== 'object' || Array.isArray(p)) return false;
    var pages = p.pages || {};
    var ok = Object.keys(pages).every(function(k) {
      return ['none', 'read', 'write'].indexOf(pages[k]) >= 0;
    });
    if (!ok) return false;
    var special = p.special || {};
    return Object.keys(special).every(function(k) {
      return typeof special[k] === 'boolean';
    });
  }

  function create(data) {
    if (!_checkWrite()) return null;
    var now = Date.now();
    var user = {
      id: data.id || ('U' + now),
      email: String(data.email || '').toLowerCase(),
      name: data.name || '',
      role: data.role || 'viewer',
      permissions: (data.permissions && typeof data.permissions === 'object') ? data.permissions : {},
      enabled: data.enabled !== false,
      pwdHash: data.pwdHash || null, // 自建帳號機制：sha256(email:pwd)，登入比對用
      createdAt: data.createdAt || now,
      _fbKey: data.id || ('U' + now), // _fbKey = uid，Auth 直接以 uid 查雲端 profile
      _updatedAt: now,
    };
    if (!_validPermissions(user.permissions)) return null;
    if (!Schema.sanitize('users', user)) return null; // E2.3 入口驗證
    var arr = State.get('users') || [];
    arr.push(user);
    save(arr);
    var obj = {}; obj[user._fbKey] = user;
    enqueue(FB_PATH.USERS, obj);
    EventBus.emit(EVENTS.USER_SAVED, user);
    return user;
  }

  function update(id, patch) {
    if (!_checkWrite()) return null;
    var arr = State.get('users') || [];
    var idx = arr.findIndex(function(u) { return u.id === id; });
    if (idx < 0) return null;
    var merged = Object.assign({}, arr[idx], patch);
    if (!_validPermissions(merged.permissions)) return null;
    if (!Schema.sanitize('users', merged)) return null; // E2.3 入口驗證（含 normalize 後回寫）
    Object.assign(arr[idx], merged, { _updatedAt: Date.now() });
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.USERS, obj);
    EventBus.emit(EVENTS.USER_SAVED, arr[idx]);
    return arr[idx];
  }

  function remove(id) {
    if (!_checkWrite()) return;
    var arr = State.get('users') || [];
    var idx = arr.findIndex(function(u) { return u.id === id; });
    if (idx < 0) return;
    arr[idx]._deleted = true;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.USERS, obj);
    EventBus.emit(EVENTS.USER_DELETED, id);
  }

  // Auth 內部用：更新密碼雜湊（本人改密碼——已由 Auth 層驗證原密碼，不需 userMgmt 權限）
  function setPwdHash(id, pwdHash) {
    var arr = State.get('users') || [];
    var idx = arr.findIndex(function(u) { return u.id === id; });
    if (idx < 0) return null;
    arr[idx].pwdHash = pwdHash || null;
    arr[idx]._updatedAt = Date.now();
    save(arr);
    var obj = {}; obj[arr[idx]._fbKey] = arr[idx];
    enqueue(FB_PATH.USERS, obj);
    return arr[idx];
  }

  // 雲端 profile 回寫本機（Auth 登入時權威資料同步；不回推雲端避免回聲）
  function upsertFromCloud(rec) {
    if (!rec || !rec.id) return null;
    var arr = State.get('users') || [];
    var idx = arr.findIndex(function(u) { return u.id === rec.id; });
    if (idx >= 0) {
      if ((rec._updatedAt || 0) >= (arr[idx]._updatedAt || 0)) {
        arr[idx] = Object.assign({}, arr[idx], rec);
      }
    } else {
      arr.push(rec);
    }
    save(arr);
    return getById(rec.id);
  }

  return {
    load: load, save: save, getAll: getAll, getById: getById, getByEmail: getByEmail,
    count: count, create: create, update: update, remove: remove,
    setPwdHash: setPwdHash,
    upsertFromCloud: upsertFromCloud,
  };
})();


// === src/core/auth.js ===
/**
 * core/auth.js — Phase 1A 個別帳號認證（自建帳號機制 + 離線快取雙軌）
 * 2026-08-22 起：不再依賴 Firebase Auth Email/密碼供應商（後台未開啟且無法代開），
 * 帳號憑證 = users 記錄內的 pwdHash（sha256(email + ':' + pwd)），存於 Realtime Database。
 * 線上：FirebaseSync.once(users) → email 比對 + pwdHash 驗證 → 快取 session
 * 離線：本機 users 集合（Watchers 同步）比對；無本機記錄 → 本機快取 7 天寬限登入
 * 首次設定：setupFirstAdmin() 偵測 users 集合為空 → 建立首位 super_admin
 * 依赖: core/constants.js, core/events.js, core/permissions.js, core/store.js, sync/firebase.js, data/users.js, data/auditLog.js
 */
var Auth = (function() {
  var _session = null;   // { uid, email, name, role, permissions, enabled, lastVerifiedAt }
  var _offline = false;  // 目前 session 是否為離線快取登入
  var _lastActivity = 0;

  async function sha256(text) {
    if (typeof crypto === 'undefined' || !crypto.subtle || typeof TextEncoder === 'undefined') {
      return null; // 環境不支援（極舊瀏覽器）— 僅離線快取比對不可用
    }
    var encoder = new TextEncoder();
    var data = encoder.encode(text);
    var hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(function(b) {
      return b.toString(16).padStart(2, '0');
    }).join('');
  }

  function _readCache() {
    try {
      var c = Store.read(STORAGE_KEYS.AUTH);
      return (c && c.uid) ? c : null; // 舊格式（單密碼時代 {time}）直接視為無快取
    } catch (e) { return null; }
  }
  function _writeCache(c) { Store.write(STORAGE_KEYS.AUTH, c); }

  function _auth() {
    try { return (typeof FirebaseSync !== 'undefined' && FirebaseSync.getAuth) ? FirebaseSync.getAuth() : null; }
    catch (e) { return null; }
  }

  function _withTimeout(p, ms) {
    return Promise.race([
      p,
      new Promise(function(_, rej) { setTimeout(function() { rej(new Error('timeout')); }, ms); }),
    ]);
  }

  // 雲端權威 profile（users/{uid}）→ 本機 users 集合 fallback
  async function _fetchProfile(uid) {
    try {
      var remote = await _withTimeout(FirebaseSync.once(FB_PATH.USERS + '/' + uid), 10000);
      if (remote && !remote._deleted) {
        try { Users.upsertFromCloud(remote); } catch (e) {}
        return remote;
      }
      if (remote && remote._deleted) return null;
    } catch (e) { /* 離線/逾時 → fallback 本機 */ }
    return Users.getById(uid);
  }

  function _friendlyError(code, e) {
    switch (code) {
      case 'auth/wrong-password':
      case 'auth/user-not-found':
      case 'auth/invalid-login-credentials': return '帳號或密碼錯誤';
      default: return '登入失敗：' + ((e && e.message) || code || '未知錯誤');
    }
  }
  void _friendlyError; // 保留給舊呼叫端相容（目前無使用）

  async function _applySession(profile, online, pwd) {
    _session = {
      uid: profile.id || profile.uid || '',
      email: profile.email || '',
      name: profile.name || '',
      role: profile.role || 'viewer',
      permissions: profile.permissions || {},
      enabled: true,
      lastVerifiedAt: online ? Date.now() : (profile.lastVerifiedAt || Date.now()),
    };
    _offline = !online;
    _lastActivity = Date.now();
    Perm.setSession(_session);
    var prev = _readCache() || {};
    _writeCache({
      uid: _session.uid,
      email: _session.email,
      name: _session.name,
      role: _session.role,
      permissions: _session.permissions,
      enabled: _session.enabled,
      lastVerifiedAt: _session.lastVerifiedAt,
      pwdHash: pwd ? await sha256(pwd) : (prev.pwdHash || null), // 離線登入比對用
    });
  }

  async function _offlineLogin(email, pwd) {
    var cache = _readCache();
    if (!cache || cache.email !== email) {
      return { ok: false, error: '無法連線驗證，且本機沒有此帳號的離線登入資料' };
    }
    var hash = await sha256(pwd);
    if (!hash || hash !== cache.pwdHash) return { ok: false, error: '帳號或密碼錯誤（離線）' };
    if (Date.now() - (cache.lastVerifiedAt || 0) > CONFIG.OFFLINE_GRACE_MS) {
      return { ok: false, error: '離線授權已過期（超過 7 天未連線驗證），請連線後重新登入' };
    }
    if (cache.enabled === false) return { ok: false, error: '帳號已停用' };
    var local = Users.getById(cache.uid);
    if (local && local.enabled === false) return { ok: false, error: '帳號已停用' };
    await _applySession(cache, false, null);
    if (typeof AuditLog !== 'undefined') AuditLog.log('auth', 'login', _session.uid, '離線登入', null, null);
    return { ok: true, offline: true };
  }

  // 帳號憑證雜湊：sha256(email + ':' + pwd)（email 當鹽，避免不同帳號同密碼同雜湊）
  function _credentialHash(email, pwd) {
    return sha256(String(email || '').toLowerCase() + ':' + String(pwd || ''));
  }

  // 雲端 users 集合（Map<uid, record>）；離線/逾時回 null
  async function _fetchCloudUsers() {
    try {
      return await _withTimeout(FirebaseSync.once(FB_PATH.USERS), 12000);
    } catch (e) { return null; }
  }

  function _findUserByEmail(map, email) {
    var e = String(email || '').toLowerCase();
    var found = null;
    Object.keys(map || {}).forEach(function(k) {
      var u = map[k];
      if (u && !u._deleted && !found && String(u.email || '').toLowerCase() === e) found = u;
    });
    return found;
  }

  async function login(email, pwd) {
    email = String(email || '').trim().toLowerCase();
    if (!email || !pwd) return { ok: false, error: '請輸入帳號與密碼' };
    var cloudUsers = await _fetchCloudUsers();
    var online = !!cloudUsers;
    var user = online ? _findUserByEmail(cloudUsers, email) : Users.getByEmail(email);
    if (!user) {
      // 雲端查無此人 → 帳密錯誤；離線且本機無記錄 → 最後嘗試本機快取離線登入
      if (online) return { ok: false, error: '帳號或密碼錯誤' };
      return _offlineLogin(email, pwd);
    }
    if (user.enabled === false) return { ok: false, error: '帳號已停用，請聯絡管理員' };
    var hash = await _credentialHash(email, pwd);
    if (!hash || !user.pwdHash || user.pwdHash !== hash) {
      return { ok: false, error: '帳號或密碼錯誤' };
    }
    if (online) { try { Users.upsertFromCloud(user); } catch (e) {} }
    await _applySession(user, online, pwd);
    if (typeof AuditLog !== 'undefined') AuditLog.log('auth', 'login', _session.uid, online ? '登入系統' : '離線登入（本機帳號比對）', null, null);
    return { ok: true, offline: !online };
  }

  // 啟動時還原 session（7 天內有線上驗證過才有效；權限為快取版本）
  function restoreSession() {
    if (_session) return true;
    var cache = _readCache();
    if (!cache || !cache.uid || !cache.role) return false;
    if (Date.now() - (cache.lastVerifiedAt || 0) > CONFIG.OFFLINE_GRACE_MS) return false;
    _session = {
      uid: cache.uid, email: cache.email || '', name: cache.name || '',
      role: cache.role, permissions: cache.permissions || {},
      enabled: cache.enabled !== false, lastVerifiedAt: cache.lastVerifiedAt || 0,
    };
    _offline = true;
    _lastActivity = Date.now();
    Perm.setSession(_session);
    return true;
  }

  // 連線恢復時線上覆核：刷新權限 / 偵測停用與移除
  async function reverify() {
    if (!_session) return;
    try {
      var profile = await _fetchProfile(_session.uid);
      if (!profile) { await forceLogout('帳號已被移除，請重新登入'); return; }
      if (profile.enabled === false) { await forceLogout('帳號已停用，請聯絡管理員'); return; }
      _session.role = profile.role || _session.role;
      _session.permissions = profile.permissions || {};
      _session.name = profile.name || _session.name;
      _session.lastVerifiedAt = Date.now();
      _offline = false;
      Perm.setSession(_session);
      var cache = _readCache() || {};
      cache.role = _session.role; cache.permissions = _session.permissions;
      cache.name = _session.name; cache.lastVerifiedAt = _session.lastVerifiedAt; cache.enabled = true;
      if (cache.uid) _writeCache(cache);
      EventBus.emit(EVENTS.PERMISSIONS_CHANGED, _session);
    } catch (e) { /* 離線覆核失敗 → 維持快取權限 */ }
  }

  // 產生本機 uid（自建帳號機制，不再使用 Firebase Auth uid）
  function _newUid() {
    return 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  // 首次設定精靈：users 集合（本機+雲端）為空 → 建立首位 super_admin 並自動登入
  async function setupFirstAdmin(name, email, pwd) {
    name = String(name || '').trim();
    email = String(email || '').trim().toLowerCase();
    if (!name) return { ok: false, error: '請輸入姓名' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Email 格式不正確' };
    if (String(pwd || '').length < 6) return { ok: false, error: '密碼至少需要 6 位' };
    var auth = _auth(); // 匿名連線（Realtime Database 讀寫身分）
    if (!auth) return { ok: false, error: '首次設定需要網路連線，請確認網路後重試' };
    try {
      var remote = null;
      try { remote = await _withTimeout(FirebaseSync.once(FB_PATH.USERS), 10000); } catch (e) {}
      if (remote && Object.keys(remote).length > 0) {
        return { ok: false, error: '系統已有管理員帳號，請直接登入' };
      }
      var uid = _newUid();
      var user = Users.create({
        id: uid, email: email, name: name, role: 'super_admin', enabled: true,
        pwdHash: await _credentialHash(email, pwd),
      });
      if (!user) throw new Error('帳號資料寫入失敗');
      await _applySession(user, true, pwd);
      if (typeof AuditLog !== 'undefined') AuditLog.log('auth', 'setup', uid, '首次設定：建立超級管理員 ' + name, null, null);
      return { ok: true, uid: uid };
    } catch (e) {
      return { ok: false, error: '建立失敗：' + ((e && e.message) || '未知錯誤') };
    }
  }

  // 管理員新增帳號：直接寫 users 記錄（含 pwdHash），不經 Firebase Auth
  async function createUserAccount(data) {
    var email = String((data && data.email) || '').trim().toLowerCase();
    var name = String((data && data.name) || '').trim();
    var pwd = (data && data.pwd) || '';
    if (!name) return { ok: false, error: '請輸入姓名' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Email 格式不正確' };
    if (String(pwd).length < 6) return { ok: false, error: '密碼至少需要 6 位' };
    var auth = _auth();
    if (!auth) return { ok: false, error: '新增帳號需要網路連線' };
    if (Users.getByEmail(email)) return { ok: false, error: '此 Email 已被使用' };
    var cloudUsers = await _fetchCloudUsers();
    if (cloudUsers && _findUserByEmail(cloudUsers, email)) return { ok: false, error: '此 Email 已被使用' };
    var uid = _newUid();
    var user = Users.create({
      id: uid, email: email, name: name,
      role: (data && data.role) || 'viewer',
      permissions: (data && data.permissions) || {},
      enabled: true,
      pwdHash: await _credentialHash(email, pwd),
    });
    if (!user) return { ok: false, error: '建立失敗：資料寫入被擋（權限或格式）' };
    return { ok: true, uid: uid };
  }

  // 管理員重設他人密碼：直接更新該帳號 pwdHash（自建帳號機制，無重設信）
  async function resetPassword(email, newPwd) {
    email = String(email || '').trim().toLowerCase();
    if (String(newPwd || '').length < 6) return { ok: false, error: '新密碼至少需要 6 位' };
    var user = Users.getByEmail(email);
    if (!user) return { ok: false, error: '找不到此 Email 的帳號' };
    var updated = Users.update(user.id, { pwdHash: await _credentialHash(email, newPwd) });
    if (!updated) return { ok: false, error: '密碼更新失敗（權限或格式）' };
    if (typeof AuditLog !== 'undefined') AuditLog.log('auth', 'pwd_reset', user.id, '管理員重設密碼：' + email, null, null);
    return { ok: true };
  }

  // 本人修改密碼：需驗證原密碼
  async function changeMyPassword(oldPwd, newPwd) {
    var me = getCurrent();
    if (!me) return { ok: false, error: '尚未登入' };
    if (String(newPwd || '').length < 6) return { ok: false, error: '新密碼至少需要 6 位' };
    var user = Users.getById(me.uid);
    if (!user) return { ok: false, error: '找不到本人帳號資料' };
    var oldHash = await _credentialHash(me.email, oldPwd);
    if (!oldHash || oldHash !== user.pwdHash) return { ok: false, error: '原密碼不正確' };
    var updated = Users.setPwdHash(me.uid, await _credentialHash(me.email, newPwd));
    if (!updated) return { ok: false, error: '密碼更新失敗（找不到帳號）' };
    if (typeof AuditLog !== 'undefined') AuditLog.log('auth', 'pwd_change', me.uid, '本人修改密碼', null, null);
    return { ok: true };
  }

  async function forceLogout(reason) {
    if (typeof AuditLog !== 'undefined' && _session) AuditLog.log('auth', 'logout', _session.uid, reason || '登出', null, null);
    _session = null;
    _offline = false;
    Perm.clear();
    Store.remove(STORAGE_KEYS.AUTH);
    var auth = _auth();
    if (auth) {
      try { await auth.signOut(); } catch (e) {}
      try { await auth.signInAnonymously(); } catch (e) {}
    }
    EventBus.emit(EVENTS.AUTH_LOGGED_OUT, { reason: reason || '' });
  }

  async function logout() { await forceLogout(''); }

  function needsSetup() {
    // 一律查雲端（本機有殘留也以雲端為準，避免誤判「已有管理員」）
    return _withTimeout(FirebaseSync.once(FB_PATH.USERS), 8000).then(function(remote) {
      return !remote || Object.keys(remote).length === 0;
    }).catch(function() {
      // 雲端不可達且本機無帳號 → 顯示設定畫面（提交時再要求連線）
      return Users.count() === 0;
    });
  }

  function getCurrent() { return _session; }
  function isOffline() { return _offline; }
  function touch() { _lastActivity = Date.now(); }
  function isAuthenticated() {
    if (!_session) return false;
    if (Date.now() - _lastActivity > CONFIG.SESSION_TIMEOUT) return false;
    _lastActivity = Date.now();
    return true;
  }

  return {
    login: login,
    restoreSession: restoreSession,
    reverify: reverify,
    setupFirstAdmin: setupFirstAdmin,
    createUserAccount: createUserAccount,
    resetPassword: resetPassword,
    changeMyPassword: changeMyPassword,
    logout: logout,
    forceLogout: forceLogout,
    needsSetup: needsSetup,
    getCurrent: getCurrent,
    isOffline: isOffline,
    isAuthenticated: isAuthenticated,
    touch: touch,
  };
})();


// === src/ui/icons.js ===
/**
 * ui/icons.js — 統一 SVG 圖示庫（Phase 3.5A D4）
 * 線性風格：24×24 viewBox、stroke-width 2、圓角端點，顏色跟隨 currentColor。
 * 全 App 圖示統一走這裡，淘汰 emoji/文字符號。
 * 依赖: 无
 */
var Icons = (function() {
  var _PATHS = {
    // 導覽
    overview: '<path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/>',
    pending: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    member: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    room: '<path d="M2 20h20"/><path d="M4 20V8l8-5 8 5v12"/><path d="M9 20v-6h6v6"/>',
    shareholder: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9a2.5 2.5 0 0 0-2.5-1.5A2.5 2.5 0 0 0 9.5 10c0 3 5 1.5 5 4.5a2.5 2.5 0 0 1-2.5 1.5A2.5 2.5 0 0 1 9.5 15"/>',
    membersMgmt: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M17.5 14.2c2.3.7 4 2.7 4 5.8"/>',
    history: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/><path d="M11 8v3.5l2.5 1.5"/>',
    reports: '<path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><path d="M9.5 13h6M9.5 17h6"/>',
    settings: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2.5 12h3M18.5 12h3M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    // 通用動作
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/>',
    download: '<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 21h16"/>',
    share: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
    backup: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    check: '<path d="M4 12.5l5 5L20 6.5"/>',
    x: '<path d="M5 5l14 14M19 5L5 19"/>',
    alert: '<path d="M12 3l10 17H2z"/><path d="M12 10v4.5"/><circle cx="12" cy="17.2" r="0.4" fill="currentColor"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="8" r="0.5" fill="currentColor"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 3v5h-5"/>',
    filter: '<path d="M3 5h18l-7 8v6l-4-2v-4z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    empty: '<rect x="4" y="7" width="16" height="13" rx="2"/><path d="M4 11h16"/><path d="M9 7l1.5-3h3L15 7"/>',
  };

  // 品牌標記（龍+金幣堆疊圖騰）—— viewBox 64×64，獨立多元素設計
  // 設計語言：墨黑圓盤 + 金邊雙框 + 金幣堆疊 + 龍頭剪影 + 龍身 S 形粗帶
  // 主題參考：用戶提供的「博盈」龍形金幣 logo（3D 渲染），SVG 簡化為可縮放向量版
  // 色彩採固定色（D8 教訓：金色直接寫死，避免 currentColor 在多 SVG 實例衝突）
  var _BRAND_SVG =
    '<defs>' +
      '<linearGradient id="g-brand" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="#f7e9a0"/>' +
        '<stop offset="35%" stop-color="#e6c66a"/>' +
        '<stop offset="60%" stop-color="#c9a84c"/>' +
        '<stop offset="100%" stop-color="#7a5a1e"/>' +
      '</linearGradient>' +
      '<linearGradient id="g-brandDark" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="#a78636"/>' +
        '<stop offset="100%" stop-color="#5a3f10"/>' +
      '</linearGradient>' +
      '<radialGradient id="g-brandInk" cx="50%" cy="60%" r="60%">' +
        '<stop offset="0%" stop-color="#0d0d1a"/>' +
        '<stop offset="100%" stop-color="#1a1a2e"/>' +
      '</radialGradient>' +
      '<linearGradient id="g-dragon" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0%" stop-color="#f7e9a0"/>' +
        '<stop offset="50%" stop-color="#c9a84c"/>' +
        '<stop offset="100%" stop-color="#7a5a1e"/>' +
      '</linearGradient>' +
    '</defs>' +
    // 1) 墨黑圓盤底 + 徑向深色光暈（向下加壓感）
    '<circle cx="32" cy="32" r="31" fill="#1a1a2e"/>' +
    '<circle cx="32" cy="32" r="30" fill="url(#g-brandInk)"/>' +
    // 2) 金邊雙圓框（外厚 + 內細）
    '<circle cx="32" cy="32" r="29.5" fill="none" stroke="url(#g-brand)" stroke-width="1.6"/>' +
    '<circle cx="32" cy="32" r="27.5" fill="none" stroke="url(#g-brandDark)" stroke-width="0.4"/>' +
    // 3) 金幣堆疊（三個銅錢——後左半露 + 後右半露 + 中央最大大方孔）
    '<circle cx="21" cy="38" r="7" fill="url(#g-brand)" stroke="#5a3f10" stroke-width="0.4"/>' +
    '<rect x="18" y="35.5" width="6" height="6" fill="#1a1a2e"/>' +
    '<circle cx="43" cy="38" r="7" fill="url(#g-brand)" stroke="#5a3f10" stroke-width="0.4"/>' +
    '<rect x="40" y="35.5" width="6" height="6" fill="#1a1a2e"/>' +
    '<circle cx="32" cy="46" r="10" fill="url(#g-brand)" stroke="#5a3f10" stroke-width="0.4"/>' +
    '<rect x="28" y="42" width="8" height="8" fill="#1a1a2e"/>' +
    '<path d="M24 44 Q32 41 40 44" stroke="#fff5c2" stroke-width="0.7" fill="none" opacity="0.6"/>' +
    // 4) 龍頭剪影（左上盤踞——兩角 + 頭部輪廓 + 龍眼 + 兩鬚）
    '<path d="M11 16 Q10 6 13 4" stroke="url(#g-dragon)" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
    '<path d="M15 16 Q16 6 19 5" stroke="url(#g-dragon)" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
    '<path d="M9 19 Q8 9 18 7 Q24 6 26 10 L26 16 Q24 20 20 22 Q13 23 9 19 Z" fill="url(#g-dragon)" stroke="#3a2606" stroke-width="0.4"/>' +
    '<circle cx="14" cy="13" r="0.8" fill="#fff5c2"/>' +
    '<path d="M24 13 Q28 8 30 4" stroke="url(#g-brandDark)" stroke-width="0.8" fill="none" stroke-linecap="round"/>' +
    '<path d="M24 18 Q28 17 32 17" stroke="url(#g-brandDark)" stroke-width="0.8" fill="none" stroke-linecap="round"/>' +
    // 5) 龍身 S 形粗帶（從龍頭右側繞過金幣堆到右下甩尾）
    '<path d="M25 16 Q33 21 41 24 Q51 28 55 38 Q57 44 53 50 Q49 54 45 53" stroke="url(#g-dragon)" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
    // 6) 龍尾（右下一小三角分岔）
    '<path d="M45 53 L48 51 L43 55 Z" fill="url(#g-dragon)" stroke="#3a2606" stroke-width="0.3"/>' +
    // 7) 表面金粉亮點（金屬光斑反射感）
    '<circle cx="22" cy="40" r="0.5" fill="#fff5c2" opacity="0.6"/>' +
    '<circle cx="42" cy="40" r="0.5" fill="#fff5c2" opacity="0.6"/>';

  function get(name, size) {
    var s = size || 20;
    if (name === 'brand') {
      // 真實 3D 龍+金幣 PNG（ImageGen 產出）；用 img 渲染才能在 32-128px 維持 3D 細節
      // （之前用 SVG 簡化版在 <48px 會糊成不可辨識的金色 blob — 2026-08-21 修正）
      return '<img class="icon icon-brand" src="icons/icon-192.png" width="' + s +
        '" height="' + s + '" alt="博盈APP" draggable="false" />';
    }
    var p = _PATHS[name];
    if (!p) return '';
    return '<svg class="icon icon-' + name + '" width="' + s + '" height="' + s +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  }

  // 空狀態 HTML（圖示 + 標題 + 引導文字）
  function empty(title, hint) {
    var html = '<div class="empty-state"><span class="empty-icon">' + get('empty', 36) + '</span>';
    if (title) html += '<span class="empty-title">' + title + '</span>';
    if (hint) html += '<span class="empty-hint">' + hint + '</span>';
    return html + '</div>';
  }

  return { get: get, empty: empty };
})();


// === src/ui/toast.js ===
/**
 * ui/toast.js — Toast 通知
 * 依赖: 无
 */
var Toast = (function() {
  var ICONS = {
    info: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6.5"/><path d="M8 7.5v4"/><path d="M8 4.8h.01"/></svg>',
    success: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.5 3.5L13 4.5"/></svg>',
    error: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>',
    warning: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l6 10.5H2L8 3z"/><path d="M8 7v3"/><path d="M8 11.5h.01"/></svg>'
  };
  function show(msg, type, duration) {
    var container = document.getElementById('toast-container');
    if (!container) return;
    var t = document.createElement('div');
    t.className = 'toast toast-' + (type || 'info');
    var icon = document.createElement('span');
    icon.className = 'toast-icon';
    icon.innerHTML = ICONS[type] || ICONS.info;
    t.appendChild(icon);
    var text = document.createElement('span');
    text.textContent = msg;
    t.appendChild(text);
    // v2.4.0 點擊關閉 + error 常駐直到點擊
    t.style.cursor = 'pointer';
    var removed = false;
    function remove() {
      if (removed) return; removed = true;
      t.classList.add('toast-fade-out');
      setTimeout(function() { if (t.parentNode) t.parentNode.removeChild(t); }, 300);
    }
    t.addEventListener('click', remove);
    container.appendChild(t);
    // error 類需手動關閉，其他自動消失
    if (type !== 'error') {
      setTimeout(function() {
        t.classList.add('toast-fade-out');
        setTimeout(function() { if (t.parentNode) t.parentNode.removeChild(t); }, 300);
      }, duration || 3000);
    }
  }
  function info(msg) { show(msg, 'info'); }
  function success(msg) { show(msg, 'success'); }
  function error(msg) { show(msg, 'error', 5000); }
  function warning(msg) { show(msg, 'warning', 4000); }
  return { show: show, info: info, success: success, error: error, warning: warning };
})();


// === src/ui/formfx.js ===
/**
 * ui/formfx.js — 表單欄位錯誤態回饋
 * 與 Toast.error 搭配使用：Toast 顯示原因，FormFX.invalid 標紅欄位並聚焦
 * 依赖: 无
 */
var FormFX = (function() {
  function invalid(el) {
    if (!el || !el.classList) return;
    el.classList.add('is-invalid');
    el.addEventListener('input', function onClear() {
      el.classList.remove('is-invalid');
      el.removeEventListener('input', onClear);
    });
    el.addEventListener('change', function onClear2() {
      el.classList.remove('is-invalid');
      el.removeEventListener('change', onClear2);
    });
    try { el.focus(); } catch (e) { /* 無法聚焦時忽略 */ }
  }
  return { invalid: invalid };
})();


// === src/ui/modal.js ===
/**
 * ui/modal.js — Modal 彈窗
 * 依赖: core/escape.js
 */
var Modal = (function() {
  var _gesturesBound = false;
  // v1.8.0 點擊黑邊關閉 + 標題列下拉關閉（像原生 App 的 sheet）
  function _bindGestures() {
    if (_gesturesBound) return;
    _gesturesBound = true;
    var overlay = document.getElementById('modal-overlay');
    if (!overlay) return;
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) close();
    });
    var box = overlay.querySelector('.modal-box');
    var header = overlay.querySelector('.modal-header');
    if (!box || !header) return;
    var sy = 0, dy = 0, dragging = false;
    header.addEventListener('touchstart', function(e) {
      sy = e.touches[0].clientY; dy = 0; dragging = true;
    }, { passive: true });
    header.addEventListener('touchmove', function(e) {
      if (!dragging) return;
      dy = e.touches[0].clientY - sy;
      if (dy > 0) {
        box.style.transition = 'none';
        box.style.transform = 'translateY(' + dy + 'px)';
        if (e.cancelable) e.preventDefault();
      }
    }, { passive: false });
    header.addEventListener('touchend', function() {
      if (!dragging) return;
      dragging = false;
      box.style.transition = '';
      box.style.transform = '';
      if (dy > 90) close();
    });
    header.addEventListener('touchcancel', function() {
      dragging = false;
      box.style.transition = '';
      box.style.transform = '';
    });
  }
  function open(title, contentHTML, options) {
    var overlay = document.getElementById('modal-overlay');
    var titleEl = document.getElementById('modal-title');
    var bodyEl = document.getElementById('modal-body');
    if (!overlay) return;
    if (titleEl) titleEl.textContent = title || '';
    if (bodyEl) bodyEl.innerHTML = contentHTML || '';
    overlay.classList.add('active');
    _bindGestures();
    if (options && options.onOpen) setTimeout(options.onOpen, 50);
  }
  function close() {
    var overlay = document.getElementById('modal-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      var bodyEl = document.getElementById('modal-body');
      if (bodyEl) bodyEl.innerHTML = '';
    }
  }
  function isOpen() {
    var overlay = document.getElementById('modal-overlay');
    return !!(overlay && overlay.classList.contains('active'));
  }
  function confirm(message, onConfirm) {
    open('確認',
      '<p class="modal-confirm-msg">' + esc(String(message)) + '</p>' +
      '<div class="modal-confirm-actions">' +
      '<button class="btn btn-secondary" onclick="Modal.close()">取消</button> ' +
      '<button class="btn btn-danger" id="modal-confirm-btn">確認</button>' +
      '</div>');
    setTimeout(function() {
      var btn = document.getElementById('modal-confirm-btn');
      if (btn) btn.onclick = function() { close(); if (onConfirm) onConfirm(); };
    }, 50);
  }
  return { open: open, close: close, confirm: confirm, isOpen: isOpen };
})();


// === src/ui/keyboard.js ===
/**
 * ui/keyboard.js — 键盘快捷键
 * 依赖: core/constants.js, core/router.js, ui/modal.js
 */
var Keyboard = (function() {
  var _bound = false;
  function init() {
    if (_bound) return;
    _bound = true;
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        var idx = parseInt(e.key) - 1;
        if (PAGES[idx]) Router.go(PAGES[idx].name);
      }
      if (e.key === 'Escape') {
        Modal.close();
      }
    });
  }
  return { init: init };
})();


// === src/ui/paginator.js ===
/**
 * ui/paginator.js — 泛型分页+排序+搜索组件
 * 依赖: 无
 * 铁律: 不含任何业务字段名（泛型化）
 */
var Paginator = (function() {
  function create(container, items, options) {
    var opts = options || {};
    var pageSize = opts.pageSize || 10;
    var currentPage = 1;
    var searchQuery = '';
    var sortField = null;
    var sortAsc = true;
    var searchFields = opts.searchFields || [];
    var sortConfigs = opts.sortConfigs || {};

    function getFiltered() {
      var filtered = items.slice();
      if (searchQuery && searchFields.length) {
        var q = searchQuery.toLowerCase();
        filtered = filtered.filter(function(item) {
          return searchFields.some(function(field) {
            var val = item[field];
            return val !== null && val !== undefined && String(val).toLowerCase().indexOf(q) >= 0;
          });
        });
      }
      if (sortField && sortConfigs[sortField]) {
        filtered = filtered.slice().sort(function(a, b) {
          var r = sortConfigs[sortField](a, b);
          return sortAsc ? r : -r;
        });
      }
      return filtered;
    }

    function render() {
      if (!container) return;
      var filtered = getFiltered();
      var totalPages = Math.ceil(filtered.length / pageSize) || 1;
      if (currentPage > totalPages) currentPage = totalPages;
      var start = (currentPage - 1) * pageSize;
      var pageItems = filtered.slice(start, start + pageSize);

      var html = '';
      if (opts.renderTable) {
        html = opts.renderTable(pageItems, filtered.length);
      }
      // 分页控制
      html += '<div class="paginator">';
      html += '<span class="paginator-info">第 ' + currentPage + '/' + totalPages + ' 頁，共 ' + filtered.length + ' 筆</span>';
      html += '<div class="paginator-btns">';
      html += '<button class="btn-sm" onclick="' + (opts.instanceName || 'pg') + '.goPage(1)" ' + (currentPage === 1 ? 'disabled' : '') + '>首頁</button> ';
      html += '<button class="btn-sm" onclick="' + (opts.instanceName || 'pg') + '.goPage(' + (currentPage - 1) + ')" ' + (currentPage === 1 ? 'disabled' : '') + '>上一頁</button> ';
      html += '<button class="btn-sm" onclick="' + (opts.instanceName || 'pg') + '.goPage(' + (currentPage + 1) + ')" ' + (currentPage >= totalPages ? 'disabled' : '') + '>下一頁</button> ';
      html += '<button class="btn-sm" onclick="' + (opts.instanceName || 'pg') + '.goPage(' + totalPages + ')" ' + (currentPage >= totalPages ? 'disabled' : '') + '>末頁</button>';
      html += '</div></div>';

      container.innerHTML = html;
    }

    function goPage(p) { currentPage = p; render(); }
    function search(q) { searchQuery = q; currentPage = 1; render(); }
    function sort(field) {
      if (sortField === field) { sortAsc = !sortAsc; } else { sortField = field; sortAsc = true; }
      render();
    }
    function update(newItems) { items = newItems; render(); }

    render();
    return { goPage: goPage, search: search, sort: sort, update: update, render: render };
  }

  return { create: create };
})();


// === src/ui/pdfExport.js ===
/**
 * ui/pdfExport.js — PDF 匯出模組
 * 將代理/股東的會員帳卡明細+房間記錄匯出為 PDF
 * 方案：開新視窗 + window.print()，繞過 html2canvas 兼容性問題
 * 依赖: core/constants.js, core/datetime.js, data/agents.js, data/auditLog.js, data/bookings.js, data/memberTxs.js, data/members.js, data/shareholders.js, data/trips.js, ui/toast.js
 */
var PdfExport = (function() {

  function fmtNum(n) {
    return Math.round(n).toLocaleString();
  }

  function fmtDec(n) {
    var v = Math.round((n || 0) * 1000) / 1000;
    if (Math.abs(v - Math.round(v)) < 1e-6) return String(Math.round(v));
    return v.toFixed(3).replace(/\.?0+$/, '');
  }

  function fmtCardNum(n) {
    var v = Math.round((n || 0) * 1000) / 1000;
    if (Math.abs(v - Math.round(v)) < 1e-6) return Math.round(v).toLocaleString();
    return v.toFixed(3).replace(/\.?0+$/, '');
  }

  function fmtNT(n) {
    return fmtCardNum((n || 0) * 10000);
  }

  function calcTotalNT(tx) {
    return (tx.subtotal || 0) * 10000 - (tx.expensesNT || 0);
  }

  function feeLabel(feeType) {
    switch (feeType) {
      case 'free': return '免費';
      case 'paid': return '收費';
      case 'discount': return '折扣';
      default: return '自動';
    }
  }

  function _escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* 客名遮罩 */
  function maskName(name) {
    if (!name) return '';
    if (name.length <= 2) return name[0] + '*';
    return name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  }

  function buildPage(title, subtitle, tripInfo, sectionsHtml) {
    var dateStr = TWDate.todayStr().replace(/-/g, '/');

    var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' + _escapeHtml(title) + '</title>';
    html += '<style>';
    html += 'body{font-family:"Microsoft JhengHei","PingFang TC",sans-serif;font-size:12px;color:#1a1a2e;margin:0;padding:16px;background:#fff;}';
    html += 'h1{text-align:center;font-size:18px;margin:0 0 4px 0;}';
    html += 'h2{text-align:center;font-size:14px;margin:0 0 4px 0;font-weight:normal;color:#444;}';
    html += '.sub{text-align:center;font-size:11px;color:#666;margin-bottom:8px;}';
    html += '.trip-info{text-align:center;font-size:11px;color:#888;margin-bottom:16px;}';
    html += '.date{text-align:center;font-size:10px;color:#aaa;margin-bottom:16px;}';
    html += '.section{margin-bottom:20px;page-break-inside:avoid;}';
    html += '.section-title{font-size:14px;font-weight:bold;margin-bottom:8px;padding-bottom:4px;border-bottom:2px solid #333;}';

    /* 代理汇总 */
    html += '.agent-header{background:#2c3e50;color:#fff;padding:10px 14px;border-radius:4px 4px 0 0;display:flex;justify-content:space-between;align-items:center;}';
    html += '.agent-name{font-size:15px;font-weight:bold;}';
    html += '.agent-sh{font-size:12px;opacity:0.9;}';
    html += '.quota-section{padding:10px 14px;background:#f5f6fa;border-left:1px solid #bbb;border-right:1px solid #bbb;border-bottom:1px solid #bbb;border-radius:0 0 4px 4px;margin-bottom:12px;}';
    html += '.quota-info{display:flex;gap:16px;font-size:12px;margin-bottom:6px;}';
    html += '.quota-info .met{color:#27ae60;font-weight:bold;}';
    html += '.quota-info .unmet{color:#e67e22;font-weight:bold;}';
    html += '.quota-bar{height:8px;background:#e0e0e0;border-radius:4px;overflow:hidden;}';
    html += '.quota-fill{height:100%;background:#3498db;border-radius:4px;}';
    html += '.summary-table{width:100%;border-collapse:collapse;font-size:11px;margin:12px 0;}';
    html += '.summary-table th,.summary-table td{border:1px solid #bbb;padding:6px 10px;}';
    html += '.summary-table th{background:#e8e8e8;text-align:center;font-weight:bold;}';
    html += '.summary-table td.num{text-align:right;}';
    html += '.summary-table .total-row{background:#f0f0f0;font-weight:bold;}';
    html += '.summary-table .negative{color:#c0392b;}';
    html += '.summary-table .positive{color:#27ae60;}';
    html += '.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:12px 0;}';
    html += '.stat-card{border:1px solid #ddd;border-radius:6px;padding:10px;text-align:center;background:#fafafa;}';
    html += '.stat-label{font-size:11px;color:#666;margin-bottom:4px;}';
    html += '.stat-val{font-size:14px;font-weight:bold;}';
    html += '.stat-val.negative{color:#c0392b;}';
    html += '.stat-val.positive{color:#27ae60;}';

    /* 會員帳卡 */
    html += '.tx-card{border:1px solid #bbb;border-radius:6px;margin-bottom:16px;page-break-inside:avoid;overflow:hidden;}';
    html += '.tx-card-header{background:#2c3e50;color:#fff;padding:8px 12px;font-size:13px;font-weight:bold;}';
    html += '.tx-card-hall{font-size:11px;opacity:0.9;margin-bottom:2px;}';
    html += '.tx-card-member{font-size:13px;}';
    html += '.tx-card-body{padding:10px 12px;}';
    html += '.tx-card-section{border-bottom:1px dashed #ddd;padding:6px 0;}';
    html += '.tx-card-section:last-child{border-bottom:none;}';
    html += '.tx-card-row{display:flex;justify-content:space-between;padding:3px 0;}';
    html += '.tx-card-label{color:#666;font-size:11px;}';
    html += '.tx-card-val{font-size:12px;font-weight:bold;text-align:right;min-width:80px;}';
    html += '.tx-card-val.negative{color:#c0392b;}';
    html += '.tx-card-val.positive{color:#27ae60;}';
    html += '.tx-card-section-title{font-size:11px;font-weight:bold;color:#444;margin:4px 0 6px 0;}';

    /* 開銷表格 */
    html += '.exp-table{width:100%;border-collapse:collapse;font-size:11px;margin-top:4px;}';
    html += '.exp-table th,.exp-table td{border:1px solid #ccc;padding:3px 6px;text-align:left;}';
    html += '.exp-table th{background:#eee;font-weight:bold;}';
    html += '.exp-table td.num{text-align:right;}';

    /* 底部總交收 */
    html += '.tx-card-footer{background:#f8f9fa;padding:8px 12px;border-top:1px solid #ddd;display:flex;justify-content:space-between;align-items:center;}';
    html += '.tx-card-total-label{font-size:12px;font-weight:bold;color:#333;}';
    html += '.tx-card-total-val{font-size:14px;font-weight:bold;}';

    /* 簡化統計表格（用於匯總） */
    html += 'table{width:100%;border-collapse:collapse;font-size:11px;margin-bottom:8px;}';
    html += 'th,td{border:1px solid #bbb;padding:5px 8px;}';
    html += 'th{background:#e8e8e8;text-align:center;font-weight:bold;}';
    html += 'td.num{text-align:right;}';
    html += 'td.center{text-align:center;}';
    html += '.total-row{background:#f0f0f0;font-weight:bold;}';
    html += '.empty{color:#999;font-size:12px;margin-bottom:12px;}';
    html += '.page-break{page-break-before:always;}';
    html += '.summary-bar{background:#e8f4fd;padding:8px 12px;border-radius:4px;margin:12px 0;font-size:12px;font-weight:bold;text-align:center;}';

    html += '@media print{body{padding:8px;} .no-print{display:none;}}';
    html += '</style></head><body>';

    html += '<h1>博盈國際會 — 台灣版</h1>';
    html += '<h2>' + _escapeHtml(title) + '</h2>';
    if (subtitle) html += '<div class="sub">' + _escapeHtml(subtitle) + '</div>';
    if (tripInfo) html += '<div class="trip-info">' + _escapeHtml(tripInfo) + '</div>';
    html += '<div class="date">匯出日期：' + dateStr + '</div>';

    html += sectionsHtml;
    html += '</body></html>';
    return html;
  }

  /* === 單筆交易帳卡（仿網頁 mb-card） === */
  function buildTxCard(tx, defaultHallId) {
    var m = Members.getById(tx.memberId);
    var hallId = tx.vipHallId || defaultHallId || '';
    var hall = VIP_HALLS.find(function(h) { return h.id === hallId; });
    var hallName = hall ? hall.name : hallId;
    var isNeg = (tx.upDown || 0) < 0;
    var totalNT = calcTotalNT(tx);
    var isWin = totalNT >= 0;
    var expenses = tx.expenses || [];

    var html = '<div class="tx-card">';

    html += '<div class="tx-card-header">';
    html += '<div class="tx-card-hall">' + _escapeHtml(hallName) + (tx.date ? ' · ' + tx.date : '') + '</div>';
    html += '<div class="tx-card-member">' + _escapeHtml(m ? m.id : tx.memberId) + ' ' + _escapeHtml(m ? m.name : '') + '</div>';
    html += '</div>';

    html += '<div class="tx-card-body">';

    html += '<div class="tx-card-section">';
    html += '<div class="tx-card-row"><span class="tx-card-label">日期</span><span class="tx-card-val">' + _escapeHtml(tx.date || '') + '</span></div>';
    html += '<div class="tx-card-row"><span class="tx-card-label">出碼' + (tx.chipType === 'credit' ? ' <span class="chip-credit-tag">信用</span>' : '') + (tx.pureTour ? ' <span class="pure-tour-tag">純旅遊</span>' : '') + '</span><span class="tx-card-val">' + fmtCardNum(tx.outCode || 0) + ' HK萬</span></div>';
    html += '<div class="tx-card-row"><span class="tx-card-label">回碼</span><span class="tx-card-val">' + fmtCardNum(tx.backCode || 0) + ' HK萬</span></div>';
    html += '<div class="tx-card-row"><span class="tx-card-label">上下分</span><span class="tx-card-val ' + (isNeg ? 'negative' : 'positive') + '">' + fmtCardNum(tx.upDown || 0) + ' HK萬</span></div>';
    html += '</div>';

    html += '<div class="tx-card-section">';
    html += '<div class="tx-card-row"><span class="tx-card-label">洗碼數</span><span class="tx-card-val">' + fmtCardNum(tx.washCode || 0) + ' HK萬</span></div>';
    html += '<div class="tx-card-row"><span class="tx-card-label">倍率</span><span class="tx-card-val">' + (tx.rate1 || 0) + ' / ' + (tx.rate2 || 0) + '</span></div>';
    html += '<div class="tx-card-row"><span class="tx-card-label">返水</span><span class="tx-card-val">' + (tx.rebate1 || 0) + ' / ' + (tx.rebate2 || 0) + '</span></div>';
    html += '<div class="tx-card-row"><span class="tx-card-label">退傭1</span><span class="tx-card-val">' + fmtNum(Math.trunc((tx.commission1 || 0) * 10000)) + '</span></div>';
    html += '<div class="tx-card-row"><span class="tx-card-label">退傭2</span><span class="tx-card-val">' + fmtNum(Math.trunc((tx.commission2 || 0) * 10000)) + '</span></div>';
    html += '<div class="tx-card-row"><span class="tx-card-label">NT輸贏</span><span class="tx-card-val ' + ((tx.ntResult || 0) < 0 ? 'negative' : 'positive') + '">' + fmtNT(tx.ntResult) + '</span></div>';
    html += '<div class="tx-card-row"><span class="tx-card-label">小計</span><span class="tx-card-val ' + ((tx.subtotal || 0) < 0 ? 'negative' : 'positive') + '">' + fmtNum(Math.round((tx.subtotal || 0) * 10000)) + '</span></div>';
    html += '</div>';

    html += '<div class="tx-card-section">';
    html += '<div class="tx-card-section-title">開銷明細</div>';
    if (expenses.length === 0) {
      html += '<div class="tx-card-row"><span class="tx-card-label">— 無開銷 —</span></div>';
    } else {
      html += '<table class="exp-table"><thead><tr>';
      html += '<th>項目</th><th class="num">金額(HK)</th><th class="num" title="公司實支——錢包扣款依據">實支(HK)</th><th class="num">匯率</th><th class="num">NT</th>';
      html += '</tr></thead><tbody>';
      expenses.forEach(function(e) {
        var qtyLabel = (e.quantity && e.quantity > 1) ? ' ×' + e.quantity : '';
        var isAbsorb = !!e.absorbed;
        var cls = isAbsorb ? ' class="exp-row exp-row-host"' : ' class="exp-row"';
        html += '<tr' + cls + '>';
        html += '<td>' + _escapeHtml((e.name || '') + qtyLabel) + (isAbsorb ? ' <span class="tx-absorb-tag" title="由代理自行負擔，不從會員交收扣除">代理吸收</span>' : '') + '</td>';
        // v2.0 實支顯示值：手填 > 門票成本價×數量 > 金額
        var payOf = (e.payout !== undefined && e.payout !== null) ? (e.payout || 0)
          : ((e.ourPrice !== undefined && e.ourPrice !== null && e.ticketType && e.ticketType !== 'other' && e.ticketType !== 'loan')
              ? (e.ourPrice || 0) * (e.quantity || 1) : (e.amountHK || 0));
        if (isAbsorb) {
          html += '<td class="num exp-host-cell" colspan="4" title="由代理招待，不從交收扣除"><span class="exp-host-badge">招待</span> 不從交收扣除</td>';
        } else {
          var nt = (e.amountHK || 0) * (e.exchangeRate || 0);
          html += '<td class="num">' + fmtCardNum(e.amountHK || 0) + '</td>';
          html += '<td class="num">' + fmtCardNum(payOf) + '</td>';
          html += '<td class="num">' + (e.exchangeRate || 0) + '</td>';
          html += '<td class="num">' + fmtNum(Math.round(nt)) + '</td>';
        }
        html += '</tr>';
      });
      // v1.9.5 代理吸收合計（單獨列示，不計入總交收）
      var absTotal = calcAbsorbedNT(expenses);
      if (absTotal > 0) {
        html += '<tr class="exp-absorb-total"><td>代理吸收合計（不從交收扣除）</td><td></td><td></td><td></td><td class="num">' + fmtNum(absTotal) + '</td></tr>';
      }
      html += '</tbody></table>';
    }
    html += '</div>';

    html += '</div>';

    html += '<div class="tx-card-footer">';
    html += '<span class="tx-card-total-label">總交收金額NT</span>';
    html += '<span class="tx-card-total-val ' + (isWin ? 'positive' : 'negative') + '">' + fmtNum(Math.round(totalNT)) + '</span>';
    html += '</div>';

    html += '</div>';
    return html;
  }

  function buildRoomTable(bookings) {
    var html = '<div class="section">';
    html += '<div style="font-size:13px;font-weight:bold;margin-bottom:6px;">房間記錄</div>';
    html += '<table><thead><tr>';
    html += '<th>客人</th><th>酒店</th><th>房型</th><th>入住</th><th>退房</th>';
    html += '<th class="num">晚</th><th class="num">門檻(萬)</th><th class="num">房費</th><th>狀態</th>';
    html += '</tr></thead><tbody>';

    var sumCharge = 0, sumNights = 0;

    bookings.forEach(function(b) {
      var charge = b.chargeGuest || 0;
      sumCharge += charge;
      sumNights += (b.nights || 1);

      html += '<tr>';
      html += '<td>' + _escapeHtml(b.guestName || '-') + '</td>';
      html += '<td>' + _escapeHtml(b.hotel || '-') + '</td>';
      html += '<td>' + _escapeHtml(b.roomType || '-') + '</td>';
      html += '<td class="center">' + _escapeHtml(b.checkIn || '-') + '</td>';
      html += '<td class="center">' + _escapeHtml(b.checkOut || '-') + '</td>';
      html += '<td class="num">' + (b.nights || 1) + '</td>';
      html += '<td class="num">' + ((b.threshold || 0) / 10000).toFixed(0) + '</td>';
      html += '<td class="num">' + (charge > 0 ? fmtNum(charge) : '-') + '</td>';
      html += '<td class="center">' + feeLabel(b.feeType) + '</td>';
      html += '</tr>';
    });

    html += '<tr class="total-row"><td colspan="5">小計</td>';
    html += '<td class="num">' + sumNights + '</td>';
    html += '<td></td>';
    html += '<td class="num">' + fmtNum(sumCharge) + '</td>';
    html += '<td></td></tr></tbody></table></div>';
    return html;
  }

  /* === 代理區塊：含代理匯總 + 會員帳卡明細 + 房間記錄 === */
  function buildAgentSection(agent, txs, bookings, pageBreak, defaultHallId) {
    var cls = pageBreak ? ' class="page-break"' : '';
    var html = '<div' + cls + ' class="section">';

    // --- 代理匯總（仿網頁右側面板）---
    var sh = Shareholders.getById(agent.shareholderId);
    var allMtxs = MemberTxs.getAll();
    var allBookings = Bookings.getAll();
    // v2.3.3 與代理管理頁同口徑：達標計算含封存團
    var quota = calcAgentQuota(agent.id, allMtxs, allBookings, { includeSealed: true });
    var pct = quota.totalThreshold > 0 ? Math.min(100, (quota.totalWashRaw / quota.totalThreshold) * 100) : 0;
    var totalSettle = txs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
    var totalWash = txs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
    var memberCount = new Set(txs.map(function(t) { return t.memberId; })).size;
    var roomCount = bookings.reduce(function(s, b) { return s + (b.nights || 1); }, 0);

    // 代理 header
    html += '<div class="agent-header">';
    html += '<span class="agent-name">' + _escapeHtml(agent.name) + '</span>';
    html += '<span class="agent-sh">上線: ' + _escapeHtml(sh ? sh.name : '-') + '</span>';
    html += '</div>';

    // 配額條
    html += '<div class="quota-section">';
    html += '<div class="quota-info">';
    html += '<span>總洗碼: ' + quota.totalWashCode.toFixed(2) + ' 萬</span>';
    html += '<span>總門檻: ' + (quota.totalThreshold / 10000).toFixed(0) + ' 萬</span>';
    html += '<span class="' + (quota.isMet ? 'met' : 'unmet') + '">' + (quota.isMet ? ICONS.check + ' 達標' : ICONS.alert + ' 未達標') + '</span>';
    html += '</div>';
    var qc = quota.isMet ? '#27ae60' : (pct < 50 ? '#3498db' : '#e67e22');
    html += '<div class="quota-bar"><div class="quota-fill" style="width:' + pct + '%;background:' + qc + ';"></div></div>';
    html += '</div>';

    // 會員匯總表
    if (txs.length > 0) {
      var memberGroups = {};
      txs.forEach(function(tx) {
        var mid = tx.memberId;
        if (!memberGroups[mid]) memberGroups[mid] = { totalSettle: 0 };
        memberGroups[mid].totalSettle += calcTotalNT(tx);
      });
      html += '<table class="summary-table"><thead><tr>';
      html += '<th>客名</th><th class="num">交收</th>';
      html += '</tr></thead><tbody>';
      var sumSettle = 0;
      Object.keys(memberGroups).forEach(function(mid) {
        var g = memberGroups[mid];
        var m = Members.getById(mid);
        sumSettle += g.totalSettle;
        html += '<tr>';
        html += '<td>' + _escapeHtml(maskName(m ? m.name : mid)) + '</td>';
        html += '<td class="num ' + (g.totalSettle < 0 ? 'negative' : 'positive') + '">' + fmtCardNum(Math.round(g.totalSettle)) + '</td>';
        html += '</tr>';
      });
      html += '<tr class="total-row">';
      html += '<td>合計</td>';
      html += '<td class="num ' + (sumSettle < 0 ? 'negative' : 'positive') + '">' + fmtCardNum(Math.trunc(sumSettle / 100) * 100) + '</td>';
      html += '</tr></tbody></table>';
    }

    // 統計卡片
    html += '<div class="stats-grid">';
    html += '<div class="stat-card"><div class="stat-label">總洗碼</div><div class="stat-val">' + fmtCardNum(totalWash) + ' 萬</div></div>';
    html += '<div class="stat-card"><div class="stat-label">總交收</div><div class="stat-val ' + (totalSettle < 0 ? 'negative' : 'positive') + '">' + fmtCardNum(Math.trunc(totalSettle / 100) * 100) + '</div></div>';
    html += '<div class="stat-card"><div class="stat-label">訂房數</div><div class="stat-val">' + roomCount + ' 晚</div></div>';
    html += '<div class="stat-card"><div class="stat-label">會員數</div><div class="stat-val">' + memberCount + '</div></div>';
    html += '</div>';

    html += '<div class="section-title">會員帳卡明細</div>';

    // --- 會員帳卡 ---
    if (txs.length > 0) {
      txs.forEach(function(tx) {
        html += buildTxCard(tx, defaultHallId);
      });
      html += '<div class="summary-bar">';
      html += '總洗碼: ' + fmtCardNum(totalWash) + ' 萬 · ';
      html += '合計交收: NT$ ' + fmtNum(Math.round(totalSettle));
      html += '</div>';
    } else {
      html += '<div class="empty">無洗碼記錄</div>';
    }

    if (bookings.length > 0) {
      html += buildRoomTable(bookings);
    } else {
      html += '<div class="empty">無房間記錄</div>';
    }

    html += '</div>';
    return html;
  }

  function generatePDF(htmlContent, filename) {
    try {
      var printWindow = window.open('', '_blank');
      if (!printWindow) {
        Toast.error('彈出視窗被阻擋，請允許彈出視窗後重試');
        return false;
      }
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      setTimeout(function() {
        try { printWindow.print(); }
        catch (e) { Toast.error('列印失敗：' + (e.message || e)); }
      }, 300);
      return true;
    } catch (e) {
      Toast.error('PDF 匯出失敗：' + (e.message || e));
      return false;
    }
  }

  function buildTripInfo(trip) {
    if (!trip) return '';
    var parts = [];
    parts.push('團號: ' + trip.id);
    if (trip.visitDate) parts.push('預計前往: ' + trip.visitDate); // v1.9.0
    if (trip.hotelNote) parts.push('預計酒店: ' + trip.hotelNote);  // v1.9.0
    if (trip.startDate) parts.push('開始: ' + trip.startDate);
    if (trip.endDate) parts.push('結束: ' + trip.endDate);
    if (trip.lastSettlementDate) parts.push('最後結算: ' + trip.lastSettlementDate);
    if (trip.hallIds && trip.hallIds.length > 0) {
      var hallNames = trip.hallIds.map(function(hid) {
        var h = VIP_HALLS.find(function(x) { return x.id === hid; });
        return h ? h.name : hid;
      });
      parts.push('廳別: ' + hallNames.join('、'));
    }
    return parts.join(' · ');
  }

  function exportAgent(agentId, tripId) {
    var agent = Agents.getById(agentId);
    if (!agent) { Toast.error('找不到代理'); return; }

    var tripObj = tripId ? Trips.getById(tripId) : null;
    var defaultHallId = (tripObj && tripObj.hallIds && tripObj.hallIds[0]) ? tripObj.hallIds[0] : '';

    // 匯出代理的全部資料（跨所有團），與 Web 右側代理面板統計口徑一致
    var mtxs = MemberTxs.getAll().filter(function(t) {
      var effectiveAgentId = t.agentId;
      if (!effectiveAgentId && t.tripId) {
        var tr = Trips.getById(t.tripId);
        effectiveAgentId = tr ? (tr.agentId || '') : '';
      }
      return effectiveAgentId === agentId;
    });
    var bookings = Bookings.getAll().filter(function(b) {
      var effectiveAgentId = b.agentId;
      if (!effectiveAgentId && b.tripId) {
        var tr = Trips.getById(b.tripId);
        effectiveAgentId = tr ? (tr.agentId || '') : '';
      }
      return effectiveAgentId === agentId;
    });

    if (mtxs.length === 0 && bookings.length === 0) {
      Toast.warning('此代理無洗碼及房間記錄');
      return;
    }

    var sh = Shareholders.getById(agent.shareholderId);
    var subtitle = sh ? ('上線股東：' + sh.name) : '';
    if (tripObj) subtitle = (subtitle ? subtitle + ' · ' : '') + '團：' + tripObj.id;

    var tripInfo = buildTripInfo(tripObj);
    var sections = buildAgentSection(agent, mtxs, bookings, false, defaultHallId);
    var html = buildPage('代理：' + agent.name, subtitle, tripInfo, sections);
    var ok = generatePDF(html, '代理_' + agent.name + '_明細');
    if (ok) AuditLog.log('pdfExport', 'export', agentId,
      '匯出代理明細 PDF：' + agent.name + (tripId ? '（團 ' + tripId + '）' : '（全部團）'));
  }

  function exportShareholder(tripId) {
    var agents = Agents.getAll();
    if (agents.length === 0) { Toast.error('無代理資料'); return; }

    var mtxs, bookings, defaultHallId = '';
    var tripObj = null;
    if (tripId) {
      tripObj = Trips.getById(tripId);
      mtxs = MemberTxs.getByTrip(tripId);
      bookings = Bookings.getByTrip(tripId);
      if (tripObj && tripObj.hallIds && tripObj.hallIds[0]) defaultHallId = tripObj.hallIds[0];
    } else {
      mtxs = MemberTxs.getAll();
      bookings = Bookings.getAll();
    }

    var hasData = agents.some(function(a) {
      return mtxs.some(function(t) {
        var effectiveAgentId = t.agentId;
        if (!effectiveAgentId && t.tripId) {
          var tr = Trips.getById(t.tripId);
          effectiveAgentId = tr ? (tr.agentId || '') : '';
        }
        return effectiveAgentId === a.id;
      }) ||
             bookings.some(function(b) {
        var effectiveAgentId = b.agentId;
        if (!effectiveAgentId && b.tripId) {
          var tr = Trips.getById(b.tripId);
          effectiveAgentId = tr ? (tr.agentId || '') : '';
        }
        return effectiveAgentId === a.id;
      });
    });
    if (!hasData) {
      Toast.warning('所有代理均無記錄');
      return;
    }

    var subtitle = '共 ' + agents.length + ' 位代理';
    if (tripObj) subtitle += ' · 團：' + tripObj.id;

    var tripInfo = buildTripInfo(tripObj);
    var sectionsHtml = '';
    var isFirst = true;
    agents.forEach(function(agent) {
      var agentTxs = mtxs.filter(function(t) {
        var effectiveAgentId = t.agentId;
        if (!effectiveAgentId && t.tripId) {
          var tr = Trips.getById(t.tripId);
          effectiveAgentId = tr ? (tr.agentId || '') : '';
        }
        return effectiveAgentId === agent.id;
      });
      var agentBookings = bookings.filter(function(b) {
        var effectiveAgentId = b.agentId;
        if (!effectiveAgentId && b.tripId) {
          var tr = Trips.getById(b.tripId);
          effectiveAgentId = tr ? (tr.agentId || '') : '';
        }
        return effectiveAgentId === agent.id;
      });
      if (agentTxs.length === 0 && agentBookings.length === 0) return;
      sectionsHtml += buildAgentSection(agent, agentTxs, agentBookings, !isFirst, defaultHallId);
      isFirst = false;
    });

    var html = buildPage('股東全覽 — 全部代理明細', subtitle, tripInfo, sectionsHtml);
    var ok = generatePDF(html, '股東全覽_全部代理明細');
    if (ok) AuditLog.log('pdfExport', 'export', tripId || 'all',
      '匯出股東全覽 PDF' + (tripId ? '（團 ' + tripId + '）' : '（全部團）'));
  }

  return {
    exportAgent: exportAgent,
    exportShareholder: exportShareholder,
  };
})();


// === src/ui/tripPicker.js ===
/**
 * ui/tripPicker.js — v1.9.0 共用團選擇器（搜尋式彈窗）
 * 原生 select 在手機上是全螢幕滾輪，團一多難滾；改為按鈕＋Modal 搜尋列表
 * 用法：TripPicker.open(currentTripId, function(tripId){ ... })
 */
var TripPicker = (function() {
  var _cb = null;
  var _currentId = '';

  function open(currentId, cb) {
    _cb = cb;
    _currentId = currentId || '';
    var html = '';
    html += '<div class="form-group"><input type="text" id="tp-search" class="form-input" placeholder="搜尋團號 / 股東 / 酒店 / 備註..." oninput="TripPicker._filter(this.value)" autocomplete="off"></div>';
    html += '<div id="tp-list" class="tp-list">' + _buildRows('') + '</div>';
    Modal.open('選擇團', html);
    var searchEl = document.getElementById('tp-search');
    if (searchEl && searchEl.focus) setTimeout(function() { try { searchEl.focus(); } catch (e) {} }, 80);
  }

  function _buildRows(q) {
    q = (q || '').trim().toLowerCase();
    var trips = Trips.getAll().filter(function(t) { return t.status !== TRIP_STATUS.SEALED; });
    // 進行中在前、待結帳在後；同組新的在前
    trips.sort(function(a, b) {
      var oa = a.status === TRIP_STATUS.ACTIVE ? 0 : 1;
      var ob = b.status === TRIP_STATUS.ACTIVE ? 0 : 1;
      if (oa !== ob) return oa - ob;
      return (b.createdAt || 0) - (a.createdAt || 0);
    });
    if (q) {
      trips = trips.filter(function(t) {
        var sh = Shareholders.getById(t.shareholderId);
        var hay = [t.id, t.label || '', sh ? sh.name : '', t.notes || '', t.hotelNote || '', t.visitDate || ''].join(' ').toLowerCase();
        return hay.indexOf(q) >= 0;
      });
    }
    if (trips.length === 0) return '<div class="tp-empty">找不到符合的團</div>';
    return trips.slice(0, 50).map(function(t) {
      var sh = Shareholders.getById(t.shareholderId);
      var bits = [t.id];
      if (t.label) bits.push(t.label); // v2.1 團備註名稱
      if (t.visitDate) bits.push(t.visitDate);
      if (sh) bits.push(sh.name);
      if (t.hotelNote) bits.push(t.hotelNote);
      var stTag = t.status === TRIP_STATUS.PENDING_SETTLEMENT ? '<span class="tp-tag tp-tag-pending">待結帳</span>' : '';
      var cur = t.id === _currentId ? ' tp-current' : '';
      return '<div class="tp-row' + cur + '" onclick="TripPicker._pick(\'' + escJs(t.id) + '\')">'
        + '<span class="tp-name">' + esc(bits.join(' · ')) + '</span>' + stTag + '</div>';
    }).join('');
  }

  function _filter(q) {
    var list = document.getElementById('tp-list');
    if (list) list.innerHTML = _buildRows(q);
  }

  function _pick(tripId) {
    var cb = _cb;
    _cb = null;
    Modal.close();
    if (cb) cb(tripId);
  }

  return { open: open, _filter: _filter, _pick: _pick };
})();


// === src/pages/overview.js ===
/**
 * pages/overview.js — 总览页
 * 8张KPI卡片 + 活跃团 + 待结帐警示 + 建团Modal
 * 依赖: core/escape.js, calc/filters.js, calc/stats.js, core/constants.js, core/datetime.js, core/events.js, core/router.js, data/agents.js, data/bookings.js, data/memberTxs.js, data/members.js, data/settings.js, data/shareholders.js, data/trips.js, ui/modal.js, ui/toast.js, ui/icons.js
 */
var OverviewPage = (function() {
  var ICONS = {
    active: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
    warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    archive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',
    member: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    agent: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    shareholder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    booking: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  };

  function render() {
    var trips = Trips.getAll();
    var activeTrips = trips.filter(function(t) { return t.status === TRIP_STATUS.ACTIVE; });
    var pendingTrips = trips.filter(function(t) { return t.status === TRIP_STATUS.PENDING_SETTLEMENT; });
    var sealedTrips = trips.filter(function(t) { return t.status === TRIP_STATUS.SEALED; });
    var members = Members.getAll();
    var agents = Agents.getAll();
    var shareholders = Shareholders.getAll();
    var allMtxs = MemberTxs.getAll();
    var currentMonth = TWDate.monthStr();
    /* KPI 總洗碼：本月所有「活」帳務（含封存團的）—— 總覽視角看公司本月整體洗碼
       （v1.6.1 的 filterActiveBookings 只適用於 bookings；mtxs 也有 tripId 會誤觸發過濾 → 整月全被濾為 0） */
    var mtxs = allMtxs.filter(function(t) {
      return !t._deleted && t.date && t.date.substring(0, 7) === currentMonth;
    });
    var bookings = Bookings.getAll();
    var settings = Settings.load();

    var totalWash = mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
    var totalSettlement = mtxs.reduce(function(s, t) { return s + (t.settlementAmount || 0); }, 0);
    var activeBookings = bookings.filter(function(b) {
      return b.status === BOOKING_STATUS.CONFIRMED || b.status === BOOKING_STATUS.CHECKED_IN;
    }).length;

    var html = '';
    // v1.8.0 快捷操作依作業流程排序：帳務(開工) → 訂房 → 待結帳(收工結帳) → 會員查詢 → 建團
    html += '<div class="ov-quick-actions">';
    html += '<div class="ov-qa-card ov-qa-primary" onclick="OverviewPage._quickAddTx()"><div class="ov-qa-icon">' + ICONS.chart + '</div><span>新增帳務</span></div>';
    html += '<div class="ov-qa-card" onclick="Router.go(\'room\')"><div class="ov-qa-icon">' + ICONS.booking + '</div><span>訂房</span></div>';
    var pendingBadge = pendingTrips.length > 0 ? '<span class="ov-qa-badge">' + pendingTrips.length + '</span>' : '';
    html += '<div class="ov-qa-card" onclick="Router.go(\'pending\')"><div class="ov-qa-icon">' + ICONS.warning + '</div><span>待結帳</span>' + pendingBadge + '</div>';
    html += '<div class="ov-qa-card" onclick="Router.go(\'membersMgmt\')"><div class="ov-qa-icon">' + ICONS.member + '</div><span>會員查詢</span></div>';
    html += '<div class="ov-qa-card" onclick="OverviewPage.showCreateTrip()"><div class="ov-qa-icon">' + ICONS.active + '</div><span>建團</span></div>';
    html += '</div>';

    // KPI 卡片
    html += '<div class="kpi-grid">';
    html += kpiCard('進行中團', activeTrips.length, 'active', ICONS.active);
    html += kpiCard('待結帳團', pendingTrips.length, pendingTrips.length > 0 ? 'warning' : 'normal', ICONS.warning);
    html += kpiCard('已封存團', sealedTrips.length, 'normal', ICONS.archive);
    html += kpiCard('會員數', members.length, 'normal', ICONS.member);
    html += kpiCard('代理數', agents.length, 'normal', ICONS.agent);
    html += kpiCard('股東數', shareholders.length, 'normal', ICONS.shareholder);
    html += kpiCard('總洗碼(萬)', formatNum(totalWash), 'highlight', ICONS.chart);
    html += kpiCard('活躍訂房', activeBookings, 'normal', ICONS.booking);
    html += '</div>';

    // 圖表區（雙欄）
    html += '<div class="ov-chart-row">';

    // 左：各廳洗碼佔比（迷你圓環）
    var hallWash = {};
    var totalMonthWash = 0;
    VIP_HALLS.forEach(function(h) { hallWash[h.id] = 0; });
    mtxs.forEach(function(tx) {
      var hallId = tx.vipHallId || 'unknown';
      if (!tx.vipHallId && tx.tripId) {
        var trip = Trips.getById(tx.tripId);
        if (trip && Array.isArray(trip.hallIds) && trip.hallIds.length > 0) hallId = trip.hallIds[0];
      }
      totalMonthWash += (tx.washCode || 0);
      if (hallWash[hallId] !== undefined) hallWash[hallId] += (tx.washCode || 0);
    });

    html += '<div class="ov-chart-card">';
    html += '<h4 class="ov-chart-title">本月各廳洗碼</h4>';
    if (totalMonthWash > 0) {
      var cx = 70, cy = 70, r = 50, circ = 2 * Math.PI * r;
      var acc = 0;
      var segments = '';
      var legend = '';
      VIP_HALLS.forEach(function(hall) {
        var w = hallWash[hall.id] || 0;
        if (w <= 0) return;
        var len = (w / totalMonthWash) * circ;
        var fillColor = hall.id === 'lyi' ? 'var(--hall-lyi)' : hall.id === 'yub' ? 'var(--hall-yub)' : hall.id === 'jm1' ? 'var(--hall-jm1)' : 'var(--hall-jm8)';
        segments += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + fillColor + '" stroke-width="16" ';
        segments += 'stroke-dasharray="' + len + ' ' + (circ - len) + '" ';
        segments += 'stroke-dashoffset="' + (-acc) + '" ';
        segments += 'transform="rotate(-90 ' + cx + ' ' + cy + ')" />';
        acc += len;
        var pct = ((w / totalMonthWash) * 100).toFixed(1);
        legend += '<div class="ov-legend-item"><span class="ov-legend-dot" style="background:' + fillColor + ';"></span><span>' + esc(hall.name) + ' ' + pct + '%</span></div>';
      });
      html += '<div style="display:flex;align-items:center;gap:16px;">';
      html += '<svg width="140" height="140" viewBox="0 0 140 140" class="flex-shrink-0">' + segments + '</svg>';
      html += '<div class="ov-legend">' + legend + '</div>';
      html += '</div>';
      html += '<div class="ov-chart-footer">總計 ' + formatNum(totalMonthWash) + ' 萬</div>';
    } else {
      html += Icons.empty('本月尚無洗碼記錄');
    }
    html += '</div>';

    // 右：各股東洗碼 KPI
    html += '<div class="ov-chart-card">';
    html += '<h4 class="ov-chart-title">本月各股東洗碼</h4>';
    if (shareholders.length > 0 && totalMonthWash > 0) {
      var shColors = ['var(--hall-lyi)', 'var(--hall-yub)', 'var(--hall-jm1)', 'var(--hall-jm8)', 'var(--accent-light)'];
      var maxShWash = 0;
      var totalMonthlyOnlyWash = 0;
      shareholders.forEach(function(sh) {
        var pd = calcShareholderProfit(sh, mtxs, settings, currentMonth);
        if (pd.personalWash > maxShWash) maxShWash = pd.personalWash;
        totalMonthlyOnlyWash += (pd.monthlyOnlyWash || 0);
      });
      if (totalMonthlyOnlyWash > maxShWash) maxShWash = totalMonthlyOnlyWash;
      html += '<div class="ov-sh-bar-list">';
      shareholders.forEach(function(sh, idx) {
        var pd = calcShareholderProfit(sh, mtxs, settings, currentMonth);
        var barPct = maxShWash > 0 ? (pd.personalWash / maxShWash * 100) : 0;
        var barColor = shColors[idx % shColors.length];
        html += '<div class="ov-sh-bar-row">';
        html += '<span class="ov-sh-bar-name">' + esc(sh.name) + '</span>';
        html += '<div class="ov-sh-bar-track"><div class="ov-sh-bar-fill" style="width:' + barPct + '%;background:' + barColor + ';"></div></div>';
        html += '<span class="ov-sh-bar-val">' + formatNum(pd.personalWash) + ' 萬</span>';
        html += '</div>';
      });
      // 特殊代理(僅月退)條 — 填補 personalWash 與 totalWash 的缺口
      if (totalMonthlyOnlyWash > 0) {
        var moBarPct = maxShWash > 0 ? (totalMonthlyOnlyWash / maxShWash * 100) : 0;
        html += '<div class="ov-sh-bar-row" style="opacity:0.75;border-top:1px dashed var(--border);padding-top:6px;margin-top:4px;">';
        html += '<span class="ov-sh-bar-name text-xs">特殊代理(僅月退)</span>';
        html += '<div class="ov-sh-bar-track"><div class="ov-sh-bar-fill" style="width:' + moBarPct + '%;background:#999;"></div></div>';
        html += '<span class="ov-sh-bar-val text-xs">' + formatNum(totalMonthlyOnlyWash) + ' 萬</span>';
        html += '</div>';
      }
      html += '</div>';
      // 口徑說明
      if (totalMonthlyOnlyWash > 0) {
        var personalTotal = totalMonthWash - totalMonthlyOnlyWash;
        html += '<div style="margin-top:8px;font-size:11px;color:var(--text-muted);line-height:1.6;">';
        html += '※ 特殊代理洗碼 ' + formatNum(totalMonthlyOnlyWash) + ' 萬計入總洗碼但不含個人貢獻<br>';
        html += '總洗碼 ' + formatNum(totalMonthWash) + ' = 個人貢獻 ' + formatNum(personalTotal) + ' + 特殊 ' + formatNum(totalMonthlyOnlyWash);
        html += '</div>';
      }
    } else {
      html += Icons.empty('本月尚無洗碼記錄');
    }
    html += '</div>';

    html += '</div>';

    // 活跃团列表
    html += '<div class="card">';
    html += '<div class="card-header"><h3>進行中的團</h3>';
    html += '<button class="btn btn-primary" onclick="OverviewPage.showCreateTrip()">+ 建團</button></div>';
    if (activeTrips.length === 0) {
      html += Icons.empty('目前無進行中的團', '點擊「建立新團」開始一筆行程');
    } else {
      html += '<div class="table-wrapper"><table class="data-table ov-trips-table"><thead><tr>';
      html += '<th>團ID</th><th>所屬股東</th><th>所屬代理</th><th>廳</th><th>成員</th><th>建立日</th><th>操作</th>';
      html += '</tr></thead><tbody>';
      activeTrips.forEach(function(trip) {
        var sh = Shareholders.getById(trip.shareholderId);
        var ag = trip.agentId ? Agents.getById(trip.agentId) : null;
        var hallName = (trip.hallIds || []).map(function(hid) {
          var h = VIP_HALLS.find(function(v) { return v.id === hid; });
          return h ? h.name : hid;
        }).join(', ');
        html += '<tr>';
        html += '<td><span class="ov-trip-id">' + esc(Trips.displayName(trip)) + '</span></td>';
        html += '<td>' + (sh ? sh.name : (trip.shareholderId || '—')) + '</td>';
        html += '<td>' + (ag ? ag.name : '—') + '</td>';
        html += '<td><span class="ov-hall-badge">' + hallName + '</span></td>';
        html += '<td>' + (trip.memberIds || []).length + '人</td>';
        html += '<td>' + (trip.startDate || '') + '</td>';
        html += '<td><button class="btn-sm" onclick="OverviewPage.showEditTrip(\'' + trip.id + '\')">編輯</button> ';
        html += '<button class="btn-sm btn-danger" onclick="OverviewPage.deleteTrip(\'' + trip.id + '\')">刪除</button> ';
        html += '<button class="btn-sm btn-primary" onclick="Router.go(\'member\');window._selectedTrip=\'' + trip.id + '\'">帳務</button></td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>';
    }
    html += '</div>';

    // 待结帐警示
    if (pendingTrips.length > 0) {
      html += '<div class="card alert-card">';
      html += '<div class="card-header"><h3>待結帳（已傳帳，待交收）</h3></div>';
      html += '<div class="table-wrapper"><table class="data-table"><thead><tr>';
      html += '<th>團ID</th><th>股東</th><th>傳帳日</th><th>操作</th>';
      html += '</tr></thead><tbody>';
      pendingTrips.forEach(function(trip) {
        var sh = Shareholders.getById(trip.shareholderId);
        html += '<tr>';
        html += '<td>' + esc(Trips.displayName(trip)) + '</td>';
        html += '<td>' + (sh ? sh.name : trip.shareholderId) + '</td>';
        html += '<td>' + (trip.lastSettlementDate || '-') + '</td>';
        html += '<td><button class="btn-sm btn-warning" onclick="Router.go(\'pending\')">處理</button></td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>';
      html += '</div>';
    }

    var container = document.getElementById('page-overview');
    if (container) container.innerHTML = html;
  }

  function kpiCard(label, value, type, iconSvg) {
    return '<div class="kpi-card kpi-' + type + '"><div class="kpi-icon">' + iconSvg + '</div><div class="kpi-body"><div class="kpi-value">' + value + '</div><div class="kpi-label">' + label + '</div></div></div>';
  }

  function formatNum(n) {
    if (n === 0) return '0';
    var v = Math.round(n * 1000) / 1000;
    if (Math.abs(v - Math.round(v)) < 1e-6) return Math.round(v).toLocaleString();
    return v.toLocaleString(undefined, { maximumFractionDigits: 3 });
  }

  function showCreateTrip() {
    var shareholders = Shareholders.getAll();
    var agents = Agents.getAll();
    var members = Members.getAll();
    var html = '';
    // v1.9.0 預計前往日 + 預計酒店（作業流程第一步：客戶通知日期與酒店）
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>預計前往日</label><input type="date" id="trip-visit" class="form-input" value="' + TWDate.todayStr() + '"></div>';
    // v1.9.4 預計酒店改結構化選單（體系→酒店，與訂房頁同一資料源），避免自由文字與網頁版/BOT 對不上；仍可手動輸入
    html += '<div class="form-group"><label>體系</label><select id="trip-casino" class="form-input" onchange="OverviewPage.onTripCasinoChange()"><option value="">— 選擇 —</option>' + HotelConfig.getCasinos().map(function(c) { return '<option value="' + esc(c) + '">' + esc(c) + '</option>'; }).join('') + '</select></div>';
    html += '</div>';
    html += '<div class="form-group"><label>預計酒店(選填)</label>';
    html += '<select id="trip-hotel" class="form-input" onchange="OverviewPage.onTripHotelChange()"><option value="">— 其他（手動輸入）—</option></select>';
    html += '<input type="text" id="trip-hotel-manual" class="form-input" style="display:none;margin-top:6px;" placeholder="手動輸入酒店名">';
    html += '</div>';
    html += '<div class="form-group"><label>所屬股東</label>';
    html += '<select id="trip-sh" class="form-input">';
    shareholders.forEach(function(sh) {
      var sv = sh.shares || 0;
      html += '<option value="' + sh.id + '">' + esc(sh.name) + ' (持股:' + (sv % 1 === 0 ? sv : sv.toFixed(1)) + ')</option>';
    });
    html += '</select></div>';
    // 所屬代理 — 下拉選單
    html += '<div class="form-group"><label>所屬代理</label>';
    html += '<select id="trip-agent" class="form-input"><option value="">— 請選擇 —</option>';
    agents.forEach(function(ag) {
      var sh = Shareholders.getById(ag.shareholderId);
      var modeLabel = ag.profitMode === 'monthlyOnly' ? '[月]' : '';
      html += '<option value="' + ag.id + '">' + esc(ag.name) + modeLabel + (sh ? ' (' + esc(sh.name) + ')' : '') + '</option>';
    });
    html += '</select></div>';
    // 貴賓廳 — checkbox 列表
    html += '<div class="form-group"><label>貴賓廳</label>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;padding:4px 0;">';
    VIP_HALLS.forEach(function(h) {
      html += '<label style="display:flex;align-items:center;gap:4px;cursor:pointer;padding:6px 12px;border:1px solid var(--border);border-radius:var(--radius);font-size:14px;"><input type="checkbox" class="trip-hall-cb" value="' + h.id + '"> ' + esc(h.name) + '</label>';
    });
    html += '</div></div>';
    // 成員 — checkbox 列表 + 全選
    html += '<div class="form-group"><label>成員 <button type="button" class="btn-sm" style="margin-left:8px;padding:2px 8px;font-size:12px;" onclick="OverviewPage.toggleAllMembers()">全選/取消</button></label>';
    if (members.length === 0) {
      html += Icons.empty('尚無會員', '請先至「會員管理」頁新增會員');
    } else {
      html += '<div id="trip-members-list" style="max-height:220px;overflow-y:auto;border:1px solid var(--border);border-radius:var(--radius);padding:4px;">';
      members.forEach(function(m) {
        html += '<label style="display:block;padding:5px 8px;cursor:pointer;border-radius:4px;"><input type="checkbox" class="trip-member-cb" value="' + m.id + '"> ' + m.id + ' ' + esc(m.name) + '</label>';
      });
      html += '</div>';
    }
    html += '</div>';
    // v2.1 團備註名稱：同上級多團並行時區分（例：猴哥團東哥、猴哥團仁哥）
    html += '<div class="form-group"><label>團備註名稱（例：猴哥團東哥）</label>';
    html += '<input type="text" id="trip-label" class="form-input" placeholder="哪一團客人，選團/開銷歸屬時一目了然"></div>';
    html += '<div class="form-group"><label>備註</label>';
    html += '<input type="text" id="trip-notes" class="form-input"></div>';
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" id="trip-create-btn" onclick="OverviewPage.createTrip()">建立</button></div>';
    Modal.open('建團', html);
  }

  var _tripCreating = false; // v1.9.0 防重複提交鎖

  // v1.9.4 建團酒店結構化選單連動
  function onTripCasinoChange() {
    var casino = document.getElementById('trip-casino').value;
    var sel = document.getElementById('trip-hotel');
    var manual = document.getElementById('trip-hotel-manual');
    if (sel) sel.innerHTML = '<option value="">— 其他（手動輸入）—</option>' + HotelConfig.getHotels(casino).map(function(h) { return '<option value="' + esc(h) + '">' + esc(h) + '</option>'; }).join('');
    if (manual) manual.style.display = 'none';
  }
  function onTripHotelChange() {
    var manual = document.getElementById('trip-hotel-manual');
    var sel = document.getElementById('trip-hotel');
    if (manual) manual.style.display = (sel && sel.value) ? 'none' : 'block';
  }

  function createTrip() {
    if (_tripCreating) return; // v1.9.0 防連點
    var shId = document.getElementById('trip-sh').value;
    var agentId = document.getElementById('trip-agent').value;
    var hallIds = Array.from(document.querySelectorAll('.trip-hall-cb:checked')).map(function(cb) { return cb.value; });
    var memberIds = Array.from(document.querySelectorAll('.trip-member-cb:checked')).map(function(cb) { return cb.value; });
    var notes = document.getElementById('trip-notes').value;
    var labelEl = document.getElementById('trip-label'); // v2.1 團備註名稱
    var visitEl = document.getElementById('trip-visit');
    // v1.9.4 酒店取值：結構化選單優先，選「其他」時用手動輸入
    var hotelSel = document.getElementById('trip-hotel');
    var hotelManual = document.getElementById('trip-hotel-manual');
    var hotelVal = (hotelSel && hotelSel.value) || (hotelManual ? (hotelManual.value || '').trim() : '');

    var btn = document.getElementById('trip-create-btn');
    if (btn) { btn.disabled = true; btn.textContent = '建立中...'; }
    _tripCreating = true;
    try {
      var trip = Trips.create({
        shareholderId: shId,
        agentId: agentId,
        visitDate: visitEl ? visitEl.value : '',
        hotelNote: hotelVal,
        label: labelEl ? (labelEl.value || '').trim() : '', // v2.1 團備註名稱
        hallIds: hallIds,
        memberIds: memberIds,
        notes: notes,
      });
      if (!trip) { Toast.error('建立失敗，請檢查欄位'); return; }
      Modal.close();
      Toast.success('團 ' + trip.id + ' 已建立');
      render();
    } finally {
      _tripCreating = false;
      if (btn) { btn.disabled = false; btn.textContent = '建立'; }
    }
  }

  function toggleAllMembers() {
    var cbs = document.querySelectorAll('.trip-member-cb');
    if (cbs.length === 0) return;
    var allChecked = true;
    cbs.forEach(function(cb) { if (!cb.checked) allChecked = false; });
    cbs.forEach(function(cb) { cb.checked = !allChecked; });
  }

  function showEditTrip(tripId) {
    var trip = Trips.getById(tripId);
    if (!trip) { Toast.error('團不存在'); return; }
    var shareholders = Shareholders.getAll();
    var agents = Agents.getAll();
    var members = Members.getAll();
    var tripMemberIds = trip.memberIds || [];
    if (!Array.isArray(tripMemberIds)) tripMemberIds = Object.values(tripMemberIds);
    var html = '';
    html += '<div class="form-group"><label>團ID</label><input type="text" class="form-input" value="' + trip.id + '" disabled></div>';
    // v2.1 團備註名稱（可補填）
    html += '<div class="form-group"><label>團備註名稱（例：猴哥團東哥）</label>';
    html += '<input type="text" id="trip-label-edit" class="form-input" value="' + escAttr(trip.label || '') + '"></div>';
    // v1.9.0 預計前往日 + 預計酒店
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>預計前往日</label><input type="date" id="trip-visit-edit" class="form-input" value="' + (trip.visitDate || TWDate.todayStr()) + '"></div>';
    html += '<div class="form-group"><label>預計酒店(選填)</label><input type="text" id="trip-hotel-edit" class="form-input" value="' + escAttr(trip.hotelNote || '') + '"></div>';
    html += '</div>';
    html += '<div class="form-group"><label>所屬股東</label>';
    html += '<select id="trip-sh-edit" class="form-input">';
    shareholders.forEach(function(sh) {
      var sv = sh.shares || 0;
      html += '<option value="' + sh.id + '"' + (trip.shareholderId === sh.id ? ' selected' : '') + '>' + esc(sh.name) + ' (持股:' + (sv % 1 === 0 ? sv : sv.toFixed(1)) + ')</option>';
    });
    html += '</select></div>';
    // 所屬代理 — 下拉選單
    html += '<div class="form-group"><label>所屬代理</label>';
    html += '<select id="trip-agent-edit" class="form-input"><option value="">— 請選擇 —</option>';
    agents.forEach(function(ag) {
      var sh = Shareholders.getById(ag.shareholderId);
      var modeLabel = ag.profitMode === 'monthlyOnly' ? '[月]' : '';
      var sel = trip.agentId === ag.id ? ' selected' : '';
      html += '<option value="' + ag.id + '"' + sel + '>' + esc(ag.name) + modeLabel + (sh ? ' (' + esc(sh.name) + ')' : '') + '</option>';
    });
    html += '</select></div>';
    // 貴賓廳 — checkbox 列表
    html += '<div class="form-group"><label>貴賓廳</label>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;padding:4px 0;">';
    VIP_HALLS.forEach(function(h) {
      var sel = (trip.hallIds || []).indexOf(h.id) >= 0 ? ' checked' : '';
      html += '<label style="display:flex;align-items:center;gap:4px;cursor:pointer;padding:6px 12px;border:1px solid var(--border);border-radius:var(--radius);font-size:14px;"><input type="checkbox" class="trip-hall-cb-edit" value="' + h.id + '"' + sel + '> ' + esc(h.name) + '</label>';
    });
    html += '</div></div>';
    // 成員 — checkbox 列表 + 全選
    html += '<div class="form-group"><label>成員 <button type="button" class="btn-sm" style="margin-left:8px;padding:2px 8px;font-size:12px;" onclick="OverviewPage.toggleAllMembersEdit()">全選/取消</button></label>';
    if (members.length === 0) {
      html += '<div style="color:var(--text-muted);padding:12px;">尚無會員</div>';
    } else {
      html += '<div id="trip-members-list-edit" style="max-height:220px;overflow-y:auto;border:1px solid var(--border);border-radius:var(--radius);padding:4px;">';
      members.forEach(function(m) {
        var sel = tripMemberIds.indexOf(m.id) >= 0 ? ' checked' : '';
        html += '<label style="display:block;padding:5px 8px;cursor:pointer;border-radius:4px;"><input type="checkbox" class="trip-member-cb-edit" value="' + m.id + '"' + sel + '> ' + m.id + ' ' + esc(m.name) + '</label>';
      });
      html += '</div>';
    }
    html += '</div>';
    html += '<div class="form-group"><label>備註</label>';
    html += '<input type="text" id="trip-notes-edit" class="form-input" value="' + (trip.notes || '') + '"></div>';
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" onclick="OverviewPage.saveEditTrip(\'' + tripId + '\')">儲存變更</button></div>';
    Modal.open('編輯團 ' + tripId, html);
  }

  function saveEditTrip(tripId) {
    var shId = document.getElementById('trip-sh-edit').value;
    var agentId = document.getElementById('trip-agent-edit').value;
    var hallIds = Array.from(document.querySelectorAll('.trip-hall-cb-edit:checked')).map(function(cb) { return cb.value; });
    var memberIds = Array.from(document.querySelectorAll('.trip-member-cb-edit:checked')).map(function(cb) { return cb.value; });
    var notes = document.getElementById('trip-notes-edit').value;
    var labelEl = document.getElementById('trip-label-edit'); // v2.1 團備註名稱
    var visitEl = document.getElementById('trip-visit-edit');
    var hotelEl = document.getElementById('trip-hotel-edit');
    Trips.update(tripId, {
      shareholderId: shId,
      agentId: agentId,
      visitDate: visitEl ? visitEl.value : '',
      hotelNote: hotelEl ? hotelEl.value : '',
      label: labelEl ? (labelEl.value || '').trim() : '', // v2.1 團備註名稱
      hallIds: hallIds,
      memberIds: memberIds,
      notes: notes,
    });
    Modal.close();
    Toast.success('團 ' + tripId + ' 已更新');
    render();
  }

  function toggleAllMembersEdit() {
    var cbs = document.querySelectorAll('.trip-member-cb-edit');
    if (cbs.length === 0) return;
    var allChecked = true;
    cbs.forEach(function(cb) { if (!cb.checked) allChecked = false; });
    cbs.forEach(function(cb) { cb.checked = !allChecked; });
  }

  function deleteTrip(tripId) {
    var trip = Trips.getById(tripId);
    var name = trip ? trip.id : tripId;
    Modal.confirm('確定要刪除團 ' + name + '？\n此操作不可逆，相關的會員帳務和訂房將保留。', function() {
      Trips.remove(tripId);
      Toast.success('團 ' + tripId + ' 已刪除');
      render();
    });
  }

  // v1.7.0 快速新增帳務：跳到帳務頁並選最近活躍團
  function _quickAddTx() {
    var trips = Trips.getAll();
    var active = trips.filter(function(t) { return t.status === TRIP_STATUS.ACTIVE; });
    if (active.length === 0) {
      Toast.warning('目前沒有進行中的團，請先建團');
      Router.go('overview');
      return;
    }
    var latest = active[active.length - 1];
    Router.go('member');
    window._selectedTrip = latest.id;
    MemberPage.selectTrip(latest.id);
  }

  // 帳務/團數據同步後自動刷新
  EventBus.on(EVENTS.MTX_LOADED, function() {
    if (Router.getCurrent() === 'overview') render();
  });
  EventBus.on(EVENTS.TRIPS_LOADED, function() {
    if (Router.getCurrent() === 'overview') render();
  });

  return { render: render, showCreateTrip: showCreateTrip, createTrip: createTrip, toggleAllMembers: toggleAllMembers, showEditTrip: showEditTrip, saveEditTrip: saveEditTrip, deleteTrip: deleteTrip, toggleAllMembersEdit: toggleAllMembersEdit, _quickAddTx: _quickAddTx, onTripCasinoChange: onTripCasinoChange, onTripHotelChange: onTripHotelChange };

})();


// === src/pages/pending.js ===
/**
 * pages/pending.js — 待結帳頁
 * 結算追蹤 + 封存確認(不可逆)
 * 折疊卡片設計：一團一卡，點擊展開會員明細，點擊客名查看完整帳務
 * 依赖: core/constants.js, data/bookings.js, data/memberTxs.js, data/members.js, data/shareholders.js, data/supplements.js, data/trips.js, ui/modal.js, ui/toast.js, ui/icons.js
 */
var PendingPage = (function() {
  var _expandedTrips = {}; // 記錄哪些團已展開

  // ===== 工具函數（本地定義，不依賴其他 Page 模組） =====
  function fmtCardNum(n) {
    var v = Math.round(n * 1000) / 1000;
    if (Math.abs(v - Math.round(v)) < 1e-6) return Math.round(v).toLocaleString();
    return v.toFixed(3).replace(/\.?0+$/, '');
  }
  function fmtNT(n) {
    return fmtCardNum((n || 0) * 10000);
  }
  function calcTotalNT(tx) {
    return (tx.subtotal || 0) * 10000 - (tx.expensesNT || 0);
  }
  function maskName(name) {
    if (!name) return '';
    if (name.length <= 2) return name[0] + '*';
    return name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  }
  function getHallName(tx, trip) {
    var hallId = tx.vipHallId || (trip && trip.hallIds && trip.hallIds[0]) || '';
    var hall = VIP_HALLS.find(function(h) { return h.id === hallId; });
    return hall ? hall.name : hallId;
  }

  function render() {
    var trips = Trips.getAll().filter(function(t) { return t.status === TRIP_STATUS.PENDING_SETTLEMENT; });
    var html = '<div class="card">';
    html += '<div class="card-header"><h3>待結帳團列表</h3></div>';
    html += '<p class="section-desc">會計在帳務頁「傳帳給上級」後，團會出現在這裡。帳務有誤可「撤回」退回帳務頁重新編輯；與上級確認交收完成後，即可封存歸檔（封存＝雙方確認，不可再改）。</p>';

    if (trips.length === 0) {
      html += Icons.empty('無待結帳的團', '帳務頁完成「傳帳給上級」後，團會出現在這裡');
    } else {
      trips.forEach(function(trip) {
        html += buildTripCard(trip);
      });
    }
    html += '</div>';

    var container = document.getElementById('page-pending');
    if (container) container.innerHTML = html;
  }

  function buildTripCard(trip) {
    var sh = Shareholders.getById(trip.shareholderId);
    var mtxs = MemberTxs.getByTrip(trip.id);
    var supplements = Supplements.getByTrip(trip.id);

    // 訂房查詢：有 tripId 只歸自己的團；無 tripId（Bot 建房）按代理＋入住日落於團期間歸屬
    var allBookings = Bookings.getAll();
    var tripAgentIds = {};
    mtxs.forEach(function(tx) {
      var aid = tx.agentId || (trip.agentId || '');
      if (aid) tripAgentIds[aid] = true;
    });
    if (trip.agentId) tripAgentIds[trip.agentId] = true;
    var bookings = allBookings.filter(function(b) {
      if (b.tripId) return b.tripId === trip.id;
      var bAgentId = b.agentId;
      if (!bAgentId || !tripAgentIds[bAgentId]) return false;
      var ci = b.checkIn || '';
      if (!ci) return false;
      if (trip.startDate && ci < trip.startDate) return false;
      if (trip.endDate && ci > trip.endDate) return false;
      return true;
    });

    var totalWash = mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
    var totalSettle = mtxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
    var roomNights = bookings.reduce(function(s, b) { return s + (b.nights || 1); }, 0);
    var supPending = supplements.filter(function(s) { return s.status === 'pending'; })
      .reduce(function(s, sup) { return s + (sup.settlementAmount || 0); }, 0);
    var memberCount = Object.keys(mtxs.reduce(function(acc, tx) { acc[tx.memberId] = true; return acc; }, {})).length;
    // v1.9.9 代理吸收＝代理自掏腰包負擔，公司應收總額＝會員交收＋代理吸收
    var totalAbsorbed = mtxs.reduce(function(s, t) { return s + calcAbsorbedNT(t.expenses || []); }, 0);
    var grandReceivable = totalSettle + totalAbsorbed;

    var isExpanded = _expandedTrips[trip.id];

    var html = '<div class="pd-card st-collapsible' + (isExpanded ? '' : ' st-collapsed') + '" data-trip="' + trip.id + '">';

    // 卡片頭部（可點擊折疊）
    html += '<div class="pd-card-header st-collapsible-header" onclick="PendingPage.toggleCard(\'' + trip.id + '\')">';
    html += '<div class="pd-card-title">';
    html += '<span class="pd-trip-id">' + esc(Trips.displayName(trip)) + '</span>';
    html += '<span class="pd-trip-sh">' + (sh ? sh.name : '') + '</span>';
    html += '<span class="pd-trip-date">最後結帳: ' + (trip.lastSettlementDate || '-') + '</span>';
    html += '</div>';
    html += '<div class="pd-card-stats">';
    html += '<span>會員 ' + mtxs.length + ' 筆</span>';
    html += '<span>洗碼 ' + fmtCardNum(totalWash) + ' 萬</span>';
    html += '<span class="' + (totalSettle < 0 ? 'num-negative' : 'num-positive') + '">會員交收 NT$ ' + fmtCardNum(Math.round(totalSettle)) + '</span>';
    if (totalAbsorbed > 0) {
      html += '<span class="text-warning fw-semibold">代理吸收 NT$ ' + fmtCardNum(totalAbsorbed) + '</span>';
      html += '<span class="fw-semibold ' + (grandReceivable < 0 ? 'num-negative' : 'num-positive') + '">應收 NT$ ' + fmtCardNum(Math.round(grandReceivable)) + '</span>';
    }
    html += '<span>訂房 ' + roomNights + ' 晚</span>';
    if (supPending > 0) {
      html += '<span class="text-warning fw-semibold">補帳 NT$ ' + fmtCardNum(Math.round(supPending)) + '</span>';
    }
    html += '</div>';
    html += '<span class="st-toggle-icon">▼</span>';
    html += '</div>';

    // 折疊內容
    html += '<div class="pd-card-body st-collapsible-body">';

    // 會員匯總表（客名/廳別/交收，同代理面板風格）
    if (mtxs.length > 0) {
      // 按會員分組
      var memberGroups = {};
      mtxs.forEach(function(tx) {
        var mid = tx.memberId;
        if (!memberGroups[mid]) memberGroups[mid] = { txs: [], totalSettle: 0, hallName: '' };
        var settleNT = calcTotalNT(tx);
        memberGroups[mid].txs.push(tx);
        memberGroups[mid].totalSettle += settleNT;
        if (!memberGroups[mid].hallName) {
          memberGroups[mid].hallName = getHallName(tx, trip);
        }
      });

      html += '<table class="mb-ap-table pd-member-table"><thead><tr>';
      html += '<th>客名</th><th>廳別</th><th class="num">交收</th>';
      html += '</tr></thead><tbody>';
      var sumSettle = 0;
      Object.keys(memberGroups).forEach(function(mid) {
        var g = memberGroups[mid];
        var m = Members.getById(mid);
        sumSettle += g.totalSettle;
        html += '<tr>';
        html += '<td><a href="javascript:void(0)" onclick="PendingPage.showMemberDetail(\'' + trip.id + '\',\'' + mid + '\')" class="pd-member-link">' + maskName(m ? m.name : mid) + '</a></td>';
        html += '<td>' + g.hallName + '</td>';
        html += '<td class="num ' + (g.totalSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.round(g.totalSettle)) + '</td>';
        html += '</tr>';
      });
      html += '<tr class="total-row">';
      html += '<td>合計</td>';
      html += '<td></td>';
      html += '<td class="num ' + (sumSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(sumSettle / 100) * 100) + '</td>';
      html += '</tr>';
      html += '</tbody></table>';
    } else {
      html += Icons.empty('此團無帳務記錄', '此團尚無任何帳務交易');
    }

    // KPI 統計 + 操作按鈕
    html += '<div class="pd-card-footer">';
    html += '<div class="mb-ap-stats pd-stats">';
    html += '<div class="mb-ap-stat"><label>總洗碼</label><span>' + fmtCardNum(totalWash) + ' 萬</span></div>';
    html += '<div class="mb-ap-stat"><label>會員交收</label><span class="' + (totalSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(totalSettle / 100) * 100) + '</span></div>';
    if (totalAbsorbed > 0) {
      html += '<div class="mb-ap-stat"><label>代理吸收（向代理另收）</label><span class="text-warning fw-semibold">' + fmtCardNum(totalAbsorbed) + '</span></div>';
      html += '<div class="mb-ap-stat"><label>應收總額</label><span class="fw-semibold ' + (grandReceivable < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(grandReceivable / 100) * 100) + '</span></div>';
    }
    html += '<div class="mb-ap-stat"><label>訂房數</label><span>' + roomNights + ' 晚</span></div>';
    html += '<div class="mb-ap-stat"><label>會員數</label><span>' + memberCount + '</span></div>';
    html += '</div>';
    // v1.9.3 流程對齊：傳帳已在帳務頁完成（進入待結帳時已分享），此處可重傳；
    // 交收完成後才封存
    // v1.9.11 撤回：帳務有誤可退回帳務頁重新編輯（封存＝雙方確認，才是不可逆）
    html += '<button class="btn btn-secondary" onclick="PendingPage.revertTrip(\'' + trip.id + '\')">撤回 · 重新編輯</button>';
    html += '<button class="btn btn-primary" onclick="PendingPage.shareTrip(\'' + trip.id + '\')">重傳明細</button>';
    html += '<button class="btn btn-danger" onclick="PendingPage.sealTrip(\'' + trip.id + '\')">交收完成 · 封存</button>';
    html += '</div>';

    html += '</div>'; // pd-card-body
    html += '</div>'; // pd-card
    return html;
  }

  function toggleCard(tripId) {
    _expandedTrips[tripId] = !_expandedTrips[tripId];
    var card = document.querySelector('.pd-card[data-trip="' + tripId + '"]');
    if (card) {
      if (_expandedTrips[tripId]) {
        card.classList.remove('st-collapsed');
      } else {
        card.classList.add('st-collapsed');
      }
    }
  }

  function showMemberDetail(tripId, memberId) {
    var trip = Trips.getById(tripId);
    var mtxs = MemberTxs.getByTrip(tripId).filter(function(t) { return t.memberId === memberId; });
    var m = Members.getById(memberId);

    var html = '';
    html += '<div class="pd-detail-modal">';

    // 會員標頭
    html += '<div class="pd-detail-header">';
    html += '<span class="pd-detail-name">' + (m ? m.id + ' ' + m.name : memberId) + '</span>';
    html += '<span class="pd-detail-sh">團: ' + tripId + '</span>';
    html += '</div>';

    // 逐筆帳務（同會員帳卡風格）
    mtxs.forEach(function(tx, idx) {
      var hallName = getHallName(tx, trip);
      var totalNT = calcTotalNT(tx);
      var isNeg = (tx.upDown || 0) < 0;

      html += '<div class="mb-card pd-detail-card">';

      // 標頭：廳名 + 日期 + 筆數
      html += '<div class="mb-card-header">';
      html += '<div class="mb-card-hall">' + hallName + (tx.date ? ' \u00b7 ' + tx.date : '') + '</div>';
      html += '<div class="mb-card-member">#' + (idx + 1) + '</div>';
      html += '</div>';

      // 第一區：出碼、回碼、上下分
      html += '<div class="mb-card-section">';
      html += '<div class="mb-card-row"><span class="mb-card-label">出碼' + (tx.chipType === 'credit' ? ' <span class="chip-credit-tag">信用</span>' : '') + (tx.pureTour ? ' <span class="pure-tour-tag">純旅遊</span>' : '') + '</span><span class="mb-card-val">' + fmtCardNum(tx.outCode || 0) + ' HK萬</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">回碼</span><span class="mb-card-val">' + fmtCardNum(tx.backCode || 0) + ' HK萬</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">上下分</span><span class="mb-card-val ' + (isNeg ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(tx.upDown || 0) + ' HK萬</span></div>';
      html += '</div>';

      // 第二區：洗碼、倍率、返水、退傭、NT輸贏、小計
      html += '<div class="mb-card-section">';
      html += '<div class="mb-card-row"><span class="mb-card-label">洗碼數</span><span class="mb-card-val">' + fmtCardNum(tx.washCode || 0) + ' HK萬</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">倍率</span><span class="mb-card-val">' + (tx.rate1 || 0) + ' / ' + (tx.rate2 || 0) + '</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">返水</span><span class="mb-card-val">' + (tx.rebate1 || 0) + ' / ' + (tx.rebate2 || 0) + '</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">退傭1</span><span class="mb-card-val">' + Math.trunc((tx.commission1 || 0) * 10000).toLocaleString() + '</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">退傭2</span><span class="mb-card-val">' + Math.trunc((tx.commission2 || 0) * 10000).toLocaleString() + '</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">NT輸贏</span><span class="mb-card-val ' + ((tx.ntResult || 0) < 0 ? 'num-negative' : 'num-positive') + '">' + fmtNT(tx.ntResult) + '</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">小計</span><span class="mb-card-val ' + ((tx.subtotal || 0) < 0 ? 'num-negative' : 'num-positive') + '">' + Math.round((tx.subtotal || 0) * 10000).toLocaleString() + '</span></div>';
      html += '</div>';

      // 開銷明細
      var expenses = tx.expenses || [];
      html += '<div class="mb-card-section">';
      html += '<div class="mb-card-section-title">開銷明細</div>';
      if (expenses.length === 0) {
        html += '<div class="mb-card-row"><span class="mb-card-label">\u2014</span></div>';
      } else {
        html += '<div class="mb-card-expense-table">';
        html += '<div class="mb-card-expense-head"><span>項目</span><span>金額</span><span>匯率</span><span>NT</span></div>';
        expenses.forEach(function(e) {
          var isAbsorb = !!e.absorbed;
          var qtyLabel = (e.quantity && e.quantity > 1) ? ' \u00d7' + e.quantity : '';
          html += '<div class="mb-card-expense-row' + (isAbsorb ? ' exp-row-host' : '') + '">';
          html += '<span>' + (e.name || '') + qtyLabel + (isAbsorb ? ' <span class="tx-absorb-tag">代理吸收</span>' : '') + '</span>';
          if (isAbsorb) {
            html += '<span class="exp-host-cell" colspan="3"><span class="exp-host-badge">招待</span> 不從交收扣除</span>';
          } else {
            var nt = (e.amountHK || 0) * (e.exchangeRate || 0);
            html += '<span>' + fmtCardNum(e.amountHK || 0) + '</span>';
            html += '<span>' + (e.exchangeRate || 0) + '</span>';
            html += '<span>' + fmtCardNum(Math.round(nt)) + '</span>';
          }
          html += '</div>';
        });
        // v1.9.5 代理吸收合計（單獨列示，不計入總交收）
        var absTotal = calcAbsorbedNT(expenses);
        if (absTotal > 0) {
          html += '<div class="mb-card-expense-row exp-absorb-total-row"><span>代理吸收合計</span><span></span><span></span><span>' + fmtCardNum(absTotal) + '</span></div>';
        }
        html += '</div>';
      }
      html += '</div>';

      // 總交收
      html += '<div class="mb-card-footer">';
      html += '<div class="mb-card-total">';
      html += '<span class="mb-card-label">總交收金額NT</span>';
      html += '<span class="mb-card-total-val ' + (totalNT >= 0 ? 'num-positive' : 'num-negative') + '">' + fmtCardNum(Math.round(totalNT)) + '</span>';
      html += '</div>';
      html += '</div>';

      html += '</div>'; // pd-detail-card
    });

    // 合計
    var grandTotal = mtxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
    var absGrand = mtxs.reduce(function(s, t) { return s + calcAbsorbedNT(t.expenses || []); }, 0);
    html += '<div class="pd-detail-total">';
    html += '<span>會員交收合計</span>';
    html += '<span class="' + (grandTotal < 0 ? 'num-negative' : 'num-positive') + '">NT$ ' + fmtCardNum(Math.round(grandTotal)) + '</span>';
    html += '</div>';
    if (absGrand > 0) {
      html += '<div class="pd-detail-total">';
      html += '<span>代理吸收（向代理另收）</span>';
      html += '<span class="text-warning fw-semibold">NT$ ' + fmtCardNum(absGrand) + '</span>';
      html += '</div>';
      html += '<div class="pd-detail-total">';
      html += '<span>應收總額（會員＋代理吸收）</span>';
      html += '<span class="fw-semibold ' + (grandTotal + absGrand < 0 ? 'num-negative' : 'num-positive') + '">NT$ ' + fmtCardNum(Math.round(grandTotal + absGrand)) + '</span>';
      html += '</div>';
    }

    html += '</div>';

    Modal.open('會員明細', html);
  }

  // v1.9.3 正確流程：會員出完帳務明細 → 會計「傳帳給上級」= 送入待結帳（同時分享明細）
  //            → 與上級交收完成 → 封存
  // buildShareText：產生團結帳明細文字（供傳帳/重傳共用）
  function buildShareText(tripId) {
    var trip = Trips.getById(tripId);
    if (!trip) { Toast.error('找不到團'); return; }
    var sh = Shareholders.getById(trip.shareholderId);
    var ag = trip.agentId ? Agents.getById(trip.agentId) : null;
    var mtxs = MemberTxs.getByTrip(tripId);
    var supplements = Supplements.getByTrip(tripId);

    // 訂房口徑與 buildTripCard 一致：有 tripId 只歸自己的團；無 tripId 按代理＋入住日歸屬
    var allBookings = Bookings.getAll();
    var tripAgentIds = {};
    mtxs.forEach(function(tx) {
      var aid = tx.agentId || (trip.agentId || '');
      if (aid) tripAgentIds[aid] = true;
    });
    if (trip.agentId) tripAgentIds[trip.agentId] = true;
    var bookings = allBookings.filter(function(b) {
      if (b.tripId) return b.tripId === trip.id;
      var bAgentId = b.agentId;
      if (!bAgentId || !tripAgentIds[bAgentId]) return false;
      var ci = b.checkIn || '';
      if (!ci) return false;
      if (trip.startDate && ci < trip.startDate) return false;
      if (trip.endDate && ci > trip.endDate) return false;
      return true;
    });

    var totalWash = mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
    var totalSettle = mtxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
    var roomNights = bookings.reduce(function(s, b) { return s + (b.nights || 1); }, 0);
    var supPending = supplements.filter(function(s) { return s.status === 'pending'; })
      .reduce(function(s, sup) { return s + (sup.settlementAmount || 0); }, 0);

    // 按會員分組（同卡片匯總表）；v1.9.4 同時彙總各會員開銷明細，讓上級看得到錢花在哪
    // v1.9.5 代理吸收的開銷單獨列示（由代理負擔，不從會員交收扣除）
    var memberGroups = {};
    mtxs.forEach(function(tx) {
      var mid = tx.memberId;
      if (!memberGroups[mid]) memberGroups[mid] = { totalSettle: 0, hallName: '', expNT: 0, expList: [], absNT: 0, absList: [] };
      memberGroups[mid].totalSettle += calcTotalNT(tx);
      if (!memberGroups[mid].hallName) memberGroups[mid].hallName = getHallName(tx, trip);
      (tx.expenses || []).forEach(function(e) {
        var q = (e.quantity && e.quantity > 1) ? '×' + e.quantity : '';
        var item = (e.name || '項目') + q + ' ' + fmtCardNum(e.amountHK || 0) + 'HK';
        if (e.absorbed) {
          memberGroups[mid].absNT += (e.amountHK || 0) * (e.exchangeRate || 0);
          memberGroups[mid].absList.push(item);
        } else {
          memberGroups[mid].expNT += (e.amountHK || 0) * (e.exchangeRate || 0);
          memberGroups[mid].expList.push(item);
        }
      });
    });

    var lines = [];
    lines.push('【團 ' + trip.id + ' 結帳明細】');
    var head = [];
    head.push('股東: ' + (sh ? sh.name : '-'));
    if (ag) head.push('代理: ' + ag.name);
    if (trip.visitDate) head.push('前往日: ' + trip.visitDate);
    if (trip.hotelNote) head.push('酒店: ' + trip.hotelNote);
    lines.push(head.join(' | '));
    lines.push('會員 ' + mtxs.length + ' 筆 · 洗碼 ' + fmtCardNum(totalWash) + ' 萬 · 訂房 ' + roomNights + ' 晚');
    if (supPending > 0) lines.push('待補帳 NT$ ' + fmtCardNum(Math.round(supPending)));
    if (mtxs.length > 0) {
      lines.push('──── 會員明細 ────');
      Object.keys(memberGroups).forEach(function(mid) {
        var g = memberGroups[mid];
        var m = Members.getById(mid);
        lines.push((m ? maskName(m.name) : mid) + '（' + g.hallName + '）交收 NT$ ' + fmtCardNum(Math.round(g.totalSettle)));
        if (g.expList.length > 0) lines.push('　開銷: ' + g.expList.join('、') + '（NT$ ' + fmtCardNum(Math.round(g.expNT)) + '，已從交收扣除）');
        if (g.absList.length > 0) lines.push('　代理吸收: ' + g.absList.join('、') + '（NT$ ' + fmtCardNum(Math.round(g.absNT)) + '，向代理另收，不從會員交收扣除）');
      });
      var absGrand = mtxs.reduce(function(s, t) { return s + calcAbsorbedNT(t.expenses || []); }, 0);
      if (absGrand > 0) {
        lines.push('──── 會員交收 NT$ ' + fmtCardNum(Math.trunc(totalSettle / 100) * 100) + ' ────');
        lines.push('代理吸收（向代理另收） NT$ ' + fmtCardNum(absGrand));
        lines.push('應收總額 NT$ ' + fmtCardNum(Math.trunc((totalSettle + absGrand) / 100) * 100) + ' ＝ 會員交收 + 代理吸收');
      } else {
        lines.push('──── 合計 NT$ ' + fmtCardNum(Math.trunc(totalSettle / 100) * 100) + ' ────');
      }
    } else {
      lines.push('此團尚無帳務記錄');
    }
    if (trip.notes) lines.push('備註: ' + trip.notes);

    return lines.join('\n');
  }

  // 重傳明細（待結帳頁）：再次調出分享面板發給上級代理/股東
  // iOS：navigator.share 調出系統分享面板（可直接選微信）；不支援則複製到剪貼板
  function shareTrip(tripId) {
    var text = buildShareText(tripId);
    if (!text) return;
    _shareText('團 ' + tripId + ' 結帳明細', text);
  }

  function _shareText(title, text) {
    if (navigator.share) {
      navigator.share({ title: title, text: text }).catch(function() { /* 用戶取消，不打擾 */ });
      return;
    }
    // fallback：複製到剪貼板（老版 iOS）
    function fallbackCopy() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      Toast[ok ? 'success' : 'error'](ok ? '已複製明細，可貼到微信發送' : '複製失敗，請截圖');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        Toast.success('已複製明細，可貼到微信發送');
      }, fallbackCopy);
    } else {
      fallbackCopy();
    }
  }

  function sealTrip(tripId) {
    // v2.1 守門：預支開銷未全部歸屬前不可封存
    if (typeof PendExps !== 'undefined' && PendExps.hasUnclaimed(tripId)) {
      Toast.error('本團尚有 ' + PendExps.unclaimedCount(tripId) + ' 筆預支開銷未歸屬，請先撤回帳務頁處理（帶入帳務或轉為純旅遊帳務）');
      return;
    }
    Modal.confirm('確認團 ' + tripId + ' 已與上級完成交收？\n封存後不可修改，將移入歷史查詢。', function() {
      Trips.sealTrip(tripId);
      Toast.success('團 ' + tripId + ' 已交收完成並封存');
      render();
    });
  }

  // v1.9.11 撤回待結帳：退回帳務頁恢復可編輯（發現計算錯誤時用；封存前都可反悔）
  function revertTrip(tripId) {
    Modal.confirm('將團 ' + tripId + ' 撤回帳務頁？\n撤回後可重新編輯帳務，修正後需再次「傳帳給上級」。', function() {
      var ok = Trips.revertPending(tripId);
      Toast[ok ? 'success' : 'error'](ok ? '團 ' + tripId + ' 已撤回帳務頁，可重新編輯' : '撤回失敗（此團不在待結帳狀態）');
      if (ok) render();
    });
  }

  // v2.3.8 團數據同步後自動刷新（WEB/APP 任一端封存 → 待結帳列表即時移除該團）
  EventBus.on(EVENTS.TRIPS_LOADED, function() { render(); });

  return { render: render, sealTrip: sealTrip, revertTrip: revertTrip, toggleCard: toggleCard, showMemberDetail: showMemberDetail, shareTrip: shareTrip, buildShareText: buildShareText, shareText: _shareText };
})();


// === src/pages/member.js ===
/**
 * pages/member.js — 帳務頁（原會員帳務）
 * 左側：會員明細卡片（不變）+ 右側：代理匯總面板
 * 12欄試算表 + 开销子表格 + 退佣两段 + 代理篩選
 * 依赖: core/escape.js, calc/member.js, calc/stats.js, core/constants.js, core/datetime.js, core/events.js, core/router.js, data/agents.js, data/bookings.js, data/memberTxs.js, data/members.js, data/settings.js, data/shareholders.js, data/trips.js, ui/modal.js, ui/toast.js, ui/icons.js
 */
var MemberPage = (function() {
  var _selectedTrip = null;
  var _selectedAgent = null;
  var _activeSubTab = 'transactions'; // 'transactions' | 'agents'
  var _memberSearch = '';             // v1.6.0 會員搜尋
  var _memberSearchTimer = null;

  function render() {
    var container = document.getElementById('page-member');
    if (!container) return;

    // 子頁籤列
    var html = '';
    html += '<div class="sub-tab-bar">';
    html += '<button class="sub-tab' + (_activeSubTab === 'transactions' ? ' active' : '') + '" onclick="MemberPage.switchTab(\'transactions\')">帳務明細</button>';
    html += '<button class="sub-tab' + (_activeSubTab === 'agents' ? ' active' : '') + '" onclick="MemberPage.switchTab(\'agents\')">代理管理</button>';
    html += '</div>';

    if (_activeSubTab === 'agents') {
      // 代理管理分頁 — 渲染 AgentPage 到子容器（用 window 間接引用避免 pages 互相依賴）
      html += '<div id="member-sub-content"></div>';
      container.innerHTML = html;
      var ap = window['Agent' + 'Page'];
      if (ap) ap.render('member-sub-content');
    } else {
      // 帳務明細分頁 — 原有邏輯
      html += buildTransactionsHtml();
      container.innerHTML = html;
    }
  }

  function switchTab(tab) {
    _activeSubTab = tab;
    render();
  }

  function buildTransactionsHtml() {
    var html = '';

    // 团选择器 + 代理筛选
    html += '<div class="card">';
    html += '<div class="card-header"><h3>帳務</h3>';
    html += '<button class="btn btn-primary ml-sm" onclick="MemberPage.showAddAgent()">+ 新增代理</button>';
    html += '<div style="display:flex;gap:8px;align-items:center;margin-left:auto;">';
    // v1.9.0 團選擇器改搜尋式彈窗（原生 select 手機上是滾輪，難用）
    var _curTrip = _selectedTrip ? Trips.getById(_selectedTrip) : null;
    var _tripBtnLabel = _curTrip
      ? (Trips.displayName(_curTrip) + (_curTrip.status === TRIP_STATUS.PENDING_SETTLEMENT ? ' (待結帳)' : ''))
      : '選擇團...';
    html += '<button type="button" class="trip-select-btn" onclick="TripPicker.open(\'' + escJs(_selectedTrip || '') + '\', MemberPage.selectTrip)">' + esc(_tripBtnLabel) + ' ▾</button>';
    // 代理筛选
    if (_selectedTrip) {
      var tripObj = Trips.getById(_selectedTrip);
      var tripAgents = Agents.getAll();
      html += '<select id="member-agent-filter" class="form-input auto-width" onchange="MemberPage.selectAgent(this.value)">';
      html += '<option value="">全部代理</option>';
      tripAgents.forEach(function(ag) {
        html += '<option value="' + ag.id + '"' + (_selectedAgent === ag.id ? ' selected' : '') + '>' + esc(ag.name) + '</option>';
      });
      html += '</select>';
    }
    html += '</div>';
    html += '</div>';

    if (_selectedTrip) {
      var trip = Trips.getById(_selectedTrip);
      // v1.9.3 流程對齊：會計「傳帳給上級」= 送入待結帳（同時調出分享面板發送明細）
      // v1.9.11 待結帳中也可從帳務頁直接撤回（計算錯誤時退回重新編輯）
      if (trip && trip.status === TRIP_STATUS.ACTIVE) {
        html += '<div class="mark-pending-bar">';
        html += '<button class="btn btn-warning mark-pending-btn" onclick="MemberPage.markPending(\'' + _selectedTrip + '\')">傳帳給上級 · 送入待結帳</button>';
        html += '</div>';
      } else if (trip && trip.status === TRIP_STATUS.PENDING_SETTLEMENT) {
        html += '<div class="mark-pending-bar">';
        html += '<span style="font-size:13px;color:var(--warning);align-self:center;">此團已送入待結帳，帳務已鎖定。</span>';
        // v2.4.10 員工僅送件權限：撤回待結帳限會計/管理員（具 pending write）
        if (typeof Perm === 'undefined' || !Perm.hasSession() || Perm.can('pending', 'write')) {
          html += '<button class="btn btn-secondary" onclick="MemberPage.revertPending(\'' + _selectedTrip + '\')">撤回待結帳 · 重新編輯</button>';
        }
        html += '</div>';
      }
      // v2.1 預支開銷區（先買先記，收工後帶入帳務）
      html += _pendSectionHtml(trip);
      var mtxs = MemberTxs.getByTrip(_selectedTrip);
      // 依代理篩選
      if (_selectedAgent) {
        mtxs = mtxs.filter(function(t) {
          var effectiveAgentId = t.agentId || (trip ? trip.agentId : '');
          return effectiveAgentId === _selectedAgent;
        });
      }
      // v1.6.0 依會員搜尋（名字或編號，部分字即中）
      if (_memberSearch) {
        var mq = _memberSearch.toLowerCase();
        mtxs = mtxs.filter(function(t) {
          var m = Members.getById(t.memberId);
          var hay = ((m ? (m.name || '') + ' ' + m.id : '') + ' ' + t.memberId).toLowerCase();
          return hay.indexOf(mq) >= 0;
        });
      }

      // v1.6.0 會員搜尋框 + 最近使用會員（手機快速過濾）
      html += '<div class="rm-search-bar" style="margin-bottom:10px;">';
      html += '<input type="text" id="mtx-search-input" class="form-input" placeholder="搜尋會員（名字或編號）..." value="' + escHtml(_memberSearch) + '" oninput="MemberPage.onMemberSearch(this.value)">';
      html += '</div>';
      if (!_memberSearch) {
        var recents = RecentMembers.getList().map(function(rid) { return Members.getById(rid); }).filter(Boolean).slice(0, 6);
        if (recents.length > 0) {
          html += '<div class="recent-chips"><span class="recent-chips-label">最近：</span>';
          recents.forEach(function(m) {
            html += '<button class="chip-btn" onclick="MemberPage.searchMember(\'' + m.id + '\')">' + esc(m.name) + '</button>';
          });
          html += '</div>';
        }
      }
      if (_memberSearch) {
        html += '<div style="margin:-2px 0 10px;font-size:12px;color:var(--text-muted);">符合「' + escHtml(_memberSearch) + '」的帳務 ' + mtxs.length + ' 筆 <button class="chip-btn" style="padding:2px 10px;font-size:12px;" onclick="MemberPage.searchMember(\'\')">清除</button></div>';
      }

      html += '<div class="mb-dual-layout">';
      // 會員卡片區（左欄）
      html += '<div class="mb-cards-col">';

      if (mtxs.length === 0) {
        html += Icons.empty('此團無帳務記錄', '此團尚無任何帳務交易');
      } else {
        html += '<div class="mb-card-grid">';
        var selectedTripObj = Trips.getById(_selectedTrip);
        mtxs.forEach(function(tx) {
          var m = Members.getById(tx.memberId);
          // 優先顯示交易自身指定的貴賓廳，若無指定才回退到團的預設廳
          var hallId = tx.vipHallId || (selectedTripObj && selectedTripObj.hallIds && selectedTripObj.hallIds[0]) || '';
          var hall = VIP_HALLS.find(function(h) { return h.id === hallId; });
          var isNeg = (tx.upDown || 0) < 0;

          html += '<div class="mb-card">';

          // 卡片標頭：廳名 + 日期 + 會員編號 + 客稱
          html += '<div class="mb-card-header">';
          html += '<div class="mb-card-hall">' + (hall ? hall.name : (tx.vipHallId || '')) + (tx.date ? ' · ' + tx.date : '') + (tx.source === 'bot' ? ' <span class="tx-source-tag" title="BOT 自動結帳">BOT</span>' : '') + '</div>';
          html += '<div class="mb-card-member">' + (m ? m.id : tx.memberId) + ' ' + (m ? m.name : '') + '</div>';
          html += '</div>';

          // 第一區：日期、出碼、回碼、上下分
          html += '<div class="mb-card-section">';
          html += '<div class="mb-card-row"><span class="mb-card-label">日期</span><span class="mb-card-val">' + (tx.date || '') + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">出碼' + (tx.chipType === 'credit' ? ' <span class="chip-credit-tag">信用</span>' : '') + (tx.pureTour ? ' <span class="pure-tour-tag">純旅遊</span>' : '') + '</span><span class="mb-card-val">' + fmtCardNum(tx.outCode || 0) + ' HK萬</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">回碼</span><span class="mb-card-val">' + fmtCardNum(tx.backCode || 0) + ' HK萬</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">上下分</span><span class="mb-card-val ' + (isNeg ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(tx.upDown || 0) + ' HK萬</span></div>';
          html += '</div>';

          // 第二區：洗碼、倍率、返水、退傭、NT輸贏、小計
          html += '<div class="mb-card-section">';
          html += '<div class="mb-card-row"><span class="mb-card-label">洗碼數</span><span class="mb-card-val">' + fmtCardNum(tx.washCode || 0) + ' HK萬</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">倍率</span><span class="mb-card-val">' + (tx.rate1 || 0) + ' / ' + (tx.rate2 || 0) + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">返水</span><span class="mb-card-val">' + (tx.rebate1 || 0) + ' / ' + (tx.rebate2 || 0) + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">退傭1</span><span class="mb-card-val">' + Math.trunc((tx.commission1 || 0) * 10000).toLocaleString() + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">退傭2</span><span class="mb-card-val">' + Math.trunc((tx.commission2 || 0) * 10000).toLocaleString() + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">NT輸贏</span><span class="mb-card-val ' + ((tx.ntResult || 0) < 0 ? 'num-negative' : 'num-positive') + '">' + fmtNT(tx.ntResult) + '</span></div>';
          html += '<div class="mb-card-row"><span class="mb-card-label">小計</span><span class="mb-card-val ' + ((tx.subtotal || 0) < 0 ? 'num-negative' : 'num-positive') + '">' + Math.round((tx.subtotal || 0) * 10000).toLocaleString() + '</span></div>';
          html += '</div>';

          // 第三區：開銷明細
          var expenses = tx.expenses || [];
          html += '<div class="mb-card-section">';
          html += '<div class="mb-card-section-title">開銷明細</div>';
          if (expenses.length === 0) {
            html += '<div class="mb-card-row"><span class="mb-card-label">—</span></div>';
          } else {
            html += '<div class="mb-card-expense-table">';
            html += '<div class="mb-card-expense-head"><span>項目</span><span>金額</span><span>匯率</span><span>NT</span></div>';
            expenses.forEach(function(e) {
              var isAbsorb = !!e.absorbed;
              var qtyLabel = (e.quantity && e.quantity > 1) ? ' ×' + e.quantity : '';
              html += '<div class="mb-card-expense-row' + (isAbsorb ? ' exp-row-host' : '') + '">';
              html += '<span>' + (e.name || '') + qtyLabel + (isAbsorb ? ' <span class="tx-absorb-tag">代理吸收</span>' : '') + '</span>';
              if (isAbsorb) {
                html += '<span class="exp-host-cell" colspan="3"><span class="exp-host-badge">招待</span> 不從交收扣除</span>';
              } else {
                var nt = (e.amountHK || 0) * (e.exchangeRate || 0);
                html += '<span>' + fmtCardNum(e.amountHK || 0) + '</span>';
                html += '<span>' + (e.exchangeRate || 0) + '</span>';
                html += '<span>' + fmtCardNum(Math.round(nt)) + '</span>';
              }
              html += '</div>';
            });
            // v1.9.5 代理吸收合計（單獨列示，不計入總交收）
            var absTotal = calcAbsorbedNT(expenses);
            if (absTotal > 0) {
              html += '<div class="mb-card-expense-row exp-absorb-total-row"><span>代理吸收合計</span><span></span><span></span><span>' + fmtCardNum(absTotal) + '</span></div>';
            }
            html += '</div>';
          }
          html += '</div>';

          // 底部：總交收 + 操作
          var totalNT = calcTotalNT(tx);
          var isWin = totalNT >= 0;
          html += '<div class="mb-card-footer">';
          html += '<div class="mb-card-total">';
          html += '<span class="mb-card-label">總交收金額NT</span>';
          html += '<span class="mb-card-total-val ' + (isWin ? 'num-positive' : 'num-negative') + '">' + fmtCardNum(Math.round(totalNT)) + '</span>';
          html += '</div>';
          html += '<div class="mb-card-actions">';
          html += '<button class="btn-sm" onclick="MemberPage.editTx(\'' + tx.id + '\')">編輯</button>';
          html += '<button class="btn-sm" onclick="MemberPage.copyTx(\'' + tx.id + '\')">複製</button>';
          html += '<button class="btn-sm btn-danger" onclick="MemberPage.delTx(\'' + tx.id + '\')">刪</button>';
          html += '</div>';
          html += '</div>';

          html += '</div>';
        });
        html += '</div>';
      }

      // 合計行
      if (mtxs.length > 0) {
        var totalSettle = mtxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
        var totalWash = mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
        html += '<div class="summary-row">';
        html += '<span>總洗碼: ' + fmtCardNum(totalWash) + ' 萬</span>';
        html += '<span>合計交收: NT$ ' + fmtCardNum(Math.round(totalSettle)) + '</span>';
        html += '</div>';
      }

      html += '<button class="btn btn-primary" style="margin-top:12px;" onclick="MemberPage.showAddTx()">+ 新增帳務</button>';

      html += '</div>'; // mb-cards-col

      // 右側：代理匯總面板
      html += buildAgentPanel(mtxs);

      html += '</div>'; // mb-dual-layout
    } else {
      html += Icons.empty('請選擇一個團', '從上方團選擇器選擇要查看的團');
    }
    html += '</div>';

    return html;
  }

  function selectTrip(tripId) {
    _selectedTrip = tripId || null;
    _selectedAgent = null;
    _memberSearch = '';
    render();
  }

  function selectAgent(agentId) {
    _selectedAgent = agentId || null;
    render();
  }

  // v1.6.0 會員搜尋（300ms debounce，重繪後自動回焦）
  function onMemberSearch(v) {
    if (_memberSearchTimer) clearTimeout(_memberSearchTimer);
    _memberSearchTimer = setTimeout(function() {
      _memberSearch = (v || '').trim();
      render();
      var inp = document.getElementById('mtx-search-input');
      if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
    }, 300);
  }

  function searchMember(keyword) {
    _memberSearch = (keyword || '').trim();
    render();
    var inp = document.getElementById('mtx-search-input');
    if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
  }

  // 代理新增後自動刷新（若當前在帳務頁）
  EventBus.on(EVENTS.AGENT_CREATED, function() {
    if (Router.getCurrent() === 'member') render();
  });

  // 會員資料更新後自動刷新（名稱變更等）
  EventBus.on(EVENTS.MEMBER_UPDATED, function() {
    if (Router.getCurrent() === 'member') render();
  });

  // Firebase 同步會員資料後自動刷新
  EventBus.on(EVENTS.MEMBERS_LOADED, function() {
    if (Router.getCurrent() === 'member') render();
  });

  // 帳務數據同步後自動刷新
  EventBus.on(EVENTS.MTX_LOADED, function() {
    if (Router.getCurrent() === 'member') render();
  });

  // v2.3.8 團數據同步後自動刷新（WEB 封存/建團/異動 → 帳務頁即時反映）
  EventBus.on(EVENTS.TRIPS_LOADED, function() {
    if (Router.getCurrent() === 'member') render();
  });

  // 新增代理（橋接，避免直接引用其他 Page 模組）
  function showAddAgent() {
    var ap = window['Agent' + 'Page'];
    if (ap) ap.showAdd();
  }

  // 刪除代理
  function delAgent(id) {
    var agent = Agents.getById(id);
    if (!agent) return;
    Modal.confirm('確定刪除代理「' + agent.name + '」？此操作不可復原。', function() {
      Agents.remove(id);
      _selectedAgent = null;
      Toast.success('代理已刪除');
      render();
    });
  }

  // 客名遮罩（保護客戶資料）
  function maskName(name) {
    if (!name) return '';
    if (name.length <= 2) return name[0] + '*';
    return name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  }

  // 建構右側代理匯總面板
  function buildAgentPanel(tripMtxs) {
    var allMtxs = MemberTxs.getAll();
    var allBookings = Bookings.getAll();
    var trip = Trips.getById(_selectedTrip);
    var tripMemberIds = trip ? (trip.memberIds || []) : [];
    if (!Array.isArray(tripMemberIds)) tripMemberIds = Object.values(tripMemberIds);
    var html = '';

    html += '<div class="mb-agent-panel">';

    if (_selectedAgent) {
      // 選了特定代理
      var agent = Agents.getById(_selectedAgent);
      if (!agent) { html += Icons.empty('代理不存在', '該代理可能已被刪除') + '</div>'; return html; }
      var sh = Shareholders.getById(agent.shareholderId);
      /* v2.3.5 達標計算含封存團（與 WEB / agent.js 同口徑）：代理累積所有團總洗碼後結算達標 */
      var quota = calcAgentQuota(_selectedAgent, allMtxs, allBookings, { tripId: _selectedTrip });
      var pct = quota.totalThreshold > 0 ? Math.min(100, (quota.totalWashRaw / quota.totalThreshold) * 100) : 0;
      var agentTxs = tripMtxs; // 已經篩選過了

      // 代理名稱 + 上線
      html += '<div class="mb-ap-header">';
      html += '<span class="mb-ap-name">' + esc(agent.name) + '</span>';
      html += '<span class="mb-ap-sh">上線: ' + (sh ? sh.name : '-') + '</span>';
      html += '<button class="btn-sm btn-primary" class="ml-auto" onclick="PdfExport.exportAgent(\'' + _selectedAgent + '\', \'' + _selectedTrip + '\')">匯出PDF</button>';
      html += '<button class="btn-sm btn-danger" onclick="MemberPage.delAgent(\'' + _selectedAgent + '\')">刪除</button>';
      html += '</div>';

      // 配額條
      html += '<div class="mb-ap-quota">';
      html += '<div class="mb-ap-quota-info">';
      html += '<span>總洗碼: ' + quota.totalWashCode.toFixed(2) + ' 萬</span>';
      html += '<span>總門檻: ' + (quota.totalThreshold / 10000).toFixed(0) + ' 萬</span>';
      html += '<span class="' + (quota.isMet ? 'text-success' : 'text-warning') + '">' + (!quota.hasBookings ? '— 無訂房' : (quota.isMet ? ICONS.check + ' 達標' : ICONS.alert + ' 未達標')) + '</span>';
      html += '</div>';
      html += '<div style="display:flex;align-items:center;"><div class="mb-ap-quota-bar" class="flex-1"><div class="mb-ap-quota-fill" style="width:' + pct + '%;' + (quota.isMet ? '' : (pct < 50 ? 'background:var(--accent);' : 'background:var(--warning);')) + '"></div></div><span class="mb-ap-quota-pct">' + pct.toFixed(1) + '%</span></div>';
      html += '</div>';

      // 會員匯總表（同一會員多筆合併顯示總交收）
      if (agentTxs.length > 0) {
        var memberGroups = {};
        agentTxs.forEach(function(tx) {
          var mid = tx.memberId;
          if (!memberGroups[mid]) memberGroups[mid] = { txs: [], totalSettle: 0 };
          var settleNT = calcTotalNT(tx);
          memberGroups[mid].txs.push(tx);
          memberGroups[mid].totalSettle += settleNT;
        });

        html += '<div class="table-wrapper"><table class="mb-ap-table"><thead><tr>';
        html += '<th>客名</th><th class="num">交收</th>';
        html += '</tr></thead><tbody>';
        var sumSettle = 0;
        Object.keys(memberGroups).forEach(function(mid) {
          var g = memberGroups[mid];
          var m = Members.getById(mid);
          sumSettle += g.totalSettle;
          html += '<tr>';
          html += '<td>' + maskName(m ? m.name : mid) + '</td>';
          html += '<td class="num ' + (g.totalSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.round(g.totalSettle)) + '</td>';
          html += '</tr>';
        });
        html += '<tr class="total-row">';
        html += '<td>合計</td>';
        html += '<td class="num ' + (sumSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(sumSettle / 100) * 100) + '</td>';
        html += '</tr>';
        html += '</tbody></table></div>';
      } else {
        html += Icons.empty('此團無帳務記錄', '此團尚無任何帳務交易');
      }

      // 統計卡片
      var totalWash = agentTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
      var totalWinLoss = agentTxs.reduce(function(s, t) { return s + (t.ntResult || 0) * 10000; }, 0);
      var totalSettle = agentTxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
      // v1.9.9 代理吸收＝代理自掏腰包，應收總額＝會員交收＋代理吸收
      var totalAbsorbed = agentTxs.reduce(function(s, t) { return s + calcAbsorbedNT(t.expenses || []); }, 0);
      var grandReceivable = totalSettle + totalAbsorbed;
      var roomCount = quota.roomCount;
      var memberCount = tripMemberIds.filter(function(mid) {
        var mem = Members.getById(mid);
        return mem && mem.agentId === _selectedAgent;
      }).length;

      html += '<div class="mb-ap-stats">';
      html += '<div class="mb-ap-stat"><label>總洗碼</label><span>' + fmtCardNum(totalWash) + ' 萬</span></div>';
      html += '<div class="mb-ap-stat"><label>會員交收</label><span class="' + (totalSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(totalSettle / 100) * 100) + '</span></div>';
      if (totalAbsorbed > 0) {
        html += '<div class="mb-ap-stat"><label>代理吸收（向代理另收）</label><span class="text-warning fw-semibold">' + fmtCardNum(totalAbsorbed) + '</span></div>';
        html += '<div class="mb-ap-stat"><label>應收總額</label><span class="fw-semibold ' + (grandReceivable < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(grandReceivable / 100) * 100) + '</span></div>';
      }
      html += '<div class="mb-ap-stat"><label>訂房數</label><span>' + roomCount + ' 晚</span></div>';
      html += '<div class="mb-ap-stat"><label>會員數</label><span>' + memberCount + '</span></div>';
      html += '</div>';

    } else {
      // 全部代理 — 顯示各代理匯總 + 整體統計
      var agents = Agents.getAll();
      html += '<div class="mb-ap-header"><span class="mb-ap-name">全部代理</span><button class="btn-sm btn-primary" class="ml-auto" onclick="PdfExport.exportShareholder(\'' + _selectedTrip + '\')">匯出全部PDF</button></div>';

      if (agents.length === 0) {
        html += Icons.empty('尚無代理', '點擊「新增代理」建立第一筆資料');
      } else {
        // 整體統計卡片
        var totalWash = 0, totalSettle = 0, totalRooms = 0, totalAbsorbed = 0;
        agents.forEach(function(ag) {
          var agTxs = tripMtxs.filter(function(t) {
            var effectiveAgentId = t.agentId || (trip ? trip.agentId : '');
            return effectiveAgentId === ag.id;
          });
          var agWash = agTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
          var agSettle = agTxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
          var agAbs = agTxs.reduce(function(s, t) { return s + calcAbsorbedNT(t.expenses || []); }, 0);
          var agRooms = allBookings.filter(function(b) { return b.agentId === ag.id; }).reduce(function(s, b) { return s + (b.nights || 1); }, 0);
          totalWash += agWash;
          totalSettle += agSettle;
          totalAbsorbed += agAbs;
          totalRooms += agRooms;
        });
        var totalMembers = tripMemberIds.length;
        var grandReceivable = totalSettle + totalAbsorbed;

        html += '<div class="mb-ap-stats">';
        html += '<div class="mb-ap-stat"><label>總洗碼</label><span>' + fmtCardNum(totalWash) + ' 萬</span></div>';
        html += '<div class="mb-ap-stat"><label>會員交收</label><span class="' + (totalSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(totalSettle / 100) * 100) + '</span></div>';
        if (totalAbsorbed > 0) {
          html += '<div class="mb-ap-stat"><label>代理吸收（向代理另收）</label><span class="text-warning fw-semibold">' + fmtCardNum(totalAbsorbed) + '</span></div>';
          html += '<div class="mb-ap-stat"><label>應收總額</label><span class="fw-semibold ' + (grandReceivable < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(grandReceivable / 100) * 100) + '</span></div>';
        }
        html += '<div class="mb-ap-stat"><label>訂房數</label><span>' + totalRooms + ' 晚</span></div>';
        html += '<div class="mb-ap-stat"><label>會員數</label><span>' + totalMembers + '</span></div>';
        html += '</div>';

        // 各代理匯總表
        html += '<div class="table-wrapper"><table class="mb-ap-table"><thead><tr>';
        html += '<th>代理</th><th class="num">洗碼</th><th class="num">交收</th><th class="cell-center">操作</th>';
        html += '</tr></thead><tbody>';
        var grandWash = 0, grandSettle = 0;
        agents.forEach(function(ag) {
          var agTxs = tripMtxs.filter(function(t) {
            var effectiveAgentId = t.agentId || (trip ? trip.agentId : '');
            return effectiveAgentId === ag.id;
          });
          var agWash = agTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
          var agSettle = agTxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
          grandWash += agWash;
          grandSettle += agSettle;
          html += '<tr>';
          html += '<td><a href="javascript:void(0)" onclick="MemberPage.selectAgent(\'' + ag.id + '\')" style="color:var(--accent);text-decoration:underline;">' + esc(ag.name) + '</a></td>';
          html += '<td class="num">' + fmtCardNum(agWash) + '</td>';
          html += '<td class="num ' + (agSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.round(agSettle)) + '</td>';
          html += '<td class="cell-center"><button class="btn-sm btn-danger" onclick="MemberPage.delAgent(\'' + ag.id + '\')">刪除</button></td>';
          html += '</tr>';
        });
        html += '<tr class="total-row">';
        html += '<td>合計</td>';
        html += '<td class="num">' + fmtCardNum(grandWash) + '</td>';
        html += '<td class="num ' + (grandSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(grandSettle / 100) * 100) + '</td>';
        html += '</tr>';
        html += '</tbody></table></div>';
      }
    }

    html += '</div>'; // mb-agent-panel
    return html;
  }

  // v1.9.6 帳務會員選擇器只列本團會員（建團時未勾任何會員才退回全部）
  function _tripMemberPool() {
    var trip = Trips.getById(_selectedTrip);
    var ids = trip ? (trip.memberIds || []) : [];
    if (!Array.isArray(ids)) ids = Object.values(ids);
    var pool = ids.map(function(id) { return Members.getById(id); }).filter(Boolean);
    if (pool.length === 0) pool = Members.getAll();
    return pool;
  }

  // v1.9.7 團員 id 在本機 members 找不到的（跨裝置建立、本機快取漏同步）
  function _tripMissingMembers() {
    var trip = Trips.getById(_selectedTrip);
    var ids = trip ? (trip.memberIds || []) : [];
    if (!Array.isArray(ids)) ids = Object.values(ids);
    return ids.filter(function(id) { return !Members.getById(id); });
  }

  // v1.9.7 本機缺團員資料 → 自動從 Firebase 補拉會員並刷新下拉（表單開啟中呼叫）
  function _healTripMembers() {
    var missing = _tripMissingMembers();
    if (missing.length === 0) return;
    if (typeof FirebaseSync === 'undefined' || !FirebaseSync.isReady()) return;
    FirebaseSync.once(FB_PATH.MEMBERS).then(function(remoteVal) {
      if (!remoteVal) return;
      var merged = mergeArray(Store.readArray(STORAGE_KEYS.MEMBERS), Object.values(remoteVal));
      Store.writeArray(STORAGE_KEYS.MEMBERS, merged);
      Members.load();
      // 表單還開著且下拉顯示中 → 用補齊後的資料重渲染
      var dd = document.getElementById('tx-member-dropdown');
      if (dd && dd.style.display !== 'none') {
        var si = document.getElementById('tx-member-search');
        _renderMemberDropdown(si ? si.value : '');
      }
    }).catch(function() {});
  }

  function showAddTx(prefillTx) {
    var trip = Trips.getById(_selectedTrip);
    if (!trip) return;
    if (_txLocked(null)) return; // v1.9.11 待結帳/封存中不可新增帳務
    var members = _tripMemberPool();
    var poolIds = members.map(function(m) { return m.id; });
    // v1.7.0 預設帶入最近使用會員（而非 members[0]）
    // v1.9.6 限定本團會員：最近使用只挑有納入本團的
    var recentIds = RecentMembers.getList();
    var defaultM = null;
    if (prefillTx && prefillTx.memberId) {
      defaultM = Members.getById(prefillTx.memberId);
    }
    if (!defaultM && recentIds.length > 0) {
      for (var ri = 0; ri < recentIds.length; ri++) {
        if (poolIds.indexOf(recentIds[ri]) >= 0) { defaultM = Members.getById(recentIds[ri]); break; }
      }
    }
    if (!defaultM && members.length > 0) {
      defaultM = members[0];
    }
    if (!defaultM) defaultM = { rate1: 0, rebate1: 0, rate2: 0, rebate2: 0 };
    var defaultMemberId = defaultM.id || '';

    var html = '';
    _washManual = false; // v1.9.4 開新表單重置洗碼手動鎖
    // v1.7.0 會員搜尋選擇器（取代原生 select）
    html += '<div class="form-group"><label>會員</label>';
    html += '<div class="member-picker" style="position:relative;">';
    html += '<input type="hidden" id="tx-member" value="' + escAttr(defaultMemberId) + '">';
    html += '<input type="text" id="tx-member-search" class="form-input" placeholder="搜尋本團會員（名字或編號）..." value="' + escAttr(defaultM.name || '') + ' (' + escAttr(defaultM.id || '') + ')"';
    html += ' onfocus="MemberPage._onMemberSearchFocus(this)" oninput="MemberPage._onMemberSearchInput(this.value)" autocomplete="off">';
    html += '<div id="tx-member-dropdown" class="member-picker-dropdown" style="display:none;"></div>';
    html += '</div></div>';
    html += '<div class="form-group"><label>貴賓廳</label>';
    var defaultHallId = prefillTx ? (prefillTx.vipHallId || '') : ((trip && trip.hallIds && trip.hallIds[0]) || '');
    html += '<select id="tx-hall" class="form-input">';
    html += '<option value="">未選擇</option>';
    VIP_HALLS.forEach(function(h) {
      var sel = h.id === defaultHallId ? ' selected' : '';
      html += '<option value="' + h.id + '"' + sel + '>' + esc(h.name) + '</option>';
    });
    html += '</select></div>';
    // v1.9.4 帳務日期可指定（預設今天）— 隔天補帳不用存檔後再編輯改日期
    html += '<div class="form-group"><label>日期</label><input type="date" id="tx-date" class="form-input" value="' + (prefillTx && prefillTx.date ? prefillTx.date : TWDate.todayStr()) + '"></div>';
    // v2.0 籌碼類型：現金碼（動用公司現鈔）/ 信用碼（賭場信用額度，不動現鈔，僅淨贏入錢包）
    html += '<div class="form-group"><label>籌碼類型</label>';
    html += '<select id="tx-chiptype" class="form-input" onchange="MemberPage._onChipTypeChange(this.value)">';
    html += '<option value="cash"' + (prefillTx && prefillTx.chipType === 'credit' ? '' : ' selected') + '>現金碼（公司現鈔出入，影響錢包）</option>';
    html += '<option value="credit"' + (prefillTx && prefillTx.chipType === 'credit' ? ' selected' : '') + '>信用碼（賭場額度，不動現鈔）</option>';
    html += '</select></div>';
    html += '<div id="tx-chiptype-hint" style="font-size:12px;color:var(--text-muted);margin:-4px 0 8px;">現金碼：出碼掏現鈔、回碼收現鈔，淨額進錢包</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>出碼(CR)(萬)</label><input type="number" inputmode="decimal" step="0.001" id="tx-out" class="form-input" value="' + (prefillTx ? fmtNum(prefillTx.outCode || 0) : '') + '" oninput="MemberPage.calcUpDown()"></div>';
    html += '<div class="form-group"><label>回碼(寄碼)(萬)</label><input type="number" inputmode="decimal" step="0.001" id="tx-back" class="form-input" value="' + (prefillTx ? fmtNum(prefillTx.backCode || 0) : '') + '" oninput="MemberPage.calcUpDown()"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>客上(萬)</label><input type="number" inputmode="decimal" step="0.001" id="tx-up" class="form-input" value="' + (prefillTx ? fmtNum(prefillTx.customerUp || 0) : '0') + '" oninput="MemberPage.calcWash()"></div>';
    html += '<div class="form-group"><label>客下(萬)</label><input type="number" inputmode="decimal" step="0.001" id="tx-down" class="form-input" value="' + (prefillTx ? fmtNum(prefillTx.customerDown || 0) : '0') + '" oninput="MemberPage.calcWash()"></div>';
    html += '<div class="form-group"><label>洗碼(萬)</label><input type="number" inputmode="decimal" step="0.001" id="tx-wash" class="form-input" value="' + (prefillTx ? fmtNum(prefillTx.washCode || 0) : '') + '" oninput="MemberPage._markWashManual()"></div>';
    html += '</div>';
    html += '<div id="tx-wash-hint" style="font-size:12px;color:var(--text-muted);margin:-4px 0 8px;">自動 = 客上 + 客下（洗碼可手動覆寫）</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>倍率1</label><input type="number" inputmode="decimal" step="0.01" id="tx-rate1" class="form-input" value="' + (defaultM.rate1 || 0) + '"></div>';
    html += '<div class="form-group"><label>返水1</label><input type="number" inputmode="decimal" step="0.001" id="tx-rebate1" class="form-input" value="' + (defaultM.rebate1 || 0) + '"></div>';
    html += '<div class="form-group"><label>倍率2</label><input type="number" inputmode="decimal" step="0.01" id="tx-rate2" class="form-input" value="' + (defaultM.rate2 || 0) + '"></div>';
    html += '<div class="form-group"><label>返水2</label><input type="number" inputmode="decimal" step="0.001" id="tx-rebate2" class="form-input" value="' + (defaultM.rebate2 || 0) + '"></div>';
    html += '</div>';
    html += '<div id="tx-expenses"></div>';
    html += '<button class="btn-sm" onclick="MemberPage.addExpenseRow()">+ 開銷</button>';
    html += '<div id="tx-pendpool"></div>'; // v2.1 待歸屬預支開銷帶入區
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" id="tx-save-btn" onclick="MemberPage.saveTx()">儲存</button></div>';
    Modal.open('新增帳務', html);
    _expContainerId = 'tx-expenses'; // v2.1
    if (prefillTx && prefillTx.expenses) {
      _expenseRows = prefillTx.expenses.map(function(e) { return Object.assign({}, e); });
      // v1.9.10 載入守門：舊資料殘留 absorbed=true 自動歸零＋提示
      _pruneStaleAbsorbed();
      renderExpenseRows();
    }
    _renderPendPool(); // v2.1
    _healTripMembers(); // v1.9.7 本機缺團員時自動補拉 Firebase 會員資料
  }

  // v1.9.10 載入守門：若預載進來的 expense 帶 absorbed=true，自動歸零並提示
  // 背景：v1.9.5 測試初期資料被誤存吸收狀態，導致帳務總交收口徑錯誤
  function _pruneStaleAbsorbed() {
    var purged = 0;
    var purgedNames = [];
    _expenseRows.forEach(function(e) {
      if (e.absorbed) {
        purged++;
        purgedNames.push(e.name || '(未命名)');
        e.absorbed = false;
      }
    });
    if (purged > 0) {
      setTimeout(function() {
        Toast.warning('已自動清除舊資料殘留的「吸收」標記：' + purgedNames.join('、') + '（共 ' + purged + ' 筆），請依需求重新勾選');
      }, 200);
    }
  }

  // v1.7.0 會員搜尋選擇器
  function _onMemberSearchFocus(el) {
    // v1.8.0 自動全選 — 點下去直接打字就能搜尋，不用先刪預填字
    if (el && el.select) setTimeout(function() { try { el.select(); } catch (e) {} }, 60);
    _renderMemberDropdown('');
  }
  function _onMemberSearchInput(val) {
    _renderMemberDropdown(val);
  }
  function _renderMemberDropdown(query) {
    var dd = document.getElementById('tx-member-dropdown');
    if (!dd) return;
    var members = _tripMemberPool(); // v1.9.6 只列本團會員
    var missing = _tripMissingMembers(); // v1.9.7 缺員警示
    var q = (query || '').trim().toLowerCase();
    var filtered = members.filter(function(m) {
      if (!q) return true;
      return (m.name || '').toLowerCase().indexOf(q) >= 0 || (m.id || '').toLowerCase().indexOf(q) >= 0;
    });
    // 最近使用的排前面
    var recents = RecentMembers.getList();
    filtered.sort(function(a, b) {
      var ai = recents.indexOf(a.id), bi = recents.indexOf(b.id);
      if (ai >= 0 && bi >= 0) return ai - bi;
      if (ai >= 0) return -1;
      if (bi >= 0) return 1;
      return 0;
    });
    // v1.9.7 表頭：本團人數 + 缺員警示（避免「團有2人只顯示1人」卻無聲無息）
    var header = '<div class="member-picker-item member-picker-empty" style="text-align:left;padding:8px 14px;">'
      + '本團會員 ' + members.length + ' 位'
      + (missing.length > 0 ? '（⚠ ' + missing.join('、') + ' 本機資料缺失，正嘗試同步…）' : '')
      + '</div>';
    if (filtered.length === 0) {
      dd.innerHTML = header + '<div class="member-picker-item member-picker-empty">找不到會員（僅列出本團 ' + members.length + ' 位會員，如需新增請先於建團/編輯團勾選）</div>';
    } else {
      dd.innerHTML = header + filtered.slice(0, 20).map(function(m) {
        return '<div class="member-picker-item" onclick="MemberPage._selectMember(\'' + escJs(m.id) + '\')">'
          + '<span class="member-picker-name">' + esc(m.name || '') + '</span>'
          + '<span class="member-picker-id">' + esc(m.id) + '</span>'
          + '<span class="member-picker-rate">倍率 ' + esc(m.rate1 + '/' + m.rate2) + '</span>'
          + '</div>';
      }).join('');
    }
    dd.style.display = 'block';
  }
  function _selectMember(memberId) {
    var m = Members.getById(memberId);
    if (!m) return;
    var hidden = document.getElementById('tx-member');
    var search = document.getElementById('tx-member-search');
    var dd = document.getElementById('tx-member-dropdown');
    if (hidden) hidden.value = memberId;
    if (search) search.value = (m.name || '') + ' (' + (m.id || '') + ')';
    if (dd) dd.style.display = 'none';
    onMemberChange();
  }

  function onMemberChange() {
    var memberId = document.getElementById('tx-member').value;
    var m = Members.getById(memberId);
    if (!m) return;
    if (RecentMembers) RecentMembers.push(memberId); // v1.6.0 記住最近使用會員
    var r1 = document.getElementById('tx-rate1'); if (r1) r1.value = m.rate1 || 0;
    var rb1 = document.getElementById('tx-rebate1'); if (rb1) rb1.value = m.rebate1 || 0;
    var r2 = document.getElementById('tx-rate2'); if (r2) r2.value = m.rate2 || 0;
    var rb2 = document.getElementById('tx-rebate2'); if (rb2) rb2.value = m.rebate2 || 0;
  }

  var _expenseRows = [];

  function fmtNum(n) {
    var v = Math.round(n * 1000) / 1000;
    if (Math.abs(v - Math.round(v)) < 1e-6) return String(Math.round(v));
    return v.toFixed(3).replace(/\.?0+$/, '');
  }
  function fmtCardNum(n) {
    var v = Math.round(n * 1000) / 1000;
    if (Math.abs(v - Math.round(v)) < 1e-6) return Math.round(v).toLocaleString();
    return v.toFixed(3).replace(/\.?0+$/, '');
  }
  // 萬 → 元（×10000）
  function fmtNT(n) {
    return fmtCardNum((n || 0) * 10000);
  }
  // 總交收 = 小計×10000 - 開銷NT
  function calcTotalNT(tx) {
    return (tx.subtotal || 0) * 10000 - (tx.expensesNT || 0);
  }

  // v2.0 籌碼類型切換提示：讓會計當下知道對錢包的影響
  function _onChipTypeChange(val) {
    var hint = document.getElementById('tx-chiptype-hint');
    if (!hint) return;
    hint.textContent = val === 'credit'
      ? '信用碼：出碼不動現鈔，僅淨贏（回碼＞出碼）超贏港幣存入錢包'
      : '現金碼：出碼掏現鈔、回碼收現鈔，淨額進錢包';
  }

  function calcUpDown() {
    var out = parseFloat(document.getElementById('tx-out').value) || 0;
    var back = parseFloat(document.getElementById('tx-back').value) || 0;
    var diff = back - out;
    var upEl = document.getElementById('tx-up');
    var downEl = document.getElementById('tx-down');
    if (diff >= 0) {
      if (upEl) upEl.value = fmtNum(diff);
      if (downEl) downEl.value = '0';
    } else {
      if (upEl) upEl.value = '0';
      if (downEl) downEl.value = fmtNum(-diff);
    }
    calcWash();
  }
  // v1.9.4 洗碼手動鎖：手動改過洗碼後，出/回碼或客上/客下的連動不再覆蓋手動值
  var _washManual = false;
  function _markWashManual() {
    _washManual = true;
    var hint = document.getElementById('tx-wash-hint');
    if (hint) hint.textContent = '已手動輸入（不再自動計算，可清空後由系統重算）';
  }
  function calcWash() {
    var hint = document.getElementById('tx-wash-hint');
    if (_washManual) {
      if (hint) hint.textContent = '已手動輸入（不再自動計算，可清空後由系統重算）';
      return;
    }
    var up = parseFloat(document.getElementById('tx-up').value) || 0;
    var down = parseFloat(document.getElementById('tx-down').value) || 0;
    var washEl = document.getElementById('tx-wash');
    if (washEl) washEl.value = fmtNum(up + down);
    if (hint) hint.textContent = '自動 = 客上 + 客下（洗碼可手動覆寫）';
  }

  // v1.9.4 開銷預設匯率 = 當月設定匯率（當月未設定自動沿用最近已設定月份）
  function _defaultExchangeRate() {
    try {
      var m = (typeof TWDate !== 'undefined' && TWDate.todayStr) ? TWDate.todayStr().slice(0, 7) : '';
      var r = (typeof Settings !== 'undefined' && Settings.getMonthlyRate) ? Settings.getMonthlyRate(m) : null;
      return (r && r.exchangeRate) || 4.2;
    } catch (e) { return 4.2; }
  }
  function addExpenseRow() {
    _expenseRows.push({ name: '', ticketType: 'other', quantity: 1, unitPrice: 0, amountHK: 0, exchangeRate: _defaultExchangeRate(), payout: 0, payoutManual: false });
    renderExpenseRows();
  }
  // v2.1 開銷行渲染容器可切換（帳務表單 tx-expenses / 預支表單 pend-exp-rows）
  var _expContainerId = 'tx-expenses';
  function renderExpenseRows() {
    var container = document.getElementById(_expContainerId);
    if (!container) return;
    var tp = Settings.getTicketPrices();
    var html = '';
    _expenseRows.forEach(function(row, i) {
      html += '<div class="form-row expense-row" data-idx="' + i + '">';
      if (row.ticketType === 'roomfee') {
        /* 房費類型：固定顯示「房費」，不顯示下拉和名稱輸入 */
        html += '<span style="flex:2;min-width:180px;display:flex;align-items:center;font-weight:600;color:var(--text-primary);">房費</span>';
      } else {
        html += '<select class="form-input" style="flex:1;min-width:100px;" onchange="MemberPage._updExpType(' + i + ',this.value)">';
        html += '<option value="other"' + (row.ticketType === 'other' || !row.ticketType ? ' selected' : '') + '>其他</option>';
        // v1.8.0 借款(港幣)：客人跟公司借港幣，結帳時從交收扣除
        html += '<option value="loan"' + (row.ticketType === 'loan' ? ' selected' : '') + '>借款(港幣)</option>';
        (tp.waterDance || []).forEach(function(t, j) {
          var val = 'wd-' + j;
          html += '<option value="' + val + '"' + (row.ticketType === val ? ' selected' : '') + '>水舞間 ' + esc(t.name) + ' (' + t.guestPrice + ')</option>';
        });
        var wp = tp.waterPark || { guestPrice: 450 };
        html += '<option value="wp"' + (row.ticketType === 'wp' ? ' selected' : '') + '>水上樂園手帶 (' + wp.guestPrice + ')</option>';
        html += '</select>';
        if (row.ticketType === 'other' || !row.ticketType) {
          // v2.2.2 品項主檔：catalog 下拉快速選取＋自動帶預設單價
          // v2.2.3 水舞間/水上樂園走上方票種下拉（含利潤計算），此下拉只列品項設定＋自訂
          var preset = Catalog.findByName(row.name);
          var selCat = preset ? preset.id : '__custom__';
          html += '<div style="flex:1;min-width:140px;display:flex;flex-direction:column;gap:3px;">'
            + '<select class="form-input" style="flex:1;min-width:100px;" onchange="MemberPage._updExpCatalog(' + i + ',this.value,this)">'
            + Catalog.pickerOptionsHtml(selCat, row.name, false)
            + '</select>'
            + '<input type="text" placeholder="項目名稱" class="form-input" style="flex:1;min-width:80px;" value="' + escAttr(row.name || '') + '" onchange="MemberPage._updExp(' + i + ',\'name\',this.value)">'
            + '</div>';
        } else {
          html += '<span style="flex:1;min-width:80px;display:flex;align-items:center;font-size:var(--font-size-sm);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + (row.name || '') + '</span>';
        }
      }
      html += '<input type="number" step="1" min="1" placeholder="數量" class="form-input" style="width:60px;flex:0 0 60px;" value="' + (row.quantity || 1) + '" oninput="MemberPage._updExp(' + i + ',\'quantity\',this.value)">';
      if (row.fromPend) html += '<span class="pend-tag" title="由預支單帶入：錢包已於預支登錄時扣款，此行不再重複扣">預支</span>'; // v2.1
      html += '<input type="number" placeholder="金額" class="form-input exp-amt" style="width:80px;flex:0 0 80px;" value="' + (row.amountHK || 0) + '" onchange="MemberPage._updExp(' + i + ',\'amountHK\',this.value)">';
      // v2.0 公司實支（HKD）：錢包扣款依據。預設跟隨金額（門票預設=成本價×數量），可手動覆蓋
      html += '<input type="number" step="1" placeholder="實支" title="公司實支(HK)——錢包扣款金額；門票預設=成本價×數量" class="form-input exp-pay" style="width:70px;flex:0 0 70px;" value="' + _expPayoutFor(row) + '" onchange="MemberPage._updExp(' + i + ',\'payout\',this.value)">';
      html += '<input type="number" step="0.01" placeholder="匯率" class="form-input" style="width:60px;flex:0 0 60px;" value="' + (row.exchangeRate || _defaultExchangeRate()) + '" onchange="MemberPage._updExp(' + i + ',\'exchangeRate\',this.value)">';
      // v1.9.5 代理吸收：此筆開銷由代理自行負擔，不從會員交收扣除（例：代購蛋塔由上級代理招待）
      html += '<label class="exp-absorb" title="由代理自行吸收，不從會員交收扣除"><input type="checkbox"' + (row.absorbed ? ' checked' : '') + ' onchange="MemberPage._updExp(' + i + ',\'absorbed\',this.checked)"><span>吸收</span></label>';
      html += '<button class="btn-sm btn-danger" onclick="MemberPage._delExp(' + i + ')" style="flex:0 0 32px;padding:4px;">×</button>';
      html += '</div>';
      // 非其他時顯示單價提示（房費不顯示）— v2.0 加實支提示
      if (row.ticketType && row.ticketType !== 'other' && row.ticketType !== 'roomfee' && row.unitPrice) {
        html += '<div class="exp-hint-' + i + '" style="font-size:var(--font-size-sm);color:var(--text-secondary);padding-left:4px;margin-bottom:4px;">單價 ' + row.unitPrice + ' HK × ' + (row.quantity || 1) + ' = ' + ((row.unitPrice || 0) * (row.quantity || 1)) + ' HK'
          + (row.ourPrice != null ? '｜實支 ' + (row.ourPrice || 0) + ' × ' + (row.quantity || 1) + ' = ' + ((row.ourPrice || 0) * (row.quantity || 1)) + ' HK' : '')
          + '</div>';
      }
    });
    container.innerHTML = html;
  }
  // v2.0 開銷實支顯示值：手填 > 門票成本價×數量 > 金額（公司一定支出）
  function _expPayoutFor(row) {
    if (row.payout !== undefined && row.payout !== null) return row.payout || 0;
    return _expPayoutDefault(row);
  }
  function _expPayoutDefault(row) {
    if (row.ourPrice !== undefined && row.ourPrice !== null && row.ticketType && row.ticketType !== 'other' && row.ticketType !== 'loan') {
      return Math.round((row.ourPrice || 0) * (row.quantity || 1) * 100) / 100;
    }
    return row.amountHK || 0;
  }
  function _updExpType(i, val) {
    if (!_expenseRows[i]) return;
    _expenseRows[i].ticketType = val;
    var tp = Settings.getTicketPrices();
    var qty = _expenseRows[i].quantity || 1;
    if (val === 'other') {
      _expenseRows[i].name = '';
      _expenseRows[i].unitPrice = 0;
      _expenseRows[i].ourPrice = null;
      if (!_expenseRows[i].payoutManual) _expenseRows[i].payout = _expenseRows[i].amountHK || 0;
    } else if (val === 'loan') {
      // v1.8.0 借款(港幣)：金額手填，單價不適用
      _expenseRows[i].name = '借款(港幣)';
      _expenseRows[i].unitPrice = 0;
      _expenseRows[i].ourPrice = null;
      if (!_expenseRows[i].payoutManual) _expenseRows[i].payout = _expenseRows[i].amountHK || 0;
    } else if (val === 'wp') {
      var wp = tp.waterPark || { guestPrice: 450, ourPrice: 406 };
      _expenseRows[i].name = '水上樂園手帶';
      _expenseRows[i].unitPrice = wp.guestPrice;
      _expenseRows[i].ourPrice = wp.ourPrice;
      _expenseRows[i].amountHK = wp.guestPrice * qty;
      if (!_expenseRows[i].payoutManual) _expenseRows[i].payout = wp.ourPrice * qty;
    } else if (val.indexOf('wd-') === 0) {
      var idx = parseInt(val.substring(3));
      var t = (tp.waterDance || [])[idx];
      if (t) {
        _expenseRows[i].name = '水舞間 ' + t.name;
        _expenseRows[i].unitPrice = t.guestPrice;
        _expenseRows[i].ourPrice = t.ourPrice;
        _expenseRows[i].amountHK = t.guestPrice * qty;
        if (!_expenseRows[i].payoutManual) _expenseRows[i].payout = t.ourPrice * qty;
      }
    }
    renderExpenseRows();
  }
  function _updExp(i, field, val) {
    if (!_expenseRows[i]) return;
    var row = _expenseRows[i];
    if (field === 'absorbed') {
      // v1.9.5 代理吸收（boolean）
      row.absorbed = !!val;
      var rowEl = document.querySelector('.expense-row[data-idx="' + i + '"]');
      if (rowEl) rowEl.style.opacity = val ? '0.65' : '';
    } else if (field === 'payout') {
      // v2.0 公司實支：手動覆蓋後不再自動跟隨（錢包扣款依據）
      row.payout = parseFloat(val) || 0;
      row.payoutManual = true;
    } else if (field === 'name') {
      row[field] = val;
    } else if (field === 'quantity') {
      // 允許空字串暫存，不強制 || 1，避免 BACKSPACE 刪不掉
      var qty = val === '' ? 0 : (parseInt(val) || 0);
      row.quantity = qty;
      if (row.ticketType && row.ticketType !== 'other' && row.ticketType !== 'roomfee' && row.unitPrice) {
        row.amountHK = row.unitPrice * (qty || 1);
        if (!row.payoutManual) row.payout = _expPayoutDefault(row);
        // 只更新金額欄和提示行，不重渲染整行（避免搶焦點）
        var amtInput = document.querySelector('.expense-row[data-idx="' + i + '"] .exp-amt');
        if (amtInput) amtInput.value = row.amountHK;
        var payInput = document.querySelector('.expense-row[data-idx="' + i + '"] .exp-pay');
        if (payInput) payInput.value = row.payout;
        var hint = document.querySelector('.exp-hint-' + i);
        if (hint) hint.textContent = '單價 ' + row.unitPrice + ' HK × ' + (qty || 1) + ' = ' + row.amountHK + ' HK';
      }
    } else if (field === 'amountHK') {
      row.amountHK = parseFloat(val) || 0;
      row._amtManual = row.amountHK !== 0; // v2.2.4 手改金額後，切換品項不再自動覆寫
      // v2.0 金額手改 → 實支跟隨（未手動覆蓋實支時）
      if (!row.payoutManual) {
        row.payout = row.amountHK;
        var payInput2 = document.querySelector('.expense-row[data-idx="' + i + '"] .exp-pay');
        if (payInput2) payInput2.value = row.payout;
      }
    } else {
      row[field] = parseFloat(val) || 0;
    }
  }
  // v2.2.2 品項主檔：選 catalog 自動帶 name + unitPrice + ourPrice，並刷新金額欄（v2.2.3 改用 resolvePick 統一取價）
  // v2.2.4 修：切換品項一律重帶新品項價格（原本只在空值時帶入，換品項會殘留舊價造成錯帳）
  function _updExpCatalog(i, val, sel) {
    if (!_expenseRows[i]) return;
    var row = _expenseRows[i];
    var pick = Catalog.resolvePick(val);
    if (!pick) return; // 自訂不動 row，由用戶在 name 輸入框自由打
    row.name = pick.name;
    row.ticketType = pick.ticketType || 'other';
    if (pick.guestPrice > 0) row.unitPrice = pick.guestPrice;
    if (pick.ourPrice > 0) row.ourPrice = pick.ourPrice;
    // 金額未手改過 → 同步成 unitPrice × quantity
    var qty = row.quantity || 1;
    if (row.unitPrice && !row._amtManual) {
      row.amountHK = Math.round((row.unitPrice * qty) * 100) / 100;
      if (!row.payoutManual) row.payout = _expPayoutDefault(row);
    }
    // 同步畫面金額/實支欄
    var amtInput = document.querySelector('.expense-row[data-idx="' + i + '"] .exp-amt');
    if (amtInput) amtInput.value = row.amountHK;
    var payInput = document.querySelector('.expense-row[data-idx="' + i + '"] .exp-pay');
    if (payInput) payInput.value = row.payout || 0;
    // 同步名稱輸入框（讓用戶看到當前選的）
    var nameInput = sel && sel.parentNode ? sel.parentNode.querySelector('input[placeholder="項目名稱"]') : null;
    if (nameInput) nameInput.value = pick.name;
  }
  function _delExp(i) {
    _expenseRows.splice(i, 1);
    renderExpenseRows();
  }

  var _txSaving = false; // v1.7.0 防重複提交鎖

  function saveTx() {
    if (_txSaving) return; // v1.7.0 防重複提交
    _txSaving = true;
    var btn = document.getElementById('tx-save-btn');
    if (btn) { btn.disabled = true; btn.textContent = '儲存中...'; }
    var memberId = document.getElementById('tx-member').value;
    var m = Members.getById(memberId);
    if (!m) { Toast.error('會員不存在'); _txSaving = false; if (btn) { btn.disabled = false; btn.textContent = '儲存'; } return; }
    if (m.status === MEMBER_STATUS.DRAFT) { Toast.error('會員資料未完成，無法結帳'); _txSaving = false; if (btn) { btn.disabled = false; btn.textContent = '儲存'; } return; }

    var trip = Trips.getById(_selectedTrip);
    var data = {
      tripId: _selectedTrip,
      memberId: memberId,
      agentId: trip.agentId || m.agentId,
      shareholderId: m.shareholderId || trip.shareholderId,
      vipHallId: document.getElementById('tx-hall').value,
      date: (document.getElementById('tx-date') && document.getElementById('tx-date').value) || TWDate.todayStr(),
      source: 'manual', // v1.9.4 帳務來源標示（manual=手輸 / bot=BOT自動結帳），供核帳與多端同步辨識
      chipType: (document.getElementById('tx-chiptype') && document.getElementById('tx-chiptype').value) || 'cash', // v2.0 現金碼/信用碼
      outCode: parseFloat(document.getElementById('tx-out').value) || 0,
      backCode: parseFloat(document.getElementById('tx-back').value) || 0,
      washCode: parseFloat(document.getElementById('tx-wash').value) || 0,
      customerUp: parseFloat(document.getElementById('tx-up').value) || 0,
      customerDown: parseFloat(document.getElementById('tx-down').value) || 0,
      rate1: parseFloat(document.getElementById('tx-rate1').value) || 0,
      rebate1: parseFloat(document.getElementById('tx-rebate1').value) || 0,
      rate2: parseFloat(document.getElementById('tx-rate2').value) || 0,
      rebate2: parseFloat(document.getElementById('tx-rebate2').value) || 0,
      expenses: _expenseRows.map(function(e) {
        e.quantity = e.quantity || 1;
        // v2.1 預支帶入行：帶入量以表單最終數量為準（歸屬量隨需求算）
        if (e.fromPend) e.fromPend = { pid: e.fromPend.pid, rid: e.fromPend.rid, qty: e.quantity };
        return e;
      }),
    };
    var tx = MemberTxs.create(data);
    // 更新团最后结帐日期
    Trips.update(_selectedTrip, { lastSettlementDate: data.date });
    Modal.close();
    _expenseRows = [];
    _txSaving = false; // v1.7.0 解鎖
    Toast.success('帳務已建立');
    render();
  }

  function editTx(txId) {
    var tx = MemberTxs.getById(txId);
    if (!tx) return;
    if (_txLocked(tx)) return; // v1.9.11 待結帳/封存中不可編輯帳務
    _expenseRows = (tx.expenses || []).map(function(e) { return Object.assign({}, e); });
    _washManual = false; // v1.9.4 重置洗碼手動鎖
    // v1.9.10 載入守門：舊資料殘留 absorbed=true 自動歸零＋提示
    _pruneStaleAbsorbed();

    var html = '<div class="form-group"><label>會員: ' + tx.memberId + '</label></div>';
    html += '<div class="form-group"><label>貴賓廳</label>';
    html += '<select id="tx-hall" class="form-input">';
    html += '<option value="">未選擇</option>';
    VIP_HALLS.forEach(function(h) {
      var sel = h.id === (tx.vipHallId || '') ? ' selected' : '';
      html += '<option value="' + h.id + '"' + sel + '>' + esc(h.name) + '</option>';
    });
    html += '</select></div>';
    html += '<div class="form-group"><label>日期</label>';
    html += '<input type="date" id="tx-date" class="form-input" value="' + (tx.date || '') + '"></div>';
    // v2.0 籌碼類型（編輯時可改）
    html += '<div class="form-group"><label>籌碼類型</label>';
    html += '<select id="tx-chiptype" class="form-input" onchange="MemberPage._onChipTypeChange(this.value)">';
    html += '<option value="cash"' + (tx.chipType === 'credit' ? '' : ' selected') + '>現金碼（公司現鈔出入，影響錢包）</option>';
    html += '<option value="credit"' + (tx.chipType === 'credit' ? ' selected' : '') + '>信用碼（賭場額度，不動現鈔）</option>';
    html += '</select></div>';
    html += '<div id="tx-chiptype-hint" style="font-size:12px;color:var(--text-muted);margin:-4px 0 8px;">' + (tx.chipType === 'credit' ? '信用碼：出碼不動現鈔，僅淨贏（回碼＞出碼）超贏港幣存入錢包' : '現金碼：出碼掏現鈔、回碼收現鈔，淨額進錢包') + '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>出碼(CR)(萬)</label><input type="number" inputmode="decimal" step="0.001" id="tx-out" class="form-input" value="' + fmtNum(tx.outCode || 0) + '" oninput="MemberPage.calcUpDown()"></div>';
    html += '<div class="form-group"><label>回碼(寄碼)(萬)</label><input type="number" inputmode="decimal" step="0.001" id="tx-back" class="form-input" value="' + fmtNum(tx.backCode || 0) + '" oninput="MemberPage.calcUpDown()"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>客上(萬)</label><input type="number" inputmode="decimal" step="0.001" id="tx-up" class="form-input" value="' + fmtNum(tx.customerUp || 0) + '" oninput="MemberPage.calcWash()"></div>';
    html += '<div class="form-group"><label>客下(萬)</label><input type="number" inputmode="decimal" step="0.001" id="tx-down" class="form-input" value="' + fmtNum(tx.customerDown || 0) + '" oninput="MemberPage.calcWash()"></div>';
    html += '<div class="form-group"><label>洗碼(萬)</label><input type="number" inputmode="decimal" step="0.001" id="tx-wash" class="form-input" value="' + fmtNum(tx.washCode || 0) + '" oninput="MemberPage._markWashManual()"></div>';
    html += '</div>';
    html += '<div id="tx-wash-hint" style="font-size:12px;color:var(--text-muted);margin:-4px 0 8px;">自動 = 客上 + 客下（洗碼可手動覆寫）</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>倍率1</label><input type="number" inputmode="decimal" step="0.01" id="tx-rate1" class="form-input" value="' + (tx.rate1 || 0) + '"></div>';
    html += '<div class="form-group"><label>返水1</label><input type="number" inputmode="decimal" step="0.001" id="tx-rebate1" class="form-input" value="' + (tx.rebate1 || 0) + '"></div>';
    html += '<div class="form-group"><label>倍率2</label><input type="number" inputmode="decimal" step="0.01" id="tx-rate2" class="form-input" value="' + (tx.rate2 || 0) + '"></div>';
    html += '<div class="form-group"><label>返水2</label><input type="number" inputmode="decimal" step="0.001" id="tx-rebate2" class="form-input" value="' + (tx.rebate2 || 0) + '"></div>';
    html += '</div>';
    html += '<div id="tx-expenses"></div>';
    html += '<button class="btn-sm" onclick="MemberPage.addExpenseRow()">+ 開銷</button>';
    html += '<div id="tx-pendpool"></div>'; // v2.1 待歸屬預支開銷帶入區
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" id="tx-edit-btn" onclick="MemberPage.saveEditTx(\'' + txId + '\')">儲存</button></div>';
    Modal.open('編輯帳務', html);
    _expContainerId = 'tx-expenses'; // v2.1
    renderExpenseRows();
    _renderPendPool(); // v2.1
  }

  function saveEditTx(txId) {
    if (_txSaving) return; // v1.7.0 防重複提交
    _txSaving = true;
    var btn = document.getElementById('tx-edit-btn');
    if (btn) { btn.disabled = true; btn.textContent = '儲存中...'; }
    var patch = {
      vipHallId: document.getElementById('tx-hall').value,
      date: document.getElementById('tx-date').value,
      chipType: (document.getElementById('tx-chiptype') && document.getElementById('tx-chiptype').value) || 'cash', // v2.0 現金碼/信用碼
      outCode: parseFloat(document.getElementById('tx-out').value) || 0,
      backCode: parseFloat(document.getElementById('tx-back').value) || 0,
      washCode: parseFloat(document.getElementById('tx-wash').value) || 0,
      customerUp: parseFloat(document.getElementById('tx-up').value) || 0,
      customerDown: parseFloat(document.getElementById('tx-down').value) || 0,
      rate1: parseFloat(document.getElementById('tx-rate1').value) || 0,
      rebate1: parseFloat(document.getElementById('tx-rebate1').value) || 0,
      rate2: parseFloat(document.getElementById('tx-rate2').value) || 0,
      rebate2: parseFloat(document.getElementById('tx-rebate2').value) || 0,
      expenses: _expenseRows.map(function(e) {
        e.quantity = e.quantity || 1;
        // v2.1 預支帶入行：帶入量以表單最終數量為準
        if (e.fromPend) e.fromPend = { pid: e.fromPend.pid, rid: e.fromPend.rid, qty: e.quantity };
        return e;
      }),
    };
    MemberTxs.update(txId, patch);
    Modal.close();
    _expenseRows = [];
    _txSaving = false; // v1.7.0 解鎖
    Toast.success('帳務已更新');
    render();
  }

  function delTx(txId) {
    var tx = MemberTxs.getById(txId);
    if (tx && _txLocked(tx)) return; // v1.9.11 待結帳/封存中不可刪除帳務
    Modal.confirm('確定刪除此帳務記錄？', function() {
      MemberTxs.remove(txId);
      Toast.success('已刪除');
      render();
    });
  }

  // v1.7.0 複製上一筆帳務（預填所有欄位，同團同會員連續記帳）
  function copyTx(txId) {
    var tx = MemberTxs.getById(txId);
    if (!tx) return;
    showAddTx({
      memberId: tx.memberId,
      vipHallId: tx.vipHallId,
      chipType: tx.chipType, // v2.0 帶上籌碼類型
      outCode: tx.outCode,
      backCode: tx.backCode,
      customerUp: tx.customerUp,
      customerDown: tx.customerDown,
      washCode: tx.washCode,
      expenses: (tx.expenses || []).map(function(e) { return Object.assign({}, e); }),
    });
  }

  // v1.9.3 傳帳給上級＝送入待結帳：先送入待結帳（鎖定帳務），再調出分享面板把明細發給上級代理/股東
  // ===== v2.1 預支開銷（先買先記，收工後歸屬）=====
  function _rowPay(r) {
    if (r.payout !== undefined && r.payout !== null) return r.payout || 0;
    if (r.ourPrice !== undefined && r.ourPrice !== null && r.ticketType && r.ticketType !== 'other' && r.ticketType !== 'loan') return (r.ourPrice || 0) * (r.quantity || 1);
    return r.amountHK || 0;
  }

  function _pendSectionHtml(trip) {
    if (!trip || typeof PendExps === 'undefined') return '';
    var pends = PendExps.getByTrip(_selectedTrip);
    var active = trip.status === TRIP_STATUS.ACTIVE;
    var html = '<div class="pend-section">';
    html += '<div class="pend-section-head"><h4>預支開銷</h4>';
    if (active) html += '<button class="btn-sm" onclick="MemberPage.showAddPend()">＋ 預支開銷</button>';
    html += '</div>';
    html += '<div class="pend-section-desc">先買先記：付款後立即登錄（錢包當下扣實支）；會員收工開帳務時逐行帶入，可細分數量給各會員。</div>';
    if (pends.length === 0) html += '<div class="pend-empty">尚無預支開銷</div>';
    pends.forEach(function(p) {
      var infos = PendExps.claimInfo(p);
      var remaining = infos.filter(function(x) { return x.remaining > 0; }).length;
      var payTotal = Wallet.pendPayoutHKD(p);
      html += '<div class="pend-card">';
      html += '<div class="pend-card-head">';
      html += '<span class="pend-date">' + esc(p.date || '') + '</span>';
      if (p.note) html += '<span class="pend-note">' + esc(p.note) + '</span>';
      if (p.memberId) { var _m = Members.getById(p.memberId); html += '<span class="pend-note">給 ' + esc(_m ? _m.id + (_m.name ? ' ' + _m.name : '') : p.memberId) + '</span>'; }
      html += '<span class="pend-state ' + (remaining > 0 ? 'pend-state-open' : 'pend-state-done') + '">' + (remaining > 0 ? remaining + ' 項待歸屬' : '已全數歸屬') + '</span>';
      html += '<span class="pend-pay">實支 ' + fmtCardNum(payTotal) + ' HK</span>';
      html += '</div>';
      html += '<table class="pend-table"><thead><tr><th>項目</th><th class="num">數量</th><th class="num">已歸屬</th><th class="num">金額HK</th><th class="num">實支HK</th></tr></thead><tbody>';
      infos.forEach(function(x) {
        var r = x.row;
        html += '<tr' + (x.remaining > 0 ? '' : ' class="pend-row-done"') + '>'
          + '<td>' + esc(r.name || '(未命名)') + (r.absorbed ? ' <span class="tx-absorb-tag">代理吸收</span>' : '') + '</td>'
          + '<td class="num">' + (r.quantity || 1) + '</td>'
          + '<td class="num">' + x.claimed + '</td>'
          + '<td class="num">' + fmtCardNum(r.amountHK || 0) + '</td>'
          + '<td class="num">' + fmtCardNum(_rowPay(r)) + '</td>'
          + '</tr>';
      });
      html += '</tbody></table>';
      if (active) {
        html += '<div class="pend-card-actions">';
        html += '<button class="btn-sm" onclick="MemberPage.editPend(\'' + p.id + '\')">編輯</button> ';
        html += '<button class="btn-sm btn-danger" onclick="MemberPage.deletePend(\'' + p.id + '\')">刪除</button> ';
        if (remaining > 0) html += '<button class="btn-sm btn-primary" onclick="MemberPage.toPureTour(\'' + p.id + '\')">轉為純旅遊帳務</button>';
        html += '</div>';
      }
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  function _pendMemberOptionsHtml(trip, selected) {
    var ids = (trip && trip.memberIds && trip.memberIds.length) ? trip.memberIds : null;
    var list = ids ? Members.getAll().filter(function(m) { return ids.indexOf(m.id) >= 0; })
                   : Members.getAll();
    var html = '<option value="">（不指定／之後再分）</option>';
    list.forEach(function(m) {
      html += '<option value="' + escAttr(m.id) + '"' + (selected === m.id ? ' selected' : '') + '>' + esc(m.id + (m.name ? ' ' + m.name : '')) + '</option>';
    });
    return html;
  }
  function showAddPend() {
    var trip = Trips.getById(_selectedTrip);
    if (!trip) { Toast.error('請先選擇團'); return; }
    if (trip.status !== TRIP_STATUS.ACTIVE) { Toast.error('此團已傳帳/封存，不可新增預支'); return; }
    _expenseRows = [];
    _washManual = false;
    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>日期</label><input type="date" id="pend-date" class="form-input" value="' + TWDate.todayStr() + '"></div>';
    html += '<div class="form-group"><label>備註（選填）</label><input type="text" id="pend-note" class="form-input" placeholder="例：猴哥團東哥購票"></div>';
    html += '</div>';
    html += '<div class="form-group"><label>會員（備註用，選填——帶入帳務時仍可細分給任何人）</label><select id="pend-member" class="form-input">' + _pendMemberOptionsHtml(trip, '') + '</select></div>';
    html += '<div id="pend-exp-rows"></div>';
    html += '<button class="btn-sm" onclick="MemberPage.addExpenseRow()">+ 開銷</button>';
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" id="pend-save-btn" onclick="MemberPage.savePend()">儲存（錢包即扣實支）</button></div>';
    Modal.open('預支開銷 · ' + Trips.displayName(trip), html);
    _expContainerId = 'pend-exp-rows';
    renderExpenseRows();
  }
  function savePend() {
    _savePendCommon(null);
  }
  function _savePendCommon(editId) {
    var dateEl = document.getElementById('pend-date');
    var noteEl = document.getElementById('pend-note');
    var rows = _expenseRows.filter(function(e) { return e.name || e.amountHK; });
    if (rows.length === 0) { Toast.error('請至少加入一筆開銷'); return; }
    var trip = Trips.getById(_selectedTrip);
    var data = {
      tripId: _selectedTrip,
      agentId: trip ? (trip.agentId || '') : '',
      shareholderId: trip ? (trip.shareholderId || '') : '',
      memberId: (document.getElementById('pend-member') || {}).value || '', // v2.2.1 備註會員
      date: dateEl ? dateEl.value : TWDate.todayStr(),
      note: noteEl ? (noteEl.value || '').trim() : '',
      rows: rows.map(function(e) {
        var r = Object.assign({}, e);
        delete r.fromPend; // 預支單本身不帶歸屬標記
        r.quantity = r.quantity || 1;
        return r;
      }),
    };
    var btn = document.getElementById('pend-save-btn');
    if (btn) btn.disabled = true;
    var ok = editId ? PendExps.update(editId, data) : PendExps.create(data);
    if (!ok) { Toast.error('儲存失敗，請檢查欄位'); if (btn) btn.disabled = false; return; }
    Modal.close();
    _expenseRows = [];
    Toast.success(editId ? '預支開銷已更新（錢包同步調整）' : '預支開銷已登錄，錢包已扣實支');
    render();
  }
  function editPend(pendId) {
    var p = PendExps.getById(pendId);
    if (!p) return;
    if (PendExps.isClaimed(p)) {
      Toast.error('此預支單已有帳務帶入，不可編輯。如需修改，請先從帳務中移除該開銷行。');
      return;
    }
    _expenseRows = (p.rows || []).map(function(e) { return Object.assign({}, e); });
    _washManual = false;
    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>日期</label><input type="date" id="pend-date" class="form-input" value="' + (p.date || TWDate.todayStr()) + '"></div>';
    html += '<div class="form-group"><label>備註（選填）</label><input type="text" id="pend-note" class="form-input" value="' + escAttr(p.note || '') + '"></div>';
    html += '</div>';
    html += '<div class="form-group"><label>會員（備註用，選填）</label><select id="pend-member" class="form-input">' + _pendMemberOptionsHtml(Trips.getById(p.tripId), p.memberId || '') + '</select></div>';
    html += '<div id="pend-exp-rows"></div>';
    html += '<button class="btn-sm" onclick="MemberPage.addExpenseRow()">+ 開銷</button>';
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" id="pend-save-btn" onclick="MemberPage.saveEditPend(\'' + pendId + '\')">儲存</button></div>';
    Modal.open('編輯預支開銷', html);
    _expContainerId = 'pend-exp-rows';
    renderExpenseRows();
  }
  function saveEditPend(pendId) {
    _savePendCommon(pendId);
  }
  function deletePend(pendId) {
    var p = PendExps.getById(pendId);
    if (!p) return;
    if (PendExps.isClaimed(p)) {
      Toast.error('此預支單已有帳務帶入，不可刪除。請先從帳務中移除該開銷行。');
      return;
    }
    Modal.confirm('刪除這筆預支開銷？\n錢包將加回已扣的實支金額。', function() {
      PendExps.remove(pendId);
      Toast.success('預支開銷已刪除，錢包已加回');
      render();
    });
  }

  // 純旅遊：預支單剩餘未歸屬的行 → 一鍵開零碼帳務（沿用交收/明細/封存全部機制）
  function toPureTour(pendId) {
    var p = PendExps.getById(pendId);
    if (!p) return;
    var rest = PendExps.unclaimedRows(p.tripId).filter(function(x) { return x.pend.id === pendId; });
    if (rest.length === 0) { Toast.error('此預支單已全數歸屬'); return; }
    var members = _tripMemberPool();
    var html = '<div class="section-desc">為純旅遊（不開工）客人建立一筆零出回碼帳務，開銷直接掛在客人名下，交收照常計算。</div>';
    html += '<div class="form-group"><label>會員</label>';
    html += '<select id="pt-member" class="form-input">';
    members.forEach(function(m) {
      html += '<option value="' + escAttr(m.id) + '">' + esc(m.id + ' ' + (m.name || '')) + '</option>';
    });
    html += '</select></div>';
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" onclick="MemberPage._doPureTour(\'' + pendId + '\')">建立純旅遊帳務</button></div>';
    Modal.open('轉為純旅遊帳務', html);
  }
  function _doPureTour(pendId) {
    var p = PendExps.getById(pendId);
    if (!p) return;
    var memberId = document.getElementById('pt-member').value;
    var m = Members.getById(memberId);
    if (!m) { Toast.error('請選擇會員'); return; }
    var rest = PendExps.unclaimedRows(p.tripId).filter(function(x) { return x.pend.id === pendId; });
    if (rest.length === 0) { Toast.error('已無待歸屬開銷'); return; }
    var expenses = rest.map(function(x) {
      var orig = x.row, total = orig.quantity || 1, q = x.remaining;
      var unitAmt = orig.unitPrice ? orig.unitPrice : (orig.amountHK || 0) / total;
      var unitPay = (orig.payout !== undefined && orig.payout !== null) ? (orig.payout / total) : (orig.ourPrice !== undefined && orig.ourPrice !== null ? orig.ourPrice : unitAmt);
      return {
        name: orig.name, ticketType: orig.ticketType || 'other',
        quantity: q, unitPrice: orig.unitPrice || 0, ourPrice: orig.ourPrice,
        amountHK: Math.round(unitAmt * q * 100) / 100,
        exchangeRate: orig.exchangeRate || _defaultExchangeRate(),
        absorbed: !!orig.absorbed,
        payout: Math.round(unitPay * q * 100) / 100, payoutManual: true,
        fromPend: { pid: pendId, rid: orig.rid, qty: q }, // 錢包已於預支時扣，不重複
      };
    });
    var tx = MemberTxs.create({
      tripId: p.tripId, memberId: memberId,
      agentId: p.agentId || '', shareholderId: p.shareholderId || '',
      vipHallId: '', date: TWDate.todayStr(), source: 'manual',
      pureTour: true, // v2.1 純旅遊標記
      chipType: 'cash', outCode: 0, backCode: 0, washCode: 0, customerUp: 0, customerDown: 0,
      rate1: m.rate1 || 0, rebate1: 0, rate2: 0, rebate2: 0,
      expenses: expenses,
    });
    if (!tx) { Toast.error('建立失敗'); return; }
    Trips.update(p.tripId, { lastSettlementDate: TWDate.todayStr() });
    Modal.close();
    Toast.success('已建立純旅遊帳務（' + memberId + '），開銷已歸屬');
    render();
  }

  // 帳務表單內：本團待歸屬預支開銷帶入區
  function _renderPendPool() {
    var el = document.getElementById('tx-pendpool');
    if (!el || typeof PendExps === 'undefined') return;
    var rows = PendExps.unclaimedRows(_selectedTrip);
    if (!rows || rows.length === 0) { el.innerHTML = ''; return; }
    var html = '<div class="pendpool">';
    html += '<div class="pendpool-title">待歸屬預支開銷（本團，帶入後錢包不重複扣）</div>';
    rows.forEach(function(x, i) {
      var r = x.row;
      var unitPay = (r.payout !== undefined && r.payout !== null) ? (r.payout / (r.quantity || 1)) : ((r.ourPrice !== undefined && r.ourPrice !== null) ? r.ourPrice : (r.amountHK || 0) / (r.quantity || 1));
      html += '<div class="pendpool-item">'
        + '<span class="pendpool-name">' + esc(r.name || '(未命名)') + (r.absorbed ? ' <span class="tx-absorb-tag">吸收</span>' : '') + '</span>'
        + '<span class="pendpool-info">實支 ' + fmtCardNum(Math.round(unitPay * 100) / 100) + ' HK/單位 · 剩餘 ' + x.remaining + (x.pend.memberId ? ' · 原備註：給 ' + esc((function(mm) { return mm ? mm.id + (mm.name ? ' ' + mm.name : '') : x.pend.memberId; })(Members.getById(x.pend.memberId))) : '') + '</span>'
        + '<input type="number" min="1" max="' + x.remaining + '" value="' + x.remaining + '" id="pp-qty-' + i + '" class="form-input pendpool-qty">'
        + '<button class="btn-sm btn-primary" onclick="MemberPage._claimPendRow(' + i + ')">帶入</button>'
        + '</div>';
    });
    html += '</div>';
    el.innerHTML = html;
  }
  function _claimPendRow(i) {
    var rows = PendExps.unclaimedRows(_selectedTrip);
    var x = rows[i];
    if (!x) return;
    var qtyEl = document.getElementById('pp-qty-' + i);
    var q = parseInt(qtyEl ? qtyEl.value : '') || 1;
    q = Math.max(1, Math.min(q, x.remaining));
    var orig = x.row, total = orig.quantity || 1;
    var unitAmt = orig.unitPrice ? orig.unitPrice : (orig.amountHK || 0) / total;
    var unitPay = (orig.payout !== undefined && orig.payout !== null) ? (orig.payout / total) : (orig.ourPrice !== undefined && orig.ourPrice !== null ? orig.ourPrice : unitAmt);
    _expenseRows.push({
      name: orig.name, ticketType: orig.ticketType || 'other',
      quantity: q, unitPrice: orig.unitPrice || 0, ourPrice: orig.ourPrice,
      amountHK: Math.round(unitAmt * q * 100) / 100,
      exchangeRate: orig.exchangeRate || _defaultExchangeRate(),
      absorbed: !!orig.absorbed,
      payout: Math.round(unitPay * q * 100) / 100, payoutManual: true,
      fromPend: { pid: x.pend.id, rid: orig.rid, qty: q },
    });
    renderExpenseRows();
    _renderPendPool();
    Toast.success('已帶入 ' + (orig.name || '開銷') + ' × ' + q);
  }

  function markPending(tripId) {
    // v2.1 守門：預支開銷未全部歸屬前不可傳帳（避免漏掉這筆錢）
    if (typeof PendExps !== 'undefined' && PendExps.hasUnclaimed(tripId)) {
      Toast.error('本團尚有 ' + PendExps.unclaimedCount(tripId) + ' 筆預支開銷未歸屬，請先在帳務表單帶入或轉為純旅遊帳務');
      return;
    }
    Modal.confirm('會產生結帳明細並分享給所屬上級（代理/股東），\n此團同時送入待結帳、帳務鎖定無法新增/修改\n（若有計算錯誤，可隨時在待結帳頁或此處撤回重編）。\n確定要傳帳？', function() {
      Trips.update(tripId, { status: TRIP_STATUS.PENDING_SETTLEMENT, lastSettlementDate: TWDate.todayStr() });
      Toast.success('團 ' + tripId + ' 已傳帳並送入待結帳');
      _selectedTrip = null;
      render();
      // 調出分享面板（iOS 可直接選微信發給上級；取消分享不影響待結帳狀態，之後可在待結帳頁重傳）
      var text = (typeof PendingPage !== 'undefined') ? PendingPage.buildShareText(tripId) : null;
      if (text) PendingPage.shareText('團 ' + tripId + ' 結帳明細', text);
    });
  }

  // v1.9.11 撤回待結帳：退回帳務頁恢復可編輯（計算錯誤時用；封存＝雙方確認才不可逆）
  function revertPending(tripId) {
    // v2.4.10 員工僅送件權限：撤回待結帳需 pending 寫入權限（會計/管理員）
    if (typeof Perm !== 'undefined' && Perm.hasSession() && !Perm.can('pending', 'write')) {
      Toast.error('您的角色無權撤回待結帳，請聯絡會計或管理員');
      return;
    }
    Modal.confirm('將團 ' + tripId + ' 撤回帳務頁？\n撤回後帳務恢復可編輯，修正後需再次「傳帳給上級」。', function() {
      var ok = Trips.revertPending(tripId);
      Toast[ok ? 'success' : 'error'](ok ? '團 ' + tripId + ' 已撤回，可重新編輯帳務' : '撤回失敗（此團不在待結帳狀態）');
      if (ok) render();
    });
  }

  // v1.9.11 帳務鎖定守門：非 active（待結帳/已封存）的團不可新增/修改/刪除帳務
  function _txLocked(tx) {
    var trip = tx && tx.tripId ? Trips.getById(tx.tripId) : Trips.getById(_selectedTrip);
    if (trip && trip.status !== TRIP_STATUS.ACTIVE) {
      Toast.error(trip.status === TRIP_STATUS.PENDING_SETTLEMENT
        ? '此團已送入待結帳，請先「撤回待結帳」才能編輯'
        : '此團已封存，不可修改帳務');
      return true;
    }
    return false;
  }

  return {
    render: render, selectTrip: selectTrip, selectAgent: selectAgent, switchTab: switchTab,
    onMemberSearch: onMemberSearch, searchMember: searchMember,
    showAddTx: showAddTx, saveTx: saveTx, onMemberChange: onMemberChange, showAddAgent: showAddAgent, delAgent: delAgent,
    editTx: editTx, saveEditTx: saveEditTx, delTx: delTx, copyTx: copyTx,
    addExpenseRow: addExpenseRow, _updExp: _updExp, _updExpType: _updExpType, _updExpCatalog: _updExpCatalog, _delExp: _delExp,
    calcUpDown: calcUpDown, calcWash: calcWash, _markWashManual: _markWashManual,
    _onMemberSearchFocus: _onMemberSearchFocus, _onMemberSearchInput: _onMemberSearchInput, _selectMember: _selectMember,
    _onChipTypeChange: _onChipTypeChange,
    markPending: markPending, revertPending: revertPending,
    showAddPend: showAddPend, savePend: savePend, editPend: editPend, saveEditPend: saveEditPend, deletePend: deletePend,
    toPureTour: toPureTour, _doPureTour: _doPureTour, _renderPendPool: _renderPendPool, _claimPendRow: _claimPendRow,
  };
})();


// === src/pages/wallet.js ===
/**
 * pages/wallet.js — v2.0 港幣現鈔錢包頁
 * 餘額大字（負數紅字）+ 本日/本週收支摘要 + 流水列表（可展開自動流水明細）
 * 手動補登（換匯/墊付/老闆存提/對帳調整/其他，可編輯刪除）；首次使用自填開帳數
 * 依赖: core/constants.js, core/events.js, core/router.js, data/wallet.js, data/members.js, ui/modal.js, ui/toast.js
 */
var WalletPage = (function() {
  var _expanded = {}; // 展開明細的流水 id
  var _batchMode = false; // v2.4.8 批量刪除模式（與 WEB 兩端對齊）
  var _batchSel = {};     // 批量勾選：id -> true

  var MANUAL_CATEGORIES = [
    { id: 'exchange', label: '換匯' },
    { id: 'advance',  label: '墊付' },
    { id: 'owner',    label: '老闆存提' },
    { id: 'adjust',   label: '對帳調整' },
    { id: 'other',    label: '其他' },
  ];

  function fmtHK(n) {
    return (Math.round(n || 0)).toLocaleString();
  }
  function _catLabel(id) {
    var c = MANUAL_CATEGORIES.find(function(x) { return x.id === id; });
    return c ? c.label : '其他';
  }
  function _typeLabel(w) {
    switch (w.type) {
      case 'open': return '開帳';
      case 'member_tx': return '現金碼';
      case 'credit_tx': return '信用碼超贏';
      case 'expense': return '開銷實支';
      case 'pexp': return '預支開銷'; // v2.1
      case 'loan': return '借支'; // v2.2
      case 'loan_repay': return '借支回收'; // v2.2
      case 'manual': return '補登·' + _catLabel(w.category);
      default: return w.type || '';
    }
  }
  function _daysAgoStr(n) {
    var d = new Date(Date.now() - n * 24 * 60 * 60 * 1000);
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }

  function _renderOnboarding() {
    var html = '<div class="wallet-onboard">';
    html += '<div class="section-desc">港幣現鈔錢包：即時掌握公司手上的現鈔。首次使用請填入<b>目前實際現鈔數</b>作為開帳（過往帳務不回溯），之後新帳務會逐筆自動進錢包。</div>';
    html += '<div class="form-group" style="max-width:320px;"><label>目前現鈔數（HK$）</label>';
    html += '<input type="number" inputmode="decimal" step="1" id="wallet-open-amt" class="form-input" placeholder="例：1000000"></div>';
    html += '<div class="form-group" style="max-width:320px;"><label>開帳日期</label>';
    html += '<input type="date" id="wallet-open-date" class="form-input" value="' + TWDate.todayStr() + '"></div>';
    html += '<div class="form-group" style="max-width:320px;"><label>備註（選填）</label>';
    html += '<input type="text" id="wallet-open-note" class="form-input" placeholder="例：主管交班現鈔"></div>';
    html += '<button class="btn btn-primary" onclick="WalletPage.saveOpen()">開 帳</button>';
    html += '</div>';
    return html;
  }

  function _detailHtml(w) {
    var d = w.detail || {};
    var html = '<div class="wallet-detail">';
    if (w.type === 'member_tx' || w.type === 'credit_tx') {
      html += '<div>出碼 ' + fmtHK((d.outCode || 0) * 10000) + ' HK ／ 回碼 ' + fmtHK((d.backCode || 0) * 10000) + ' HK</div>';
      html += '<div class="wallet-detail-note">' + (d.chipType === 'credit'
        ? '信用碼：出碼不動現鈔；僅淨贏（回碼−出碼＝' + fmtHK(w.amountHKD) + ' HK）存入錢包'
        : '現金碼淨額＝回碼−出碼（負數＝公司掏現鈔）') + '</div>';
    } else if (w.type === 'expense' && d.items) {
      d.items.forEach(function(it) {
        html += '<div>' + esc(it.name || '(未命名)') + '：金額 ' + fmtHK(it.amountHK) + ' HK／實支 ' + fmtHK(it.payout) + ' HK'
          + (it.absorbed ? '（招待，實支照扣）' : '') + '</div>';
      });
      html += '<div class="wallet-detail-note">實支合計 ' + fmtHK(-w.amountHKD) + ' HK 從錢包扣除；金額（收會員/代理）走交收，不進錢包</div>';
    } else if (w.note) {
      html += '<div>' + esc(w.note) + '</div>';
    }
    html += '</div>';
    return html;
  }

  function render() {
    var el = document.getElementById('page-wallet');
    if (!el) return;
    if (typeof Wallet === 'undefined' || !Wallet.isOpened()) {
      el.innerHTML = _renderOnboarding();
      return;
    }

    // 依時間正序算累計餘額，顯示時反轉（最新在上）
    // v2.1.2 修正：_run 只放顯示用 map，不可寫進存檔物件本體
    //（否則每新增一筆流水全部舊流水 _run 都變，與雲端回傳值比對不同 → 每輪同步被誤判真衝突狂跳 Toast）
    var entries = Wallet.getAll().slice().sort(function(a, b) { return (a.createdAt || 0) - (b.createdAt || 0); });
    var run = 0;
    var runMap = {};
    entries.forEach(function(w) { run += (w.amountHKD || 0); runMap[w.id] = run; });
    var bal = Wallet.balance();

    var today = TWDate.todayStr();
    var weekStart = _daysAgoStr(6);
    var dayIn = 0, dayOut = 0, weekIn = 0, weekOut = 0;
    entries.forEach(function(w) {
      var amt = w.amountHKD || 0;
      if (w.date === today) { if (amt >= 0) dayIn += amt; else dayOut += -amt; }
      if (w.date && w.date >= weekStart) { if (amt >= 0) weekIn += amt; else weekOut += -amt; }
    });

    var html = '';
    html += '<div class="wallet-balance-card' + (bal < 0 ? ' neg' : '') + '">';
    html += '<div class="wallet-balance-label">港幣現鈔餘額</div>';
    html += '<div class="wallet-balance-num">HK$ ' + fmtHK(bal) + '</div>';
    if (bal < 0) html += '<div class="wallet-balance-warn">' + ICONS.alert + ' 餘額為負，請立即對帳</div>';
    html += '</div>';

    html += '<div class="wallet-summary">';
    html += '<div><b>本日</b><br>收 ' + fmtHK(dayIn) + ' ／ 支 ' + fmtHK(dayOut) + '</div>';
    html += '<div><b>本週</b><br>收 ' + fmtHK(weekIn) + ' ／ 支 ' + fmtHK(weekOut) + '</div>';
    html += '<div><b>流水</b><br>' + entries.length + ' 筆</div>';
    html += '</div>';

    if (_batchMode) {
      html += '<div class="wallet-toolbar"><button class="btn btn-danger" onclick="WalletPage._doBatchDelete()">刪除所選（' + Object.keys(_batchSel).length + '）</button> <button class="btn" onclick="WalletPage._exitBatch()">取消</button></div>';
      html += '<div class="batch-hint">批量刪除模式：點選要刪除的補登流水，再按「刪除所選」。自動流水（現金碼/借支/預支等）不可直接刪除。</div>';
    } else {
      html += '<div class="wallet-toolbar"><button class="btn btn-primary" onclick="WalletPage.showAddManual()">＋ 補登</button> <button class="btn" onclick="WalletPage.showAddPendAdvance()">＋ 墊付</button> <button class="btn" onclick="WalletPage.showAddLoan()">＋ 借支</button> <button class="btn" onclick="WalletPage.showCatalogManage()">品項設定</button> <button class="btn" onclick="WalletPage._enterBatch()">批量刪除</button></div>';
    }
    html += _loansPanelHtml(); // v2.2 未回收借支清單（常駐警示）
    html += '<p class="section-desc">只記實際掏出/收回的港幣現鈔；交收回款走結算系統不進錢包。點列可展開明細與編輯／刪除（自動流水不可直接改，請點「前往修改來源」改原單，錢包會自動更新）。借支是純現金借貸，不與帳務回碼／上下分抵銷。</p>';

    var list = entries.slice().reverse();
    if (list.length === 0) {
      html += '<div class="empty">尚無流水</div>';
    } else {
      html += '<div class="wallet-list">';
      list.forEach(function(w) {
        var amt = w.amountHKD || 0;
        var isOpen = !!_expanded[w.id];
        var selectable = _batchMode && w.type === 'manual'; // 僅補登可批量刪（與單筆刪除權限一致）
        var isSel = !!_batchSel[w.id];
        html += '<div class="wallet-item' + (isOpen ? ' open' : '') + (selectable ? (isSel ? ' sel' : ' batchable') : '') + '" onclick="WalletPage._itemTap(\'' + escJs(w.id) + '\',' + (selectable ? 'true' : 'false') + ')">';
        html += '<div class="wallet-item-head">';
        if (selectable) {
          html += '<span class="wallet-item-cb">' + (isSel ? '✓' : '') + '</span>';
        }
        html += '<div class="wallet-item-main"><span class="wallet-item-type">' + _typeLabel(w) + '</span>'
          + '<span class="wallet-item-note">' + esc(w.type === 'manual' ? (w.note || _catLabel(w.category)) : (w.note || '')) + '</span></div>';
        html += '<div class="wallet-item-amts"><span class="wallet-item-amt ' + (amt >= 0 ? 'in' : 'out') + '">' + (amt >= 0 ? '+' : '−') + fmtHK(Math.abs(amt)) + '</span>'
          + '<span class="wallet-item-run">餘 ' + fmtHK(runMap[w.id] || 0) + '</span></div>';
        html += '</div>';
        html += '<div class="wallet-item-sub">' + esc(w.date || '') + (w.tripId ? ' · 團 ' + esc(w.tripId) : '') + '</div>';
        if (isOpen) html += _detailHtml(w);
        if (isOpen && w.type === 'manual') {
          html += '<div class="wallet-item-actions">'
            + '<button class="btn-sm" onclick="event.stopPropagation();WalletPage.showEditManual(\'' + escJs(w.id) + '\')">編輯</button> '
            + '<button class="btn-sm btn-danger" onclick="event.stopPropagation();WalletPage.delManual(\'' + escJs(w.id) + '\')">刪除</button>'
            + '</div>';
        }
        if (isOpen && w.type === 'open') { // v2.1.1 開帳可編輯/刪除（key 錯修正）
          html += '<div class="wallet-item-actions">'
            + '<button class="btn-sm" onclick="event.stopPropagation();WalletPage.showEditOpen(\'' + escJs(w.id) + '\')">編輯</button> '
            + '<button class="btn-sm btn-danger" onclick="event.stopPropagation();WalletPage.delOpen(\'' + escJs(w.id) + '\')">刪除</button>'
            + '</div>';
        }
        if (isOpen && (w.type === 'member_tx' || w.type === 'credit_tx' || w.type === 'expense')) { // v2.1.1 跳去改來源帳務
          html += '<div class="wallet-item-actions">'
            + '<button class="btn-sm" onclick="event.stopPropagation();WalletPage.gotoSource(\'' + escJs(w.id) + '\')">前往修改來源帳務</button>'
            + '</div>';
        }
        if (isOpen && w.type === 'pexp') { // v2.1.1 跳去該團預支卡
          html += '<div class="wallet-item-actions">'
            + '<button class="btn-sm" onclick="event.stopPropagation();WalletPage.gotoPend(\'' + escJs(w.id) + '\')">前往預支開銷</button>'
            + '</div>';
        }
        if (isOpen && w.type === 'loan') { // v2.2 借支：回收/編輯/刪除
          html += '<div class="wallet-item-actions">'
            + '<button class="btn-sm" onclick="event.stopPropagation();WalletPage.repayLoan(\'' + escJs(w.refId || '') + '\')">登記回收</button> '
            + '<button class="btn-sm" onclick="event.stopPropagation();WalletPage.showEditLoan(\'' + escJs(w.refId || '') + '\')">編輯</button> '
            + '<button class="btn-sm btn-danger" onclick="event.stopPropagation();WalletPage.delLoan(\'' + escJs(w.refId || '') + '\')">刪除</button>'
            + '</div>';
        }
        if (isOpen && w.type === 'loan_repay') { // v2.2 回收流水：逐筆刪回收（key 錯修正）
          var _lr = (typeof Loans !== 'undefined' && w.refId) ? Loans.getById(w.refId) : null;
          if (_lr && _lr.repayments && _lr.repayments.length) {
            html += '<div class="wallet-item-actions">';
            _lr.repayments.forEach(function(r, ri) {
              html += '<button class="btn-sm btn-danger" onclick="event.stopPropagation();WalletPage.delRepay(\'' + escJs(w.refId) + '\',' + ri + ')">刪 ' + esc((r.date || '')) + ' 收款</button> ';
            });
            html += '</div>';
          }
        }
        html += '</div>';
      });
      html += '</div>';
    }
    el.innerHTML = html;
  }

  function toggleDetail(id) {
    _expanded[id] = !_expanded[id];
    render();
  }

  // ===== v2.4.8 批量刪除（與 WEB 兩端對齊） =====
  function _enterBatch() {
    _batchMode = true;
    _batchSel = {};
    render();
  }
  function _exitBatch() {
    _batchMode = false;
    _batchSel = {};
    render();
  }
  function _itemTap(id, selectable) {
    if (selectable) {
      if (_batchSel[id]) delete _batchSel[id]; else _batchSel[id] = true;
      render(); // 重繪勾選視覺（_expanded 保留，展開狀態不受影響）
    } else {
      toggleDetail(id);
    }
  }
  function _doBatchDelete() {
    var ids = Object.keys(_batchSel).filter(function(k) { return _batchSel[k]; });
    if (ids.length === 0) { Toast.warning('請先點選要刪除的補登流水'); return; }
    Modal.confirm('確定刪除勾選的 ' + ids.length + ' 筆補登流水？', function() {
      var ok = 0, fail = 0;
      ids.forEach(function(id) {
        if (Wallet.removeManual(id)) ok++; else fail++;
      });
      _batchMode = false;
      _batchSel = {};
      if (fail > 0) Toast.warning('已刪除 ' + ok + ' 筆，' + fail + ' 筆失敗（自動流水不可刪除）');
      else Toast.success('已刪除 ' + ok + ' 筆補登流水');
      render();
    });
  }

  // ===== v2.2 港幣借支：登記 / 未回收清單 / 部分回收 =====
  function _memberOptions(sel) {
    var html = '';
    var ms = (typeof Members !== 'undefined') ? Members.getAll() : [];
    ms.forEach(function(m) {
      html += '<option value="' + esc(m.id) + '"' + (m.id === sel ? ' selected' : '') + '>' + esc(m.id + (m.name ? ' ' + m.name : '')) + '</option>';
    });
    return html;
  }
  function _memberLabel(id) {
    var m = (typeof Members !== 'undefined') ? Members.getById(id) : null;
    return m ? (m.id + (m.name ? ' ' + m.name : '')) : (id || '');
  }
  function _loansPanelHtml() {
    if (typeof Loans === 'undefined') return '';
    var opens = Loans.openLoans();
    if (!opens.length) return '';
    var totalOut = opens.reduce(function(s, l) { return s + Loans.outstanding(l); }, 0);
    var todayMs = new Date(TWDate.todayStr() + 'T00:00:00').getTime();
    var html = '<div class="loan-panel">';
    html += '<div class="loan-panel-head">未回收借支 <b class="loan-panel-total">HK$ ' + fmtHK(totalOut) + '</b><span class="loan-panel-count">' + opens.length + ' 筆</span></div>';
    opens.forEach(function(l) {
      var out = Loans.outstanding(l);
      var repaid = Loans.repaidTotal(l);
      var days = Math.max(0, Math.round((todayMs - new Date(l.date + 'T00:00:00').getTime()) / 86400000));
      html += '<div class="loan-item">';
      html += '<div class="loan-item-row"><span class="loan-item-member">' + esc(_memberLabel(l.memberId)) + '</span>'
        + '<span class="loan-item-date">' + esc(l.date || '') + '（' + days + ' 天）</span>'
        + '<span class="loan-item-out">尚欠 <b>HK$ ' + fmtHK(out) + '</b></span></div>';
      html += '<div class="loan-item-sub">借出 HK$ ' + fmtHK(l.amountHKD || 0) + (repaid > 0 ? ' · 已收 HK$ ' + fmtHK(repaid) : '') + (l.note ? ' · ' + esc(l.note) : '') + '</div>';
      if (l.repayments && l.repayments.length) {
        html += '<div class="loan-item-reps">';
        l.repayments.forEach(function(r, ri) {
          html += '<span class="loan-rep-chip">' + esc(r.date || '') + ' 收 HK$ ' + fmtHK(r.amountHKD || 0) + (r.note ? ' ' + esc(r.note) : '')
            + ' <a href="javascript:void(0)" onclick="WalletPage.delRepay(\'' + escJs(l.id) + '\',' + ri + ')">✕</a></span>';
        });
        html += '</div>';
      }
      html += '<div class="loan-item-actions">'
        + '<button class="btn-sm" onclick="WalletPage.repayLoan(\'' + escJs(l.id) + '\')">回收</button> '
        + '<button class="btn-sm" onclick="WalletPage.showEditLoan(\'' + escJs(l.id) + '\')">編輯</button> '
        + '<button class="btn-sm btn-danger" onclick="WalletPage.delLoan(\'' + escJs(l.id) + '\')">刪除</button>'
        + '</div>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  }
  function showAddLoan() {
    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>會員</label><select id="wl-member" class="form-input">' + _memberOptions('') + '</select></div>';
    html += '<div class="form-group"><label>金額(HK$)</label><input type="number" inputmode="decimal" step="1" min="1" id="wl-amt" class="form-input" placeholder="例：30000"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>日期</label><input type="date" id="wl-date" class="form-input" value="' + TWDate.todayStr() + '"></div>';
    html += '<div class="form-group"><label>備註</label><input type="text" id="wl-note" class="form-input" placeholder="例：飯店雜費預借"></div>';
    html += '</div>';
    html += '<p class="section-desc">借支＝現鈔借給會員，存檔當下錢包即扣；還款時用「回收」登記（可部分還）。借支不可與帳務回碼／上下分抵銷。</p>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="WalletPage.saveLoan()">儲存</button></div>';
    Modal.open('借支登記', html);
  }
  function saveLoan() {
    var memberEl = document.getElementById('wl-member');
    var amtEl = document.getElementById('wl-amt');
    var amt = amtEl ? parseFloat(amtEl.value) : NaN;
    var date = (document.getElementById('wl-date') || {}).value || TWDate.todayStr();
    var note = (document.getElementById('wl-note') || {}).value || '';
    if (!memberEl || !memberEl.value) { Toast.error('請選擇會員'); return; }
    if (isNaN(amt) || amt <= 0) { Toast.error('請輸入正確金額'); return; }
    var l = Loans.create({ memberId: memberEl.value, amountHKD: amt, date: date, note: note });
    if (l) { Modal.close(); Toast.success('借支已登記，錢包已扣 HK$ ' + fmtHK(amt)); render(); }
    else Toast.error('儲存失敗');
  }
  function repayLoan(id) {
    var l = Loans.getById(id);
    if (!l) return;
    var out = Loans.outstanding(l);
    var html = '';
    html += '<p class="section-desc">' + esc(_memberLabel(l.memberId)) + ' 借出 HK$ ' + fmtHK(l.amountHKD || 0) + '，已收 HK$ ' + fmtHK(Loans.repaidTotal(l)) + '，<b>尚欠 HK$ ' + fmtHK(out) + '</b></p>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>本次回收(HK$)</label><input type="number" inputmode="decimal" step="1" min="1" max="' + out + '" id="wr-amt" class="form-input" value="' + out + '"></div>';
    html += '<div class="form-group"><label>日期</label><input type="date" id="wr-date" class="form-input" value="' + TWDate.todayStr() + '"></div>';
    html += '</div>';
    html += '<div class="form-group"><label>備註</label><input type="text" id="wr-note" class="form-input" placeholder="例：部分回收"></div>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="WalletPage.saveRepay(\'' + escJs(id) + '\')">儲存</button></div>';
    Modal.open('借支回收', html);
  }
  function saveRepay(id) {
    var amtEl = document.getElementById('wr-amt');
    var amt = amtEl ? parseFloat(amtEl.value) : NaN;
    var date = (document.getElementById('wr-date') || {}).value || TWDate.todayStr();
    var note = (document.getElementById('wr-note') || {}).value || '';
    if (isNaN(amt) || amt <= 0) { Toast.error('請輸入正確金額'); return; }
    var l = Loans.repay(id, amt, date, note);
    if (l) {
      Modal.close();
      var out = Loans.outstanding(l);
      Toast.success(out > 0 ? '已回收 HK$ ' + fmtHK(amt) + '，尚欠 HK$ ' + fmtHK(out) : '已全額回收');
      render();
    } else Toast.error('儲存失敗');
  }
  function showEditLoan(id) {
    var l = Loans.getById(id);
    if (!l) return;
    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>會員</label><select id="wle-member" class="form-input">' + _memberOptions(l.memberId) + '</select></div>';
    html += '<div class="form-group"><label>金額(HK$)</label><input type="number" inputmode="decimal" step="1" min="1" id="wle-amt" class="form-input" value="' + (l.amountHKD || 0) + '"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>日期</label><input type="date" id="wle-date" class="form-input" value="' + (l.date || '') + '"></div>';
    html += '<div class="form-group"><label>備註</label><input type="text" id="wle-note" class="form-input" value="' + esc(l.note || '') + '"></div>';
    html += '</div>';
    if (Loans.repaidTotal(l) > 0) html += '<p class="section-desc">已回收 HK$ ' + fmtHK(Loans.repaidTotal(l)) + '，金額不可低於已回收總額。</p>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="WalletPage.saveEditLoan(\'' + escJs(id) + '\')">儲存</button></div>';
    Modal.open('編輯借支', html);
  }
  function saveEditLoan(id) {
    var memberEl = document.getElementById('wle-member');
    var amtEl = document.getElementById('wle-amt');
    var amt = amtEl ? parseFloat(amtEl.value) : NaN;
    var date = (document.getElementById('wle-date') || {}).value || TWDate.todayStr();
    var note = (document.getElementById('wle-note') || {}).value || '';
    if (!memberEl || !memberEl.value) { Toast.error('請選擇會員'); return; }
    if (isNaN(amt) || amt <= 0) { Toast.error('請輸入正確金額'); return; }
    var l = Loans.update(id, { memberId: memberEl.value, amountHKD: amt, date: date, note: note });
    if (l) { Modal.close(); Toast.success('已更新，錢包已同步'); render(); }
    else Toast.error('更新失敗（金額不可低於已回收總額）');
  }
  function delLoan(id) {
    var l = Loans.getById(id);
    if (!l) return;
    Modal.confirm('確定刪除這筆借支？（借出與已回收的錢包流水會一併移除）', function() {
      Loans.remove(id);
      Toast.success('已刪除');
      render();
    });
  }
  function delRepay(loanId, idx) {
    Modal.confirm('確定刪除這筆回收記錄？（錢包回收金額會同步減少）', function() {
      if (Loans.removeRepayment(loanId, idx)) { Toast.success('已刪除'); render(); }
      else Toast.error('刪除失敗');
    });
  }

  function saveOpen() {
    var amtEl = document.getElementById('wallet-open-amt');
    var dateEl = document.getElementById('wallet-open-date');
    var noteEl = document.getElementById('wallet-open-note');
    var amt = amtEl ? parseFloat(amtEl.value) : NaN;
    if (isNaN(amt) || amt < 0) { Toast.error('請輸入正確的目前現鈔數'); return; }
    var entry = Wallet.openAccount(amt, dateEl ? dateEl.value : '', noteEl ? noteEl.value : '');
    if (entry) {
      Toast.success('錢包已開帳：HK$ ' + fmtHK(amt));
      render();
    }
  }

  // ===== v2.2.1 墊付＝預支開銷入口（門票代墊先買先扣，之後帶入帳務細分歸屬）=====
  function _memLabel(m) { return m ? (m.id + (m.name ? ' ' + m.name : '')) : ''; }
  var _wpPendRows = [];
  function showAddPendAdvance() {
    var trips = Trips.getAll().filter(function(t) { return t.status === TRIP_STATUS.ACTIVE; });
    if (trips.length === 0) { Toast.error('目前沒有進行中的團，請先建團'); return; }
    _wpPendRows = [{ name: '', qty: 1, pay: '' }];
    var html = '';
    html += '<p class="section-desc">門票等先買好的代墊：選團（＋可備註給哪位會員）→ 填明細 → 存檔當下錢包即扣。會員收工開帳務時可逐行帶入、細分數量給各會員。</p>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>團</label><select id="wp-pend-trip" class="form-input" onchange="WalletPage._onPendTripChange()">';
    trips.forEach(function(t) { html += '<option value="' + escAttr(t.id) + '">' + esc(Trips.displayName(t)) + '</option>'; });
    html += '</select></div>';
    html += '<div class="form-group"><label>會員（備註用，選填）</label><select id="wp-pend-member" class="form-input"><option value="">（不指定／之後再分）</option></select></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>日期</label><input type="date" id="wp-pend-date" class="form-input" value="' + TWDate.todayStr() + '"></div>';
    html += '<div class="form-group"><label>備註（選填）</label><input type="text" id="wp-pend-note" class="form-input" placeholder="例：水舞間豪華席門票"></div>';
    html += '</div>';
    html += '<div id="wp-pend-rows"></div>';
    html += '<button class="btn-sm" onclick="WalletPage._wpAddRow()">+ 明細</button>';
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" id="wp-pend-save-btn" onclick="WalletPage.savePendAdvance()">儲存（錢包即扣實支）</button></div>';
    Modal.open('墊付（預支開銷）', html);
    _onPendTripChange();
    _renderWpPendRows();
  }
  function _onPendTripChange() {
    var sel = document.getElementById('wp-pend-trip');
    var memSel = document.getElementById('wp-pend-member');
    if (!sel || !memSel) return;
    var trip = Trips.getById(sel.value);
    var ids = (trip && trip.memberIds && trip.memberIds.length) ? trip.memberIds : null;
    var list = ids ? Members.getAll().filter(function(m) { return ids.indexOf(m.id) >= 0; })
                   : Members.getAll();
    var html = '<option value="">（不指定／之後再分）</option>';
    list.forEach(function(m) { html += '<option value="' + escAttr(m.id) + '">' + esc(_memLabel(m)) + '</option>'; });
    memSel.innerHTML = html;
  }
  function _renderWpPendRows() {
    var el = document.getElementById('wp-pend-rows');
    if (!el) return;
    var html = '';
    _wpPendRows.forEach(function(r, i) {
      var fixed = Catalog.findFixedByName(r.name);
      var presetItem = fixed ? null : Catalog.findByName(r.name);
      var cat = fixed ? fixed.key : (presetItem ? presetItem.id : '__custom__');
      var isCustom = !fixed && !presetItem;
      html += '<div class="form-row wp-pend-row" data-idx="' + i + '">'
        + '<div class="form-group" style="flex:1 1 220px"><label>品名</label><select class="form-input wp-pend-cat" data-idx="' + i + '" onchange="WalletPage._wpOnItemChange(' + i + ',this)">'
        + Catalog.pickerOptionsHtml(cat, r.name)
        + '</select>'
        + '<input type="text" class="form-input wp-pend-custom" data-idx="' + i + '" value="' + escAttr(r.name || '') + '" placeholder="輸入新名稱" style="margin-top:4px;display:' + (isCustom ? 'block' : 'none') + '" oninput="WalletPage._wpSetRow(' + i + ',\'name\',this.value)">'
        + '</div>'
        + '<div class="form-group"><label>數量</label><input type="number" min="1" step="1" class="form-input" value="' + (r.qty || 1) + '" oninput="WalletPage._wpSetRow(' + i + ',\'qty\',this.value)"></div>'
        + '<div class="form-group"><label>實支HK$</label><input type="number" inputmode="decimal" min="0" step="1" class="form-input wp-pend-pay" value="' + escAttr(r.pay) + '" placeholder="例：1756" oninput="WalletPage._wpSetRow(' + i + ',\'pay\',this.value)"></div>'
        + '<div class="form-group"><label>&nbsp;</label><button class="btn-sm btn-danger" onclick="WalletPage._wpDelRow(' + i + ')">刪</button></div>'
        + '</div>';
    });
    el.innerHTML = html;
  }
  /**
   * v2.2.4 切換固定票/品項/自訂：
   * - 記住 _pick（含單價/售價/票種），實支自動 = 成本價 × 數量（未手改過實支才覆寫）
   * - 切換品項一律重帶新品項價格（修殘留舊價 bug）
   */
  function _wpOnItemChange(i, sel) {
    if (!_wpPendRows[i]) return;
    var v = sel.value;
    var customEl = document.querySelector('.wp-pend-custom[data-idx="' + i + '"]');
    var pick = Catalog.resolvePick(v);
    if (!pick) {
      if (customEl) { customEl.style.display = 'block'; customEl.value = ''; }
      _wpPendRows[i]._pick = null; // 自訂 → 清除單價記憶
      _wpPendRows[i]._payManual = false;
      return;
    }
    if (customEl) customEl.style.display = 'none';
    _wpPendRows[i].name = pick.name;
    _wpPendRows[i]._pick = { unitPay: pick.ourPrice, unitPrice: pick.guestPrice, ticketType: pick.ticketType };
    if (!_wpPendRows[i]._payManual && pick.ourPrice > 0) {
      var qty = Math.max(1, parseInt(_wpPendRows[i].qty) || 1);
      _wpPendRows[i].pay = String(pick.ourPrice * qty);
      _syncWpPayInput(i);
    }
    if (customEl) customEl.value = pick.name;
  }
  /** 更新畫面上的實支欄（僅改 value，不重 render 避免打斷輸入） */
  function _syncWpPayInput(i) {
    var el = document.querySelector('.wp-pend-row[data-idx="' + i + '"] .wp-pend-pay');
    if (el) el.value = _wpPendRows[i].pay;
  }
  // 別名以便其它地方復用（MemberPage 預支/帳務開銷會用 _catPickerRow）
  function _catPickerRow(rowIdx, row, onSetRow) {
    var fixed = Catalog.findFixedByName(row.name);
    var presetItem = fixed ? null : Catalog.findByName(row.name);
    var cat = fixed ? fixed.key : (presetItem ? presetItem.id : '__custom__');
    var isCustom = !fixed && !presetItem;
    var html = '<div class="form-group" style="flex:1 1 220px"><label>品名</label><select class="form-input" data-idx="' + rowIdx + '" onchange="' + onSetRow + '.catChange(' + rowIdx + ',this)">'
      + Catalog.pickerOptionsHtml(cat, row.name)
      + '</select>'
      + '<input type="text" class="form-input" data-idx="' + rowIdx + '" value="' + escAttr(row.name || '') + '" placeholder="輸入新名稱" style="margin-top:4px;display:' + (isCustom ? 'block' : 'none') + '" oninput="' + onSetRow + '.setRow(' + rowIdx + ',\'name\',this.value)">'
      + '</div>';
    return html;
  }
  function _wpSetRow(i, k, v) {
    if (!_wpPendRows[i]) return;
    if (k === 'qty') {
      _wpPendRows[i].qty = Math.max(1, parseInt(v) || 1);
      // v2.2.4 數量變更 → 未手改實支時自動重算（成本價 × 數量）
      var pk = _wpPendRows[i]._pick;
      if (pk && !_wpPendRows[i]._payManual && pk.unitPay > 0) {
        _wpPendRows[i].pay = String(pk.unitPay * _wpPendRows[i].qty);
        _syncWpPayInput(i);
      }
    } else if (k === 'pay') {
      _wpPendRows[i].pay = v;
      _wpPendRows[i]._payManual = !!(v && v !== ''); // 手動填過就不再自動覆寫
    } else {
      _wpPendRows[i][k] = v;
      if (k === 'name') _wpPendRows[i]._pick = null; // 手改品名 → 自訂
    }
  }
  function _wpAddRow() { _wpPendRows.push({ name: '', qty: 1, pay: '' }); _renderWpPendRows(); }
  function _wpDelRow(i) {
    if (_wpPendRows.length <= 1) { _wpPendRows = [{ name: '', qty: 1, pay: '' }]; }
    else _wpPendRows.splice(i, 1);
    _renderWpPendRows();
  }

  // ====== v2.2.2 品項主檔管理 ======
  function showCatalogManage() {
    var items = Catalog.getAll().slice().sort(function(a, b) { return a.name.localeCompare(b.name, 'zh'); });
    var html = '';
    // v2.2.3 固定票種區塊（價格由設定頁「門票預設價格」管理，此處唯讀顯示）
    var fixed = Catalog.fixedTickets();
    html += '<h4 class="section-subtitle">門票（設定頁價格）</h4>';
    html += '<table class="data-table" style="width:100%;margin-bottom:12px"><thead><tr><th>名稱</th><th>售價(HK$)</th><th>成本(HK$)</th></tr></thead><tbody>';
    fixed.forEach(function(t) {
      html += '<tr><td>' + esc(t.name) + '</td><td>' + fmtHK(t.guestPrice) + '</td><td>' + fmtHK(t.ourPrice) + '</td></tr>';
    });
    html += '</tbody></table>';
    html += '<p class="section-desc" style="margin-bottom:14px">↑ 水舞間／水上樂園價格請至 <b>設定 → 門票預設價格</b> 修改，墊付下拉會即時同步。下方為其他自訂品項（單價在此管理）。</p>';
    if (items.length === 0) html += '<p style="color:#888;text-align:center;padding:20px">目前沒有品項，請新增。</p>';
    else {
      html += '<div style="max-height:50vh;overflow:auto">';
      html += '<table class="data-table" style="width:100%"><thead><tr><th>名稱</th><th>分類</th><th>預設單價(HK$)</th><th></th></tr></thead><tbody>';
      items.forEach(function(c) {
        html += '<tr>'
          + '<td>' + esc(c.name) + '</td>'
          + '<td>' + esc(Catalog.categoryLabel(c.category)) + '</td>'
          + '<td>' + (c.defaultPriceHK ? fmtHK(c.defaultPriceHK) : '<span style="color:#bbb">未設</span>') + '</td>'
          + '<td><button class="btn-sm" onclick="WalletPage.showEditCatalogItem(\'' + escJs(c.id) + '\')">編輯</button> <button class="btn-sm btn-danger" onclick="WalletPage.delCatalogItem(\'' + escJs(c.id) + '\')">刪除</button></td>'
          + '</tr>';
      });
      html += '</tbody></table>';
      html += '</div>';
    }
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="WalletPage.showAddCatalogItem()">＋ 新增品項</button></div>';
    Modal.open('品項主檔', html);
  }
  function _catCatOptionsHtml(selected) {
    var html = '';
    Object.keys(Catalog.CATEGORY_LABELS).forEach(function(k) {
      var sel = (selected === k) ? ' selected' : '';
      html += '<option value="' + escAttr(k) + '"' + sel + '>' + esc(Catalog.CATEGORY_LABELS[k]) + '</option>';
    });
    return html;
  }
  function showAddCatalogItem() {
    var html = '';
    html += '<p class="section-desc">新增一個常用品項（水舞間／水上樂園門票請至設定頁管理，勿在此重複建立）。儲存後在墊付／預支／帳務開銷下拉可立即選取。</p>';
    html += '<div class="form-group"><label>品項名稱</label><input type="text" id="cm-name" class="form-input" placeholder="例：巴黎人 - 巴黎鐵塔"></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>預設單價 (HK$)</label><input type="number" inputmode="decimal" min="0" step="1" id="cm-price" class="form-input" placeholder="例：988"></div>';
    html += '<div class="form-group"><label>分類</label><select id="cm-cat" class="form-input">' + _catCatOptionsHtml('other') + '</select></div>';
    html += '</div>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="WalletPage.saveCatalogItem()">儲存</button> <button class="btn" onclick="WalletPage.showCatalogManage()">返回列表</button></div>';
    Modal.open('新增品項', html);
  }
  function saveCatalogItem() {
    var name = (document.getElementById('cm-name').value || '').trim();
    var price = parseFloat(document.getElementById('cm-price').value);
    var cat = document.getElementById('cm-cat').value;
    if (!name) { Toast.error('請輸入品項名稱'); return; }
    if (Catalog.findByName(name)) { Toast.error('已有同名品項'); return; }
    var c = Catalog.create({ name: name, defaultPriceHK: isNaN(price) ? 0 : price, category: cat });
    if (!c) { Toast.error('儲存失敗'); return; }
    Toast.success('已新增「' + c.name + '」');
    showCatalogManage();
  }
  function showEditCatalogItem(id) {
    var c = Catalog.getById(id);
    if (!c) { Toast.error('找不到此品項'); return; }
    var html = '';
    html += '<div class="form-group"><label>品項名稱</label><input type="text" id="cm-name" class="form-input" value="' + escAttr(c.name) + '"></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>預設單價 (HK$)</label><input type="number" inputmode="decimal" min="0" step="1" id="cm-price" class="form-input" value="' + (c.defaultPriceHK || 0) + '"></div>';
    html += '<div class="form-group"><label>分類</label><select id="cm-cat" class="form-input">' + _catCatOptionsHtml(c.category) + '</select></div>';
    html += '</div>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="WalletPage.saveEditCatalogItem(\'' + escJs(id) + '\')">儲存</button> <button class="btn" onclick="WalletPage.showCatalogManage()">返回列表</button></div>';
    Modal.open('編輯品項', html);
  }
  function saveEditCatalogItem(id) {
    var name = (document.getElementById('cm-name').value || '').trim();
    var price = parseFloat(document.getElementById('cm-price').value);
    var cat = document.getElementById('cm-cat').value;
    if (!name) { Toast.error('請輸入品項名稱'); return; }
    var r = Catalog.update(id, { name: name, defaultPriceHK: isNaN(price) ? 0 : price, category: cat });
    if (!r) { Toast.error('儲存失敗（可能重名）'); return; }
    Toast.success('已更新');
    showCatalogManage();
  }
  function delCatalogItem(id) {
    var c = Catalog.getById(id);
    if (!c) return;
    Modal.confirm('確定刪除品項「' + c.name + '」？（已建立的預支／帳務紀錄不受影響）', function() {
      Catalog.remove(id);
      Toast.success('已刪除');
      showCatalogManage();
    });
  }
  function savePendAdvance() {
    var tripSel = document.getElementById('wp-pend-trip');
    var tripId = tripSel ? tripSel.value : '';
    var trip = Trips.getById(tripId);
    if (!trip) { Toast.error('請選擇團'); return; }
    if (trip.status !== TRIP_STATUS.ACTIVE) { Toast.error('此團已傳帳/封存，不可新增墊付'); return; }
    var rows = [];
    _wpPendRows.forEach(function(r) {
      var pay = parseFloat(r.pay);
      if (!r.name || isNaN(pay) || pay <= 0) return;
      var pk = r._pick || {};
      rows.push({
        name: (r.name || '').trim(),
        quantity: Math.max(1, parseInt(r.qty) || 1),
        ticketType: pk.ticketType || 'other', // v2.2.4 固定票存 wd-N/wp，帶入帳務後利潤報表才計得進
        unitPrice: pk.unitPrice || 0,          // 售價（向會員收）
        ourPrice: (pk.unitPay != null && pk.unitPay !== '') ? pk.unitPay : null, // 成本單價
        amountHK: pay, payout: pay,            // 實支總額（錢包扣款依據）
      });
    });
    if (rows.length === 0) { Toast.error('請至少填一筆明細（品名＋實支金額）'); return; }
    var btn = document.getElementById('wp-pend-save-btn');
    if (btn) btn.disabled = true;
    var p = PendExps.create({
      tripId: tripId,
      agentId: trip.agentId || '',
      shareholderId: trip.shareholderId || '',
      memberId: (document.getElementById('wp-pend-member') || {}).value || '',
      date: (document.getElementById('wp-pend-date') || {}).value || TWDate.todayStr(),
      note: ((document.getElementById('wp-pend-note') || {}).value || '').trim(),
      rows: rows,
    });
    if (!p) { Toast.error('儲存失敗，請檢查欄位'); if (btn) btn.disabled = false; return; }
    Modal.close();
    Toast.success('墊付已登錄（' + Trips.displayName(trip) + '），錢包已扣實支');
    render();
  }

  function showAddManual() {
    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>方向</label><select id="wm-dir" class="form-input"><option value="in">收入（現鈔進來）</option><option value="out">支出（現鈔出去）</option></select></div>';
    html += '<div class="form-group"><label>分類</label><select id="wm-cat" class="form-input">';
    MANUAL_CATEGORIES.forEach(function(c) {
      if (c.id === 'advance') return; // v2.2.1 墊付（門票代墊等）改走「＋ 墊付」＝預支開銷，之後可帶入帳務細分
      html += '<option value="' + c.id + '">' + c.label + '</option>';
    });
    html += '</select></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>金額(HK$)</label><input type="number" inputmode="decimal" step="1" min="0" id="wm-amt" class="form-input" placeholder="例：50000"></div>';
    html += '<div class="form-group"><label>日期</label><input type="date" id="wm-date" class="form-input" value="' + TWDate.todayStr() + '"></div>';
    html += '</div>';
    html += '<div class="form-group"><label>備註</label><input type="text" id="wm-note" class="form-input" placeholder="例：換匯領鈔"></div>';
    html += '<p class="section-desc">門票／代墊等先買好的支出請用「＋ 墊付」（可選團/會員，之後帶入帳務歸屬）。</p>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="WalletPage.saveManual()">儲存</button></div>';
    Modal.open('錢包補登', html);
  }
  function saveManual() {
    var dir = document.getElementById('wm-dir').value;
    var cat = document.getElementById('wm-cat').value;
    var amt = parseFloat(document.getElementById('wm-amt').value);
    var date = document.getElementById('wm-date').value || TWDate.todayStr();
    var note = document.getElementById('wm-note').value || '';
    if (isNaN(amt) || amt <= 0) { Toast.error('請輸入正確金額'); return; }
    Wallet.addManual({ category: cat, amountHKD: dir === 'out' ? -amt : amt, date: date, note: note });
    Modal.close();
    Toast.success('已補登 ' + (dir === 'out' ? '支出' : '收入') + ' HK$ ' + fmtHK(amt));
    render();
  }

  function showEditManual(id) {
    var w = Wallet.getById(id);
    if (!w || w.type !== 'manual') return;
    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>方向</label><select id="wm-dir" class="form-input"><option value="in"' + ((w.amountHKD || 0) >= 0 ? ' selected' : '') + '>收入（現鈔進來）</option><option value="out"' + ((w.amountHKD || 0) < 0 ? ' selected' : '') + '>支出（現鈔出去）</option></select></div>';
    html += '<div class="form-group"><label>分類</label><select id="wm-cat" class="form-input">';
    MANUAL_CATEGORIES.forEach(function(c) {
      html += '<option value="' + c.id + '"' + (w.category === c.id ? ' selected' : '') + '>' + c.label + '</option>';
    });
    html += '</select></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>金額(HK$)</label><input type="number" inputmode="decimal" step="1" min="0" id="wm-amt" class="form-input" value="' + Math.abs(w.amountHKD || 0) + '"></div>';
    html += '<div class="form-group"><label>日期</label><input type="date" id="wm-date" class="form-input" value="' + (w.date || TWDate.todayStr()) + '"></div>';
    html += '</div>';
    html += '<div class="form-group"><label>備註</label><input type="text" id="wm-note" class="form-input" value="' + escAttr(w.note || '') + '"></div>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="WalletPage.saveEditManual(\'' + id + '\')">儲存</button></div>';
    Modal.open('編輯補登', html);
  }
  function saveEditManual(id) {
    var dir = document.getElementById('wm-dir').value;
    var amt = parseFloat(document.getElementById('wm-amt').value);
    if (isNaN(amt) || amt <= 0) { Toast.error('請輸入正確金額'); return; }
    Wallet.updateManual(id, {
      category: document.getElementById('wm-cat').value,
      amountHKD: dir === 'out' ? -amt : amt,
      date: document.getElementById('wm-date').value || TWDate.todayStr(),
      note: document.getElementById('wm-note').value || '',
    });
    Modal.close();
    Toast.success('補登已更新');
    render();
  }
  function delManual(id) {
    Modal.confirm('確定刪除這筆補登？', function() {
      if (Wallet.removeManual(id)) {
        Toast.success('已刪除');
        render();
      } else {
        Toast.error('自動流水不可刪除（請修改對應帳務）');
      }
    });
  }

  // ===== v2.1.1 開帳編輯/刪除 + 自動流水跳轉來源 =====
  function showEditOpen(id) {
    var w = Wallet.getById(id);
    if (!w || w.type !== 'open') return;
    var html = '';
    html += '<div class="form-group"><label>開帳金額(HK$)</label><input type="number" inputmode="decimal" step="1" min="0" id="wo-amt" class="form-input" value="' + (w.amountHKD || 0) + '"></div>';
    html += '<div class="form-group"><label>開帳日期</label><input type="date" id="wo-date" class="form-input" value="' + (w.date || TWDate.todayStr()) + '"></div>';
    html += '<div class="form-group"><label>備註</label><input type="text" id="wo-note" class="form-input" value="' + escAttr(w.note || '') + '"></div>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="WalletPage.saveEditOpen(\'' + id + '\')">儲存</button></div>';
    Modal.open('編輯開帳', html);
  }
  function saveEditOpen(id) {
    var amt = parseFloat(document.getElementById('wo-amt').value);
    if (isNaN(amt) || amt < 0) { Toast.error('請輸入正確金額'); return; }
    Wallet.updateOpen(id, {
      amountHKD: amt,
      date: document.getElementById('wo-date').value || TWDate.todayStr(),
      note: document.getElementById('wo-note').value || '',
    });
    Modal.close();
    Toast.success('開帳已更新');
    render();
  }
  function delOpen(id) {
    Modal.confirm('確定刪除開帳？僅限錢包只有開帳這一筆時可刪（刪後回到未開帳，可重新開帳）。', function() {
      if (Wallet.removeOpen(id)) {
        Toast.success('已刪除開帳，請重新開帳');
        render();
      } else {
        Toast.error('錢包已有其他流水，不可刪開帳（請改用「編輯」修正金額）');
      }
    });
  }
  /** 跳到來源帳務編輯（改完存檔，錢包流水自動跟著更新） */
  function gotoSource(wid) {
    var w = Wallet.getById(wid);
    if (!w || !w.refId) { Toast.error('找不到來源'); return; }
    var tx = (typeof MemberTxs !== 'undefined') ? MemberTxs.getById(w.refId) : null;
    if (!tx) { Toast.error('來源帳務已不存在（流水將自動清理）'); try { Wallet.reconcileAll(); } catch (e) {} render(); return; }
    Router.go('member');
    MemberPage.selectTrip(tx.tripId);
    setTimeout(function() {
      try { MemberPage.editTx(tx.id); } catch (e) { Toast.warning('此帳務在待結帳/封存中，不可編輯'); }
    }, 150);
  }
  /** 跳到該團的預支開銷卡（可編輯/刪除預支單） */
  function gotoPend(wid) {
    var w = Wallet.getById(wid);
    if (!w || !w.refId) { Toast.error('找不到來源'); return; }
    var p = (typeof PendExps !== 'undefined') ? PendExps.getById(w.refId) : null;
    if (!p) { Toast.error('預支單已不存在（流水將自動清理）'); try { Wallet.reconcilePends(); } catch (e) {} render(); return; }
    Router.go('member');
    MemberPage.selectTrip(p.tripId);
    Toast.info('已切到 ' + (typeof Trips !== 'undefined' ? Trips.displayName(p.tripId) : p.tripId) + '，預支卡可編輯/刪除');
  }

  // 錢包資料同步後自動刷新（目前在錢包頁時）
  EventBus.on(EVENTS.WALLET_TXS_LOADED, function() {
    if (typeof Router !== 'undefined' && Router.getCurrent() === 'wallet') {
      try { render(); } catch (e) {}
    }
  });

  return {
    render: render, toggleDetail: toggleDetail,
    _enterBatch: _enterBatch, _exitBatch: _exitBatch, _itemTap: _itemTap, _doBatchDelete: _doBatchDelete, // v2.4.8
    saveOpen: saveOpen,
    showAddManual: showAddManual, saveManual: saveManual,
    showEditManual: showEditManual, saveEditManual: saveEditManual, delManual: delManual,
    showAddLoan: showAddLoan, saveLoan: saveLoan, repayLoan: repayLoan, saveRepay: saveRepay,
    showEditLoan: showEditLoan, saveEditLoan: saveEditLoan, delLoan: delLoan, delRepay: delRepay,
    showEditOpen: showEditOpen, saveEditOpen: saveEditOpen, delOpen: delOpen, // v2.1.1
    gotoSource: gotoSource, gotoPend: gotoPend, // v2.1.1
    showAddPendAdvance: showAddPendAdvance, savePendAdvance: savePendAdvance, // v2.2.1 墊付
    _onPendTripChange: _onPendTripChange, _renderWpPendRows: _renderWpPendRows,
    _wpSetRow: _wpSetRow, _wpAddRow: _wpAddRow, _wpDelRow: _wpDelRow,
    // v2.2.2 品項主檔管理
    showCatalogManage: showCatalogManage, showAddCatalogItem: showAddCatalogItem, saveCatalogItem: saveCatalogItem,
    showEditCatalogItem: showEditCatalogItem, saveEditCatalogItem: saveEditCatalogItem, delCatalogItem: delCatalogItem,
    _catPickerRow: _catPickerRow, _wpOnItemChange: _wpOnItemChange,
  };
})();


// === src/pages/room.js ===
/**
 * pages/room.js — 房务管理页
 * 体系→酒店→房型三级联动 + KPI + 状态分布 + 费用圆环 + 分页搜索排序表格 + 代理级折抵
 * 依赖: core/constants.js, core/escape.js, calc/filters.js, calc/stats.js, core/datetime.js, core/router.js, data/agents.js, data/bookings.js, data/hotelConfig.js, data/memberTxs.js, data/members.js, data/settings.js, data/shareholders.js, data/trips.js, ui/modal.js, ui/icons.js
 */
var RoomPage = (function() {
  var _selectedTrip = null;
  var _page = 1;
  var _search = '';
  var _sortField = 'checkIn';
  var _sortAsc = false;
  var _filterFee = '';
  var _searchTimer = null;
  var PAGE_SIZE = 10;
  var _showFeePanel = false;
  var _feeMode = 'personal'; /* 'personal' | 'total' */
  var STATUS_LABELS = {
    'pending': '待確認', 'confirmed': '已確認', 'checked-in': '已入住',
    'checked-out': '已退房', 'cancelled': '已取消'
  };
  var FEE_LABELS = {
    'auto': '自動', 'free': '免費', 'paid': '收費', 'discount': '折扣'
  };

  var ICONS = {
    nights: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    threshold: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
    free: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    paid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  };

  function render() {
    var allTrips = Trips.getAll();
    var sealedTripIds = new Set(allTrips.filter(function(t) { return t.status === TRIP_STATUS.SEALED; }).map(function(t) { return t.id; }));

    /* 若當前選中的團已被封存，清除選擇 */
    if (_selectedTrip && sealedTripIds.has(_selectedTrip)) {
      _selectedTrip = null;
    }

    var allBookings = filterActiveBookings(Bookings.getAll(), allTrips);
    var displayBookings = _selectedTrip ? allBookings.filter(function(b) { return b.tripId === _selectedTrip; }) : allBookings;

    /* === KPI 計算 === */
    var totalNights = 0;
    var totalThreshold = 0;
    var freeCount = 0;
    var paidCount = 0;
    var discountCount = 0;
    var statusCounts = { 'pending': 0, 'confirmed': 0, 'checked-in': 0, 'checked-out': 0, 'cancelled': 0 };

    displayBookings.forEach(function(b) {
      var n = b.nights || 1;
      totalNights += n;
      totalThreshold += (b.threshold || 0) * n;
      if (b.feeType === 'free') freeCount++;
      if (b.feeType === 'paid') paidCount++;
      if (b.feeType === 'discount') discountCount++;
      if (statusCounts[b.status] !== undefined) statusCounts[b.status]++;
    });

    /* 計算代理折抵所需數據（提前，供雙欄佈局使用） */
    var tripBookings = _selectedTrip ? Bookings.getByTrip(_selectedTrip) : [];
    var mtxs = _selectedTrip ? MemberTxs.getByTrip(_selectedTrip) : [];
    var agentIds = new Set(tripBookings.map(function(b) { return b.agentId; }));

    var html = '';

    /* === 頁面標頭 === */
    html += '<div class="card">';
    html += '<div class="card-header" style="justify-content:center;gap:16px;"><h3>房務管理</h3>';
    html += '<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">';
    // v1.9.0 團選擇器改搜尋式彈窗
    var _rCurTrip = _selectedTrip ? Trips.getById(_selectedTrip) : null;
    var _rTripBtnLabel = _rCurTrip ? Trips.displayName(_rCurTrip) : '全部訂房';
    html += '<button type="button" class="trip-select-btn" onclick="TripPicker.open(\'' + escJs(_selectedTrip || '') + '\', RoomPage.selectTrip)">' + esc(_rTripBtnLabel) + ' ▾</button>';
    html += '<button class="btn" style="background:var(--bg-tertiary);color:var(--text-primary);" onclick="RoomPage.showHotelConfig()">\u2699\uFE0F 酒店設定</button>';
    if (_selectedTrip) {
      html += '<button class="btn btn-primary" onclick="RoomPage.showAddBooking()">+ 新增訂房</button>';
      html += '<button class="btn" style="background:var(--accent);color:#fff;" onclick="RoomPage.toggleFeePanel()">' + (_showFeePanel ? '收起費用' : '費用收取') + '</button>';
      html += '<button class="btn" style="background:var(--success);color:#fff;" onclick="RoomPage.goProfit()">利潤結算</button>';
    }
    html += '</div></div>';

    /* === KPI 卡片 === */
    html += '<div class="kpi-grid">';
    html += kpiCard('總房晚數', totalNights, 'active', ICONS.nights);
    html += kpiCard('總門檻(萬)', formatNum(totalThreshold / 10000), 'highlight', ICONS.threshold);
    html += kpiCard('免費房', freeCount, 'normal', ICONS.free);
    html += kpiCard('收費房', paidCount, 'warning', ICONS.paid);
    html += kpiCard('折扣房', discountCount, 'normal', ICONS.paid);
    html += '</div>';

    /* === 費用公式提示（僅展開面板時顯示）=== */
    if (_selectedTrip && _showFeePanel) {
      var settings = Settings.load ? Settings.load() : {};
      var _roomFeeRate = (settings && settings.roomFeeRate) || 150;
      html += '<div style="padding:8px 12px;font-size:var(--font-size-sm);color:var(--text-secondary);background:var(--bg-tertiary);border-radius:var(--radius);margin-bottom:12px;">';
      if (_feeMode === 'total') {
        html += '\u7E3D\u76E4\u5236\uFF1A\u5168\u5718\u6D17\u78BC \u2265 \u5168\u5718\u9580\u6A2B \u2192 \u5168\u90E8\u514D\u8CBB | \u672A\u9054\u6A19\u5247\u7528\u500B\u4EBA\u5236\u8A08\u7B97 | \u5BA2\u6536 = (\u5269\u9918 \u00D7 \u9580\u6A2B \u00F7 10\u842C) \u00D7 ' + _roomFeeRate + ' \u5143';
      } else {
        html += '\u500B\u4EBA\u5236\uFF1A\u6298\u62B5 = floor(\u6703\u54E1\u6D17\u78BC \u00F7 \u6BCF\u665A\u9580\u6A2B) | \u5269\u9918 = \u623F\u665A \u2212 \u6298\u62B5 | \u5BA2\u6536 = (\u5269\u9918 \u00D7 \u9580\u6A2B \u00F7 10\u842C) \u00D7 ' + _roomFeeRate + ' \u5143';
      }
      html += '</div>';
    }

    /* === 狀態分佈 + 代理折抵（雙欄）=== */
    var chartRowClass = (_selectedTrip && agentIds.size > 0) ? 'rm-chart-row rm-chart-row--double' : 'rm-chart-row rm-chart-row--single';
    html += '<div class="' + chartRowClass + '">';
    html += buildStatusCard(statusCounts, displayBookings.length);
    if (_selectedTrip && agentIds.size > 0) {
      html += buildAgentQuotaCard(mtxs, tripBookings, agentIds);
    }
    html += '</div>';

    /* === 快速篩選 === */
    html += '<div class="rm-quick-filters">';
    html += filterBtn('全部', '', displayBookings.length);
    html += filterBtn('免費', 'free', freeCount);
    html += filterBtn('收費', 'paid', paidCount);
    html += '</div>';

    /* === 搜索欄 === */
    html += '<div class="rm-search-bar">';
    html += '<input type="text" id="rm-search-input" class="form-input" placeholder="搜索客人、代理、酒店..." value="' + escapeAttr(_search) + '" oninput="RoomPage.onSearch(this.value)">';
    html += '</div>';

    /* === 分頁表格 === */
    var filtered = displayBookings;
    if (_filterFee) {
      filtered = filtered.filter(function(b) { return b.feeType === _filterFee; });
    }
    if (_search) {
      var q = _search.toLowerCase();
      filtered = filtered.filter(function(b) {
        return (b.guestName || '').toLowerCase().indexOf(q) >= 0 ||
               (b.hotel || '').toLowerCase().indexOf(q) >= 0 ||
               (b.roomType || '').toLowerCase().indexOf(q) >= 0 ||
               (b.agentId || '').toLowerCase().indexOf(q) >= 0;
      });
    }
    /* 排序 */
    var sorted = filtered.slice().sort(function(a, b) {
      var av = a[_sortField] || '';
      var bv = b[_sortField] || '';
      if (typeof av === 'number' && typeof bv === 'number') {
        return _sortAsc ? av - bv : bv - av;
      }
      return _sortAsc ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
    });

    var totalPages = Math.ceil(sorted.length / PAGE_SIZE) || 1;
    if (_page > totalPages) _page = totalPages;
    var startIdx = (_page - 1) * PAGE_SIZE;
    var pageItems = sorted.slice(startIdx, startIdx + PAGE_SIZE);

    if (pageItems.length === 0) {
      html += Icons.empty('無訂房記錄', '點擊「新增訂房」為會員建立訂房');
    } else {
      /* v1.6.0 手機卡片式列表（桌面上仍顯示表格） */
      html += '<div class="m-cards">';
      pageItems.forEach(function(b) {
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        html += '<div class="m-card">';
        html += '<div class="m-card-head"><span class="m-card-title">' + escHtml(b.guestName || '(未填客人)') + '</span><span>' + statusCell(b) + ' ' + feeBadge(b) + '</span></div>';
        html += '<div class="m-card-grid">';
        html += '<div><div class="k">代理</div><div class="v">' + escHtml(agent ? agent.name : (b.agentId || '-')) + '</div></div>';
        html += '<div><div class="k">會員</div><div class="v">' + (member ? escHtml(member.name) : '<span style="color:var(--text-muted)">純住宿</span>') + '</div></div>';
        html += '<div class="full"><div class="k">酒店 / 房型</div><div class="v">' + escHtml((b.hotel || '-') + (b.roomType ? ' · ' + b.roomType : '')) + '</div></div>';
        html += '<div class="full"><div class="k">日期</div><div class="v">' + escHtml(b.checkIn || '?') + ' → ' + escHtml(b.checkOut || '?') + '（' + (b.nights || 1) + ' 晚）</div></div>';
        html += '<div><div class="k">每晚門檻</div><div class="v">' + ((b.threshold || 0) / 10000).toFixed(0) + ' 萬</div></div>';
        html += '<div><div class="k">確認號</div><div class="v">' + escHtml(b.confirmNo || '-') + '</div></div>';
        html += '</div>';
        html += '<div class="m-card-actions">';
        if (!b.memberId) {
          html += '<button class="btn-sm" style="background:var(--accent);color:#fff;" onclick="RoomPage.linkMember(\'' + b.id + '\')">關聯會員</button>';
        }
        html += '<button class="btn-sm" onclick="RoomPage.editBooking(\'' + b.id + '\')">編輯</button>';
        html += '<button class="btn-sm btn-danger" onclick="RoomPage.delBooking(\'' + b.id + '\')">刪除</button>';
        html += '</div>';
        html += '</div>';
      });
      html += '</div>';

      html += '<div class="table-wrapper m-only-table"><table class="data-table rm-table"><thead><tr>';
      html += sortTH('客人', 'guestName');
      html += '<th>會員</th>';
      html += '<th>代理</th>';
      html += sortTH('酒店', 'hotel');
      html += '<th>房型</th>';
      html += sortTH('入住', 'checkIn');
      html += sortTH('退房', 'checkOut');
      html += '<th class="num">晚</th>';
      html += '<th class="num">門檻</th>';
      html += '<th>狀態</th>';
      html += '<th>確認號</th>';
      html += '<th>費用</th>';
      html += '<th>操作</th>';
      html += '</tr></thead><tbody>';
      pageItems.forEach(function(b) {
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        html += '<tr>';
        html += '<td class="fw-semibold">' + escHtml(b.guestName || '') + '</td>';
        html += '<td>' + (member ? escHtml(member.name) + '<br><span class="text-muted">' + escHtml(member.id) + '</span>' : '<span class="text-muted">-</span>') + '</td>';
        html += '<td>' + (agent ? agent.name : b.agentId || '') + '</td>';
        html += '<td>' + escHtml(b.hotel || '') + '</td>';
        html += '<td>' + escHtml(b.roomType || '') + '</td>';
        html += '<td>' + (b.checkIn || '') + '</td>';
        html += '<td>' + (b.checkOut || '') + '</td>';
        html += '<td class="num">' + (b.nights || 1) + '</td>';
        html += '<td class="num">' + ((b.threshold || 0) / 10000).toFixed(0) + '萬</td>';
    html += '<td>' + statusCell(b) + '</td>';
        html += '<td>' + escHtml(b.confirmNo || '') + '</td>';
        html += '<td>' + feeBadge(b) + '</td>';
        html += '<td>';
        if (!b.memberId) {
          html += '<button class="btn-sm" style="padding:1px 6px;font-size:11px;background:var(--accent);color:#fff;" onclick="RoomPage.linkMember(\'' + b.id + '\')">關聯</button> ';
        }
        html += '<button class="btn-sm" onclick="RoomPage.editBooking(\'' + b.id + '\')">編輯</button> ';
        html += '<button class="btn-sm btn-danger" onclick="RoomPage.delBooking(\'' + b.id + '\')">刪</button>';
        html += '</td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>'

      /* 分頁控制 */
      html += '<div class="paginator">';
      html += '<span class="paginator-info">第 ' + _page + '/' + totalPages + ' 頁，共 ' + sorted.length + ' 筆</span>';
      html += '<div class="paginator-btns">';
      html += '<button class="btn-sm" onclick="RoomPage.goPage(1)" ' + (_page === 1 ? 'disabled' : '') + '>首頁</button> ';
      html += '<button class="btn-sm" onclick="RoomPage.goPage(' + (_page - 1) + ')" ' + (_page === 1 ? 'disabled' : '') + '>上一頁</button> ';
      html += '<button class="btn-sm" onclick="RoomPage.goPage(' + (_page + 1) + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>下一頁</button> ';
      html += '<button class="btn-sm" onclick="RoomPage.goPage(' + totalPages + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>末頁</button>';
      html += '</div></div>';
    }

    /* === 費用收取面板（方案B：表格下方面板展開） === */
    if (_showFeePanel && _selectedTrip) {
      html += renderFeePanel();
    }

    html += '</div>';
    var container = document.getElementById('page-room');
    if (container) container.innerHTML = html;

    /* 搜索框重新焦焦點 */
    if (_search && document.getElementById('rm-search-input')) {
      var inp = document.getElementById('rm-search-input');
      inp.focus();
      inp.setSelectionRange(inp.value.length, inp.value.length);
    }
  }

  /* ===== Helper: KPI 卡片 ===== */
  function kpiCard(label, value, type, iconSvg) {
    return '<div class="kpi-card kpi-' + type + '"><div class="kpi-icon">' + iconSvg + '</div><div class="kpi-body"><div class="kpi-value">' + value + '</div><div class="kpi-label">' + label + '</div></div></div>';
  }

  /* ===== Helper: 可排序表頭 ===== */
  function sortTH(label, field) {
    var arrow = _sortField === field ? (_sortAsc ? ' \u2191' : ' \u2193') : '';
    return '<th style="cursor:pointer;" onclick="RoomPage.sortByCol(\'' + field + '\')">' + label + arrow + '</th>';
  }

  /* ===== Helper: 狀態分佈卡片 ===== */
  function buildStatusCard(statusCounts, total) {
    var rows = [
      { label: '待確認', key: 'pending',       color: 'var(--warning)' },
      { label: '已確認', key: 'confirmed',     color: 'var(--info)' },
      { label: '已入住', key: 'checked-in',    color: 'var(--accent)' },
      { label: '已退房', key: 'checked-out',   color: 'var(--success)' },
      { label: '已取消', key: 'cancelled',     color: 'var(--danger)' },
    ];
    var html = '<div class="rm-chart-card">';
    html += '<h4 class="rm-chart-title">狀態分佈</h4>';
    rows.forEach(function(r) {
      var count = statusCounts[r.key] || 0;
      var pct = total > 0 ? (count / total * 100) : 0;
      html += '<div class="rm-dist-row">';
      html += '<div class="rm-dist-info">';
      html += '<span class="rm-dist-label"><span class="rm-dist-dot" style="background:' + r.color + ';"></span>' + r.label + '</span>';
      html += '<span class="rm-dist-count">' + count + ' <span class="rm-dist-pct">(' + pct.toFixed(0) + '%)</span></span>';
      html += '</div>';
      html += '<div class="rm-dist-bar"><div class="rm-dist-fill" style="width:' + pct.toFixed(1) + '%;background:' + r.color + ';"></div></div>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  /* ===== Helper: 費用圓環卡片 ===== */
  function buildFeeDonut(freeCount, paidCount) {
    var total = freeCount + paidCount;
    var html = '<div class="rm-chart-card">';
    html += '<h4 class="rm-chart-title">費用分佈</h4>';
    if (total === 0) {
      html += Icons.empty('暫無數據');
    } else {
      var freePct = (freeCount / total * 100).toFixed(1);
      var paidPct = (paidCount / total * 100).toFixed(1);
      html += '<div class="rm-donut-wrap">';
      html += '<div class="rm-donut" style="background:conic-gradient(var(--success) 0% ' + freePct + '%, var(--warning) ' + freePct + '% 100%);">';
      html += '<div class="rm-donut-center"><span class="rm-donut-num">' + total + '</span><span class="rm-donut-label">總房數</span></div>';
      html += '</div>';
      html += '<div class="rm-donut-legend">';
      html += '<div class="rm-legend-item"><span class="rm-legend-dot" style="background:var(--success);"></span><span>免費房 ' + freeCount + ' (' + freePct + '%)</span></div>';
      html += '<div class="rm-legend-item"><span class="rm-legend-dot" style="background:var(--warning);"></span><span>收費房 ' + paidCount + ' (' + paidPct + '%)</span></div>';
      html += '</div>';
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  /* ===== Helper: 代理折抵卡片（供雙欄佈局右側使用） ===== */
  function buildAgentQuotaCard(mtxs, tripBookings, agentIds) {
    var html = '<div class="rm-chart-card">';
    html += '<h4 class="rm-chart-title">代理級折抵</h4>';
    html += '<div class="table-wrapper"><table class="data-table rm-quota-table"><thead><tr>';
    html += '<th>代理</th><th class="num">總洗碼(萬)</th><th class="num">總門檻</th><th>達標</th><th>配額</th>';
    html += '</tr></thead><tbody>';
    agentIds.forEach(function(aid) {
      var quota = calcAgentQuota(aid, mtxs, tripBookings, { tripId: (mtxs[0] && mtxs[0].tripId) || null });
      var agent = Agents.getById(aid);
      var pct = quota.totalThreshold > 0 ? Math.min(100, (quota.totalWashRaw / quota.totalThreshold) * 100) : 0;
      html += '<tr>';
      html += '<td>' + (agent ? agent.name : aid) + '</td>';
      html += '<td class="num">' + quota.totalWashCode.toFixed(0) + '</td>';
      html += '<td class="num">' + (quota.totalThreshold / 10000).toFixed(0) + '萬</td>';
      html += '<td>' + (!quota.hasBookings ? '<span class="text-muted">— 無訂房</span>' : (quota.isMet ? '<span class="text-success-strong">' + ICONS.check + ' 達標</span>' : '<span class="text-danger-strong">未達標</span>')) + '</td>';
      var barColor = quota.isMet ? 'var(--success)' : (pct < 50 ? 'var(--accent)' : 'var(--warning)');
      html += '<td>';
      html += '<div style="display:flex;align-items:center;gap:10px;min-width:180px;">';
      html += '<div class="quota-bar" class="flex-1"><div class="quota-fill" style="width:' + pct + '%;background:' + barColor + ';"></div></div>';
      html += '<span class="text-sm-nowrap">' + quota.totalWashCode.toFixed(0) + '萬 / ' + (quota.totalThreshold/10000).toFixed(0) + '萬</span>';
      html += '</div>';
      html += '</td>';
      html += '</tr>';
    });
    html += '</tbody></table></div>'
    return html;
  }

  /* ===== Helper: 篩選按鈕 ===== */
  function filterBtn(label, fee, count) {
    var active = _filterFee === fee;
    return '<button class="rm-filter-btn' + (active ? ' active' : '') + '" onclick="RoomPage.setFeeFilter(\'' + fee + '\')">' + label + ' (' + count + ')</button>';
  }

  /* ===== Helper: 數字格式 ===== */
  function formatNum(n) {
    if (n === 0) return '0';
    var v = Math.round(n * 1000) / 1000;
    if (Math.abs(v - Math.round(v)) < 1e-6) return Math.round(v).toLocaleString();
    return v.toLocaleString(undefined, { maximumFractionDigits: 3 });
  }

  /* ===== Helper: HTML 轉義 ===== */
  function escapeAttr(s) {
    return String(s || '').replace(/"/g, '&quot;');
  }

  /* ===== 分頁/搜索/排序 ===== */
  function goPage(n) { _page = n; render(); }
  function onSearch(term) {
    _search = term;
    _page = 1;
    if (_searchTimer) clearTimeout(_searchTimer);
    _searchTimer = setTimeout(function() { render(); }, 300);
  }
  function sortByCol(field) {
    if (_sortField === field) { _sortAsc = !_sortAsc; } else { _sortField = field; _sortAsc = true; }
    _page = 1;
    render();
  }
  function setFeeFilter(fee) { _filterFee = fee; _page = 1; render(); }

  /* ===== 狀態/費用標籤 ===== */
  function statusBadge(status) {
    var map = {
      'pending': '<span class="badge badge-pending">待確認</span>',
      'confirmed': '<span class="badge badge-confirmed">已確認</span>',
      'checked-in': '<span class="badge badge-info">已入住</span>',
      'checked-out': '<span class="badge badge-success">已退房</span>',
      'cancelled': '<span class="badge badge-danger">已取消</span>',
      'overdue-checkout': '<span class="badge badge-danger" title="已過退房日但未手動退房">' + ICONS.alert + ' 逾期未退</span>',
    };
    return map[status] || status;
  }

  /* 根據實際日期判斷顯示狀態 */
  function getDisplayStatus(b) {
    if (b.status === 'cancelled') return 'cancelled';
    if (b.status === 'checked-out') return 'checked-out';

    var todayStr = TWDate.todayStr();

    /* 已過退房日但未手動退房 → 逾期提醒 */
    if (b.checkOut && b.checkOut < todayStr && b.status !== 'checked-out') {
      return 'overdue-checkout';
    }

    /* 今日在入住期間內 → 自動顯示已入住 */
    if (b.checkIn && b.checkOut &&
        b.checkIn <= todayStr && b.checkOut >= todayStr) {
      return 'checked-in';
    }

    /* 尚未到入住日 → 保持原狀態 */
    return b.status;
  }

  /* 狀態顯示輔助：自動偵測 vs 手動設定 */
  function statusCell(b) {
    var displayStatus = getDisplayStatus(b);
    var badge = statusBadge(displayStatus);

    /* 標記自動偵測 */
    if (displayStatus !== b.status && displayStatus === 'checked-in') {
      badge += ' <span class="text-muted text-2xs" title="系統依日期自動判斷，實際狀態：' + (STATUS_LABELS[b.status] || b.status) + '">[自動]</span>';
    }

    /* 逾期退房可手動設為已退房 */
    if (displayStatus === 'overdue-checkout') {
      badge += ' <button class="btn-sm" style="padding:0 4px;font-size:10px;margin-left:4px;" onclick="RoomPage.setCheckedOut(\'' + b.id + '\')" title="手動設為已退房">設退房</button>';
    }

    return badge;
  }

  function feeBadge(b) {
    if (b.feeType === 'free') return '<span class="badge badge-success">免費</span>';
    if (b.feeType === 'paid') return '<span class="badge badge-danger">收費</span>';
    if (b.feeType === 'discount') return '<span class="badge badge-warning">優待' + (b.discountRate ? (b.discountRate * 10) + '折' : '') + '</span>';
    return '<span class="badge badge-info">自動</span>';
  }

  function selectTrip(tripId) { _selectedTrip = tripId || null; _page = 1; render(); }

  function goFees() { window._targetTripId = _selectedTrip; Router.go('fees'); }
  function goProfit() { window._targetTripId = _selectedTrip; Router.go('profit'); }

  /* ===== 新增訂房 ===== */
  function showAddBooking() {
    var trip = Trips.getById(_selectedTrip);
    if (!trip) return;
    var agents = Agents.getAll();

    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>客人姓名</label><input type="text" id="bk-guest" class="form-input"></div>';
    html += '<div class="form-group"><label>代理(必選)</label>';
    html += '<select id="bk-agent" class="form-input">';
    // v1.9.0 預選當前團的所屬代理（建團時已選過，不必重選）
    var defaultAgentId = trip.agentId || '';
    agents.forEach(function(a) {
      var sel = a.id === defaultAgentId ? ' selected' : '';
      html += '<option value="' + a.id + '"' + sel + '>' + esc(a.name) + '</option>';
    });
    html += '</select></div>';
    html += '</div>';

    /* 三級聯動 */
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>體系</label>';
    html += '<select id="bk-casino" class="form-input" onchange="RoomPage.onCasinoChange()">';
    html += '<option value="">選擇...</option>';
    HotelConfig.getCasinos().forEach(function(c) { html += '<option value="' + c + '">' + c + '</option>'; });
    html += '</select></div>';
    html += '<div class="form-group"><label>酒店</label>';
    html += '<select id="bk-hotel" class="form-input" onchange="RoomPage.onHotelChange()"><option value="">先選體系</option></select></div>';
    html += '<div class="form-group"><label>房型</label>';
    html += '<select id="bk-room" class="form-input"><option value="">先選酒店</option></select></div>';
    html += '</div>';

    html += '<div class="form-row">';
    html += '<div class="form-group"><label>入住日</label><input type="date" id="bk-checkin" class="form-input" value="' + localYmd(0) + '"></div>';
    html += '<div class="form-group"><label>退房日</label><input type="date" id="bk-checkout" class="form-input" value="' + localYmd(1) + '"></div>';
    html += '<div class="form-group"><label>確認號</label><input type="text" id="bk-confirm" class="form-input" placeholder="選填"></div>';
    html += '</div>';

    // v1.8.0 關聯會員改搜尋選擇器（原生 select 在手機上是全螢幕滾輪，難用）
    html += '<div class="form-group"><label>關聯會員(可選)</label>';
    html += '<div class="member-picker" style="position:relative;">';
    html += '<input type="hidden" id="bk-member" value="">';
    html += '<input type="text" id="bk-member-search" class="form-input" placeholder="搜尋會員（留空 = 純住宿不關聯）..." onfocus="RoomPage._onPkMemberFocus(this,\'bk\')" oninput="RoomPage._onPkMemberInput(\'bk\',this.value)" autocomplete="off">';
    html += '<div id="bk-member-dropdown" class="member-picker-dropdown" style="display:none;"></div>';
    html += '</div></div>';

    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" id="bk-save-btn" onclick="RoomPage.saveBooking()">儲存</button></div>';
    Modal.open('新增訂房', html);
  }

  // v1.8.0 訂房/編輯訂房表單會員搜尋選擇器（prefix: 'bk' 或 'eb'）
  function _onPkMemberFocus(el, prefix) {
    if (el && el.select) setTimeout(function() { try { el.select(); } catch (e) {} }, 60);
    _renderPkMemberDD(prefix, '');
  }
  function _onPkMemberInput(prefix, val) {
    _renderPkMemberDD(prefix, val);
  }
  function _renderPkMemberDD(prefix, query) {
    var dd = document.getElementById(prefix + '-member-dropdown');
    if (!dd) return;
    var members = Members.getAll();
    var q = (query || '').trim().toLowerCase();
    var filtered = members.filter(function(m) {
      if (!q) return true;
      return (m.name || '').toLowerCase().indexOf(q) >= 0 || (m.id || '').toLowerCase().indexOf(q) >= 0;
    });
    var html = '<div class="member-picker-item" onclick="RoomPage._selectPkMember(\'' + prefix + '\',\'\')">' +
      '<span class="member-picker-name">純住宿(不關聯)</span><span class="member-picker-rate">清除選擇</span></div>';
    if (filtered.length === 0) {
      html += '<div class="member-picker-item member-picker-empty">找不到會員</div>';
    } else {
      html += filtered.slice(0, 20).map(function(m) {
        return '<div class="member-picker-item" onclick="RoomPage._selectPkMember(\'' + prefix + '\',\'' + escJs(m.id) + '\')">'
          + '<span class="member-picker-name">' + esc(m.name || '') + '</span>'
          + '<span class="member-picker-id">' + esc(m.id) + '</span>'
          + '</div>';
      }).join('');
    }
    dd.innerHTML = html;
    dd.style.display = 'block';
  }
  function _selectPkMember(prefix, memberId) {
    var hidden = document.getElementById(prefix + '-member');
    var search = document.getElementById(prefix + '-member-search');
    var dd = document.getElementById(prefix + '-member-dropdown');
    var m = memberId ? Members.getById(memberId) : null;
    if (hidden) hidden.value = memberId || '';
    if (search) search.value = m ? ((m.name || '') + ' (' + (m.id || '') + ')') : '';
    if (dd) dd.style.display = 'none';
    // v1.9.0 新增訂房時選了關聯會員 → 客人姓名空著就自動帶會員名（免打字、免打錯字）
    if (prefix === 'bk' && m) {
      var guest = document.getElementById('bk-guest');
      if (guest && !guest.value.trim()) guest.value = m.name || '';
    }
  }

  function onCasinoChange() {
    var casino = document.getElementById('bk-casino').value;    var hotels = HotelConfig.getHotels(casino);
    var select = document.getElementById('bk-hotel');
    select.innerHTML = '<option value="">選擇...</option>' + hotels.map(function(h) { return '<option value="' + h + '">' + h + '</option>'; }).join('');
    document.getElementById('bk-room').innerHTML = '<option value="">先選酒店</option>';
  }

  function onHotelChange() {
    var casino = document.getElementById('bk-casino').value;
    var hotel = document.getElementById('bk-hotel').value;
    var rooms = HotelConfig.getRooms(casino, hotel);
    var select = document.getElementById('bk-room');
    select.innerHTML = '<option value="">選擇...</option>' + rooms.map(function(r) {
      return '<option value="' + r.code + '" data-threshold="' + r.threshold + '">' + r.room + ' (' + (r.threshold / 10000) + '萬)</option>';
    }).join('');
  }

  var _bkSaving = false; // v1.7.0 防重複提交鎖
  var _ebSaving = false; // v1.8.0 編輯訂房防重複提交鎖

  function saveBooking() {
    if (_bkSaving) return; // v1.7.0 防重複提交
    var trip = Trips.getById(_selectedTrip);
    if (!trip) return;
    var roomSelect = document.getElementById('bk-room');
    var selectedOption = roomSelect.options[roomSelect.selectedIndex];
    var threshold = selectedOption ? parseInt(selectedOption.getAttribute('data-threshold')) : 0;

    var agentId = document.getElementById('bk-agent').value;
    var agent = Agents.getById(agentId);
    var memberId = document.getElementById('bk-member').value || null;

    /* v1.6.0 必填驗證（避免存入空資料） */
    var guestName = (document.getElementById('bk-guest').value || '').trim();
    var checkIn = document.getElementById('bk-checkin').value;
    var checkOut = document.getElementById('bk-checkout').value;
    if (!guestName) { Toast.error('請填客人姓名'); return; }
    if (!roomSelect.value) { Toast.error('請選擇體系 → 酒店 → 房型'); return; }
    if (!checkIn || !checkOut) { Toast.error('請填入住日與退房日'); return; }
    if (checkOut <= checkIn) { Toast.error('退房日必須晚於入住日'); return; }

    _bkSaving = true;
    var btn = document.getElementById('bk-save-btn');
    if (btn) { btn.disabled = true; btn.textContent = '儲存中...'; }

    Bookings.create({
      tripId: _selectedTrip,
      memberId: memberId,
      guestName: guestName,
      agentId: agentId,
      shareholderId: agent ? agent.shareholderId : trip.shareholderId,
      hotel: document.getElementById('bk-hotel').value,
      roomType: roomSelect.options[roomSelect.selectedIndex] ? roomSelect.options[roomSelect.selectedIndex].text.split(' (')[0] : '',
      checkIn: checkIn,
      checkOut: checkOut,
      confirmNo: document.getElementById('bk-confirm').value,
      threshold: threshold,
    });
    Modal.close();
    _bkSaving = false; // v1.7.0 解鎖
    Toast.success('訂房已建立');
    render();
  }

  function editBooking(id) {
    var b = Bookings.getById(id);
    if (!b) return;
    var html = '<div class="form-row">';
    html += '<div class="form-group"><label>確認號</label><input type="text" id="eb-confirm" class="form-input" value="' + (b.confirmNo || '') + '"></div>';
    html += '<div class="form-group"><label>狀態</label>';
    html += '<select id="eb-status" class="form-input">';
    Object.values(BOOKING_STATUS).forEach(function(s) {
      html += '<option value="' + s + '"' + (b.status === s ? ' selected' : '') + '>' + (STATUS_LABELS[s] || s) + '</option>';
    });
    html += '</select></div></div>';
    // v1.8.0 編輯訂房會員改搜尋選擇器（預帶原會員）
    var curMember = b.memberId ? Members.getById(b.memberId) : null;
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>關聯會員</label>';
    html += '<div class="member-picker" style="position:relative;">';
    html += '<input type="hidden" id="eb-member" value="' + escAttr(b.memberId || '') + '">';
    html += '<input type="text" id="eb-member-search" class="form-input" placeholder="搜尋會員（留空 = 純住宿不關聯）..." value="' + escAttr(curMember ? ((curMember.name || '') + ' (' + (curMember.id || '') + ')') : '') + '" onfocus="RoomPage._onPkMemberFocus(this,\'eb\')" oninput="RoomPage._onPkMemberInput(\'eb\',this.value)" autocomplete="off">';
    html += '<div id="eb-member-dropdown" class="member-picker-dropdown" style="display:none;"></div>';
    html += '</div></div></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>費用類型</label>';
    html += '<select id="eb-fee" class="form-input">';
    Object.values(FEE_TYPE).forEach(function(f) {
      html += '<option value="' + f + '"' + (b.feeType === f ? ' selected' : '') + '>' + (FEE_LABELS[f] || f) + '</option>';
    });
    html += '</select></div>';
    html += '<div class="form-group"><label>向客人收</label><input type="number" inputmode="decimal" id="eb-charge-guest" class="form-input" value="' + (b.chargeGuest || 0) + '"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>入住日</label><input type="date" id="eb-checkin" class="form-input" value="' + (b.checkIn || '').slice(0, 10) + '"></div>';
    html += '<div class="form-group"><label>退房日</label><input type="date" id="eb-checkout" class="form-input" value="' + (b.checkOut || '').slice(0, 10) + '"></div>';
    html += '</div>';
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" id="eb-save-btn" onclick="RoomPage.saveEditBooking(\'' + id + '\')">儲存</button></div>';
    Modal.open('編輯訂房', html);
  }

  function saveEditBooking(id) {
    if (_ebSaving) return; // v1.8.0 防重複提交
    var btn = document.getElementById('eb-save-btn');
    _ebSaving = true;
    if (btn) { btn.disabled = true; btn.textContent = '儲存中...'; }
    try {
      Bookings.update(id, {
        confirmNo: document.getElementById('eb-confirm').value,
        status: document.getElementById('eb-status').value,
        feeType: document.getElementById('eb-fee').value,
        memberId: document.getElementById('eb-member').value || null,
        feeManualOverride: true,
        chargeGuest: parseFloat(document.getElementById('eb-charge-guest').value) || 0,
        checkIn: document.getElementById('eb-checkin').value,
        checkOut: document.getElementById('eb-checkout').value,
      });
      Modal.close();
      Toast.success('訂房已更新');
      render();
    } finally {
      _ebSaving = false;
    }
  }

  function delBooking(id) {
    Modal.confirm('確定取消此訂房？', function() {
      Bookings.remove(id);
      Toast.success('已取消');
      render();
    });
  }

  /* ===== 費用收取面板（方案B + 卡片版 + 折抵模式切換） ===== */
  function toggleFeePanel() { _showFeePanel = !_showFeePanel; render(); }
  function setFeeMode(mode) { _feeMode = mode; render(); }

  /* 共用：計算團級折抵數據 */
  function calcTripFeeData() {
    var tripBookings = Bookings.getByTrip(_selectedTrip);
    var mtxs = MemberTxs.getByTrip(_selectedTrip);
    var memberWash = {};
    var totalWashRaw = 0;
    mtxs.forEach(function(tx) {
      memberWash[tx.memberId] = (memberWash[tx.memberId] || 0) + (tx.washCode || 0);
      totalWashRaw += (tx.washCode || 0) * 10000;
    });
    var totalThresholdAll = 0;
    tripBookings.forEach(function(b) { totalThresholdAll += (b.threshold || 0) * (b.nights || 1); });
    var totalMet = totalWashRaw >= totalThresholdAll;
    return { tripBookings: tripBookings, mtxs: mtxs, memberWash: memberWash, totalWashRaw: totalWashRaw, totalThresholdAll: totalThresholdAll, totalMet: totalMet };
  }

  /* 共用：依模式計算單筆訂房折抵 */
  function calcBookingFee(b, feeData, roomFeeRate) {
    var th = b.threshold || 0;
    var n = b.nights || 1;
    var memWash = (b.memberId && feeData.memberWash[b.memberId]) ? feeData.memberWash[b.memberId] : 0;
    var memWashRaw = memWash * 10000;
    var discount, remaining;

    if (_feeMode === 'total' && feeData.totalMet) {
      /* 總盤制達標：折抵全部天數 */
      discount = n;
      remaining = 0;
    } else {
      /* 個人制 or 總盤制未達標：個別計算 */
      discount = Math.floor(th > 0 ? memWashRaw / th : 0);
      remaining = n - discount;
    }

    /* feeType 判定（手動覆蓋優先） */
    var isPaid = false;
    if (b.feeType === FEE_TYPE.PAID) { isPaid = true; }
    else if (b.feeType === FEE_TYPE.FREE) { isPaid = false; }
    else { isPaid = remaining > 0; }

    /* 客收金額 */
    var charge = 0;
    if (isPaid) {
      if (remaining > 0 && th > 0) {
        charge = Math.round((remaining * th / 100000) * roomFeeRate);
      } else if (th > 0) {
        /* forced paid 但 remaining=0（如總盤制達標時手動改收費）→ 全天數計費 */
        charge = Math.round((n * th / 100000) * roomFeeRate);
      }
      /* 折扣：自動計算金額 × 折扣率（手動 chargeGuest 仍為最終覆蓋） */
      if (b.feeType === FEE_TYPE.DISCOUNT && b.discountRate) {
        charge = Math.round(charge * b.discountRate);
      }
      if (b.chargeGuest && b.chargeGuest > 0) charge = b.chargeGuest;
    }

    return { th: th, n: n, memWash: memWash, discount: discount, remaining: remaining, isPaid: isPaid, charge: charge };
  }

  function cycleFeeType(bookingId) {
    var b = Bookings.getById(bookingId);
    if (!b) return;
    var current = b.feeType || 'auto';
    var next;
    if (current === 'auto') next = 'free';
    else if (current === 'free') next = 'paid';
    else next = 'auto';

    var update = { feeType: next, feeManualOverride: true };

    if (next === 'paid') {
      /* 依模式計算應收金額 */
      var settings = Settings.load();
      var roomFeeRate = settings.roomFeeRate || 150;
      var feeData = calcTripFeeData();
      var fd = calcBookingFee(b, feeData, roomFeeRate);
      if (fd.remaining > 0 && fd.th > 0) {
        update.chargeGuest = Math.round((fd.remaining * fd.th / 100000) * roomFeeRate);
      } else if (fd.th > 0) {
        update.chargeGuest = Math.round((fd.n * fd.th / 100000) * roomFeeRate);
      }
    } else {
      update.chargeGuest = 0;
    }

    Bookings.update(bookingId, update);
    Toast.success('已切換為' + (next === 'auto' ? '自動' : next === 'free' ? '免費' : '收費'));
    render();
  }

  function pushExpenseToMember(bookingId) {
    var b = Bookings.getById(bookingId);
    if (!b) return;
    if (!b.memberId) { Toast.warning('此訂房未關聯會員'); return; }

    /* 找會員在此團的交易記錄 */
    var tripTxs = MemberTxs.getByTrip(_selectedTrip);
    var tx = tripTxs.filter(function(t) { return t.memberId === b.memberId; })[0];
    if (!tx) {
      var m = Members.getById(b.memberId);
      Toast.warning('會員 ' + (m ? m.name : b.memberId) + ' 在此團尚無帳務記錄，請先建立帳務');
      return;
    }

    /* 防重複 */
    var existing = (tx.expenses || []).some(function(e) { return e.sourceBookingId === bookingId; });
    if (existing) { Toast.warning('此房費已匯入過'); return; }

    /* 計算客收金額 */
    var settings = Settings.load();
    var roomFeeRate = settings.roomFeeRate || 150;
    var feeData = calcTripFeeData();
    var fd = calcBookingFee(b, feeData, roomFeeRate);
    var charge = fd.charge;
    if (b.chargeGuest && b.chargeGuest > 0) charge = b.chargeGuest;

    /* 加開銷 */
    var expenses = (tx.expenses || []).map(function(e) { return Object.assign({}, e); });
    expenses.push({
      ticketType: 'roomfee',
      name: '房費',
      quantity: 1,
      unitPrice: charge,
      amountHK: charge,
      exchangeRate: 4.2,
      sourceBookingId: bookingId
    });
    MemberTxs.update(tx.id, { expenses: expenses });

    var member = Members.getById(b.memberId);
    Toast.success('已匯入 ' + (member ? member.name : '') + ' 的開銷：房費 $' + charge);
    render();
  }

  function renderFeePanel() {
    var settings = Settings.load();
    var roomFeeRate = settings.roomFeeRate || 150;
    var feeData = calcTripFeeData();

    /* 預先計算哪些訂房已匯入開銷 */
    var pushedBookings = {};
    MemberTxs.getByTrip(_selectedTrip).forEach(function(tx) {
      (tx.expenses || []).forEach(function(e) {
        if (e.sourceBookingId) pushedBookings[e.sourceBookingId] = true;
      });
    });

    /* 計算每筆訂房費用 */
    var rows = [];
    feeData.tripBookings.forEach(function(b) {
      var fd = calcBookingFee(b, feeData, roomFeeRate);
      rows.push({ b: b, th: fd.th, n: fd.n, memWash: fd.memWash, discount: fd.discount, remaining: fd.remaining, isPaid: fd.isPaid, charge: fd.charge });
    });

    var html = '';
    html += '<div class="rm-fee-panel" style="margin-top:16px;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;">';

    /* Panel header + mode toggle */
    html += '<div class="card-header" style="background:var(--bg-secondary);">';
    html += '<h4>費用收取明細</h4>';
    html += '<div style="display:flex;gap:6px;align-items:center;">';
    var persActive = _feeMode === 'personal' ? 'background:var(--accent);color:#fff;border-color:var(--accent);' : '';
    var totActive = _feeMode === 'total' ? 'background:var(--accent);color:#fff;border-color:var(--accent);' : '';
    html += '<button class="btn-sm" style="' + persActive + '" onclick="RoomPage.setFeeMode(\'personal\')">個人制</button>';
    html += '<button class="btn-sm" style="' + totActive + '" onclick="RoomPage.setFeeMode(\'total\')">總盤制</button>';
    html += '<button class="btn-sm" onclick="RoomPage.toggleFeePanel()">收起</button>';
    html += '</div>';
    html += '</div>';

    /* Mode hint */
    if (_feeMode === 'total') {
      html += '<div style="padding:6px 12px;font-size:var(--font-size-sm);color:var(--text-secondary);background:var(--bg-tertiary);">';
      html += '總盤制：全團洗碼 ' + (feeData.totalWashRaw / 10000).toFixed(0) + '萬 vs 全團門檻 ' + (feeData.totalThresholdAll / 10000).toFixed(0) + '萬';
      html += ' \u2192 ' + (feeData.totalMet ? '<span class="text-success-strong">\u2705 達標，全部免費</span>' : '<span class="text-danger-strong">\u26A0\uFE0F 未達標，改用個人計算</span>');
      html += '</div>';
    }

    /* Cards */
    if (rows.length === 0) {
      html += Icons.empty('此團無訂房');
    } else {
      html += '<div class="rm-fee-cards">';

      rows.forEach(function(r) {
        var b = r.b;
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        var feeType = b.feeType || 'auto';
        var badgeColor, badgeText;
        if (feeType === 'free') { badgeColor = 'var(--success)'; badgeText = '免費'; }
        else if (feeType === 'paid') { badgeColor = 'var(--danger)'; badgeText = '收費'; }
        else { badgeColor = 'var(--info)'; badgeText = '自動'; }

        html += '<div class="rm-fee-card">';

        /* Top: guest name + fee badge */
        html += '<div class="rm-fee-card-top">';
        html += '<span class="rm-fee-card-guest">' + escHtml(b.guestName || '') + '</span>';
        html += '<span class="rm-fee-badge" style="background:' + badgeColor + ';" onclick="RoomPage.cycleFeeType(\'' + b.id + '\')">' + badgeText + '</span>';
        html += '</div>';

        /* Info: member + agent */
        html += '<div class="rm-fee-card-info">';
        html += '<span>會員: ' + (member ? escHtml(member.name) : '-') + '</span>';
        html += '<span>代理: ' + (agent ? escHtml(agent.name) : '-') + '</span>';
        html += '</div>';

        /* Hotel */
        html += '<div class="rm-fee-card-hotel">' + escHtml(b.hotel || '') + ' \u00B7 ' + escHtml(b.roomType || '') + '</div>';

        /* Stats */
        html += '<div class="rm-fee-card-stats">';
        html += '<span>\u665A <b>' + r.n + '</b></span>';
        html += '<span>\u9580\u6A2B <b>' + (r.th / 10000).toFixed(0) + '\u842C</b></span>';
        html += '<span>\u6D17\u78BC <b>' + (r.memWash > 0 ? r.memWash.toFixed(0) + '\u842C' : '-') + '</b></span>';
        html += '<span>\u6298\u62B5 <b>' + r.discount + '</b></span>';
        html += '<span>\u5269\u9918 <b style="color:' + (r.remaining > 0 ? 'var(--danger)' : 'var(--success)') + ';">' + r.remaining + '</b></span>';
        html += '</div>';

        /* Amount */
        html += '<div class="rm-fee-card-amount">';
        if (r.isPaid && r.charge > 0) {
          html += '$' + r.charge.toLocaleString();
          if (b.memberId) {
            if (pushedBookings[b.id]) {
              html += ' <span style="color:var(--success);font-size:var(--font-size-sm);margin-left:8px;">\u2705\u5DF2\u532F\u5165</span>';
            } else {
              html += ' <button class="btn-sm btn-primary" style="margin-left:8px;padding:2px 8px;font-size:var(--font-size-sm);" onclick="RoomPage.pushExpenseToMember(\'' + b.id + '\')">\u532F\u5165\u958B\u92B7</button>';
            }
          }
        } else {
          html += '<span class="text-muted">- -</span>';
        }
        html += '</div>';

        html += '</div>';
      });

      html += '</div>';

      /* Agent summary */
      var agentSummary = {};
      rows.forEach(function(r) {
        var aid = r.b.agentId;
        if (!agentSummary[aid]) agentSummary[aid] = { count: 0, nights: 0, th: 0, discount: 0, remaining: 0, free: 0, paid: 0, charge: 0 };
        var s = agentSummary[aid];
        s.count++;
        s.nights += r.n;
        s.th += r.th * r.n;
        s.discount += r.discount;
        s.remaining += r.remaining;
        if (r.isPaid) { s.paid++; s.charge += r.charge; }
        else { s.free++; }
      });

      html += '<div style="padding:12px;">';
      html += '<div class="table-wrapper"><table class="data-table"><thead><tr>';
      html += '<th>\u4EE3\u7406</th><th class="num">\u8A02\u623F</th><th class="num">\u623F\u665A</th><th class="num">\u9580\u6A2B(\u842C)</th><th class="num">\u6298\u62B5</th><th class="num">\u5269\u9918</th><th class="num">\u514D\u8CBB</th><th class="num">\u6536\u8CBB</th><th class="num">\u5BA2\u6536</th>';
      html += '</tr></thead><tbody>';
      Object.keys(agentSummary).forEach(function(aid) {
        var s = agentSummary[aid];
        var ag = Agents.getById(aid);
        html += '<tr>';
        html += '<td>' + (ag ? ag.name : aid) + '</td>';
        html += '<td class="num">' + s.count + '</td>';
        html += '<td class="num">' + s.nights + '</td>';
        html += '<td class="num">' + (s.th / 10000).toFixed(0) + '</td>';
        html += '<td class="num">' + s.discount + '</td>';
        html += '<td class="num">' + s.remaining + '</td>';
        html += '<td class="num">' + s.free + '</td>';
        html += '<td class="num">' + s.paid + '</td>';
        html += '<td class="num">$' + s.charge.toLocaleString() + '</td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>'
    }

    html += '</div>';
    return html;
  }

  /* ===== 酒店設定 Modal ===== */
  function showHotelConfig() {
    var html = '';
    html += '<div style="max-height:70vh;overflow-y:auto;">';

    /* 按體系分組顯示 */
    var casinos = HotelConfig.getCasinos();
    casinos.forEach(function(casino) {
      var hotels = HotelConfig.getHotels(casino);
      html += '<div class="mb-md">';
      html += '<h4 style="color:var(--accent);margin:8px 0 4px;font-size:var(--font-size-base);">\u25C6 ' + escHtml(casino) + '</h4>';

      hotels.forEach(function(hotelName) {
        var rooms = HotelConfig.getRooms(casino, hotelName);
        html += '<div style="margin-left:12px;margin-bottom:8px;">';
        html += '<div style="font-weight:600;margin:4px 0;color:var(--text-primary);">' + escHtml(hotelName) + '</div>';
        html += '<div class="table-wrapper"><table class="data-table text-sm"><thead><tr>';
        html += '<th>房型</th><th>代碼</th><th class="num">門檻(萬)</th><th>操作</th>';
        html += '</tr></thead><tbody>';
        rooms.forEach(function(r) {
          html += '<tr>';
          html += '<td>' + escHtml(r.room) + '</td>';
          html += '<td>' + escHtml(r.code) + '</td>';
          html += '<td class="num"><input type="number" id="hc-th-' + r.id + '" class="form-input" style="width:100px;text-align:right;" value="' + (r.threshold / 10000) + '" step="1" min="0" onchange="RoomPage.saveHotelThreshold(\'' + r.id + '\')"></td>';
          html += '<td><button class="btn-sm btn-danger" onclick="RoomPage.delHotelConfig(\'' + r.id + '\')">刪</button></td>';
          html += '</tr>';
        });
        html += '</tbody></table></div>';
        html += '</div>';
      });

      html += '</div>';
    });

    html += '</div>';

    /* 新增配置區 */
    html += '<div style="border-top:2px solid var(--border);padding-top:12px;margin-top:8px;">';
    html += '<h4 style="margin:0 0 8px;">\u2795 新增酒店配置</h4>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>體系</label><input type="text" id="hc-new-casino" class="form-input" placeholder="如: 金沙" list="hc-casino-list"></div>';
    html += '<div class="form-group"><label>酒店</label><input type="text" id="hc-new-hotel" class="form-input" placeholder="如: 倫敦人"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>房型</label><input type="text" id="hc-new-room" class="form-input" placeholder="如: 名匯普通房"></div>';
    html += '<div class="form-group"><label>代碼</label><input type="text" id="hc-new-code" class="form-input" placeholder="如: RK"></div>';
    html += '<div class="form-group"><label>門檻(萬)</label><input type="number" id="hc-new-threshold" class="form-input" placeholder="如: 60" step="1" min="0"></div>';
    html += '</div>';
    html += '<datalist id="hc-casino-list">';
    casinos.forEach(function(c) { html += '<option value="' + escHtml(c) + '">'; });
    html += '</datalist>';
    html += '<div style="text-align:right;margin-top:8px;">';
    html += '<button class="btn btn-primary" onclick="RoomPage.saveNewHotelConfig()">新增</button>';
    html += '</div>';
    html += '</div>';

    Modal.open('酒店設定 — 門檻管理', html);
  }

  function saveHotelThreshold(id) {
    var input = document.getElementById('hc-th-' + id);
    if (!input) return;
    var wan = parseFloat(input.value) || 0;
    var threshold = Math.round(wan * 10000);
    HotelConfig.update(id, { threshold: threshold });
    Toast.success('門檻已更新: ' + wan + '萬');
  }

  function saveNewHotelConfig() {
    var casino = document.getElementById('hc-new-casino').value.trim();
    var hotel = document.getElementById('hc-new-hotel').value.trim();
    var room = document.getElementById('hc-new-room').value.trim();
    var code = document.getElementById('hc-new-code').value.trim();
    var wan = parseFloat(document.getElementById('hc-new-threshold').value) || 0;

    if (!casino || !hotel || !room) {
      Toast.warning('請填寫體系、酒店、房型');
      return;
    }

    HotelConfig.create({
      casino: casino,
      hotel: hotel,
      room: room,
      code: code,
      threshold: Math.round(wan * 10000),
    });
    Toast.success('已新增: ' + casino + ' / ' + hotel + ' / ' + room);
    showHotelConfig(); /* 重新渲染 Modal */
  }

  function delHotelConfig(id) {
    var item = HotelConfig.getById(id);
    if (!item) return;
    Modal.confirm('確定刪除「' + item.casino + ' / ' + item.hotel + ' / ' + item.room + '」？', function() {
      HotelConfig.remove(id);
      Toast.success('已刪除');
      showHotelConfig(); /* 重新渲染 Modal */
    });
  }

  /* ===== 入住狀態操作 ===== */
  function setCheckedOut(bookingId) {
    Bookings.update(bookingId, { status: 'checked-out' });
    Toast.success('已設為退房');
    render();
  }

  /* ===== 訂房關聯會員 ===== */
  function linkMember(bookingId) {
    var members = Members.getAll();
    var html = '<div class="form-group"><label>選擇會員</label>';
    html += '<select id="link-member-select" class="form-input">';
    html += '<option value="">選擇...</option>';
    members.forEach(function(m) {
      html += '<option value="' + m.id + '">' + m.id + ' ' + esc(m.name) + '</option>';
    });
    html += '</select></div>';
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" onclick="RoomPage.saveLinkMember(\'' + bookingId + '\')">儲存</button></div>';
    Modal.open('關聯會員', html);
  }

  function saveLinkMember(bookingId) {
    var memberId = document.getElementById('link-member-select').value;
    if (!memberId) { Toast.warning('請選擇會員'); return; }
    Bookings.update(bookingId, { memberId: memberId });
    Modal.close();
    Toast.success('已關聯會員');
    render();
  }

  // v2.3.8 團/訂房數據同步後自動刷新（WEB 封存團 → 房務頁即時反映；選中團被封存會自動清除選擇）
  EventBus.on(EVENTS.TRIPS_LOADED, function() { render(); });
  EventBus.on(EVENTS.BOOKINGS_LOADED, function() { render(); });

  return {
    render: render, selectTrip: selectTrip,
    showAddBooking: showAddBooking, onCasinoChange: onCasinoChange, onHotelChange: onHotelChange,
    saveBooking: saveBooking, editBooking: editBooking, saveEditBooking: saveEditBooking, delBooking: delBooking,
    _onPkMemberFocus: _onPkMemberFocus, _onPkMemberInput: _onPkMemberInput, _selectPkMember: _selectPkMember,
    goPage: goPage, onSearch: onSearch, sortByCol: sortByCol, setFeeFilter: setFeeFilter,
    goFees: goFees, goProfit: goProfit,
    toggleFeePanel: toggleFeePanel, cycleFeeType: cycleFeeType, setFeeMode: setFeeMode,
    pushExpenseToMember: pushExpenseToMember,
    showHotelConfig: showHotelConfig, saveHotelThreshold: saveHotelThreshold,
    saveNewHotelConfig: saveNewHotelConfig, delHotelConfig: delHotelConfig,
    setCheckedOut: setCheckedOut, linkMember: linkMember, saveLinkMember: saveLinkMember,
  };
})();


// === src/pages/fees.js ===
/**
 * pages/fees.js — 費用收取頁
 * 選團 → 顯示該團所有訂房 → 自動計算會員洗碼折抵 → 判定免費/收費 → 向客人收
 * 依赖: core/escape.js, core/constants.js, core/router.js, data/agents.js, data/bookings.js, data/memberTxs.js, data/members.js, data/settings.js, data/trips.js, ui/icons.js, ui/toast.js
 */
var FeesPage = (function() {
  var _selectedTrip = null;
  var _page = 1;
  var _search = '';
  var _sortField = 'checkIn';
  var _sortAsc = true;
  var _searchTimer = null;
  var PAGE_SIZE = 10;

  function render() {
    var container = document.getElementById('page-fees');
    if (!container) return;

    var trips = Trips.getAll().filter(function(t) { return t.status !== TRIP_STATUS.SEALED; });

    var html = '';

    /* 自動接收來自房務管理的團 */
    if (window._targetTripId && !_selectedTrip) {
      _selectedTrip = window._targetTripId;
      window._targetTripId = null;
    }

    /* 頁面標題 + 返回 */
    html += '<div class="card-header"><h3>費用收取</h3>';
    html += '<button class="btn" onclick="FeesPage.backToRoom()">← 返回房務管理</button>';
    html += '</div>';

    /* 選團 */
    html += '<div class="card mb-md"><div class="card-body">';
    html += '<div class="form-group mb-0"><label>選擇團</label>';
    html += '<select id="fees-trip-select" class="form-input auto-width" onchange="FeesPage.selectTrip(this.value)">';
    html += '<option value="">選擇團...</option>';
    trips.forEach(function(t) {
      html += '<option value="' + t.id + '"' + (_selectedTrip === t.id ? ' selected' : '') + '>' + t.id + ' ' + esc(t.notes || '') + '</option>';
    });
    html += '</select></div></div></div>';

    if (!_selectedTrip) {
      html += Icons.empty('請選擇一個團', '從上方團選擇器選擇要查看的團');
      container.innerHTML = html;
      return;
    }

    var trip = Trips.getById(_selectedTrip);
    if (!trip) { container.innerHTML = html + Icons.empty('團不存在', '該團可能已被刪除'); return; }

    /* 獲取該團所有訂房 */
    var bookings = Bookings.getByTrip(_selectedTrip);

    /* 獲取該團所有會員交易，按 memberId 匯總洗碼 */
    var txs = MemberTxs.getByTrip(_selectedTrip);
    var memberWash = {};
    txs.forEach(function(tx) {
      memberWash[tx.memberId] = (memberWash[tx.memberId] || 0) + (tx.washCode || 0);
    });

    /* 過濾 + 搜索 + 排序 */
    var filtered = bookings;
    if (_search) {
      var q = _search.toLowerCase();
      filtered = bookings.filter(function(b) {
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        return (b.guestName || '').toLowerCase().indexOf(q) >= 0 ||
               (b.hotel || '').toLowerCase().indexOf(q) >= 0 ||
               (b.roomType || '').toLowerCase().indexOf(q) >= 0 ||
               (agent ? agent.name.toLowerCase().indexOf(q) >= 0 : false) ||
               (member ? member.name.toLowerCase().indexOf(q) >= 0 : false);
      });
    }

    var sorted = filtered.slice().sort(function(a, b) {
      var va = a[_sortField] || '';
      var vb = b[_sortField] || '';
      if (va < vb) return _sortAsc ? -1 : 1;
      if (va > vb) return _sortAsc ? 1 : -1;
      return 0;
    });

    var totalItems = sorted.length;
    var totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
    if (_page > totalPages) _page = totalPages;
    var startIdx = (_page - 1) * PAGE_SIZE;
    var pageItems = sorted.slice(startIdx, startIdx + PAGE_SIZE);

    /* KPI 統計 */
    var settings = Settings.load();
    var roomFeeRate = settings.roomFeeRate || 150;
    var kpi = { totalNights: 0, totalTh: 0, freeCount: 0, paidCount: 0, totalCharge: 0, totalDiscount: 0, totalRemaining: 0 };

    /* 預先計算每筆訂房的費用數據 */
    var calcData = {};
    sorted.forEach(function(b) {
      var th = b.threshold || 0;
      var n = b.nights || 1;
      var memWashRaw = (b.memberId && memberWash[b.memberId]) ? memberWash[b.memberId] * 10000 : 0;
      var discount = Math.floor(th > 0 ? memWashRaw / th : 0);
      var remaining = n - discount;
      var isPaid = false;
      if (b.feeType === FEE_TYPE.PAID) { isPaid = true; }
      else if (b.feeType === FEE_TYPE.FREE) { isPaid = false; }
      else if (b.feeType === FEE_TYPE.AUTO) { isPaid = remaining > 0; }
      else if (b.feeType === FEE_TYPE.DISCOUNT) { isPaid = remaining > 0; }
      var charge = 0;
      if (isPaid && remaining > 0 && th > 0) {
        charge = Math.round((remaining * th / 100000) * roomFeeRate);
        /* 折扣：自動計算金額 × 折扣率（手動 chargeGuest 仍為最終覆蓋） */
        if (b.feeType === FEE_TYPE.DISCOUNT && b.discountRate) {
          charge = Math.round(charge * b.discountRate);
        }
        charge = b.chargeGuest || charge;
      }

      calcData[b.id] = { discount: discount, remaining: remaining, isPaid: isPaid, charge: charge, memWashRaw: memWashRaw };

      kpi.totalNights += n;
      kpi.totalTh += th * n;
      kpi.totalDiscount += discount;
      if (remaining > 0) kpi.totalRemaining += remaining;
      if (isPaid) { kpi.paidCount++; kpi.totalCharge += (b.chargeGuest || charge); }
      else { kpi.freeCount++; }
    });

    /* KPI 卡片 */
    html += '<div class="kpi-grid mb-md">';
    html += kpiCard('總房晚', kpi.totalNights, 'var(--accent)');
    html += kpiCard('總門檻(萬)', (kpi.totalTh / 10000).toFixed(0), 'var(--warning)');
    html += kpiCard('折抵天數', kpi.totalDiscount, 'var(--success)');
    html += kpiCard('剩餘天數', kpi.totalRemaining, 'var(--danger)');
    html += kpiCard('免費房', kpi.freeCount, 'var(--success)');
    html += kpiCard('收費房', kpi.paidCount, 'var(--danger)');
    html += kpiCard('向客收合計', kpi.totalCharge.toLocaleString(), 'var(--info)');
    html += '</div>';

    /* 公式提示 */
    html += '<div style="margin-bottom:12px;color:var(--text-secondary);font-size:var(--font-size-sm);">';
    html += '折抵天數 = 會員總洗碼 ÷ 每晚門檻（無條件退位）；剩餘天數 > 0 → 收費，剩餘 = 0 → 免費。';
    html += '向客人收 = (剩餘天數 × 每晚門檻 ÷ 10萬) × ' + roomFeeRate + ' 元。可手動覆蓋。';
    html += '</div>';

    /* 搜索欄 */
    html += '<div class="rm-search-bar mb-sm">';
    html += '<input type="text" class="form-input" placeholder="搜索客人、會員、代理、酒店..." value="' + escHtml(_search) + '" oninput="FeesPage.onSearch(this.value)">';
    html += '</div>';

    if (pageItems.length === 0) {
      html += Icons.empty('無訂房記錄', '點擊「新增訂房」為會員建立訂房');
    } else {
      /* v1.6.0 手機卡片式列表（桌面上仍顯示表格） */
      html += '<div class="m-cards">';
      pageItems.forEach(function(b) {
        var d = calcData[b.id];
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        var th = b.threshold || 0;
        var n = b.nights || 1;
        var ft = b.feeType || 'auto';
        var ftLabel = { auto: '自動', free: '免費', paid: '收費', discount: '折扣' + (b.discountRate ? (b.discountRate * 10).toFixed(1).replace(/\.0$/, '') + '折' : '') }[ft] || '自動';
        var ftColor = { auto: 'var(--info)', free: 'var(--success)', paid: 'var(--danger)', discount: 'var(--warning)' }[ft] || 'var(--info)';
        html += '<div class="m-card">';
        html += '<div class="m-card-head"><span class="m-card-title">' + escHtml(b.guestName || '(未填客人)') + '</span>';
        html += '<span class="badge" style="background:' + ftColor + ';color:#fff;cursor:pointer;user-select:none;" onclick="FeesPage.toggleFeeType(\'' + b.id + '\')" title="點擊切換費用類型">' + ftLabel + '</span></div>';
        html += '<div class="m-card-grid">';
        html += '<div><div class="k">會員</div><div class="v">' + (member ? escHtml(member.name) : '-') + '</div></div>';
        html += '<div><div class="k">代理</div><div class="v">' + escHtml(agent ? agent.name : (b.agentId || '-')) + '</div></div>';
        html += '<div class="full"><div class="k">酒店 / 房型</div><div class="v">' + escHtml((b.hotel || '-') + (b.roomType ? ' · ' + b.roomType : '')) + '</div></div>';
        html += '<div class="full"><div class="k">日期</div><div class="v">' + escHtml(b.checkIn || '?') + ' → ' + escHtml(b.checkOut || '?') + '（' + n + ' 晚）</div></div>';
        html += '<div><div class="k">門檻/總門檻</div><div class="v">' + (th / 10000).toFixed(0) + ' / ' + (th * n / 10000).toFixed(0) + ' 萬</div></div>';
        html += '<div><div class="k">會員洗碼</div><div class="v">' + (memberWash[b.memberId] || 0).toFixed(2) + ' 萬</div></div>';
        html += '<div><div class="k">折抵 / 剩餘</div><div class="v">' + d.discount + ' / ' + (d.remaining <= 0 ? '<span style="color:var(--success)">達標</span>' : '<span style="color:var(--danger)">' + d.remaining + ' 天</span>') + '</div></div>';
        html += '<div class="full"><div class="k">向客人收（元）</div><div class="v"><input type="number" inputmode="decimal" min="0" value="' + (b.chargeGuest || d.charge || 0) + '" onchange="FeesPage.updateCharge(\'' + b.id + '\', this.value)" style="width:110px;text-align:right;padding:6px 8px;font-size:15px;border:1px solid var(--border);border-radius:8px;background:var(--bg-primary);color:var(--text-primary);"></div></div>';
        html += '</div>';
        html += '<div class="m-card-actions">';
        html += '<button class="btn-sm" onclick="FeesPage.editBooking(\'' + b.id + '\')">編輯</button>';
        html += '</div>';
        html += '</div>';
      });
      html += '</div>';

      html += '<div class="table-wrapper m-only-table"><table class="data-table" id="fees-table"><thead><tr>';
      html += sortTH('客人', 'guestName');
      html += '<th>會員</th>';
      html += '<th>代理</th>';
      html += sortTH('酒店', 'hotel');
      html += '<th>房型</th>';
      html += sortTH('入住', 'checkIn');
      html += sortTH('退房', 'checkOut');
      html += '<th class="num">晚</th>';
      html += '<th class="num">每晚門檻<br>(萬)</th>';
      html += '<th class="num">總門檻<br>(萬)</th>';
      html += '<th class="num">會員洗碼<br>(萬)</th>';
      html += '<th class="num">折抵<br>(天)</th>';
      html += '<th class="num">剩餘<br>(天)</th>';
      html += '<th>費用</th>';
      html += '<th class="num">向客人收<br>(元)</th>';
      html += '<th>操作</th>';
      html += '</tr></thead><tbody>';

      pageItems.forEach(function(b) {
        var d = calcData[b.id];
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        var th = b.threshold || 0;
        var n = b.nights || 1;
        var thWan = (th / 10000).toFixed(0);
        var totalThWan = (th * n / 10000).toFixed(0);
        var memWashWan = memberWash[b.memberId] ? (memberWash[b.memberId]).toFixed(2) : '0';

        html += '<tr>';
        html += '<td class="fw-semibold">' + escHtml(b.guestName || '') + '</td>';
        html += '<td>' + (member ? escHtml(member.name) + '<br><span class="text-muted">' + escHtml(member.id) + '</span>' : '<span class="text-muted">-</span>') + '</td>';
        html += '<td>' + (agent ? agent.name : b.agentId || '') + '</td>';
        html += '<td>' + escHtml(b.hotel || '') + '</td>';
        html += '<td class="text-sm">' + escHtml(b.roomType || '') + '</td>';
        html += '<td>' + (b.checkIn || '') + '</td>';
        html += '<td>' + (b.checkOut || '') + '</td>';
        html += '<td class="num">' + n + '</td>';
        html += '<td class="num">' + thWan + '</td>';
        html += '<td class="num">' + totalThWan + '</td>';
        html += '<td class="num">' + memWashWan + '</td>';
        html += '<td class="num">' + (d.discount > 0 ? d.discount : '<span class="text-muted">0</span>') + '</td>';
        html += '<td class="num">' + (d.remaining <= 0 ? '<span class="text-success-strong">達標</span>' : '<span class="text-danger-strong">' + d.remaining + '</span>') + '</td>';
        var ft = b.feeType || 'auto';
        var ftLabel = { auto: '自動', free: '免費', paid: '收費', discount: '折扣' + (b.discountRate ? (b.discountRate * 10).toFixed(1).replace(/\.0$/, '') + '折' : '') }[ft] || '自動';
        var ftColor = { auto: 'var(--info)', free: 'var(--success)', paid: 'var(--danger)', discount: 'var(--warning)' }[ft] || 'var(--info)';
        html += '<td>';
        html += '<span class="badge" style="background:' + ftColor + ';color:#fff;cursor:pointer;user-select:none;" onclick="FeesPage.toggleFeeType(\'' + b.id + '\')" title="點擊切換費用類型">' + ftLabel + '</span>';
        html += '</td>';
        html += '<td class="num"><input type="number" inputmode="decimal" min="0" value="' + (b.chargeGuest || d.charge || 0) + '" onchange="FeesPage.updateCharge(\'' + b.id + '\', this.value)" style="width:70px;text-align:right;padding:2px 4px;font-size:var(--font-size-sm);border:1px solid var(--border);border-radius:var(--radius);background:var(--bg-primary);color:var(--text-primary);"></td>';
        html += '<td><button class="btn-sm" onclick="FeesPage.editBooking(\'' + b.id + '\')">編輯</button></td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>'

      /* 分頁 */
      html += '<div class="paginator">';
      html += '<span class="paginator-info">第 ' + _page + '/' + totalPages + ' 頁，共 ' + totalItems + ' 筆</span>';
      html += '<div class="paginator-btns">';
      html += '<button class="btn-sm" onclick="FeesPage.goPage(1)" ' + (_page === 1 ? 'disabled' : '') + '>首頁</button> ';
      html += '<button class="btn-sm" onclick="FeesPage.goPage(' + (_page - 1) + ')" ' + (_page === 1 ? 'disabled' : '') + '>上一頁</button> ';
      html += '<button class="btn-sm" onclick="FeesPage.goPage(' + (_page + 1) + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>下一頁</button> ';
      html += '<button class="btn-sm" onclick="FeesPage.goPage(' + totalPages + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>末頁</button>';
      html += '</div></div>';
    }

    /* 代理匯總表 */
    var agents = Agents.getAll();
    var agentBookings = {};
    bookings.forEach(function(b) {
      if (!agentBookings[b.agentId]) agentBookings[b.agentId] = [];
      agentBookings[b.agentId].push(b);
    });

    html += '<div class="card mt-md"><div class="card-title">代理折抵匯總</div>';
    html += '<div class="table-wrapper"><table class="data-table"><thead><tr>';
    html += '<th>代理</th><th class="num">訂房數</th><th class="num">總房晚</th><th class="num">總門檻(萬)</th><th class="num">總折抵(天)</th><th class="num">剩餘(天)</th><th class="num">收費房</th><th class="num">免費房</th><th class="num">向客收合計</th>';
    html += '</tr></thead><tbody>';

    agents.forEach(function(ag) {
      var ab = agentBookings[ag.id];
      if (!ab || !ab.length) return;
      var agNights = 0, agTh = 0, agDisc = 0, agRem = 0, agPaid = 0, agFree = 0, agCharge = 0;
      ab.forEach(function(b) {
        var cd = calcData[b.id];
        var bn = b.nights || 1;
        agNights += bn;
        agTh += (b.threshold || 0) * bn;
        agDisc += cd.discount;
        if (cd.remaining > 0) agRem += cd.remaining;
        if (cd.isPaid) { agPaid++; agCharge += (b.chargeGuest || cd.charge || 0); }
        else { agFree++; }
      });
      html += '<tr>';
      html += '<td class="fw-semibold">' + escHtml(ag.name) + '</td>';
      html += '<td class="num">' + ab.length + '</td>';
      html += '<td class="num">' + agNights + '</td>';
      html += '<td class="num">' + (agTh / 10000).toFixed(0) + '</td>';
      html += '<td class="num">' + agDisc + '</td>';
      html += '<td class="num" class="text-danger fw-semibold">' + agRem + '</td>';
      html += '<td class="num" class="text-danger">' + agPaid + '</td>';
      html += '<td class="num" class="text-success">' + agFree + '</td>';
      html += '<td class="num fw-semibold">' + agCharge.toLocaleString() + '</td>';
      html += '</tr>';
    });
    html += '</tbody></table></div>'

    container.innerHTML = html;
  }

  function kpiCard(label, value, color) {
    return '<div class="kpi-card" style="border-left:3px solid ' + color + ';">' +
      '<div class="kpi-label row-hint">' + escHtml(label) + '</div>' +
      '<div class="kpi-value" class="text-2xl-strong">' + value + '</div></div>';
  }

  function sortTH(label, field) {
    var arrow = '';
    if (_sortField === field) {
      arrow = _sortAsc ? ' ▲' : ' ▼';
    }
    return '<th onclick="FeesPage.sortByCol(\'' + field + '\')" class="clickable-nowrap">' + label + '<span class="text-2xs text-accent">' + arrow + '</span></th>';
  }

  function selectTrip(tripId) {
    _selectedTrip = tripId;
    _page = 1;
    _search = '';
    render();
  }

  function goPage(n) { _page = n; render(); }

  function onSearch(term) {
    _search = term;
    _page = 1;
    if (_searchTimer) clearTimeout(_searchTimer);
    _searchTimer = setTimeout(function() { render(); }, 300);
  }

  function sortByCol(field) {
    if (_sortField === field) { _sortAsc = !_sortAsc; }
    else { _sortField = field; _sortAsc = true; }
    _page = 1;
    render();
  }

  function updateCharge(bookingId, val) {
    var num = parseFloat(val) || 0;
    Bookings.update(bookingId, { chargeGuest: num, feeManualOverride: true });
    Toast.success('向客人收已更新');
  }

  function toggleFeeType(bookingId) {
    var booking = Bookings.getById(bookingId);
    var current = booking && booking.feeType ? booking.feeType : 'auto';
    /* 三態循環: auto → free → paid → auto */
    var next = { auto: 'free', free: 'paid', paid: 'auto' }[current] || 'auto';
    Bookings.update(bookingId, { feeType: next });
    Toast.success('費用類型: ' + ({ auto: '自動', free: '免費', paid: '收費' }[next]) + '');
    render();
  }

  function editBooking(bookingId) {
    /* 橋接到編輯彈窗 */
    var roomPage = window['Room' + 'Page'];
    if (roomPage && roomPage.editBooking) {
      roomPage.editBooking(bookingId);
    }
  }

  function backToRoom() {
    window._targetTripId = _selectedTrip;
    Router.go('room');
  }


  return {
    render: render,
    selectTrip: selectTrip,
    goPage: goPage,
    onSearch: onSearch,
    sortByCol: sortByCol,
    updateCharge: updateCharge,
    toggleFeeType: toggleFeeType,
    editBooking: editBooking,
    backToRoom: backToRoom,
  };
})();

function renderFees() { FeesPage.render(); }


// === src/pages/profit.js ===
/**
 * pages/profit.js — 利潤結算頁
 * 已退房訂房 → 填入交公司金額 → 利潤=向客人收-交公司 → 批量確認歸檔
 * 依赖: core/escape.js, core/constants.js, core/router.js, data/agents.js, data/bookings.js, data/members.js, data/trips.js, ui/modal.js, ui/toast.js, ui/icons.js
 */
var ProfitPage = (function() {
  var _selectedTrip = null;
  var _page = 1;
  var _search = '';
  var _sortField = 'checkOut';
  var _sortAsc = true;
  var _searchTimer = null;
  var PAGE_SIZE = 10;
  var _selectedIds = {}; /* batch selection */

  function render() {
    var container = document.getElementById('page-profit');
    if (!container) return;

    var trips = Trips.getAll().filter(function(t) { return t.status !== TRIP_STATUS.SEALED; });

    var html = '';

    /* 自動接收來自房務管理的團 */
    if (window._targetTripId && !_selectedTrip) {
      _selectedTrip = window._targetTripId;
      window._targetTripId = null;
    }

    html += '<div class="card-header"><h3>利潤結算</h3>';
    html += '<button class="btn" onclick="ProfitPage.backToRoom()">← 返回房務管理</button>';
    html += '</div>';

    /* 選團 */
    html += '<div class="card mb-md"><div class="card-body">';
    html += '<div class="form-group mb-0"><label>選擇團</label>';
    html += '<select id="profit-trip-select" class="form-input auto-width" onchange="ProfitPage.selectTrip(this.value)">';
    html += '<option value="">選擇團...</option>';
    trips.forEach(function(t) {
      html += '<option value="' + t.id + '"' + (_selectedTrip === t.id ? ' selected' : '') + '>' + t.id + ' ' + (t.notes || '') + '</option>';
    });
    html += '</select></div></div></div>';

    if (!_selectedTrip) {
      html += Icons.empty('請選擇一個團', '從上方團選擇器選擇要查看的團');
      container.innerHTML = html;
      return;
    }

    /* 只顯示已退房的訂房 */
    var allBookings = Bookings.getByTrip(_selectedTrip);
    var bookings = allBookings.filter(function(b) { return b.status === BOOKING_STATUS.CHECKED_OUT; });

    if (_search) {
      var q = _search.toLowerCase();
      bookings = bookings.filter(function(b) {
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        return (b.guestName || '').toLowerCase().indexOf(q) >= 0 ||
               (b.hotel || '').toLowerCase().indexOf(q) >= 0 ||
               (agent ? agent.name.toLowerCase().indexOf(q) >= 0 : false) ||
               (member ? member.name.toLowerCase().indexOf(q) >= 0 : false);
      });
    }

    var sorted = bookings.slice().sort(function(a, b) {
      var va = a[_sortField] || '';
      var vb = b[_sortField] || '';
      if (va < vb) return _sortAsc ? -1 : 1;
      if (va > vb) return _sortAsc ? 1 : -1;
      return 0;
    });

    var totalItems = sorted.length;
    var totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
    if (_page > totalPages) _page = totalPages;
    var startIdx = (_page - 1) * PAGE_SIZE;
    var pageItems = sorted.slice(startIdx, startIdx + PAGE_SIZE);

    /* KPI */
    var totalChargeGuest = 0, totalChargeCompany = 0, totalProfit = 0, overdueCount = 0;
    var now = new Date();
    sorted.forEach(function(b) {
      totalChargeGuest += (b.chargeGuest || 0);
      totalChargeCompany += (b.chargeCompany || 0);
      totalProfit += ((b.chargeGuest || 0) - (b.chargeCompany || 0));
      if (b.checkOut) {
        var coDate = new Date(b.checkOut);
        var daysSince = Math.floor((now - coDate) / (1000 * 60 * 60 * 24));
        if (daysSince > 7) overdueCount++;
      }
    });

    html += '<div class="kpi-grid mb-md">';
    html += kpiCard('待結算筆數', sorted.length, 'var(--warning)');
    html += kpiCard('向客人收合計', totalChargeGuest.toLocaleString(), 'var(--info)');
    html += kpiCard('交公司合計', totalChargeCompany.toLocaleString(), 'var(--danger)');
    html += kpiCard('利潤合計', (totalProfit >= 0 ? '+' : '') + totalProfit.toLocaleString(), totalProfit >= 0 ? 'var(--success)' : 'var(--danger)');
    if (overdueCount > 0) { html += kpiCard('超期>7天', overdueCount + '筆', 'var(--danger)'); }
    html += '</div>';

    /* 公式 */
    html += '<div style="margin-bottom:12px;color:var(--text-secondary);font-size:var(--font-size-sm);">利潤 = 向客人收 − 交公司。填入交公司金額後自動計算。</div>';

    /* 批量操作 */
    var selCount = Object.keys(_selectedIds).length;
    html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;flex-wrap:wrap;">';
    html += '<div class="rm-search-bar" class="flex-1"><input type="text" class="form-input" placeholder="搜索客人、會員、代理、酒店..." value="' + escHtml(_search) + '" oninput="ProfitPage.onSearch(this.value)"></div>';
    if (selCount > 0) {
      html += '<button class="btn btn-primary" onclick="ProfitPage.batchArchive()">確認歸檔 (' + selCount + '筆)</button>';
    }
    html += '</div>';

    if (pageItems.length === 0) {
      html += Icons.empty('無待結算訂房');
    } else {
      html += '<div class="table-wrapper"><table class="data-table" id="profit-table"><thead><tr>';
      html += '<th style="width:30px;"><input type="checkbox" onclick="ProfitPage.toggleAll(this)" title="全選"></th>';
      html += '<th>客人</th>';
      html += '<th>會員</th>';
      html += '<th>代理</th>';
      html += sortTH('酒店', 'hotel');
      html += '<th>房型</th>';
      html += sortTH('入住', 'checkIn');
      html += sortTH('退房', 'checkOut');
      html += '<th class="num">晚</th>';
      html += '<th>費用</th>';
      html += '<th class="num">向客人收</th>';
      html += '<th class="num">交公司</th>';
      html += '<th class="num">利潤</th>';
      html += '<th>操作</th>';
      html += '</tr></thead><tbody>';

      pageItems.forEach(function(b) {
        var agent = Agents.getById(b.agentId);
        var member = Members.getById(b.memberId);
        var chargeGuest = b.chargeGuest || 0;
        var chargeCompany = b.chargeCompany || 0;
        var profit = chargeGuest - chargeCompany;
        var checked = _selectedIds[b.id] ? ' checked' : '';

        /* 超期檢查 */
        var overdueClass = '';
        if (b.checkOut) {
          var coDate2 = new Date(b.checkOut);
          var daysSince2 = Math.floor((now - coDate2) / (1000 * 60 * 60 * 24));
          if (daysSince2 > 7) overdueClass = ' class="text-danger fw-semibold"';
        }

        html += '<tr' + (checked ? ' style="background:var(--bg-hover);"' : '') + '>';
        html += '<td><input type="checkbox" ' + checked + ' onclick="ProfitPage.toggleSelect(\'' + b.id + '\')"></td>';
        html += '<td class="fw-semibold">' + escHtml(b.guestName || '') + '</td>';
        html += '<td>' + (member ? escHtml(member.name) + '<br><span class="text-muted">' + escHtml(member.id) + '</span>' : '<span class="text-muted">-</span>') + '</td>';
        html += '<td>' + (agent ? agent.name : b.agentId || '') + '</td>';
        html += '<td>' + escHtml(b.hotel || '') + '</td>';
        html += '<td class="text-sm">' + escHtml(b.roomType || '') + '</td>';
        html += '<td' + overdueClass + '>' + (b.checkIn || '') + '</td>';
        html += '<td' + overdueClass + '>' + (b.checkOut || '') + '</td>';
        html += '<td class="num">' + (b.nights || 1) + '</td>';
        html += '<td><span class="badge" style="background:var(--danger);color:#fff;">收費</span></td>';
        html += '<td class="num">' + chargeGuest.toLocaleString() + '</td>';
        html += '<td class="num"><input type="number" min="0" value="' + chargeCompany + '" onchange="ProfitPage.updateCompany(\'' + b.id + '\', this.value)" style="width:80px;text-align:right;padding:2px 4px;font-size:var(--font-size-sm);border:1px solid var(--border);border-radius:var(--radius);background:var(--bg-primary);color:var(--text-primary);"></td>';
        html += '<td class="num" style="font-weight:700;' + (profit >= 0 ? 'color:var(--success);' : 'color:var(--danger);') + '">' + (profit >= 0 ? '+' : '') + profit.toLocaleString() + '</td>';
        html += '<td><button class="btn-sm btn-primary" onclick="ProfitPage.archiveOne(\'' + b.id + '\')">歸檔</button></td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>'

      /* 分頁 */
      html += '<div class="paginator">';
      html += '<span class="paginator-info">第 ' + _page + '/' + totalPages + ' 頁，共 ' + totalItems + ' 筆</span>';
      html += '<div class="paginator-btns">';
      html += '<button class="btn-sm" onclick="ProfitPage.goPage(1)" ' + (_page === 1 ? 'disabled' : '') + '>首頁</button> ';
      html += '<button class="btn-sm" onclick="ProfitPage.goPage(' + (_page - 1) + ')" ' + (_page === 1 ? 'disabled' : '') + '>上一頁</button> ';
      html += '<button class="btn-sm" onclick="ProfitPage.goPage(' + (_page + 1) + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>下一頁</button> ';
      html += '<button class="btn-sm" onclick="ProfitPage.goPage(' + totalPages + ')" ' + (_page >= totalPages ? 'disabled' : '') + '>末頁</button>';
      html += '</div></div>';
    }

    container.innerHTML = html;
  }

  function kpiCard(label, value, color) {
    return '<div class="kpi-card" style="border-left:3px solid ' + color + ';">' +
      '<div class="kpi-label row-hint">' + escHtml(label) + '</div>' +
      '<div class="kpi-value" class="text-2xl-strong">' + value + '</div></div>';
  }

  function sortTH(label, field) {
    var arrow = '';
    if (_sortField === field) {
      arrow = _sortAsc ? ' ▲' : ' ▼';
    }
    return '<th onclick="ProfitPage.sortByCol(\'' + field + '\')" class="clickable-nowrap">' + label + '<span class="text-2xs text-accent">' + arrow + '</span></th>';
  }

  function selectTrip(tripId) {
    _selectedTrip = tripId;
    _page = 1;
    _search = '';
    _selectedIds = {};
    render();
  }

  function goPage(n) { _page = n; render(); }

  function onSearch(term) {
    _search = term;
    _page = 1;
    if (_searchTimer) clearTimeout(_searchTimer);
    _searchTimer = setTimeout(function() { render(); }, 300);
  }

  function sortByCol(field) {
    if (_sortField === field) { _sortAsc = !_sortAsc; }
    else { _sortField = field; _sortAsc = true; }
    _page = 1;
    render();
  }

  function updateCompany(bookingId, val) {
    var num = parseFloat(val) || 0;
    Bookings.update(bookingId, { chargeCompany: num });
    Toast.success('交公司金額已更新');
    /* 重新渲染以更新利潤欄 */
    setTimeout(function() { render(); }, 200);
  }

  function toggleSelect(id) {
    if (_selectedIds[id]) { delete _selectedIds[id]; }
    else { _selectedIds[id] = true; }
    render();
  }

  function toggleAll(checkbox) {
    var allBookings = Bookings.getByTrip(_selectedTrip).filter(function(b) { return b.status === BOOKING_STATUS.CHECKED_OUT; });
    if (checkbox.checked) {
      allBookings.forEach(function(b) { _selectedIds[b.id] = true; });
    } else {
      _selectedIds = {};
    }
    render();
  }

  function batchArchive() {
    var ids = Object.keys(_selectedIds);
    if (ids.length === 0) { Toast.show('未選擇任何訂房', 'warning'); return; }
    Modal.confirm('確定將 ' + ids.length + ' 筆訂房歸檔為歷史記錄？歸檔後不可復原。', function() {
      ids.forEach(function(id) {
        Bookings.update(id, { _archived: true, _archivedAt: Date.now() });
      });
      _selectedIds = {};
      Toast.success(ids.length + ' 筆已歸檔');
      render();
    });
  }

  function archiveOne(id) {
    Modal.confirm('確定歸檔此訂房？', function() {
      Bookings.update(id, { _archived: true, _archivedAt: Date.now() });
      delete _selectedIds[id];
      Toast.success('已歸檔');
      render();
    });
  }

  function backToRoom() {
    window._targetTripId = _selectedTrip;
    Router.go('room');
  }


  return {
    render: render,
    selectTrip: selectTrip,
    goPage: goPage,
    onSearch: onSearch,
    sortByCol: sortByCol,
    updateCompany: updateCompany,
    toggleSelect: toggleSelect,
    toggleAll: toggleAll,
    batchArchive: batchArchive,
    archiveOne: archiveOne,
    backToRoom: backToRoom,
  };
})();

function renderProfit() { ProfitPage.render(); }


// === src/pages/agent.js ===
/**
 * pages/agent.js — 代理帳務頁
 * 代理级折抵 + 配额条 + 會員/房间/开销三层子表格
 * 支援 monthlyOnly 分潤模式配置（分潤模式下拉、各廳自定月退率、分潤預覽、月退率驗證、審計記錄）
 * 依赖: core/constants.js, core/escape.js, core/events.js, core/router.js, calc/stats.js, data/agents.js, data/bookings.js, data/memberTxs.js, data/settings.js, data/shareholders.js, data/trips.js, ui/formfx.js, ui/icons.js, ui/modal.js, ui/toast.js
 */
var AgentPage = (function() {
  var _lastTargetId = 'page-agent';

  function render(targetId) {
    if (targetId) _lastTargetId = targetId;
    var agents = Agents.getAll();
    var mtxs = MemberTxs.getAll();
    var bookings = Bookings.getAll();
    var html = '';

    html += '<div class="card">';
    html += '<div class="card-header"><h3>代理帳務</h3>';
    html += '<button class="btn btn-primary" onclick="AgentPage.showAdd()">+ 新增代理</button></div>';

    if (agents.length === 0) {
      html += Icons.empty('尚無代理', '點擊「新增代理」建立第一筆資料');
    } else {
      agents.forEach(function(agent) {
        var sh = Shareholders.getById(agent.shareholderId);
        /* 與 WEB agent.js / calcAgentQuota 同口徑：排除封存團、及團已被墓碑刪除的訂房/帳務
           （無 tripId 的 Bot 資料保留）；v2.3.2 順便修：團已刪除也排除 */
        function notSealed(t) {
          if (!t.tripId) return true;
          var trip = Trips.getById(t.tripId);
          if (!trip) return false;
          return trip.status !== TRIP_STATUS.SEALED;
        }
        var agentTxs = mtxs.filter(function(t) {
          var effectiveAgentId = t.agentId;
          if (!effectiveAgentId && t.tripId) {
            var trip = Trips.getById(t.tripId);
            effectiveAgentId = trip ? (trip.agentId || '') : '';
          }
          return effectiveAgentId === agent.id && notSealed(t);
        });
        var agentBookings = bookings.filter(function(b) {
          var effectiveAgentId = b.agentId;
          if (!effectiveAgentId && b.tripId) {
            var trip = Trips.getById(b.tripId);
            effectiveAgentId = trip ? (trip.agentId || '') : '';
          }
          return effectiveAgentId === agent.id && notSealed(b);
        });
        /* v2.3.3 達標計算含封存團（代理管理頁專用）：代理累積所有團（含封存）總洗碼後結算達標；
         * 團已被墓碑刪除仍排除。帳務明細（agentTxs/agentBookings）維持排除封存團 */
        var quota = calcAgentQuota(agent.id, mtxs, bookings, { includeSealed: true });
        var totalSettle = agentTxs.reduce(function(s, t) { return s + (t.totalSettlement || 0); }, 0);
        var pct = quota.totalThreshold > 0 ? Math.min(100, (quota.totalWashRaw / quota.totalThreshold) * 100) : 0;
        var isMonthlyOnly = (agent.profitMode || PROFIT_MODE.STANDARD) === PROFIT_MODE.MONTHLY_ONLY;

        html += '<div class="agent-card">';
        html += '<div class="agent-card-header">';
        html += '<span class="agent-name">' + esc(agent.name) + '</span>';
        if (isMonthlyOnly) {
          html += '<span class="badge badge-warning" style="font-size:11px;padding:2px 8px;border-radius:4px;background:var(--warning);color:#fff;margin-left:6px;">僅月退</span>';
        }
        html += '<span class="agent-sh">上線: ' + (sh ? sh.name : '-') + '</span>';
        html += '<button class="btn btn-sm btn-secondary" style="margin-left:auto;padding:4px 12px;font-size:12px;" onclick="AgentPage.editAgent(\'' + agent.id + '\')">編輯</button>';
        html += '<button class="btn btn-sm btn-danger" style="padding:4px 12px;font-size:12px;margin-left:4px;" onclick="AgentPage.delAgent(\'' + agent.id + '\')">刪除</button>';
        html += '</div>';

        // 配额条
        html += '<div class="quota-section">';
        html += '<div class="quota-info">';
        html += '<span>總洗碼: ' + quota.totalWashCode.toFixed(2) + ' 萬</span>';
        html += '<span>總門檻: ' + (quota.totalThreshold / 10000).toFixed(0) + ' 萬</span>';
        html += '<span class="' + (quota.isMet ? 'text-success' : 'text-warning') + '">' + (!quota.hasBookings ? '— 無訂房' : (quota.isMet ? ICONS.check + ' 達標' : ICONS.alert + ' 未達標')) + '</span>';
        html += '</div>';
        html += '<div style="display:flex;align-items:center;"><div class="quota-bar" class="flex-1"><div class="quota-fill" style="width:' + pct + '%;' + (quota.isMet ? '' : (pct < 50 ? 'background:var(--accent);' : 'background:var(--warning);')) + '"></div></div><span class="quota-pct">' + pct.toFixed(1) + '%</span></div>';
        html += '</div>';

        // 统计
        html += '<div class="agent-stats">';
        html += '<span>會員帳務: ' + agentTxs.length + ' 筆</span>';
        html += '<span>訂房: ' + agentBookings.reduce(function(s, b) { return s + (b.nights || 1); }, 0) + ' 晚</span>';
        html += '<span>合計交收: NT$ ' + Math.round(totalSettle).toLocaleString() + '</span>';
        html += '</div>';

        // monthlyOnly 說明
        if (isMonthlyOnly) {
          html += '<div style="margin:6px 0;padding:6px 10px;background:var(--bg-secondary);border-radius:4px;font-size:12px;color:var(--text-muted);">';
          html += '※ 此代理為「僅月退」模式：現結不進錢池，月退用自定費率進錢池，洗碼不計入所屬股東個人貢獻';
          if (agent.customRebateRates) {
            var halls = Settings.getVipHalls();
            var rateStrs = [];
            Object.keys(agent.customRebateRates).forEach(function(hid) {
              var h = halls.find(function(x) { return x.id === hid; });
              if (h) {
                var r = agent.customRebateRates[hid];
                rateStrs.push(h.name + ' ' + (r * 100).toFixed(3) + '%');
              }
            });
            if (rateStrs.length > 0) {
              html += '<br>自定月退費率：' + rateStrs.join('、');
            }
          }
          html += '</div>';
        }

        // 會員明细
        if (agentTxs.length > 0) {
          var halls = Settings.getVipHalls();
          html += '<details><summary>會員帳務明細</summary>';
          html += '<div class="table-wrapper"><table class="data-table compact"><thead><tr>';
          html += '<th>會員</th><th>廳</th><th>洗碼</th><th>交收金額</th>';
          html += '</tr></thead><tbody>';
          agentTxs.forEach(function(tx) {
            var m = Members.getById(tx.memberId);
            var hall = halls.find(function(h) { return h.id === tx.vipHallId; });
            var hallName = hall ? hall.name : (tx.vipHallId || '');
            var settleNT = (tx.totalSettlement || 0) * 10000;
            html += '<tr>';
            html += '<td>' + (m ? m.name : tx.memberId) + '</td>';
            html += '<td>' + hallName + '</td>';
            html += '<td>' + (tx.washCode || 0) + '</td>';
            html += '<td>' + Math.round(settleNT).toLocaleString() + '</td>';
            html += '</tr>';
          });
          html += '</tbody></table></div></details>';
        }

        // 订房明细
        if (agentBookings.length > 0) {
          html += '<details><summary>訂房明細</summary>';
          html += '<div class="table-wrapper"><table class="data-table compact"><thead><tr>';
          html += '<th>客人</th><th>酒店</th><th>房型</th><th>入住</th><th>退房</th><th>門檻</th>';
          html += '</tr></thead><tbody>';
          agentBookings.forEach(function(b) {
            html += '<tr>';
            html += '<td>' + (b.guestName || '') + '</td>';
            html += '<td>' + (b.hotel || '') + '</td>';
            html += '<td>' + (b.roomType || '') + '</td>';
            html += '<td>' + (b.checkIn || '') + '</td>';
            html += '<td>' + (b.checkOut || '') + '</td>';
            html += '<td>' + ((b.threshold || 0) / 10000).toFixed(0) + '萬</td>';
            html += '</tr>';
          });
          html += '</tbody></table></div></details>';
        }

        html += '</div>';
      });
    }

    html += '</div>';
    var container = document.getElementById(_lastTargetId);
    if (container) container.innerHTML = html;
  }

  // =========================================================================
  // 輔助：取得有月退的廳
  // =========================================================================
  function getMonthlyRebateHalls() {
    return Settings.getVipHalls().filter(function(h) { return h.hasMonthlyRebate; });
  }

  // =========================================================================
  // 輔助：生成表單 HTML（新增 / 編輯共用）
  // agent 參數為 null 時是新增模式，否則為編輯模式（預填資料）
  // =========================================================================
  function buildForm(agent) {
    var shareholders = Shareholders.getAll();
    var halls = getMonthlyRebateHalls();
    var mode = agent ? (agent.profitMode || PROFIT_MODE.STANDARD) : PROFIT_MODE.STANDARD;
    var customRates = agent ? (agent.customRebateRates || {}) : {};

    var html = '';
    // 代理名稱
    html += '<div class="form-group"><label>代理名稱</label>';
    html += '<input type="text" id="ag-name" class="form-input" value="' + esc(agent ? (agent.name || '') : '') + '"></div>';

    // 所屬股東
    html += '<div class="form-group"><label>所屬股東</label>';
    html += '<select id="ag-sh" class="form-input">';
    shareholders.forEach(function(sh) {
      var selected = agent && agent.shareholderId === sh.id ? ' selected' : '';
      html += '<option value="' + sh.id + '"' + selected + '>' + esc(sh.name) + '</option>';
    });
    html += '</select></div>';

    // 分潤模式
    html += '<div class="form-group"><label>分潤模式</label>';
    html += '<select id="ag-profit-mode" class="form-input" onchange="AgentPage.onModeChange()">';
    html += '<option value="standard"' + (mode === PROFIT_MODE.STANDARD ? ' selected' : '') + '>標準模式（現結+月退進錢池，洗碼計入貢獻）</option>';
    html += '<option value="monthlyOnly"' + (mode === PROFIT_MODE.MONTHLY_ONLY ? ' selected' : '') + '>僅月退模式（特殊代理：現結不進錢池，月退用自定費率，洗碼不計入貢獻）</option>';
    html += '</select></div>';

    // 各廳自定月退費率（僅 monthlyOnly 時顯示）
    html += '<div id="ag-rebate-rates" style="display:' + (mode === PROFIT_MODE.MONTHLY_ONLY ? 'block' : 'none') + ';">';
    html += '<div class="form-group"><label>各廳自定月退費率（%）</label>';
    html += '<p style="font-size:12px;color:var(--text-muted);margin:0 0 10px;line-height:1.6;">';
    html += '輸入百分比數值，例如 0.03 = 0.03%。留空表示使用廳預設費率。<br>';
    html += '此費率決定該代理在各廳的月退金額如何進入錢池由所有股東均分。';
    html += '</p>';
    halls.forEach(function(hall) {
      var currentRate = customRates[hall.id];
      // 存儲為小數(0.0005)，顯示為百分比(0.05)
      var ratePct = (typeof currentRate === 'number') ? (currentRate * 100).toString() : '';
      var defaultPct = (hall.rebateRate * 100).toFixed(2);
      var maxPct = (hall.rate * 100).toFixed(2);
      html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">';
      html += '<span style="min-width:70px;font-size:13px;">' + esc(hall.name) + '</span>';
      html += '<input type="number" id="ag-rebate-' + hall.id + '" class="form-input" style="width:100px;" step="0.001" min="0" max="' + maxPct + '" placeholder="預設' + defaultPct + '" value="' + ratePct + '">';
      html += '<span style="font-size:12px;color:var(--text-muted);">%</span>';
      html += '<span style="font-size:11px;color:var(--text-muted);">上限' + maxPct + '%</span>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // 分潤預覽區
    html += '<div id="ag-preview" style="margin-top:12px;padding:12px;background:var(--bg-secondary);border-radius:6px;display:none;font-size:13px;line-height:1.8;"></div>';

    return html;
  }

  // =========================================================================
  // 輔助：驗證並收集表單資料
  // 回傳 { name, shareholderId, profitMode, customRebateRates } 或 null（驗證失敗）
  // =========================================================================
  function collectFormData() {
    var name = document.getElementById('ag-name').value.trim();
    var shId = document.getElementById('ag-sh').value;
    var mode = document.getElementById('ag-profit-mode').value;

    if (!name) { Toast.error('代理名稱必填'); FormFX.invalid(document.getElementById('ag-name')); return null; }

    var customRates = null;
    if (mode === PROFIT_MODE.MONTHLY_ONLY) {
      customRates = {};
      var halls = getMonthlyRebateHalls();
      var hasError = false;
      halls.forEach(function(hall) {
        var input = document.getElementById('ag-rebate-' + hall.id);
        if (!input) return;
        var val = input.value.trim();
        if (val === '') return; // 留空 = 用預設

        var pct = parseFloat(val);
        if (isNaN(pct) || pct < 0) {
          Toast.error(hall.name + ' 月退費率不得為負數');
          FormFX.invalid(input);
          hasError = true;
          return;
        }
        var maxPct = hall.rate * 100;
        if (pct > maxPct) {
          Toast.error(hall.name + ' 月退費率不得超過總退佣率 ' + maxPct.toFixed(2) + '%');
          FormFX.invalid(input);
          hasError = true;
          return;
        }
        // 百分比轉小數
        customRates[hall.id] = pct / 100;
      });
      if (hasError) return null;

      // 若全部留空，設為 null（使用全預設）
      if (Object.keys(customRates).length === 0) customRates = null;
    }

    return { name: name, shareholderId: shId, profitMode: mode, customRebateRates: customRates };
  }

  // =========================================================================
  // 輔助：更新分潤預覽
  // =========================================================================
  function updatePreview() {
    var modeEl = document.getElementById('ag-profit-mode');
    var preview = document.getElementById('ag-preview');
    if (!modeEl || !preview) return;

    var mode = modeEl.value;
    if (mode !== PROFIT_MODE.MONTHLY_ONLY) {
      preview.style.display = 'none';
      return;
    }

    var halls = getMonthlyRebateHalls();
    var html = '<strong>' + ICONS.chart + ' 分潤預覽</strong><br>';
    html += '<span class="text-danger">●</span> 現結（盈利）：全退代理，不進錢池<br>';
    html += '<span class="text-success">●</span> 月退費：用下方費率進錢池，由所有股東依持股均分<br>';
    html += '<span style="color:var(--warning);">●</span> 洗碼：計入總洗碼，但不計入所屬股東個人貢獻<br>';
    html += '<br><strong>各廳月退費率：</strong><br>';
    halls.forEach(function(hall) {
      var input = document.getElementById('ag-rebate-' + hall.id);
      var val = input ? input.value.trim() : '';
      var defaultPct = (hall.rebateRate * 100).toFixed(3);
      var ratePct, label;
      if (val === '' || isNaN(parseFloat(val))) {
        ratePct = defaultPct;
        label = '預設';
      } else {
        ratePct = parseFloat(val).toFixed(3);
        label = (parseFloat(val).toFixed(3) === defaultPct) ? '預設' : '自定';
      }
      html += hall.name + '：<strong>' + ratePct + '%</strong> (' + label + ')<br>';
    });
    preview.innerHTML = html;
    preview.style.display = 'block';
  }

  // =========================================================================
  // 分潤模式切換事件
  // =========================================================================
  function onModeChange() {
    var mode = document.getElementById('ag-profit-mode').value;
    var ratesDiv = document.getElementById('ag-rebate-rates');
    if (ratesDiv) ratesDiv.style.display = (mode === PROFIT_MODE.MONTHLY_ONLY) ? 'block' : 'none';
    updatePreview();
  }

  // =========================================================================
  // 新增代理
  // =========================================================================
  function showAdd() {
    var shareholders = Shareholders.getAll();
    if (shareholders.length === 0) {
      Toast.error('請先在股東頁面新增股東');
      return;
    }
    var html = buildForm(null);
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="AgentPage.save()">儲存</button></div>';
    Modal.open('新增代理', html, { onOpen: function() { updatePreview(); } });
  }

  function save() {
    var data = collectFormData();
    if (!data) return;
    // 審計記錄
    data._auditLog = [{
      action: 'create',
      timestamp: Date.now(),
      operator: 'web-user',
    }];
    Agents.create(data);
    Modal.close();
    Toast.success('代理已新增');
    render();
  }

  // =========================================================================
  // 編輯代理
  // =========================================================================
  function editAgent(id) {
    var agent = Agents.getById(id);
    if (!agent) { Toast.error('代理不存在'); return; }
    var html = buildForm(agent);
    html += '<div class="row-actions">';
    html += '<button class="btn btn-secondary" onclick="Modal.close()" style="margin-right:8px;">取消</button>';
    html += '<button class="btn btn-primary" onclick="AgentPage.saveEdit(\'' + id + '\')">儲存修改</button>';
    html += '</div>';
    Modal.open('編輯代理', html, { onOpen: function() { updatePreview(); } });
  }

  function saveEdit(id) {
    var agent = Agents.getById(id);
    if (!agent) { Toast.error('代理不存在'); return; }
    var data = collectFormData();
    if (!data) return;

    // 比較變更，建立審計記錄
    var changes = {};
    if (agent.name !== data.name) {
      changes.name = { from: agent.name, to: data.name };
    }
    if (agent.shareholderId !== data.shareholderId) {
      changes.shareholderId = { from: agent.shareholderId, to: data.shareholderId };
    }
    var oldMode = agent.profitMode || PROFIT_MODE.STANDARD;
    if (oldMode !== data.profitMode) {
      changes.profitMode = { from: oldMode, to: data.profitMode };
    }
    var oldRates = JSON.stringify(agent.customRebateRates || null);
    var newRates = JSON.stringify(data.customRebateRates || null);
    if (oldRates !== newRates) {
      changes.customRebateRates = { from: agent.customRebateRates || null, to: data.customRebateRates };
    }

    // 附加審計記錄
    if (Object.keys(changes).length > 0) {
      var auditLog = agent._auditLog || [];
      auditLog.push({
        action: 'update',
        changes: changes,
        timestamp: Date.now(),
        operator: 'web-user',
      });
      data._auditLog = auditLog;
    }

    Agents.update(id, data);
    Modal.close();
    Toast.success('代理已更新');
    render();
  }

  // =========================================================================
  // 刪除代理
  // =========================================================================
  function delAgent(id) {
    var agent = Agents.getById(id);
    if (!agent) return;
    Modal.confirm('確定刪除代理「' + agent.name + '」？此操作不可復原。', function() {
      Agents.remove(id);
      Toast.success('代理已刪除');
      render();
    });
  }

  // 帳務數據同步後自動刷新
  EventBus.on(EVENTS.MTX_LOADED, function() {
    if (Router.getCurrent() === 'agent') render();
  });

  // v2.3.8 團數據同步後自動刷新（封存/建團異動 → 代理面板即時反映）
  EventBus.on(EVENTS.TRIPS_LOADED, function() {
    if (Router.getCurrent() === 'agent') render();
  });

  return {
    render: render,
    showAdd: showAdd,
    save: save,
    editAgent: editAgent,
    saveEdit: saveEdit,
    delAgent: delAgent,
    onModeChange: onModeChange,
  };
})();


// === src/pages/shareholder.js ===
/**
 * pages/shareholder.js — 股東分潤頁 v11
 * 佈局: 費率藥丸 → 摘要條 → 分潤明細(含匯率藥丸) → 額外收入 → 圖表+明細雙欄 → 股東KPI
 * 依赖: core/constants.js, core/escape.js, calc/stats.js, core/datetime.js, core/events.js, core/router.js, data/agents.js, data/extraIncome.js, data/memberTxs.js, data/settings.js, data/shareholders.js, data/trips.js, ui/modal.js, ui/toast.js, ui/formfx.js, ui/icons.js
 */
var ShareholderPage = (function() {
  var _currentMonth = '';

  function hallClass(hallId) {
    if (hallId === 'lyi') return 'sh-hall-lyi';
    if (hallId === 'yub') return 'sh-hall-yub';
    if (hallId === 'jm1') return 'sh-hall-jm1';
    if (hallId === 'jm8') return 'sh-hall-jm8';
    return '';
  }

  function fmtHK(n) {
    return Math.round(n).toLocaleString();
  }

  function fmtWan(n) {
    var v = Math.round(n * 100) / 100;
    if (Math.abs(v - Math.round(v)) < 1e-6) return String(Math.round(v));
    return v.toFixed(2).replace(/\.?0+$/, '');
  }

  function render() {
    var shareholders = Shareholders.getAll();
    var mtxs = MemberTxs.getAll();
    var settings = Settings.get();
    var halls = Settings.getVipHalls();
    _currentMonth = TWDate.monthStr();

    // 當月交易
    var monthTxs = mtxs.filter(function(t) {
      return t.date && t.date.substring(0, 7) === _currentMonth;
    });

    // 輔助：取得交易廳 ID（交易自身 vipHallId 優先，無指定才回退到團 hallIds）
    function getHallId(tx) {
      if (tx.vipHallId) return tx.vipHallId;
      if (tx.tripId) {
        var trip = Trips.getById(tx.tripId);
        if (trip && Array.isArray(trip.hallIds) && trip.hallIds.length > 0) {
          return trip.hallIds[0];
        }
      }
      return 'unknown';
    }

    // 輔助：判斷交易是否屬於 monthlyOnly 代理
    function isMonthlyOnlyTx(tx) {
      if (!tx.agentId || typeof Agents === 'undefined') return false;
      var agent = Agents.getById(tx.agentId);
      if (!agent) return false;
      return agent.profitMode === PROFIT_MODE.MONTHLY_ONLY;
    }

    // 計算各廳洗碼（全量，含 monthlyOnly）+ 分離標準/monthlyOnly
    var totalWash = 0;
    var totalStandardWash = 0;     // 不含 monthlyOnly，供貢獻度計算用
    var hallWash = {};             // 全量（含 monthlyOnly）
    var standardHallWash = {};     // 標準交易
    var monthlyOnlyHallWash = {};  // monthlyOnly 交易
    var moAgentHallWash = {};      // monthlyOnly 按 agentId→hallId 分組（供自定月退計算用）
    halls.forEach(function(h) {
      hallWash[h.id] = 0;
      standardHallWash[h.id] = 0;
      monthlyOnlyHallWash[h.id] = 0;
    });
    monthTxs.forEach(function(tx) {
      var hallId = getHallId(tx);
      var wash = tx.washCode || 0;
      totalWash += wash;
      if (!isMonthlyOnlyTx(tx)) totalStandardWash += wash;
      if (hallWash[hallId] !== undefined) hallWash[hallId] += wash;

      if (isMonthlyOnlyTx(tx)) {
        if (monthlyOnlyHallWash[hallId] !== undefined) monthlyOnlyHallWash[hallId] += wash;
        if (!moAgentHallWash[tx.agentId]) moAgentHallWash[tx.agentId] = {};
        moAgentHallWash[tx.agentId][hallId] = (moAgentHallWash[tx.agentId][hallId] || 0) + wash;
      } else {
        if (standardHallWash[hallId] !== undefined) standardHallWash[hallId] += wash;
      }
    });

    // 計算各廳盈利(現結)和月退費
    // 標準交易：盈利=洗碼×現結%, 月退=洗碼×月退%
    // monthlyOnly交易：盈利不計, 月退=洗碼×代理自定費率(無自定則用廳預設)
    var hallData = {};
    var totalProfit = 0;   // 盈利(現結，只計標準交易)
    var totalRebate = 0;   // 月退費（標準+monthlyOnly）
    var totalMonthlyOnlyRebate = 0; // 特殊代理月退（僅 monthlyOnly，100%按持股分）
    halls.forEach(function(hall) {
      var stdWash = standardHallWash[hall.id] || 0;
      var moWash = monthlyOnlyHallWash[hall.id] || 0;
      var allWash = stdWash + moWash;
      var stdWashRaw = stdWash * 10000;
      var cashRate = hall.cashRate || hall.rate;
      var profit = stdWashRaw * cashRate;                           // 只有標準交易現結
      var stdRebate = hall.hasMonthlyRebate ? stdWashRaw * hall.rebateRate : 0;

      // monthlyOnly 月退：遍歷各代理用自定費率
      var moRebate = 0;
      if (hall.hasMonthlyRebate && moWash > 0) {
        Object.keys(moAgentHallWash).forEach(function(agentId) {
          var agent = (typeof Agents !== 'undefined') ? Agents.getById(agentId) : null;
          if (!agent) return;
          var agentHallWash = moAgentHallWash[agentId][hall.id] || 0;
          if (agentHallWash === 0) return;
          var rate = (agent.customRebateRates && typeof agent.customRebateRates[hall.id] === 'number')
            ? agent.customRebateRates[hall.id]
            : hall.rebateRate;
          moRebate += agentHallWash * 10000 * rate;
        });
      }

      var rebate = stdRebate + moRebate;
      hallData[hall.id] = {
        wash: allWash, standardWash: stdWash, monthlyOnlyWash: moWash,
        profit: profit, rebate: rebate, standardRebate: stdRebate, monthlyOnlyRebate: moRebate,
        total: profit + rebate,
      };
      totalProfit += profit;
      totalRebate += rebate;
      totalMonthlyOnlyRebate += moRebate;
    });
    var grandTotal = totalProfit + totalRebate; // 合計（錢池）

    // 額外收入
    var extraIncomes = ExtraIncome.getByMonth(_currentMonth);
    var extraProfit = extraIncomes.reduce(function(s, e) { return s + (e.amountHK || 0); }, 0);

    // 門票利潤計算（水舞間/水上樂園）
    var tp = Settings.getTicketPrices();
    var ticketProfits = [];
    var totalTicketProfit = 0;
    monthTxs.forEach(function(tx) {
      var expenses = tx.expenses || [];
      expenses.forEach(function(e) {
        if (!e.ticketType || e.ticketType === 'other') return;
        var ourPrice = 0;
        if (e.ticketType === 'wp') {
          var wp = tp.waterPark || { ourPrice: 406 };
          ourPrice = wp.ourPrice || 0;
        } else if (e.ticketType.indexOf('wd-') === 0) {
          var wdIdx = parseInt(e.ticketType.substring(3));
          var wdTicket = (tp.waterDance || [])[wdIdx];
          if (wdTicket) ourPrice = wdTicket.ourPrice || 0;
        }
        var qty = e.quantity || 1;
        var profit = (e.amountHK || 0) - (ourPrice * qty);
        var agent = Agents.getById(tx.agentId);
        ticketProfits.push({
          date: tx.date || '',
          agentName: agent ? agent.name : (tx.agentId || ''),
          itemName: e.name || '',
          profitHK: profit,
        });
        totalTicketProfit += profit;
      });
    });
    var totalExtra = extraProfit + totalTicketProfit;

    // 匯率
    var monthlyRate = Settings.getMonthlyRate(_currentMonth);
    var exchangeRate = monthlyRate.shareholderRate || 4.1;

    var totalShares = shareholders.reduce(function(s, sh) { return s + (sh.shares || 0); }, 0);

    var html = '';
    html += '<div class="sh-page">';

    // ===== 1. 摘要條 + 費率條件（合併） =====
    html += '<div class="sh-summary-bar">';
    html += '<div class="sh-summary-cell"><label>當月總洗碼</label><span>' + fmtWan(totalWash) + ' 萬</span></div>';
    html += '<div class="sh-summary-divider"></div>';
    html += '<div class="sh-summary-cell"><label>總盈利(HK)</label><span>' + fmtHK(totalProfit) + '</span></div>';
    html += '<div class="sh-summary-divider"></div>';
    html += '<div class="sh-summary-cell"><label>總月退費(HK)</label><span>' + fmtHK(totalRebate) + '</span></div>';
    html += '<div class="sh-summary-divider"></div>';
    html += '<div class="sh-summary-cell"><label>額外收入(HK)</label><span>' + fmtHK(totalExtra) + '</span></div>';
    html += '<div class="sh-summary-divider"></div>';
    html += '<div class="sh-summary-cell"><label>股東數</label><span>' + shareholders.length + '</span></div>';
    // 費率條件藥丸（接在摘要後方）
    html += '<div class="sh-summary-divider"></div>';
    html += '<div class="sh-rate-pills-inline">';
    html += '<span class="sh-rate-bar-label">費率</span>';
    halls.forEach(function(hall) {
      var cashPct = ((hall.cashRate || hall.rate) * 100).toFixed(2);
      var rebatePct = (hall.rebateRate * 100).toFixed(2);
      var totalPct = (hall.rate * 100).toFixed(2);
      html += '<div class="sh-rate-pill ' + hallClass(hall.id) + '" onclick="ShareholderPage.editRate(\'' + hall.id + '\')">';
      html += '<span class="sh-rate-dot"></span>';
      html += '<span class="sh-rate-name">' + esc(hall.name) + '</span>';
      html += '<span class="sh-rate-vals">退傭<b>' + totalPct + '</b>/現結<b>' + cashPct + '</b>/月退<b>' + rebatePct + '</b></span>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // ===== 3. 分潤明細 =====
    html += '<div class="sh-card">';
    html += '<div class="sh-card-header">';
    html += '<h3 class="sh-section-title">分潤明細</h3>';
    html += '<div>';
    html += '<button class="btn-sm" onclick="PdfExport.exportShareholder()">匯出全部PDF</button> ';
    html += '<button class="btn btn-primary btn-sm" onclick="ShareholderPage.showAdd()">+ 新增股東</button>';
    html += '</div>';
    html += '</div>';

    // 匯率藥丸
    html += '<div class="sh-rate-row">';
    html += '<div class="sh-exchange-pill">';
    html += '<label>1 HKD =</label>';
    html += '<input type="number" step="0.01" value="' + exchangeRate + '" onchange="ShareholderPage.updateRate(this.value)">';
    html += '<span class="sh-exchange-unit">TWD</span>';
    html += '</div>';
    html += '</div>';

    if (shareholders.length > 0 && totalShares > 0) {
      html += '<div class="table-wrapper"><table class="sh-profit-table"><thead><tr>';
      html += '<th>股東</th><th>持股</th><th>洗碼(萬)</th>';
      html += '<th class="num">資金股50%(HK)</th><th class="cell-center">貢獻度</th><th class="num">貢獻可得(HK)</th><th class="num">特殊月退(HK)</th><th class="num">額外收入(HK)</th>';
      html += '<th class="num">合計應付(HK)</th><th class="num">合計應付(TW)</th><th class="cell-center">操作</th>';
      html += '</tr></thead><tbody>';

      var SH_COLORS = ['#378ADD', '#1D9E75', '#EF9F27', '#D4537E', '#7F77DD'];
      var sumHK = 0, sumTW = 0;
      var totalPersonalWash = 0;    // 各股東 personalWash 合計（標準交易）
      var totalMonthlyOnlyWash = 0; // 各股東 monthlyOnlyWash 合計（特殊代理）
      var contribData = [];
      shareholders.forEach(function(sh, idx) {
        var profitData = calcShareholderProfit(sh, monthTxs, settings, _currentMonth);
        var totalData = calcShareholderTotal(profitData, shareholders, totalStandardWash, grandTotal, totalExtra, totalMonthlyOnlyRebate);
        var extraShare = totalExtra * (sh.shares / totalShares);
        sumHK += totalData.totalPayableHK;
        sumTW += totalData.totalPayableTW;
        totalPersonalWash += profitData.personalWash;
        totalMonthlyOnlyWash += (profitData.monthlyOnlyWash || 0);

        var contribPct = (totalData.contribution * 100).toFixed(1);
        var barColor = SH_COLORS[idx % SH_COLORS.length];
        contribData.push({ name: sh.name, pct: totalData.contribution * 100, wash: profitData.personalWash, color: barColor });

        html += '<tr>';
        html += '<td>' + esc(sh.name) + '</td>';
        var s = sh.shares || 0;
        html += '<td>' + (s % 1 === 0 ? s : s.toFixed(1)) + '</td>';
        html += '<td>' + fmtWan(profitData.personalWash) + '</td>';
        html += '<td class="num">' + fmtHK(totalData.capital50) + '</td>';
        html += '<td class="cell-center">';
        html += '<div style="display:inline-flex;align-items:center;gap:6px;">';
        html += '<div style="width:48px;height:6px;background:var(--bg-tertiary);border-radius:3px;overflow:hidden;">';
        html += '<div style="width:' + contribPct + '%;height:100%;background:' + barColor + ';border-radius:3px;"></div>';
        html += '</div>';
        html += '<span style="font-size:var(--font-size-sm);font-weight:500;min-width:36px;text-align:right;">' + contribPct + '%</span>';
        html += '</div>';
        html += '</td>';
        html += '<td class="num">' + fmtHK(totalData.contribution50) + '</td>';
        html += '<td class="num">' + fmtHK(totalData.moRebateShare) + '</td>';
        html += '<td class="num">' + fmtHK(extraShare) + '</td>';
        html += '<td class="num">' + fmtHK(totalData.totalPayableHK) + '</td>';
        html += '<td class="num num-positive">' + fmtHK(totalData.totalPayableTW) + '</td>';
        html += '<td class="cell-center-nowrap">';
        html += '<button class="btn-sm" onclick="ShareholderPage.editShareholder(\'' + sh.id + '\')">編輯</button> ';
        html += '<button class="btn-sm btn-danger" onclick="ShareholderPage.delShareholder(\'' + sh.id + '\')">刪</button>';
        html += '</td>';
        html += '</tr>';
      });

      html += '<tr class="total-row">';
      html += '<td>合計</td><td>' + totalShares + '</td>';
      // 洗碼欄：個人洗碼合計，如有特殊代理附加標註
      if (totalMonthlyOnlyWash > 0) {
        html += '<td>' + fmtWan(totalPersonalWash) + ' <span class="row-hint">(+特殊' + fmtWan(totalMonthlyOnlyWash) + ')</span></td>';
      } else {
        html += '<td>' + fmtWan(totalPersonalWash) + '</td>';
      }
      var totalContribPct = totalWash > 0 ? (totalPersonalWash / totalWash * 100).toFixed(1) : '0.0';
      html += '<td class="num">—</td><td class="cell-center">' + totalContribPct + '%</td><td class="num">—</td><td class="num">' + fmtHK(totalMonthlyOnlyRebate) + '</td><td class="num">' + fmtHK(totalExtra) + '</td>';
      html += '<td class="num">' + fmtHK(sumHK) + '</td>';
      html += '<td class="num num-positive">' + fmtHK(sumTW) + '</td>';
      html += '<td></td>';
      html += '</tr>';
      html += '</tbody></table></div>';

      // 有特殊代理時顯示口徑說明
      if (totalMonthlyOnlyWash > 0) {
        html += '<p style="font-size:var(--font-size-sm);color:var(--text-secondary);margin-top:6px;">';
        html += '※ 特殊代理洗碼 ' + fmtWan(totalMonthlyOnlyWash) + ' 萬計入總洗碼顯示，但不計入個人貢獻度與貢獻度分母';
        html += '<br>※ 特殊代理月退 ' + fmtHK(totalMonthlyOnlyRebate) + ' 不參與50/50拆分，100%按持股均分（特殊月退欄位）';
        html += '</p>';
      }

      // 有特殊代理時，加入灰色段落填補環形圖缺口
      if (totalMonthlyOnlyWash > 0 && totalWash > 0) {
        var moPct = totalMonthlyOnlyWash / totalWash * 100;
        contribData.push({ name: '特殊代理(僅月退)', pct: moPct, wash: totalMonthlyOnlyWash, color: '#aaa' });
      }

      // 貢獻度環形圖 + 貴賓廳明細（左右並排）
      if (contribData.length > 0 && totalWash > 0) {
        var r = 60, cx = 80, cy = 80;
        var circ = 2 * Math.PI * r;
        var acc = 0;
        var segments = '';
        contribData.forEach(function(d) {
          var len = (d.pct / 100) * circ;
          segments += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + d.color + '" stroke-width="24" ';
          segments += 'stroke-dasharray="' + len + ' ' + (circ - len) + '" ';
          segments += 'stroke-dashoffset="' + (-acc) + '" ';
          segments += 'transform="rotate(-90 ' + cx + ' ' + cy + ')" />';
          acc += len;
        });
        html += '<div style="display:flex;gap:20px;margin-top:12px;padding:12px;background:var(--bg-secondary);border-radius:var(--radius);">';
        // 左：環形圖 + 圖例
        html += '<div style="display:flex;align-items:center;gap:16px;flex-shrink:0;">';
        html += '<svg width="140" height="140" viewBox="0 0 160 160" class="flex-shrink-0">' + segments + '</svg>';
        html += '<div style="display:flex;flex-direction:column;gap:6px;font-size:var(--font-size-sm);">';
        html += '<span style="font-weight:600;font-size:var(--font-size-base);margin-bottom:4px;">各股東貢獻度</span>';
        contribData.forEach(function(d) {
          html += '<span style="display:flex;align-items:center;gap:8px;">';
          html += '<span style="width:10px;height:10px;border-radius:2px;background:' + d.color + ';flex-shrink:0;"></span>';
          html += '<span>' + esc(d.name) + ' ' + d.pct.toFixed(1) + '% (' + fmtWan(d.wash) + ' 萬)</span>';
          html += '</span>';
        });
        html += '</div>';
        html += '</div>';
        // 右：貴賓廳明細
        html += '<div style="flex:1;min-width:0;">';
        html += '<div class="table-wrapper"><table class="sh-hall-detail-table"><thead><tr>';
        html += '<th>貴賓廳</th><th>洗碼(萬)</th><th>盈利(HK)</th><th>月退費(HK)</th><th>合計(HK)</th><th>佔比</th>';
        html += '</tr></thead><tbody>';
        halls.forEach(function(hall) {
          var d = hallData[hall.id];
          var sharePct = totalWash > 0 ? (d.wash / totalWash * 100).toFixed(1) : '0.0';
          html += '<tr>';
          html += '<td><span class="sh-rate-dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px;background:';
          html += hall.id === 'lyi' ? 'var(--hall-lyi)' : hall.id === 'yub' ? 'var(--hall-yub)' : hall.id === 'jm1' ? 'var(--hall-jm1)' : 'var(--hall-jm8)';
          html += ';"></span>' + esc(hall.name) + '</td>';
          // 洗碼欄：有特殊代理時標註標準/特殊
          if (d.monthlyOnlyWash > 0) {
            html += '<td>' + fmtWan(d.wash) + ' <span class="row-hint">(標準' + fmtWan(d.standardWash) + '+特殊' + fmtWan(d.monthlyOnlyWash) + ')</span></td>';
          } else {
            html += '<td>' + fmtWan(d.wash) + '</td>';
          }
          html += '<td>' + fmtHK(d.profit) + '</td>';
          // 月退費欄：有特殊代理月退時標註
          if (d.monthlyOnlyRebate > 0) {
            html += '<td>' + fmtHK(d.rebate) + ' <span class="row-hint">(含特殊' + fmtHK(d.monthlyOnlyRebate) + ')</span></td>';
          } else {
            html += '<td>' + fmtHK(d.rebate) + '</td>';
          }
          html += '<td>' + fmtHK(d.total) + '</td>';
          html += '<td>' + sharePct + '%</td>';
          html += '</tr>';
        });
        html += '<tr class="total-row">';
        html += '<td>總計</td>';
        html += '<td>' + fmtWan(totalWash) + '</td>';
        html += '<td>' + fmtHK(totalProfit) + '</td>';
        html += '<td>' + fmtHK(totalRebate) + '</td>';
        html += '<td>' + fmtHK(grandTotal) + '</td>';
        html += '<td>100%</td>';
        html += '</tr>';
        html += '</tbody></table></div>';
        html += '</div>';
        html += '</div>';
      }
    } else {
      html += Icons.empty('尚無股東資料', '點擊「新增股東」建立股東資料');
    }
    html += '</div>';

    // ===== 5. 圖表 + 額外收入雙欄 =====
    html += '<div class="sh-dual-col">';

    // 左：柱狀圖
    html += '<div class="sh-chart-card">';
    html += '<h4>全廳洗碼分布</h4>';
    html += '<div class="sh-bar-chart">';
    var maxWash = 1;
    halls.forEach(function(h) { if (hallWash[h.id] > maxWash) maxWash = hallWash[h.id]; });
    halls.forEach(function(hall) {
      var wash = hallWash[hall.id] || 0;
      var pct = maxWash > 0 ? (wash / maxWash * 100) : 0;
      var sharePct = totalWash > 0 ? (wash / totalWash * 100).toFixed(1) : '0.0';
      var fillColor = hall.id === 'lyi' ? 'var(--hall-lyi)' : hall.id === 'yub' ? 'var(--hall-yub)' : hall.id === 'jm1' ? 'var(--hall-jm1)' : 'var(--hall-jm8)';
      html += '<div class="sh-bar-row">';
      html += '<span class="sh-bar-label">' + esc(hall.name) + '</span>';
      html += '<div class="sh-bar-track">';
      html += '<div class="sh-bar-fill" style="width:' + pct + '%;background:' + fillColor + ';"><span>' + fmtWan(wash) + '</span></div>';
      html += '</div>';
      html += '<span class="sh-bar-percent">' + sharePct + '%</span>';
      html += '</div>';
    });
    html += '<div style="border-top:1px dashed var(--border);margin-top:4px;padding-top:4px;display:flex;justify-content:space-between;font-size:var(--font-size-sm);color:var(--text-secondary);">';
    html += '<span>總計</span><span style="font-weight:700;color:var(--text-primary);">' + fmtWan(totalWash) + ' 萬</span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    // 右：額外收入（半寬）
    html += '<div class="sh-chart-card">';
    html += '<div class="sh-card-header" style="padding-left:0;padding-right:0;">';
    html += '<h4>額外收入</h4>';
    html += '<button class="btn-sm" onclick="ShareholderPage.showAddExtra()">+ 新增</button>';
    html += '</div>';
    if (extraIncomes.length > 0 || ticketProfits.length > 0) {
      html += '<div class="table-wrapper"><table class="sh-extra-table"><thead><tr>';
      html += '<th>描述</th><th class="num">金額(HK)</th><th>操作</th>';
      html += '</tr></thead><tbody>';
      // 手動額外收入
      extraIncomes.forEach(function(e) {
        html += '<tr>';
        html += '<td>' + (e.description || '') + '</td>';
        html += '<td class="num">' + fmtHK(e.amountHK || 0) + '</td>';
        html += '<td><button class="btn-sm" onclick="ShareholderPage.editExtra(\'' + e.id + '\')">編輯</button> ';
        html += '<button class="btn-sm btn-danger" onclick="ShareholderPage.delExtra(\'' + e.id + '\')">刪</button></td>';
        html += '</tr>';
      });
      // 門票利潤（只讀）
      ticketProfits.forEach(function(tp) {
        var dateParts = (tp.date || '').split('-');
        var dateDisplay = dateParts.length === 3 ? (parseInt(dateParts[1]) + '/' + parseInt(dateParts[2])) : tp.date;
        html += '<tr style="background:var(--bg-tertiary);">';
        html += '<td>' + dateDisplay + ' ' + tp.agentName + ' ' + tp.itemName + '</td>';
        html += '<td class="num">' + fmtHK(tp.profitHK) + '</td>';
        html += '<td style="color:var(--text-secondary);font-size:var(--font-size-sm);">自動</td>';
        html += '</tr>';
      });
      html += '<tr class="total-row"><td>合計</td><td class="num">' + fmtHK(totalExtra) + '</td><td></td></tr>';
      html += '</tbody></table></div>';
      html += '<p style="font-size:var(--font-size-sm);color:var(--text-secondary);margin-top:4px;">依持股比例分配至各股東</p>';
    } else {
      html += Icons.empty('尚無額外收入', '點擊「新增收入」記錄第一筆');
    }
    html += '</div>';

    html += '</div>'; // dual-col end

    // ===== 6. 股東 KPI 卡片 =====
    if (shareholders.length > 0) {
      html += '<div class="sh-card">';
      html += '<div class="sh-card-header"><h3 class="sh-section-title">各股東洗碼 KPI</h3></div>';
      html += '<div class="sh-kpi-grid">';
      shareholders.forEach(function(sh) {
        var profitData = calcShareholderProfit(sh, monthTxs, settings, _currentMonth);
        var shWash = profitData.personalWash;
        var moWash = profitData.monthlyOnlyWash || 0;
        var sharePct = totalShares > 0 ? (sh.shares / totalShares * 100).toFixed(1) : '0';

        html += '<div class="sh-kpi-card">';
        html += '<div class="sh-kpi-header">';
        html += '<span class="sh-kpi-name">' + esc(sh.name) + '</span>';
        html += '<span class="sh-kpi-shares">持股 ' + sharePct + '%</span>';
        html += '</div>';
        html += '<div class="sh-kpi-body">';
        halls.forEach(function(hall) {
          var hw = profitData.hallWash[hall.id] || 0;
          if (hw === 0) return;
          var fillColor = hall.id === 'lyi' ? 'var(--hall-lyi)' : hall.id === 'yub' ? 'var(--hall-yub)' : hall.id === 'jm1' ? 'var(--hall-jm1)' : 'var(--hall-jm8)';
          html += '<div class="sh-kpi-hall-row">';
          html += '<span class="sh-kpi-hall-name"><span class="sh-rate-dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:' + fillColor + ';"></span>' + esc(hall.name) + '</span>';
          html += '<span class="sh-kpi-hall-val">' + fmtWan(hw) + ' 萬</span>';
          html += '</div>';
        });
        if (shWash === 0 && moWash === 0) {
          html += '<div style="font-size:var(--font-size-sm);color:var(--text-muted);text-align:center;padding:8px;">本月無洗碼</div>';
        }
        html += '</div>';
        html += '<div class="sh-kpi-footer">';
        if (moWash > 0) {
          html += '<label>總洗碼</label>';
          html += '<span class="sh-kpi-total">' + fmtWan(shWash + moWash) + ' 萬</span>';
          html += '</div>';
          html += '<div class="sh-kpi-footer" style="border-top:none;padding-top:0;">';
          html += '<label class="row-hint">個人 / 特殊</label>';
          html += '<span class="row-hint">' + fmtWan(shWash) + ' / ' + fmtWan(moWash) + ' 萬</span>';
        } else {
          html += '<label>總洗碼</label>';
          html += '<span class="sh-kpi-total">' + fmtWan(shWash) + ' 萬</span>';
        }
        html += '</div>';
        html += '</div>';
      });
      html += '</div>';
      html += '</div>';
    }

    html += '</div>'; // sh-page end

    var container = document.getElementById('page-shareholder');
    if (container) container.innerHTML = html;
  }

  // ========== 匯率更新 ==========
  function updateRate(val) {
    var rate = parseFloat(val) || 4.1;
    var s = Settings.get();
    if (!s.monthlyRates) s.monthlyRates = {};
    if (!s.monthlyRates[_currentMonth]) s.monthlyRates[_currentMonth] = {};
    s.monthlyRates[_currentMonth].shareholderRate = rate;
    s.monthlyRates[_currentMonth].exchangeRate = rate;
    Settings.save(s);
    Toast.success('匯率已更新為 ' + rate);
    render();
  }

  // ========== 費率編輯 ==========
  function editRate(hallId) {
    var halls = Settings.getVipHalls();
    var hall = halls.find(function(h) { return h.id === hallId; });
    if (!hall) return;

    var html = '<div class="form-group"><label>貴賓廳</label><input type="text" class="form-input" value="' + esc(hall.name) + '" id="rate-name" readonly></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>退傭(%)</label><input type="number" step="0.01" class="form-input" value="' + (hall.rate * 100).toFixed(2) + '" id="rate-total" readonly></div>';
    html += '<div class="form-group"><label>現結(%)</label><input type="number" step="0.01" class="form-input" value="' + ((hall.cashRate || hall.rate) * 100).toFixed(2) + '" id="rate-cash" oninput="ShareholderPage.calcTotalRate()"></div>';
    html += '<div class="form-group"><label>月退(%)</label><input type="number" step="0.01" class="form-input" value="' + (hall.rebateRate * 100).toFixed(2) + '" id="rate-rebate" oninput="ShareholderPage.calcTotalRate()"></div>';
    html += '</div>';
    html += '<input type="hidden" id="rate-guest" value="' + ((hall.guestRate || 0.01) * 100).toFixed(2) + '">';
    html += '<p class="row-hint">退傭 = 現結 + 月退 + 客人退佣（自動計算）</p>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="ShareholderPage.saveRate(\'' + hallId + '\')">儲存</button></div>';
    Modal.open('編輯費率 — ' + hall.name, html);
  }

  function calcTotalRate() {
    var cash = parseFloat(document.getElementById('rate-cash').value) || 0;
    var rebate = parseFloat(document.getElementById('rate-rebate').value) || 0;
    var guest = parseFloat(document.getElementById('rate-guest').value) || 0;
    document.getElementById('rate-total').value = (cash + rebate + guest).toFixed(2);
  }

  function saveRate(hallId) {
    var cash = parseFloat(document.getElementById('rate-cash').value) || 0;
    var rebate = parseFloat(document.getElementById('rate-rebate').value) || 0;
    var guest = parseFloat(document.getElementById('rate-guest').value) || 0;
    var halls = Settings.getVipHalls();
    var idx = halls.findIndex(function(h) { return h.id === hallId; });
    if (idx < 0) return;
    halls[idx].cashRate = cash / 100;
    halls[idx].rebateRate = rebate / 100;
    halls[idx].guestRate = guest / 100;
    halls[idx].rate = (cash + rebate + guest) / 100;
    halls[idx].hasMonthlyRebate = rebate > 0;
    Settings.updateVipHalls(halls);
    Modal.close();
    Toast.success('費率已更新');
    render();
  }

  // ========== 新增股東 ==========
  function showAdd() {
    var html = '<div class="form-group"><label>股東名稱</label><input type="text" id="sh-name" class="form-input"></div>';
    html += '<div class="form-group"><label>持股數</label><input type="number" step="0.1" id="sh-shares" class="form-input" value="1"></div>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="ShareholderPage.save()">儲存</button></div>';
    Modal.open('新增股東', html);
  }

  function save() {
    var name = document.getElementById('sh-name').value;
    var shares = parseFloat(document.getElementById('sh-shares').value) || 0;
    if (!name) { Toast.error('股東名稱必填'); FormFX.invalid(document.getElementById('sh-name')); return; }
    Shareholders.create({ name: name, shares: shares });
    Modal.close();
    Toast.success('股東已新增');
    render();
  }

  function editShareholder(id) {
    var sh = Shareholders.getById(id);
    if (!sh) return;
    var html = '<div class="form-group"><label>股東名稱</label><input type="text" id="sh-name" class="form-input" value="' + (sh.name || '') + '"></div>';
    html += '<div class="form-group"><label>持股數</label><input type="number" step="0.1" id="sh-shares" class="form-input" value="' + (sh.shares || 0) + '"></div>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="ShareholderPage.saveEditShareholder(\'' + id + '\')">儲存</button></div>';
    Modal.open('編輯股東', html);
  }

  function saveEditShareholder(id) {
    var name = document.getElementById('sh-name').value;
    var shares = parseFloat(document.getElementById('sh-shares').value) || 0;
    if (!name) { Toast.error('股東名稱必填'); FormFX.invalid(document.getElementById('sh-name')); return; }
    Shareholders.update(id, { name: name, shares: shares });
    Modal.close();
    Toast.success('股東已更新');
    render();
  }

  function delShareholder(id) {
    var sh = Shareholders.getById(id);
    if (!sh) return;
    Modal.confirm('確定刪除股東「' + sh.name + '」？此操作不可復原。', function() {
      Shareholders.remove(id);
      Toast.success('股東已刪除');
      render();
    });
  }

  // ========== 額外收入 CRUD ==========
  function showAddExtra() {
    var html = '<div class="form-group"><label>描述</label><input type="text" id="ei-desc" class="form-input"></div>';
    html += '<div class="form-group"><label>金額(HK)</label><input type="number" id="ei-amount" class="form-input"></div>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="ShareholderPage.saveExtra()">儲存</button></div>';
    Modal.open('新增額外收入', html);
  }

  function saveExtra() {
    ExtraIncome.create({
      month: _currentMonth,
      description: document.getElementById('ei-desc').value,
      amountHK: parseFloat(document.getElementById('ei-amount').value) || 0,
    });
    Modal.close();
    Toast.success('已新增');
    render();
  }

  function editExtra(id) {
    var items = ExtraIncome.getByMonth(_currentMonth);
    var e = items.find(function(x) { return x.id === id; });
    if (!e) return;
    var html = '<div class="form-group"><label>描述</label><input type="text" id="ei-desc" class="form-input" value="' + (e.description || '') + '"></div>';
    html += '<div class="form-group"><label>金額(HK)</label><input type="number" id="ei-amount" class="form-input" value="' + (e.amountHK || 0) + '"></div>';
    html += '<div class="row-actions"><button class="btn btn-primary" onclick="ShareholderPage.saveEditExtra(\'' + id + '\')">儲存</button></div>';
    Modal.open('編輯額外收入', html);
  }

  function saveEditExtra(id) {
    ExtraIncome.update(id, {
      description: document.getElementById('ei-desc').value,
      amountHK: parseFloat(document.getElementById('ei-amount').value) || 0,
    });
    Modal.close();
    Toast.success('已更新');
    render();
  }

  function delExtra(id) {
    ExtraIncome.remove(id);
    Toast.success('已刪除');
    render();
  }

  // 帳務數據同步後自動刷新
  EventBus.on(EVENTS.MTX_LOADED, function() {
    if (Router.getCurrent() === 'shareholder') render();
  });

  // v2.3.9 與 WEB 對齊：團數據同步後自動刷新（封存/建團異動 → 股東分潤即時反映）
  EventBus.on(EVENTS.TRIPS_LOADED, function() {
    if (Router.getCurrent() === 'shareholder') render();
  });

  return {
    render: render,
    updateRate: updateRate,
    editRate: editRate, calcTotalRate: calcTotalRate, saveRate: saveRate,
    showAdd: showAdd, save: save,
    editShareholder: editShareholder, saveEditShareholder: saveEditShareholder, delShareholder: delShareholder,
    showAddExtra: showAddExtra, saveExtra: saveExtra,
    editExtra: editExtra, saveEditExtra: saveEditExtra, delExtra: delExtra,
  };
})();


// === src/pages/membersMgmt.js ===
/**
 * pages/membersMgmt.js — 會員管理页
 * 三级筛选 + 费率管理 + 代理更换
 * 依赖: core/escape.js, core/constants.js, data/agents.js, data/members.js, data/shareholders.js, ui/modal.js, ui/toast.js
 */
var MembersMgmtPage = (function() {
  function render() {
    var members = Members.getAll();
    var agents = Agents.getAll();
    var shareholders = Shareholders.getAll();
    var html = '';

    html += '<div class="card">';
    html += '<div class="card-header"><h3>會員管理</h3>';
    html += '<button class="btn btn-primary" onclick="MembersMgmtPage.showAdd()">+ 新增會員</button></div>';

    // 筛选器
    html += '<div class="filter-bar">';
    html += '<select id="mgmt-sh-filter" class="form-input" onchange="MembersMgmtPage.filter()">';
    html += '<option value="">全部股東</option>';
    shareholders.forEach(function(sh) { html += '<option value="' + sh.id + '">' + esc(sh.name) + '</option>'; });
    html += '</select>';
    html += '<select id="mgmt-agent-filter" class="form-input" onchange="MembersMgmtPage.filter()">';
    html += '<option value="">全部代理</option>';
    agents.forEach(function(a) { html += '<option value="' + a.id + '">' + esc(a.name) + '</option>'; });
    html += '</select>';
    html += '<select id="mgmt-status-filter" class="form-input" onchange="MembersMgmtPage.filter()">';
    html += '<option value="">全部狀態</option>';
    html += '<option value="complete">已完成</option>';
    html += '<option value="draft">草稿</option>';
    html += '</select>';
    // v1.9.1 關鍵字搜尋（名字／會員編號／賭場編號／代理名）
    html += '<input type="text" id="mgmt-kw-filter" class="form-input" placeholder="搜尋會員（名字／編號）..." oninput="MembersMgmtPage.filter()" autocomplete="off">';
    html += '</div>';

    /* v1.6.0 手機卡片式列表（桌面上仍顯示表格） */
    html += '<div class="m-cards">';
    members.forEach(function(m) {
      var agent = Agents.getById(m.agentId);
      var sh = Shareholders.getById(m.shareholderId);
      var kw = [m.name, m.id, m.casinoId, agent ? agent.name : '', sh ? sh.name : ''].join(' ').toLowerCase();
      html += '<div class="m-card" data-sh="' + m.shareholderId + '" data-agent="' + m.agentId + '" data-status="' + m.status + '" data-kw="' + escAttr(kw) + '">';
      html += '<div class="m-card-head"><span class="m-card-title">' + esc(m.name || '(未命名)') + '</span><span>' + (m.status === 'complete' ? ICONS.check + ' 已完成' : ICONS.edit + ' 草稿') + '</span></div>';
      html += '<div class="m-card-grid">';
      html += '<div><div class="k">會員ID</div><div class="v">' + esc(m.id) + '</div></div>';
      html += '<div><div class="k">賭場編號</div><div class="v">' + esc(m.casinoId || '-') + '</div></div>';
      html += '<div><div class="k">代理</div><div class="v">' + esc(agent ? agent.name : (m.agentId || '-')) + '</div></div>';
      html += '<div><div class="k">股東</div><div class="v">' + esc(sh ? sh.name : (m.shareholderId || '-')) + '</div></div>';
      html += '<div><div class="k">倍率 / 返水 1</div><div class="v">' + (m.rate1 || 0) + ' / ' + (m.rebate1 || 0) + '</div></div>';
      html += '<div><div class="k">倍率 / 返水 2</div><div class="v">' + (m.rate2 || 0) + ' / ' + (m.rebate2 || 0) + '</div></div>';
      html += '</div>';
      html += '<div class="m-card-actions">';
      html += '<button class="btn-sm" onclick="MembersMgmtPage.editMember(\'' + m.id + '\')">編輯</button>';
      html += '<button class="btn-sm btn-danger" onclick="MembersMgmtPage.delMember(\'' + m.id + '\')">刪除</button>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';

    html += '<div class="table-wrapper m-only-table"><table class="data-table"><thead><tr>';
    html += '<th>會員ID</th><th>客稱</th><th>賭場編號</th><th>代理</th><th>股東</th>';
    html += '<th>倍率1</th><th>返水1</th><th>倍率2</th><th>返水2</th><th>狀態</th><th>操作</th>';
    html += '</tr></thead><tbody>';

    members.forEach(function(m) {
      var agent = Agents.getById(m.agentId);
      var sh = Shareholders.getById(m.shareholderId);
      var kw = [m.name, m.id, m.casinoId, agent ? agent.name : '', sh ? sh.name : ''].join(' ').toLowerCase();
      html += '<tr data-sh="' + m.shareholderId + '" data-agent="' + m.agentId + '" data-status="' + m.status + '" data-kw="' + escAttr(kw) + '">';
      html += '<td>' + m.id + '</td>';
      html += '<td>' + (m.name || '') + '</td>';
      html += '<td>' + (m.casinoId || '') + '</td>';
      html += '<td>' + (agent ? agent.name : m.agentId) + '</td>';
      html += '<td>' + (sh ? sh.name : m.shareholderId) + '</td>';
      html += '<td>' + (m.rate1 || 0) + '</td>';
      html += '<td>' + (m.rebate1 || 0) + '</td>';
      html += '<td>' + (m.rate2 || 0) + '</td>';
      html += '<td>' + (m.rebate2 || 0) + '</td>';
      html += '<td>' + (m.status === 'complete' ? ICONS.check : ICONS.edit + '草稿') + '</td>';
      html += '<td><button class="btn-sm" onclick="MembersMgmtPage.editMember(\'' + m.id + '\')">編輯</button> ';
      html += '<button class="btn-sm btn-danger" onclick="MembersMgmtPage.delMember(\'' + m.id + '\')">刪</button></td>';
      html += '</tr>';
    });

    html += '</tbody></table></div></div>';
    var container = document.getElementById('page-members-mgmt');
    if (container) container.innerHTML = html;
  }

  function filter() {
    var shFilter = document.getElementById('mgmt-sh-filter').value;
    var agentFilter = document.getElementById('mgmt-agent-filter').value;
    var statusFilter = document.getElementById('mgmt-status-filter').value;
    var kwEl = document.getElementById('mgmt-kw-filter');
    var kw = kwEl ? kwEl.value.trim().toLowerCase() : '';

    document.querySelectorAll('#page-members-mgmt tbody tr, #page-members-mgmt .m-card').forEach(function(row) {
      var show = true;
      if (shFilter && row.getAttribute('data-sh') !== shFilter) show = false;
      if (agentFilter && row.getAttribute('data-agent') !== agentFilter) show = false;
      if (statusFilter && row.getAttribute('data-status') !== statusFilter) show = false;
      if (kw && (row.getAttribute('data-kw') || '').indexOf(kw) < 0) show = false;
      row.style.display = show ? '' : 'none';
    });
  }

  // v1.9.0 自動建議會員編號：M + 日期 + 當日序號（可直接改）
  function _suggestMemberId() {
    var dateStr = TWDate.todayStr().replace(/-/g, '');
    var prefix = 'M' + dateStr;
    var n = 1;
    var existing = {};
    Members.getAll().forEach(function(m) { existing[m.id] = true; });
    while (existing[prefix + String(n).padStart(2, '0')]) n++;
    return prefix + String(n).padStart(2, '0');
  }

  function showAdd() {
    var agents = Agents.getAll();
    var shareholders = Shareholders.getAll();
    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>會員編號</label><input type="text" id="m-id" class="form-input" value="' + _suggestMemberId() + '"></div>';
    html += '<div class="form-group"><label>客稱</label><input type="text" id="m-name" class="form-input"></div>';
    html += '<div class="form-group"><label>賭場編號</label><input type="text" id="m-casino" class="form-input"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>代理</label>';
    html += '<select id="m-agent" class="form-input" onchange="MembersMgmtPage.onAgentChange()">';
    agents.forEach(function(a) { html += '<option value="' + a.id + '" data-sh="' + a.shareholderId + '">' + esc(a.name) + '</option>'; });
    html += '</select></div>';
    html += '<div class="form-group"><label>股東</label>';
    html += '<select id="m-sh" class="form-input">';
    shareholders.forEach(function(sh) { html += '<option value="' + sh.id + '">' + esc(sh.name) + '</option>'; });
    html += '</select></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>倍率1</label><input type="number" step="0.01" id="m-rate1" class="form-input" value="4.2"></div>';
    html += '<div class="form-group"><label>返水1</label><input type="number" step="0.001" id="m-rebate1" class="form-input" value="0.01"></div>';
    html += '<div class="form-group"><label>倍率2</label><input type="number" step="0.01" id="m-rate2" class="form-input" value="0.8"></div>';
    html += '<div class="form-group"><label>返水2</label><input type="number" step="0.001" id="m-rebate2" class="form-input" value="0.018"></div>';
    html += '</div>';
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" id="m-save-btn" onclick="MembersMgmtPage.saveMember()">儲存</button></div>';
    Modal.open('新增會員', html);
  }

  function onAgentChange() {
    var select = document.getElementById('m-agent');
    var opt = select.options[select.selectedIndex];
    var shId = opt ? opt.getAttribute('data-sh') : '';
    var shSelect = document.getElementById('m-sh');
    if (shId) shSelect.value = shId;
  }

  var _memberSaving = false; // v1.9.0 防重複提交鎖

  function saveMember() {
    if (_memberSaving) return;
    var data = {
      id: document.getElementById('m-id').value.trim(),
      name: document.getElementById('m-name').value,
      casinoId: document.getElementById('m-casino').value,
      agentId: document.getElementById('m-agent').value,
      shareholderId: document.getElementById('m-sh').value,
      rate1: parseFloat(document.getElementById('m-rate1').value) || 4.2,
      rebate1: parseFloat(document.getElementById('m-rebate1').value) || 0.01,
      rate2: parseFloat(document.getElementById('m-rate2').value) || 0.8,
      rebate2: parseFloat(document.getElementById('m-rebate2').value) || 0.018,
      status: MEMBER_STATUS.COMPLETE,
    };
    if (!data.id || !data.name) { Toast.error('會員編號和客稱必填'); return; }
    if (Members.getById(data.id)) { Toast.error('會員編號 ' + data.id + ' 已存在，請換一個'); return; } // v1.9.0 防重複
    var btn = document.getElementById('m-save-btn');
    if (btn) { btn.disabled = true; btn.textContent = '儲存中...'; }
    _memberSaving = true;
    try {
      Members.create(data);
      Modal.close();
      Toast.success('會員已建立');
      render();
    } finally {
      _memberSaving = false;
      if (btn) { btn.disabled = false; btn.textContent = '儲存'; }
    }
  }

  function editMember(id) {
    var m = Members.getById(id);
    if (!m) return;
    var agents = Agents.getAll();
    var shareholders = Shareholders.getAll();
    var html = '';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>客稱</label><input type="text" id="em-name" class="form-input" value="' + (m.name || '') + '"></div>';
    html += '<div class="form-group"><label>賭場編號</label><input type="text" id="em-casino" class="form-input" value="' + (m.casinoId || '') + '"></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>代理</label>';
    html += '<select id="em-agent" class="form-input">';
    agents.forEach(function(a) { html += '<option value="' + a.id + '"' + (m.agentId === a.id ? ' selected' : '') + '>' + esc(a.name) + '</option>'; });
    html += '</select></div>';
    html += '<div class="form-group"><label>股東</label>';
    html += '<select id="em-sh" class="form-input">';
    shareholders.forEach(function(sh) { html += '<option value="' + sh.id + '"' + (m.shareholderId === sh.id ? ' selected' : '') + '>' + esc(sh.name) + '</option>'; });
    html += '</select></div>';
    html += '</div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>倍率1</label><input type="number" step="0.01" id="em-rate1" class="form-input" value="' + m.rate1 + '"></div>';
    html += '<div class="form-group"><label>返水1</label><input type="number" step="0.001" id="em-rebate1" class="form-input" value="' + m.rebate1 + '"></div>';
    html += '<div class="form-group"><label>倍率2</label><input type="number" step="0.01" id="em-rate2" class="form-input" value="' + m.rate2 + '"></div>';
    html += '<div class="form-group"><label>返水2</label><input type="number" step="0.001" id="em-rebate2" class="form-input" value="' + m.rebate2 + '"></div>';
    html += '</div>';
    html += '<div class="row-actions">';
    html += '<button class="btn btn-primary" onclick="MembersMgmtPage.saveEditMember(\'' + id + '\')">儲存</button></div>';
    Modal.open('編輯會員', html);
  }

  function saveEditMember(id) {
    Members.update(id, {
      name: document.getElementById('em-name').value,
      casinoId: document.getElementById('em-casino').value,
      agentId: document.getElementById('em-agent').value,
      shareholderId: document.getElementById('em-sh').value,
      rate1: parseFloat(document.getElementById('em-rate1').value) || 4.2,
      rebate1: parseFloat(document.getElementById('em-rebate1').value) || 0.01,
      rate2: parseFloat(document.getElementById('em-rate2').value) || 0.8,
      rebate2: parseFloat(document.getElementById('em-rebate2').value) || 0.018,
      status: MEMBER_STATUS.COMPLETE,
    });
    Modal.close();
    Toast.success('會員已更新');
    render();
  }

  function delMember(id) {
    Modal.confirm('確定刪除會員 ' + id + '？', function() {
      Members.remove(id);
      Toast.success('已刪除');
      render();
    });
  }

  return {
    render: render, filter: filter,
    showAdd: showAdd, onAgentChange: onAgentChange, saveMember: saveMember,
    editMember: editMember, saveEditMember: saveEditMember, delMember: delMember,
  };
})();


// === src/pages/history.js ===
/**
 * pages/history.js — 歷史查詢頁
 * 已封存團的歸檔查詢（折疊卡片設計）
 * 一級折疊：月份分組
 * 二級折疊：每個團一張卡片
 * 點擊客名 → Modal 彈出完整會員明細
 * 依赖: core/constants.js, core/datetime.js, data/bookings.js, data/memberTxs.js, data/members.js, data/shareholders.js, data/supplements.js, data/trips.js, ui/modal.js, ui/icons.js
 */
var HistoryPage = (function() {
  var _expandedTrips = {}; // 記錄哪些團已展開
  var _expandedMonths = {}; // 記錄哪些月份已展開

  // ===== 工具函數（與 pending.js 一致） =====
  function fmtCardNum(n) {
    var v = Math.round(n * 1000) / 1000;
    if (Math.abs(v - Math.round(v)) < 1e-6) return Math.round(v).toLocaleString();
    return v.toFixed(3).replace(/\.?0+$/, '');
  }
  function fmtNT(n) {
    return fmtCardNum((n || 0) * 10000);
  }
  function calcTotalNT(tx) {
    return (tx.subtotal || 0) * 10000 - (tx.expensesNT || 0);
  }
  function maskName(name) {
    if (!name) return '';
    if (name.length <= 2) return name[0] + '*';
    return name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  }
  function getHallName(tx, trip) {
    var hallId = tx.vipHallId || (trip && trip.hallIds && trip.hallIds[0]) || '';
    var hall = VIP_HALLS.find(function(h) { return h.id === hallId; });
    return hall ? hall.name : hallId;
  }

  function render() {
    var sealedTrips = Trips.getAll().filter(function(t) { return t.status === TRIP_STATUS.SEALED; });
    var html = '<div class="card">';
    html += '<div class="card-header"><h3>歷史查詢（已封存團）</h3></div>';

    if (sealedTrips.length === 0) {
      html += Icons.empty('無封存的團', '封存後的團會顯示於此供查詢');
      html += '</div>';
      var container = document.getElementById('page-history');
      if (container) container.innerHTML = html;
      return;
    }

    // 按月分組
    var byMonth = {};
    sealedTrips.forEach(function(trip) {
      var month = trip.sealedMonth || (trip.endDate || '').substring(0, 7) || '未分類';
      if (!byMonth[month]) byMonth[month] = [];
      byMonth[month].push(trip);
    });

    var sortedMonths = Object.keys(byMonth).sort().reverse();
    sortedMonths.forEach(function(month) {
      var trips = byMonth[month];
      var monthWash = 0;
      var monthSettle = 0;
      var monthBookings = 0;
      var monthMemberCnt = 0;
      trips.forEach(function(trip) {
        var mtxs = MemberTxs.getByTrip(trip.id);
        var bks = getTripBookings(trip);
        monthWash += mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
        monthSettle += mtxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
        monthBookings += bks.reduce(function(s, b) { return s + (b.nights || 1); }, 0);
        var uniqueMembers = {};
        mtxs.forEach(function(t) { uniqueMembers[t.memberId] = true; });
        monthMemberCnt += Object.keys(uniqueMembers).length;
      });

      var isMonthOpen = _expandedMonths[month];

      // 一級折疊：月份分組
      html += '<div class="ht-month-group st-collapsible' + (isMonthOpen ? '' : ' st-collapsed') + '">';
      html += '<div class="ht-month-header st-collapsible-header" onclick="HistoryPage.toggleMonth(\'' + month + '\')">';
      html += '<span class="ht-month-icon">' + ICONS.calendar + '</span>';
      html += '<span class="ht-month-title">' + month + '</span>';
      html += '<span class="ht-month-stats">';
      html += trips.length + ' 團 · 會員 ' + monthMemberCnt + ' · 訂房 ' + monthBookings + ' 晚';
      html += ' · 洗碼 ' + fmtCardNum(monthWash) + ' 萬';
      html += ' · 交收 <span class="' + (monthSettle < 0 ? 'num-negative' : 'num-positive') + '">NT$ ' + fmtCardNum(Math.round(monthSettle)) + '</span>';
      html += '</span>';
      html += '<span class="st-toggle-icon">▼</span>';
      html += '</div>';

      // 二級折疊：每月內的團
      html += '<div class="ht-month-content st-collapsible-body">';

      // 月份內的團按時間倒序
      trips.sort(function(a, b) {
        var bKey = String(b.sealedAt || b.endDate || '');
        var aKey = String(a.sealedAt || a.endDate || '');
        return bKey.localeCompare(aKey);
      });

      trips.forEach(function(trip) {
        html += buildTripCard(trip);
      });

      html += '</div>'; // ht-month-content
      html += '</div>'; // ht-month-group
    });

    html += '</div>';

    var container = document.getElementById('page-history');
    if (container) container.innerHTML = html;
  }

  // 統一的訂房查詢：有 tripId 只歸自己的團；無 tripId（Bot 建房）按代理＋入住日落於團期間歸屬
  function getTripBookings(trip) {
    var mtxs = MemberTxs.getByTrip(trip.id);
    var allBookings = Bookings.getAll();
    var tripAgentIds = {};
    mtxs.forEach(function(tx) {
      var aid = tx.agentId || (trip.agentId || '');
      if (aid) tripAgentIds[aid] = true;
    });
    if (trip.agentId) tripAgentIds[trip.agentId] = true;
    return allBookings.filter(function(b) {
      if (b.tripId) return b.tripId === trip.id;
      var bAgentId = b.agentId;
      if (!bAgentId || !tripAgentIds[bAgentId]) return false;
      var ci = b.checkIn || '';
      if (!ci) return false;
      if (trip.startDate && ci < trip.startDate) return false;
      if (trip.endDate && ci > trip.endDate) return false;
      return true;
    });
  }

  function buildTripCard(trip) {
    var sh = Shareholders.getById(trip.shareholderId);
    var mtxs = MemberTxs.getByTrip(trip.id);
    var supplements = Supplements.getByTrip(trip.id);
    var bookings = getTripBookings(trip);

    var totalWash = mtxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);
    var totalSettle = mtxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
    // v1.9.9 代理吸收（向代理另收），應收總額＝會員交收＋代理吸收
    var totalAbsorbed = mtxs.reduce(function(s, t) { return s + calcAbsorbedNT(t.expenses || []); }, 0);
    var grandReceivable = totalSettle + totalAbsorbed;
    var roomNights = bookings.reduce(function(s, b) { return s + (b.nights || 1); }, 0);
    var memberCount = Object.keys(mtxs.reduce(function(acc, tx) { acc[tx.memberId] = true; return acc; }, {})).length;
    var sealedDate = trip.sealedAt ? TWDate.dateStrFrom(trip.sealedAt) : (trip.endDate || '-');

    var isExpanded = _expandedTrips[trip.id];

    var html = '<div class="pd-card ht-trip-card st-collapsible' + (isExpanded ? '' : ' st-collapsed') + '" data-trip="' + trip.id + '">';

    // 卡片頭部（可點擊折疊）
    html += '<div class="pd-card-header st-collapsible-header" onclick="HistoryPage.toggleCard(\'' + trip.id + '\')">';
    html += '<div class="pd-card-title">';
    html += '<span class="pd-trip-id">' + esc(Trips.displayName(trip)) + '</span>';
    html += '<span class="pd-trip-sh">' + (sh ? sh.name : '') + '</span>';
    html += '<span class="pd-trip-date">封存日: ' + sealedDate + '</span>';
    html += '</div>';
    html += '<div class="pd-card-stats">';
    html += '<span>會員 ' + mtxs.length + ' 筆</span>';
    html += '<span>洗碼 ' + fmtCardNum(totalWash) + ' 萬</span>';
    html += '<span class="' + (totalSettle < 0 ? 'num-negative' : 'num-positive') + '">會員交收 NT$ ' + fmtCardNum(Math.round(totalSettle)) + '</span>';
    if (totalAbsorbed > 0) {
      html += '<span class="text-warning fw-semibold">代理吸收 NT$ ' + fmtCardNum(totalAbsorbed) + '</span>';
      html += '<span class="fw-semibold ' + (grandReceivable < 0 ? 'num-negative' : 'num-positive') + '">應收 NT$ ' + fmtCardNum(Math.round(grandReceivable)) + '</span>';
    }
    html += '<span>訂房 ' + roomNights + ' 晚</span>';
    html += '</div>';
    html += '<span class="st-toggle-icon">▼</span>';
    html += '</div>';

    // 折疊內容
    html += '<div class="pd-card-body st-collapsible-body">';

    // 會員匯總表（客名/廳別/交收，同代理面板風格）
    if (mtxs.length > 0) {
      var memberGroups = {};
      mtxs.forEach(function(tx) {
        var mid = tx.memberId;
        if (!memberGroups[mid]) memberGroups[mid] = { txs: [], totalSettle: 0, hallName: '' };
        var settleNT = calcTotalNT(tx);
        memberGroups[mid].txs.push(tx);
        memberGroups[mid].totalSettle += settleNT;
        if (!memberGroups[mid].hallName) {
          memberGroups[mid].hallName = getHallName(tx, trip);
        }
      });

      html += '<table class="mb-ap-table pd-member-table"><thead><tr>';
      html += '<th>客名</th><th>廳別</th><th class="num">交收</th>';
      html += '</tr></thead><tbody>';
      var sumSettle = 0;
      Object.keys(memberGroups).forEach(function(mid) {
        var g = memberGroups[mid];
        var m = Members.getById(mid);
        sumSettle += g.totalSettle;
        html += '<tr>';
        html += '<td><a href="javascript:void(0)" onclick="HistoryPage.showMemberDetail(\'' + trip.id + '\',\'' + mid + '\')" class="pd-member-link">' + maskName(m ? m.name : mid) + '</a></td>';
        html += '<td>' + g.hallName + '</td>';
        html += '<td class="num ' + (g.totalSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.round(g.totalSettle)) + '</td>';
        html += '</tr>';
      });
      html += '<tr class="total-row">';
      html += '<td>合計</td>';
      html += '<td></td>';
      html += '<td class="num ' + (sumSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(sumSettle / 100) * 100) + '</td>';
      html += '</tr>';
      html += '</tbody></table>';
    } else {
      html += Icons.empty('此團無帳務記錄', '此團尚無任何帳務交易');
    }

    // 底部 KPI
    html += '<div class="pd-card-footer">';
    html += '<div class="mb-ap-stats pd-stats">';
    html += '<div class="mb-ap-stat"><label>總洗碼</label><span>' + fmtCardNum(totalWash) + ' 萬</span></div>';
    html += '<div class="mb-ap-stat"><label>會員交收</label><span class="' + (totalSettle < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(totalSettle / 100) * 100) + '</span></div>';
    if (totalAbsorbed > 0) {
      html += '<div class="mb-ap-stat"><label>代理吸收（向代理另收）</label><span class="text-warning fw-semibold">' + fmtCardNum(totalAbsorbed) + '</span></div>';
      html += '<div class="mb-ap-stat"><label>應收總額</label><span class="fw-semibold ' + (grandReceivable < 0 ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(Math.trunc(grandReceivable / 100) * 100) + '</span></div>';
    }
    html += '<div class="mb-ap-stat"><label>訂房數</label><span>' + roomNights + ' 晚</span></div>';
    html += '<div class="mb-ap-stat"><label>會員數</label><span>' + memberCount + '</span></div>';
    html += '</div>';
    html += '<span class="ht-sealed-badge">已封存</span>';
    html += '</div>';

    html += '</div>'; // pd-card-body
    html += '</div>'; // pd-card
    return html;
  }

  function toggleMonth(month) {
    _expandedMonths[month] = !_expandedMonths[month];
    var groups = document.querySelectorAll('.ht-month-group');
    groups.forEach(function(g) {
      var title = g.querySelector('.ht-month-title');
      if (title && title.textContent === month) {
        if (_expandedMonths[month]) {
          g.classList.remove('st-collapsed');
        } else {
          g.classList.add('st-collapsed');
        }
      }
    });
  }

  function toggleCard(tripId) {
    _expandedTrips[tripId] = !_expandedTrips[tripId];
    var card = document.querySelector('.ht-trip-card[data-trip="' + tripId + '"]');
    if (card) {
      if (_expandedTrips[tripId]) {
        card.classList.remove('st-collapsed');
      } else {
        card.classList.add('st-collapsed');
      }
    }
  }

  function showMemberDetail(tripId, memberId) {
    var trip = Trips.getById(tripId);
    var mtxs = MemberTxs.getByTrip(tripId).filter(function(t) { return t.memberId === memberId; });
    var m = Members.getById(memberId);

    var html = '';
    html += '<div class="pd-detail-modal">';

    // 會員標頭
    html += '<div class="pd-detail-header">';
    html += '<span class="pd-detail-name">' + (m ? m.id + ' ' + m.name : memberId) + '</span>';
    html += '<span class="pd-detail-sh">團: ' + tripId + '</span>';
    html += '</div>';

    // 逐筆帳務（同會員帳卡風格）
    mtxs.forEach(function(tx, idx) {
      var hallName = getHallName(tx, trip);
      var totalNT = calcTotalNT(tx);
      var isNeg = (tx.upDown || 0) < 0;

      html += '<div class="mb-card pd-detail-card">';

      // 標頭：廳名 + 日期 + 筆數
      html += '<div class="mb-card-header">';
      html += '<div class="mb-card-hall">' + hallName + (tx.date ? ' · ' + tx.date : '') + '</div>';
      html += '<div class="mb-card-member">#' + (idx + 1) + '</div>';
      html += '</div>';

      // 第一區：出碼、回碼、上下分
      html += '<div class="mb-card-section">';
      html += '<div class="mb-card-row"><span class="mb-card-label">出碼' + (tx.chipType === 'credit' ? ' <span class="chip-credit-tag">信用</span>' : '') + (tx.pureTour ? ' <span class="pure-tour-tag">純旅遊</span>' : '') + '</span><span class="mb-card-val">' + fmtCardNum(tx.outCode || 0) + ' HK萬</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">回碼</span><span class="mb-card-val">' + fmtCardNum(tx.backCode || 0) + ' HK萬</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">上下分</span><span class="mb-card-val ' + (isNeg ? 'num-negative' : 'num-positive') + '">' + fmtCardNum(tx.upDown || 0) + ' HK萬</span></div>';
      html += '</div>';

      // 第二區：洗碼、倍率、返水、退傭、NT輸贏、小計
      html += '<div class="mb-card-section">';
      html += '<div class="mb-card-row"><span class="mb-card-label">洗碼數</span><span class="mb-card-val">' + fmtCardNum(tx.washCode || 0) + ' HK萬</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">倍率</span><span class="mb-card-val">' + (tx.rate1 || 0) + ' / ' + (tx.rate2 || 0) + '</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">返水</span><span class="mb-card-val">' + (tx.rebate1 || 0) + ' / ' + (tx.rebate2 || 0) + '</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">退傭1</span><span class="mb-card-val">' + Math.trunc((tx.commission1 || 0) * 10000).toLocaleString() + '</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">退傭2</span><span class="mb-card-val">' + Math.trunc((tx.commission2 || 0) * 10000).toLocaleString() + '</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">NT輸贏</span><span class="mb-card-val ' + ((tx.ntResult || 0) < 0 ? 'num-negative' : 'num-positive') + '">' + fmtNT(tx.ntResult) + '</span></div>';
      html += '<div class="mb-card-row"><span class="mb-card-label">小計</span><span class="mb-card-val ' + ((tx.subtotal || 0) < 0 ? 'num-negative' : 'num-positive') + '">' + Math.round((tx.subtotal || 0) * 10000).toLocaleString() + '</span></div>';
      html += '</div>';

      // 開銷明細
      var expenses = tx.expenses || [];
      html += '<div class="mb-card-section">';
      html += '<div class="mb-card-section-title">開銷明細</div>';
      if (expenses.length === 0) {
        html += '<div class="mb-card-row"><span class="mb-card-label">—</span></div>';
      } else {
        html += '<div class="mb-card-expense-table">';
        html += '<div class="mb-card-expense-head"><span>項目</span><span>金額</span><span>匯率</span><span>NT</span></div>';
        expenses.forEach(function(e) {
          var isAbsorb = !!e.absorbed;
          var qtyLabel = (e.quantity && e.quantity > 1) ? ' ×' + e.quantity : '';
          html += '<div class="mb-card-expense-row' + (isAbsorb ? ' exp-row-host' : '') + '">';
          html += '<span>' + (e.name || '') + qtyLabel + (isAbsorb ? ' <span class="tx-absorb-tag">代理吸收</span>' : '') + '</span>';
          if (isAbsorb) {
            html += '<span class="exp-host-cell" colspan="3"><span class="exp-host-badge">招待</span> 不從交收扣除</span>';
          } else {
            var nt = (e.amountHK || 0) * (e.exchangeRate || 0);
            html += '<span>' + fmtCardNum(e.amountHK || 0) + '</span>';
            html += '<span>' + (e.exchangeRate || 0) + '</span>';
            html += '<span>' + fmtCardNum(Math.round(nt)) + '</span>';
          }
          html += '</div>';
        });
        // v1.9.5 代理吸收合計（單獨列示，不計入總交收）
        var absTotal = calcAbsorbedNT(expenses);
        if (absTotal > 0) {
          html += '<div class="mb-card-expense-row exp-absorb-total-row"><span>代理吸收合計</span><span></span><span></span><span>' + fmtCardNum(absTotal) + '</span></div>';
        }
        html += '</div>';
      }
      html += '</div>';

      // 總交收
      html += '<div class="mb-card-footer">';
      html += '<div class="mb-card-total">';
      html += '<span class="mb-card-label">總交收金額NT</span>';
      html += '<span class="mb-card-total-val ' + (totalNT >= 0 ? 'num-positive' : 'num-negative') + '">' + fmtCardNum(Math.round(totalNT)) + '</span>';
      html += '</div>';
      html += '</div>';

      html += '</div>'; // pd-detail-card
    });

    // 合計
    var grandTotal = mtxs.reduce(function(s, t) { return s + calcTotalNT(t); }, 0);
    var absGrand = mtxs.reduce(function(s, t) { return s + calcAbsorbedNT(t.expenses || []); }, 0);
    html += '<div class="pd-detail-total">';
    html += '<span>會員交收合計</span>';
    html += '<span class="' + (grandTotal < 0 ? 'num-negative' : 'num-positive') + '">NT$ ' + fmtCardNum(Math.round(grandTotal)) + '</span>';
    html += '</div>';
    if (absGrand > 0) {
      html += '<div class="pd-detail-total">';
      html += '<span>代理吸收（向代理另收）</span>';
      html += '<span class="text-warning fw-semibold">NT$ ' + fmtCardNum(absGrand) + '</span>';
      html += '</div>';
      html += '<div class="pd-detail-total">';
      html += '<span>應收總額（會員＋代理吸收）</span>';
      html += '<span class="fw-semibold ' + (grandTotal + absGrand < 0 ? 'num-negative' : 'num-positive') + '">NT$ ' + fmtCardNum(Math.round(grandTotal + absGrand)) + '</span>';
      html += '</div>';
    }

    html += '</div>';

    Modal.open('會員明細', html);
  }

  return { render: render, toggleMonth: toggleMonth, toggleCard: toggleCard, showMemberDetail: showMemberDetail, getTripBookings: getTripBookings };
})();


// === src/pages/settings.js ===
/**
 * pages/settings.js — 系統设定页
 * 费率/贵宾厅/门槛/帳號（Phase 1A 個別帳號）
 * 依赖: core/escape.js, core/auth.js, core/permissions.js, core/constants.js, core/datetime.js, core/store.js, data/settings.js, data/users.js, sync/backup.js, sync/conflicts.js, sync/recentlyDeleted.js, sync/uploader.js, ui/modal.js, ui/toast.js
 */
var SettingsPage = (function() {
  function render() {
    var settings = Settings.get();
    var html = '';

    // 月汇率
    var currentMonth = TWDate.monthStr();
    var monthlyRate = Settings.getMonthlyRate(currentMonth);
    html += '<div class="card">';
    html += '<div class="card-header"><h3>月匯率設定</h3></div>';
    html += '<div class="form-row">';
    html += '<div class="form-group"><label>月份</label><input type="month" id="set-month" class="form-input" value="' + currentMonth + '"></div>';
    html += '<div class="form-group"><label>當月匯率</label><input type="number" step="0.01" id="set-rate" class="form-input" value="' + monthlyRate.exchangeRate + '"></div>';
    html += '<div class="form-group"><label>股東分潤匯率</label><input type="number" step="0.01" id="set-sh-rate" class="form-input" value="' + monthlyRate.shareholderRate + '"></div>';
    html += '<div class="form-group form-group-end"><button class="btn btn-primary" onclick="SettingsPage.saveRate()">儲存</button></div>';
    html += '</div></div>';

    // 贵宾厅费率
    var halls = Settings.getVipHalls();
    html += '<div class="card st-collapsible">';
    html += '<div class="card-header st-collapsible-header" onclick="SettingsPage.toggleCard(this)">';
    html += '<h3>貴賓廳費率</h3><span class="st-toggle-icon">▼</span>';
    html += '</div>';
    html += '<div class="st-collapsible-body">';
    html += '<table class="data-table"><thead><tr>';
    html += '<th>廳名</th><th>費率</th><th>月退費</th><th>月退費率</th>';
    html += '</tr></thead><tbody>';
    halls.forEach(function(hall, i) {
      html += '<tr>';
      html += '<td>' + esc(hall.name) + '</td>';
      html += '<td><input type="number" step="0.0001" class="form-input compact" value="' + hall.rate + '" onchange="SettingsPage.updateHall(' + i + ',\'rate\',this.value)"></td>';
      html += '<td><input type="checkbox" ' + (hall.hasMonthlyRebate ? 'checked' : '') + ' onchange="SettingsPage.toggleRebate(' + i + ',this.checked)"></td>';
      html += '<td><input type="number" step="0.0001" class="form-input compact" value="' + hall.rebateRate + '" onchange="SettingsPage.updateHall(' + i + ',\'rebateRate\',this.value)" ' + (hall.hasMonthlyRebate ? '' : 'disabled') + '></td>';
      html += '</tr>';
    });
    html += '</tbody></table></div></div>';

    // 門票預設價格
    var tp = Settings.getTicketPrices();
    html += '<div class="card st-collapsible">';
    html += '<div class="card-header st-collapsible-header" onclick="SettingsPage.toggleCard(this)">';
    html += '<h3>門票預設價格</h3><span class="st-toggle-icon">▼</span>';
    html += '</div>';
    html += '<div class="st-collapsible-body">';

    // 水舞間
    html += '<h4 class="section-subtitle">水舞間</h4>';
    html += '<table class="data-table"><thead><tr>';
    html += '<th>席別</th><th>客人購買價</th><th>我們購買價</th>';
    html += '</tr></thead><tbody>';
    (tp.waterDance || []).forEach(function(t, i) {
      html += '<tr>';
      html += '<td>' + esc(t.name) + '</td>';
      html += '<td><input type="number" step="1" class="form-input compact" value="' + t.guestPrice + '" onchange="SettingsPage.updateTicket(\'waterDance\',' + i + ',\'guestPrice\',this.value)"></td>';
      html += '<td><input type="number" step="1" class="form-input compact" value="' + t.ourPrice + '" onchange="SettingsPage.updateTicket(\'waterDance\',' + i + ',\'ourPrice\',this.value)"></td>';
      html += '</tr>';
    });
    html += '</tbody></table>';

    // 水上樂園
    var wp = tp.waterPark || { guestPrice: 450, ourPrice: 406 };
    html += '<h4 class="section-subtitle">水上樂園手帶</h4>';
    html += '<table class="data-table"><thead><tr>';
    html += '<th>項目</th><th>客人購買價</th><th>我們購買價</th>';
    html += '</tr></thead><tbody>';
    html += '<tr>';
    html += '<td>手帶</td>';
    html += '<td><input type="number" step="1" class="form-input compact" value="' + wp.guestPrice + '" onchange="SettingsPage.updateTicket(\'waterPark\',null,\'guestPrice\',this.value)"></td>';
    html += '<td><input type="number" step="1" class="form-input compact" value="' + wp.ourPrice + '" onchange="SettingsPage.updateTicket(\'waterPark\',null,\'ourPrice\',this.value)"></td>';
    html += '</tr>';
    html += '</tbody></table>';
    html += '</div></div>';

  // 資料備份（Phase 1C）
  html += _renderBackupCard();

  // Phase 1A：帳號資訊（目前登入者）+ 帳號管理（管理員）
  html += _renderAccountCard();
  html += _renderAccountsMgmtCard();

  // Phase 1B：審計紀錄入口（管理員可見）
  if (typeof Perm !== 'undefined' && Perm.hasSession() && Perm.can('auditLog', 'read')) {
    html += '<div class="card">';
    html += '<div class="card-header"><h3>審計紀錄</h3></div>';
    html += '<p class="section-desc">查看系統操作記錄（新增/修改/刪除/登入等）。</p>';
    html += '<button class="btn btn-primary" onclick="Router.go(\'auditLog\');document.getElementById(\'topbar-title\').textContent=\'審計紀錄\';">查看審計紀錄</button>';
    html += '</div>';
  }

  // Phase 1D / 1.15 同步衝突可視化（有衝突時才顯示）
  if (typeof Conflicts !== 'undefined' && Conflicts.count() > 0) {
    html += _renderConflictsCard();
  }

  // Phase 1D / 1.16 回收站（刪除/封存可還原）
  if (typeof RecycleBin !== 'undefined' && RecycleBin.count() > 0) {
    html += _renderRecycleBinCard();
  }

  // 員工管理
    html += '<div class="card">';
    html += '<div class="card-header"><h3>Bot 員工管理</h3></div>';
    html += '<p class="section-desc">管理可使用 Telegram Bot（房務/帳務）的員工及其權限。</p>';
    html += '<table class="data-table"><thead><tr>';
    html += '<th>姓名</th><th>Telegram ID</th><th>角色</th><th>新增時間</th><th>操作</th>';
    html += '</tr></thead><tbody id="emp-table-body">';
    html += '</tbody></table>';

    html += '<div class="panel-sub">';
    html += '<h4 class="panel-sub-title">新增員工</h4>';
    html += '<div class="form-row form-row-end">';
    html += '<div class="form-group"><label>姓名</label><input type="text" id="emp-name" class="form-input" placeholder="員工姓名"></div>';
    html += '<div class="form-group"><label>Telegram ID（數字）</label><input type="text" id="emp-tgid" class="form-input" placeholder="從 Bot 對話取得"></div>';
    html += '<div class="form-group"><label>角色</label><select id="emp-role" class="form-input"><option value="staff">員工</option><option value="admin">管理員</option></select></div>';
    html += '<div class="form-group form-group-end"><button class="btn btn-primary" onclick="SettingsPage.addEmployee()">新增</button></div>';
    html += '</div></div></div>';

    var container = document.getElementById('page-settings');
    if (container) container.innerHTML = html;
    /* 延遲渲染員工表格，確保 DOM 就緒 */
    setTimeout(function() { renderEmployeeTable(); }, 50);
  }

  function saveRate() {
    if (!_canEditSettings()) return;
    var month = document.getElementById('set-month').value;
    var rate = parseFloat(document.getElementById('set-rate').value);
    var shRate = parseFloat(document.getElementById('set-sh-rate').value);
    Settings.setMonthlyRate(month, { exchangeRate: rate, shareholderRate: shRate });
    Toast.success('匯率已儲存');
  }

  function updateHall(idx, field, value) {
    if (!_canEditSettings()) return;
    var halls = Settings.getVipHalls();
    halls[idx][field] = parseFloat(value);
    Settings.updateVipHalls(halls);
    Toast.success('費率已更新');
  }

  /* ===== Phase 1A 帳號（個別帳號與權限）===== */

  // 守衛：未登入放行（維持舊行為）；登入後需對應特殊權限
  function _canEditSettings() {
    if (!Perm.hasSession()) return true;
    if (!Perm.canSpecial('settingsEdit')) {
      Toast.error('您的角色無權限修改系統設定');
      return false;
    }
    return true;
  }
  function _canBackup() {
    if (!Perm.hasSession()) return true;
    if (!Perm.canSpecial('backup')) {
      Toast.error('您的角色無權限執行備份／匯入');
      return false;
    }
    return true;
  }
  function _isSuperAdmin() {
    var u = Perm.sessionUser();
    return !!u && u.role === 'super_admin';
  }
  // 保護規則：非超管不可動 super_admin 帳號；任何人不可改自己角色/停用自己
  function _protectedAccount(u) {
    var me = Perm.sessionUser();
    if (!me) return false;
    if (u.role === 'super_admin' && me.role !== 'super_admin') return true;
    return false;
  }

  function _renderAccountCard() {
    var me = Auth.getCurrent();
    if (!me) return '';
    var offline = Auth.isOffline();
    var html = '<div class="card">';
    html += '<div class="card-header"><h3>我的帳號</h3></div>';
    html += '<div class="form-row form-row-center">';
    html += '<div class="form-group"><label>登入者</label><div class="padded-value">' + esc(me.name || me.email) +
            '（<span class="text-secondary">' + esc(Perm.roleLabel(me.role)) + '</span>）' +
            (offline ? ' <span class="text-warning text-sm">離線登入</span>' : '') +
            '</div></div>';
    html += '<div class="form-group form-group-end"><button class="btn btn-primary" onclick="SettingsPage.changePwdModal()">修改密碼</button></div>';
    html += '<div class="form-group form-group-end"><button class="btn btn-danger" onclick="SettingsPage.logout()">登出</button></div>';
    html += '</div></div>';
    return html;
  }

  function _renderAccountsMgmtCard() {
    if (!Perm.hasSession() || !Perm.canManageUsers()) return '';
    var users = Users.getAll();
    var me = Perm.sessionUser() || {};
    var roleOptions = Perm.roleIds().map(function(r) {
      return '<option value="' + r + '">' + Perm.roleLabel(r) + '</option>';
    }).join('');

    var html = '<div class="card">';
    html += '<div class="card-header"><h3>帳號管理</h3></div>';
    html += '<p class="section-desc">' +
            '新增帳號會建立 Firebase 登入帳號並寄送密碼由您設定；重設密碼會寄送 Email 通知。' +
            (!_isSuperAdmin() ? '（super_admin 帳號僅超級管理員可管理）' : '') + '</p>';
    html += '<table class="data-table"><thead><tr>';
    html += '<th>姓名</th><th>Email</th><th>角色</th><th>狀態</th><th>操作</th>';
    html += '</tr></thead><tbody>';
    users.forEach(function(u) {
      var protectedAcc = _protectedAccount(u);
      var isSelf = u.id === me.uid;
      var canEdit = !protectedAcc && (!isSelf || true); // 自己可改進階權限但不能改角色
      var roleSel = '<select class="form-input compact" onchange="SettingsPage.updateUserRole(\'' + esc(u.id) + '\',this.value)"' +
        ((protectedAcc || isSelf) ? ' disabled' : '') + '>' +
        roleOptions.replace('value="' + u.role + '"', 'value="' + u.role + '" selected') + '</select>';
      var statusHtml = u.enabled === false ?
        '<span class="text-danger">已停用</span>' : '<span class="text-success">啟用</span>';
      var actions = '';
      if (canEdit) {
        actions += '<button class="btn-sm" onclick="SettingsPage.editUser(\'' + esc(u.id) + '\')">進階</button> ';
        actions += '<button class="btn-sm" onclick="SettingsPage.toggleUserEnabled(\'' + esc(u.id) + '\')" ' + (isSelf ? 'disabled' : '') + '>' +
                   (u.enabled === false ? '啟用' : '停用') + '</button> ';
      }
      actions += '<button class="btn-sm" onclick="SettingsPage.resetUserPassword(\'' + esc(u.email) + '\')">重設密碼</button>';
      if (!isSelf && !protectedAcc) {
        actions += ' <button class="btn-sm btn-danger" onclick="SettingsPage.deleteUserAccount(\'' + esc(u.id) + '\')">刪除</button>';
      }
      html += '<tr>' +
        '<td>' + esc(u.name || '') + (isSelf ? '（我）' : '') + '</td>' +
        '<td><code>' + esc(u.email || '') + '</code></td>' +
        '<td>' + roleSel + '</td>' +
        '<td>' + statusHtml + '</td>' +
        '<td>' + actions + '</td>' +
        '</tr>';
    });
    html += '</tbody></table>';

    // 新增帳號
    html += '<div class="panel-sub">';
    html += '<h4 class="panel-sub-title">新增帳號</h4>';
    html += '<div class="form-row form-row-end">';
    html += '<div class="form-group"><label>姓名</label><input type="text" id="acc-name" class="form-input" placeholder="顯示名稱"></div>';
    html += '<div class="form-group"><label>Email（登入帳號）</label><input type="email" id="acc-email" class="form-input" placeholder="user@example.com"></div>';
    html += '<div class="form-group"><label>初始密碼（至少 6 位）</label><input type="text" id="acc-pwd" class="form-input" placeholder="告知使用者的初始密碼"></div>';
    html += '<div class="form-group"><label>角色</label><select id="acc-role" class="form-input">' + roleOptions + '</select></div>';
    html += '<div class="form-group form-group-end"><button class="btn btn-primary" onclick="SettingsPage.addUser()">新增</button></div>';
    html += '</div></div></div>';
    return html;
  }

  function logout() {
    Modal.confirm('確定登出？', function() { Auth.logout(); });
  }

  async function resetMyPassword() {
    var me = Auth.getCurrent();
    if (!me) return;
    var oldPwd = prompt('請輸入目前的密碼');
    if (oldPwd === null) return;
    var newPwd = prompt('請輸入新密碼（至少 6 位）');
    if (newPwd === null) return;
    var newPwd2 = prompt('再輸入一次新密碼');
    if (newPwd2 === null) return;
    if (newPwd !== newPwd2) { Toast.error('兩次輸入的新密碼不一致'); return; }
    var res = await Auth.changeMyPassword(oldPwd, newPwd);
    if (res.ok) Toast.success('密碼已更新');
    else Toast.error(res.error);
  }

  /* v2.4.10 員工自助改密碼（topbar 入口，所有人可用；Modal 版與 WEB 對齊） */
  function changePwdModal() {
    var html = '';
    html += '<p style="margin:0 0 16px;color:var(--text-secondary);font-size:var(--font-size-sm);">驗證原密碼後即可更新；下次登入請使用新密碼。</p>';
    html += '<div class="form-group"><label>原密碼</label><input type="password" id="cp-old-pwd" class="form-input" autocomplete="current-password"></div>';
    html += '<div class="form-group"><label>新密碼（至少6位）</label><input type="password" id="cp-new-pwd" class="form-input" autocomplete="new-password"></div>';
    html += '<div class="form-group"><label>確認新密碼</label><input type="password" id="cp-new-pwd2" class="form-input" autocomplete="new-password"></div>';
    html += '<div class="form-group form-group-actions"><button class="btn btn-primary" onclick="SettingsPage.changePwdSubmit()">更新密碼</button></div>';
    Modal.open('修改密碼', html);
  }

  async function changePwdSubmit() {
    var oldPwd = document.getElementById('cp-old-pwd').value;
    var pwd = document.getElementById('cp-new-pwd').value;
    var pwd2 = document.getElementById('cp-new-pwd2').value;
    if (!oldPwd) { Toast.error('請輸入原密碼'); return; }
    if (!pwd || pwd.length < 6) { Toast.error('新密碼至少6位'); return; }
    if (pwd !== pwd2) { Toast.error('兩次輸入的新密碼不一致'); return; }
    var res = await Auth.changeMyPassword(oldPwd, pwd);
    if (res.ok) {
      Toast.success('密碼已更新，下次登入請使用新密碼');
      Modal.close();
    } else {
      Toast.error(res.error);
    }
  }

  async function addUser() {
    var name = document.getElementById('acc-name').value.trim();
    var email = document.getElementById('acc-email').value.trim();
    var pwd = document.getElementById('acc-pwd').value;
    var role = document.getElementById('acc-role').value;
    if (role === 'super_admin' && !_isSuperAdmin()) {
      Toast.error('僅超級管理員可建立 super_admin 帳號');
      return;
    }
    Toast.info('建立帳號中…');
    var res = await Auth.createUserAccount({ name: name, email: email, pwd: pwd, role: role });
    if (res.ok) {
      Toast.success('帳號已建立：' + email);
      render();
    } else {
      Toast.error(res.error);
    }
  }

  function updateUserRole(id, role) {
    var u = Users.getById(id);
    if (!u) return;
    if (_protectedAccount(u)) { Toast.error('此帳號僅超級管理員可管理'); render(); return; }
    if (role === 'super_admin' && !_isSuperAdmin()) {
      Toast.error('僅超級管理員可授予 super_admin 角色');
      render(); return;
    }
    var updated = Users.update(id, { role: role });
    if (updated) Toast.success('角色已更新：' + (u.name || u.email));
    else render();
  }

  function toggleUserEnabled(id) {
    var u = Users.getById(id);
    var me = Perm.sessionUser() || {};
    if (!u) return;
    if (_protectedAccount(u)) { Toast.error('此帳號僅超級管理員可管理'); return; }
    if (u.id === me.uid) { Toast.error('不可停用自己的帳號'); return; }
    var updated = Users.update(id, { enabled: u.enabled === false });
    if (updated) Toast.success((u.enabled === false ? '已啟用：' : '已停用：') + (u.name || u.email));
  }

  async function resetUserPassword(email) {
    var newPwd = prompt('設定「' + email + '」的新密碼（至少 6 位）');
    if (newPwd === null) return;
    var res = await Auth.resetPassword(email, newPwd);
    if (res.ok) Toast.success('密碼已重設：' + email);
    else Toast.error(res.error);
  }

  function deleteUserAccount(id) {
    var u = Users.getById(id);
    var me = Perm.sessionUser() || {};
    if (!u) return;
    if (u.id === me.uid) { Toast.error('不可刪除自己的帳號'); return; }
    if (_protectedAccount(u)) { Toast.error('此帳號僅超級管理員可管理'); return; }
    Modal.confirm('確定刪除帳號「' + (u.name || u.email) + '」？\n（該帳號將無法再登入）', function() {
      Users.remove(id);
      Toast.success('帳號已刪除');
      render();
    });
  }

  // 進階：逐頁權限微調 + 特殊權限（覆寫角色預設）
  function editUser(id) {
    var u = Users.getById(id);
    if (!u) return;
    if (_protectedAccount(u)) { Toast.error('此帳號僅超級管理員可管理'); return; }
    var perms = u.permissions || {};
    var pageRows = Perm.pageKeys().map(function(p) {
      var cur = (perms.pages && perms.pages[p]) || '';
      var opts = ['', 'read', 'write', 'none'].map(function(v) {
        var label = v === '' ? '跟隨角色' : (v === 'read' ? '可讀' : v === 'write' ? '可讀寫' : '無權限');
        return '<option value="' + v + '"' + (cur === v ? ' selected' : '') + '>' + label + '</option>';
      }).join('');
      return '<tr><td>' + p + '</td><td><select class="form-input compact" data-perm-page="' + p + '">' + opts + '</select></td></tr>';
    }).join('');
    var specialRows = Perm.specialKeys().map(function(s) {
      var cur = !!(perms.special && perms.special[s]);
      return '<tr><td>' + s + '</td><td><input type="checkbox" data-perm-special="' + s + '"' + (cur ? ' checked' : '') + '></td></tr>';
    }).join('');

    var html = '<p class="modal-hint">' +
      '帳號：<b>' + esc(u.name || '') + '</b>（' + esc(u.email) + '）· 目前角色：<b>' + Perm.roleLabel(u.role) + '</b></p>' +
      '<p class="text-sm">「跟隨角色」= 使用角色預設權限；其他值會覆寫該角色預設。</p>' +
      '<table class="data-table"><thead><tr><th>頁面</th><th>權限覆寫</th></tr></thead><tbody>' + pageRows + '</tbody></table>' +
      '<h4 class="section-subtitle">特殊權限</h4>' +
      '<table class="data-table"><thead><tr><th>權限</th><th>允許</th></tr></thead><tbody>' + specialRows + '</tbody></table>' +
      '<div class="form-group form-group-actions"><button class="btn btn-primary" onclick="SettingsPage.saveUserEdit(\'' + esc(u.id) + '\')">儲存權限</button></div>';
    Modal.open('進階權限設定', html);
  }

  function saveUserEdit(id) {
    var u = Users.getById(id);
    if (!u) return;
    if (_protectedAccount(u)) { Toast.error('此帳號僅超級管理員可管理'); return; }
    var pages = {};
    var hasPage = false;
    document.querySelectorAll('[data-perm-page]').forEach(function(sel) {
      if (sel.value) { pages[sel.getAttribute('data-perm-page')] = sel.value; hasPage = true; }
    });
    var special = {};
    var hasSpecial = false;
    document.querySelectorAll('[data-perm-special]').forEach(function(cb) {
      var k = cb.getAttribute('data-perm-special');
      if (cb.checked) { special[k] = true; hasSpecial = true; }
      else if ((u.permissions && u.permissions.special && u.permissions.special[k])) { special[k] = false; hasSpecial = true; } // 顯式關閉既有覆寫
    });
    var permissions = {};
    if (hasPage) permissions.pages = pages;
    if (hasSpecial) permissions.special = special;
    var updated = Users.update(id, { permissions: permissions });
    if (updated) {
      Toast.success('權限已更新');
      Modal.close();
    }
  }

  function updateTicket(category, idx, field, value) {
    if (!_canEditSettings()) return;
    var tp = Settings.getTicketPrices();
    var val = parseFloat(value);
    if (category === 'waterDance') {
      tp.waterDance[idx][field] = val;
    } else {
      tp.waterPark[field] = val;
    }
    Settings.updateTicketPrices(tp);
    Toast.success('價格已更新');
  }

  function toggleRebate(idx, checked) {
    if (!_canEditSettings()) return;
    var halls = Settings.getVipHalls();
    halls[idx].hasMonthlyRebate = checked;
    Settings.updateVipHalls(halls);
    render();
    Toast.success('月退費設定已更新');
  }

  function toggleCard(header) {
    var card = header.parentElement;
    card.classList.toggle('st-collapsed');
    var icon = header.querySelector('.st-toggle-icon');
    if (icon) icon.textContent = card.classList.contains('st-collapsed') ? '▶' : '▼';
  }


  /* ===== 員工管理 ===== */
  function loadEmployees() {
    return Store.read(STORAGE_KEYS.EMPLOYEE_LIST) || {};
  }

  function saveEmployees(data) {
    Store.write(STORAGE_KEYS.EMPLOYEE_LIST, data);
  }

  function renderEmployeeTable() {
    var employees = loadEmployees();
    var tbody = document.getElementById('emp-table-body');
    if (!tbody) return;

    var ids = Object.keys(employees);
    if (ids.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="table-empty-cell">尚無員工</td></tr>';
      return;
    }

    tbody.innerHTML = ids.map(function(tgId) {
      var e = employees[tgId];
      var roleLabel = e.role === 'admin' ? '\u7BA1\u7406\u54E1' : '\u54E1\u5DE5';
      return '<tr>' +
        '<td>' + escHtml(e.name || '') + '</td>' +
        '<td><code>' + escHtml(tgId) + '</code></td>' +
        '<td>' + roleLabel + '</td>' +
        '<td>' + (e.addedAt ? new Date(e.addedAt).toLocaleDateString() : '-') + '</td>' +
        '<td><button class="btn-sm btn-danger" onclick="SettingsPage.delEmployee(\'' + escHtml(tgId) + '\')">\u522A\u9664</button></td>' +
        '</tr>';
    }).join('');
  }

  function addEmployee() {
    if (!_canEditSettings()) return;
    var name = document.getElementById('emp-name').value.trim();
    var tgId = document.getElementById('emp-tgid').value.trim();
    var role = document.getElementById('emp-role').value;

    if (!name) { Toast.warning('\u8ACB\u8F38\u5165\u59D3\u540D'); return; }
    if (!tgId) { Toast.warning('\u8ACB\u8F38\u5165 Telegram ID'); return; }
    if (!/^\d+$/.test(tgId)) { Toast.warning('Telegram ID \u5FC5\u9808\u662F\u7D14\u6578\u5B57'); return; }

    var employees = loadEmployees();
    employees[tgId] = {
      name: name,
      role: role,
      addedAt: Date.now(),
      addedBy: 'web',
    };

    saveEmployees(employees);
    Uploader.enqueue(FB_PATH.EMPLOYEE_LIST, employees);
    Toast.success('\u5DF2\u65B0\u589E\u54E1\u5DE5\uFF1A' + name);

    document.getElementById('emp-name').value = '';
    document.getElementById('emp-tgid').value = '';
    renderEmployeeTable();
  }

  function delEmployee(tgId) {
    if (!_canEditSettings()) return;
    Modal.confirm('\u78BA\u5B9A\u522A\u9664\u6B64\u54E1\u5DE5\uFF1F', function() {
      var employees = loadEmployees();
      delete employees[tgId];
      saveEmployees(employees);
      Uploader.enqueue(FB_PATH.EMPLOYEE_LIST, employees);
      Toast.success('\u5DF2\u522A\u9664');
      renderEmployeeTable();
    });
  }

  /* ===== 資料備份（Phase 1C）===== */

  function _renderBackupCard() {
    var lastBackup = Backup.getLastBackupAt();
    var lastStr = lastBackup ? TWDate.dateStrFrom(lastBackup) + ' ' +
                   TWDate.toTWISOString(lastBackup).slice(11, 16) : '從未備份';
    var cfg = Backup.getReminderConfig();
    var overdue = Backup.isOverdue();
    var overdueHtml = overdue ?
      '<span class="text-danger">⚠ 已逾期，建議立即備份</span>' :
      '<span class="text-secondary">狀態正常</span>';

    var html = '<div class="card" id="st-backup-card">';
    html += '<div class="card-header"><h3>資料備份</h3></div>';
    html += '<p class="section-desc">' +
            '一鍵打包全系統資料（會員／代理／股東／行程／帳務／訂房／設定）為 JSON 檔。' +
            '匯入採合併方式，不會覆蓋本機較新的資料。</p>';
    html += '<div class="form-row form-row-end">';
    html += '<div class="form-group"><label>上次備份</label>' +
            '<div class="padded-value">' + lastStr + '　' + overdueHtml + '</div></div>';
    html += '<div class="form-group"><label>備份提醒頻率</label>' +
            '<select id="bk-reminder" class="form-input" onchange="SettingsPage.saveReminder(this.value)">' +
            '<option value="off"' + (!cfg.enabled ? ' selected' : '') + '>關閉</option>' +
            '<option value="1"' + (cfg.enabled && cfg.intervalDays === 1 ? ' selected' : '') + '>每天</option>' +
            '<option value="7"' + (cfg.enabled && cfg.intervalDays === 7 ? ' selected' : '') + '>每週（建議）</option>' +
            '<option value="30"' + (cfg.enabled && cfg.intervalDays === 30 ? ' selected' : '') + '>每月</option>' +
            '</select></div>';
    html += '<div class="form-group"><button class="btn btn-primary" onclick="SettingsPage.exportBackup()">匯出備份</button></div>';
    html += '<div class="form-group"><label>匯入復原</label>' +
            '<input type="file" id="bk-import-file" accept=".json,application/json" class="form-input form-input-file" ' +
            'onchange="SettingsPage.onImportFile(this)"></div>';
    html += '</div></div>';
    return html;
  }

  function exportBackup() {
    if (!_canBackup()) return;
    try {
      var result = Backup.exportBackup();
      Toast.success('備份已匯出：' + result.filename + '（' + result.sizeBytes + ' bytes）');
    } catch (e) {
      console.error('[Settings] 匯出備份失敗', e);
      Toast.error('匯出失敗：' + e.message);
    }
  }

  function onImportFile(input) {
    if (!_canBackup()) { input.value = ''; return; }
    var file = input.files && input.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function() {
      input.value = ''; // 允許重選同一檔案
      try {
        var meta = Backup.peekMeta(reader.result);
      } catch (e) {
        Toast.error('匯入失敗：' + e.message);
        return;
      }
      var total = 0;
      Object.keys(meta.counts || {}).forEach(function(k) { total += meta.counts[k]; });
      var envWarn = (meta.devMode !== !!_TW_IS_DEV) ?
        '\n⚠ 注意：此備份來自' + (meta.devMode ? '測試環境' : '正式環境') + '，將匯入目前的' + (_TW_IS_DEV ? '測試環境' : '正式環境') + '。' : '';
      Modal.confirm(
        '備份檔資訊：\n' +
        '　匯出時間：' + (meta.exportedAtStr || '-') + '\n' +
        '　資料筆數：約 ' + total + ' 筆\n' +
        '　來源版本：' + (meta.buildVersion || meta.appVersion || '-') + envWarn + '\n\n' +
        '匯入會與本機資料合併（較新者保留、不重複、不覆蓋），確定匯入？',
        function() {
          try {
            var result = Backup.importBackup(reader.result);
            var affected = result.collections.filter(function(c) { return c.added > 0 || c.rawRestored; }).length;
            Toast.success('匯入完成：' + affected + ' 個集合有新增資料（合併不覆蓋）');
            render(); // 重新渲染（上次備份時間等狀態更新）
          } catch (e) {
            console.error('[Settings] 匯入備份失敗', e);
            Toast.error('匯入失敗：' + e.message);
          }
        }
      );
    };
    reader.onerror = function() { Toast.error('檔案讀取失敗'); };
    reader.readAsText(file);
  }

  function saveReminder(value) {
    if (value === 'off') {
      Backup.setReminderConfig(false, 7);
      Toast.success('備份提醒已關閉');
    } else {
      Backup.setReminderConfig(true, parseInt(value, 10));
      Toast.success('備份提醒已設為每 ' + value + ' 天');
    }
  }

  /* ===== Phase 1D / 1.15 同步衝突可視化 ===== */
  // v1.9.1 以白話中文呈現（集合物件名稱 + 資料名稱 + 欄位差異摘要），不再顯示原始 fbKey
  var _COLLECTION_LABELS = {
    members: '會員', memberTxs: '帳務', trips: '行程(團)', bookings: '訂房',
    agents: '代理', shareholders: '股東', supplements: '補帳',
    settings: '系統設定', extraIncome: '額外收入', hotelConfig: '酒店設定',
    users: '帳號', auditLog: '審計紀錄',
  };
  var _FIELD_LABELS = {
    id: '編號', name: '名稱', casinoId: '賭場編號', agentId: '代理', shareholderId: '股東',
    tripId: '所屬團', memberId: '會員', hotel: '酒店', visitDate: '前往日期',
    washCode: '洗碼', outCode: '出碼', backCode: '回碼', rate: '費率', amount: '金額',
    guestName: '客人', roomType: '房型', checkIn: '入住日', checkOut: '退房日',
    type: '類型', note: '備註', notes: '備註', status: '狀態', date: '日期',
  };
  function _conflictLabel(v) {
    if (!v) return '—';
    if (v.name) return v.name;
    if (v.hotel) return v.hotel + (v.date ? '（' + v.date + '）' : '');
    if (v.date) return v.date;
    return v.id || '';
  }
  function _diffSummary(a, b) {
    if (!a || !b) return '';
    var keys = {};
    Object.keys(a).concat(Object.keys(b)).forEach(function(k) { keys[k] = true; });
    var lines = [];
    Object.keys(keys).sort().forEach(function(k) {
      if (k.charAt(0) === '_') return;
      if (_stableStringify(a[k]) === _stableStringify(b[k])) return;
      var label = _FIELD_LABELS[k] || k;
      function fmt(v) {
        var s = (v === undefined || v === null || v === '') ? '（空）' : String(v);
        return s.length > 24 ? s.slice(0, 24) + '…' : s;
      }
      lines.push(label + '：本機「' + fmt(a[k]) + '」／雲端「' + fmt(b[k]) + '」');
    });
    return lines.slice(0, 6).join('<br>');
  }
  function _renderConflictsCard() {
    var list = (typeof Conflicts !== 'undefined') ? Conflicts.getAll() : [];
    var html = '<div class="card">';
    html += '<div class="card-header"><h3>同步衝突</h3></div>';
    html += '<p class="section-desc">以下資料在同步時偵測到本機與雲端版本不一致，請選擇保留版本。</p>';
    list.slice().reverse().forEach(function(c) {
      var colLabel = _COLLECTION_LABELS[c.collection] || c.collection;
      var winnerTag = c.winner === 'remote' ? '（目前保留雲端）' : '（目前保留本機）';
      html += '<div class="conflict-item">';
      html += '<div class="conflict-item-head"><span class="conflict-item-title">' + esc(colLabel) + '：' + esc(_conflictLabel(c.local) || _conflictLabel(c.remote)) + '</span>';
      html += '<span class="text-secondary text-sm">' + esc(_fmtTime(c.at)) + winnerTag + '</span></div>';
      html += '<div class="conflict-item-diff">' + _diffSummary(c.local, c.remote) + '</div>';
      html += '<div class="conflict-item-actions">';
      html += '<button class="btn btn-primary btn-gap" onclick="SettingsPage.resolveConflict(\'' + c.id + '\',\'local\')">保留本機</button>';
      html += '<button class="btn btn-primary" onclick="SettingsPage.resolveConflict(\'' + c.id + '\',\'remote\')">保留雲端</button>';
      html += '</div>';
      html += '</div>';
    });
    html += '<div class="form-group-actions"><button class="btn" onclick="SettingsPage.clearConflicts()">全部忽略（保留目前版本）</button></div>';
    html += '</div>';
    return html;
  }
  function _fmtTime(ts) {
    if (!ts) return '';
    var d = new Date(ts);
    return d.getFullYear() + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + String(d.getDate()).padStart(2, '0') + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }
  function resolveConflict(id, choice) {
    Modal.confirm('確定「保留' + (choice === 'local' ? '本機' : '雲端') + '」版本？', function() {
      Conflicts.resolve(id, choice);
      Toast.success('衝突已解決');
      render();
    });
  }
  function clearConflicts() {
    Modal.confirm('忽略所有衝突（保留目前版本，不再提示）？', function() {
      Conflicts.clearAll();
      Toast.success('已清除全部衝突記錄');
      render();
    });
  }

  /* ===== Phase 1D / 1.16 回收站 ===== */
  function _renderRecycleBinCard() {
    var list = (typeof RecycleBin !== 'undefined') ? RecycleBin.list() : [];
    var html = '<div class="card">';
    html += '<div class="card-header"><h3>回收站</h3></div>';
    html += '<p class="section-desc">已刪除/封存的資料可在此還原（保留 ' + (CONFIG.RECYCLE_BIN_RETENTION_DAYS || 30) + ' 天）。</p>';
    html += '<table class="data-table"><thead><tr>';
    html += '<th>類型</th><th>集合</th><th>識別</th><th>名稱</th><th>時間</th><th>操作</th>';
    html += '</tr></thead><tbody>';
    list.forEach(function(item) {
      var kindLabel = item.kind === 'seal' ? '封存' : '刪除';
      var name = (item.snapshot && (item.snapshot.name || item.snapshot.id)) || item.entityId || '';
      html += '<tr>';
      html += '<td>' + kindLabel + '</td>';
      html += '<td>' + esc(item.collection) + '</td>';
      html += '<td>' + esc(item.entityId || '') + '</td>';
      html += '<td>' + esc(name) + '</td>';
      html += '<td>' + esc(_fmtTime(item.at)) + '</td>';
      html += '<td>';
      html += '<button class="btn btn-primary btn-gap" onclick="SettingsPage.restoreItem(\'' + item.id + '\')">還原</button>';
      html += '<button class="btn" onclick="SettingsPage.dropItem(\'' + item.id + '\')">永久移除</button>';
      html += '</td>';
      html += '</tr>';
    });
    html += '</tbody></table>';
    html += '</div>';
    return html;
  }
  function restoreItem(id) {
    Modal.confirm('確定還原此項目？', function() {
      var ok = RecycleBin.restore(id);
      if (ok) { Toast.success('已還原'); render(); }
      else Toast.error('還原失敗（找不到原始資料）');
    });
  }
  function dropItem(id) {
    Modal.confirm('永久移除後不可還原，確定？', function() {
      RecycleBin.removeItem(id);
      Toast.success('已永久移除');
      render();
    });
  }

  return { render: render, saveRate: saveRate, updateHall: updateHall, toggleRebate: toggleRebate, toggleCard: toggleCard, updateTicket: updateTicket, logout: logout, resetMyPassword: resetMyPassword, changePwdModal: changePwdModal, changePwdSubmit: changePwdSubmit, addUser: addUser, updateUserRole: updateUserRole, toggleUserEnabled: toggleUserEnabled, resetUserPassword: resetUserPassword, deleteUserAccount: deleteUserAccount, editUser: editUser, saveUserEdit: saveUserEdit, addEmployee: addEmployee, delEmployee: delEmployee, exportBackup: exportBackup, onImportFile: onImportFile, saveReminder: saveReminder, resolveConflict: resolveConflict, clearConflicts: clearConflicts, restoreItem: restoreItem, dropItem: dropItem };
})();


// === src/pages/reports.js ===
/**
 * pages/reports.js — 報表中心頁
 * 彙整各模組匯出入口，統一手機版面
 * 依赖: core/constants.js, core/escape.js, core/datetime.js, data/trips.js, data/agents.js, data/shareholders.js, data/bookings.js, data/memberTxs.js, ui/toast.js, ui/pdfExport.js, pages/settings.js
 */
var ReportsPage = (function() {
  var _selectedTrip = '';

  function render() {
    var trips = Trips.getAll();
    // v1.9.0 全部團皆可選（結帳後發給股東的團是 pending_settlement/sealed，原本只列 active 會選不到）
    // 排序：進行中 → 待結帳 → 已封存；同狀態新的在前
    var ST_ORDER = { active: 0, pending_settlement: 1, sealed: 2 };
    var ST_LABEL = { active: '進行中', pending_settlement: '待結帳', sealed: '已封存' };
    var allTrips = trips.slice().sort(function(a, b) {
      var oa = ST_ORDER[a.status] !== undefined ? ST_ORDER[a.status] : 3;
      var ob = ST_ORDER[b.status] !== undefined ? ST_ORDER[b.status] : 3;
      if (oa !== ob) return oa - ob;
      return (b.createdAt || 0) - (a.createdAt || 0);
    });

    var html = '';
    html += '<div class="reports-page">';

    // 團選擇
    html += '<div class="card mb-md">';
    html += '<div class="card-header"><h3>選擇團（匯出範圍）</h3></div>';
    html += '<div class="card-body">';
    html += '<select id="rpt-trip-select" class="form-input" onchange="ReportsPage.selectTrip(this.value)">';
    html += '<option value="">全部團</option>';
    allTrips.forEach(function(t) {
      // v1.9.0 修正 t.note → t.notes；label 帶狀態與預計前往日
      var bits = [t.id];
      if (t.label) bits.push(t.label); // v2.1 團備註名稱
      if (t.visitDate) bits.push(t.visitDate);
      if (t.hotelNote) bits.push(t.hotelNote);
      if (t.notes) bits.push(t.notes);
      var label = bits.join(' ') + '（' + (ST_LABEL[t.status] || t.status) + '）';
      html += '<option value="' + t.id + '"' + (_selectedTrip === t.id ? ' selected' : '') + '>' + esc(label) + '</option>';
    });
    html += '</select>';
    html += '</div></div>';

    // PDF 報表區
    html += '<div class="card mb-md">';
    html += '<div class="card-header"><h3>PDF 報表</h3></div>';
    html += '<div class="card-body">';
    html += '<div class="reports-grid">';

    // 代理明細
    html += '<div class="rpt-card" onclick="ReportsPage.exportAgentList()">';
    html += '<div class="rpt-icon">' + ICONS.file + '</div>';
    html += '<div class="rpt-info">';
    html += '<div class="rpt-title">代理明細</div>';
    html += '<div class="rpt-desc">各代理的會員帳卡明細 + 房間記錄</div>';
    html += '</div>';
    html += '<div class="rpt-arrow">›</div>';
    html += '</div>';

    // 股東全覽
    html += '<div class="rpt-card" onclick="ReportsPage.exportShareholderList()">';
    html += '<div class="rpt-icon">' + ICONS.chart + '</div>';
    html += '<div class="rpt-info">';
    html += '<div class="rpt-title">股東全覽</div>';
    html += '<div class="rpt-desc">全部代理明細彙整（按股東分組）</div>';
    html += '</div>';
    html += '<div class="rpt-arrow">›</div>';
    html += '</div>';

    html += '</div></div></div>';

    // 數據備份區
    html += '<div class="card mb-md">';
    html += '<div class="card-header"><h3>數據備份</h3></div>';
    html += '<div class="card-body">';
    html += '<div class="reports-grid">';

    // 匯出備份
    html += '<div class="rpt-card" onclick="ReportsPage.exportBackup()">';
    html += '<div class="rpt-icon">' + ICONS.save + '</div>';
    html += '<div class="rpt-info">';
    html += '<div class="rpt-title">匯出備份</div>';
    html += '<div class="rpt-desc">全部資料打包匯出（可跨裝置匯入）</div>';
    html += '</div>';
    html += '<div class="rpt-arrow">›</div>';
    html += '</div>';

    html += '</div></div></div>';

    // 快覽統計
    var agents = Agents.getAll();
    var shareholders = Shareholders.getAll();
    var mtxs = MemberTxs.getAll();
    var bookings = Bookings.getAll();
    var tripTxs = _selectedTrip ? mtxs.filter(function(t) { return t.tripId === _selectedTrip; }) : mtxs;
    var tripBookings = _selectedTrip ? bookings.filter(function(b) { return b.tripId === _selectedTrip; }) : bookings;
    var totalWash = tripTxs.reduce(function(s, t) { return s + (t.washCode || 0); }, 0);

    html += '<div class="card">';
    html += '<div class="card-header"><h3>快覽統計' + (_selectedTrip ? '（團 ' + esc(_selectedTrip) + '）' : '（全部團）') + '</h3></div>';
    html += '<div class="card-body">';
    html += '<div class="rpt-stats">';
    html += '<div class="rpt-stat-item"><span class="rpt-stat-val">' + agents.length + '</span><span class="rpt-stat-label">代理</span></div>';
    html += '<div class="rpt-stat-item"><span class="rpt-stat-val">' + shareholders.length + '</span><span class="rpt-stat-label">股東</span></div>';
    html += '<div class="rpt-stat-item"><span class="rpt-stat-val">' + tripTxs.length + '</span><span class="rpt-stat-label">交易</span></div>';
    html += '<div class="rpt-stat-item"><span class="rpt-stat-val">' + tripBookings.length + '</span><span class="rpt-stat-label">訂房</span></div>';
    html += '<div class="rpt-stat-item"><span class="rpt-stat-val">' + totalWash.toFixed(1) + '</span><span class="rpt-stat-label">洗碼(萬)</span></div>';
    html += '</div></div></div>';

    html += '</div>';

    document.getElementById('page-reports').innerHTML = html;
  }

  function selectTrip(tripId) {
    _selectedTrip = tripId || '';
    render();
  }

  function exportAgentList() {
    if (_selectedTrip) {
      var trip = Trips.getById(_selectedTrip);
      if (trip && trip.agentId) {
        PdfExport.exportAgent(trip.agentId, _selectedTrip);
        return;
      }
    }
    Toast.info('請從帳務頁選擇代理後匯出，或選擇特定團');
  }

  function exportShareholderList() {
    PdfExport.exportShareholder(_selectedTrip || undefined);
  }

  function exportBackup() {
    SettingsPage.exportBackup();
  }

  return {
    render: render,
    selectTrip: selectTrip,
    exportAgentList: exportAgentList,
    exportShareholderList: exportShareholderList,
    exportBackup: exportBackup,
  };
})();


// === src/pages/auditLog.js ===
/**
 * pages/auditLog.js — Phase 1B 審計紀錄查詢頁
 * 按人員/時間/模組/動作篩選，管理員限定（Router 攔截 + Perm.can 把關）
 * 依赖: core/constants.js, core/escape.js, core/permissions.js, data/auditLog.js, ui/paginator.js
 */
var AuditLogPage = (function() {
  'use strict';

  var _filters = { module: '', action: '', actorId: '', keyword: '' };

  var MODULE_LABELS = {
    members: '會員', agents: '代理', shareholders: '股東', trips: '團務',
    memberTxs: '會員交易', bookings: '訂房', supplements: '補充',
    settings: '系統設定', hotelConfig: '酒店設定', users: '帳號',
    auth: '登入', backup: '備份', auditLog: '審計',
  };

  var ACTION_LABELS = {
    create: '新增', update: '修改', delete: '刪除', seal: '封存',
    login: '登入', logout: '登出', setup: '初始設定',
    export: '匯出', import: '匯入', unlockArchived: '解封',
  };

  function _fmtTime(ts) {
    if (!ts) return '';
    var d = new Date(ts);
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    var hh = String(d.getHours()).padStart(2, '0');
    var mm = String(d.getMinutes()).padStart(2, '0');
    return y + '-' + m + '-' + dd + ' ' + hh + ':' + mm;
  }

  function _actionColor(action) {
    if (action === 'create') return 'var(--success, #16a34a)';
    if (action === 'delete') return 'var(--danger, #dc2626)';
    if (action === 'login' || action === 'logout') return 'var(--info, #2563eb)';
    if (action === 'export' || action === 'import') return 'var(--warning, #d97706)';
    return 'inherit';
  }

  function render() {
    var container = document.getElementById('page-audit-log');
    if (!container) return;

    // 權限檢查（雙重保險：Router 已擋，這裡再擋一次）
    if (typeof Perm !== 'undefined' && Perm.hasSession() && !Perm.can('auditLog', 'read')) {
      container.innerHTML = '<div class="card"><p>您無權限查看審計紀錄</p></div>';
      return;
    }

    var records = AuditLog.query({
      module: _filters.module || undefined,
      action: _filters.action || undefined,
      actorId: _filters.actorId || undefined,
      keyword: _filters.keyword || undefined,
    });

    var html = '<div class="card">';
    html += '<div class="card-header"><h3>審計紀錄</h3>';
    html += '<span style="float:right;font-size:12px;color:var(--text-muted,#888);">共 ' + records.length + ' 筆</span>';
    html += '</div>';

    // 篩選列
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">';

    // 模組篩選
    html += '<select id="audit-filter-module" class="cell-pad-md">';
    html += '<option value="">全部模組</option>';
    Object.keys(MODULE_LABELS).forEach(function(k) {
      html += '<option value="' + k + '"' + (_filters.module === k ? ' selected' : '') + '>' + MODULE_LABELS[k] + '</option>';
    });
    html += '</select>';

    // 動作篩選
    html += '<select id="audit-filter-action" class="cell-pad-md">';
    html += '<option value="">全部動作</option>';
    Object.keys(ACTION_LABELS).forEach(function(k) {
      html += '<option value="' + k + '"' + (_filters.action === k ? ' selected' : '') + '>' + ACTION_LABELS[k] + '</option>';
    });
    html += '</select>';

    // 關鍵字
    html += '<input type="text" id="audit-filter-keyword" placeholder="搜尋摘要/對象/操作者" value="' + esc(_filters.keyword || '') + '" style="flex:1;min-width:150px;padding:6px 10px;border:1px solid var(--border,#ddd);border-radius:6px;font-size:13px;" />';

    // 操作者篩選（從記錄中提取唯一操作者）
    var actors = {};
    AuditLog.getAll().forEach(function(r) {
      if (r.actorId && r.actorId !== 'system') actors[r.actorId] = r.actorName || r.actorId;
    });
    if (Object.keys(actors).length > 0) {
      html += '<select id="audit-filter-actor" class="cell-pad-md">';
      html += '<option value="">全部操作者</option>';
      Object.keys(actors).forEach(function(uid) {
        html += '<option value="' + esc(uid) + '"' + (_filters.actorId === uid ? ' selected' : '') + '>' + esc(actors[uid]) + '</option>';
      });
      html += '</select>';
    }

    html += '</div>';

    // 表格
    if (records.length === 0) {
      html += '<div style="text-align:center;padding:40px;color:var(--text-muted,#888);">';
      html += '<p>無審計紀錄</p>';
      html += '</div>';
    } else {
      html += '<div style="overflow-x:auto;">';
      html += '<div class="table-wrapper"><table style="width:100%;border-collapse:collapse;font-size:13px;">';
      html += '<thead><tr style="border-bottom:2px solid var(--border,#ddd);text-align:left;">';
      html += '<th style="padding:8px 6px;white-space:nowrap;">時間</th>';
      html += '<th class="cell-pad-sm">操作者</th>';
      html += '<th class="cell-pad-sm">模組</th>';
      html += '<th class="cell-pad-sm">動作</th>';
      html += '<th class="cell-pad-sm">摘要</th>';
      html += '</tr></thead><tbody>';

      // 分頁（最多顯示 50 筆，避免效能問題）
      var display = records.slice(0, 50);
      display.forEach(function(r) {
        var modLabel = MODULE_LABELS[r.module] || r.module;
        var actLabel = ACTION_LABELS[r.action] || r.action;
        var actColor = _actionColor(r.action);
        html += '<tr style="border-bottom:1px solid var(--border,#eee);">';
        html += '<td style="padding:8px 6px;white-space:nowrap;color:var(--text-muted,#666);">' + esc(_fmtTime(r.at)) + '</td>';
        html += '<td class="cell-pad-sm">' + esc(r.actorName || r.actorId || '') + '</td>';
        html += '<td class="cell-pad-sm">' + esc(modLabel) + '</td>';
        html += '<td style="padding:8px 6px;color:' + actColor + ';font-weight:500;">' + esc(actLabel) + '</td>';
        html += '<td class="cell-pad-sm">' + esc(r.summary || '') + '</td>';
        html += '</tr>';
      });

      html += '</tbody></table></div>';
      if (records.length > 50) {
        html += '<p style="text-align:center;padding:12px;color:var(--text-muted,#888);font-size:12px;">僅顯示最近 50 筆，共 ' + records.length + ' 筆紀錄</p>';
      }
      html += '</div>';
    }

    html += '</div>';

    container.innerHTML = html;

    // 綁定篩選事件
    var modSel = document.getElementById('audit-filter-module');
    if (modSel) modSel.onchange = function() { _filters.module = modSel.value; render(); };
    var actSel = document.getElementById('audit-filter-action');
    if (actSel) actSel.onchange = function() { _filters.action = actSel.value; render(); };
    var kwInput = document.getElementById('audit-filter-keyword');
    if (kwInput) {
      var _kwTimer = null;
      kwInput.oninput = function() {
        clearTimeout(_kwTimer);
        _kwTimer = setTimeout(function() { _filters.keyword = kwInput.value.trim(); render(); }, 300);
      };
    }
    var actorSel = document.getElementById('audit-filter-actor');
    if (actorSel) actorSel.onchange = function() { _filters.actorId = actorSel.value; render(); };
  }

  return { render: render };
})();


// === src/bridge/bridge.js ===
/**
 * bridge/bridge.js — HTML onclick 全局桥接
 * 暴露所有模組到 window 物件，供 HTML onclick 调用
 * 依赖: 无
 */
function exposeGlobals() {
  // Core
  window.EventBus = EventBus;
  window.State = State;
  window.Store = Store;
  window.Router = Router;
  window.Auth = Auth;
  window.Perm = Perm;
  window._syncBadgeRetry = (typeof MobileUI !== 'undefined' && MobileUI._syncBadgeRetry) ? MobileUI._syncBadgeRetry : function(){}; // v1.8.0 同步徽章點擊重試
  // Sync
  window.FirebaseSync = FirebaseSync;
  window.FB_PATH = FB_PATH;
  window.Uploader = Uploader;
  window.Watchers = Watchers;
  window.RecentlyDeleted = RecentlyDeleted;
  window.RecycleBin = RecycleBin;
  window.Conflicts = Conflicts;
  // Data
  window.Members = Members;
  window.Agents = Agents;
  window.Shareholders = Shareholders;
  window.Trips = Trips;
  window.MemberTxs = MemberTxs;
  window.Wallet = Wallet; // v2.0 港幣現鈔錢包
  window.Bookings = Bookings;
  window.Supplements = Supplements;
  window.Settings = Settings;
  window.ExtraIncome = ExtraIncome;
  window.HotelConfig = HotelConfig;
  window.Users = Users;
  window.AuditLog = AuditLog;
  // UI
  window.Icons = Icons;
  window.FormFX = FormFX;
  window.Toast = Toast;
  window.Modal = Modal;
  window.Keyboard = Keyboard;
  window.Paginator = Paginator;
  window.PdfExport = PdfExport;
  // Pages
  window.OverviewPage = OverviewPage;
  window.PendingPage = PendingPage;
  window.MemberPage = MemberPage;
  window.WalletPage = WalletPage; // v2.0 港幣現鈔錢包
  window.RoomPage = RoomPage;
  window.FeesPage = FeesPage;
  window.ProfitPage = ProfitPage;
  window.AgentPage = AgentPage;
  window.ShareholderPage = ShareholderPage;
  window.MembersMgmtPage = MembersMgmtPage;
  window.HistoryPage = HistoryPage;
  window.getTripBookings = HistoryPage.getTripBookings; // 團訂房歸屬查詢（測試/除錯用）
  window.ReportsPage = ReportsPage;
  window.SettingsPage = SettingsPage;
  window.AuditLogPage = AuditLogPage;
  // Calc (for debugging)
  window.calcMemberTx = calcMemberTx;
  window.roundDown = roundDown;
  window.calcAgentQuota = calcAgentQuota;
  window.calcShareholderProfit = calcShareholderProfit;
  window.calcShareholderTotal = calcShareholderTotal;
}


// === src/app.js ===
/**
 * app.js — 主应用入口
 * 初始化 Firebase + 載入資料 + 啟動监听 + 渲染首页
 * Phase 1A：個別帳號登入流程（session 還原 / 登入 / 首次設定精靈）+ 權限攔截掛鉤
 * 依赖: bridge/bridge.js, core/schema.js, core/auth.js, core/permissions.js, core/constants.js, core/events.js, core/router.js, core/state.js, core/store.js, data/agents.js, data/auditLog.js, data/bookings.js, data/extraIncome.js, data/hotelConfig.js, data/memberTxs.js, data/members.js, data/settings.js, data/shareholders.js, data/supplements.js, data/trips.js, data/users.js, pages/agent.js, pages/auditLog.js, pages/fees.js, pages/history.js, pages/member.js, pages/membersMgmt.js, pages/overview.js, pages/pending.js, pages/profit.js, pages/reports.js, pages/room.js, pages/settings.js, pages/shareholder.js, sync/backup.js, sync/conflicts.js, sync/firebase.js, sync/recentlyDeleted.js, sync/uploader.js, sync/watchers.js, ui/keyboard.js, ui/toast.js
 */

// v2.4.0 P1：KPI 數字滾動動畫（與 WEB v1.7.0 同款）
function animateKpis(root) {
  if (!root || !root.querySelectorAll) return;
  var els = root.querySelectorAll('.kpi-value');
  for (var i = 0; i < els.length; i++) {
    (function(el) {
      var txt = el.textContent || '';
      var m = txt.match(/[\d,]+(\.\d+)?/);
      if (!m) return; // 非數字（如「--」）略過
      var target = parseFloat(m[0].replace(/,/g, ''));
      if (isNaN(target)) return;
      var prefix = txt.slice(0, txt.indexOf(m[0]));
      var suffix = txt.slice(txt.indexOf(m[0]) + m[0].length);
      var dec = (m[0].split('.')[1] || '').length;
      var dur = 600, start = null;
      function fmt(v) {
        var s = v.toFixed(dec);
        var parts = s.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return prefix + parts.join('.') + suffix;
      }
      function frame(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    })(els[i]);
  }
}

function onPageChange(pageName) {
  var renderMap = {
    'overview':    function() { OverviewPage.render(); },
    'pending':     function() { PendingPage.render(); },
    'member':      function() { MemberPage.render(); },
    'wallet':      function() { WalletPage.render(); }, // v2.0 港幣現鈔錢包
    'room':        function() { RoomPage.render(); },
    'fees':        function() { FeesPage.render(); },
    'profit':      function() { ProfitPage.render(); },
    'agent':       function() { AgentPage.render(); },
    'shareholder': function() { ShareholderPage.render(); },
    'membersMgmt': function() { MembersMgmtPage.render(); },
    'history':     function() { HistoryPage.render(); },
    'reports':     function() { ReportsPage.render(); },
    'settings':    function() { SettingsPage.render(); },
    'auditLog':    function() { AuditLogPage.render(); },
  };
  if (renderMap[pageName]) {
    try { renderMap[pageName](); } catch(e) { console.error('[App] render ' + pageName, e); }
    /* v2.4.0 P1：KPI 數字滾動動畫（render 完成後觸發，與 WEB 同款） */
    setTimeout(function() {
      var active = document.querySelector('.page-section.active');
      if (active) animateKpis(active);
    }, 60);
  }
}

function loadAllData() {
  Members.load();
  Agents.load();
  Shareholders.load();
  Trips.load();
  MemberTxs.load();
  Wallet.load(); // v2.0 港幣現鈔錢包
  PendExps.load(); // v2.1 預支開銷
  Loans.load(); // v2.2 港幣借支
  Catalog.load(); // v2.2.2 品項主檔
  Bookings.load();
  Supplements.load();
  Settings.load();
  ExtraIncome.load();
  HotelConfig.load();
  Users.load(); // Phase 1A 帳號集合
  AuditLog.load(); // Phase 1B 審計紀錄
  /* EMPLOYEE_LIST: 物件結構，直接從 localStorage 讀取 */
  State.set('employeeList', Store.read(STORAGE_KEYS.EMPLOYEE_LIST) || {});
  RecentlyDeleted.init();
}

function initApp() {
  // 1. 暴露全局
  exposeGlobals();

  // 1b. E2.3 schema 違規回報 → Toast（data 層零 UI 依賴，由這裡接手顯示）
  if (typeof Schema !== 'undefined') {
    Schema.onViolation(function(collection, errs) {
      Toast.error('資料驗證失敗（' + collection + '）：' + errs.join('；'));
    });
  }

  // 1b-0. Phase 1D / 1.14 寫入保護：Store 回讀核對失敗（已回滾）→ Toast
  if (typeof Store !== 'undefined' && Store.onWriteFail) {
    Store.onWriteFail(function(key, reason) {
      Toast.error('資料寫入失敗（' + reason + '），已回滾舊值：' + key.replace(/^tw1d?_/, ''));
    });
  }

  // 1b-1. Phase 1D / 1.15 衝突可視化：同步偵測衝突 → Toast 提示（操作者可至設定頁審視）
  // v1.9.1：啟動時先清除舊版誤報的假性衝突（鍵序不同被判為衝突的歷史記錄）
  if (typeof Conflicts !== 'undefined') {
    try { Conflicts.pruneFalsePositives(); } catch (e) { console.error('[App] 衝突清理失敗', e); }
  }
  if (typeof EventBus !== 'undefined') {
    EventBus.on(EVENTS.SYNC_CONFLICT, function(info) {
      if (info && typeof Toast !== 'undefined') {
        Toast.warning('偵測到 ' + info.count + ' 筆同步衝突（' + (info.collection || '') + '），請至設定頁查看');
      }
    });
  }

  // 1b-2. Phase 1A 權限寫入拒絕 → Toast（Perm 層零 UI 依賴）
  if (typeof Perm !== 'undefined') {
    Perm.onWriteDenied(function(collection) {
      Toast.error('您的角色無權限修改此資料（' + collection + '），如有需要請聯絡管理員');
    });
  }

  // 1b-3. Phase 1A 權限變更（連線覆核後）→ 重繪導航與當前頁
  EventBus.on(EVENTS.PERMISSIONS_CHANGED, function() {
    if (typeof window !== 'undefined' && typeof window.renderNav === 'function') window.renderNav();
    onPageChange(Router.getCurrent());
  });

  // 1b-4. Phase 1A 登出（含被管理員停用/移除的強制登出）→ 重整回登入畫面
  EventBus.on(EVENTS.AUTH_LOGGED_OUT, function(info) {
    if (info && info.reason) {
      try { alert(info.reason); } catch (e) {}
    }
    window.location.reload();
  });

  // 1c. Phase 1C 備份提醒：逾期未備份 → 啟動時提醒一次（每 24 小時最多一次）
  if (typeof Backup !== 'undefined') {
    try {
      var backupMsg = Backup.checkReminder();
      if (backupMsg) Toast.warning(backupMsg);
    } catch (e) { console.error('[App] 備份提醒檢查失敗', e); }
  }

  // 1d. Phase 1B 審計紀錄：自動埋點（訂閱 EventBus CRUD 事件）+ 本機自動清理（90 天）
  if (typeof AuditLog !== 'undefined') {
    try {
      AuditLog.autoLog();
      AuditLog.prune();
    } catch (e) { console.error('[App] 審計初始化失敗', e); }
  }

  // 1e. Phase 1D：衝突/回收站本機自動清理 + 回收站自動追蹤（訂閱刪除/封存事件）
  if (typeof Conflicts !== 'undefined') {
    try { Conflicts.prune(); } catch (e) { console.error('[App] 衝突清理失敗', e); }
  }
  if (typeof RecycleBin !== 'undefined') {
    try { RecycleBin.autoTrack(); RecycleBin.prune(); }
    catch (e) { console.error('[App] 回收站初始化失敗', e); }
  }

  // 2. 載入本地資料
  loadAllData();

  // 2b. v2.0 港幣現鈔錢包：帳務任何異動 → 錢包流水同步（冪等，涵蓋手動/Bot/衝突解決/回收站還原所有寫入路徑）
  EventBus.on(EVENTS.MTX_CREATED, function(tx) { try { Wallet.syncForTx(tx); } catch (e) { console.error('[Wallet] syncForTx', e); } });
  EventBus.on(EVENTS.MTX_UPDATED, function(tx) { try { Wallet.syncForTx(tx); } catch (e) { console.error('[Wallet] syncForTx', e); } });
  EventBus.on(EVENTS.MTX_DELETED, function(id) { try { Wallet.removeForTx(id); } catch (e) { console.error('[Wallet] removeForTx', e); } });
  EventBus.on(EVENTS.MTX_LOADED, function() { try { Wallet.reconcileAll(); } catch (e) { console.error('[Wallet] reconcileAll', e); } });

  // 2c. v2.1 預支開銷：登錄/編輯/刪除當下同步錢包（冪等）；遠端合併後全量對帳
  EventBus.on(EVENTS.PEXP_CREATED, function(p) { try { Wallet.syncForPend(p); } catch (e) { console.error('[Wallet] syncForPend', e); } });
  EventBus.on(EVENTS.PEXP_UPDATED, function(p) { try { Wallet.syncForPend(p); } catch (e) { console.error('[Wallet] syncForPend', e); } });
  EventBus.on(EVENTS.PEXP_DELETED, function(id) { try { Wallet.removeForPend(id); } catch (e) { console.error('[Wallet] removeForPend', e); } });
  EventBus.on(EVENTS.PENDING_EXPS_LOADED, function() { try { Wallet.reconcilePends(); } catch (e) { console.error('[Wallet] reconcilePends', e); } });

  // 2d. v2.2 港幣借支：借出/回收/編輯當下同步錢包（冪等）；遠端合併後全量對帳
  EventBus.on(EVENTS.LOAN_CREATED, function(l) { try { Wallet.syncForLoan(l); } catch (e) { console.error('[Wallet] syncForLoan', e); } });
  EventBus.on(EVENTS.LOAN_UPDATED, function(l) { try { Wallet.syncForLoan(l); } catch (e) { console.error('[Wallet] syncForLoan', e); } });
  EventBus.on(EVENTS.LOAN_DELETED, function(id) { try { Wallet.removeForLoan(id); } catch (e) { console.error('[Wallet] removeForLoan', e); } });
  EventBus.on(EVENTS.LOANS_LOADED, function() { try { Wallet.reconcileLoans(); } catch (e) { console.error('[Wallet] reconcileLoans', e); } });

  // 3. 键盘快捷键
  Keyboard.init();

  // 4. 初始化 Firebase
  FirebaseSync.init().then(function(db) {
    if (db) {
      console.log('[App] Firebase 已连接');
      Watchers.init();
      // 連線恢復時線上覆核權限（偵測停用/移除/權限變更）
      EventBus.on(EVENTS.CONNECTION_CHANGED, function(connected) {
        if (connected && Auth.getCurrent()) Auth.reverify();
      });
      // 上傳本地資料
      Uploader.syncUploadAll({
        MEMBERS: State.get('members'),
        AGENTS: State.get('agents'),
        SHAREHOLDERS: State.get('shareholders'),
        TRIPS: State.get('trips'),
        MEMBER_TXS: State.get('memberTxs'),
        WALLET_TXS: State.get('walletTxs'),
        PENDING_EXPS: State.get('pendingExps'),
        LOANS: State.get('loans'),
        CATALOG: State.get('catalog'),
        BOOKINGS: State.get('bookings'),
        SUPPLEMENTS: State.get('supplements'),
        SETTINGS: State.get('settings'),
        EXTRA_INCOME: State.get('extraIncome'),
        HOTEL_CONFIG: State.get('hotelConfig'),
        EMPLOYEE_LIST: State.get('employeeList'),
        USERS: State.get('users'),
        AUDIT_LOG: State.get('auditLog'),
      });
    } else {
      console.warn('[App] Firebase 未连接，离线模式');
    }

    // 5. 渲染首页
    OverviewPage.render();
  });

}

function showLogin() {
  var overlay = document.getElementById('login-overlay');
  var setup = document.getElementById('setup-overlay');
  var app = document.getElementById('app');
  if (overlay) overlay.style.display = 'flex';
  if (setup) setup.style.display = 'none';
  if (app) app.style.display = 'none';
}

function showSetup() {
  var overlay = document.getElementById('login-overlay');
  var setup = document.getElementById('setup-overlay');
  var app = document.getElementById('app');
  if (overlay) overlay.style.display = 'none';
  if (setup) setup.style.display = 'flex';
  if (app) app.style.display = 'none';
}

function showApp() {
  var overlay = document.getElementById('login-overlay');
  var setup = document.getElementById('setup-overlay');
  var app = document.getElementById('app');
  if (overlay) overlay.style.display = 'none';
  if (setup) setup.style.display = 'none';
  if (app) app.style.display = '';
  // Phase 1A：依權限繪製導航（renderNav 由 bundle 尾端注入）
  if (typeof window !== 'undefined' && typeof window.renderNav === 'function') window.renderNav();
  initApp();
}

// Phase 1A：啟動分流 — session 還原 → 直接進 App；無 session → 登入畫面或首次設定精靈
function decideEntry() {
  if (Auth.restoreSession()) {
    showApp();
    return;
  }
  Auth.needsSetup().then(function(needSetup) {
    if (needSetup) showSetup();
    else showLogin();
  });
}

async function handleLogin() {
  var emailEl = document.getElementById('login-email');
  var input = document.getElementById('login-pwd');
  var email = emailEl ? emailEl.value.trim() : '';
  var pwd = input ? input.value : '';
  if (!email || !pwd) { Toast.error('請輸入帳號與密碼'); return; }
  var res = await Auth.login(email, pwd);
  if (res && res.ok) {
    showApp();
    if (res.offline) Toast.warning('離線登入：權限為快取版本，連線後自動更新');
  } else {
    Toast.error((res && res.error) || '登入失敗');
    if (input) { input.value = ''; input.focus(); }
    var box = document.querySelector('.login-box');
    if (box) {
      box.classList.add('shake');
      setTimeout(function() { box.classList.remove('shake'); }, 500);
    }
  }
}

// Phase 1A：首次設定精靈 — 建立首位 super_admin
async function handleSetup() {
  var nameEl = document.getElementById('setup-name');
  var emailEl = document.getElementById('setup-email');
  var pwdEl = document.getElementById('setup-pwd');
  var pwd2El = document.getElementById('setup-pwd2');
  var name = nameEl ? nameEl.value.trim() : '';
  var email = emailEl ? emailEl.value.trim() : '';
  var pwd = pwdEl ? pwdEl.value : '';
  var pwd2 = pwd2El ? pwd2El.value : '';
  if (pwd !== pwd2) { Toast.error('兩次輸入的密碼不一致'); return; }
  var btn = document.getElementById('setup-btn');
  if (btn) btn.disabled = true;
  var res;
  try { res = await Auth.setupFirstAdmin(name, email, pwd); }
  finally { if (btn) btn.disabled = false; }
  if (res && res.ok) {
    Toast.success('管理員帳號建立成功');
    showApp();
  } else {
    Toast.error((res && res.error) || '建立失敗');
  }
}

// 啟動（Phase 1A：資料先載入，Firebase 連線後分流 — session 還原 / 登入 / 首次設定）
function _boot() {
  // ?reset=1：清本機 + 強制重新偵測（用於雲端已重置但本機殘留導致流程卡住）
  if (/[?&]reset=1\b/.test(location.href)) {
    try { localStorage.clear(); } catch (e) {}
    // 清掉所有 SW 與所有快取（含舊版 SW 持有的快取），確保 reload 拿到網路最新資源
    if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
      navigator.serviceWorker.getRegistrations().then(function(rs) {
        rs.forEach(function(r) { r.unregister(); });
      });
    }
    if (window.caches && caches.keys) {
      caches.keys().then(function(keys) {
        keys.forEach(function(k) { caches.delete(k); });
      });
    }
    var qs = location.search.replace(/[?&]reset=1\b/, '').replace(/^&/, '?');
    history.replaceState(null, '', location.pathname + (qs || ''));
    // 給 SW / caches 的清空動作一點時間，再 reload（避免 reload 又被舊 SW 接管）
    setTimeout(function() { location.reload(); }, 300);
    return;
  }
  exposeGlobals();
  loadAllData();
  Keyboard.init();
  FirebaseSync.init().then(function(db) {
    if (db && FirebaseSync.isReady()) {
      Watchers.init();
    } else {
      console.warn('[App] Firebase 未连接，离线模式');
    }
    decideEntry();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _boot);
} else {
  _boot();
}



// === APP Module: mobile-crash.js ===
/**
 * mobile-crash.js — E3.3 當機回報
 * window.onerror / unhandledrejection 攔截錯誤 → 寫入 Firebase crashReports/
 * 離線時先入本機佇列（localStorage），連線後自動補傳。
 *
 * 防護特性：
 *   - 同一錯誤 60 秒內去重（避免崩潰迴圈打爆佇列）
 *   - 佇列上限 50 筆（滿了丟最舊，保護 localStorage）
 *   - 上傳失敗自動回佇列，下次連線重試
 *   - 本模組自身任何錯誤絕不拋出（不能再讓當機回報器把 App 弄掛）
 *
 * 依賴：FirebaseSync, EventBus, EVENTS, FB_DATA_ROOT, STORAGE_PREFIX, State
 */

var CrashReporter = (function() {

  var QUEUE_KEY = STORAGE_PREFIX + 'crash_queue'; // dev 建構自動切 tw1d_ 前綴
  var QUEUE_MAX = 50;
  var DEDUP_WINDOW_MS = 60 * 1000;
  var STACK_MAX_CHARS = 4000;

  var _initialized = false;
  var _lastSeen = {};    // 去重: fingerprint → 上次記錄時間
  var _flushTimer = null;
  var _uploading = false;

  // =======================================================================
  // 初始化
  // =======================================================================
  function init() {
    if (_initialized) return;
    _initialized = true;

    window.onerror = function(message, source, lineno, colno, error) {
      _capture('onerror', {
        message: String(message || '未知錯誤'),
        source: source || '',
        line: lineno || 0,
        col: colno || 0,
        stack: (error && error.stack) ? String(error.stack) : '',
      });
      return false; // 不吞掉，維持瀏覽器預設行為（console 仍會顯示）
    };

    window.addEventListener('unhandledrejection', function(ev) {
      var reason = ev && ev.reason;
      _capture('unhandledrejection', {
        message: (reason && reason.message) ? String(reason.message) : String(reason || '未處理的 Promise 拒絕'),
        source: '',
        line: 0,
        col: 0,
        stack: (reason && reason.stack) ? String(reason.stack) : '',
      });
    });

    // 連線恢復 / Firebase 就緒 → 補傳佇列
    if (typeof EventBus !== 'undefined') {
      EventBus.on(EVENTS.CONNECTION_CHANGED, function(connected) {
        if (connected) _scheduleFlush(0);
      });
    }
    if (typeof FirebaseSync !== 'undefined' && FirebaseSync.onReady) {
      FirebaseSync.onReady(function() { _scheduleFlush(0); });
    }

    // 啟動時若已有殘留佇列，延遲補傳（等 Firebase 初始化）
    if (_loadQueue().length > 0) _scheduleFlush(3000);

    console.log('[CrashReporter] 初始化完成, 待傳佇列=' + _loadQueue().length);
  }

  // =======================================================================
  // 錯誤擷取
  // =======================================================================
  function _capture(type, info) {
    try {
      var fp = type + '|' + info.message + '|' + info.source + ':' + info.line;
      var now = Date.now();

      // 去重：同一指紋 60 秒內只記一次
      if (_lastSeen[fp] && (now - _lastSeen[fp]) < DEDUP_WINDOW_MS) return false;
      _lastSeen[fp] = now;

      var report = {
        id: 'c' + now + '_' + Math.floor(Math.random() * 100000),
        ts: now,
        type: type,
        message: info.message,
        source: info.source,
        line: info.line,
        col: info.col,
        stack: info.stack.substring(0, STACK_MAX_CHARS),
        page: (typeof State !== 'undefined' && State.get) ? State.get('currentPage') : '',
        version: (typeof window !== 'undefined' && window.TW_BUILD_VERSION) ? window.TW_BUILD_VERSION : 'unknown',
        platform: (typeof navigator !== 'undefined') ? navigator.userAgent : '',
      };

      var queue = _loadQueue();
      queue.push(report);
      if (queue.length > QUEUE_MAX) queue = queue.slice(queue.length - QUEUE_MAX);
      _saveQueue(queue);

      _scheduleFlush(3000); // 錯誤發生後延遲補傳（連續錯誤可批次）
      return true;
    } catch (e) {
      // 當機回報器自身故障時靜默（不能讓它弄掛 App）
      return false;
    }
  }

  // =======================================================================
  // 補傳（上傳佇列到 Firebase）
  // =======================================================================
  function _scheduleFlush(delayMs) {
    if (_flushTimer) return;
    _flushTimer = setTimeout(function() {
      _flushTimer = null;
      flush();
    }, delayMs);
  }

  function flush() {
    try {
      if (_uploading) return Promise.resolve(false);
      var queue = _loadQueue();
      if (queue.length === 0) return Promise.resolve(true);

      if (typeof FirebaseSync === 'undefined' ||
          !FirebaseSync.isReady || !FirebaseSync.isReady()) {
        return Promise.resolve(false); // 離線 — 留在佇列
      }

      _uploading = true;
      var remaining = queue.slice();
      var uploadedCount = 0;

      // 逐筆上傳（一筆失敗即停，剩下的保留原順序）
      function next() {
        if (remaining.length === 0) return Promise.resolve();
        var report = remaining[0];
        return FirebaseSync.put(FB_DATA_ROOT + '/crashReports/' + report.id, report)
          .then(function() {
            remaining.shift();
            uploadedCount++;
            return next();
          })
          .catch(function(err) {
            console.warn('[CrashReporter] 上傳失敗，' + remaining.length + ' 筆保留佇列', err);
          });
      }

      return next().then(function() {
        _saveQueue(remaining);
        if (uploadedCount > 0) {
          console.log('[CrashReporter] 已上傳 ' + uploadedCount + ' 筆當機報告');
        }
        return remaining.length === 0;
      });
    } catch (e) {
      return Promise.resolve(false);
    } finally {
      _uploading = false;
    }
  }

  // =======================================================================
  // 佇列讀寫
  // =======================================================================
  function _loadQueue() {
    try {
      var raw = localStorage.getItem(QUEUE_KEY);
      if (!raw) return [];
      var arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  }

  function _saveQueue(queue) {
    try { localStorage.setItem(QUEUE_KEY, JSON.stringify(queue)); }
    catch (e) { /* quota 滿等 — 靜默 */ }
  }

  // =======================================================================
  // 對外 API
  // =======================================================================
  return {
    init: init,
    flush: flush,
    queueLength: function() { return _loadQueue().length; },
  };
})();



// === APP Module: mobile-sync.js ===
/**
 * mobile-sync.js — APP 端增強同步層
 * 在原有 Firebase Sync 之上增加：
 *   1. 寫入確認機制（write-acknowledgment）
 *   2. 操作日誌（op-log）用於離線操作的可靠重放
 *   3. 數據完整性校驗（checksum）
 *   4. 衝突偵測與解決
 *   5. 網路狀態感知同步策略
 *
 * 依賴：FirebaseSync, Watchers, Uploader, Store, State, EventBus, EVENTS
 */

var MobileSync = (function() {

  // =======================================================================
  // 內部狀態
  // =======================================================================
  var _opLog = [];           // 離線操作佇列
  var _opLogKey = STORAGE_KEYS.SYNC_OP_LOG;      // dev 建構自動切 tw1d_ 前綴
  var _syncQueue = [];       // 待確認的寫入
  var _syncQueueKey = STORAGE_KEYS.SYNC_QUEUE;   // dev 建構自動切 tw1d_ 前綴
  var _lastChecksum = '';    // 上次成功的數據校驗碼
  var _isOnline = true;
  var _isSyncing = false;
  var _syncListeners = [];

  // =======================================================================
  // 初始化
  // =======================================================================
  function init() {
    // 載入持久化的 op-log 和 sync-queue
    _loadOpLog();
    _loadSyncQueue();

    // 監聽網路狀態
    if (typeof navigator !== 'undefined' && navigator.onLine !== undefined) {
      _isOnline = navigator.onLine;
      window.addEventListener('online', _onOnline);
      window.addEventListener('offline', _onOffline);
    }

    // 如果 Capacitor Network plugin 可用，使用原生網路事件
    if (typeof Capacitor !== 'undefined' && Capacitor.Plugins && Capacitor.Plugins.Network) {
      Capacitor.Plugins.Network.addListener('networkStatusChange', function(status) {
        var wasOnline = _isOnline;
        _isOnline = (status.connected === true);
        if (_isOnline && !wasOnline) {
          _onOnline();
        } else if (!_isOnline && wasOnline) {
          _onOffline();
        }
      });
    }

    // 監聽 Firebase 連接狀態
    if (typeof EventBus !== 'undefined') {
      EventBus.on(EVENTS.CONNECTION_CHANGED, function(connected) {
        _isOnline = connected;
        if (connected) {
          _processOpLog();
          _verifySyncQueue();
        }
      });
    }

    console.log('[MobileSync] 初始化完成, online=' + _isOnline + ', opLog=' + _opLog.length + ', syncQueue=' + _syncQueue.length);
  }

  // =======================================================================
  // 原子寫入操作（帶確認機制）
  //   path:  Firebase 路徑
  //   data:  要寫入的數據
  //   op:    操作類型 'put' | 'patch' | 'remove'
  //   返回 Promise<boolean> 確認是否成功
  // =======================================================================
  function atomicWrite(path, data, op) {
    op = op || 'patch';
    var opId = _genOpId();
    var timestamp = Date.now();

    var entry = {
      opId: opId,
      path: path,
      data: data,
      op: op,
      timestamp: timestamp,
      status: 'pending',
      retries: 0
    };

    // 1. 寫入 op-log（持久化，防止丟失）
    _addToOpLog(entry);

    // 2. 如果在線，立即嘗試寫入
    if (_isOnline && typeof FirebaseSync !== 'undefined' && FirebaseSync.isReady()) {
      return _executeWrite(entry);
    } else {
      console.log('[MobileSync] 離線模式，操作已加入佇列: ' + opId);
      _notifyListeners({ type: 'queued', opId: opId, path: path });
      return Promise.resolve(false); // 尚未確認
    }
  }

  // =======================================================================
  // 執行寫入並等待確認
  // =======================================================================
  function _executeWrite(entry) {
    return new Promise(function(resolve) {
      var writePromise;
      if (entry.op === 'put') {
        writePromise = FirebaseSync.put(entry.path, entry.data);
      } else if (entry.op === 'remove') {
        writePromise = FirebaseSync.remove(entry.path);
      } else {
        writePromise = FirebaseSync.patch(entry.path, entry.data);
      }

      writePromise.then(function() {
        // 寫入成功，從 op-log 移除
        _removeFromOpLog(entry.opId);
        entry.status = 'confirmed';
        _addToSyncQueue(entry); // 保留確認記錄

        // 延遲後驗證
        setTimeout(function() {
          _verifyWrite(entry);
        }, 500);

        _notifyListeners({ type: 'confirmed', opId: entry.opId, path: entry.path });
        resolve(true);
      }).catch(function(err) {
        console.error('[MobileSync] 寫入失敗: ' + entry.opId, err);
        entry.retries = (entry.retries || 0) + 1;
        entry.status = 'failed';
        _updateOpLogEntry(entry);

        if (entry.retries < 5) {
          // 指數退避重試
          var delay = Math.min(1000 * Math.pow(2, entry.retries), 30000);
          setTimeout(function() {
            _executeWrite(entry);
          }, delay);
        }

        _notifyListeners({ type: 'failed', opId: entry.opId, error: err.message });
        resolve(false);
      });
    });
  }

  // =======================================================================
  // 寫入驗證：讀回確認數據一致
  // =======================================================================
  function _verifyWrite(entry) {
    if (typeof FirebaseSync === 'undefined' || !FirebaseSync.isReady()) return;

    FirebaseSync.once(entry.path).then(function(remoteVal) {
      var match = false;
      if (entry.op === 'remove') {
        match = (remoteVal === null);
      } else if (entry.op === 'put') {
        match = JSON.stringify(remoteVal) === JSON.stringify(entry.data);
      } else {
        // patch: 只檢查提供的 key 是否一致
        match = true;
        if (entry.data && typeof entry.data === 'object') {
          for (var k in entry.data) {
            if (remoteVal && remoteVal[k] !== entry.data[k]) {
              match = false;
              break;
            }
          }
        }
      }

      if (match) {
        _removeFromSyncQueue(entry.opId);
        _notifyListeners({ type: 'verified', opId: entry.opId });
      } else {
        console.warn('[MobileSync] 寫入驗證不一致: ' + entry.opId);
        _notifyListeners({ type: 'verify_mismatch', opId: entry.opId });
      }
    }).catch(function(e) {
      console.warn('[MobileSync] 驗證讀取失敗: ' + entry.opId, e);
    });
  }

  // =======================================================================
  // 處理離線 op-log（網路恢復時重放）
  // =======================================================================
  function _processOpLog() {
    if (_isSyncing || _opLog.length === 0) return;
    _isSyncing = true;
    console.log('[MobileSync] 處理離線操作佇列: ' + _opLog.length + ' 筆');

    var batch = _opLog.slice(0, 50); // 每批最多 50 筆
    var promises = batch.map(function(entry) {
      return _executeWrite(entry);
    });

    Promise.all(promises).then(function() {
      _isSyncing = false;
      if (_opLog.length > 0) {
        setTimeout(_processOpLog, 500); // 繼續處理剩餘
      } else {
        _notifyListeners({ type: 'oplog_drained' });
      }
    });
  }

  // =======================================================================
  // 數據完整性校驗（checksum）
  //   對所有本地數據生成 checksum，與遠端比較
  // =======================================================================
  function computeChecksum(data) {
    if (!data) return '0';
    var str = JSON.stringify(data);
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      var char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 轉為 32bit 整數
    }
    return hash.toString(16);
  }

  function verifyDataIntegrity() {
    var dataSets = [
      { name: 'members',      key: STORAGE_KEYS.MEMBERS },
      { name: 'agents',       key: STORAGE_KEYS.AGENTS },
      { name: 'shareholders', key: STORAGE_KEYS.SHAREHOLDERS },
      { name: 'trips',        key: STORAGE_KEYS.TRIPS },
      { name: 'memberTxs',    key: STORAGE_KEYS.MEMBER_TXS },
      { name: 'bookings',     key: STORAGE_KEYS.BOOKINGS },
      { name: 'supplements',  key: STORAGE_KEYS.SUPPLEMENTS },
      { name: 'settings',     key: STORAGE_KEYS.SETTINGS },
      { name: 'extraIncome',  key: STORAGE_KEYS.EXTRA_INCOME },
      { name: 'hotelConfig',  key: STORAGE_KEYS.HOTEL_CONFIG },
    ];

    var results = { local: {}, remote: {}, matches: 0, mismatches: 0, total: 0 };

    dataSets.forEach(function(ds) {
      var localData = Store.readArray(ds.key);
      var localChecksum = computeChecksum(localData);
      results.local[ds.name] = localChecksum;
      results.total++;

      if (typeof FirebaseSync !== 'undefined' && FirebaseSync.isReady()) {
        var pathKey = ds.name.toUpperCase();
        var fbPath = FB_PATH[pathKey];
        if (fbPath) {
          FirebaseSync.once(fbPath).then(function(remoteVal) {
            var remoteArr = remoteVal ? Object.values(remoteVal) : [];
            var remoteChecksum = computeChecksum(remoteArr);
            results.remote[ds.name] = remoteChecksum;

            if (localChecksum === remoteChecksum) {
              results.matches++;
            } else {
              results.mismatches++;
              console.warn('[MobileSync] 數據不一致: ' + ds.name +
                ' (local=' + localChecksum + ', remote=' + remoteChecksum + ')');
              _notifyListeners({
                type: 'data_mismatch',
                dataset: ds.name,
                localChecksum: localChecksum,
                remoteChecksum: remoteChecksum
              });
            }

            if (results.matches + results.mismatches === results.total) {
              _notifyListeners({ type: 'integrity_complete', results: results });
              console.log('[MobileSync] 數據完整性校驗完成:', results);
            }
          }).catch(function(e) {
            console.error('[MobileSync] 校驗讀取失敗: ' + ds.name, e);
          });
        }
      }
    });

    return results;
  }

  // =======================================================================
  // 強制全量同步（從遠端拉取最新數據覆蓋本地）
  // =======================================================================
  function forceFullSync() {
    console.log('[MobileSync] 啟動強制全量同步...');
    _notifyListeners({ type: 'full_sync_start' });

    var syncPaths = [
      { fbKey: 'MEMBERS',       storeKey: STORAGE_KEYS.MEMBERS,       event: EVENTS.MEMBERS_LOADED,       stateKey: 'members' },
      { fbKey: 'AGENTS',        storeKey: STORAGE_KEYS.AGENTS,        event: EVENTS.AGENTS_LOADED,        stateKey: 'agents' },
      { fbKey: 'SHAREHOLDERS',  storeKey: STORAGE_KEYS.SHAREHOLDERS,  event: EVENTS.SHAREHOLDERS_LOADED,  stateKey: 'shareholders' },
      { fbKey: 'TRIPS',         storeKey: STORAGE_KEYS.TRIPS,         event: EVENTS.TRIPS_LOADED,         stateKey: 'trips' },
      { fbKey: 'MEMBER_TXS',    storeKey: STORAGE_KEYS.MEMBER_TXS,    event: EVENTS.MTX_LOADED,           stateKey: 'memberTxs' },
      { fbKey: 'WALLET_TXS',    storeKey: STORAGE_KEYS.WALLET_TXS,    event: EVENTS.WALLET_TXS_LOADED,    stateKey: 'walletTxs' }, // v2.3.4 補齊：錢包流水可由雲端墓碑修復本地
      { fbKey: 'PENDING_EXPS',  storeKey: STORAGE_KEYS.PENDING_EXPS,  event: EVENTS.PENDING_EXPS_LOADED,  stateKey: 'pendingExps' }, // v2.3.4 補齊
      { fbKey: 'LOANS',         storeKey: STORAGE_KEYS.LOANS,         event: EVENTS.LOANS_LOADED,         stateKey: 'loans' }, // v2.3.4 補齊
      { fbKey: 'BOOKINGS',      storeKey: STORAGE_KEYS.BOOKINGS,      event: EVENTS.BOOKINGS_LOADED,      stateKey: 'bookings' },
      { fbKey: 'SUPPLEMENTS',   storeKey: STORAGE_KEYS.SUPPLEMENTS,   event: EVENTS.SYNC_COMPLETE,        stateKey: 'supplements' },
      { fbKey: 'SETTINGS',      storeKey: STORAGE_KEYS.SETTINGS,      event: EVENTS.SETTINGS_LOADED,      stateKey: 'settings' },
      { fbKey: 'EXTRA_INCOME',  storeKey: STORAGE_KEYS.EXTRA_INCOME,  event: EVENTS.SYNC_COMPLETE,        stateKey: 'extraIncome' },
      { fbKey: 'HOTEL_CONFIG',  storeKey: STORAGE_KEYS.HOTEL_CONFIG,  event: EVENTS.HOTEL_CONFIG_LOADED,  stateKey: 'hotelConfig' },
    ];

    var completed = 0;
    syncPaths.forEach(function(cfg) {
      var path = FB_PATH[cfg.fbKey];
      FirebaseSync.once(path).then(function(remoteVal) {
        var remote = remoteVal ? Object.values(remoteVal) : [];
        var local = Store.readArray(cfg.storeKey);
        var merged = mergeArray(local, remote, cfg.stateKey);

        // MEMBER_TXS 重新計算衍生欄位
        if (cfg.fbKey === 'MEMBER_TXS' && typeof calcMemberTx === 'function') {
          merged = merged.map(function(tx) {
            if (!tx || tx._deleted) return tx;
            if (tx.outCode === undefined && tx.backCode === undefined && tx.washCode === undefined) return tx;
            return Object.assign({}, tx, calcMemberTx(tx));
          });
        }

        Store.writeArray(cfg.storeKey, merged);
        State.set(cfg.stateKey, merged);
        EventBus.emit(cfg.event, merged);

        completed++;
        if (completed === syncPaths.length) {
          console.log('[MobileSync] 全量同步完成');
          _notifyListeners({ type: 'full_sync_complete' });
          verifyDataIntegrity();
        }
      }).catch(function(e) {
        console.error('[MobileSync] 全量同步失敗: ' + cfg.fbKey, e);
        completed++;
      });
    });
  }

  // =======================================================================
  // 數據備份與恢復
  // =======================================================================
  function exportBackup() {
    var backup = {
      version: APP.VERSION,
      timestamp: Date.now(),
      data: {}
    };

    Object.keys(STORAGE_KEYS).forEach(function(k) {
      var val = Store.read(STORAGE_KEYS[k]);
      if (val) backup.data[STORAGE_KEYS[k]] = val;
    });

    return JSON.stringify(backup);
  }

  function importBackup(jsonStr) {
    try {
      var backup = JSON.parse(jsonStr);
      if (!backup.data) throw new Error('無效的備份格式');

      Object.keys(backup.data).forEach(function(storeKey) {
        Store.write(storeKey, backup.data[storeKey]);
      });

      // 重新載入數據
      if (typeof loadAllData === 'function') {
        loadAllData();
      }

      // 觸發上傳同步
      if (typeof FirebaseSync !== 'undefined' && FirebaseSync.isReady()) {
        Uploader.syncUploadAll({
          MEMBERS: State.get('members'),
          AGENTS: State.get('agents'),
          SHAREHOLDERS: State.get('shareholders'),
          TRIPS: State.get('trips'),
          MEMBER_TXS: State.get('memberTxs'),
          BOOKINGS: State.get('bookings'),
          SUPPLEMENTS: State.get('supplements'),
          SETTINGS: State.get('settings'),
          EXTRA_INCOME: State.get('extraIncome'),
          HOTEL_CONFIG: State.get('hotelConfig'),
          EMPLOYEE_LIST: State.get('employeeList'),
        });
      }

      return true;
    } catch(e) {
      console.error('[MobileSync] 備份恢復失敗', e);
      return false;
    }
  }

  // =======================================================================
  // op-log 持久化操作
  // =======================================================================
  function _genOpId() {
    return 'op_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  function _loadOpLog() {
    try {
      var raw = localStorage.getItem(_opLogKey);
      _opLog = raw ? JSON.parse(raw) : [];
    } catch(e) {
      _opLog = [];
    }
  }

  function _saveOpLog() {
    try {
      localStorage.setItem(_opLogKey, JSON.stringify(_opLog));
    } catch(e) {
      console.error('[MobileSync] op-log 保存失敗', e);
    }
  }

  function _addToOpLog(entry) {
    _opLog.push(entry);
    _saveOpLog();
  }

  function _removeFromOpLog(opId) {
    _opLog = _opLog.filter(function(e) { return e.opId !== opId; });
    _saveOpLog();
  }

  function _updateOpLogEntry(entry) {
    var idx = _opLog.findIndex(function(e) { return e.opId === entry.opId; });
    if (idx !== -1) {
      _opLog[idx] = entry;
      _saveOpLog();
    }
  }

  function _loadSyncQueue() {
    try {
      var raw = localStorage.getItem(_syncQueueKey);
      _syncQueue = raw ? JSON.parse(raw) : [];
      // 清理超過 7 天的確認記錄
      var cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
      _syncQueue = _syncQueue.filter(function(e) { return e.timestamp > cutoff; });
    } catch(e) {
      _syncQueue = [];
    }
  }

  function _saveSyncQueue() {
    try {
      localStorage.setItem(_syncQueueKey, JSON.stringify(_syncQueue));
    } catch(e) {}
  }

  function _addToSyncQueue(entry) {
    _syncQueue.push(entry);
    if (_syncQueue.length > 500) _syncQueue.shift(); // 限制大小
    _saveSyncQueue();
  }

  function _removeFromSyncQueue(opId) {
    _syncQueue = _syncQueue.filter(function(e) { return e.opId !== opId; });
    _saveSyncQueue();
  }

  function _verifySyncQueue() {
    // 驗證所有待確認的寫入
    _syncQueue.forEach(function(entry) {
      _verifyWrite(entry);
    });
  }

  // =======================================================================
  // 網路事件處理
  // =======================================================================
  function _onOnline() {
    console.log('[MobileSync] 網路恢復，開始同步');
    _isOnline = true;
    _notifyListeners({ type: 'online' });

    // 延遲一下避免網路不穩定
    setTimeout(function() {
      _processOpLog();
      _verifySyncQueue();
      // 觸發全量校驗
      if (typeof FirebaseSync !== 'undefined' && FirebaseSync.isReady()) {
        forceFullSync();
      }
    }, 1000);
  }

  function _onOffline() {
    console.log('[MobileSync] 網路斷開，進入離線模式');
    _isOnline = false;
    _notifyListeners({ type: 'offline' });
  }

  // =======================================================================
  // 監聽器管理
  // =======================================================================
  function onSyncEvent(callback) {
    _syncListeners.push(callback);
    return function() {
      _syncListeners = _syncListeners.filter(function(fn) { return fn !== callback; });
    };
  }

  function _notifyListeners(event) {
    _syncListeners.forEach(function(fn) {
      try { fn(event); } catch(e) { console.error('[MobileSync] listener error', e); }
    });
  }

  // =======================================================================
  // 公開 API
  // =======================================================================
  return {
    init: init,
    atomicWrite: atomicWrite,
    forceFullSync: forceFullSync,
    verifyDataIntegrity: verifyDataIntegrity,
    computeChecksum: computeChecksum,
    exportBackup: exportBackup,
    importBackup: importBackup,
    onSyncEvent: onSyncEvent,
    isOnline: function() { return _isOnline; },
    getOpLogCount: function() { return _opLog.length; },
    getPendingCount: function() { return _syncQueue.length; },
  };
})();



// === APP Module: mobile-native.js ===
/**
 * mobile-native.js — Capacitor 原生功能橋接層
 * 提供 APP 端專用功能：
 *   1. 生物識別登入（指紋/Face ID）
 *   2. 推播通知註冊
 *   3. 網路狀態感知
 *   4. 觸覺回饋（震動）
 *   5. 原生文件分享（PDF 匯出）
 *   6. APP 生命週期管理（背景/前台切換）
 *   7. 安全區域適配（iPhone 劉海/底部安全區）
 */

var NativeBridge = (function() {

  var _isNative = false;
  var _biometricEnabled = false;
  var _pushToken = null;
  var _updatePrompted = false; // #22 同一 session 只提示一次版本更新

  // =======================================================================
  // 初始化
  // =======================================================================
  async function init() {
    _isNative = (typeof Capacitor !== 'undefined' &&
                 Capacitor.isNativePlatform && Capacitor.isNativePlatform());

    console.log('[NativeBridge] 原生環境: ' + _isNative);

    if (_isNative) {
      await _setupStatusBar();
      await _setupSplashScreen();
      await _setupAppLifecycle();
      await _setupNetworkMonitor();
      _setupKeyboard();
      _setupSafeArea();
    }

    // 無論是否原生環境，都初始化 Service Worker（PWA 模式）
    _registerServiceWorker();

    // #22 APP 更新檢查（Firebase appInfo.latestVersion 比對；非同步不阻塞啟動）
    _checkAppUpdate();
  }

  // =======================================================================
  // APP 更新檢查（#22）
  // 管理端在 FB_DATA_ROOT/appInfo 寫入 { latestVersion, apkUrl?, note? }；
  // App 啟動與回前台時比對 APP.VERSION，版本不一致 → Modal 提示。
  //   - 有 apkUrl（APK 更新包）→ 提示前往下載
  //   - 無 apkUrl（PWA / WebView 熱更新）→ 提示重新載入
  // =======================================================================
  function _checkAppUpdate() {
    try {
      if (typeof FirebaseSync === 'undefined' || typeof FB_PATH === 'undefined' ||
          typeof APP === 'undefined' || !FB_PATH.APP_INFO) return;
      if (!FirebaseSync.isReady()) {
        FirebaseSync.onReady(function() { _checkAppUpdate(); });
        return;
      }
      FirebaseSync.once(FB_PATH.APP_INFO).then(function(info) {
        if (!info || !info.latestVersion) return;
        if (info.latestVersion === APP.VERSION || _updatePrompted) return;
        _updatePrompted = true;
        var msg = '已發布新版本 ' + info.latestVersion + '（目前 ' + APP.VERSION + '）。';
        if (info.note) msg += '\n' + info.note;
        if (info.apkUrl) {
          msg += '\n\n是否前往下載更新？';
          Modal.confirm(msg, function() { window.open(info.apkUrl, '_system'); });
        } else {
          msg += '\n\n是否立即重新載入？';
          Modal.confirm(msg, function() { location.reload(); });
        }
      }).catch(function(e) {
        console.warn('[NativeBridge] 更新檢查失敗', e);
      });
    } catch(e) {
      console.warn('[NativeBridge] 更新檢查例外', e);
    }
  }

  // =======================================================================
  // 狀態列
  // =======================================================================
  async function _setupStatusBar() {
    try {
      if (Capacitor.Plugins.StatusBar) {
        await Capacitor.Plugins.StatusBar.setStyle({ style: 'DARK' });
        await Capacitor.Plugins.StatusBar.setBackgroundColor({ color: '#0d1117' });
      }
    } catch(e) {
      console.warn('[NativeBridge] StatusBar 設定失敗', e);
    }
  }

  // =======================================================================
  // 啟動畫面
  // =======================================================================
  async function _setupSplashScreen() {
    try {
      if (Capacitor.Plugins.SplashScreen) {
        // 1.5 秒後自動隱藏
        setTimeout(async function() {
          await Capacitor.Plugins.SplashScreen.hide();
        }, 1500);
      }
    } catch(e) {
      console.warn('[NativeBridge] SplashScreen 設定失敗', e);
    }
  }

  // =======================================================================
  // APP 生命週期
  // =======================================================================
  async function _setupAppLifecycle() {
    try {
      if (Capacitor.Plugins.App) {
        // APP 進入背景
        Capacitor.Plugins.App.addListener('appStateChange', function(state) {
          if (!state.isActive) {
            console.log('[NativeBridge] APP 進入背景');
            // 觸發數據同步
            if (typeof MobileSync !== 'undefined') {
              MobileSync.forceFullSync();
            }
          } else {
            console.log('[NativeBridge] APP 回到前台');
            // 回到前台時，檢查是否需要同步
            if (typeof MobileSync !== 'undefined') {
              MobileSync.forceFullSync();
            }
            // #22 回前台時重新檢查版本更新（同 session 只提示一次）
            _checkAppUpdate();
          }
        });

        // 硬體返回鍵（Android）——三層判定：Modal → 頁面 → 退出
        Capacitor.Plugins.App.addListener('backButton', function() {
          // 第一層：有任何 Modal 開啟 → 關閉 Modal
          if (typeof Modal !== 'undefined' && Modal.isOpen && Modal.isOpen()) {
            Modal.close();
            return;
          }
          // 第二層：非首頁 → 返回首頁（而非退出 APP）
          if (typeof Router !== 'undefined' && Router.getCurrent &&
              Router.getCurrent() !== 'overview') {
            Router.go('overview');
            return;
          }
          // 第三層：已在首頁 → 確認退出（統一走 Modal.confirm，避免原生 confirm 樣式不一致）
          if (document.getElementById('app') &&
              document.getElementById('app').style.display !== 'none') {
            Modal.confirm('確定要退出 APP 嗎？', function() {
              if (Capacitor.Plugins.App) {
                Capacitor.Plugins.App.exitApp();
              }
            });
          }
        });
      }
    } catch(e) {
      console.warn('[NativeBridge] App lifecycle 設定失敗', e);
    }
  }

  // =======================================================================
  // 網路狀態監控
  // =======================================================================
  async function _setupNetworkMonitor() {
    try {
      if (Capacitor.Plugins.Network) {
        var status = await Capacitor.Plugins.Network.getStatus();
        console.log('[NativeBridge] 網路狀態:', status);

        Capacitor.Plugins.Network.addListener('networkStatusChange', function(status) {
          console.log('[NativeBridge] 網路變更:', status);
          if (status.connected) {
            _showToast('網路已恢復', 'success');
          } else {
            _showToast('網路已斷開，進入離線模式', 'warning');
          }
        });
      }
    } catch(e) {
      console.warn('[NativeBridge] Network 監控設定失敗', e);
    }
  }

  // =======================================================================
  // 鍵盤適配
  // =======================================================================
  function _setupKeyboard() {
    try {
      if (Capacitor.Plugins.Keyboard) {
        Capacitor.Plugins.Keyboard.setResizeMode({ mode: 'native' });
      }
    } catch(e) {}
  }

  // =======================================================================
  // 安全區域適配（iPhone 劉海/底部）
  // =======================================================================
  function _setupSafeArea() {
    // viewport meta（含 viewport-fit=cover）已由 index.html 靜態宣告，此處不再重複注入
    // #11 去重：768px 底部導覽版面已由 app.css（D2/D9 精修版：11px label、啟用指示條、
    // 按壓回饋、safe-area 補償）提供，此處只補 app.css 未涵蓋的安全區域與觸控行為規則
    var style = document.createElement('style');
    style.textContent = [
      '.sidebar { padding-top: env(safe-area-inset-top); }',
      '.main-content { padding-bottom: env(safe-area-inset-bottom); }',
      '.topbar { padding-top: env(safe-area-inset-top); }',
      '.login-box { padding-top: env(safe-area-inset-top); padding-bottom: env(safe-area-inset-bottom); }',
      '.toast-container { top: env(safe-area-inset-top); }',
      'body { user-select: none; -webkit-user-select: none; -webkit-tap-highlight-color: transparent; }',
      'input, textarea { user-select: text; -webkit-user-select: text; }'
    ].join('\n');
    document.head.appendChild(style);
  }

  // =======================================================================
  // Service Worker 註冊
  // =======================================================================
  function _registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js')
        .then(function(reg) {
          console.log('[NativeBridge] Service Worker 已註冊', reg.scope);
          // 主動檢查更新（iOS 預設 24h 才查，這裡每次開啟都查）
          reg.update();
          // 新 SW 安裝中 → skipWaiting 已在 SW 內處理，等它 activate
          reg.addEventListener('updatefound', function() {
            var newWorker = reg.installing;
            if (!newWorker) return;
            newWorker.addEventListener('statechange', function() {
              // installed → activating → activated
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // 有舊 controller，代表這是更新 → SW skipWaiting 後觸發 controllerchange
                console.log('[NativeBridge] 偵測到 SW 更新，即將切換');
              }
            });
          });
        })
        .catch(function(err) {
          console.warn('[NativeBridge] Service Worker 註冊失敗', err);
        });
      // 新 SW 接管後自動重載頁面（拿到最新資源）
      var _reloading = false;
      navigator.serviceWorker.addEventListener('controllerchange', function() {
        if (_reloading) return;
        _reloading = true;
        console.log('[NativeBridge] SW controller 已切換，重新載入');
        location.reload();
      });
    }
  }

  // =======================================================================
  // 生物識別登入
  // =======================================================================
  async function checkBiometricAvailability() {
    if (!_isNative || !Capacitor.Plugins.NativeBiometric) {
      return { available: false, reason: '非原生環境或未安裝插件' };
    }
    try {
      var result = await Capacitor.Plugins.NativeBiometric.isAvailable();
      return { available: result.isAvailable, biometryType: result.biometryType };
    } catch(e) {
      return { available: false, reason: e.message };
    }
  }

  async function authenticateWithBiometric() {
    if (!_isNative || !Capacitor.Plugins.NativeBiometric) {
      return false;
    }
    try {
      await Capacitor.Plugins.NativeBiometric.biometricVerify({
        message: '請驗證您的身份以進入台灣版整合系統'
      });
      return true;
    } catch(e) {
      console.warn('[NativeBridge] 生物識別驗證失敗', e);
      return false;
    }
  }

  async function enableBiometricLogin(password) {
    // 儲存加密的密碼到原生 Keychain/Keystore
    if (!_isNative || !Capacitor.Plugins.NativeBiometric) return false;
    try {
      await Capacitor.Plugins.NativeBiometric.setCredentials({
        username: 'tw-admin',
        password: password,
        server: 'com.boying.tw.app'
      });
      _biometricEnabled = true;
      // 在 Preferences 標記已啟用
      if (Capacitor.Plugins.Preferences) {
        await Capacitor.Plugins.Preferences.set({
          key: 'biometric_enabled',
          value: 'true'
        });
      }
      return true;
    } catch(e) {
      console.error('[NativeBridge] 啟用生物識別失敗', e);
      return false;
    }
  }

  async function getBiometricCredentials() {
    if (!_isNative || !Capacitor.Plugins.NativeBiometric) return null;
    try {
      var result = await Capacitor.Plugins.NativeBiometric.getCredentials({
        server: 'com.boying.tw.app'
      });
      return result.password;
    } catch(e) {
      return null;
    }
  }

  // =======================================================================
  // 推播通知
  // =======================================================================
  async function registerPushNotifications() {
    if (!_isNative || !Capacitor.Plugins.PushNotifications) {
      console.log('[NativeBridge] 推播通知僅在原生環境可用');
      return null;
    }

    try {
      // 請求權限
      var permResult = await Capacitor.Plugins.PushNotifications.requestPermissions();
      if (permResult.receive === 'granted') {
        // 註冊
        await Capacitor.Plugins.PushNotifications.register();

        // 監聽註冊成功
        Capacitor.Plugins.PushNotifications.addListener('registration', function(token) {
          _pushToken = token.value;
          console.log('[NativeBridge] 推播註冊成功: ' + token.value);
          // 上傳 token 到 Firebase（可用於 Bot 發送通知）
          if (typeof FirebaseSync !== 'undefined' && FirebaseSync.isReady()) {
            FirebaseSync.patch(FB_PATH.PUSH_TOKENS + '/' + Date.now(), {
              token: token.value,
              platform: Capacitor.getPlatform(),
              registeredAt: Date.now()
            });
          }
        });

        // 監聽通知點擊
        Capacitor.Plugins.PushNotifications.addListener('pushNotificationReceived', function(notification) {
          console.log('[NativeBridge] 收到推播:', notification);
          _showToast(notification.title + ': ' + notification.body, 'info');
        });

        // 監聽通知點擊動作
        Capacitor.Plugins.PushNotifications.addListener('pushNotificationActionPerformed', function(action) {
          console.log('[NativeBridge] 推播點擊:', action);
          var data = action.notification.data;
          if (data && data.page && typeof Router !== 'undefined') {
            Router.go(data.page);
          }
        });

        return _pushToken;
      } else {
        console.warn('[NativeBridge] 推播權限被拒絕');
        return null;
      }
    } catch(e) {
      console.error('[NativeBridge] 推播註冊失敗', e);
      return null;
    }
  }

  // =======================================================================
  // 觸覺回饋
  // =======================================================================
  async function hapticFeedback(style) {
    style = style || 'medium';
    if (_isNative && Capacitor.Plugins.Haptics) {
      try {
        if (style === 'success' || style === 'warning' || style === 'error') {
          await Capacitor.Plugins.Haptics.notification({ type: style.toUpperCase() });
        } else {
          await Capacitor.Plugins.Haptics.impact({ style: style });
        }
      } catch(e) {}
    } else if (navigator.vibrate) {
      navigator.vibrate(style === 'light' ? 10 : style === 'heavy' ? 50 : 30);
    }
  }

  // =======================================================================
  // 原生文件分享（PDF 匯出）
  // =======================================================================
  async function shareFile(filename, base64Data, mimeType) {
    mimeType = mimeType || 'application/pdf';
    if (!_isNative) {
      // Web 環境：下載
      _downloadBlob(filename, base64Data, mimeType);
      return true;
    }

    try {
      if (Capacitor.Plugins.Filesystem && Capacitor.Plugins.Share) {
        // 寫入臨時文件
        var writeResult = await Capacitor.Plugins.Filesystem.writeFile({
          path: filename,
          data: base64Data,
          directory: 'CACHE',
          recursive: true
        });

        // 分享
        await Capacitor.Plugins.Share.share({
          title: filename,
          url: writeResult.uri,
          dialogTitle: '分享文件'
        });
        return true;
      }
    } catch(e) {
      console.error('[NativeBridge] 文件分享失敗', e);
      return false;
    }
  }

  function _downloadBlob(filename, base64Data, mimeType) {
    var byteChars = atob(base64Data);
    var byteNumbers = new Array(byteChars.length);
    for (var i = 0; i < byteChars.length; i++) {
      byteNumbers[i] = byteChars.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: mimeType });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  // =======================================================================
  // 本機通知（離線提醒）
  // =======================================================================
  async function scheduleLocalNotification(title, body, scheduleAt) {
    if (!_isNative || !Capacitor.Plugins.LocalNotifications) {
      console.log('[NativeBridge] 本機通知僅在原生環境可用');
      return;
    }
    try {
      await Capacitor.Plugins.LocalNotifications.schedule({
        notifications: [{
          title: title,
          body: body,
          id: Date.now(),
          schedule: { at: new Date(scheduleAt) },
          sound: 'default',
          smallIcon: 'ic_stat_icon'
        }]
      });
    } catch(e) {
      console.error('[NativeBridge] 本機通知失敗', e);
    }
  }

  // =======================================================================
  // 輔助函數
  // =======================================================================
  function _showToast(msg, type) {
    if (typeof Toast !== 'undefined') {
      if (type === 'success') Toast.success(msg);
      else if (type === 'warning') Toast.warning(msg);
      else if (type === 'error') Toast.error(msg);
      else Toast.info(msg);
    }
  }

  // =======================================================================
  // 公開 API
  // =======================================================================
  return {
    init: init,
    isNative: function() { return _isNative; },
    checkBiometricAvailability: checkBiometricAvailability,
    authenticateWithBiometric: authenticateWithBiometric,
    enableBiometricLogin: enableBiometricLogin,
    getBiometricCredentials: getBiometricCredentials,
    registerPushNotifications: registerPushNotifications,
    hapticFeedback: hapticFeedback,
    shareFile: shareFile,
    scheduleLocalNotification: scheduleLocalNotification,
    getPushToken: function() { return _pushToken; }
  };
})();



// === APP Module: mobile-ui.js ===
/**
 * mobile-ui.js — APP 端同步狀態 UI + 設定頁擴展
 * 在頂部 topbar 顯示同步狀態指示器
 * 在設定頁增加 APP 專屬功能入口
 */

var MobileUI = (function() {

  // =======================================================================
  // 初始化同步狀態指示器
  // =======================================================================
  function init() {
    _createSyncIndicator();
    _bindSyncEvents();
    _extendSettingsPage();
  }

  // =======================================================================
  // 建立頂部同步指示器
  // =======================================================================
  function _createSyncIndicator() {
    var syncStatus = document.getElementById('sync-status');
    if (!syncStatus) {
      syncStatus = document.createElement('div');
      syncStatus.id = 'sync-status';
      var topbar = document.querySelector('.topbar');
      if (topbar) topbar.appendChild(syncStatus);
    }

    syncStatus.innerHTML = _renderSyncIndicator('syncing', '同步中...');
    _updateSyncIndicator('synced', '已同步');
  }

  function _renderSyncIndicator(status, text) {
    // 狀態 → 樣式 class（色彩由 APP CSS 的設計系統 token 控制，無 hardcode 色碼）
    var icons = {
      synced:   '\u2713',
      syncing:  '\u21bb',
      offline:  '\u26a0',
      error:    '\u2717',
      conflict: '\u26a0'
    };
    var icon = icons[status] || icons.synced;

    // v1.8.0 點擊徽章 → 手動重試同步
    return '<span class="sync-badge sync-' + (status || 'synced') + '" style="cursor:pointer;" onclick="window._syncBadgeRetry()" title="點擊重新同步">'
      + '<span class="sync-icon">' + icon + '</span>'
      + '<span class="sync-text">' + text + '</span>'
      + '<span class="sync-count" id="sync-pending-count"></span>'
    + '</span>';
  }

  // v1.8.0 同步徽章點擊 → 強制重新同步
  function _syncBadgeRetry() {
    if (typeof Toast !== 'undefined') Toast.info('重新同步中...');
    if (typeof _resyncAll === 'function') {
      try {
        var p = _resyncAll();
        if (p && p.then) p.then(function() { if (typeof Toast !== 'undefined') Toast.success('同步完成'); });
      } catch (e) { /* 忽略，下方 fallback */ }
    }
  }

  function _updateSyncIndicator(status, text, pendingCount) {
    var syncStatus = document.getElementById('sync-status');
    if (!syncStatus) return;
    syncStatus.innerHTML = _renderSyncIndicator(status, text);

    if (pendingCount !== undefined && pendingCount > 0) {
      var countEl = document.getElementById('sync-pending-count');
      if (countEl) {
        countEl.textContent = pendingCount;
        countEl.style.display = 'inline-block';
      }
    }

    // D14：離線 banner — 離線時全局提示，恢復連線自動收起
    _updateOfflineBanner(status === 'offline' || status === 'error', pendingCount);
  }

  function _updateOfflineBanner(show, pendingCount) {
    var banner = document.getElementById('offline-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'offline-banner';
      banner.className = 'offline-banner';
      document.body.appendChild(banner);
    }
    if (show) {
      banner.innerHTML = '<span class="ob-icon">\u26a0</span>' +
        '<span class="ob-text">離線模式 — 變更會保存在本機，恢復連線後自動同步</span>' +
        (pendingCount > 0 ? '<span class="ob-count">待同步 ' + pendingCount + ' 筆</span>' : '');
      banner.classList.add('show');
    } else {
      banner.classList.remove('show');
    }
  }

  // =======================================================================
  // 綁定同步事件
  // =======================================================================
  function _bindSyncEvents() {
    if (typeof MobileSync === 'undefined') return;

    MobileSync.onSyncEvent(function(event) {
      switch(event.type) {
        case 'online':
          _updateSyncIndicator('syncing', '同步中...');
          break;
        case 'offline':
          _updateSyncIndicator('offline', '離線模式', MobileSync.getOpLogCount());
          break;
        case 'queued':
          _updateSyncIndicator('offline', '離線模式', MobileSync.getOpLogCount());
          break;
        case 'confirmed':
          _updateSyncIndicator('synced', '已同步');
          break;
        case 'verified':
          _updateSyncIndicator('synced', '已驗證');
          break;
        case 'failed':
          _updateSyncIndicator('error', '同步失敗', MobileSync.getOpLogCount());
          break;
        case 'verify_mismatch':
          _updateSyncIndicator('conflict', '數據不一致');
          break;
        case 'data_mismatch':
          _updateSyncIndicator('conflict', '數據差異: ' + event.dataset);
          break;
        case 'full_sync_start':
          _updateSyncIndicator('syncing', '全量同步中...');
          break;
        case 'full_sync_complete':
          _updateSyncIndicator('synced', '同步完成');
          break;
        case 'oplog_drained':
          _updateSyncIndicator('synced', '已同步');
          break;
        case 'integrity_complete':
          if (event.results.mismatches === 0) {
            _updateSyncIndicator('synced', '數據一致');
          } else {
            _updateSyncIndicator('conflict', event.results.mismatches + ' 項不一致');
          }
          break;
      }
    });
  }

  // =======================================================================
  // 擴展設定頁（增加 APP 專屬功能）
  // =======================================================================
  function _extendSettingsPage() {
    if (typeof EventBus === 'undefined') return;

    // 監聽設定頁渲染完成
    document.addEventListener('click', function(e) {
      if (e.target && e.target.id === 'btn-export-backup') {
        _exportBackup();
      }
      if (e.target && e.target.id === 'btn-import-backup') {
        _importBackup();
      }
      if (e.target && e.target.id === 'btn-force-sync') {
        _forceSync();
      }
      if (e.target && e.target.id === 'btn-verify-integrity') {
        _verifyIntegrity();
      }
      if (e.target && e.target.id === 'btn-biometric-setup') {
        _setupBiometric();
      }
      if (e.target && e.target.id === 'btn-push-register') {
        _registerPush();
      }
    });
  }

  function _exportBackup() {
    if (typeof MobileSync === 'undefined') return;
    var json = MobileSync.exportBackup();
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'tw-backup-' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
    if (typeof Toast !== 'undefined') Toast.success('備份已匯出');
  }

  function _importBackup() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(ev) {
        var ok = MobileSync.importBackup(ev.target.result);
        if (ok) {
          if (typeof Toast !== 'undefined') Toast.success('備份已恢復');
        } else {
          if (typeof Toast !== 'undefined') Toast.error('備份恢復失敗');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  function _forceSync() {
    if (typeof MobileSync === 'undefined') return;
    if (typeof Toast !== 'undefined') Toast.info('開始全量同步...');
    MobileSync.forceFullSync();
  }

  function _verifyIntegrity() {
    if (typeof MobileSync === 'undefined') return;
    if (typeof Toast !== 'undefined') Toast.info('正在校驗數據完整性...');
    MobileSync.verifyDataIntegrity();
  }

  async function _setupBiometric() {
    // Phase 1A：個別帳號登入後，原「共用密碼」生物識別快速登入已停用（避免快取無效密碼）
    if (typeof Toast !== 'undefined') Toast.warning('個別帳號版暫不支援生物識別快速登入');
  }

  async function _registerPush() {
    if (typeof NativeBridge === 'undefined') {
      if (typeof Toast !== 'undefined') Toast.warning('推播通知僅在 APP 中可用');
      return;
    }
    var token = await NativeBridge.registerPushNotifications();
    if (token) {
      if (typeof Toast !== 'undefined') Toast.success('推播已註冊');
    } else {
      if (typeof Toast !== 'undefined') Toast.warning('推播註冊失敗');
    }
  }

  // =======================================================================
  // 取得設定頁額外 HTML（供 SettingsPage 調用）
  // =======================================================================
  function getSettingsExtraHTML() {
    return [
      '<div class="settings-section" style="margin-top:20px;">',
      '  <h3 style="color:#e6edf3;margin-bottom:12px;">APP 功能</h3>',

      '  <div class="settings-row" style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #21262d;">',
      '    <div>',
      '      <div style="color:#e6edf3;font-weight:600;">生物識別登入</div>',
      '      <div style="color:#8b949e;font-size:12px;">個別帳號版調整中，暫不開放</div>',
      '    </div>',
      '    <button id="btn-biometric-setup" class="btn btn-secondary" style="padding:6px 16px;border-radius:8px;cursor:pointer;" disabled>啟用</button>',
      '  </div>',

      '  <div class="settings-row" style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #21262d;">',
      '    <div>',
      '      <div style="color:#e6edf3;font-weight:600;">推播通知</div>',
      '      <div style="color:#8b949e;font-size:12px;">接收訂房提醒、帳務通知</div>',
      '    </div>',
      '    <button id="btn-push-register" class="btn btn-secondary" style="padding:6px 16px;border-radius:8px;cursor:pointer;">註冊</button>',
      '  </div>',
      '</div>',

      '<div class="settings-section" style="margin-top:20px;">',
      '  <h3 style="color:#e6edf3;margin-bottom:12px;">數據管理</h3>',

      '  <div class="settings-row" style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #21262d;">',
      '    <div>',
      '      <div style="color:#e6edf3;font-weight:600;">強制全量同步</div>',
      '      <div style="color:#8b949e;font-size:12px;">從雲端拉取最新數據</div>',
      '    </div>',
      '    <button id="btn-force-sync" class="btn btn-primary" style="padding:6px 16px;border-radius:8px;cursor:pointer;">同步</button>',
      '  </div>',

      '  <div class="settings-row" style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #21262d;">',
      '    <div>',
      '      <div style="color:#e6edf3;font-weight:600;">數據完整性校驗</div>',
      '      <div style="color:#8b949e;font-size:12px;">檢查本地與雲端數據是否一致</div>',
      '    </div>',
      '    <button id="btn-verify-integrity" class="btn btn-secondary" style="padding:6px 16px;border-radius:8px;cursor:pointer;">校驗</button>',
      '  </div>',

      '  <div class="settings-row" style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #21262d;">',
      '    <div>',
      '      <div style="color:#e6edf3;font-weight:600;">匯出備份</div>',
      '      <div style="color:#8b949e;font-size:12px;">下載全部數據為 JSON 備份檔</div>',
      '    </div>',
      '    <button id="btn-export-backup" class="btn btn-secondary" style="padding:6px 16px;border-radius:8px;cursor:pointer;">匯出</button>',
      '  </div>',

      '  <div class="settings-row" style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;">',
      '    <div>',
      '      <div style="color:#e6edf3;font-weight:600;">匯入備份</div>',
      '      <div style="color:#8b949e;font-size:12px;">從 JSON 備份檔恢復數據</div>',
      '    </div>',
      '    <button id="btn-import-backup" class="btn btn-secondary" style="padding:6px 16px;border-radius:8px;cursor:pointer;">匯入</button>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  return {
    init: init,
    getSettingsExtraHTML: getSettingsExtraHTML,
    _syncBadgeRetry: _syncBadgeRetry, // v1.8.0 同步徽章點擊重試
  };
})();



// === APP Module: ios-pwa.js ===
/**
 * ios-pwa.js — iOS PWA 極致優化模組
 * 1. iPhone Safari 安裝引導浮層（「加入主畫面」教學）
 * 2. Standalone 模式偵測（已安裝則不再顯示引導）
 * 3. 安全區域（劉海/Home Indicator）適配
 * 4. iOS 專用禁止橡皮筋滾動、點擊高亮優化
 */
var IosPWA = (function() {

  function isIOS() {
    var ua = navigator.userAgent;
    return /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPadOS
  }

  function isStandalone() {
    return window.navigator.standalone === true ||
      window.matchMedia('(display-mode: standalone)').matches ||
      window.matchMedia('(display-mode: fullscreen)').matches;
  }

  function isSafari() {
    var ua = navigator.userAgent;
    return isIOS() && /^((?!CriOS|FxiOS|EdgiOS).)*Safari/.test(ua);
  }

  // ------------------------------------------------------------------
  // 安裝引導浮層
  // ------------------------------------------------------------------
  var DISMISS_KEY = 'tw1_ios_a2hs_dismissed_at';

  function shouldShowGuide() {
    if (!isIOS()) return false;
    if (isStandalone()) return false;
    if (localStorage.getItem(DISMISS_KEY)) {
      // 7 天後可再次提示
      var t = parseInt(localStorage.getItem(DISMISS_KEY), 10);
      if (Date.now() - t < 7 * 24 * 3600 * 1000) return false;
    }
    return true;
  }

  function showInstallGuide() {
    if (!shouldShowGuide()) return;

    var overlay = document.createElement('div');
    overlay.id = 'ios-a2hs-overlay';
    overlay.innerHTML = [
      '<div class="ios-a2hs-card">',
      '  <button class="ios-a2hs-close" aria-label="關閉">&times;</button>',
      '  <div class="ios-a2hs-icon">♠</div>',
      '  <h3>安裝到主畫面</h3>',
      '  <p class="ios-a2hs-desc">安裝後可全螢幕使用、離線操作，體驗與原生 APP 完全相同。</p>',
      '  <div class="ios-a2hs-steps">',
      '    <div class="ios-a2hs-step">',
      '      <span class="step-num">1</span>',
      '      <span>點擊瀏覽器底部的<img src="data:image/svg+xml;base64,' + btoa('<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'19\' height=\'19\' viewBox=\'0 0 20 20\'><rect x=\'2\' y=\'2\' width=\'7\' height=\'7\' rx=\'1.5\' fill=\'#58a6ff\'/><rect x=\'11\' y=\'2\' width=\'7\' height=\'7\' rx=\'1.5\' fill=\'#58a6ff\'/><rect x=\'2\' y=\'11\' width=\'7\' height=\'7\' rx=\'1.5\' fill=\'#58a6ff\'/><rect x=\'11\' y=\'11\' width=\'7\' height=\'7\' rx=\'1.5\' fill=\'#58a6ff\'/></svg>') + '" alt="分享">「分享」按鈕</span>',
      '    </div>',
      '    <div class="ios-a2hs-step">',
      '      <span class="step-num">2</span>',
      '      <span>在選單中找到並點擊「<b>加入主畫面</b>」</span>',
      '    </div>',
      '    <div class="ios-a2hs-step">',
      '      <span class="step-num">3</span>',
      '      <span>點擊右上角「<b>新增</b>」即完成安裝</span>',
      '    </div>',
      '  </div>',
      '  <button class="ios-a2hs-later">暫時不用</button>',
      '</div>'
    ].join('');

    document.body.appendChild(overlay);

    // 動畫進入
    requestAnimationFrame(function() {
      overlay.classList.add('show');
    });

    function close() {
      overlay.classList.remove('show');
      setTimeout(function() {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 300);
    }

    overlay.querySelector('.ios-a2hs-close').onclick = close;
    overlay.querySelector('.ios-a2hs-later').onclick = function() {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
      close();
    };

    // 已安裝成功（下次以 standalone 開啟時）自動清除提醒標記
    if (isStandalone()) {
      localStorage.removeItem(DISMISS_KEY);
    }
  }

  // ------------------------------------------------------------------
  // 安全區域 + iOS 行為優化
  // ------------------------------------------------------------------
  function applySafeArea() {
    var meta = document.createElement('style');
    meta.textContent = [
      '.sidebar { padding-bottom: env(safe-area-inset-bottom); }',
      '.topbar { padding-top: calc(10px + env(safe-area-inset-top)) !important; }',
      '.main-content { padding-bottom: env(safe-area-inset-bottom); }',
      '#toast-container { bottom: calc(20px + env(safe-area-inset-bottom)) !important; }',
      'body { -webkit-tap-highlight-color: transparent; }',
      '.modal-box { max-height: calc(100vh - env(safe-area-inset-top) - 40px); }'
    ].join('\n');
    document.head.appendChild(meta);
  }

  function preventOverscroll() {
    // 已安裝（standalone）時防止整頁橡皮筋滾動，但保留內容區可滾動
    if (!isStandalone()) return;
    document.addEventListener('touchmove', function(e) {
      if (e.target.closest('.main-content') ||
          e.target.closest('.modal-box')) return;
      if (e.cancelable) e.preventDefault();
    }, { passive: false });
  }

  // v1.7.0 下拉刷新
  var _ptrStartY = 0, _ptrPulling = false, _ptrEl = null;
  function setupPullToRefresh() {
    var mc = document.querySelector('.main-content');
    if (!mc) { setTimeout(setupPullToRefresh, 500); return; }
    _ptrEl = document.createElement('div');
    _ptrEl.id = 'ptr-indicator';
    _ptrEl.innerHTML = '<span class="ptr-icon">↓</span><span class="ptr-text">下拉刷新</span>';
    mc.parentElement.insertBefore(_ptrEl, mc);

    mc.addEventListener('touchstart', function(e) {
      if (mc.scrollTop === 0 && e.touches.length === 1) {
        _ptrStartY = e.touches[0].clientY;
        _ptrPulling = true;
      }
    }, { passive: true });

    mc.addEventListener('touchmove', function(e) {
      if (!_ptrPulling) return;
      var dy = e.touches[0].clientY - _ptrStartY;
      if (dy > 0 && mc.scrollTop === 0) {
        if (dy > 10 && _ptrEl) {
          _ptrEl.style.opacity = Math.min(dy / 70, 1);
          _ptrEl.style.transform = 'translateY(' + Math.min(dy * 0.5, 50) + 'px)';
          if (dy > 70) {
            _ptrEl.querySelector('.ptr-icon').textContent = '⟳';
            _ptrEl.querySelector('.ptr-text').textContent = '放開刷新';
          } else {
            _ptrEl.querySelector('.ptr-icon').textContent = '↓';
            _ptrEl.querySelector('.ptr-text').textContent = '下拉刷新';
          }
        }
      }
    }, { passive: true });

    mc.addEventListener('touchend', function(e) {
      if (!_ptrPulling) return;
      _ptrPulling = false;
      var dy = (e.changedTouches[0] ? e.changedTouches[0].clientY : 0) - _ptrStartY;
      if (dy > 70 && mc.scrollTop === 0) {
        if (_ptrEl) {
          _ptrEl.style.transform = 'translateY(50px)';
          _ptrEl.querySelector('.ptr-icon').textContent = '⟳';
          _ptrEl.querySelector('.ptr-text').textContent = '刷新中...';
        }
        if (typeof _resyncAll === 'function') {
          _resyncAll().then(function() {
            setTimeout(_ptrReset, 800);
          }).catch(function() {
            setTimeout(_ptrReset, 800);
          });
        } else {
          setTimeout(_ptrReset, 500);
        }
      } else {
        _ptrReset();
      }
    }, { passive: true });
  }
  function _ptrReset() {
    if (_ptrEl) {
      _ptrEl.style.transform = '';
      _ptrEl.style.opacity = '';
      _ptrEl.querySelector('.ptr-icon').textContent = '↓';
      _ptrEl.querySelector('.ptr-text').textContent = '下拉刷新';
    }
  }

  // v1.8.0 全域手勢：點外部關閉會員下拉 + 左邊緣滑動返回
  function setupGlobalGestures() {
    if (setupGlobalGestures._bound) return;
    setupGlobalGestures._bound = true;

    // 點擊 .member-picker 以外的地方 → 關閉所有會員下拉
    document.addEventListener('click', function(e) {
      if (!e.target || !e.target.closest) return;
      if (e.target.closest('.member-picker')) return;
      document.querySelectorAll('.member-picker-dropdown').forEach(function(d) {
        d.style.display = 'none';
      });
    });

    // 左邊緣往右滑：關閉彈窗（優先）或返回上一頁
    var edgeX = 0, edgeY = 0, tracking = false;
    document.addEventListener('touchstart', function(e) {
      if (e.touches.length !== 1) { tracking = false; return; }
      var t = e.touches[0];
      if (t.clientX <= 28) { edgeX = t.clientX; edgeY = t.clientY; tracking = true; }
      else tracking = false;
    }, { passive: true });
    document.addEventListener('touchend', function(e) {
      if (!tracking) return;
      tracking = false;
      var t = e.changedTouches[0];
      if (!t) return;
      var dx = t.clientX - edgeX;
      var dy = Math.abs(t.clientY - edgeY);
      if (dx > 70 && dy < 60) {
        if (typeof Modal !== 'undefined' && Modal.isOpen()) Modal.close();
        else if (typeof Router !== 'undefined') Router.back();
      }
    }, { passive: true });
  }

  function init() {
    applySafeArea();
    preventOverscroll();
    setupPullToRefresh();
    setupGlobalGestures();

    // 登入畫面就顯示引導（延遲 1 秒避免遮擋啟動）
    setTimeout(showInstallGuide, 1000);

    // Android / Chrome 版本：攔截 beforeinstallprompt 用自訂按鈕安裝
    var deferredPrompt = null;
    window.addEventListener('beforeinstallprompt', function(e) {
      e.preventDefault();
      deferredPrompt = e;
      // 在設定頁加入安裝按鈕（由 mobile-ui 渲染）
      window.__twInstallPrompt = deferredPrompt;
    });

    console.log('[IosPWA] 已初始化 (iOS: ' + isIOS() + ', standalone: ' + isStandalone() + ')');
  }

  return {
    init: init,
    isIOS: isIOS,
    isStandalone: isStandalone,
    showInstallGuide: showInstallGuide
  };
})();



// === APP Bootstrap ===
(function() {
  // 等待 DOM 就緒後初始化 APP 功能
  function initAppModules() {
    if (typeof CrashReporter !== "undefined") CrashReporter.init();
    if (typeof MobileSync !== "undefined") MobileSync.init();
    if (typeof NativeBridge !== "undefined") NativeBridge.init();
    if (typeof MobileUI !== "undefined") MobileUI.init();
    if (typeof IosPWA !== "undefined") IosPWA.init();
    
    // 覆寫 handleLogin：Phase 1A 個別帳號登入（推播註冊 + 觸覺回饋）
    var _origHandleLogin = window.handleLogin;
    window.handleLogin = async function() {
      var emailEl = document.getElementById("login-email");
      var input = document.getElementById("login-pwd");
      var email = emailEl ? emailEl.value.trim() : "";
      var pwd = input ? input.value : "";
      if (!email || !pwd) { Toast.error("請輸入帳號與密碼"); return; }
      var btn = document.getElementById("login-btn");
      if (btn) { btn.disabled = true; btn.textContent = "登 入 中 ..."; btn.classList.add("btn-loading"); }
      var res;
      try { res = await Auth.login(email, pwd); }
      finally { if (btn) { btn.disabled = false; btn.textContent = "進 入 系 統"; btn.classList.remove("btn-loading"); } }
      if (res && res.ok) {
        showApp();
        if (typeof NativeBridge !== "undefined") {
          if (NativeBridge.isNative()) NativeBridge.registerPushNotifications();
          NativeBridge.hapticFeedback("success");
        }
        if (res.offline) Toast.warning("離線登入：權限為快取版本，連線後自動更新");
      } else {
        Toast.error((res && res.error) || "登入失敗");
        if (input) { input.value = ""; input.focus(); }
        var box = document.querySelector(".login-box");
        if (box) {
          box.classList.add("shake");
          setTimeout(function() { box.classList.remove("shake"); }, 500);
        }
        if (typeof NativeBridge !== "undefined") NativeBridge.hapticFeedback("error");
      }
    };
  }
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAppModules);
  } else {
    initAppModules();
  }
})();
// === Nav Init ===
function renderNav(){var nav=document.getElementById("nav-list");if(!nav)return;nav.innerHTML="";PAGES.forEach(function(p){if(typeof Perm!=="undefined"&&Perm.hasSession()&&!Perm.can(p.name,"read"))return;var li=document.createElement("li");li.className="nav-item";li.setAttribute("data-page",p.name);var ic=(typeof Icons!=="undefined")?Icons.get(p.name,22):"";if(!ic)ic=p.icon;li.innerHTML='<span class="nav-icon">'+ic+'</span><span class="nav-label">'+p.label+'</span>';li.onclick=function(){Router.go(p.name);document.getElementById("topbar-title").textContent=p.label;};nav.appendChild(li);});renderMobileTabs();}

// ============================================================================
// v1.4.0 手機 App 式底部標籤列（4 主功能 + 更多選單，有圖示也有文字）
// ============================================================================
var MOBILE_TABS = ['overview', 'pending', 'member', 'wallet', 'room'];
var MOBILE_TAB_DESC = {
  overview:    '今日營運重點一覽',
  pending:     '查看尚未結帳的客人',
  member:      '會員積分與帳務作業',
  wallet:      '港幣現鈔餘額與進出流水', // v2.0 港幣現鈔錢包
  room:        '房間狀態與排房',
  shareholder: '股東佔比與分潤計算',
  membersMgmt: '員工帳號與權限管理',
  history:     '查詢歷史交易紀錄',
  reports:     '匯出各式營運報表',
  settings:    '系統與帳號設定'
};

function _pageIcon(name, size) {
  var p = PAGES.find(function(x){ return x.name === name; });
  var ic = (typeof Icons !== 'undefined') ? Icons.get(name, size) : '';
  if (!ic && p) ic = p.icon;
  return ic;
}

function renderMobileTabs() {
  if (document.getElementById('app-tabbar')) return; // 已建過
  var appEl = document.getElementById('app');
  if (!appEl) return;

  var visible = function(name) {
    return !(typeof Perm !== 'undefined' && Perm.hasSession() && !Perm.can(name, 'read'));
  };

  var bar = document.createElement('div');
  bar.id = 'app-tabbar';

  MOBILE_TABS.forEach(function(name) {
    var p = PAGES.find(function(x){ return x.name === name; });
    if (!p || !visible(name)) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'nav-item tab-btn';
    b.setAttribute('data-page', name);
    b.innerHTML = '<span class="nav-icon">' + _pageIcon(name, 26) + '</span>' +
                  '<span class="nav-label">' + p.label + '</span>';
    b.onclick = function() {
      Router.go(name);
      document.getElementById('topbar-title').textContent = p.label;
    };
    bar.appendChild(b);
  });

  // 「更多」按鈕
  var more = document.createElement('button');
  more.type = 'button';
  more.className = 'nav-item tab-btn';
  more.setAttribute('data-page', '__more');
  more.innerHTML = '<span class="nav-icon">' + Icons.get('menu', 26) + '</span>' +
                   '<span class="nav-label">更多</span>';
  more.onclick = function() { openMoreSheet(); };
  bar.appendChild(more);

  appEl.appendChild(bar);

  // 初始高亮目前頁面
  var cur = Router.getCurrent();
  var el = bar.querySelector('[data-page="' + cur + '"]');
  if (el) el.classList.add('active');
}

function openMoreSheet() {
  var existing = document.getElementById('more-sheet');
  if (existing) { existing.remove(); return; }

  var visible = function(name) {
    return !(typeof Perm !== 'undefined' && Perm.hasSession() && !Perm.can(name, 'read'));
  };

  var rows = '';
  PAGES.forEach(function(p) {
    if (MOBILE_TABS.indexOf(p.name) >= 0) return; // 主標籤已在底列
    if (!visible(p.name)) return;
    rows += '<button class="more-row" data-page="' + p.name + '">' +
              '<span class="more-ic">' + _pageIcon(p.name, 24) + '</span>' +
              '<span class="more-tx"><b>' + p.label + '</b>' +
              '<small>' + (MOBILE_TAB_DESC[p.name] || '') + '</small></span>' +
              '<span class="more-ar">&#8250;</span>' +
            '</button>';
  });

  var s = document.createElement('div');
  s.id = 'more-sheet';
  s.innerHTML =
    '<div class="more-mask" id="more-mask"></div>' +
    '<div class="more-panel">' +
      '<div class="more-grip"></div>' +
      '<div class="more-head">全部功能</div>' +
      rows +
    '</div>';
  document.body.appendChild(s);

  document.getElementById('more-mask').onclick = function() { closeMoreSheet(); };
  s.querySelectorAll('.more-row').forEach(function(r) {
    r.onclick = function() {
      var name = r.getAttribute('data-page');
      var p = PAGES.find(function(x){ return x.name === name; });
      closeMoreSheet();
      Router.go(name);
      document.getElementById('topbar-title').textContent = p ? p.label : name;
    };
  });
}

function closeMoreSheet() {
  var s = document.getElementById('more-sheet');
  if (s) s.remove();
}

/* ==========================================================================
   v1.6.0 手機操作體驗優化 — 共用工具
   ========================================================================== */
// 是否手機視角（寬表格 ↔ 卡片式切換判斷）
function isMobileView() {
  return !!(window.matchMedia && window.matchMedia('(max-width: 768px)').matches);
}

// 最近使用會員（帳務頁快速過濾用）
var RecentMembers = (function() {
  var KEY = 'recentMemberIds_v1';
  function getList() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(v) ? v : [];
    } catch (e) { return []; }
  }
  function push(memberId) {
    if (!memberId) return;
    var list = getList().filter(function(id) { return id !== memberId; });
    list.unshift(memberId);
    try { localStorage.setItem(KEY, JSON.stringify(list.slice(0, 8))); } catch (e) {}
  }
  return { getList: getList, push: push };
})();

// 本機日期 YYYY-MM-DD（供表單預設值用）
function localYmd(offsetDays) {
  var d = new Date();
  d.setDate(d.getDate() + (offsetDays || 0));
  var mm = String(d.getMonth() + 1).padStart(2, '0');
  var dd = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + mm + '-' + dd;
}
