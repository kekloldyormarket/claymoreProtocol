"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMarketplaceSdk = exports.MarketplaceSdkProvider = exports.MarketplaceSdkProviderRaw = exports.MarketplaceSdkContext = void 0;
const marketplace_sdk_1 = require("@strata-foundation/marketplace-sdk");
const react_1 = require("@strata-foundation/react");
const react_2 = __importStar(require("react"));
const react_async_hook_1 = require("react-async-hook");
exports.MarketplaceSdkContext = react_2.default.createContext({
    loading: true,
});
function tryProm(prom) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield prom;
        }
        catch (e) {
            console.error(e);
        }
        return undefined;
    });
}
function getSdk(provider) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!provider) {
            return undefined;
        }
        return tryProm(marketplace_sdk_1.MarketplaceSdk.init(provider));
    });
}
const MarketplaceSdkProviderRaw = ({ children }) => {
    const { provider } = (0, react_1.useProvider)();
    const { result, loading, error } = (0, react_async_hook_1.useAsync)(getSdk, [provider]);
    const sdks = (0, react_2.useMemo)(() => ({
        marketplaceSdk: result,
        error,
        loading,
    }), [result, loading, error]);
    return (react_2.default.createElement(exports.MarketplaceSdkContext.Provider, { value: sdks }, children));
};
exports.MarketplaceSdkProviderRaw = MarketplaceSdkProviderRaw;
const MarketplaceSdkProvider = ({ children }) => {
    return (react_2.default.createElement(exports.MarketplaceSdkProviderRaw, null, children));
};
exports.MarketplaceSdkProvider = MarketplaceSdkProvider;
const useMarketplaceSdk = () => {
    return (0, react_2.useContext)(exports.MarketplaceSdkContext);
};
exports.useMarketplaceSdk = useMarketplaceSdk;
//# sourceMappingURL=marketplaceSdkContext.js.map