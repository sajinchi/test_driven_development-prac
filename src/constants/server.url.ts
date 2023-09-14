export const BASE_URL = 'https://backend.facegen.ai/api';


// Authentication urls
export const AUTH_LOGIN_URL = '/jwt/create/';

export const AUTH_FORGOT_PASSWORD_URL = '/users/reset_password/';

export const AUTH_RESET_PASSWORD_URL = '/users/reset_password_confirm/' ;

export const AUTH_CREATE_NEW_ACCOUNT_URL = '/users/' ;

export const AUTH_REFRESH_URL = '/jwt/refresh/' ;



// Product urls

export const PRODUCT_GET_URL = '/products/';

export const PRODUCT_CREATE_URL = '/products/';

export const PRODUCT_DELETE_URL = '/products/';

export const PRODUCT_UPDATE_URL = '/products/';

//user urls

export const USER_ME_GET_URL = '/users/me/';

export const USER_GETSINGLE_URL = '/users/';

export const USER_GET_URL = '/users/';

export const USER_UPDATE_ME_URL = '/users/me/';

// invoices urls

export const INVOICE_GET_URL = '/invoices/';

export const INVOICE_DELETE_URL = '/invoices/';

export const INVOICE_DOWNLOAD_URL = '/invoices/';

// packages urls
export const PACKAGE_CREATE_URL = '/packages/';

export const PACKAGE_GET_URL = '/packages/';

export const PACKAGE_UPDATE_URL = '/packages/';

export const PACKAGE_DELETE_URL = '/packages/';


// subscription urls
export const SUBSCRIPTION_GET_URL = '/subscription/';

export const SUBSCRIPTION_CREATE_URL = '/subscription/';


//payment urls
export const PAYMENT_GET_URL = '/paymentTypes';

export const PAYMENT_GETSINGLE_URL = '/paymentTypes';

export const PAYMENT_DELETE_URL = '/paymentTypes';

//purchase urls
export const PURCHASE_URL = '/purchase/';