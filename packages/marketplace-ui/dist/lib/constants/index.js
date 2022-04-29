"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_PRODUCTION = exports.GA_TRACKING_ID = exports.WUMBO_IDENTITY_SERVICE_URL = exports.SITE_URL = exports.NFT_STORAGE_API_KEY = exports.SOLANA_URL = void 0;
exports.SOLANA_URL = process.env.NEXT_PUBLIC_SOLANA_URL || "https://solana--mainnet-beta.datahub.figment.io/apikey/24c64e276fc5db6ff73da2f59bac40f2";
exports.NFT_STORAGE_API_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY;
exports.SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";
exports.WUMBO_IDENTITY_SERVICE_URL = process.env.NEXT_PUBLIC_WUMBO_IDENTITY_SERVICE_URL || "http://localhost:8082";
exports.GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "G-L4QLBX3394";
exports.IS_PRODUCTION = process.env.NODE_ENV === "production";
//# sourceMappingURL=index.js.map