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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisburseFunds = void 0;
const react_1 = require("@chakra-ui/react");
const spl_governance_1 = require("@solana/spl-governance");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const web3_js_1 = require("@solana/web3.js");
const react_2 = require("@strata-foundation/react");
const react_3 = __importStar(require("react"));
const react_async_hook_1 = require("react-async-hook");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const bs_1 = require("react-icons/bs");
const useIsBountyAdmin_1 = require("../hooks/useIsBountyAdmin");
const marketplaceSdkContext_1 = require("../contexts/marketplaceSdkContext");
const AsyncButton_1 = require("./AsyncButton");
const Recipient_1 = require("./form/Recipient");
function getInstructions(marketplaceSdk, reserveAmount, tokenBondingKey, address, includeRetrievalCurve) {
    return __awaiter(this, void 0, void 0, function* () {
        if (marketplaceSdk && address && reserveAmount) {
            return marketplaceSdk === null || marketplaceSdk === void 0 ? void 0 : marketplaceSdk.disburseCurveInstructions({
                destination: address,
                tokenBonding: tokenBondingKey,
                includeRetrievalCurve,
            });
        }
    });
}
const DisburseFunds = ({ tokenBondingKey, includeRetrievalCurve = false, }) => {
    const [address, setAddress] = (0, react_3.useState)("");
    const { marketplaceSdk } = (0, marketplaceSdkContext_1.useMarketplaceSdk)();
    const reserveAmount = (0, react_2.useReserveAmount)(tokenBondingKey);
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const { info: tokenBonding, loading: bondingLoading } = (0, react_2.useTokenBonding)(tokenBondingKey);
    const addressKey = (0, react_2.usePublicKey)(address);
    const { info: governance, loading: governanceLoading } = (0, react_2.useGovernance)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority);
    const { result: instructionResult, loading } = (0, react_async_hook_1.useAsync)(getInstructions, [
        marketplaceSdk,
        reserveAmount,
        tokenBondingKey,
        addressKey,
        includeRetrievalCurve,
    ]);
    const { isAdmin } = (0, useIsBountyAdmin_1.useIsBountyAdmin)(publicKey || undefined, tokenBondingKey);
    if (isAdmin && tokenBonding) {
        return (react_3.default.createElement(react_1.Box, { w: "full" },
            react_3.default.createElement(react_1.FormLabel, { htmlFor: "recipient" }, "Recipient"),
            publicKey && (react_3.default.createElement(react_1.Button, { variant: "link", onClick: () => setAddress(publicKey.toBase58()) }, "Set to My Wallet")),
            react_3.default.createElement(Recipient_1.Recipient, { name: "recipient", value: address, onChange: (e) => {
                    // @ts-ignore
                    setAddress(e.target.value);
                } }),
            !governance && (react_3.default.createElement(AsyncButton_1.AsyncButton, { mt: 4, isLoading: bondingLoading || governanceLoading, variant: "outline", colorScheme: "primary", w: "full", action: () => __awaiter(void 0, void 0, void 0, function* () {
                    if (marketplaceSdk) {
                        yield marketplaceSdk.disburseCurve({
                            tokenBonding: tokenBondingKey,
                            destination: new web3_js_1.PublicKey(address),
                            includeRetrievalCurve,
                        });
                    }
                }) }, "Disburse")),
            react_3.default.createElement(react_1.VStack, { spacing: 2, align: "flex-start" }, governance &&
                instructionResult &&
                instructionResult.instructions.map((i, index) => (react_3.default.createElement(react_1.Button, { key: index, variant: "outline", colorScheme: "primary", leftIcon: react_3.default.createElement(react_1.Icon, { as: bs_1.BsClipboard }), onClick: () => {
                        const ixData = (0, spl_governance_1.serializeInstructionToBase64)(i);
                        navigator.clipboard.writeText(ixData);
                        react_hot_toast_1.default.custom((t) => (react_3.default.createElement(react_2.Notification, { show: t.visible, type: "info", heading: "Copied to Clipboard", message: ixData, onDismiss: () => react_hot_toast_1.default.dismiss(t.id) })));
                    } },
                    "Instruction ",
                    index + 1))))));
    }
    return react_3.default.createElement("div", null);
};
exports.DisburseFunds = DisburseFunds;
//# sourceMappingURL=DisburseFunds.js.map