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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenOffering = void 0;
const react_1 = __importStar(require("react"));
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const react_2 = require("@strata-foundation/react");
const react_async_hook_1 = require("react-async-hook");
const spl_token_bonding_1 = require("@strata-foundation/spl-token-bonding");
const identity = () => { };
const TokenOffering = ({ mintKey, showAttribution = true }) => {
    const { result: sellOnlyTokenBondingKey, error: keyError1 } = (0, react_2.useTokenBondingKey)(mintKey, 1);
    const { tokenBondingSdk } = (0, react_2.useStrataSdks)();
    const { info: sellOnlyTokenBonding, loading: sellOnlyLoading } = (0, react_2.useTokenBonding)(sellOnlyTokenBondingKey);
    const { result: tokenBondingKey, error: keyError2 } = (0, react_2.useTokenBondingKey)(sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.targetMint, 0);
    const { info: tokenBonding } = (0, react_2.useTokenBonding)(tokenBondingKey);
    const { info: supplyAcc } = (0, react_2.useTokenAccount)(sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseStorage);
    const supplyMint = (0, react_2.useMint)(sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseMint);
    const { execute: onSubmit, loading: submitting, error: submitError, } = (0, react_async_hook_1.useAsyncCallback)(function (values) {
        return __awaiter(this, void 0, void 0, function* () {
            const instructions = [];
            const signers = [];
            const { instructions: i1, signers: s1 } = yield tokenBondingSdk.buyInstructions({
                desiredTargetAmount: +values.bottomAmount,
                slippage: +values.slippage / 100,
                tokenBonding: tokenBondingKey,
            });
            instructions.push(...i1);
            signers.push(...s1);
            if (sellOnlyTokenBonding) {
                const { instructions: i2, signers: s2 } = yield tokenBondingSdk.sellInstructions({
                    targetAmount: (0, react_2.roundToDecimals)(+values.bottomAmount, supplyMint.decimals),
                    slippage: +values.slippage / 100,
                    tokenBonding: sellOnlyTokenBondingKey,
                });
                instructions.push(...i2);
                signers.push(...s2);
            }
            yield tokenBondingSdk.sendInstructions(instructions, signers);
            react_hot_toast_1.default.custom((t) => (react_1.default.createElement(react_2.Notification, { show: t.visible, type: "success", heading: "Transaction Successful", message: `Succesfully purchased ${Number(values.bottomAmount).toFixed(9)}!`, onDismiss: () => react_hot_toast_1.default.dismiss(t.id) })));
        });
    });
    const { handleErrors } = (0, react_2.useErrorHandler)();
    handleErrors(keyError1, keyError2, submitError);
    const tradingMints = (0, react_1.useMemo)(() => {
        return {
            base: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint,
            target: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint,
        };
    }, [tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint, tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint]);
    const _a = (0, react_2.useSwapDriver)({
        tradingMints,
        onTradingMintsChange: () => { },
        swap: (args) => { },
        onConnectWallet: identity,
        tokenBondingKey: tokenBondingKey,
    }), { loading: driverLoading } = _a, swapProps = __rest(_a, ["loading"]);
    return (react_1.default.createElement(react_2.SwapForm, Object.assign({ showAttribution: showAttribution, isLoading: driverLoading || sellOnlyLoading, isSubmitting: submitting }, swapProps, { onSubmit: onSubmit, numRemaining: supplyAcc && supplyMint && (0, spl_token_bonding_1.toNumber)(supplyAcc.amount, supplyMint) })));
};
exports.TokenOffering = TokenOffering;
//# sourceMappingURL=TokenOffering.js.map