// ----------------------------------------------------------------------

export const ASSETS_API = process.env.NEXT_PUBLIC_ASSETS_API || "";

export const HOST_API = process.env.NEXT_PUBLIC_HOST_API || "";

export const MAPBOX_API = process.env.NEXT_PUBLIC_MAPBOX_API || "";

// ----------------------------------------------------------------------

export const FIREBASE_API = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// ----------------------------------------------------------------------

export const AUTH0_API = {
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  callbackUrl: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL,
};

// ----------------------------------------------------------------------

export const SUPABASE_API = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
};

// ----------------------------------------------------------------------

export const SENTRY_API = {
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
};

// ----------------------------------------------------------------------

export const GOOGLE_ANALYTICS_API = {
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
};

// ----------------------------------------------------------------------

export const GOOGLE_MAPS_API = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
};

// ----------------------------------------------------------------------

export const GOOGLE_SIGN_UP = {
  clientId: process.env.NEXT_PUBLIC_GOOGLE_SIGN_UP_CLIENT_ID,
};

// ----------------------------------------------------------------------

export const CHAT_API = {
  accessToken: process.env.NEXT_PUBLIC_CHAT_API_ACCESS_TOKEN,
};

// ----------------------------------------------------------------------

export const STRIPE_API = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
};

// ----------------------------------------------------------------------

export const AMPLITUDE_API = {
  apiKey: process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY,
};

// ----------------------------------------------------------------------

export const MIXPANEL_API = {
  projectToken: process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN,
};

// ----------------------------------------------------------------------

export const ZENDESK_API = {
  clientId: process.env.NEXT_PUBLIC_ZENDESK_CLIENT_ID,
};

// ----------------------------------------------------------------------

export const FEATURE_FLAG_API = {
  endpoint: process.env.NEXT_PUBLIC_FEATURE_FLAG_ENDPOINT,
};

// ----------------------------------------------------------------------

export const CRISP_API = {
  websiteId: process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID,
};

// ----------------------------------------------------------------------

export const POSTHOG_API = {
  projectApiKey: process.env.NEXT_PUBLIC_POSTHOG_PROJECT_API_KEY,
  endpoint: process.env.NEXT_PUBLIC_POSTHOG_ENDPOINT,
};

// ----------------------------------------------------------------------

export const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

// ----------------------------------------------------------------------

export const PATH_AFTER_LOGIN = "/dashboard";

export const PATH_AFTER_REGISTER = "/auth/verify";

export const PATH_BEFORE_LOGIN = "/auth/login";

export const PATH_AFTER_LOGOUT = "/auth/login";

export const PATH_DASHBOARD = "/dashboard";

export const PATH_DOCS = "https://docs-minimals.vercel.app/introduction";

export const PATH_GITHUB = "https://github.com/ahimsayz/minimals";

export const PATH_MINIMAL_ON_STORE =
  "https://mui.com/store/items/minimal-dashboard/";

export const PATH_FIGMA_PREVIEW = "https://www.figma.com/file/...";

// ----------------------------------------------------------------------

export const HEADER = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 88,
  H_DASHBOARD_DESKTOP: 92,
  H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
};

export const NAV = {
  W_BASE: 260,
  W_DASHBOARD: 280,
  W_DASHBOARD_MINI: 88,
  //
  H_DASHBOARD_ITEM: 48,
  H_DASHBOARD_ITEM_SUB: 36,
  //
  H_DASHBOARD_HORIZONTAL_ITEM: 32,
};

export const ICON = {
  NAV_ITEM: 24,
  NAV_ITEM_HORIZONTAL: 22,
  NAV_ITEM_MINI: 22,
};
