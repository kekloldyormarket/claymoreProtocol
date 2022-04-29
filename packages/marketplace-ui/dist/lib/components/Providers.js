"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = void 0;
const wallet_adapter_react_ui_1 = require("@solana/wallet-adapter-react-ui");
const react_1 = require("@strata-foundation/react");
const ThemeProvider_1 = require("./ThemeProvider");
const marketplaceSdkContext_1 = require("../contexts/marketplaceSdkContext");
const react_2 = __importDefault(require("react"));
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const Wallet_1 = require("./Wallet");
const client_1 = require("@apollo/client");
const client = new client_1.ApolloClient({
    uri: "https://graph.holaplex.com/v1",
    cache: new client_1.InMemoryCache({
        resultCaching: false,
    }),
});
const Providers = ({ children, cluster, }) => {
    const onError = react_2.default.useCallback((error) => {
        var _a, _b;
        console.error(error);
        if ((_a = error.message) === null || _a === void 0 ? void 0 : _a.includes("Attempt to debit an account but found no record of a prior credit.")) {
            error = new Error("Not enough SOL to perform this action");
        }
        const code = (((_b = error.message) === null || _b === void 0 ? void 0 : _b.match("custom program error: (.*)")) ||
            [])[1];
        if (code == "0x1") {
            error = new Error("Insufficient balance.");
        }
        else if (code === "0x0") {
            error = new Error("Blockhash expired. Please retry");
        }
        react_hot_toast_1.default.custom((t) => (react_2.default.createElement(react_1.Notification, { type: "error", show: t.visible, heading: error.name, 
            // @ts-ignore
            message: error.message || error.msg || error.toString(), onDismiss: () => react_hot_toast_1.default.dismiss(t.id) })));
    }, [react_hot_toast_1.default]);
    return (react_2.default.createElement(ThemeProvider_1.ThemeProvider, null,
        react_2.default.createElement(client_1.ApolloProvider, { client: client },
            react_2.default.createElement(react_1.ErrorHandlerProvider, { onError: onError },
                react_2.default.createElement(Wallet_1.Wallet, { cluster: cluster },
                    react_2.default.createElement(wallet_adapter_react_ui_1.WalletModalProvider, null,
                        react_2.default.createElement(react_1.StrataSdksProvider, null,
                            react_2.default.createElement(react_1.AccountProvider, { commitment: "confirmed" },
                                react_2.default.createElement(react_1.TokenListProvider, null,
                                    react_2.default.createElement(marketplaceSdkContext_1.MarketplaceSdkProvider, null, children))))))))));
};
exports.Providers = Providers;
//# sourceMappingURL=Providers.js.map