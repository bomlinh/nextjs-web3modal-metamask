const PAGE_ROUTES = {
    AUTH: {
        LOGIN: '/login',
        FORGOT_PASSWORD: '/forgot-password',
    },
    USERS: {
        USER_LOOKUP: '/users/lookup',
    },
    MY_OFFICE: {
        MAIN: '/myoffice',
        DASHBOARD: '/myoffice/dashboard',
        TRANSFER: '/myoffice/transfer',
        PURCHASE: '/myoffice/purchase',
        RECOMMENDATION: '/myoffice/recommened',
        INCENTIVES: '/myoffice/incentives',
        APPLICATION: '/myoffice/application',
        LIST: '/myoffice/list',
        MY_INFO: '/myoffice/my_info',
        LOGIN: '/myoffice/login',
        LOGIN_FEEDBACK: '/join_id',
        JOIN: '/myoffice/join_us',
        FIND_ID: '/myoffice/find_id',
        FIND_PASS: '/myoffice/find_password',
    },
    MAIN: {
        MAIN_PAGE: '/main',
        REGISTRATION: '/joinform',
        DETAIL_PAGE: '/detailpage',

    },
    INTRO: {
        COMPANY_INTRO: '/intro',
        POLICY: '/policy',
        PROCESSING_POLICY: '/processing_policy',
    },

    NOTICE: {
        NOTICE_BOARD: '/notice',
    },

    ALL: {
        ALL_ITEM: '/allItem',
    },

    POPULAR: {
        POPULAR_ITEM: '/popular',
    },

    EVENT: {
        EVENT_ITEM: '/event',
    },
    NEW: {
        NEW_ITEM: '/new_item',
    },

    LOGOUT: {
        LOG_OUT: '/',
    },
    MY_PAGE: {
        MYPAGE_MAIN: '/my_page',
        JOIN_INFO: '/my_page/joininfo',
        ORDER_LIST: '/my_page/orderlist',
        CHECKED: '/my_page/checked',
        SHOP_INQUIRY: '/my_page/inquiry',
        INQUIRY_LIST: '/my_page/inquiry_list',
        EXCHANGE_LIST: '/my_page/exchange_list',
        COUPON: '/my_page/coupon',
        MODIFY: '/my_page/modify_info',
        WITHDRAWAL: '/my_page/withdrawal_member',

        ONGOING: '/my_page/ongoing',
        COMPLETED: '/my_page/completed',
        CANCEELED: '/my_page/cancelled',
    },

    CART: {
        SHOP_CART: '/cart',
    },
    INQUIRY: {
        SHOP_INQUIRY: '/my_page/inquiry',
    },

    CUSTOMER: {
        CUSTOMER_CENTER: '/customer_center',
        GUIDE: '/customer_center/guide',
        INQUIRY: '/customer_center/associate_inquiry',
        ASKED: '/customer_center/asked',
        EVENT: '/customer_center/event_regis',
        GALLERY: '/customer_center/gallery',
        NEWS: '/customer_center/news',
        ANSWER: '/customer_center/answer',
        APPLICATION: '/customer_center/applications',
        WRITING: '/customer_center/writing',

    },
}

let domain = process.env.NEXT_PUBLIC_API_URL_DEV

// if (typeof window !== 'undefined') {
//     if (process.env.NODE_ENV == 'production' && window.location.origin !== 'https://dev.rudemy.org') {
//         domain = process.env.NEXT_PUBLIC_API_URL
//     }
// }

export const PREVIEW_IMAGE = `${domain}api/v1/upload`
export default PAGE_ROUTES
