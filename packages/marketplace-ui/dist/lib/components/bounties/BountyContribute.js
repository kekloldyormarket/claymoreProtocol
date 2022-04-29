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
exports.BountyContribute = void 0;
const react_1 = require("@chakra-ui/react");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_2 = require("@strata-foundation/react");
const react_3 = __importStar(require("react"));
const __1 = require("..");
const BountyContribute = ({ mintKey, onContributeSuccess, onBuyMore, }) => {
    const [qty, setQty] = (0, react_3.useState)("");
    const { connected } = (0, wallet_adapter_react_1.useWallet)();
    const { info: tokenBonding, loading: bondingLoading } = (0, react_2.useTokenBondingFromMint)(mintKey);
    const { tokenBondingSdk } = (0, react_2.useStrataSdks)();
    const [isWithdraw, setIsWithdraw] = (0, react_3.useState)(false);
    const { pricing } = (0, react_2.useBondingPricing)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const { metadata: baseMetadata } = (0, react_2.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const targetBalance = (0, react_2.useOwnedAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const baseBalance = (0, react_2.useOwnedAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const disabledText = (0, react_3.useMemo)(() => {
        let disabledText;
        if (typeof qty !== "undefined" && Number(qty)) {
            if (isWithdraw) {
                if (pricing) {
                    const actualQuantity = -pricing.buyWithBaseAmount(-Number(qty));
                    if (!targetBalance || targetBalance < actualQuantity) {
                        disabledText = "Insufficient funds";
                    }
                    if (!connected) {
                        disabledText = "Connect Wallet";
                    }
                }
            }
            else {
                if (!baseBalance || baseBalance < Number(qty)) {
                    disabledText = "Insufficient funds";
                }
                if (!connected) {
                    disabledText = "Connect Wallet";
                }
            }
        }
        return disabledText;
    }, [pricing, targetBalance, qty, connected, baseBalance, isWithdraw]);
    const isDisabled = !!disabledText;
    return (react_3.default.createElement(react_1.VStack, { w: "full", justify: "stretch", spacing: 2 },
        baseMetadata && onBuyMore && (react_3.default.createElement(react_1.Button, { variant: "link", size: "sm", marginLeft: "auto", onClick: () => onBuyMore(tokenBonding.baseMint) },
            "Buy More ",
            baseMetadata.data.symbol,
            " ")),
        react_3.default.createElement(react_1.InputGroup, null,
            react_3.default.createElement(react_1.Input, { type: "number", value: qty, onChange: (e) => {
                    setQty(e.target.value);
                } }),
            react_3.default.createElement(react_1.InputRightElement, { pr: "6px", fontSize: "16px", fontWeight: 700, color: "gray.500", justifyContent: "flex-end", width: "120px" }, baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol)),
        react_3.default.createElement(react_1.HStack, { justify: "stretch", w: "full" },
            react_3.default.createElement(react_1.Button, { flexGrow: 1, onClick: () => setIsWithdraw(!isWithdraw), fontWeight: 400, variant: "outline", colorScheme: "primary" }, isWithdraw ? "Contribute Funds" : "Withdraw Funds"),
            react_3.default.createElement(__1.AsyncButton, { flexGrow: 1, colorScheme: "primary", action: () => __awaiter(void 0, void 0, void 0, function* () {
                    const quantity = Number(qty);
                    if (isWithdraw && pricing) {
                        yield (tokenBondingSdk === null || tokenBondingSdk === void 0 ? void 0 : tokenBondingSdk.sell({
                            targetAmount: -pricing.buyWithBaseAmount(-quantity),
                            tokenBonding: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey,
                            slippage: 0,
                        }));
                    }
                    else if (!isWithdraw) {
                        yield (tokenBondingSdk === null || tokenBondingSdk === void 0 ? void 0 : tokenBondingSdk.buy({
                            baseAmount: quantity,
                            tokenBonding: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey,
                            slippage: 0,
                        }));
                    }
                    onContributeSuccess();
                }), isDisabled: isDisabled }, isDisabled
                ? disabledText
                : isWithdraw
                    ? "Widthdraw Funds"
                    : "Contribute Funds"))));
};
exports.BountyContribute = BountyContribute;
//# sourceMappingURL=BountyContribute.js.map