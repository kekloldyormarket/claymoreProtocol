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
exports.MintButton = void 0;
const react_1 = require("@chakra-ui/react");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_2 = require("@strata-foundation/react");
const react_3 = __importStar(require("react"));
const react_async_hook_1 = require("react-async-hook");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const bs_1 = require("react-icons/bs");
const ri_1 = require("react-icons/ri");
const useLivePrice_1 = require("../../hooks/useLivePrice");
function buy({ tokenBondingSdk, tokenBonding, maxPrice, }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (isNaN(maxPrice)) {
            throw new Error("Invalid slippage");
        }
        if (tokenBondingSdk) {
            yield tokenBondingSdk.buy({
                tokenBonding,
                desiredTargetAmount: 1,
                expectedBaseAmount: maxPrice,
                slippage: 0,
            });
            react_hot_toast_1.default.custom((t) => (react_3.default.createElement(react_2.Notification, { show: t.visible, type: "success", heading: "Transaction Successful", message: `Succesfully minted! Check the collectibles section of your wallet for the token.`, onDismiss: () => react_hot_toast_1.default.dismiss(t.id) })));
        }
    });
}
const MintButton = ({ tokenBondingKey, price: inputPrice, isDisabled, disabledText, onMint = buy, }) => {
    const { isOpen, onToggle } = (0, react_1.useDisclosure)();
    const { connected, publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const { awaitingApproval } = (0, react_2.useProvider)();
    const [slippage, setSlippage] = (0, react_3.useState)("5");
    const { numRemaining } = (0, react_2.useCapInfo)(tokenBondingKey);
    const { pricing, loading: pricingLoading, error: pricingError, } = (0, react_2.useBondingPricing)(tokenBondingKey);
    const { handleErrors } = (0, react_2.useErrorHandler)();
    const { tokenBondingSdk } = (0, react_2.useStrataSdks)();
    const { execute, loading, error } = (0, react_async_hook_1.useAsyncCallback)(onMint);
    handleErrors(pricingError, error);
    const { info: tokenBonding, loading: bondingLoading } = (0, react_2.useTokenBonding)(tokenBondingKey);
    const { price } = (0, useLivePrice_1.useLivePrice)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const priceToUse = inputPrice || price;
    const targetBalance = (0, react_2.useUserOwnedAmount)(publicKey, tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const ownedAmount = (0, react_2.useUserOwnedAmount)(publicKey, tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const insufficientBalance = (priceToUse || 0) > (ownedAmount || 0);
    const notLive = tokenBonding &&
        tokenBonding.goLiveUnixTime.toNumber() > new Date().valueOf() / 1000;
    return (react_3.default.createElement(react_1.VStack, { spacing: 8, align: "stretch" },
        react_3.default.createElement(react_1.LightMode, null,
            react_3.default.createElement(react_1.Button, { onClick: () => execute({
                    tokenBondingSdk,
                    tokenBonding: tokenBondingKey,
                    maxPrice: priceToUse * (1 + Number(slippage) / 100),
                }), isLoading: bondingLoading || pricingLoading || loading, colorScheme: "primary", isDisabled: (numRemaining == 0 && !targetBalance) ||
                    ((targetBalance || 0) === 0 && insufficientBalance) ||
                    notLive ||
                    isDisabled, loadingText: awaitingApproval
                    ? "Awaiting Approval"
                    : loading
                        ? "Submitting"
                        : "Loading" }, (targetBalance || 0) > 0
                ? "Finish previous Mint Transaction"
                : numRemaining == 0
                    ? "Sold Out"
                    : insufficientBalance
                        ? "Insufficient Balance"
                        : notLive
                            ? `Goes live at ${tokenBonding &&
                                new Date(tokenBonding.goLiveUnixTime.toNumber() * 1000).toLocaleString()}`
                            : isDisabled
                                ? disabledText
                                : connected
                                    ? "Mint"
                                    : "Connect Wallet")),
        react_3.default.createElement(react_1.Button, { color: (0, react_1.useColorModeValue)("black", "white"), variant: "link", onClick: onToggle, fontSize: "14px", rightIcon: react_3.default.createElement(react_1.Icon, { mb: "-3px", color: "gray.300", as: isOpen ? bs_1.BsChevronUp : bs_1.BsChevronDown }) }, "Advanced Settings"),
        react_3.default.createElement(react_1.Collapse, { in: isOpen, animateOpacity: true },
            react_3.default.createElement(react_1.VStack, { spacing: 1, padding: 4, align: "stretch", color: "gray.400", borderColor: "gray.400", borderWidth: "1px", rounded: "lg", fontSize: "sm" },
                react_3.default.createElement(react_1.Flex, { justify: "space-between", alignItems: "center" },
                    react_3.default.createElement(react_1.HStack, null,
                        react_3.default.createElement(react_1.Text, null, "Slippage"),
                        react_3.default.createElement(react_1.Tooltip, { placement: "top", label: "Your transaction will fail if the price changes unfavorably more than this percentage." },
                            react_3.default.createElement(react_1.Flex, null,
                                react_3.default.createElement(react_1.Icon, { w: 5, h: 5, as: ri_1.RiInformationLine, _hover: { color: "primary.500", cursor: "pointer" } })))),
                    react_3.default.createElement(react_1.InputGroup, { size: "sm", w: "60px" },
                        react_3.default.createElement(react_1.Input, { id: "slippage", borderColor: "gray.400", _hover: { borderColor: "gray.500" }, textAlign: "right", rounded: "lg", placeholder: "0", type: "number", fontWeight: "semibold", step: 1, min: 1, max: 90, paddingRight: 5, paddingLeft: 1, value: slippage, onChange: (e) => setSlippage(e.target.value) }),
                        react_3.default.createElement(react_1.InputRightElement, { zIndex: 0, w: 4, justifyContent: "end", paddingRight: 1.5, rounded: "lg" },
                            react_3.default.createElement(react_1.Text, { margin: 0 }, "%"))))))));
};
exports.MintButton = MintButton;
//# sourceMappingURL=MintButton.js.map