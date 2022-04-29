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
exports.TwitterLink = void 0;
const react_1 = require("@chakra-ui/react");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_2 = require("@strata-foundation/react");
const spl_utils_1 = require("@strata-foundation/spl-utils");
const useLinkTwitter_1 = require("../hooks/useLinkTwitter");
const react_3 = __importStar(require("react"));
const react_async_hook_1 = require("react-async-hook");
const fa_1 = require("react-icons/fa");
const constants_1 = require("../constants");
const link = (publicKey, state, code, ownerTwitterHandle, provider) => __awaiter(void 0, void 0, void 0, function* () {
    if (!ownerTwitterHandle) {
        if (state == localStorage.getItem("state") && provider && publicKey) {
            yield (0, spl_utils_1.executeRemoteTxn)(provider, constants_1.WUMBO_IDENTITY_SERVICE_URL + "/twitter/oauth", {
                pubkey: publicKey.toBase58(),
                redirectUri: localStorage.getItem("redirectUri"),
                code,
                state,
            });
            localStorage.removeItem("state");
            localStorage.removeItem("redirectUri");
            return true;
        }
    }
});
const TwitterLink = () => {
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const [code, setCode] = (0, react_2.useQueryString)("code", "");
    const { provider, awaitingApproval } = (0, react_2.useProvider)();
    const [state, setState] = (0, react_2.useQueryString)("state", "");
    const { nameString: ownerTwitterHandle, error: reverseTwitterError } = (0, react_2.useReverseName)(publicKey || undefined, react_2.WUMBO_TWITTER_VERIFIER, react_2.WUMBO_TWITTER_TLD);
    const { handleErrors } = (0, react_2.useErrorHandler)();
    const { execute } = (0, useLinkTwitter_1.useLinkTwitter)();
    const { loading: linkLoading, error: linkError, result, } = (0, react_async_hook_1.useAsync)(link, [publicKey, state, code, ownerTwitterHandle, provider]);
    handleErrors(reverseTwitterError, linkError);
    (0, react_3.useEffect)(() => {
        if (result) {
            setCode("");
            setState("");
        }
    }, [result, setCode, setState]);
    if (publicKey) {
        return (react_3.default.createElement(react_1.Button, { colorScheme: "twitter", isDisabled: !!ownerTwitterHandle, leftIcon: react_3.default.createElement(react_1.Icon, { as: fa_1.FaTwitter }), variant: ownerTwitterHandle ? "ghost" : "outline", onClick: execute, isLoading: linkLoading, loadingText: awaitingApproval ? "Awaiting Approval" : "Linking" }, ownerTwitterHandle ? ownerTwitterHandle : "Link Wallet"));
    }
    return null;
};
exports.TwitterLink = TwitterLink;
//# sourceMappingURL=TwitterLink.js.map