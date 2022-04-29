"use strict";
exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 5787:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Creator = exports.truncatePubkey = exports.WUMBO_TWITTER_TLD = exports.WUMBO_TWITTER_VERIFIER = void 0;
const react_1 = __webpack_require__(8930);
const web3_js_1 = __webpack_require__(7831);
const react_2 = __importDefault(__webpack_require__(6689));
const hooks_1 = __webpack_require__(8721);
const nameService_1 = __webpack_require__(1011);
const useGovernance_1 = __webpack_require__(1478);
exports.WUMBO_TWITTER_VERIFIER = new web3_js_1.PublicKey("DTok7pfUzNeNPqU3Q6foySCezPQE82eRyhX1HdhVNLVC");
exports.WUMBO_TWITTER_TLD = new web3_js_1.PublicKey("Fhqd3ostRQQE65hzoA7xFMgT9kge2qPnsTNAKuL2yrnx");
// export const WUMBO_TWITTER_VERIFIER = new PublicKey(
//   "GibysS6yTqHWw4AZap416Xs26rAo9nV9HTRviKuutytp"
// );
// export const WUMBO_TWITTER_TLD = new PublicKey(
//   "EEbZHaBD4mreYS6enRqytXvXfmRESLWXXrXbtZLWyd6X"
// );
const truncatePubkey = (pkey) => {
    const pkeyStr = pkey.toString();
    return `${pkeyStr.substr(0, 4)}...${pkeyStr.substr(pkeyStr.length - 4)}`;
};
exports.truncatePubkey = truncatePubkey;
exports.Creator = react_2.default.memo(({ creator, onClick }) => {
    const { handleErrors } = (0, hooks_1.useErrorHandler)();
    const { metadata, tokenRef, error, image } = (0, hooks_1.useSocialTokenMetadata)(creator);
    const { nameString: handle, error: reverseTwitterError2 } = (0, nameService_1.useReverseName)(creator, exports.WUMBO_TWITTER_VERIFIER, exports.WUMBO_TWITTER_TLD);
    handleErrors(error, reverseTwitterError2);
    const { info: governance } = (0, useGovernance_1.useGovernance)(creator);
    const children = (react_2.default.createElement(react_2.default.Fragment, null,
        metadata && (react_2.default.createElement(react_1.HStack, { spacing: 1 },
            react_2.default.createElement(react_1.Avatar, { size: "xs", src: image }),
            react_2.default.createElement(react_1.Text, null, metadata.data.name))),
        !metadata && !handle && (0, exports.truncatePubkey)(creator),
        !metadata && handle && `@${handle}`));
    if (governance) {
        react_2.default.createElement(react_1.Link, { isExternal: true, href: `https://realms.today/dao/${governance.realm.toBase58()}` }, children);
    }
    return (react_2.default.createElement(react_1.Box, { _hover: { cursor: 'pointer', textDecoration: 'underline' }, onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick(creator, metadata, tokenRef, handle);
        } }, children));
});
//# sourceMappingURL=Creator.js.map

/***/ }),

/***/ 8796:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Notification = void 0;
const react_1 = __webpack_require__(8930);
const react_2 = __importDefault(__webpack_require__(6689));
const Notification = ({ type, heading, show, message, onDismiss, }) => (react_2.default.createElement(react_1.Alert, { w: "full", bgColor: "white", borderTop: "1px", borderTopColor: "gray.200", fontFamily: "body", color: "black", status: type },
    react_2.default.createElement(react_1.AlertIcon, null),
    react_2.default.createElement(react_1.Box, { flex: "1" },
        react_2.default.createElement(react_1.AlertTitle, null, heading),
        message && (react_2.default.createElement(react_1.AlertDescription, { display: "block" }, message))),
    react_2.default.createElement(react_1.CloseButton, { position: "absolute", right: "8px", top: "8px", color: "gray.400", _hover: { color: "gray.600", cursor: "pointer" }, onClick: onDismiss })));
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ 1665:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Spinner = void 0;
const react_1 = __importDefault(__webpack_require__(6689));
const react_2 = __webpack_require__(8930);
const Spinner = (_a) => {
    var { size = "lg", thickness = "2px", emptyColor = "gray.400", color = "gray.700", speed = "0.65s" } = _a, props = __rest(_a, ["size", "thickness", "emptyColor", "color", "speed"]);
    return (react_1.default.createElement(react_2.Flex, { w: "full", h: "full", alignItems: "center", justifyContent: "center" },
        react_1.default.createElement(react_2.Spinner, Object.assign({ size: size, thickness: thickness, emptyColor: emptyColor, color: color, speed: speed }, props))));
};
exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.js.map

/***/ }),

/***/ 1520:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StrataProviders = void 0;
const contexts_1 = __webpack_require__(8255);
const react_1 = __importDefault(__webpack_require__(6689));
const StrataProviders = ({ children }) => (react_1.default.createElement(contexts_1.ThemeProvider, null,
    react_1.default.createElement(contexts_1.ErrorHandlerProvider, null,
        react_1.default.createElement(contexts_1.StrataSdksProvider, null,
            react_1.default.createElement(contexts_1.AccountProvider, { commitment: "confirmed" }, children)))));
exports.StrataProviders = StrataProviders;
//# sourceMappingURL=StrataProviders.js.map

/***/ }),

/***/ 6274:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManyToOneSwap = void 0;
const react_1 = __importStar(__webpack_require__(6689));
const react_hot_toast_1 = __importDefault(__webpack_require__(891));
const hooks_1 = __webpack_require__(8721);
const Notification_1 = __webpack_require__(8796);
const SwapForm_1 = __webpack_require__(8010);
const spl_token_bonding_1 = __webpack_require__(9587);
const utils_1 = __webpack_require__(6057);
const ManyToOneSwap = ({ onConnectWallet, extraTransactionInfo, inputs, targetMint, }) => {
    const { loading, error, execute } = (0, hooks_1.useSwap)();
    const { handleErrors } = (0, hooks_1.useErrorHandler)();
    const { tokenBondingSdk } = (0, hooks_1.useStrataSdks)();
    handleErrors(error);
    const { metadata: targetMintMeta } = (0, hooks_1.useTokenMetadata)(targetMint);
    const [baseMint, setBaseMint] = (0, react_1.useState)(inputs[0].baseMint);
    const targetMintAcc = (0, hooks_1.useMint)(targetMint);
    const currBonding = (0, react_1.useMemo)(() => { var _a; return (_a = inputs.find(i => i.baseMint.equals(baseMint))) === null || _a === void 0 ? void 0 : _a.tokenBonding; }, [inputs, baseMint]);
    const { numRemaining } = (0, hooks_1.useCapInfo)(currBonding, true);
    const _a = (0, hooks_1.useManyToOneSwapDriver)({
        onConnectWallet,
        extraTransactionInfo,
        inputs,
        baseMint,
        targetMint,
        onTradingMintsChange: ({ base }) => setBaseMint(base),
        swap: (args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const amount = args.desiredTargetAmount || args.expectedOutputAmount;
                yield execute(Object.assign(Object.assign({}, args), { balanceCheckTries: 0, extraInstructions: ({ tokenBonding, }) => __awaiter(void 0, void 0, void 0, function* () {
                        const burnBondingKey = (yield spl_token_bonding_1.SplTokenBonding.tokenBondingKey(tokenBonding.targetMint, 1))[0];
                        return tokenBondingSdk.sellInstructions({
                            tokenBonding: burnBondingKey,
                            targetAmount: amount,
                            slippage: 0,
                        });
                    }) }));
                react_hot_toast_1.default.custom((t) => (react_1.default.createElement(Notification_1.Notification, { show: t.visible, type: "success", heading: "Transaction Successful", message: `Succesfully purchased ${(0, utils_1.roundToDecimals)((0, spl_token_bonding_1.toNumber)(amount, targetMintAcc), targetMintAcc ? targetMintAcc.decimals : 9)} ${targetMintMeta === null || targetMintMeta === void 0 ? void 0 : targetMintMeta.data.symbol}!`, onDismiss: () => react_hot_toast_1.default.dismiss(t.id) })));
            }
            catch (e) {
                console.error(e);
            }
        }),
    }), { loading: driverLoading } = _a, swapProps = __rest(_a, ["loading"]);
    return (react_1.default.createElement(SwapForm_1.SwapForm, Object.assign({ isLoading: driverLoading, isSubmitting: loading }, swapProps, { numRemaining: numRemaining })));
};
exports.ManyToOneSwap = ManyToOneSwap;
//# sourceMappingURL=ManyToOneSwap.js.map

/***/ }),

/***/ 3419:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Royalties = exports.humanReadablePercentage = void 0;
const react_1 = __importDefault(__webpack_require__(6689));
const hooks_1 = __webpack_require__(8721);
const TransactionInfo_1 = __webpack_require__(3363);
const humanReadablePercentage = (u32) => {
    if (u32 && u32 !== 0) {
        return ((u32 / 4294967295) * 100).toFixed(2);
    }
    return 0;
};
exports.humanReadablePercentage = humanReadablePercentage;
function Royalties({ tokenBonding, isBuying, formRef, }) {
    const { metadata: baseMeta, loading: baseMetaLoading } = (0, hooks_1.useTokenMetadata)(tokenBonding.baseMint);
    const { metadata: targetMeta, loading: targetMetaLoading } = (0, hooks_1.useTokenMetadata)(tokenBonding.targetMint);
    const baseRoyalties = isBuying
        ? tokenBonding.buyBaseRoyaltyPercentage
        : tokenBonding.sellBaseRoyaltyPercentage;
    const targetRoyalties = isBuying
        ? tokenBonding.buyTargetRoyaltyPercentage
        : tokenBonding.sellTargetRoyaltyPercentage;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        baseRoyalties > 0 && (react_1.default.createElement(TransactionInfo_1.TransactionInfo, { name: `${baseMeta === null || baseMeta === void 0 ? void 0 : baseMeta.data.symbol} Royalties`, tooltip: `A percentage of every ${baseMeta === null || baseMeta === void 0 ? void 0 : baseMeta.data.symbol} spent or received in this transaction goes to a royalties account set by the ${targetMeta === null || targetMeta === void 0 ? void 0 : targetMeta.data.symbol} owner.`, formRef: formRef, amount: `${(0, exports.humanReadablePercentage)(baseRoyalties)}%` })),
        targetRoyalties > 0 && (react_1.default.createElement(TransactionInfo_1.TransactionInfo, { name: `${targetMeta === null || targetMeta === void 0 ? void 0 : targetMeta.data.symbol} Royalties`, tooltip: `A percentage of every ${targetMeta === null || targetMeta === void 0 ? void 0 : targetMeta.data.symbol} spent or received in this transaction goes to a royalties account set by the ${targetMeta === null || targetMeta === void 0 ? void 0 : targetMeta.data.symbol} owner.`, formRef: formRef, amount: `${(0, exports.humanReadablePercentage)(targetRoyalties)}%` }))));
}
exports.Royalties = Royalties;
//# sourceMappingURL=Royalties.js.map

/***/ }),

/***/ 6318:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Swap = void 0;
const useSwapDriver_1 = __webpack_require__(4974);
const react_1 = __importStar(__webpack_require__(6689));
const react_hot_toast_1 = __importDefault(__webpack_require__(891));
const hooks_1 = __webpack_require__(8721);
const Notification_1 = __webpack_require__(8796);
const SwapForm_1 = __webpack_require__(8010);
const identity = () => { };
const Swap = ({ tokenBondingKey }) => {
    const { loading, error, execute } = (0, hooks_1.useSwap)();
    const { handleErrors } = (0, hooks_1.useErrorHandler)();
    handleErrors(error);
    const { info: tokenBonding } = (0, hooks_1.useTokenBonding)(tokenBondingKey);
    const [tradingMints, setTradingMints] = (0, react_1.useState)({
        base: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint,
        target: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint,
    });
    react_1.default.useEffect(() => {
        if ((!tradingMints.base || !tradingMints.target) && tokenBonding) {
            setTradingMints({
                base: tokenBonding.baseMint,
                target: tokenBonding.targetMint,
            });
        }
    }, [tokenBonding, tradingMints]);
    const _a = (0, useSwapDriver_1.useSwapDriver)({
        tradingMints,
        onTradingMintsChange: setTradingMints,
        swap: (args) => execute(args).then(({ targetAmount }) => {
            react_hot_toast_1.default.custom((t) => (react_1.default.createElement(Notification_1.Notification, { show: t.visible, type: "success", heading: "Transaction Successful", message: `Succesfully purchased ${Number(targetAmount).toFixed(9)} ${args.ticker}!`, onDismiss: () => react_hot_toast_1.default.dismiss(t.id) })));
        }).catch(console.error),
        onConnectWallet: identity,
        tokenBondingKey: tokenBondingKey,
    }), { loading: driverLoading } = _a, swapProps = __rest(_a, ["loading"]);
    return (react_1.default.createElement(SwapForm_1.SwapForm, Object.assign({ isLoading: driverLoading, isSubmitting: loading }, swapProps)));
};
exports.Swap = Swap;
//# sourceMappingURL=Swap.js.map

/***/ }),

/***/ 8010:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwapForm = void 0;
const react_1 = __webpack_require__(8930);
const Spinner_1 = __webpack_require__(1665);
const yup_1 = __webpack_require__(6773);
const wallet_adapter_react_1 = __webpack_require__(8659);
const react_2 = __importStar(__webpack_require__(6689));
const react_hook_form_1 = __webpack_require__(7775);
const bs_1 = __webpack_require__(567);
const ri_1 = __webpack_require__(8098);
const yup = __importStar(__webpack_require__(5609));
const hooks_1 = __webpack_require__(8721);
const Royalties_1 = __webpack_require__(3419);
const TransactionInfo_1 = __webpack_require__(3363);
const useTwWrappedSolMint_1 = __webpack_require__(4353);
const spl_token_1 = __webpack_require__(9874);
const utils_1 = __webpack_require__(6057);
const validationSchema = yup
    .object({
    topAmount: yup.number().required().moreThan(0),
    bottomAmount: yup.number().required().moreThan(0),
    slippage: yup.number().required().moreThan(0),
})
    .required();
function MintMenuItem({ mint, onClick, }) {
    const { image, metadata } = (0, hooks_1.useTokenMetadata)(mint);
    return (react_2.default.createElement(react_1.MenuItem, { onClick: onClick, icon: react_2.default.createElement(react_1.Center, { w: 8, h: 8, color: "white", bg: "primary.500", rounded: "full" },
            react_2.default.createElement(react_1.Avatar, { w: "100%", h: "100%", size: "sm", src: image })) },
        react_2.default.createElement(react_1.Text, null, metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol)));
}
const SwapForm = ({ isLoading = false, extraTransactionInfo, isSubmitting, onConnectWallet, onTradingMintsChange, onBuyBase, onSubmit, tokenBonding, pricing, base, target, ownedBase, spendCap, feeAmount, baseOptions, targetOptions, mintCap, numRemaining, showAttribution = true, }) => {
    const formRef = (0, react_2.useRef)();
    const { connected } = (0, wallet_adapter_react_1.useWallet)();
    const { awaitingApproval } = (0, hooks_1.useProvider)();
    const ftxPayLink = (0, hooks_1.useFtxPayLink)();
    const [insufficientLiq, setInsufficientLiq] = (0, react_2.useState)(false);
    const [rate, setRate] = (0, react_2.useState)("--");
    const [fee, setFee] = (0, react_2.useState)("--");
    const { register, handleSubmit, watch, reset, setValue, formState: { errors }, } = (0, react_hook_form_1.useForm)({
        defaultValues: {
            topAmount: undefined,
            bottomAmount: undefined,
            slippage: 1,
        },
        resolver: (0, yup_1.yupResolver)(validationSchema),
    });
    const wrappedSolMint = (0, useTwWrappedSolMint_1.useTwWrappedSolMint)();
    const isBaseSol = wrappedSolMint &&
        ((base === null || base === void 0 ? void 0 : base.publicKey.equals(wrappedSolMint)) ||
            (base === null || base === void 0 ? void 0 : base.publicKey.equals(spl_token_1.NATIVE_MINT)));
    const topAmount = watch("topAmount");
    const bottomAmount = watch("bottomAmount");
    const slippage = watch("slippage");
    const hasBaseAmount = (ownedBase || 0) >= +(topAmount || 0);
    const moreThanSpendCap = +(topAmount || 0) > spendCap;
    const lowMint = base &&
        target &&
        (pricing === null || pricing === void 0 ? void 0 : pricing.hierarchy.lowest(base.publicKey, target.publicKey));
    const isBuying = lowMint && lowMint.equals(target === null || target === void 0 ? void 0 : target.publicKey);
    const targetBonding = lowMint && (pricing === null || pricing === void 0 ? void 0 : pricing.hierarchy.findTarget(lowMint));
    const passedMintCap = typeof numRemaining !== "undefined" && numRemaining < bottomAmount;
    const targetMintAcc = (0, hooks_1.useMint)(target === null || target === void 0 ? void 0 : target.publicKey);
    const baseMintAcc = (0, hooks_1.useMint)(base === null || base === void 0 ? void 0 : base.publicKey);
    const notLive = targetBonding &&
        targetBonding.goLiveUnixTime.toNumber() > new Date().valueOf() / 1000;
    const handleConnectWallet = () => onConnectWallet();
    const manualResetForm = () => {
        reset({ slippage: slippage });
        setInsufficientLiq(false);
        setRate("--");
        setFee("--");
    };
    const [lastSet, setLastSet] = (0, react_2.useState)("top");
    function updatePrice() {
        if (lastSet == "bottom" && bottomAmount) {
            handleBottomChange(bottomAmount);
        }
        else if (topAmount) {
            handleTopChange(topAmount);
        }
    }
    (0, react_2.useEffect)(() => {
        const interval = setInterval(updatePrice, 1000);
        return () => clearInterval(interval);
    }, [pricing, bottomAmount, topAmount, targetMintAcc, baseMintAcc]);
    const handleTopChange = (value = 0) => {
        if (tokenBonding && pricing && base && target && value && +value >= 0) {
            setLastSet("top");
            const amount = pricing.swap(+value, base.publicKey, target.publicKey);
            if (isNaN(amount)) {
                setInsufficientLiq(true);
            }
            else {
                setInsufficientLiq(false);
                setValue("bottomAmount", +value == 0
                    ? 0
                    : (0, utils_1.roundToDecimals)(amount, targetMintAcc ? targetMintAcc.decimals : 9));
                setRate(`${(0, utils_1.roundToDecimals)(amount / value, targetMintAcc ? targetMintAcc.decimals : 9)}`);
                setFee(`${feeAmount}`);
            }
        }
        else {
            manualResetForm();
        }
    };
    const handleBottomChange = (value = 0) => {
        if (tokenBonding && pricing && base && target && value && +value >= 0) {
            let amount = Math.abs(pricing.swapTargetAmount(+value, target.publicKey, base.publicKey));
            setLastSet("bottom");
            if (isNaN(amount)) {
                setInsufficientLiq(true);
            }
            else {
                setInsufficientLiq(false);
                setValue("topAmount", +value == 0
                    ? 0
                    : (0, utils_1.roundToDecimals)(amount, baseMintAcc ? baseMintAcc.decimals : 9));
                setRate(`${(0, utils_1.roundToDecimals)(value / amount, baseMintAcc ? baseMintAcc.decimals : 9)}`);
                setFee(`${feeAmount}`);
            }
        }
        else {
            manualResetForm();
        }
    };
    const attColor = (0, react_1.useColorModeValue)("gray.400", "gray.200");
    const handleUseMax = () => {
        const amount = (ownedBase || 0) >= spendCap ? spendCap : ownedBase || 0;
        setValue("topAmount", amount);
        handleTopChange(amount);
    };
    const handleFlipTokens = () => {
        if (base && target) {
            onTradingMintsChange({
                base: target.publicKey,
                target: base.publicKey,
            });
        }
    };
    const handleBuyBase = () => {
        if (isBaseSol) {
            window.open(ftxPayLink);
        }
        else {
            onBuyBase(tokenBonding.publicKey);
        }
    };
    const handleSwap = (values) => __awaiter(void 0, void 0, void 0, function* () {
        yield onSubmit(Object.assign(Object.assign({}, values), { lastSet }));
    });
    if (isLoading || !base || !target) {
        return react_2.default.createElement(Spinner_1.Spinner, null);
    }
    return (react_2.default.createElement(react_1.Box, { ref: formRef, w: "full" },
        react_2.default.createElement("form", { onSubmit: handleSubmit(handleSwap) },
            react_2.default.createElement(react_1.VStack, { spacing: 4, padding: 4, align: "stretch", color: "gray.500" },
                react_2.default.createElement(react_1.Flex, { flexDir: "column" },
                    react_2.default.createElement(react_1.Flex, { justifyContent: "space-between" },
                        react_2.default.createElement(react_1.Text, { color: "gray.600", fontSize: "xs" }, "You Pay"),
                        base && (react_2.default.createElement(react_1.Link, { color: "primary.500", fontSize: "xs", onClick: handleBuyBase },
                            "Buy More ",
                            base.ticker))),
                    react_2.default.createElement(react_1.InputGroup, { zIndex: 100, size: "lg" },
                        react_2.default.createElement(react_1.Input, Object.assign({ isInvalid: !!errors.topAmount, isDisabled: !connected, id: "topAmount", borderColor: "gray.200", placeholder: "0", type: "number", fontSize: "2xl", fontWeight: "semibold", step: 1 * Math.pow(10, baseMintAcc ? -baseMintAcc.decimals : -9), min: 0, _placeholder: { color: "gray.200" } }, register("topAmount", {
                            onChange: (e) => handleTopChange(e.target.value),
                        }))),
                        react_2.default.createElement(react_1.InputRightElement, { w: "auto", justifyContent: "end", paddingX: 1.5, rounded: "lg" }, connected && (react_2.default.createElement(react_1.Menu, null,
                            react_2.default.createElement(react_1.MenuButton, { cursor: "pointer", isDisabled: !connected, as: react_1.Button, rightIcon: react_2.default.createElement(bs_1.BsChevronDown, null), leftIcon: react_2.default.createElement(react_1.Center, { w: 8, h: 8, color: "white", bg: "primary.500", rounded: "full" },
                                    react_2.default.createElement(react_1.Avatar, { src: base.image, w: "100%", h: "100%" })), borderRadius: "20px 6px 6px 20px", paddingX: 1.5, bgColor: "gray.200" }, base.ticker),
                            react_2.default.createElement(react_1.MenuList, { borderColor: "gray.300" }, baseOptions.map((mint) => (react_2.default.createElement(MintMenuItem, { mint: mint, key: mint.toBase58(), onClick: () => onTradingMintsChange({
                                    base: mint,
                                    target: target.publicKey &&
                                        mint.equals(target.publicKey)
                                        ? base.publicKey
                                        : target.publicKey,
                                }) }))))))))),
                react_2.default.createElement(react_1.HStack, { justify: "center", alignItems: "center", position: "relative", paddingY: 2 },
                    react_2.default.createElement(react_1.Divider, { color: "gray.200" }),
                    react_2.default.createElement(react_1.Flex, null,
                        !connected && (react_2.default.createElement(react_1.Button, { size: "xs", colorScheme: "gray", variant: "outline", onClick: handleConnectWallet }, "Connect Wallet")),
                        connected && (react_2.default.createElement(react_1.Button, { size: "xs", colorScheme: "primary", variant: "ghost", onClick: handleUseMax },
                            "Use Max (",
                            (ownedBase || 0) > spendCap ? spendCap : ownedBase || 0,
                            " ",
                            base.ticker,
                            ")"))),
                    react_2.default.createElement(react_1.Divider, { color: "gray.200" }),
                    react_2.default.createElement(react_1.IconButton, { isDisabled: !connected, "aria-label": "Flip Tokens", size: "sm", colorScheme: "gray", rounded: "full", position: "absolute", right: 2, onClick: handleFlipTokens, icon: react_2.default.createElement(react_1.Icon, { as: ri_1.RiArrowUpDownFill, w: 5, h: 5 }) })),
                react_2.default.createElement(react_1.Flex, { flexDir: "column" },
                    react_2.default.createElement(react_1.Text, { color: "gray.600", fontSize: "xs" }, "You Receive"),
                    react_2.default.createElement(react_1.InputGroup, { zIndex: 99, size: "lg" },
                        react_2.default.createElement(react_1.Input, Object.assign({ isInvalid: !!errors.bottomAmount, isDisabled: !connected, id: "bottomAmount", borderColor: "gray.200", placeholder: "0", type: "number", fontSize: "2xl", fontWeight: "semibold", step: 1 * Math.pow(10, targetMintAcc ? -targetMintAcc.decimals : -9), min: 0, _placeholder: { color: "gray.200" } }, register("bottomAmount", {
                            onChange: (e) => handleBottomChange(e.target.value),
                        }))),
                        react_2.default.createElement(react_1.InputRightElement, { w: "auto", justifyContent: "end", paddingX: 1.5, rounded: "lg" }, connected && (react_2.default.createElement(react_1.Menu, null,
                            react_2.default.createElement(react_1.MenuButton, { rightIcon: react_2.default.createElement(bs_1.BsChevronDown, null), isDisabled: !connected, as: react_1.Button, leftIcon: react_2.default.createElement(react_1.Center, { w: 8, h: 8, color: "white", bg: "primary.500", rounded: "full" },
                                    react_2.default.createElement(react_1.Avatar, { src: target.image, w: "100%", h: "100%" })), borderRadius: "20px 6px 6px 20px", paddingX: 1.5, bgColor: "gray.200" }, target.ticker),
                            react_2.default.createElement(react_1.MenuList, { borderColor: "gray.300" }, targetOptions.map((mint) => (react_2.default.createElement(MintMenuItem, { mint: mint, key: mint.toBase58(), onClick: () => onTradingMintsChange({
                                    target: mint,
                                    base: base.publicKey && mint.equals(base.publicKey)
                                        ? target.publicKey
                                        : base.publicKey,
                                }) }))))))))),
                react_2.default.createElement(react_1.VStack, { spacing: 1, padding: 4, align: "stretch", color: "gray.400", borderColor: "gray.200", borderWidth: "1px", rounded: "lg", fontSize: "sm" },
                    react_2.default.createElement(react_1.Flex, { justify: "space-between", alignItems: "center" },
                        react_2.default.createElement(react_1.Text, null, "Rate"),
                        react_2.default.createElement(react_1.Text, null, rate !== "--"
                            ? `1 ${base.ticker} ≈ ${rate} ${target.ticker}`
                            : rate)),
                    react_2.default.createElement(react_1.Flex, { justify: "space-between", alignItems: "center" },
                        react_2.default.createElement(react_1.HStack, null,
                            react_2.default.createElement(react_1.Text, null, "Slippage"),
                            react_2.default.createElement(react_1.Tooltip, { isDisabled: !connected, placement: "top", label: "Your transaction will fail if the price changes unfavorably more than this percentage.", portalProps: { containerRef: formRef } },
                                react_2.default.createElement(react_1.Flex, null,
                                    react_2.default.createElement(react_1.Icon, { w: 5, h: 5, as: ri_1.RiInformationLine, _hover: { color: "primary.500", cursor: "pointer" } })))),
                        react_2.default.createElement(react_1.InputGroup, { size: "sm", w: "60px" },
                            react_2.default.createElement(react_1.Input, Object.assign({ isInvalid: !!errors.slippage, isDisabled: !connected, id: "slippage", borderColor: "gray.200", textAlign: "right", rounded: "lg", placeholder: "0", type: "number", fontWeight: "semibold", step: 1, min: 1, max: 90, paddingRight: 5, paddingLeft: 1 }, register("slippage"))),
                            react_2.default.createElement(react_1.InputRightElement, { zIndex: 0, w: 4, justifyContent: "end", paddingRight: 1.5, rounded: "lg" },
                                react_2.default.createElement(react_1.Text, { margin: 0 }, "%")))),
                    react_2.default.createElement(react_1.Flex, { justify: "space-between", alignItems: "center" },
                        react_2.default.createElement(react_1.Text, null, "Solana Network Fees"),
                        react_2.default.createElement(react_1.Flex, null, fee)),
                    numRemaining && (react_2.default.createElement(react_1.Flex, { justify: "space-between", alignItems: "center" },
                        react_2.default.createElement(react_1.Text, null, "Remaining"),
                        react_2.default.createElement(react_1.Flex, null,
                            numRemaining,
                            " / ",
                            mintCap))),
                    base &&
                        target &&
                        (pricing === null || pricing === void 0 ? void 0 : pricing.hierarchy.path(base.publicKey, target.publicKey).map((h, idx) => (react_2.default.createElement(Royalties_1.Royalties, { key: `royalties-${idx}`, formRef: formRef, tokenBonding: h.tokenBonding, isBuying: !!isBuying })))),
                    (extraTransactionInfo || []).map((i) => (react_2.default.createElement(TransactionInfo_1.TransactionInfo, Object.assign({ formRef: formRef }, i, { key: i.name }))))),
                react_2.default.createElement(react_1.Box, { position: "relative" },
                    react_2.default.createElement(react_1.ScaleFade, { initialScale: 0.9, in: !hasBaseAmount ||
                            moreThanSpendCap ||
                            notLive ||
                            insufficientLiq ||
                            passedMintCap },
                        react_2.default.createElement(react_1.Center, { bgColor: "gray.500", rounded: "md", paddingY: 2, color: "white", w: "full", position: "absolute", top: -10, fontSize: "sm" },
                            passedMintCap && (react_2.default.createElement(react_1.Text, null, numRemaining > 0
                                ? `Only ${numRemaining} left`
                                : "Sold Out")),
                            moreThanSpendCap && (react_2.default.createElement(react_1.Text, null,
                                "You cannot buy more than ",
                                spendCap,
                                " ",
                                base.ticker,
                                " at a time.")),
                            notLive && (react_2.default.createElement(react_1.Text, null,
                                "Goes live at",
                                " ",
                                targetBonding &&
                                    new Date(targetBonding.goLiveUnixTime.toNumber() * 1000).toLocaleString())),
                            !hasBaseAmount && (react_2.default.createElement(react_1.Text, null,
                                "Insufficient funds for this trade.",
                                " ",
                                react_2.default.createElement(react_1.Text, { as: "u" },
                                    react_2.default.createElement(react_1.Link, { color: "primary.100", _hover: { color: "primary.200" }, onClick: handleBuyBase }, `Buy more now.`)))),
                            insufficientLiq && hasBaseAmount && (react_2.default.createElement(react_1.Text, null, "Insufficient Liqidity for this trade.")))),
                    react_2.default.createElement(react_1.Button, { isDisabled: !connected ||
                            !hasBaseAmount ||
                            moreThanSpendCap ||
                            notLive ||
                            insufficientLiq ||
                            passedMintCap, w: "full", colorScheme: "primary", size: "lg", type: "submit", isLoading: awaitingApproval || isSubmitting, loadingText: awaitingApproval ? "Awaiting Approval" : "Swapping" }, "Trade")),
                showAttribution && (react_2.default.createElement(react_1.Center, null,
                    react_2.default.createElement(react_1.HStack, { spacing: 1, fontSize: "14px" },
                        react_2.default.createElement(react_1.Text, { color: attColor }, "Powered by"),
                        react_2.default.createElement(react_1.Link, { href: "https://strataprotocol.com" }, "Strata"))))))));
};
exports.SwapForm = SwapForm;
//# sourceMappingURL=SwapForm.js.map

/***/ }),

/***/ 3363:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionInfo = void 0;
const react_1 = __webpack_require__(8930);
const react_2 = __importDefault(__webpack_require__(6689));
const ri_1 = __webpack_require__(8098);
const TransactionInfo = ({ name, tooltip, amount, formRef, }) => {
    return (react_2.default.createElement(react_1.Flex, { justify: "space-between", alignItems: "center" },
        react_2.default.createElement(react_1.HStack, null,
            react_2.default.createElement(react_1.Text, null, name),
            react_2.default.createElement(react_1.Tooltip, { placement: "top", label: tooltip, portalProps: { containerRef: formRef } },
                react_2.default.createElement(react_1.Flex, null,
                    react_2.default.createElement(react_1.Icon, { w: 5, h: 5, as: ri_1.RiInformationLine, _hover: { color: "indigo.500", cursor: "pointer" } })))),
        react_2.default.createElement(react_1.Flex, null, amount)));
};
exports.TransactionInfo = TransactionInfo;
//# sourceMappingURL=TransactionInfo.js.map

/***/ }),

/***/ 2608:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8010), exports);
__exportStar(__webpack_require__(6318), exports);
__exportStar(__webpack_require__(3419), exports);
__exportStar(__webpack_require__(6274), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3870:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenInfo = void 0;
const react_1 = __webpack_require__(8930);
const react_2 = __importDefault(__webpack_require__(6689));
const react_async_hook_1 = __webpack_require__(3188);
const ri_1 = __webpack_require__(8098);
const hooks_1 = __webpack_require__(8721);
function unwrapTwSol(tokenBondingSdk, account) {
    return __awaiter(this, void 0, void 0, function* () {
        if (tokenBondingSdk) {
            yield tokenBondingSdk.sellBondingWrappedSol({
                amount: 0,
                all: true,
                source: account,
            });
        }
    });
}
exports.TokenInfo = react_2.default.memo(({ tokenWithMeta, onClick, highlighted, }) => {
    const { metadata, image, account } = tokenWithMeta;
    const fiatPrice = (0, hooks_1.usePriceInUsd)(account === null || account === void 0 ? void 0 : account.mint);
    const ownedAmount = (0, hooks_1.useOwnedAmount)(account === null || account === void 0 ? void 0 : account.mint);
    const twSol = (0, hooks_1.useTwWrappedSolMint)();
    const { tokenBondingSdk } = (0, hooks_1.useStrataSdks)();
    const { execute: unwrap, loading, error } = (0, react_async_hook_1.useAsyncCallback)(unwrapTwSol);
    const { handleErrors } = (0, hooks_1.useErrorHandler)();
    handleErrors(error);
    return (react_2.default.createElement(react_1.HStack, { onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick(tokenWithMeta);
        }, alignItems: "center", justify: "space-between", justifyItems: "center", _hover: { opacity: "0.5", cursor: "pointer" }, borderColor: highlighted ? "indigo.500" : undefined, borderWidth: highlighted ? "1px" : undefined, borderRadius: highlighted ? "4px" : undefined },
        react_2.default.createElement(react_1.HStack, { padding: 4, spacing: 3, align: "center" },
            react_2.default.createElement(react_1.Avatar, { name: metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol, src: image }),
            react_2.default.createElement(react_1.Flex, { flexDir: "column" },
                react_2.default.createElement(react_1.Text, null, metadata === null || metadata === void 0 ? void 0 : metadata.data.name),
                react_2.default.createElement(react_1.HStack, { align: "center", spacing: 1 },
                    react_2.default.createElement(react_1.Icon, { as: ri_1.RiCoinLine, w: "16px", h: "16px" }),
                    react_2.default.createElement(react_1.Text, null, ownedAmount === null || ownedAmount === void 0 ? void 0 :
                        ownedAmount.toFixed(2),
                        " ", metadata === null || metadata === void 0 ? void 0 :
                        metadata.data.symbol),
                    react_2.default.createElement(react_1.Text, { color: "gray.500" },
                        "(~$",
                        fiatPrice &&
                            ownedAmount &&
                            (fiatPrice * ownedAmount).toFixed(2),
                        ")")))),
        twSol && account && twSol.equals(account.mint) && (react_2.default.createElement(react_1.Button, { isLoading: loading, onClick: () => unwrap(tokenBondingSdk, account === null || account === void 0 ? void 0 : account.address), colorScheme: "indigo", size: "xs" }, "Unwrap"))));
});
//# sourceMappingURL=TokenInfo.js.map

/***/ }),

/***/ 9057:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenSearch = void 0;
const react_1 = __webpack_require__(8930);
const wallet_adapter_react_1 = __webpack_require__(8659);
const fuse_js_1 = __importDefault(__webpack_require__(2733));
const react_2 = __importStar(__webpack_require__(6689));
const bi_1 = __webpack_require__(6652);
const ri_1 = __webpack_require__(8098);
const hooks_1 = __webpack_require__(8721);
const Spinner_1 = __webpack_require__(1665);
const TokenInfo_1 = __webpack_require__(3870);
const SearchError = ({ title = "", subTitle = "", description = "", }) => {
    return (react_2.default.createElement(react_1.VStack, { px: 8, py: 4, rounded: 4, spacing: 0, border: "1px solid #E1E3E8" },
        react_2.default.createElement(react_1.Icon, { h: "44px", w: "44px", as: ri_1.RiCoinLine, color: "gray.300" }),
        react_2.default.createElement(react_1.Text, { fontWeight: 800, fontSize: "14px" }, title),
        react_2.default.createElement(react_1.Text, { fontSize: "14px" }, subTitle),
        react_2.default.createElement(react_1.Text, { textAlign: "center", mt: 4, fontSize: "14px", color: "gray.500" }, description)));
};
exports.TokenSearch = react_2.default.memo(({ onSelect, placeholder = "Search Tokens", resultsStackProps, onBlur, includeSol = false }) => {
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const { data: tokens, loading } = (0, hooks_1.useUserTokensWithMeta)(publicKey || undefined, includeSol);
    const [search, setSearch] = (0, react_2.useState)("");
    const [focusIndex, setFocusIndex] = (0, react_2.useState)(0);
    const searched = (0, react_2.useMemo)(() => {
        if (tokens) {
            const sorted = tokens === null || tokens === void 0 ? void 0 : tokens.filter((t) => !!t.metadata).sort((a, b) => a.metadata.data.name.localeCompare(b.metadata.data.name));
            if (search) {
                return new fuse_js_1.default(sorted, {
                    keys: ["metadata.data.name", "metadata.data.symbol"],
                    threshold: 0.2,
                })
                    .search(search)
                    .map((result) => result.item);
            }
            else {
                return sorted;
            }
        }
        return [];
    }, [tokens, search]);
    (0, react_2.useEffect)(() => {
        if (searched.length - 1 < focusIndex && searched.length != 0) {
            setFocusIndex(searched.length - 1);
        }
    }, [searched]);
    const tokenInfos = searched.map((tokenWithMeta, index) => {
        var _a;
        return (react_2.default.createElement(TokenInfo_1.TokenInfo, { highlighted: index == focusIndex, key: (_a = tokenWithMeta.publicKey) === null || _a === void 0 ? void 0 : _a.toBase58(), tokenWithMeta: tokenWithMeta, onClick: onSelect }));
    });
    return (react_2.default.createElement(react_1.VStack, { w: "full" },
        react_2.default.createElement(react_1.InputGroup, null,
            react_2.default.createElement(react_1.InputLeftElement, { h: "full", pointerEvents: "none" },
                react_2.default.createElement(react_1.Center, null,
                    react_2.default.createElement(react_1.Icon, { w: "20px", h: "20px", color: "gray.500", as: bi_1.BiSearch }))),
            react_2.default.createElement(react_1.Input, { onBlur: onBlur, autoFocus: true, display: "auto", value: search, onChange: (e) => setSearch(e.target.value), size: "lg", placeholder: placeholder, onKeyDown: (e) => {
                    if (e.key == "Enter" && searched[focusIndex]) {
                        onSelect(searched[focusIndex]);
                    }
                    else if (e.key == "ArrowDown") {
                        setFocusIndex((i) => i == searched.length - 1 ? searched.length - 1 : i + 1);
                    }
                    else if (e.key == "ArrowUp") {
                        setFocusIndex((i) => (i == 0 ? 0 : i - 1));
                    }
                } })),
        react_2.default.createElement(react_1.VStack, Object.assign({}, resultsStackProps, { pt: 2, align: "stretch", divider: react_2.default.createElement(react_1.StackDivider, { borderColor: "gray.200" }), w: "full", justify: "stretch" }),
            tokenInfos,
            loading && react_2.default.createElement(Spinner_1.Spinner, null),
            !loading &&
                (tokenInfos === null || tokenInfos === void 0 ? void 0 : tokenInfos.length) == 0 &&
                (search && search.length > 0 ? (react_2.default.createElement(SearchError, { title: "Could Not Find Token", subTitle: "We couldn't find this token in your wallet.", description: "If you have this token in another wallet, please fund this wallet first." })) : (react_2.default.createElement(SearchError, { title: "No Tokens", subTitle: "It looks like your wallet is empty.", description: "Buy tokens from this wallet first, then they will show up here" }))))));
});
//# sourceMappingURL=TokenSearch.js.map

/***/ }),

/***/ 2281:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Wallet = void 0;
const react_1 = __webpack_require__(8930);
const spl_token_1 = __webpack_require__(9874);
const wallet_adapter_react_1 = __webpack_require__(8659);
const react_2 = __importDefault(__webpack_require__(6689));
const react_hot_toast_1 = __importDefault(__webpack_require__(891));
const ri_1 = __webpack_require__(8098);
const hooks_1 = __webpack_require__(8721);
const Notification_1 = __webpack_require__(8796);
const Spinner_1 = __webpack_require__(1665);
const TokenInfo_1 = __webpack_require__(3870);
const SolLogoIcon = (0, react_1.createIcon)({
    displayName: "Solana",
    viewBox: "0 0 96 96",
    path: [
        react_2.default.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "black" }),
        react_2.default.createElement("path", { d: "M64.8743 43.4897C64.5684 43.1761 64.1536 43 63.7211 43H23.8174C23.0905 43 22.7266 43.9017 23.2408 44.4287L31.1257 52.5103C31.4316 52.8239 31.8464 53 32.2789 53H72.1826C72.9095 53 73.2734 52.0983 72.7592 51.5713L64.8743 43.4897Z", fill: "url(#paint0_linear)" }),
        react_2.default.createElement("path", { d: "M31.1257 58.5352C31.4316 58.2231 31.8464 58.0478 32.2789 58.0478H72.1826C72.9095 58.0478 73.2734 58.9452 72.7592 59.4697L64.8743 67.5126C64.5684 67.8247 64.1536 68 63.7211 68H23.8174C23.0905 68 22.7266 67.1027 23.2408 66.5781L31.1257 58.5352Z", fill: "url(#paint1_linear)" }),
        react_2.default.createElement("path", { d: "M31.1257 28.4874C31.4316 28.1753 31.8464 28 32.2789 28H72.1826C72.9095 28 73.2734 28.8973 72.7592 29.4219L64.8743 37.4648C64.5684 37.7769 64.1536 37.9522 63.7211 37.9522H23.8174C23.0905 37.9522 22.7266 37.0548 23.2408 36.5303L31.1257 28.4874Z", fill: "url(#paint2_linear)" }),
        react_2.default.createElement("defs", null,
            ",",
            react_2.default.createElement("linearGradient", { id: "paint0_linear", x1: "56.8029", y1: "16.975", x2: "28.0661", y2: "70.6352", gradientUnits: "userSpaceOnUse" },
                ",",
                react_2.default.createElement("stop", { stopColor: "#00FFA3" }),
                ",",
                react_2.default.createElement("stop", { offset: "1", stopColor: "#DC1FFF" }),
                ","),
            ",",
            react_2.default.createElement("linearGradient", { id: "paint1_linear", x1: "56.8029", y1: "17.0278", x2: "28.2797", y2: "70.545", gradientUnits: "userSpaceOnUse" },
                ",",
                react_2.default.createElement("stop", { stopColor: "#00FFA3" }),
                ",",
                react_2.default.createElement("stop", { offset: "1", stopColor: "#DC1FFF" }),
                ","),
            ",",
            react_2.default.createElement("linearGradient", { id: "paint2_linear", x1: "56.8029", y1: "17.0278", x2: "28.2797", y2: "70.545", gradientUnits: "userSpaceOnUse" },
                ",",
                react_2.default.createElement("stop", { stopColor: "#00FFA3" }),
                ",",
                react_2.default.createElement("stop", { offset: "1", stopColor: "#DC1FFF" }),
                ","),
            ","),
    ],
});
exports.Wallet = react_2.default.memo(({ wumLeaderboardLink, onSelect, solLink, onSendClick, }) => {
    const { amount: solOwned } = (0, hooks_1.useSolOwnedAmount)();
    const solPrice = (0, hooks_1.usePriceInUsd)(spl_token_1.NATIVE_MINT);
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const { data: tokens, loading, error, } = (0, hooks_1.useUserTokensWithMeta)(publicKey || undefined);
    const { handleErrors } = (0, hooks_1.useErrorHandler)();
    handleErrors(error);
    const twSol = (0, hooks_1.useTwWrappedSolMint)();
    return (react_2.default.createElement(react_1.VStack, { overflow: "auto", align: "stretch", w: "full", h: "full", spacing: 4, padding: 2 },
        react_2.default.createElement(react_1.VStack, { align: "stretch", w: "full", spacing: 4 },
            react_2.default.createElement(react_1.VStack, { pt: 2, align: "stretch", divider: react_2.default.createElement(react_1.StackDivider, { borderColor: "gray.200" }), spacing: 4, w: "full" },
                react_2.default.createElement(react_1.HStack, { direction: "row", justifyContent: "space-evenly", divider: react_2.default.createElement(react_1.StackDivider, { borderColor: "gray.200" }) },
                    react_2.default.createElement(react_1.VStack, { flexGrow: 1, flexBasis: 0, onClick: () => window.open(solLink, "_blank"), _hover: { opacity: "0.5", cursor: "pointer" }, spacing: 1, flexDir: "column", align: "center" },
                        react_2.default.createElement(react_1.Icon, { as: SolLogoIcon, w: "48px", h: "48px" }),
                        react_2.default.createElement(react_1.HStack, { align: "center", spacing: 1 },
                            react_2.default.createElement(react_1.Icon, { as: ri_1.RiCoinLine, w: "16px", h: "16px" }),
                            react_2.default.createElement(react_1.Text, { fontWeight: 600 }, solOwned === null || solOwned === void 0 ? void 0 :
                                solOwned.toFixed(2),
                                " SOL"),
                            react_2.default.createElement(react_1.Text, { fontWeight: 600, color: "gray.500" },
                                "(~$",
                                ((solPrice || 0) * solOwned).toFixed(2),
                                ")"))))),
            react_2.default.createElement(react_1.SimpleGrid, { spacing: 2, columns: 2 },
                react_2.default.createElement(react_1.Button, { flexGrow: 1, colorScheme: "indigo", onClick: () => {
                        navigator.clipboard.writeText((publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58()) || "");
                        react_hot_toast_1.default.custom((t) => (react_2.default.createElement(Notification_1.Notification, { show: t.visible, type: "info", heading: "Copied to Clipboard", message: publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), onDismiss: () => react_hot_toast_1.default.dismiss(t.id) })));
                    } }, "Receive"),
                react_2.default.createElement(react_1.Button, { onClick: onSendClick, flexGrow: 1, w: "full", colorScheme: "indigo" }, "Send"))),
        react_2.default.createElement(react_1.VStack, { align: "stretch", w: "full", spacing: 0, mt: loading ? 0 : -4, divider: react_2.default.createElement(react_1.StackDivider, { borderColor: "gray.200" }) },
            loading && (react_2.default.createElement(react_1.Center, null,
                react_2.default.createElement(Spinner_1.Spinner, { size: "lg" }))),
            !loading &&
                (tokens === null || tokens === void 0 ? void 0 : tokens.filter((t) => { var _a; return !!t.metadata && ((_a = t.mint) === null || _a === void 0 ? void 0 : _a.decimals) != 0; }).sort((a, b) => twSol && a.account.mint.equals(twSol)
                    ? -1
                    : twSol && b.account.mint.equals(twSol)
                        ? 1
                        : a.metadata.data.name.localeCompare(b.metadata.data.name)).map((tokenWithMeta) => {
                    var _a;
                    return (react_2.default.createElement(TokenInfo_1.TokenInfo, { key: (_a = tokenWithMeta.publicKey) === null || _a === void 0 ? void 0 : _a.toBase58(), tokenWithMeta: tokenWithMeta, onClick: onSelect }));
                })))));
});
//# sourceMappingURL=Wallet.js.map

/***/ }),

/***/ 4040:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3870), exports);
__exportStar(__webpack_require__(2281), exports);
__exportStar(__webpack_require__(9057), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5104:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2608), exports);
__exportStar(__webpack_require__(1665), exports);
__exportStar(__webpack_require__(8796), exports);
__exportStar(__webpack_require__(5787), exports);
__exportStar(__webpack_require__(4040), exports);
__exportStar(__webpack_require__(1520), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8404:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_COMMITMENT = void 0;
exports.DEFAULT_COMMITMENT = "processed";
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 4289:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8404), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8691:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountProvider = exports.AccountContext = void 0;
const react_1 = __importStar(__webpack_require__(6689));
const spl_utils_1 = __webpack_require__(4022);
const constants_1 = __webpack_require__(4289);
const wallet_adapter_react_1 = __webpack_require__(8659);
exports.AccountContext = (0, react_1.createContext)(undefined);
const AccountProvider = ({ children, commitment = constants_1.DEFAULT_COMMITMENT, extendConnection = true, }) => {
    const { connection } = (0, wallet_adapter_react_1.useConnection)();
    const cache = (0, react_1.useMemo)(() => {
        return connection && new spl_utils_1.AccountFetchCache({
            connection,
            delay: 500,
            commitment,
            extendConnection,
        });
    }, [connection]);
    return (react_1.default.createElement(exports.AccountContext.Provider, { value: cache }, children));
    return null;
};
exports.AccountProvider = AccountProvider;
//# sourceMappingURL=accountContext.js.map

/***/ }),

/***/ 2002:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorHandlerProvider = exports.ErrorHandlerContext = void 0;
const react_1 = __importStar(__webpack_require__(6689));
const utils_1 = __webpack_require__(6057);
exports.ErrorHandlerContext = (0, react_1.createContext)({});
const ErrorHandlerProvider = ({ children, onError = (error) => console.log(error), }) => {
    const sentErrors = new Set();
    const handleErrors = (0, react_1.useCallback)((...errors) => __awaiter(void 0, void 0, void 0, function* () {
        const actualErrors = [...new Set(errors.filter(utils_1.truthy))].filter((e) => !sentErrors.has(e));
        actualErrors.forEach(sentErrors.add.bind(sentErrors));
        actualErrors.map(onError);
    }), [onError]);
    return (react_1.default.createElement(exports.ErrorHandlerContext.Provider, { value: {
            handleErrors,
        } }, children));
};
exports.ErrorHandlerProvider = ErrorHandlerProvider;
//# sourceMappingURL=errorHandlerContext.js.map

/***/ }),

/***/ 8255:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2486), exports);
__exportStar(__webpack_require__(8691), exports);
__exportStar(__webpack_require__(2002), exports);
__exportStar(__webpack_require__(9657), exports);
__exportStar(__webpack_require__(3843), exports);
__exportStar(__webpack_require__(1440), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6938:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProviderContextProvider = exports.ProviderContext = void 0;
const anchor_1 = __webpack_require__(1024);
const wallet_adapter_react_1 = __webpack_require__(8659);
const web3_js_1 = __webpack_require__(7831);
const react_1 = __importDefault(__webpack_require__(6689));
exports.ProviderContext = react_1.default.createContext({
    awaitingApproval: false,
});
const ProviderContextProvider = ({ children }) => {
    const { connection } = (0, wallet_adapter_react_1.useConnection)();
    const { wallet } = (0, wallet_adapter_react_1.useWallet)();
    const [awaitingApproval, setAwaitingApproval] = react_1.default.useState(false);
    const provider = react_1.default.useMemo(() => {
        if (connection) {
            // Let adapter be null, it'll fail if anyone issues transaction commands but will let fetch go through
            // @ts-ignore
            const provider = new anchor_1.Provider(connection, wallet === null || wallet === void 0 ? void 0 : wallet.adapter, {});
            // The default impl of send does not use the transaction resuling from wallet.signTransaciton. So we need to fix it.
            provider.send = function FixedSend(tx, signers, opts) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (signers === undefined) {
                        signers = [];
                    }
                    if (opts === undefined) {
                        opts = this.opts;
                    }
                    tx.feePayer = this.wallet.publicKey;
                    tx.recentBlockhash = (yield this.connection.getRecentBlockhash(opts.preflightCommitment)).blockhash;
                    setAwaitingApproval(true);
                    try {
                        const signed = yield this.wallet.signTransaction(tx);
                        setAwaitingApproval(false);
                        signers
                            .filter((s) => s !== undefined)
                            .forEach((kp) => {
                            signed.partialSign(kp);
                        });
                        const rawTx = signed.serialize();
                        const txId = yield (0, web3_js_1.sendAndConfirmRawTransaction)(connection, rawTx, opts);
                        return txId;
                    }
                    finally {
                        setAwaitingApproval(false);
                    }
                });
            };
            return provider;
        }
    }, [connection, wallet]);
    return (react_1.default.createElement(exports.ProviderContext.Provider, { value: { awaitingApproval, provider } }, children));
};
exports.ProviderContextProvider = ProviderContextProvider;
//# sourceMappingURL=providerContext.js.map

/***/ }),

/***/ 9657:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolPriceProvider = exports.SolPriceContext = void 0;
const react_1 = __importStar(__webpack_require__(6689));
const hooks_1 = __webpack_require__(8721);
const web3_js_1 = __webpack_require__(7831);
exports.SolPriceContext = (0, react_1.createContext)(undefined);
const SOL_TO_USD_MARKET = new web3_js_1.PublicKey("9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT");
const SolPriceProvider = ({ children }) => {
    const coinGeckoPrice = (0, hooks_1.useCoinGeckoPrice)();
    const marketPrice = (0, hooks_1.useMarketPrice)(SOL_TO_USD_MARKET);
    return (react_1.default.createElement(exports.SolPriceContext.Provider, { value: marketPrice || coinGeckoPrice }, children));
};
exports.SolPriceProvider = SolPriceProvider;
//# sourceMappingURL=solPrice.js.map

/***/ }),

/***/ 2486:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StrataSdksProvider = exports.StrataSdksProviderRaw = exports.StrataSdksContext = void 0;
const spl_token_bonding_1 = __webpack_require__(9587);
const spl_token_collective_1 = __webpack_require__(6394);
const spl_utils_1 = __webpack_require__(4022);
const react_1 = __importStar(__webpack_require__(6689));
const react_async_hook_1 = __webpack_require__(3188);
const useProvider_1 = __webpack_require__(3056);
const providerContext_1 = __webpack_require__(6938);
exports.StrataSdksContext = react_1.default.createContext({
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
function getSdks(provider) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!provider) {
            return {};
        }
        const [tokenCollective, tokenBonding, splTokenMetadataSdk] = ((yield tryProm(Promise.all([
            spl_token_collective_1.SplTokenCollective.init(provider),
            spl_token_bonding_1.SplTokenBonding.init(provider),
            spl_utils_1.SplTokenMetadata.init(provider)
        ]))) || []);
        return {
            tokenCollectiveSdk: tokenCollective,
            tokenBondingSdk: tokenBonding,
            tokenMetadataSdk: splTokenMetadataSdk,
        };
    });
}
const StrataSdksProviderRaw = ({ children }) => {
    const { provider } = (0, useProvider_1.useProvider)();
    const { result, loading, error } = (0, react_async_hook_1.useAsync)(getSdks, [provider]);
    const sdks = (0, react_1.useMemo)(() => ({
        tokenCollectiveSdk: result === null || result === void 0 ? void 0 : result.tokenCollectiveSdk,
        tokenBondingSdk: result === null || result === void 0 ? void 0 : result.tokenBondingSdk,
        tokenMetadataSdk: result === null || result === void 0 ? void 0 : result.tokenMetadataSdk,
        error,
        loading,
    }), [result, loading, error, provider]);
    return (react_1.default.createElement(exports.StrataSdksContext.Provider, { value: sdks }, children));
};
exports.StrataSdksProviderRaw = StrataSdksProviderRaw;
const StrataSdksProvider = ({ children }) => {
    return (react_1.default.createElement(providerContext_1.ProviderContextProvider, null,
        react_1.default.createElement(exports.StrataSdksProviderRaw, null, children)));
};
exports.StrataSdksProvider = StrataSdksProvider;
//# sourceMappingURL=strataSdkContext.js.map

/***/ }),

/***/ 3843:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThemeProvider = exports.theme = void 0;
const react_1 = __importDefault(__webpack_require__(6689));
const react_2 = __webpack_require__(8930);
const primary = {
    50: "#fdefe7",
    100: "#fbd6c2",
    200: "#f8bb99",
    300: "#f5a070",
    400: "#f28b52",
    500: "#f07733",
    600: "#ee6f2e",
    700: "#ec6427",
    800: "#e95a20",
    900: "#e54714",
};
exports.theme = (0, react_2.extendTheme)({
    shadows: {
        outline: "none",
    },
    initialColorMode: "light",
    useSystemColorMode: false,
    components: {
        Button: {
            baseStyle: { _focus: { boxShadow: "none" } },
        },
        Input: {
            variants: {
                outline: {
                    field: {
                        borderColor: "#E5E7EB",
                    },
                },
            },
        },
    },
    colors: {
        gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
        },
        green: {
            50: "#ECFDF5",
            100: "#D1FAE5",
            200: "#A7F3D0",
            300: "#6EE7B7",
            400: "#34D399",
            500: "#10B981",
            600: "#059669",
            700: "#047857",
            800: "#065F46",
            900: "#064E3B",
        },
        indigo: {
            50: "#E0E7FF",
            100: "#C7D2FE",
            200: "#A5B4FC",
            300: "#818CF8",
            400: "#6366F1",
            500: "#4F46E5",
            600: "#4338CA",
            700: "#3730A3",
            800: "#312E81",
            900: "#23215e",
        },
        black: {
            300: "#23273B",
            500: "#0F1324",
            700: "#363135",
        },
        orange: primary,
        primary,
    },
});
const ThemeProvider = ({ children }) => (
// @ts-ignore
react_1.default.createElement(react_2.ThemeProvider, { theme: exports.theme }, children));
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=theme.js.map

/***/ }),

/***/ 1440:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenListProvider = exports.TokenListContext = void 0;
const spl_token_registry_1 = __webpack_require__(9263);
const react_1 = __importStar(__webpack_require__(6689));
exports.TokenListContext = react_1.default.createContext(undefined);
const TokenListProvider = ({ children }) => {
    const [tokenMap, setTokenMap] = (0, react_1.useState)(new Map());
    (0, react_1.useEffect)(() => {
        new spl_token_registry_1.TokenListProvider().resolve().then((tokens) => {
            const tokenList = tokens.filterByChainId(spl_token_registry_1.ENV.MainnetBeta).getList();
            setTokenMap(tokenList.reduce((map, item) => {
                map.set(item.address, item);
                return map;
            }, new Map()));
        });
    }, [setTokenMap]);
    return react_1.default.createElement(exports.TokenListContext.Provider, { value: tokenMap }, children);
};
exports.TokenListProvider = TokenListProvider;
//# sourceMappingURL=tokenList.js.map

/***/ }),

/***/ 3073:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useBondingPricingFromMint = exports.useBondingPricing = exports.useOwnedAmount = exports.useUserOwnedAmount = exports.useSolOwnedAmount = exports.amountAsNum = exports.supplyAsNum = void 0;
const spl_token_1 = __webpack_require__(9874);
const wallet_adapter_react_1 = __webpack_require__(8659);
const spl_token_bonding_1 = __webpack_require__(9587);
const index_1 = __webpack_require__(8721);
const react_1 = __importStar(__webpack_require__(6689));
const react_async_hook_1 = __webpack_require__(3188);
const index_2 = __webpack_require__(8721);
const useAccount_1 = __webpack_require__(9749);
const useAssociatedAccount_1 = __webpack_require__(7557);
const useMint_1 = __webpack_require__(9802);
const useTwWrappedSolMint_1 = __webpack_require__(4353);
function supplyAsNum(mint) {
    return amountAsNum(mint.supply, mint);
}
exports.supplyAsNum = supplyAsNum;
function amountAsNum(amount, mint) {
    const decimals = new spl_token_1.u64(Math.pow(10, mint.decimals).toString());
    const decimal = amount.mod(decimals).toNumber() / decimals.toNumber();
    return amount.div(decimals).toNumber() + decimal;
}
exports.amountAsNum = amountAsNum;
function useSolOwnedAmount(ownerPublicKey) {
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    if (!ownerPublicKey) {
        ownerPublicKey = publicKey || undefined;
    }
    const { info: lamports, loading } = (0, useAccount_1.useAccount)(ownerPublicKey, (_, account) => account.lamports);
    const result = react_1.default.useMemo(() => (lamports || 0) / Math.pow(10, 9), [lamports]);
    return {
        amount: result,
        loading,
    };
}
exports.useSolOwnedAmount = useSolOwnedAmount;
function useUserOwnedAmount(wallet, token) {
    const { amount: solOwnedAmount } = useSolOwnedAmount(wallet || undefined);
    const { associatedAccount, loading: loadingAssoc } = (0, useAssociatedAccount_1.useAssociatedAccount)(wallet, token);
    const wrappedSolMint = (0, useTwWrappedSolMint_1.useTwWrappedSolMint)();
    const mint = (0, useMint_1.useMint)(token);
    const [amount, setAmount] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        if ((token === null || token === void 0 ? void 0 : token.equals(spl_token_1.NATIVE_MINT)) ||
            (wrappedSolMint && (token === null || token === void 0 ? void 0 : token.equals(wrappedSolMint)))) {
            setAmount(solOwnedAmount);
        }
        else if (mint && associatedAccount) {
            setAmount(amountAsNum(associatedAccount.amount, mint));
        }
        else if (mint && !associatedAccount && !loadingAssoc) {
            setAmount(0);
        }
    }, [loadingAssoc, associatedAccount, mint, solOwnedAmount, wrappedSolMint]);
    return typeof amount === "undefined" ? amount : Number(amount);
}
exports.useUserOwnedAmount = useUserOwnedAmount;
function useOwnedAmount(token) {
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    return useUserOwnedAmount(publicKey || undefined, token);
}
exports.useOwnedAmount = useOwnedAmount;
/**
 * Get an {@link IPricingCurve} Object that can estimate pricing on this bonding curve,
 * in real time.
 *
 * @param tokenBonding
 * @returns
 */
function useBondingPricing(tokenBonding) {
    const { tokenBondingSdk } = (0, index_2.useStrataSdks)();
    const { info: tokenBondingAcct } = (0, index_1.useTokenBonding)(tokenBonding);
    const { info: reserves } = (0, index_1.useTokenAccount)(tokenBondingAcct === null || tokenBondingAcct === void 0 ? void 0 : tokenBondingAcct.baseStorage);
    const targetMint = (0, useMint_1.useMint)(tokenBondingAcct === null || tokenBondingAcct === void 0 ? void 0 : tokenBondingAcct.targetMint);
    const getPricing = (tokenBondingSdk, key, reserves, // Make the pricing be re-fetched whenever the reserves change.
    mint // Make the pricing be re-fetched whenever the supply change. This doesn't account for
    // collective changes, but will due for now. TODO: Account for collective changes too
    ) => __awaiter(this, void 0, void 0, function* () { return tokenBondingSdk && key && tokenBondingSdk.getPricing(key); });
    const { result: pricing, loading, error, } = (0, react_async_hook_1.useAsync)(getPricing, [
        tokenBondingSdk,
        tokenBonding,
        reserves,
        targetMint,
    ]);
    return {
        pricing: pricing || undefined,
        tokenBonding: tokenBondingAcct,
        loading,
        error,
    };
}
exports.useBondingPricing = useBondingPricing;
const tokenBondingKey = (mint, index) => __awaiter(void 0, void 0, void 0, function* () { return mint && (yield spl_token_bonding_1.SplTokenBonding.tokenBondingKey(mint, index))[0]; });
/**
 * Same as {@link useBondingPricing}, just from a mint instead of the token bonding key
 *
 * @param mint
 * @param index
 * @returns
 */
function useBondingPricingFromMint(mint, index) {
    const { result: key, loading } = (0, react_async_hook_1.useAsync)(tokenBondingKey, [
        mint,
        index || 0,
    ]);
    const bondingPricing = useBondingPricing(key);
    return Object.assign(Object.assign({}, bondingPricing), { loading: bondingPricing.loading || loading });
}
exports.useBondingPricingFromMint = useBondingPricingFromMint;
//# sourceMappingURL=bondingPricing.js.map

/***/ }),

/***/ 8721:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(4248), exports);
__exportStar(__webpack_require__(9801), exports);
__exportStar(__webpack_require__(2333), exports);
__exportStar(__webpack_require__(4268), exports);
__exportStar(__webpack_require__(2785), exports);
__exportStar(__webpack_require__(9749), exports);
__exportStar(__webpack_require__(8981), exports);
__exportStar(__webpack_require__(3056), exports);
__exportStar(__webpack_require__(1275), exports);
__exportStar(__webpack_require__(7557), exports);
__exportStar(__webpack_require__(9139), exports);
__exportStar(__webpack_require__(9802), exports);
__exportStar(__webpack_require__(4512), exports);
__exportStar(__webpack_require__(8881), exports);
__exportStar(__webpack_require__(6269), exports);
__exportStar(__webpack_require__(8981), exports);
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(5867), exports);
__exportStar(__webpack_require__(250), exports);
__exportStar(__webpack_require__(3073), exports);
__exportStar(__webpack_require__(9157), exports);
__exportStar(__webpack_require__(6096), exports);
__exportStar(__webpack_require__(3617), exports);
__exportStar(__webpack_require__(8777), exports);
__exportStar(__webpack_require__(1966), exports);
__exportStar(__webpack_require__(8360), exports);
__exportStar(__webpack_require__(646), exports);
__exportStar(__webpack_require__(1054), exports);
__exportStar(__webpack_require__(2584), exports);
__exportStar(__webpack_require__(8713), exports);
__exportStar(__webpack_require__(7390), exports);
__exportStar(__webpack_require__(6610), exports);
__exportStar(__webpack_require__(4974), exports);
__exportStar(__webpack_require__(4353), exports);
__exportStar(__webpack_require__(2308), exports);
__exportStar(__webpack_require__(2260), exports);
__exportStar(__webpack_require__(5390), exports);
__exportStar(__webpack_require__(1011), exports);
__exportStar(__webpack_require__(5877), exports);
__exportStar(__webpack_require__(8152), exports);
__exportStar(__webpack_require__(1478), exports);
__exportStar(__webpack_require__(4679), exports);
__exportStar(__webpack_require__(679), exports);
__exportStar(__webpack_require__(9264), exports);
__exportStar(__webpack_require__(9333), exports);
__exportStar(__webpack_require__(1280), exports);
__exportStar(__webpack_require__(6495), exports);
__exportStar(__webpack_require__(2048), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1011:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useNameOwner = exports.useReverseName = exports.reverseNameLookup = void 0;
const spl_name_service_1 = __webpack_require__(5525);
const wallet_adapter_react_1 = __webpack_require__(8659);
const _1 = __webpack_require__(8721);
const borsh_1 = __webpack_require__(3871);
const react_async_hook_1 = __webpack_require__(3188);
function reverseNameLookup(connection, owner, verifier, tld) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedName = yield (0, spl_name_service_1.getHashedName)(owner.toString());
        const key = yield (0, spl_name_service_1.getNameAccountKey)(hashedName, verifier, tld);
        const reverseAccount = yield connection.getAccountInfo(key);
        if (!reverseAccount) {
            throw new Error("Invalid reverse account provided");
        }
        return (0, borsh_1.deserialize)(spl_name_service_1.ReverseTwitterRegistryState.schema, spl_name_service_1.ReverseTwitterRegistryState, reverseAccount.data.slice(spl_name_service_1.NameRegistryState.HEADER_LEN));
    });
}
exports.reverseNameLookup = reverseNameLookup;
function getNameString(connection, owner, verifier, tld) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!owner) {
            return;
        }
        return (yield reverseNameLookup(connection, owner, verifier, tld))
            .twitterHandle;
    });
}
function getHashedNameNullable(owner) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!owner) {
            return undefined;
        }
        return (0, spl_name_service_1.getHashedName)(owner.toString());
    });
}
function getNameAccountKeyNullable(hashedName, verifier, tld) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!hashedName) {
            return undefined;
        }
        return (0, spl_name_service_1.getNameAccountKey)(hashedName, verifier, tld);
    });
}
function useReverseName(owner, verifier, tld) {
    const { connection } = (0, wallet_adapter_react_1.useConnection)();
    const { result: hashedName, error: nameError, loading: loading1, } = (0, react_async_hook_1.useAsync)(getHashedNameNullable, [owner]);
    const { result: key, error: keyError, loading: loading2, } = (0, react_async_hook_1.useAsync)(getNameAccountKeyNullable, [hashedName, verifier, tld]);
    const { info: reverseAccount } = (0, _1.useAccount)(key, (key, acct) => {
        return (0, borsh_1.deserialize)(spl_name_service_1.ReverseTwitterRegistryState.schema, spl_name_service_1.ReverseTwitterRegistryState, acct.data.slice(spl_name_service_1.NameRegistryState.HEADER_LEN));
    });
    return {
        loading: loading1 || loading2,
        error: nameError || keyError,
        // @ts-ignore
        nameString: reverseAccount === null || reverseAccount === void 0 ? void 0 : reverseAccount.twitterHandle,
    };
}
exports.useReverseName = useReverseName;
function useNameOwner(nameString, tld) {
    const cache = (0, _1.useAccountFetchCache)();
    const { loading, error, result: owner, } = (0, react_async_hook_1.useAsync)(_1.getOwnerForName, [cache || undefined, nameString, tld]);
    return {
        loading,
        error,
        owner,
    };
}
exports.useNameOwner = useNameOwner;
//# sourceMappingURL=nameService.js.map

/***/ }),

/***/ 2333:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useSocialTokenMetadata = exports.useTokenRefForName = exports.usePrimaryClaimedTokenRef = exports.useMintTokenRef = exports.useTokenRefFromBonding = exports.useClaimedTokenRefKey = exports.useClaimedTokenRefKeyForName = exports.useUnclaimedTokenRefKeyForName = exports.getUnclaimedTokenRefKeyForName = exports.getClaimedTokenRefKeyForName = exports.getOwnerForName = void 0;
const spl_name_service_1 = __webpack_require__(5525);
const wallet_adapter_react_1 = __webpack_require__(8659);
const spl_token_collective_1 = __webpack_require__(6394);
const react_1 = __webpack_require__(6689);
const react_async_hook_1 = __webpack_require__(3188);
const hooks_1 = __webpack_require__(8721);
const useAccountFetchCache_1 = __webpack_require__(2785);
const nameServiceTwitter_1 = __webpack_require__(5454);
const useTokenMetadata_1 = __webpack_require__(6269);
const borsh_1 = __webpack_require__(3871);
function getOwnerForName(cache, handle, tld) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = handle && (yield (0, nameServiceTwitter_1.getTwitterRegistryKey)(handle, tld));
        if (key && cache) {
            const [registry, dispose] = yield cache.searchAndWatch(key, (pubkey, account) => {
                const info = (0, borsh_1.deserializeUnchecked)(spl_name_service_1.NameRegistryState.schema, spl_name_service_1.NameRegistryState, account.data);
                return {
                    pubkey,
                    account,
                    info,
                };
            }, true);
            setTimeout(dispose, 30 * 1000); // Keep this state around for 30s
            return registry === null || registry === void 0 ? void 0 : registry.info.owner;
        }
    });
}
exports.getOwnerForName = getOwnerForName;
function getClaimedTokenRefKeyForName(cache, handle, mint = undefined, tld) {
    return __awaiter(this, void 0, void 0, function* () {
        const owner = yield getOwnerForName(cache, handle, tld);
        if (owner) {
            return (yield spl_token_collective_1.SplTokenCollective.ownerTokenRefKey({
                owner,
                mint,
            }))[0];
        }
    });
}
exports.getClaimedTokenRefKeyForName = getClaimedTokenRefKeyForName;
function getUnclaimedTokenRefKeyForName(handle, mint, tld) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = yield (0, nameServiceTwitter_1.getTwitterRegistryKey)(handle, tld);
        return (yield spl_token_collective_1.SplTokenCollective.ownerTokenRefKey({
            name,
            mint: mint || spl_token_collective_1.SplTokenCollective.OPEN_COLLECTIVE_MINT_ID,
        }))[0];
    });
}
exports.getUnclaimedTokenRefKeyForName = getUnclaimedTokenRefKeyForName;
const useUnclaimedTokenRefKeyForName = (name, mint, tld) => {
    const { connection } = (0, wallet_adapter_react_1.useConnection)();
    const { result: key, loading } = (0, react_async_hook_1.useAsync)((name, mint, tld) => __awaiter(void 0, void 0, void 0, function* () {
        if (connection && name) {
            return getUnclaimedTokenRefKeyForName(name, mint, tld);
        }
    }), [name, mint, tld]);
    return { result: key, loading };
};
exports.useUnclaimedTokenRefKeyForName = useUnclaimedTokenRefKeyForName;
const useClaimedTokenRefKeyForName = (name, mint, tld) => {
    const cache = (0, useAccountFetchCache_1.useAccountFetchCache)();
    const { result: key, loading, error } = (0, react_async_hook_1.useAsync)((cache, name, mint, tld) => __awaiter(void 0, void 0, void 0, function* () {
        if (cache && name && tld) {
            return getClaimedTokenRefKeyForName(cache, name, mint, tld);
        }
    }), [cache, name, mint, tld]);
    return { result: key, loading, error };
};
exports.useClaimedTokenRefKeyForName = useClaimedTokenRefKeyForName;
const useClaimedTokenRefKey = (owner, mint) => {
    const { result } = (0, react_async_hook_1.useAsync)((owner) => __awaiter(void 0, void 0, void 0, function* () { return owner && spl_token_collective_1.SplTokenCollective.ownerTokenRefKey({ owner, mint }); }), [owner]);
    return result ? result[0] : undefined;
};
exports.useClaimedTokenRefKey = useClaimedTokenRefKey;
/**
 * Get a token ref from the bonding instance
 *
 * @param tokenBonding
 * @returns
 */
function useTokenRefFromBonding(tokenBonding) {
    const bonding = (0, hooks_1.useTokenBonding)(tokenBonding);
    const { result: key } = (0, react_async_hook_1.useAsync)((bonding) => __awaiter(this, void 0, void 0, function* () { return bonding && spl_token_collective_1.SplTokenCollective.mintTokenRefKey(bonding.targetMint); }), [bonding.info]);
    return (0, hooks_1.useTokenRef)(key && key[0]);
}
exports.useTokenRefFromBonding = useTokenRefFromBonding;
/**
 * Given a social token mint, get the social token TokenRef
 *
 * @param mint
 * @returns
 */
function useMintTokenRef(mint) {
    const { result: key } = (0, react_async_hook_1.useAsync)((mint) => __awaiter(this, void 0, void 0, function* () { return mint && spl_token_collective_1.SplTokenCollective.mintTokenRefKey(mint); }), [mint]);
    return (0, hooks_1.useTokenRef)(key && key[0]);
}
exports.useMintTokenRef = useMintTokenRef;
/**
 * Get the token ref for this wallet
 * @param owner
 * @returns
 */
function usePrimaryClaimedTokenRef(owner) {
    const key = (0, exports.useClaimedTokenRefKey)(owner, null);
    return (0, hooks_1.useTokenRef)(key);
}
exports.usePrimaryClaimedTokenRef = usePrimaryClaimedTokenRef;
/**
 * Get a TokenRef using a twitter handle name service lookup on `name`. Searches for `name`, then grabs the owner.
 *
 * If the name is unclaimed, grabs the unclaimed token ref if it exists
 *
 * @param name
 * @param mint
 * @param tld
 * @returns
 */
const useTokenRefForName = (name, mint, tld) => {
    const { result: claimedKey, loading: twitterLoading, error } = (0, exports.useClaimedTokenRefKeyForName)(name, mint, tld);
    if (error) {
        console.error(error);
    }
    const { result: unclaimedKey, loading: claimedLoading } = (0, exports.useUnclaimedTokenRefKeyForName)(name, mint, tld);
    const claimed = (0, hooks_1.useTokenRef)(claimedKey);
    const unclaimed = (0, hooks_1.useTokenRef)(unclaimedKey);
    const result = (0, react_1.useMemo)(() => {
        if (claimed.info) {
            return claimed;
        }
        return unclaimed;
    }, [claimed === null || claimed === void 0 ? void 0 : claimed.info, unclaimed === null || unclaimed === void 0 ? void 0 : unclaimed.info, claimed.loading, unclaimed.loading]);
    const loading = (0, react_1.useMemo)(() => {
        return (twitterLoading ||
            claimedLoading ||
            claimed.loading ||
            unclaimed.loading);
    }, [
        twitterLoading,
        claimedLoading,
        claimed,
        unclaimed,
    ]);
    return Object.assign(Object.assign({}, result), { loading });
};
exports.useTokenRefForName = useTokenRefForName;
/**
 * Get all metadata associated with a given wallet's social token.
 *
 * @param ownerOrTokenRef
 * @returns
 */
function useSocialTokenMetadata(ownerOrTokenRef) {
    const { info: tokenRef1, loading: loading1 } = usePrimaryClaimedTokenRef(ownerOrTokenRef);
    const { info: tokenRef2, loading: loading2 } = (0, hooks_1.useTokenRef)(ownerOrTokenRef);
    const tokenRef = tokenRef1 || tokenRef2;
    const { info: tokenBonding, loading: loading3 } = (0, hooks_1.useTokenBonding)((tokenRef === null || tokenRef === void 0 ? void 0 : tokenRef.tokenBonding) || undefined);
    return Object.assign(Object.assign({}, (0, useTokenMetadata_1.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint)), { tokenRef,
        tokenBonding, loading: loading1 || loading2 || loading3 });
}
exports.useSocialTokenMetadata = useSocialTokenMetadata;
//# sourceMappingURL=tokenRef.js.map

/***/ }),

/***/ 9749:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAccount = void 0;
const react_1 = __webpack_require__(6689);
const hooks_1 = __webpack_require__(8721);
/**
 * Generic hook to get a cached, auto updating, deserialized form of any Solana account. Massively saves on RPC usage by using
 * the spl-utils accountFetchCache.
 *
 * @param key
 * @param parser
 * @param isStatic
 * @returns
 */
function useAccount(key, parser, isStatic = false // Set if the accounts data will never change, optimisation to lower websocket usage.
) {
    const cache = (0, hooks_1.useAccountFetchCache)();
    const [state, setState] = (0, react_1.useState)({
        loading: true,
    });
    const parsedAccountBaseParser = (pubkey, data) => {
        try {
            const info = parser(pubkey, data);
            return {
                pubkey,
                account: data,
                info,
            };
        }
        catch (e) {
            console.error("Error while parsing", e);
            return {
                pubkey,
                account: data,
                info: undefined,
            };
        }
    };
    const id = typeof key === "string" ? key : key === null || key === void 0 ? void 0 : key.toBase58();
    (0, react_1.useEffect)(() => {
        // Occassionally, dispose can get called while the cache promise is still going.
        // In that case, we want to dispose immediately.
        let shouldDisposeImmediately = false;
        let disposeWatch = () => {
            shouldDisposeImmediately = true;
        };
        if (!id || !cache) {
            setState({ loading: false });
            return;
        }
        else {
            setState({ loading: true });
        }
        cache
            .searchAndWatch(id, parser ? parsedAccountBaseParser : undefined, isStatic)
            .then(([acc, dispose]) => {
            if (shouldDisposeImmediately) {
                dispose();
                shouldDisposeImmediately = false;
            }
            disposeWatch = dispose;
            if (acc) {
                setState(({ info }) => {
                    try {
                        return {
                            loading: false,
                            info: mergePublicKeys(info, (parser && parser(acc.pubkey, acc.account))),
                            account: acc.account,
                        };
                    }
                    catch (e) {
                        console.error("Error while parsing", e);
                        return {
                            loading: false,
                            info: undefined,
                            account: acc.account,
                        };
                    }
                });
            }
            else {
                setState({ loading: false });
            }
        })
            .catch((e) => {
            console.error(e);
            setState({ loading: false });
        });
        const disposeEmitter = cache.emitter.onCache((e) => {
            const event = e;
            if (event.id === id) {
                cache
                    .search(id, parser ? parsedAccountBaseParser : undefined)
                    .then((acc) => {
                    if (acc && acc.account != state.account) {
                        try {
                            setState({
                                loading: false,
                                info: mergePublicKeys(state.info, parser && parser(acc.pubkey, acc.account)),
                                account: acc.account,
                            });
                        }
                        catch (e) {
                            console.error("Error while parsing", e);
                            setState({
                                loading: false,
                                info: undefined,
                                account: acc.account,
                            });
                        }
                    }
                });
            }
        });
        return () => {
            disposeEmitter();
            setTimeout(disposeWatch, 30 * 1000); // Keep cached accounts around for 30s in case a rerender is causing reuse
        };
    }, [cache, id, !parser]); // only trigger on change to parser if it wasn't defined before.
    return state;
}
exports.useAccount = useAccount;
function isPureObject(input) {
    return (null !== input &&
        typeof input === "object" &&
        Object.getPrototypeOf(input).isPrototypeOf(Object));
}
/**
 * Updates to a solana account will contain new PublicKeys that are
 * actually the same, just a new JS object. This will cause a lot of useMemo
 * to fail.
 */
function mergePublicKeys(arg0, arg1) {
    if (!isPureObject(arg1) || !arg1 || !arg0) {
        return arg1;
    }
    return Object.entries(arg1).reduce((acc, [key, value]) => {
        if (arg1[key] &&
            arg1[key].equals &&
            arg0[key] &&
            arg1[key].equals(arg0[key])) {
            acc[key] = arg0[key];
        }
        else {
            acc[key] = value;
        }
        return acc;
    }, {});
}
//# sourceMappingURL=useAccount.js.map

/***/ }),

/***/ 2785:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAccountFetchCache = void 0;
const react_1 = __webpack_require__(6689);
const contexts_1 = __webpack_require__(8255);
/**
 * Get the Strata account fetch cache to save on rcp calls. Generally, you want to use {@link useAccount}
 * @returns
 */
const useAccountFetchCache = () => {
    return (0, react_1.useContext)(contexts_1.AccountContext);
};
exports.useAccountFetchCache = useAccountFetchCache;
//# sourceMappingURL=useAccountFetchCache.js.map

/***/ }),

/***/ 7557:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAssociatedAccount = void 0;
const react_1 = __webpack_require__(6689);
const useAssociatedTokenAddress_1 = __webpack_require__(9139);
const useTokenAccount_1 = __webpack_require__(8881);
/**
 * Get the associcated token account for this wallet, or the account itself is this address is already an ata
 *
 * @param walletOrAta
 * @param mint
 * @returns
 */
function useAssociatedAccount(walletOrAta, mint) {
    const { result: associatedTokenAddress, loading: loading } = (0, useAssociatedTokenAddress_1.useAssociatedTokenAddress)(walletOrAta, mint);
    const { info: associatedAccount, loading: loading2 } = (0, useTokenAccount_1.useTokenAccount)(associatedTokenAddress);
    const { info: account, loading: loading3 } = (0, useTokenAccount_1.useTokenAccount)(walletOrAta || undefined);
    const result = (0, react_1.useMemo)(() => {
        if ((account === null || account === void 0 ? void 0 : account.mint) === mint) {
            // The passed value is the ata
            return account;
        }
        else {
            return associatedAccount;
        }
    }, [associatedAccount, account, mint]);
    return {
        associatedAccount: result,
        loading: loading || loading2 || loading3,
        associatedAccountKey: associatedTokenAddress,
    };
}
exports.useAssociatedAccount = useAssociatedAccount;
//# sourceMappingURL=useAssociatedAccount.js.map

/***/ }),

/***/ 9139:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAssociatedTokenAddress = void 0;
const spl_token_1 = __webpack_require__(9874);
const react_async_hook_1 = __webpack_require__(3188);
const fetch = (wallet, mint) => __awaiter(void 0, void 0, void 0, function* () {
    if (!wallet || !mint) {
        return undefined;
    }
    return spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, mint, wallet, true);
});
function useAssociatedTokenAddress(wallet, mint) {
    const { result, loading } = (0, react_async_hook_1.useAsync)(fetch, [wallet, mint]);
    return { result, loading };
}
exports.useAssociatedTokenAddress = useAssociatedTokenAddress;
//# sourceMappingURL=useAssociatedTokenAddress.js.map

/***/ }),

/***/ 1280:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useBondedTokenPrice = void 0;
const react_1 = __webpack_require__(6689);
const bondingPricing_1 = __webpack_require__(3073);
const useJupiterPrice_1 = __webpack_require__(6495);
function useBondedTokenPrice(bondedMint, priceMint) {
    const { pricing } = (0, bondingPricing_1.useBondingPricingFromMint)(bondedMint);
    const lowestMint = (0, react_1.useMemo)(() => {
        const arr = (pricing === null || pricing === void 0 ? void 0 : pricing.hierarchy.toArray()) || [];
        if (arr.length > 0) {
            return arr[arr.length - 1].tokenBonding.baseMint;
        }
    }, [pricing]);
    const lowestMintPriceJup = (0, useJupiterPrice_1.useJupiterPrice)(lowestMint || undefined, priceMint);
    const [price, setPrice] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        if (pricing && priceMint) {
            if (pricing.hierarchy.contains(priceMint)) {
                setPrice(pricing === null || pricing === void 0 ? void 0 : pricing.current(priceMint));
            }
            else if (lowestMintPriceJup) {
                setPrice((pricing === null || pricing === void 0 ? void 0 : pricing.current(lowestMint)) * lowestMintPriceJup);
            }
        }
    }, [priceMint, pricing, lowestMintPriceJup, lowestMint]);
    return price;
}
exports.useBondedTokenPrice = useBondedTokenPrice;
//# sourceMappingURL=useBondedTokenPrice.js.map

/***/ }),

/***/ 9264:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCapInfo = void 0;
const useMint_1 = __webpack_require__(9802);
const useTokenBonding_1 = __webpack_require__(5867);
const spl_token_bonding_1 = __webpack_require__(9587);
const useTokenBondingKey_1 = __webpack_require__(9333);
const useTokenAccount_1 = __webpack_require__(8881);
/**
 * Use mint cap information for a token bonding curve to get information like the number of
 * items remaining
 */
const useCapInfo = (tokenBondingKey, useTokenOfferingCurve = false) => {
    const { info: tokenBonding, loading: loadingBonding } = (0, useTokenBonding_1.useTokenBonding)(tokenBondingKey);
    const { result: sellOnlyTokenBondingKey, error: keyError1 } = (0, useTokenBondingKey_1.useTokenBondingKey)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint, 1);
    if (keyError1) {
        console.error(keyError1);
    }
    const { info: sellOnlyTokenBonding, loading: sellOnlyLoading } = (0, useTokenBonding_1.useTokenBonding)(sellOnlyTokenBondingKey);
    const { info: supplyAcc } = (0, useTokenAccount_1.useTokenAccount)(sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseStorage);
    const supplyMint = (0, useMint_1.useMint)(sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseMint);
    const sellOnlySupply = supplyAcc && supplyMint && (0, spl_token_bonding_1.toNumber)(supplyAcc.amount, supplyMint);
    const targetMintAcct = (0, useMint_1.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const targetMintSupply = targetMintAcct && (0, spl_token_bonding_1.toNumber)(targetMintAcct.supply, targetMintAcct);
    const mintCap = tokenBonding &&
        targetMintAcct &&
        tokenBonding.mintCap &&
        (0, spl_token_bonding_1.toNumber)(tokenBonding.mintCap, targetMintAcct);
    const numRemaining = useTokenOfferingCurve ? sellOnlySupply :
        typeof targetMintSupply != "undefined" && !!mintCap
            ? mintCap - targetMintSupply
            : undefined;
    return {
        loading: loadingBonding || sellOnlyLoading,
        numRemaining,
        mintCap,
    };
};
exports.useCapInfo = useCapInfo;
//# sourceMappingURL=useCapInfo.js.map

/***/ }),

/***/ 5390:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCoinGeckoPrice = exports.getCoinGeckoPriceUsd = void 0;
const axios_1 = __importDefault(__webpack_require__(629));
const react_1 = __webpack_require__(6689);
const useInterval_1 = __webpack_require__(4248);
const lru_cache_1 = __importDefault(__webpack_require__(4254));
const lru = new lru_cache_1.default({
    ttl: 1000 * 60 * 2
});
function getCoinGeckoPriceUsd(tokenName = "solana") {
    return __awaiter(this, void 0, void 0, function* () {
        let searchName = tokenName.toLowerCase();
        // Some mappings
        if (searchName === "grape") {
            searchName = "grape-2";
        }
        if (!lru.has(searchName)) {
            const resp = yield (0, axios_1.default)(`https://api.coingecko.com/api/v3/simple/price?ids=${searchName}&vs_currencies=usd`);
            const result = resp.data[searchName];
            if (result) {
                lru.set(searchName, result.usd);
            }
        }
        return lru.get(searchName);
    });
}
exports.getCoinGeckoPriceUsd = getCoinGeckoPriceUsd;
const useCoinGeckoPrice = (tokenName = "solana") => {
    const [price, setPrice] = (0, react_1.useState)();
    (0, useInterval_1.useInterval)(() => {
        var _a;
        (_a = getCoinGeckoPriceUsd(tokenName)) === null || _a === void 0 ? void 0 : _a.then(p => setPrice(p)).catch(console.log);
    }, 2 * 60 * 1000);
    return price;
};
exports.useCoinGeckoPrice = useCoinGeckoPrice;
//# sourceMappingURL=useCoinGeckoPrice.js.map

/***/ }),

/***/ 2308:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCollective = void 0;
const _1 = __webpack_require__(8721);
function useCollective(collective) {
    const { tokenCollectiveSdk } = (0, _1.useStrataSdks)();
    return (0, _1.useAccount)(collective, tokenCollectiveSdk === null || tokenCollectiveSdk === void 0 ? void 0 : tokenCollectiveSdk.collectiveDecoder, false);
}
exports.useCollective = useCollective;
//# sourceMappingURL=useCollective.js.map

/***/ }),

/***/ 250:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCurve = void 0;
const _1 = __webpack_require__(8721);
function useCurve(curve) {
    const { tokenBondingSdk } = (0, _1.useStrataSdks)();
    return (0, _1.useAccount)(curve, tokenBondingSdk === null || tokenBondingSdk === void 0 ? void 0 : tokenBondingSdk.curveDecoder, true);
}
exports.useCurve = useCurve;
//# sourceMappingURL=useCurve.js.map

/***/ }),

/***/ 646:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useErrorHandler = void 0;
const react_1 = __webpack_require__(6689);
const contexts_1 = __webpack_require__(8255);
const useErrorHandler = () => {
    const context = (0, react_1.useContext)(contexts_1.ErrorHandlerContext);
    if (context === undefined) {
        throw new Error("useErrorHandler must be used within ErrorHandlerProvider");
    }
    return context;
};
exports.useErrorHandler = useErrorHandler;
//# sourceMappingURL=useErrorHandler.js.map

/***/ }),

/***/ 1966:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useEstimatedFees = void 0;
const useFees_1 = __webpack_require__(3617);
const useRentExemptAmount_1 = __webpack_require__(8777);
const useEstimatedFees = (size, signatures) => {
    const { loading, error, amount: fees } = (0, useFees_1.useFees)(signatures);
    const { loading: rentLoading, error: rentError, amount: rent, } = (0, useRentExemptAmount_1.useRentExemptAmount)(size);
    return {
        amount: fees && rent ? fees + rent : undefined,
        error: error || rentError,
        loading: loading || rentLoading,
    };
};
exports.useEstimatedFees = useEstimatedFees;
//# sourceMappingURL=useEstimatedFees.js.map

/***/ }),

/***/ 3617:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useFees = void 0;
const react_1 = __webpack_require__(6689);
const react_async_hook_1 = __webpack_require__(3188);
const wallet_adapter_react_1 = __webpack_require__(8659);
const spl_utils_1 = __webpack_require__(4022);
const useFees = (signatures) => {
    const { connection } = (0, wallet_adapter_react_1.useConnection)();
    const { loading, error, result } = (0, react_async_hook_1.useAsync)(spl_utils_1.getFeesPerSignature, [
        connection,
    ]);
    const amount = (0, react_1.useMemo)(() => ((result || 0) * signatures) / Math.pow(10, 9), [result, signatures]);
    return {
        amount,
        error,
        loading,
    };
};
exports.useFees = useFees;
//# sourceMappingURL=useFees.js.map

/***/ }),

/***/ 1054:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useFtxPayLink = void 0;
const wallet_adapter_react_1 = __webpack_require__(8659);
function useFtxPayLink() {
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    return `https://ftx.com/pay/request?coin=SOL&address=${publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58()}&tag=&wallet=sol&memoIsRequired=false&memo=&fixedWidth=true`;
}
exports.useFtxPayLink = useFtxPayLink;
//# sourceMappingURL=useFtxPayLink.js.map

/***/ }),

/***/ 1478:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGovernance = void 0;
const spl_governance_1 = __webpack_require__(2062);
const web3_js_1 = __webpack_require__(7831);
const hooks_1 = __webpack_require__(8721);
function govParser(pubkey, account) {
    const parse = (0, spl_governance_1.GovernanceAccountParser)(spl_governance_1.Governance);
    if (account.owner.equals(new web3_js_1.PublicKey("GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw"))) {
        return parse(pubkey, account).account;
    }
}
function useGovernance(governance) {
    return (0, hooks_1.useAccount)(governance, govParser);
}
exports.useGovernance = useGovernance;
//# sourceMappingURL=useGovernance.js.map

/***/ }),

/***/ 4248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useInterval = void 0;
const react_1 = __webpack_require__(6689);
function useInterval(callback, delay, deps = []) {
    const savedCallbackRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        savedCallbackRef.current = callback;
    }, [callback]);
    (0, react_1.useEffect)(() => {
        const handler = (...args) => savedCallbackRef.current(...args);
        if (delay !== null) {
            handler();
            const intervalId = setInterval(handler, delay);
            return () => clearInterval(intervalId);
        }
    }, [delay, ...deps]);
}
exports.useInterval = useInterval;
//# sourceMappingURL=useInterval.js.map

/***/ }),

/***/ 6495:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useJupiterPrice = exports.getJupiterPriceCached = void 0;
const axios_1 = __importDefault(__webpack_require__(629));
const react_1 = __webpack_require__(6689);
const useInterval_1 = __webpack_require__(4248);
const lru_cache_1 = __importDefault(__webpack_require__(4254));
const useMint_1 = __webpack_require__(9802);
const useTwWrappedSolMint_1 = __webpack_require__(4353);
const spl_token_1 = __webpack_require__(9874);
const lru = new lru_cache_1.default({
    ttl: 1000 * 60 * 2,
});
function getJupiterPriceCached(inputMint, priceMint, inputDecimals, priceDecimals) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!inputMint || !priceMint || typeof inputDecimals === "undefined" || typeof priceDecimals === "undefined") {
            return;
        }
        let key = inputMint.toBase58() + priceMint.toBase58();
        if (!lru.has(key)) {
            const resp = yield (0, axios_1.default)(`https://quote-api.jup.ag/v1/quote?inputMint=${inputMint}&outputMint=${priceMint}&amount=${1 * Math.pow(10, inputDecimals)}&slippage=0.5&feeBps=4`);
            if (!resp.data.error) {
                const data = resp.data.data[0];
                const result = data &&
                    data.outAmount /
                        Math.pow(10, priceDecimals) /
                        (data.inAmount / Math.pow(10, inputDecimals));
                if (result) {
                    lru.set(key, result);
                }
            }
        }
        return lru.get(key);
    });
}
exports.getJupiterPriceCached = getJupiterPriceCached;
const useJupiterPrice = (inputMint, priceMint) => {
    const [price, setPrice] = (0, react_1.useState)();
    const input = (0, useMint_1.useMint)(inputMint);
    const output = (0, useMint_1.useMint)(priceMint);
    const wrappedSolMint = (0, useTwWrappedSolMint_1.useTwWrappedSolMint)();
    (0, useInterval_1.useInterval)(() => {
        var _a;
        if (wrappedSolMint && inputMint && priceMint) {
            (_a = getJupiterPriceCached(inputMint.equals(wrappedSolMint) ? spl_token_1.NATIVE_MINT : inputMint, priceMint.equals(wrappedSolMint) ? spl_token_1.NATIVE_MINT : priceMint, inputMint.equals(spl_token_1.NATIVE_MINT) ? 9 : input === null || input === void 0 ? void 0 : input.decimals, priceMint.equals(spl_token_1.NATIVE_MINT) ? 9 : output === null || output === void 0 ? void 0 : output.decimals)) === null || _a === void 0 ? void 0 : _a.then((p) => setPrice(p)).catch(console.log);
        }
    }, 2 * 60 * 1000, [input, output, inputMint, priceMint, wrappedSolMint]);
    return price;
};
exports.useJupiterPrice = useJupiterPrice;
//# sourceMappingURL=useJupiterPrice.js.map

/***/ }),

/***/ 9801:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useLocalStorage = void 0;
const react_1 = __webpack_require__(6689);
function useLocalStorage(key, defaultState) {
    const [value, setValue] = (0, react_1.useState)(() => {
        const value = localStorage.getItem(key);
        if (value)
            return JSON.parse(value);
        return defaultState;
    });
    const setLocalStorage = (0, react_1.useCallback)((newValue) => {
        if (newValue === value)
            return;
        setValue(newValue);
        if (newValue === null) {
            localStorage.removeItem(key);
        }
        else {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    }, [value, setValue, key]);
    return [value, setLocalStorage];
}
exports.useLocalStorage = useLocalStorage;
//# sourceMappingURL=useLocalStorage.js.map

/***/ }),

/***/ 2048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useManyToOneSwapDriver = void 0;
const react_1 = __webpack_require__(6689);
const useSwapDriver_1 = __webpack_require__(4974);
const useTokenBonding_1 = __webpack_require__(5867);
const useTokenMetadata_1 = __webpack_require__(6269);
const useManyToOneSwapDriver = ({ onConnectWallet, extraTransactionInfo, inputs, onTradingMintsChange, swap, baseMint, targetMint }) => {
    const tokenBondingKey = (0, react_1.useMemo)(() => {
        var _a;
        return (_a = inputs.find(i => i.baseMint.equals(baseMint))) === null || _a === void 0 ? void 0 : _a.tokenBonding;
    }, [baseMint, inputs]);
    const { info: tokenBonding } = (0, useTokenBonding_1.useTokenBonding)(tokenBondingKey);
    const { metadata: targetMeta, image: targetImage } = (0, useTokenMetadata_1.useTokenMetadata)(targetMint);
    const target = targetMeta && tokenBonding && {
        name: (targetMeta === null || targetMeta === void 0 ? void 0 : targetMeta.data.name) || "",
        ticker: (targetMeta === null || targetMeta === void 0 ? void 0 : targetMeta.data.symbol) || "",
        image: targetImage,
        publicKey: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint,
    };
    const driverProps = (0, useSwapDriver_1.useSwapDriver)({
        tokenBondingKey,
        onConnectWallet,
        extraTransactionInfo,
        tradingMints: {
            base: baseMint,
            target: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint
        },
        onTradingMintsChange,
        swap,
    });
    return Object.assign(Object.assign({}, driverProps), { target, baseOptions: (0, react_1.useMemo)(() => inputs.map(i => i.baseMint), [inputs]), targetOptions: [] });
};
exports.useManyToOneSwapDriver = useManyToOneSwapDriver;
//# sourceMappingURL=useManyToOneSwapDriver.js.map

/***/ }),

/***/ 6610:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMarketPrice = void 0;
const web3_js_1 = __webpack_require__(7831);
const react_1 = __webpack_require__(6689);
const serum_1 = __webpack_require__(6365);
const wallet_adapter_react_1 = __webpack_require__(8659);
const SERUM_PROGRAM_ID = new web3_js_1.PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin");
const useMarketPrice = (marketAddress) => {
    const { connection } = (0, wallet_adapter_react_1.useConnection)();
    const [price, setPrice] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const fetch = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let market = yield serum_1.Market.load(connection, marketAddress, undefined, SERUM_PROGRAM_ID);
                const book = yield market.loadAsks(connection);
                const top = book.items(false).next().value;
                setPrice(top.price);
            }
            catch (e) {
                console.error(e);
            }
        });
        fetch();
        const interval = setInterval(fetch, 30 * 1000);
        return () => clearInterval(interval);
    }, []);
    return price;
};
exports.useMarketPrice = useMarketPrice;
//# sourceMappingURL=useMarketPrice.js.map

/***/ }),

/***/ 2260:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMetaplexTokenMetadata = exports.solMetadata = exports.toMetadata = void 0;
const mpl_token_metadata_1 = __webpack_require__(9817);
const spl_token_1 = __webpack_require__(9874);
const spl_utils_1 = __webpack_require__(4022);
const react_1 = __webpack_require__(6689);
const react_async_hook_1 = __webpack_require__(3188);
const _1 = __webpack_require__(8721);
const useAccount_1 = __webpack_require__(9749);
const useMint_1 = __webpack_require__(9802);
const useTokenList_1 = __webpack_require__(2652);
const useTwWrappedSolMint_1 = __webpack_require__(4353);
function toMetadata(tokenInfo) {
    if (!tokenInfo) {
        return undefined;
    }
    return new mpl_token_metadata_1.MetadataData({
        updateAuthority: "",
        mint: tokenInfo.address,
        data: new mpl_token_metadata_1.DataV2({
            name: tokenInfo.name,
            symbol: tokenInfo.symbol,
            uri: tokenInfo.logoURI || "",
            creators: null,
            sellerFeeBasisPoints: 0,
            collection: null,
            uses: null,
        }),
        primarySaleHappened: false,
        isMutable: false,
        editionNonce: null,
    });
}
exports.toMetadata = toMetadata;
const parser = (key, acct) => acct && new mpl_token_metadata_1.Metadata(key, acct).data;
exports.solMetadata = new mpl_token_metadata_1.MetadataData({
    updateAuthority: "",
    mint: spl_token_1.NATIVE_MINT.toBase58(),
    data: new mpl_token_metadata_1.DataV2({
        name: "Solana",
        symbol: "SOL",
        uri: "https://strata-token-metadata.s3.us-east-2.amazonaws.com/sol.json",
        creators: null,
        sellerFeeBasisPoints: 0,
        collection: null,
        uses: null,
    }),
    primarySaleHappened: false,
    isMutable: false,
    editionNonce: null,
});
/**
 * Get the token account and all metaplex metadata around the token
 *
 * @param token
 * @returns
 */
function useMetaplexTokenMetadata(token) {
    const { result: metadataAccountKey, loading, error, } = (0, react_async_hook_1.useAsync)((token) => __awaiter(this, void 0, void 0, function* () { return token ? mpl_token_metadata_1.Metadata.getPDA(token) : undefined; }), [token === null || token === void 0 ? void 0 : token.toBase58()]);
    let { info: metadata, loading: accountLoading } = (0, useAccount_1.useAccount)(metadataAccountKey, parser);
    const wrappedSolMint = (0, useTwWrappedSolMint_1.useTwWrappedSolMint)();
    const isSol = (token === null || token === void 0 ? void 0 : token.equals(spl_token_1.NATIVE_MINT)) ||
        (wrappedSolMint && (token === null || token === void 0 ? void 0 : token.equals(wrappedSolMint)));
    if (isSol) {
        metadata = exports.solMetadata;
    }
    const { tokenMetadataSdk: splTokenMetadataSdk } = (0, _1.useStrataSdks)();
    const getEditionInfo = splTokenMetadataSdk
        ? splTokenMetadataSdk.getEditionInfo
        : () => Promise.resolve({});
    const { result: editionInfo } = (0, react_async_hook_1.useAsync)((metadata) => __awaiter(this, void 0, void 0, function* () { return (yield getEditionInfo(metadata)) || []; }), [metadata]);
    const tokenList = (0, useTokenList_1.useTokenList)();
    const { result: data, loading: dataLoading, error: dataError, } = (0, react_async_hook_1.useAsync)(spl_utils_1.SplTokenMetadata.getArweaveMetadata, [metadata === null || metadata === void 0 ? void 0 : metadata.data.uri]);
    const { result: image, loading: imageLoading, error: imageError, } = (0, react_async_hook_1.useAsync)(spl_utils_1.SplTokenMetadata.getImage, [metadata === null || metadata === void 0 ? void 0 : metadata.data.uri]);
    const mint = (0, useMint_1.useMint)(token);
    const metadataOrTokenListMetadata = (0, react_1.useMemo)(() => {
        if (metadata) {
            return metadata;
        }
        if (token) {
            return toMetadata(tokenList === null || tokenList === void 0 ? void 0 : tokenList.get(token.toBase58()));
        }
    }, [token, metadata]);
    const imageWithTokenlist = (0, react_1.useMemo)(() => {
        if (!image) {
            return metadataOrTokenListMetadata === null || metadataOrTokenListMetadata === void 0 ? void 0 : metadataOrTokenListMetadata.data.uri;
        }
        return image;
    }, [
        image,
        metadataOrTokenListMetadata,
    ]);
    const displayName = (metadataOrTokenListMetadata === null || metadataOrTokenListMetadata === void 0 ? void 0 : metadataOrTokenListMetadata.data.name.length) == 32
        ? data === null || data === void 0 ? void 0 : data.name
        : metadataOrTokenListMetadata === null || metadataOrTokenListMetadata === void 0 ? void 0 : metadataOrTokenListMetadata.data.name;
    return Object.assign({ loading: Boolean(token && (loading || accountLoading || dataLoading || imageLoading)), displayName, error: error || dataError || imageError, mint, metadata: metadataOrTokenListMetadata, metadataKey: metadataAccountKey, data, image: imageWithTokenlist, description: data === null || data === void 0 ? void 0 : data.description }, editionInfo);
}
exports.useMetaplexTokenMetadata = useMetaplexTokenMetadata;
//# sourceMappingURL=useMetaplexMetadata.js.map

/***/ }),

/***/ 9802:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMint = exports.MintParser = void 0;
const spl_token_1 = __webpack_require__(9874);
const web3_js_1 = __webpack_require__(7831);
const hooks_1 = __webpack_require__(8721);
const deserializeMint = (data) => {
    if (data.length !== spl_token_1.MintLayout.span) {
        throw new Error("Not a valid Mint");
    }
    const mintInfo = spl_token_1.MintLayout.decode(data);
    if (mintInfo.mintAuthorityOption === 0) {
        mintInfo.mintAuthority = null;
    }
    else {
        mintInfo.mintAuthority = new web3_js_1.PublicKey(mintInfo.mintAuthority);
    }
    mintInfo.supply = spl_token_1.u64.fromBuffer(mintInfo.supply);
    mintInfo.isInitialized = mintInfo.isInitialized !== 0;
    if (mintInfo.freezeAuthorityOption === 0) {
        mintInfo.freezeAuthority = null;
    }
    else {
        mintInfo.freezeAuthority = new web3_js_1.PublicKey(mintInfo.freezeAuthority);
    }
    return mintInfo;
};
const MintParser = (pubKey, info) => {
    const buffer = Buffer.from(info.data);
    const data = deserializeMint(buffer);
    const details = {
        pubkey: pubKey,
        account: Object.assign({}, info),
        info: data,
    };
    return details;
};
exports.MintParser = MintParser;
function useMint(key) {
    var _a;
    return (_a = (0, hooks_1.useAccount)(key, exports.MintParser).info) === null || _a === void 0 ? void 0 : _a.info;
}
exports.useMint = useMint;
//# sourceMappingURL=useMint.js.map

/***/ }),

/***/ 9157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useOwnedAmountOfNameForOwner = void 0;
const bondingPricing_1 = __webpack_require__(3073);
const tokenRef_1 = __webpack_require__(2333);
function useOwnedAmountOfNameForOwner(owner, handle, collective, tld) {
    const { info: tokenRef, loading: loadingRef } = (0, tokenRef_1.useTokenRefForName)(handle, collective, tld);
    const amount = (0, bondingPricing_1.useUserOwnedAmount)(owner, tokenRef === null || tokenRef === void 0 ? void 0 : tokenRef.mint);
    return {
        loading: loadingRef,
        amount,
    };
}
exports.useOwnedAmountOfNameForOwner = useOwnedAmountOfNameForOwner;
//# sourceMappingURL=useOwnedAmountOfNameForOwner.js.map

/***/ }),

/***/ 2584:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usePriceInSol = void 0;
const spl_token_1 = __webpack_require__(9874);
const react_1 = __webpack_require__(6689);
const useBondedTokenPrice_1 = __webpack_require__(1280);
const useJupiterPrice_1 = __webpack_require__(6495);
function usePriceInSol(token) {
    const bondedTokenPrice = (0, useBondedTokenPrice_1.useBondedTokenPrice)(token || undefined, spl_token_1.NATIVE_MINT);
    const tokenPriceJup = (0, useJupiterPrice_1.useJupiterPrice)(token || undefined, spl_token_1.NATIVE_MINT);
    return (0, react_1.useMemo)(() => bondedTokenPrice || tokenPriceJup, [bondedTokenPrice, tokenPriceJup]);
}
exports.usePriceInSol = usePriceInSol;
//# sourceMappingURL=usePriceInSol.js.map

/***/ }),

/***/ 8713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usePriceInUsd = void 0;
const usePriceInSol_1 = __webpack_require__(2584);
const useSolPrice_1 = __webpack_require__(6096);
function usePriceInUsd(token) {
    const solPrice = (0, useSolPrice_1.useSolPrice)();
    const solAmount = (0, usePriceInSol_1.usePriceInSol)(token);
    return solAmount && solPrice && solAmount * solPrice;
}
exports.usePriceInUsd = usePriceInUsd;
//# sourceMappingURL=usePriceInUsd.js.map

/***/ }),

/***/ 3056:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useProvider = void 0;
const react_1 = __webpack_require__(6689);
const providerContext_1 = __webpack_require__(6938);
/**
 * Get an anchor provider with signTransaction wrapped so that it hits the wallet adapter from wallet-adapter-react.
 *
 * @returns
 */
function useProvider() {
    return (0, react_1.useContext)(providerContext_1.ProviderContext);
}
exports.useProvider = useProvider;
//# sourceMappingURL=useProvider.js.map

/***/ }),

/***/ 1275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usePublicKey = void 0;
const react_1 = __webpack_require__(6689);
const web3_js_1 = __webpack_require__(7831);
const usePublicKey = (publicKeyStr) => (0, react_1.useMemo)(() => {
    if (publicKeyStr) {
        try {
            return new web3_js_1.PublicKey(publicKeyStr);
        }
        catch (_a) {
            // ignore
        }
    }
}, [publicKeyStr]);
exports.usePublicKey = usePublicKey;
//# sourceMappingURL=usePublicKey.js.map

/***/ }),

/***/ 4679:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useQueryString = exports.getQueryStringValue = void 0;
const query_string_1 = __importDefault(__webpack_require__(9103));
const react_1 = __webpack_require__(6689);
const useInterval_1 = __webpack_require__(4248);
const setQueryStringWithoutPageReload = (qsValue) => {
    if (typeof window !== "undefined") {
        const newurl = window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            qsValue;
        window.history.pushState({ path: newurl }, "", newurl);
    }
};
const setQueryStringValue = (key, value, queryString = window.location.search) => {
    const values = query_string_1.default.parse(queryString);
    const newQsValue = query_string_1.default.stringify(Object.assign(Object.assign({}, values), { [key]: value }));
    setQueryStringWithoutPageReload(`?${newQsValue}`);
};
const getQueryStringValue = (key, queryString = typeof window !== "undefined" && window.location.search) => {
    if (queryString) {
        const values = query_string_1.default.parse(queryString);
        return values[key];
    }
};
exports.getQueryStringValue = getQueryStringValue;
function useQueryString(key, initialValue) {
    const [value, setValue] = (0, react_1.useState)((0, exports.getQueryStringValue)(key) || initialValue);
    (0, useInterval_1.useInterval)(() => {
        const newValue = (0, exports.getQueryStringValue)(key);
        if (newValue && newValue != value) {
            setValue(newValue);
        }
    }, 500);
    const onSetValue = (0, react_1.useCallback)((newValue) => {
        setValue(newValue);
        setQueryStringValue(key, newValue);
    }, [key]);
    return [value, onSetValue];
}
exports.useQueryString = useQueryString;
//# sourceMappingURL=useQueryString.js.map

/***/ }),

/***/ 8777:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRentExemptAmount = void 0;
const react_1 = __webpack_require__(6689);
const react_async_hook_1 = __webpack_require__(3188);
const wallet_adapter_react_1 = __webpack_require__(8659);
const useRentExemptAmount = (size) => {
    const { connection } = (0, wallet_adapter_react_1.useConnection)();
    const { loading, error, result } = (0, react_async_hook_1.useAsync)(connection.getMinimumBalanceForRentExemption.bind(connection), [size]);
    const amount = (0, react_1.useMemo)(() => (result || 0) / Math.pow(10, 9), [result]);
    return {
        amount,
        error,
        loading,
    };
};
exports.useRentExemptAmount = useRentExemptAmount;
//# sourceMappingURL=useRentExemptAmount.js.map

/***/ }),

/***/ 5877:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useReserveAmount = void 0;
const spl_token_bonding_1 = __webpack_require__(9587);
const react_1 = __webpack_require__(6689);
const useMint_1 = __webpack_require__(9802);
const useTokenAccount_1 = __webpack_require__(8881);
const useTokenBonding_1 = __webpack_require__(5867);
function useReserveAmount(tokenBonding) {
    const { info: tokenBondingAcc, loading: loadingBonding } = (0, useTokenBonding_1.useTokenBonding)(tokenBonding);
    const { info: reserves, loading: loadingToken } = (0, useTokenAccount_1.useTokenAccount)(tokenBondingAcc === null || tokenBondingAcc === void 0 ? void 0 : tokenBondingAcc.baseStorage);
    const baseMint = (0, useMint_1.useMint)(tokenBondingAcc === null || tokenBondingAcc === void 0 ? void 0 : tokenBondingAcc.baseMint);
    const loading = (0, react_1.useMemo)(() => loadingBonding || loadingToken, [loadingBonding, loadingToken]);
    const reserveAmount = (0, react_1.useMemo)(() => !reserves && !loading
        ? 0
        : reserves && baseMint && (0, spl_token_bonding_1.amountAsNum)(reserves.amount, baseMint), [reserves, baseMint, loading]);
    return reserveAmount;
}
exports.useReserveAmount = useReserveAmount;
//# sourceMappingURL=useReserveAmount.js.map

/***/ }),

/***/ 6096:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useSolPrice = void 0;
const contexts_1 = __webpack_require__(8255);
const react_1 = __webpack_require__(6689);
const useSolPrice = () => {
    return (0, react_1.useContext)(contexts_1.SolPriceContext);
};
exports.useSolPrice = useSolPrice;
//# sourceMappingURL=useSolPrice.js.map

/***/ }),

/***/ 4268:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useStrataSdks = void 0;
const react_1 = __importDefault(__webpack_require__(6689));
const strataSdkContext_1 = __webpack_require__(2486);
/**
 * Get all of the Strata sdks for use in react functions
 * @returns
 */
function useStrataSdks() {
    const context = react_1.default.useContext(strataSdkContext_1.StrataSdksContext);
    if (context === undefined) {
        throw new Error("useStrataSdks must be used within StrataProgramsProvider");
    }
    return context;
}
exports.useStrataSdks = useStrataSdks;
//# sourceMappingURL=useStrataSdks.js.map

/***/ }),

/***/ 8360:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useSwap = void 0;
const react_async_hook_1 = __webpack_require__(3188);
const wallet_adapter_base_1 = __webpack_require__(958);
const wallet_adapter_react_1 = __webpack_require__(8659);
const _1 = __webpack_require__(8721);
const useSwap = (swapArgs = {}) => {
    const { connected, publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const { tokenBondingSdk, loading: sdkLoading } = (0, _1.useStrataSdks)();
    const { result: data, execute, error, loading, } = (0, react_async_hook_1.useAsyncCallback)((args) => __awaiter(void 0, void 0, void 0, function* () {
        if (!connected || !publicKey || !tokenBondingSdk)
            throw new wallet_adapter_base_1.WalletNotConnectedError();
        return yield tokenBondingSdk.swap(Object.assign(Object.assign({}, args), swapArgs));
    }));
    return {
        execute,
        data,
        loading,
        error,
    };
};
exports.useSwap = useSwap;
//# sourceMappingURL=useSwap.js.map

/***/ }),

/***/ 4974:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useSwapDriver = exports.getMissingSpace = void 0;
const spl_token_1 = __webpack_require__(9874);
const web3_js_1 = __webpack_require__(7831);
const useCapInfo_1 = __webpack_require__(9264);
const spl_token_bonding_1 = __webpack_require__(9587);
const react_1 = __importStar(__webpack_require__(6689));
const react_async_hook_1 = __webpack_require__(3188);
const utils_1 = __webpack_require__(6057);
const _1 = __webpack_require__(8721);
function getMints(hierarchy) {
    if (!hierarchy) {
        return [];
    }
    return [hierarchy.tokenBonding.baseMint, ...getMints(hierarchy.parent)];
}
function getMissingSpace(provider, hierarchy, baseMint, targetMint) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!provider || !provider.wallet || !provider.wallet.publicKey || !baseMint || !targetMint || !hierarchy) {
            return 0;
        }
        const path = hierarchy.path(baseMint, targetMint);
        const accounts = (yield Promise.all(path.map((hierarchy) => __awaiter(this, void 0, void 0, function* () {
            return [
                yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, hierarchy.tokenBonding.baseMint, provider.wallet.publicKey, true),
                yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, hierarchy.tokenBonding.targetMint, provider.wallet.publicKey, true),
            ];
        })))).flat();
        const distinctAccounts = [...new Set(accounts.map((a) => a.toBase58()))];
        const totalSpace = (yield Promise.all(distinctAccounts.map((acct) => __awaiter(this, void 0, void 0, function* () {
            if (yield provider.connection.getAccountInfo(new web3_js_1.PublicKey(acct))) {
                return 0;
            }
            return spl_token_1.AccountLayout.span;
        })))).reduce((acc, total) => acc + total, 0);
        return totalSpace;
    });
}
exports.getMissingSpace = getMissingSpace;
const useSwapDriver = ({ onConnectWallet, tokenBondingKey, tradingMints, onTradingMintsChange, swap, extraTransactionInfo, }) => {
    const { provider } = (0, _1.useProvider)();
    const [internalError, setInternalError] = (0, react_1.useState)();
    const [spendCap, setSpendCap] = (0, react_1.useState)(0);
    const { info: tokenBonding, loading: tokenBondingLoading } = (0, _1.useTokenBonding)(tokenBondingKey);
    const { base: baseMint, target: targetMint } = tradingMints;
    const { image: baseImage, metadata: baseMeta, loading: baseMetaLoading, error: baseMetaError, } = (0, _1.useTokenMetadata)(baseMint);
    const { image: targetImage, metadata: targetMeta, loading: targetMetaLoading, error: targetMetaError, } = (0, _1.useTokenMetadata)(targetMint);
    const { loading: curveLoading, pricing, error, } = (0, _1.useBondingPricing)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const { result: missingSpace, error: missingSpaceError } = (0, react_async_hook_1.useAsync)(getMissingSpace, [provider, pricing === null || pricing === void 0 ? void 0 : pricing.hierarchy, baseMint, targetMint]);
    const { amount: feeAmount, error: feeError } = (0, _1.useEstimatedFees)(missingSpace || 0, 1);
    const targetMintAcct = (0, _1.useMint)(targetMint);
    const allMints = react_1.default.useMemo(() => [tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint, ...getMints(pricing === null || pricing === void 0 ? void 0 : pricing.hierarchy)].filter(utils_1.truthy), [tokenBonding, pricing]);
    const ownedBase = (0, _1.useOwnedAmount)(baseMint);
    const { handleErrors } = (0, _1.useErrorHandler)();
    handleErrors(missingSpaceError, baseMetaError, targetMetaError, feeError, internalError, error);
    (0, react_1.useEffect)(() => {
        if (tokenBonding && targetMintAcct && pricing) {
            const purchaseCap = tokenBonding.purchaseCap
                ? (0, _1.amountAsNum)(tokenBonding.purchaseCap, targetMintAcct)
                : Number.POSITIVE_INFINITY;
            const maxSpend = pricing.buyTargetAmount(purchaseCap);
            setSpendCap(maxSpend);
        }
    }, [tokenBonding, targetMint, pricing, setSpendCap]);
    const base = baseMint && {
        name: (baseMeta === null || baseMeta === void 0 ? void 0 : baseMeta.data.name) || "",
        ticker: (baseMeta === null || baseMeta === void 0 ? void 0 : baseMeta.data.symbol) || "",
        image: baseImage,
        publicKey: baseMint,
    };
    const target = targetMint && {
        name: (targetMeta === null || targetMeta === void 0 ? void 0 : targetMeta.data.name) || "",
        ticker: (targetMeta === null || targetMeta === void 0 ? void 0 : targetMeta.data.symbol) || "",
        image: targetImage,
        publicKey: targetMint,
    };
    const lowMint = base &&
        target &&
        (pricing === null || pricing === void 0 ? void 0 : pricing.hierarchy.lowest(base.publicKey, target.publicKey));
    const targetBonding = lowMint && (pricing === null || pricing === void 0 ? void 0 : pricing.hierarchy.findTarget(lowMint));
    const mintCap = targetBonding &&
        targetMintAcct &&
        targetBonding.mintCap &&
        (0, spl_token_bonding_1.toNumber)(targetBonding.mintCap, targetMintAcct);
    const { numRemaining } = (0, useCapInfo_1.useCapInfo)(tokenBondingKey);
    const handleSubmit = (values) => __awaiter(void 0, void 0, void 0, function* () {
        if (values.topAmount) {
            try {
                // They explicitly set the amount they want. Accomodate this if we're not doing a multi
                // level swap
                const path = pricing === null || pricing === void 0 ? void 0 : pricing.hierarchy.path(baseMint, targetMint);
                let shouldUseDesiredTargetAmount = values.lastSet == "bottom" &&
                    path &&
                    path.length == 1 &&
                    path[0].tokenBonding.targetMint.equals(targetMint);
                let outputAmountSetting = {
                    baseAmount: +values.topAmount,
                    expectedOutputAmount: +values.bottomAmount,
                };
                if (shouldUseDesiredTargetAmount) {
                    outputAmountSetting = {
                        desiredTargetAmount: +values.bottomAmount,
                        expectedBaseAmount: +values.topAmount,
                    };
                }
                yield swap(Object.assign(Object.assign({ baseMint: baseMint, targetMint: targetMint }, outputAmountSetting), { slippage: +values.slippage / 100, ticker: target.ticker }));
            }
            catch (e) {
                setInternalError(e);
            }
        }
    });
    return {
        extraTransactionInfo,
        numRemaining,
        mintCap,
        loading: targetMetaLoading ||
            baseMetaLoading ||
            tokenBondingLoading ||
            !tokenBonding ||
            !baseMeta,
        onConnectWallet,
        onTradingMintsChange,
        onBuyBase: () => {
            const tokenBonding = pricing.hierarchy.findTarget(baseMint);
            onTradingMintsChange({
                base: tokenBonding.baseMint,
                target: tokenBonding.targetMint,
            });
        },
        onSubmit: handleSubmit,
        tokenBonding,
        pricing,
        base,
        target,
        ownedBase,
        spendCap,
        feeAmount,
        baseOptions: react_1.default.useMemo(() => allMints.filter((mint) => baseMint && !mint.equals(baseMint)), [baseMint, allMints]),
        targetOptions: react_1.default.useMemo(() => allMints.filter((mint) => targetMint && !mint.equals(targetMint)), [targetMint, allMints]),
    };
};
exports.useSwapDriver = useSwapDriver;
//# sourceMappingURL=useSwapDriver.js.map

/***/ }),

/***/ 8881:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTokenAccount = void 0;
const _1 = __webpack_require__(8721);
const utils_1 = __webpack_require__(6057);
const parser = (pubkey, acct) => {
    var _a;
    return (_a = (0, utils_1.TokenAccountParser)(pubkey, acct)) === null || _a === void 0 ? void 0 : _a.info;
};
function useTokenAccount(address) {
    return (0, _1.useAccount)(address, parser);
}
exports.useTokenAccount = useTokenAccount;
//# sourceMappingURL=useTokenAccount.js.map

/***/ }),

/***/ 5867:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTokenBonding = void 0;
const _1 = __webpack_require__(8721);
const useTokenBonding = (tokenBonding) => {
    const { tokenBondingSdk } = (0, _1.useStrataSdks)();
    return (0, _1.useAccount)(tokenBonding, tokenBondingSdk === null || tokenBondingSdk === void 0 ? void 0 : tokenBondingSdk.tokenBondingDecoder);
};
exports.useTokenBonding = useTokenBonding;
//# sourceMappingURL=useTokenBonding.js.map

/***/ }),

/***/ 7390:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTokenBondingFromMint = void 0;
const spl_token_bonding_1 = __webpack_require__(9587);
const react_async_hook_1 = __webpack_require__(3188);
const _1 = __webpack_require__(8721);
function useTokenBondingFromMint(mint, index) {
    const { result: key, loading, error, } = (0, react_async_hook_1.useAsync)((mint, index) => __awaiter(this, void 0, void 0, function* () { return mint && spl_token_bonding_1.SplTokenBonding.tokenBondingKey(mint, index); }), [mint, index || 0]);
    const tokenBondingInfo = (0, _1.useTokenBonding)(key && key[0]);
    return Object.assign(Object.assign({}, tokenBondingInfo), { loading: tokenBondingInfo.loading || loading, error });
}
exports.useTokenBondingFromMint = useTokenBondingFromMint;
//# sourceMappingURL=useTokenBondingFromMint.js.map

/***/ }),

/***/ 9333:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTokenBondingKey = void 0;
const spl_token_bonding_1 = __webpack_require__(9587);
const react_1 = __webpack_require__(6689);
const react_async_hook_1 = __webpack_require__(3188);
function tokenBondingKey(mintKey, index) {
    return __awaiter(this, void 0, void 0, function* () {
        return mintKey
            ? (yield spl_token_bonding_1.SplTokenBonding.tokenBondingKey(mintKey, index))[0]
            : undefined;
    });
}
function useTokenBondingKey(mintKey, index) {
    const uniqueMintKey = (0, react_1.useMemo)(() => mintKey, [mintKey === null || mintKey === void 0 ? void 0 : mintKey.toBase58()]);
    return (0, react_async_hook_1.useAsync)(tokenBondingKey, [uniqueMintKey, index]);
}
exports.useTokenBondingKey = useTokenBondingKey;
//# sourceMappingURL=useTokenBondingKey.js.map

/***/ }),

/***/ 2652:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTokenList = void 0;
const contexts_1 = __webpack_require__(8255);
const react_1 = __webpack_require__(6689);
const useTokenList = () => {
    return (0, react_1.useContext)(contexts_1.TokenListContext);
};
exports.useTokenList = useTokenList;
//# sourceMappingURL=useTokenList.js.map

/***/ }),

/***/ 6269:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTokenMetadata = void 0;
const wallet_adapter_react_1 = __webpack_require__(8659);
const _1 = __webpack_require__(8721);
const useAssociatedAccount_1 = __webpack_require__(7557);
const useMetaplexMetadata_1 = __webpack_require__(2260);
/**
 * Get the token account and all metaplex + token collective metadata around the token
 *
 * @param token
 * @returns
 */
function useTokenMetadata(token) {
    const metaplexData = (0, useMetaplexMetadata_1.useMetaplexTokenMetadata)(token);
    const wallet = (0, wallet_adapter_react_1.useWallet)();
    const { associatedAccount } = (0, useAssociatedAccount_1.useAssociatedAccount)(wallet.publicKey, token);
    const { info: mintTokenRef, loading: loadingTokenRef } = (0, _1.useMintTokenRef)(token);
    return Object.assign(Object.assign({}, metaplexData), { tokenRef: mintTokenRef, loading: Boolean(token && (loadingTokenRef || metaplexData.loading)), account: associatedAccount });
}
exports.useTokenMetadata = useTokenMetadata;
//# sourceMappingURL=useTokenMetadata.js.map

/***/ }),

/***/ 4512:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTokenRef = void 0;
const _1 = __webpack_require__(8721);
function useTokenRef(tokenRef) {
    const { tokenCollectiveSdk } = (0, _1.useStrataSdks)();
    return (0, _1.useAccount)(tokenRef, tokenCollectiveSdk === null || tokenCollectiveSdk === void 0 ? void 0 : tokenCollectiveSdk.tokenRefDecoder, true);
}
exports.useTokenRef = useTokenRef;
//# sourceMappingURL=useTokenRef.js.map

/***/ }),

/***/ 4353:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTwWrappedSolMint = void 0;
const react_async_hook_1 = __webpack_require__(3188);
const useStrataSdks_1 = __webpack_require__(4268);
function getWrappedSol(tokenBondingSdk) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!tokenBondingSdk) {
            return;
        }
        return (_a = (yield tokenBondingSdk.getState())) === null || _a === void 0 ? void 0 : _a.wrappedSolMint;
    });
}
function useTwWrappedSolMint() {
    const { tokenBondingSdk } = (0, useStrataSdks_1.useStrataSdks)();
    const { result: wrappedSolMint, error } = (0, react_async_hook_1.useAsync)(getWrappedSol, [tokenBondingSdk]);
    if (error) {
        console.error(error);
    }
    return wrappedSolMint;
}
exports.useTwWrappedSolMint = useTwWrappedSolMint;
//# sourceMappingURL=useTwWrappedSolMint.js.map

/***/ }),

/***/ 679:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useUsdLocked = void 0;
const react_1 = __webpack_require__(6689);
const bondingPricing_1 = __webpack_require__(3073);
const usePriceInUsd_1 = __webpack_require__(8713);
function useUsdLocked(tokenBondingKey) {
    const { pricing } = (0, bondingPricing_1.useBondingPricing)(tokenBondingKey);
    const lowestMint = (0, react_1.useMemo)(() => {
        const arr = (pricing === null || pricing === void 0 ? void 0 : pricing.hierarchy.toArray()) || [];
        if (arr.length > 0) {
            return arr[arr.length - 1].tokenBonding.baseMint;
        }
    }, [pricing]);
    const fiatPrice = (0, usePriceInUsd_1.usePriceInUsd)(lowestMint);
    const baseLocked = pricing === null || pricing === void 0 ? void 0 : pricing.locked(lowestMint);
    return fiatPrice && baseLocked && baseLocked * fiatPrice;
}
exports.useUsdLocked = useUsdLocked;
//# sourceMappingURL=useUsdLocked.js.map

/***/ }),

/***/ 8152:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useUserTokensWithMeta = void 0;
const react_1 = __webpack_require__(6689);
const _1 = __webpack_require__(8721);
const useTokenList_1 = __webpack_require__(2652);
const wallet_adapter_react_1 = __webpack_require__(8659);
const spl_token_1 = __webpack_require__(9874);
const spl_utils_1 = __webpack_require__(4022);
const useUserTokensWithMeta = (owner, includeSol = false) => {
    const { tokenCollectiveSdk } = (0, _1.useStrataSdks)();
    const [data, setData] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)();
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const { account } = (0, _1.useAccount)(publicKey);
    const { result: tokenAccounts, loading: loadingTokenAccounts, error: tokenAccountsError, } = (0, _1.useWalletTokenAccounts)(owner);
    const tokenList = (0, useTokenList_1.useTokenList)();
    (0, react_1.useEffect)(() => {
        (function () {
            return __awaiter(this, void 0, void 0, function* () {
                if (owner && tokenAccounts) {
                    try {
                        setLoading(true);
                        const tokenAccountsWithMeta = yield tokenCollectiveSdk.getUserTokensWithMeta(tokenAccounts);
                        // @ts-ignore
                        setData([
                            ...(includeSol
                                ? [
                                    {
                                        publicKey: publicKey || undefined,
                                        displayName: "SOL",
                                        metadata: _1.solMetadata,
                                        account: {
                                            address: publicKey,
                                            mint: spl_token_1.NATIVE_MINT,
                                            amount: account === null || account === void 0 ? void 0 : account.lamports,
                                        },
                                        image: yield spl_utils_1.SplTokenMetadata.getImage(_1.solMetadata.data.uri),
                                    },
                                ]
                                : []),
                            ...tokenAccountsWithMeta,
                        ]);
                    }
                    catch (e) {
                        setError(e);
                    }
                    finally {
                        setLoading(false);
                    }
                }
            });
        })();
    }, [owner, tokenAccounts, tokenCollectiveSdk, setData, setLoading, setError]);
    // Enrich with metadata from the token list
    const enriched = (0, react_1.useMemo)(() => data.map((d) => {
        var _a;
        const enriched = (0, _1.toMetadata)(tokenList && d.account && tokenList.get((_a = d.account) === null || _a === void 0 ? void 0 : _a.mint.toBase58()));
        return Object.assign(Object.assign({}, d), { image: d.image || (enriched === null || enriched === void 0 ? void 0 : enriched.data.uri), metadata: d.metadata || enriched });
    }), [data, tokenList]);
    return {
        data: enriched,
        loading: loading || loadingTokenAccounts,
        error: error || tokenAccountsError,
    };
};
exports.useUserTokensWithMeta = useUserTokensWithMeta;
//# sourceMappingURL=useUserTokensWithMeta.js.map

/***/ }),

/***/ 8981:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useWalletTokenAccounts = void 0;
const wallet_adapter_react_1 = __webpack_require__(8659);
const react_async_hook_1 = __webpack_require__(3188);
const utils_1 = __webpack_require__(6057);
/**
 * Get all token accounts associated with this wallet
 * @param owner
 * @returns
 */
const useWalletTokenAccounts = (owner) => {
    const { connection } = (0, wallet_adapter_react_1.useConnection)();
    return (0, react_async_hook_1.useAsync)(utils_1.getWalletTokenAccounts, [connection, owner]);
};
exports.useWalletTokenAccounts = useWalletTokenAccounts;
//# sourceMappingURL=useWalletTokenAccounts.js.map

/***/ }),

/***/ 45:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useWalletTokensWithMeta = void 0;
const wallet_adapter_react_1 = __webpack_require__(8659);
const _1 = __webpack_require__(8721);
const react_async_hook_1 = __webpack_require__(3188);
const useWalletTokenAccounts_1 = __webpack_require__(8981);
/**
 * @deprecated The method should not be used. It fetches way too much data. Consider fetching only the data
 * you need in the components you need. If each component fetches data around a token, you can display a loading
 * mask for each individual component
 *
 * Get all tokens in a wallet plus all relevant metadata from spl-token-metadata and spl-token-collective
 *
 * @param owner
 * @returns
 */
function useWalletTokensWithMeta(owner) {
    const { connection } = (0, wallet_adapter_react_1.useConnection)();
    const { result: tokenAccounts, error } = (0, useWalletTokenAccounts_1.useWalletTokenAccounts)(owner);
    const { tokenCollectiveSdk, loading } = (0, _1.useStrataSdks)();
    const getTokensWithMeta = tokenCollectiveSdk
        ? tokenCollectiveSdk.getUserTokensWithMeta
        : () => Promise.resolve([]);
    const asyncResult = (0, react_async_hook_1.useAsync)(getTokensWithMeta, [connection, tokenAccounts]);
    return Object.assign(Object.assign({}, asyncResult), { loading: loading || asyncResult.loading, error: asyncResult.error || error });
}
exports.useWalletTokensWithMeta = useWalletTokensWithMeta;
//# sourceMappingURL=useWalletTokensWithMeta.js.map

/***/ }),

/***/ 1186:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8255), exports);
__exportStar(__webpack_require__(8721), exports);
__exportStar(__webpack_require__(5104), exports);
__exportStar(__webpack_require__(6057), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8465:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getWalletTokenAccounts = exports.TokenAccountParser = exports.deserializeAccount = void 0;
const web3_js_1 = __webpack_require__(7831);
const spl_token_1 = __webpack_require__(9874);
const truthy_1 = __webpack_require__(6717);
const deserializeAccount = (data) => {
    const accountInfo = spl_token_1.AccountLayout.decode(data);
    accountInfo.mint = new web3_js_1.PublicKey(accountInfo.mint);
    accountInfo.owner = new web3_js_1.PublicKey(accountInfo.owner);
    accountInfo.amount = spl_token_1.u64.fromBuffer(accountInfo.amount);
    if (accountInfo.delegateOption === 0) {
        accountInfo.delegate = null;
        accountInfo.delegatedAmount = new spl_token_1.u64(0);
    }
    else {
        accountInfo.delegate = new web3_js_1.PublicKey(accountInfo.delegate);
        accountInfo.delegatedAmount = spl_token_1.u64.fromBuffer(accountInfo.delegatedAmount);
    }
    accountInfo.isInitialized = accountInfo.state !== 0;
    accountInfo.isFrozen = accountInfo.state === 2;
    if (accountInfo.isNativeOption === 1) {
        accountInfo.rentExemptReserve = spl_token_1.u64.fromBuffer(accountInfo.isNative);
        accountInfo.isNative = true;
    }
    else {
        accountInfo.rentExemptReserve = null;
        accountInfo.isNative = false;
    }
    if (accountInfo.closeAuthorityOption === 0) {
        accountInfo.closeAuthority = null;
    }
    else {
        accountInfo.closeAuthority = new web3_js_1.PublicKey(accountInfo.closeAuthority);
    }
    return accountInfo;
};
exports.deserializeAccount = deserializeAccount;
const TokenAccountParser = (pubKey, info) => {
    // Sometimes a wrapped sol account gets closed, goes to 0 length,
    // triggers an update over wss which triggers this guy to get called
    // since your UI already logged that pubkey as a token account. Check for length.
    if (info.data.length > 0) {
        const buffer = Buffer.from(info.data);
        const data = (0, exports.deserializeAccount)(buffer);
        const details = {
            pubkey: pubKey,
            account: Object.assign({}, info),
            info: data,
        };
        return details;
    }
};
exports.TokenAccountParser = TokenAccountParser;
const getWalletTokenAccounts = (connection, owner) => __awaiter(void 0, void 0, void 0, function* () {
    if (!owner) {
        return [];
    }
    // user accounts are updated via ws subscription
    const accounts = yield connection.getTokenAccountsByOwner(owner, {
        programId: spl_token_1.TOKEN_PROGRAM_ID,
    });
    const tokenAccounts = accounts.value
        .map((info) => (0, exports.TokenAccountParser)(info.pubkey, info.account))
        .filter(truthy_1.truthy)
        .filter((t) => t.info.amount.gt(new spl_token_1.u64(0)));
    return tokenAccounts;
});
exports.getWalletTokenAccounts = getWalletTokenAccounts;
//# sourceMappingURL=getUserTokenAccounts.js.map

/***/ }),

/***/ 6057:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.roundToDecimals = exports.NameService = void 0;
__exportStar(__webpack_require__(6717), exports);
__exportStar(__webpack_require__(8465), exports);
exports.NameService = __importStar(__webpack_require__(5454));
function roundToDecimals(num, decimals) {
    return Math.trunc(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
exports.roundToDecimals = roundToDecimals;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5454:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createReverseTwitterRegistry = exports.createVerifiedTwitterRegistry = exports.getTwitterRegistry = exports.getTwitterRegistryKey = void 0;
// @ts-nocheck
const spl_name_service_1 = __webpack_require__(5525);
const web3_js_1 = __webpack_require__(7831);
const borsh_1 = __webpack_require__(3871);
const bn_js_1 = __importDefault(__webpack_require__(2961));
function getTwitterRegistryKey(handle, twitterRootParentRegistryKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedTwitterHandle = yield (0, spl_name_service_1.getHashedName)(handle);
        const twitterHandleRegistryKey = yield (0, spl_name_service_1.getNameAccountKey)(hashedTwitterHandle, undefined, twitterRootParentRegistryKey);
        return twitterHandleRegistryKey;
    });
}
exports.getTwitterRegistryKey = getTwitterRegistryKey;
function getTwitterRegistry(connection, twitter_handle, twitterRootParentRegistryKey = spl_name_service_1.TWITTER_ROOT_PARENT_REGISTRY_KEY) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = yield getTwitterRegistryKey(twitter_handle, twitterRootParentRegistryKey);
        const registry = spl_name_service_1.NameRegistryState.retrieve(connection, key);
        return registry;
    });
}
exports.getTwitterRegistry = getTwitterRegistry;
function createVerifiedTwitterRegistry(connection, twitterHandle, verifiedPubkey, space, // The space that the user will have to write data into the verified registry
payerKey, nameProgramId = spl_name_service_1.NAME_PROGRAM_ID, twitterVerificationAuthority = spl_name_service_1.TWITTER_VERIFICATION_AUTHORITY, twitterRootParentRegistryKey = spl_name_service_1.TWITTER_ROOT_PARENT_REGISTRY_KEY) {
    return __awaiter(this, void 0, void 0, function* () {
        // Create user facing registry
        const hashedTwitterHandle = yield (0, spl_name_service_1.getHashedName)(twitterHandle);
        const twitterHandleRegistryKey = yield (0, spl_name_service_1.getNameAccountKey)(hashedTwitterHandle, undefined, twitterRootParentRegistryKey);
        let instructions = [
            (0, spl_name_service_1.createInstruction)(nameProgramId, web3_js_1.SystemProgram.programId, twitterHandleRegistryKey, verifiedPubkey, payerKey, hashedTwitterHandle, new spl_name_service_1.Numberu64(yield connection.getMinimumBalanceForRentExemption(space)), new bn_js_1.default(space), undefined, twitterRootParentRegistryKey, twitterVerificationAuthority // Twitter authority acts as owner of the parent for all user-facing registries
            ),
        ];
        instructions = instructions.concat(yield createReverseTwitterRegistry(connection, twitterHandle, twitterHandleRegistryKey, verifiedPubkey, payerKey, nameProgramId, twitterVerificationAuthority, twitterRootParentRegistryKey));
        return instructions;
    });
}
exports.createVerifiedTwitterRegistry = createVerifiedTwitterRegistry;
function createReverseTwitterRegistry(connection, twitterHandle, twitterRegistryKey, verifiedPubkey, payerKey, nameProgramId = spl_name_service_1.NAME_PROGRAM_ID, twitterVerificationAuthority = spl_name_service_1.TWITTER_VERIFICATION_AUTHORITY, twitterRootParentRegistryKey = spl_name_service_1.TWITTER_ROOT_PARENT_REGISTRY_KEY) {
    return __awaiter(this, void 0, void 0, function* () {
        // Create the reverse lookup registry
        const hashedVerifiedPubkey = yield (0, spl_name_service_1.getHashedName)(verifiedPubkey.toString());
        const reverseRegistryKey = yield (0, spl_name_service_1.getNameAccountKey)(hashedVerifiedPubkey, twitterVerificationAuthority, twitterRootParentRegistryKey);
        let reverseTwitterRegistryStateBuff = (0, borsh_1.serialize)(spl_name_service_1.ReverseTwitterRegistryState.schema, new spl_name_service_1.ReverseTwitterRegistryState({
            twitterRegistryKey: twitterRegistryKey.toBuffer(),
            twitterHandle,
        }));
        return [
            (0, spl_name_service_1.createInstruction)(nameProgramId, web3_js_1.SystemProgram.programId, reverseRegistryKey, verifiedPubkey, payerKey, hashedVerifiedPubkey, new spl_name_service_1.Numberu64(yield connection.getMinimumBalanceForRentExemption(reverseTwitterRegistryStateBuff.length)), new bn_js_1.default(reverseTwitterRegistryStateBuff.length), twitterVerificationAuthority, // Twitter authority acts as class for all reverse-lookup registries
            twitterRootParentRegistryKey, // Reverse registries are also children of the root
            twitterVerificationAuthority),
            (0, spl_name_service_1.updateInstruction)(nameProgramId, reverseRegistryKey, new spl_name_service_1.Numberu32(0), Buffer.from(reverseTwitterRegistryStateBuff), twitterVerificationAuthority),
        ];
    });
}
exports.createReverseTwitterRegistry = createReverseTwitterRegistry;
//# sourceMappingURL=nameServiceTwitter.js.map

/***/ }),

/***/ 6717:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.truthy = void 0;
const truthy = (value) => !!value;
exports.truthy = truthy;
//# sourceMappingURL=truthy.js.map

/***/ }),

/***/ 7101:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BondingHierarchy = void 0;
const spl_token_1 = __webpack_require__(9874);
function sanitizeSolMint(mint, wrappedSolMint) {
    if (mint.equals(spl_token_1.NATIVE_MINT)) {
        return wrappedSolMint;
    }
    return mint;
}
class BondingHierarchy {
    constructor({ parent, child, tokenBonding, pricingCurve, wrappedSolMint }) {
        this.parent = parent;
        this.child = child;
        this.tokenBonding = tokenBonding;
        this.pricingCurve = pricingCurve;
        this.wrappedSolMint = wrappedSolMint;
    }
    toArray() {
        let arr = [];
        let current = this;
        do {
            arr.push(current);
            current = current === null || current === void 0 ? void 0 : current.parent;
        } while (current);
        return arr;
    }
    lowest(one, two) {
        return this.toArray().find((hierarchy) => hierarchy.tokenBonding.targetMint.equals(sanitizeSolMint(one, this.wrappedSolMint)) ||
            hierarchy.tokenBonding.targetMint.equals(sanitizeSolMint(two, this.wrappedSolMint))).tokenBonding.targetMint;
    }
    /**
     * Get the path from one token to another.
     *
     * @param one
     * @param two
     */
    path(one, two) {
        const lowest = this.lowest(one, two);
        const highest = lowest.equals(one)
            ? sanitizeSolMint(two, this.wrappedSolMint)
            : sanitizeSolMint(one, this.wrappedSolMint);
        const arr = this.toArray();
        const lowIdx = arr.findIndex((h) => h.tokenBonding.targetMint.equals(lowest));
        const highIdx = arr.findIndex((h) => h.tokenBonding.baseMint.equals(highest));
        return arr.slice(lowIdx, highIdx + 1);
    }
    /**
     * Find the bonding curve whose target is this mint
     *
     * @param mint
     */
    findTarget(mint) {
        return this.toArray().find((h) => h.tokenBonding.targetMint.equals(mint))
            .tokenBonding;
    }
    /**
     * Does this hierarchy contain all of these mints?
     *
     * @param mints
     */
    contains(...mints) {
        const availableMints = new Set(this.toArray().flatMap((h) => [
            h.tokenBonding.baseMint.toBase58(),
            h.tokenBonding.targetMint.toBase58(),
        ]));
        return mints.every((mint) => availableMints.has(sanitizeSolMint(mint, this.wrappedSolMint).toBase58()));
    }
}
exports.BondingHierarchy = BondingHierarchy;
//# sourceMappingURL=bondingHierarchy.js.map

/***/ }),

/***/ 3912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeDecayExponentialCurve = exports.ExponentialCurve = exports.BaseExponentialCurve = exports.TimeCurve = exports.fromCurve = void 0;
const utils_1 = __webpack_require__(5216);
function fromCurve(curve, baseAmount, targetSupply, goLiveUnixTime) {
    switch (Object.keys(curve.definition)[0]) {
        case "timeV0":
            return new TimeCurve({
                curve,
                baseAmount,
                targetSupply,
                goLiveUnixTime,
            });
    }
    throw new Error("Curve not found");
}
exports.fromCurve = fromCurve;
function transitionFeesToPercent(offset, fees) {
    if (!fees) {
        return 0;
    }
    if (offset > fees.interval) {
        return 0;
    }
    return ((0, utils_1.asDecimal)(fees.percentage) * ((fees.interval - offset) / fees.interval));
}
function now() {
    return new Date().valueOf() / 1000;
}
class TimeCurve {
    constructor({ curve, baseAmount, targetSupply, goLiveUnixTime, }) {
        this.curve = curve;
        this.baseAmount = baseAmount;
        this.targetSupply = targetSupply;
        this.goLiveUnixTime = goLiveUnixTime;
    }
    currentCurve(unixTime = now()) {
        let subCurve;
        if (unixTime < this.goLiveUnixTime) {
            subCurve = this.curve.definition.timeV0.curves[0];
        }
        else {
            subCurve = [...this.curve.definition.timeV0.curves]
                .reverse()
                .find((c) => unixTime >= this.goLiveUnixTime + c.offset.toNumber());
        }
        return {
            subCurve: subCurve.curve.exponentialCurveV0
                ? new ExponentialCurve(subCurve.curve.exponentialCurveV0, this.baseAmount, this.targetSupply, this.goLiveUnixTime + subCurve.offset.toNumber())
                : new TimeDecayExponentialCurve(subCurve.curve
                    .timeDecayExponentialCurveV0, this.baseAmount, this.targetSupply, this.goLiveUnixTime + subCurve.offset.toNumber()),
            offset: subCurve.offset.toNumber(),
            buyTransitionFees: subCurve.buyTransitionFees,
            sellTransitionFees: subCurve.sellTransitionFees,
        };
    }
    current(unixTime = now()) {
        const { subCurve, buyTransitionFees, offset } = this.currentCurve(unixTime);
        return (subCurve.current(unixTime) *
            (1 - transitionFeesToPercent(unixTime - offset, buyTransitionFees)));
    }
    locked() {
        return this.currentCurve().subCurve.locked();
    }
    sellTargetAmount(targetAmountNum, baseRoyaltiesPercent, targetRoyaltiesPercent, unixTime = now()) {
        const { subCurve, sellTransitionFees, offset } = this.currentCurve(unixTime);
        const price = subCurve.sellTargetAmount(targetAmountNum, baseRoyaltiesPercent, targetRoyaltiesPercent, unixTime);
        return (price *
            (1 -
                transitionFeesToPercent(unixTime - this.goLiveUnixTime - offset, sellTransitionFees)));
    }
    buyTargetAmount(targetAmountNum, baseRoyaltiesPercent, targetRoyaltiesPercent, unixTime = now()) {
        const { subCurve, buyTransitionFees, offset } = this.currentCurve(unixTime);
        const price = subCurve.buyTargetAmount(targetAmountNum, baseRoyaltiesPercent, targetRoyaltiesPercent, unixTime);
        return (price *
            (1 +
                transitionFeesToPercent(unixTime - this.goLiveUnixTime - offset, buyTransitionFees)));
    }
    buyWithBaseAmount(baseAmountNum, baseRoyaltiesPercent, targetRoyaltiesPercent, unixTime = now()) {
        const { subCurve, buyTransitionFees, offset } = this.currentCurve(unixTime);
        const baseAmountPostFees = baseAmountNum *
            (1 -
                transitionFeesToPercent(unixTime - this.goLiveUnixTime - offset, buyTransitionFees));
        return subCurve.buyWithBaseAmount(baseAmountPostFees, baseRoyaltiesPercent, targetRoyaltiesPercent);
    }
}
exports.TimeCurve = TimeCurve;
class BaseExponentialCurve {
    constructor(c, baseAmount, targetSupply, goLiveUnixTime) {
        this.c = c;
        this.baseAmount = baseAmount;
        this.targetSupply = targetSupply;
        this.goLiveUnixTime = goLiveUnixTime;
    }
    current() {
        return this.changeInTargetAmount(1, 0, 0);
    }
    locked() {
        return this.baseAmount;
    }
    changeInTargetAmount(targetAmountNum, baseRoyaltiesPercent, targetRoyaltiesPercent, unixTime = now()) {
        const R = this.baseAmount;
        const S = this.targetSupply;
        const k = this.k(unixTime - this.goLiveUnixTime);
        // Calculate with the actual target amount they will need to get the target amount after royalties
        const dS = targetAmountNum * (1 / (1 - (0, utils_1.asDecimal)(targetRoyaltiesPercent)));
        if (R == 0 || S == 0) {
            // b dS + (c dS^(1 + k))/(1 + k)
            return ((this.b * dS + (this.c * Math.pow(dS, 1 + k)) / (1 + k)) *
                (1 / (1 - (0, utils_1.asDecimal)(baseRoyaltiesPercent))));
        }
        else {
            if (this.b == 0 && this.c != 0) {
                /*
                  (R / S^(1 + k)) ((S + dS)(S + dS)^k - S^(1 + k))
                */
                return ((R / Math.pow(S, 1 + k)) *
                    ((S + dS) * Math.pow(S + dS, k) - Math.pow(S, 1 + k)) *
                    (1 / (1 - (0, utils_1.asDecimal)(baseRoyaltiesPercent))));
            }
            else if (this.c == 0) {
                // R dS / S
                return ((R * dS) / S) * (1 / (1 - (0, utils_1.asDecimal)(baseRoyaltiesPercent)));
            }
            else {
                throw new Error("Cannot convert base amount to target amount when both b and k are defined on an exponential curve. The math is too hard");
            }
        }
    }
    sellTargetAmount(targetAmountNum, baseRoyaltiesPercent, targetRoyaltiesPercent, unixTime = now()) {
        return (-this.changeInTargetAmount(-targetAmountNum * (1 - (0, utils_1.asDecimal)(targetRoyaltiesPercent)), 0, 0, unixTime) *
            (1 - (0, utils_1.asDecimal)(baseRoyaltiesPercent)));
    }
    buyTargetAmount(targetAmountNum, baseRoyaltiesPercent, targetRoyaltiesPercent, unixTime = now()) {
        return this.changeInTargetAmount(targetAmountNum, baseRoyaltiesPercent, targetRoyaltiesPercent, unixTime);
    }
    buyWithBaseAmount(baseAmountNum, baseRoyaltiesPercent, targetRoyaltiesPercent, unixTime = now()) {
        const k = this.k(unixTime - this.goLiveUnixTime);
        const dR = baseAmountNum * (1 - (0, utils_1.asDecimal)(baseRoyaltiesPercent));
        if (this.baseAmount == 0 || this.targetSupply == 0) {
            if (this.b == 0) {
                /*
                 * -S + (((1 + k) dR)/c)^(1/(1 + k))
                 */
                return ((Math.pow(((1 + k) * dR) / this.c, 1 / (1 + k)) - this.targetSupply) *
                    (1 - (0, utils_1.asDecimal)(targetRoyaltiesPercent)));
            }
            else if (this.c == 0) {
                if (this.baseAmount == 0) {
                    return (dR / this.b) * (1 - (0, utils_1.asDecimal)(targetRoyaltiesPercent));
                }
                else {
                    return (((this.targetSupply * dR) / this.baseAmount) *
                        (1 - (0, utils_1.asDecimal)(targetRoyaltiesPercent)));
                }
            }
            throw new Error("Cannot convert base amount to target amount when both b and k are defined on an exponential curve. The math is too hard");
        }
        else {
            const R = this.baseAmount;
            const S = this.targetSupply;
            if (this.b == 0) {
                /*
                 * dS = -S + ((S^(1 + k) (R + dR))/R)^(1/(1 + k))
                 */
                return ((-S + Math.pow((Math.pow(S, 1 + k) * (R + dR)) / R, 1 / (1 + k))) *
                    (1 - (0, utils_1.asDecimal)(targetRoyaltiesPercent)));
            }
            else if (this.c == 0) {
                // dS = S dR / R
                return ((S * dR) / R) * (1 - (0, utils_1.asDecimal)(targetRoyaltiesPercent));
            }
            else {
                throw new Error("Cannot convert base amount to target amount when both b and k are defined on an exponential curve. The math is too hard");
            }
        }
    }
}
exports.BaseExponentialCurve = BaseExponentialCurve;
class ExponentialCurve extends BaseExponentialCurve {
    constructor(curve, baseAmount, targetSupply, goLiveUnixTime = now()) {
        super(+curve.c.toString() / 1000000000000, baseAmount, targetSupply, goLiveUnixTime);
        this.b = +curve.b.toString() / 1000000000000;
        this._k = curve.pow / curve.frac;
        this.pow = curve.pow;
        this.frac = curve.frac;
        this.baseAmount = baseAmount;
        this.targetSupply = targetSupply;
    }
    k(_ = now()) {
        return this._k;
    }
}
exports.ExponentialCurve = ExponentialCurve;
class TimeDecayExponentialCurve extends BaseExponentialCurve {
    constructor(curve, baseAmount, targetSupply, goLiveUnixTime) {
        super(+curve.c.toString() / 1000000000000, baseAmount, targetSupply, goLiveUnixTime);
        this.b = 0;
        this.k1 = +curve.k1.toString() / 1000000000000;
        this.k0 = +curve.k0.toString() / 1000000000000;
        this.d = +curve.d.toString() / 1000000000000;
        this.interval = curve.interval;
        this.baseAmount = baseAmount;
        this.targetSupply = targetSupply;
    }
    k(timeElapsed) {
        const ret = this.k0 -
            (this.k0 - this.k1) *
                Math.min(Math.pow(timeElapsed / this.interval, this.d), 1);
        return ret;
    }
}
exports.TimeDecayExponentialCurve = TimeDecayExponentialCurve;
//# sourceMappingURL=curves.js.map

/***/ }),

/***/ 8072:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PiecewiseCurve = exports.PrimitiveCurve = exports.ErrorCode = exports.SplTokenBondingIDLJson = void 0;
exports.SplTokenBondingIDLJson = {
    "version": "3.2.5",
    "name": "spl_token_bonding",
    "instructions": [
        {
            "name": "initializeSolStorageV0",
            "accounts": [
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "state",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "solStorage",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "wrappedSolMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mintAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "InitializeSolStorageV0Args"
                    }
                }
            ]
        },
        {
            "name": "buyWrappedSolV0",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "wrappedSolMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mintAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "solStorage",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "source",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "destination",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "BuyWrappedSolV0Args"
                    }
                }
            ]
        },
        {
            "name": "sellWrappedSolV0",
            "accounts": [
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "wrappedSolMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "solStorage",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "source",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "owner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "destination",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "SellWrappedSolV0Args"
                    }
                }
            ]
        },
        {
            "name": "createCurveV0",
            "accounts": [
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "curve",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "CreateCurveV0Args"
                    }
                }
            ]
        },
        {
            "name": "initializeTokenBondingV0",
            "accounts": [
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "curve",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenBonding",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "baseMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "targetMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "baseStorage",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "buyBaseRoyalties",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "buyTargetRoyalties",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "sellBaseRoyalties",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "sellTargetRoyalties",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clock",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "InitializeTokenBondingV0Args"
                    }
                }
            ]
        },
        {
            "name": "closeTokenBondingV0",
            "accounts": [
                {
                    "name": "refund",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenBonding",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "generalAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "targetMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "baseStorage",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "transferReservesV0",
            "accounts": [
                {
                    "name": "common",
                    "accounts": [
                        {
                            "name": "tokenBonding",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "reserveAuthority",
                            "isMut": false,
                            "isSigner": true
                        },
                        {
                            "name": "baseMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "baseStorage",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "tokenProgram",
                            "isMut": false,
                            "isSigner": false
                        }
                    ]
                },
                {
                    "name": "destination",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "TransferReservesV0Args"
                    }
                }
            ]
        },
        {
            "name": "transferReservesNativeV0",
            "accounts": [
                {
                    "name": "common",
                    "accounts": [
                        {
                            "name": "tokenBonding",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "reserveAuthority",
                            "isMut": false,
                            "isSigner": true
                        },
                        {
                            "name": "baseMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "baseStorage",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "tokenProgram",
                            "isMut": false,
                            "isSigner": false
                        }
                    ]
                },
                {
                    "name": "destination",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "wrappedSolMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mintAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "solStorage",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "TransferReservesV0Args"
                    }
                }
            ]
        },
        {
            "name": "updateReserveAuthorityV0",
            "accounts": [
                {
                    "name": "tokenBonding",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "reserveAuthority",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "UpdateReserveAuthorityV0Args"
                    }
                }
            ]
        },
        {
            "name": "updateTokenBondingV0",
            "accounts": [
                {
                    "name": "tokenBonding",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "generalAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "baseMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "targetMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "buyBaseRoyalties",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "buyTargetRoyalties",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "sellBaseRoyalties",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "sellTargetRoyalties",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "UpdateTokenBondingV0Args"
                    }
                }
            ]
        },
        {
            "name": "buyV0",
            "accounts": [
                {
                    "name": "tokenBonding",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "curve",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "baseMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "targetMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "baseStorage",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "buyBaseRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "buyTargetRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "source",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "sourceAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "destination",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clock",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "BuyV0Args"
                    }
                }
            ]
        },
        {
            "name": "buyV1",
            "accounts": [
                {
                    "name": "common",
                    "accounts": [
                        {
                            "name": "tokenBonding",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "curve",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "baseMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "targetMint",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "baseStorage",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "buyBaseRoyalties",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "destination",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "buyTargetRoyalties",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "tokenProgram",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "clock",
                            "isMut": false,
                            "isSigner": false
                        }
                    ]
                },
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "source",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "sourceAuthority",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "BuyV0Args"
                    }
                }
            ]
        },
        {
            "name": "buyNativeV0",
            "accounts": [
                {
                    "name": "common",
                    "accounts": [
                        {
                            "name": "tokenBonding",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "curve",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "baseMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "targetMint",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "baseStorage",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "buyBaseRoyalties",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "destination",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "buyTargetRoyalties",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "tokenProgram",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "clock",
                            "isMut": false,
                            "isSigner": false
                        }
                    ]
                },
                {
                    "name": "source",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "wrappedSolMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mintAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "solStorage",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "BuyV0Args"
                    }
                }
            ]
        },
        {
            "name": "sellV0",
            "accounts": [
                {
                    "name": "tokenBonding",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "curve",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "baseMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "targetMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "baseStorage",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "sellBaseRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "sellTargetRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "source",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "sourceAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "destination",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clock",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "SellV0Args"
                    }
                }
            ]
        },
        {
            "name": "sellV1",
            "accounts": [
                {
                    "name": "common",
                    "accounts": [
                        {
                            "name": "tokenBonding",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "curve",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "baseMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "targetMint",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "baseStorage",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "sellBaseRoyalties",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "source",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "sourceAuthority",
                            "isMut": false,
                            "isSigner": true
                        },
                        {
                            "name": "sellTargetRoyalties",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "tokenProgram",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "clock",
                            "isMut": false,
                            "isSigner": false
                        }
                    ]
                },
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "destination",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "SellV0Args"
                    }
                }
            ]
        },
        {
            "name": "sellNativeV0",
            "accounts": [
                {
                    "name": "common",
                    "accounts": [
                        {
                            "name": "tokenBonding",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "curve",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "baseMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "targetMint",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "baseStorage",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "sellBaseRoyalties",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "source",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "sourceAuthority",
                            "isMut": false,
                            "isSigner": true
                        },
                        {
                            "name": "sellTargetRoyalties",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "tokenProgram",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "clock",
                            "isMut": false,
                            "isSigner": false
                        }
                    ]
                },
                {
                    "name": "destination",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "state",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "wrappedSolMint",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mintAuthority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "solStorage",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "SellV0Args"
                    }
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "ProgramStateV0",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "wrappedSolMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "solStorage",
                        "type": "publicKey"
                    },
                    {
                        "name": "mintAuthorityBumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "solStorageBumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "bumpSeed",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "CurveV0",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "definition",
                        "type": {
                            "defined": "PiecewiseCurve"
                        }
                    }
                ]
            }
        },
        {
            "name": "TokenBondingV0",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "baseMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "targetMint",
                        "type": "publicKey"
                    },
                    {
                        "name": "generalAuthority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "reserveAuthority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "curveAuthority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "baseStorage",
                        "type": "publicKey"
                    },
                    {
                        "name": "buyBaseRoyalties",
                        "type": "publicKey"
                    },
                    {
                        "name": "buyTargetRoyalties",
                        "type": "publicKey"
                    },
                    {
                        "name": "sellBaseRoyalties",
                        "type": "publicKey"
                    },
                    {
                        "name": "sellTargetRoyalties",
                        "type": "publicKey"
                    },
                    {
                        "name": "buyBaseRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "buyTargetRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "sellBaseRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "sellTargetRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "curve",
                        "type": "publicKey"
                    },
                    {
                        "name": "mintCap",
                        "type": {
                            "option": "u64"
                        }
                    },
                    {
                        "name": "purchaseCap",
                        "type": {
                            "option": "u64"
                        }
                    },
                    {
                        "name": "goLiveUnixTime",
                        "type": "i64"
                    },
                    {
                        "name": "freezeBuyUnixTime",
                        "type": {
                            "option": "i64"
                        }
                    },
                    {
                        "name": "createdAtUnixTime",
                        "type": "i64"
                    },
                    {
                        "name": "buyFrozen",
                        "type": "bool"
                    },
                    {
                        "name": "sellFrozen",
                        "type": "bool"
                    },
                    {
                        "name": "index",
                        "type": "u16"
                    },
                    {
                        "name": "bumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "baseStorageBumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "targetMintAuthorityBumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "baseStorageAuthorityBumpSeed",
                        "type": {
                            "option": "u8"
                        }
                    },
                    {
                        "name": "reserveBalanceFromBonding",
                        "type": "u64"
                    },
                    {
                        "name": "supplyFromBonding",
                        "type": "u64"
                    },
                    {
                        "name": "ignoreExternalReserveChanges",
                        "type": "bool"
                    },
                    {
                        "name": "ignoreExternalSupplyChanges",
                        "type": "bool"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "BuyWithBaseV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "baseAmount",
                        "type": "u64"
                    },
                    {
                        "name": "minimumTargetAmount",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "BuyTargetAmountV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "targetAmount",
                        "type": "u64"
                    },
                    {
                        "name": "maximumPrice",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "BuyV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "buyWithBase",
                        "type": {
                            "option": {
                                "defined": "BuyWithBaseV0Args"
                            }
                        }
                    },
                    {
                        "name": "buyTargetAmount",
                        "type": {
                            "option": {
                                "defined": "BuyTargetAmountV0Args"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "BuyWrappedSolV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "amount",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "CreateCurveV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "definition",
                        "type": {
                            "defined": "PiecewiseCurve"
                        }
                    }
                ]
            }
        },
        {
            "name": "InitializeSolStorageV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "mintAuthorityBumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "solStorageBumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "bumpSeed",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "InitializeTokenBondingV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "buyBaseRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "buyTargetRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "sellBaseRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "sellTargetRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "goLiveUnixTime",
                        "type": "i64"
                    },
                    {
                        "name": "freezeBuyUnixTime",
                        "type": {
                            "option": "i64"
                        }
                    },
                    {
                        "name": "mintCap",
                        "type": {
                            "option": "u64"
                        }
                    },
                    {
                        "name": "purchaseCap",
                        "type": {
                            "option": "u64"
                        }
                    },
                    {
                        "name": "generalAuthority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "reserveAuthority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "curveAuthority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "buyFrozen",
                        "type": "bool"
                    },
                    {
                        "name": "index",
                        "type": "u16"
                    },
                    {
                        "name": "bumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "sellFrozen",
                        "type": "bool"
                    },
                    {
                        "name": "ignoreExternalReserveChanges",
                        "type": "bool"
                    },
                    {
                        "name": "ignoreExternalSupplyChanges",
                        "type": "bool"
                    },
                    {
                        "name": "initialReservesPad",
                        "type": "u64"
                    },
                    {
                        "name": "initialSupplyPad",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "SellV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "targetAmount",
                        "type": "u64"
                    },
                    {
                        "name": "minimumPrice",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "SellWrappedSolV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "amount",
                        "type": "u64"
                    },
                    {
                        "name": "all",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "TimeCurveV0",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "offset",
                        "type": "i64"
                    },
                    {
                        "name": "curve",
                        "type": {
                            "defined": "PrimitiveCurve"
                        }
                    },
                    {
                        "name": "buyTransitionFees",
                        "type": {
                            "option": {
                                "defined": "TransitionFeeV0"
                            }
                        }
                    },
                    {
                        "name": "sellTransitionFees",
                        "type": {
                            "option": {
                                "defined": "TransitionFeeV0"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "TransitionFeeV0",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "percentage",
                        "type": "u32"
                    },
                    {
                        "name": "interval",
                        "type": "u32"
                    }
                ]
            }
        },
        {
            "name": "TransferReservesV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "amount",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "UpdateReserveAuthorityV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "newReserveAuthority",
                        "type": {
                            "option": "publicKey"
                        }
                    }
                ]
            }
        },
        {
            "name": "UpdateTokenBondingV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "generalAuthority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "buyBaseRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "buyTargetRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "sellBaseRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "sellTargetRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "buyFrozen",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "ErrorCode",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "NoMintAuthority"
                    },
                    {
                        "name": "InvalidMintAuthority"
                    },
                    {
                        "name": "InvalidBaseStorageAuthority"
                    },
                    {
                        "name": "NoAuthority"
                    },
                    {
                        "name": "ArithmeticError"
                    },
                    {
                        "name": "PriceTooHigh"
                    },
                    {
                        "name": "PriceTooLow"
                    },
                    {
                        "name": "MintSupplyTooLow"
                    },
                    {
                        "name": "SellDisabled"
                    },
                    {
                        "name": "NotLiveYet"
                    },
                    {
                        "name": "PassedMintCap"
                    },
                    {
                        "name": "OverPurchaseCap"
                    },
                    {
                        "name": "BuyFrozen"
                    },
                    {
                        "name": "WrappedSolNotAllowed"
                    },
                    {
                        "name": "InvalidCurve"
                    },
                    {
                        "name": "InvalidMint"
                    },
                    {
                        "name": "IgnoreExternalV1Only"
                    },
                    {
                        "name": "InvalidPad"
                    }
                ]
            }
        },
        {
            "name": "PrimitiveCurve",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "ExponentialCurveV0",
                        "fields": [
                            {
                                "name": "c",
                                "type": "u128"
                            },
                            {
                                "name": "b",
                                "type": "u128"
                            },
                            {
                                "name": "pow",
                                "type": "u8"
                            },
                            {
                                "name": "frac",
                                "type": "u8"
                            }
                        ]
                    },
                    {
                        "name": "TimeDecayExponentialCurveV0",
                        "fields": [
                            {
                                "name": "c",
                                "type": "u128"
                            },
                            {
                                "name": "k1",
                                "type": "u128"
                            },
                            {
                                "name": "k0",
                                "type": "u128"
                            },
                            {
                                "name": "interval",
                                "type": "u32"
                            },
                            {
                                "name": "d",
                                "type": "u128"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "name": "PiecewiseCurve",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "TimeV0",
                        "fields": [
                            {
                                "name": "curves",
                                "type": {
                                    "vec": {
                                        "defined": "TimeCurveV0"
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.ErrorCode = {
    NoMintAuthority: { nomintauthority: {} },
    InvalidMintAuthority: { invalidmintauthority: {} },
    InvalidBaseStorageAuthority: { invalidbasestorageauthority: {} },
    NoAuthority: { noauthority: {} },
    ArithmeticError: { arithmeticerror: {} },
    PriceTooHigh: { pricetoohigh: {} },
    PriceTooLow: { pricetoolow: {} },
    MintSupplyTooLow: { mintsupplytoolow: {} },
    SellDisabled: { selldisabled: {} },
    NotLiveYet: { notliveyet: {} },
    PassedMintCap: { passedmintcap: {} },
    OverPurchaseCap: { overpurchasecap: {} },
    BuyFrozen: { buyfrozen: {} },
    WrappedSolNotAllowed: { wrappedsolnotallowed: {} },
    InvalidCurve: { invalidcurve: {} },
    InvalidMint: { invalidmint: {} },
    IgnoreExternalV1Only: { ignoreexternalv1only: {} },
    InvalidPad: { invalidpad: {} }
};
exports.PrimitiveCurve = {
    ExponentialCurveV0: { exponentialcurvev0: {} },
    TimeDecayExponentialCurveV0: { timedecayexponentialcurvev0: {} }
};
exports.PiecewiseCurve = {
    TimeV0: { timev0: {} }
};
//# sourceMappingURL=spl-token-bonding.js.map

/***/ }),

/***/ 9587:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SplTokenBonding = exports.TimeCurveConfig = exports.TimeDecayExponentialCurveConfig = exports.ExponentialCurveConfig = void 0;
const mpl_token_metadata_1 = __webpack_require__(9817);
const anchor = __importStar(__webpack_require__(1024));
const spl_token_1 = __webpack_require__(9874);
const web3_js_1 = __webpack_require__(7831);
const spl_utils_1 = __webpack_require__(4022);
const bn_js_1 = __importDefault(__webpack_require__(2961));
const bondingHierarchy_1 = __webpack_require__(7101);
const curves_1 = __webpack_require__(3912);
const pricing_1 = __webpack_require__(5314);
const utils_1 = __webpack_require__(5216);
__exportStar(__webpack_require__(7101), exports);
__exportStar(__webpack_require__(3912), exports);
__exportStar(__webpack_require__(8072), exports);
__exportStar(__webpack_require__(5314), exports);
__exportStar(__webpack_require__(5216), exports);
function sleep(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => setTimeout(resolve, ms));
    });
}
function anyDefined(...args) {
    return args.some((a) => typeof a !== "undefined");
}
function definedOr(value, def) {
    if (typeof value == "undefined") {
        return def;
    }
    return value;
}
/**
 * Curve configuration for c(S^(pow/frac)) + b
 */
class ExponentialCurveConfig {
    constructor({ c = 1, b = 0, pow = 1, frac = 1, }) {
        this.c = (0, utils_1.toU128)(c);
        this.b = (0, utils_1.toU128)(b);
        this.pow = pow;
        this.frac = frac;
        if (this.b.gt(new bn_js_1.default(0)) && this.c.gt(new bn_js_1.default(0))) {
            throw new Error("Unsupported: Cannot define an exponential function with `b`, the math to go from base to target amount becomes too hard.");
        }
    }
    toRawPrimitiveConfig() {
        return {
            exponentialCurveV0: {
                // @ts-ignore
                c: this.c,
                // @ts-ignore
                b: this.b,
                // @ts-ignore
                pow: this.pow,
                // @ts-ignore
                frac: this.frac,
            },
        };
    }
    toRawConfig() {
        return {
            definition: {
                timeV0: {
                    curves: [
                        {
                            // @ts-ignore
                            offset: new bn_js_1.default(0),
                            // @ts-ignore
                            curve: this.toRawPrimitiveConfig(),
                        },
                    ],
                },
            },
        };
    }
}
exports.ExponentialCurveConfig = ExponentialCurveConfig;
/**
 * Curve configuration for c(S^(pow/frac)) + b
 */
class TimeDecayExponentialCurveConfig {
    constructor({ c = 1, k0 = 0, k1 = 1, d = 1, interval = 24 * 60 * 60, }) {
        this.c = (0, utils_1.toU128)(c);
        this.k0 = (0, utils_1.toU128)(k0);
        this.k1 = (0, utils_1.toU128)(k1);
        this.d = (0, utils_1.toU128)(d);
        this.interval = interval;
    }
    toRawPrimitiveConfig() {
        return {
            timeDecayExponentialCurveV0: {
                // @ts-ignore
                c: this.c,
                // @ts-ignore
                k0: this.k0,
                k1: this.k1,
                d: this.d,
                // @ts-ignore
                interval: this.interval,
            },
        };
    }
    toRawConfig() {
        return {
            definition: {
                timeV0: {
                    curves: [
                        {
                            // @ts-ignore
                            offset: new bn_js_1.default(0),
                            // @ts-ignore
                            curve: this.toRawPrimitiveConfig(),
                        },
                    ],
                },
            },
        };
    }
}
exports.TimeDecayExponentialCurveConfig = TimeDecayExponentialCurveConfig;
/**
 * Curve configuration that allows the curve to change parameters at discrete time offsets from the go live date
 */
class TimeCurveConfig {
    constructor() {
        this.curves = [];
    }
    addCurve(timeOffset, curve, buyTransitionFees = null, sellTransitionFees = null) {
        if (this.curves.length == 0 && timeOffset != 0) {
            throw new Error("First time offset must be 0");
        }
        this.curves.push({
            curve,
            offset: new bn_js_1.default(timeOffset),
            buyTransitionFees,
            sellTransitionFees,
        });
        return this;
    }
    toRawConfig() {
        return {
            definition: {
                timeV0: {
                    // @ts-ignore
                    curves: this.curves.map(({ curve, offset, buyTransitionFees, sellTransitionFees }) => ({
                        curve: curve.toRawPrimitiveConfig(),
                        offset,
                        buyTransitionFees,
                        sellTransitionFees,
                    })),
                },
            },
        };
    }
}
exports.TimeCurveConfig = TimeCurveConfig;
class SplTokenBonding extends spl_utils_1.AnchorSdk {
    constructor(provider, program) {
        super({ provider, program });
        this.curveDecoder = (pubkey, account) => {
            const coded = this.program.coder.accounts.decode("CurveV0", account.data);
            return Object.assign(Object.assign({}, coded), { publicKey: pubkey });
        };
        this.tokenBondingDecoder = (pubkey, account) => {
            const coded = this.program.coder.accounts.decode("TokenBondingV0", account.data);
            return Object.assign(Object.assign({}, coded), { publicKey: pubkey });
        };
    }
    static init(provider, splTokenBondingProgramId = SplTokenBonding.ID) {
        return __awaiter(this, void 0, void 0, function* () {
            const SplTokenBondingIDLJson = yield anchor.Program.fetchIdl(splTokenBondingProgramId, provider);
            const splTokenBonding = new anchor.Program(SplTokenBondingIDLJson, splTokenBondingProgramId, provider);
            return new this(provider, splTokenBonding);
        });
    }
    getTokenBonding(tokenBondingKey) {
        return this.getAccount(tokenBondingKey, this.tokenBondingDecoder);
    }
    getCurve(curveKey) {
        return this.getAccount(curveKey, this.curveDecoder);
    }
    /**
     * This is an admin function run once to initialize the smart contract.
     *
     * @returns Instructions needed to create sol storage
     */
    initializeSolStorageInstructions({ mintKeypair, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield this.getState();
            if (exists) {
                return {
                    output: null,
                    instructions: [],
                    signers: [],
                };
            }
            console.log("Sol storage does not exist, creating...");
            const [state, bumpSeed] = yield web3_js_1.PublicKey.findProgramAddress([Buffer.from("state", "utf-8")], this.programId);
            const [solStorage, solStorageBumpSeed] = yield web3_js_1.PublicKey.findProgramAddress([Buffer.from("sol-storage", "utf-8")], this.programId);
            const [wrappedSolAuthority, mintAuthorityBumpSeed] = yield web3_js_1.PublicKey.findProgramAddress([Buffer.from("wrapped-sol-authority", "utf-8")], this.programId);
            const instructions = [];
            const signers = [];
            signers.push(mintKeypair);
            instructions.push(...[
                web3_js_1.SystemProgram.createAccount({
                    fromPubkey: this.wallet.publicKey,
                    newAccountPubkey: mintKeypair.publicKey,
                    space: 82,
                    lamports: yield this.provider.connection.getMinimumBalanceForRentExemption(82),
                    programId: spl_token_1.TOKEN_PROGRAM_ID,
                }),
                spl_token_1.Token.createInitMintInstruction(spl_token_1.TOKEN_PROGRAM_ID, mintKeypair.publicKey, 9, this.wallet.publicKey, wrappedSolAuthority),
            ]);
            instructions.push(...new mpl_token_metadata_1.CreateMetadataV2({
                feePayer: this.wallet.publicKey,
            }, {
                metadata: yield mpl_token_metadata_1.Metadata.getPDA(mintKeypair.publicKey),
                mint: mintKeypair.publicKey,
                metadataData: new mpl_token_metadata_1.DataV2({
                    name: "Token Bonding Wrapped SOL",
                    symbol: "twSOL",
                    uri: "",
                    sellerFeeBasisPoints: 0,
                    // @ts-ignore
                    creators: null,
                    collection: null,
                    uses: null,
                }),
                mintAuthority: this.wallet.publicKey,
                updateAuthority: this.wallet.publicKey,
            }).instructions);
            instructions.push(spl_token_1.Token.createSetAuthorityInstruction(spl_token_1.TOKEN_PROGRAM_ID, mintKeypair.publicKey, wrappedSolAuthority, "MintTokens", this.wallet.publicKey, []));
            instructions.push(yield this.instruction.initializeSolStorageV0({
                solStorageBumpSeed,
                bumpSeed,
                mintAuthorityBumpSeed,
            }, {
                accounts: {
                    state,
                    payer: this.wallet.publicKey,
                    solStorage,
                    mintAuthority: wrappedSolAuthority,
                    wrappedSolMint: mintKeypair.publicKey,
                    tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    systemProgram: web3_js_1.SystemProgram.programId,
                    rent: web3_js_1.SYSVAR_RENT_PUBKEY,
                },
            }));
            return {
                instructions,
                signers,
                output: null,
            };
        });
    }
    /**
     * Admin command run once to initialize the smart contract
     */
    initializeSolStorage({ mintKeypair, }) {
        return this.execute(this.initializeSolStorageInstructions({ mintKeypair }));
    }
    /**
     * Create a curve shape for use in a TokenBonding instance
     *
     * @param param0
     * @returns
     */
    initializeCurveInstructions({ payer = this.wallet.publicKey, config: curveConfig, curveKeypair = anchor.web3.Keypair.generate(), }) {
        return __awaiter(this, void 0, void 0, function* () {
            const curve = curveConfig.toRawConfig();
            return {
                output: {
                    curve: curveKeypair.publicKey,
                },
                signers: [curveKeypair],
                instructions: [
                    web3_js_1.SystemProgram.createAccount({
                        fromPubkey: payer,
                        newAccountPubkey: curveKeypair.publicKey,
                        space: 500,
                        lamports: yield this.provider.connection.getMinimumBalanceForRentExemption(500),
                        programId: this.programId,
                    }),
                    yield this.instruction.createCurveV0(curve, {
                        accounts: {
                            payer,
                            curve: curveKeypair.publicKey,
                            systemProgram: web3_js_1.SystemProgram.programId,
                            rent: web3_js_1.SYSVAR_RENT_PUBKEY,
                        },
                    }),
                ],
            };
        });
    }
    /**
     * See {@link initializeCurve}
     * @param args
     * @returns
     */
    initializeCurve(args, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execute(this.initializeCurveInstructions(args), args.payer, commitment)).curve;
        });
    }
    /**
     * Get the PDA key of a TokenBonding given the target mint and index
     *
     * `index` = 0 is the default bonding curve that can mint `targetMint`. All other curves are curves that allow burning of `targetMint` for some different base.
     *
     * @param targetMint
     * @param index
     * @returns
     */
    static tokenBondingKey(targetMint, index = 0, programId = SplTokenBonding.ID) {
        return __awaiter(this, void 0, void 0, function* () {
            const pad = Buffer.alloc(2);
            new bn_js_1.default(index, 16, "le").toBuffer().copy(pad);
            return web3_js_1.PublicKey.findProgramAddress([Buffer.from("token-bonding", "utf-8"), targetMint.toBuffer(), pad], programId);
        });
    }
    static wrappedSolMintAuthorityKey(programId = SplTokenBonding.ID) {
        return __awaiter(this, void 0, void 0, function* () {
            return web3_js_1.PublicKey.findProgramAddress([Buffer.from("wrapped-sol-authority", "utf-8")], programId);
        });
    }
    /**
     * Create a bonding curve
     *
     * @param param0
     * @returns
     */
    createTokenBondingInstructions({ generalAuthority = this.wallet.publicKey, curveAuthority = null, reserveAuthority = null, payer = this.wallet.publicKey, curve, baseMint, targetMint, buyBaseRoyalties, buyBaseRoyaltiesOwner = this.wallet.publicKey, buyTargetRoyalties, buyTargetRoyaltiesOwner = this.wallet.publicKey, sellBaseRoyalties, sellBaseRoyaltiesOwner = this.wallet.publicKey, sellTargetRoyalties, sellTargetRoyaltiesOwner = this.wallet.publicKey, buyBaseRoyaltyPercentage = 0, buyTargetRoyaltyPercentage = 0, sellBaseRoyaltyPercentage = 0, sellTargetRoyaltyPercentage = 0, mintCap, purchaseCap, goLiveDate = new Date(new Date().valueOf() - 10000), // 10 secs ago
    freezeBuyDate, targetMintDecimals, targetMintKeypair = web3_js_1.Keypair.generate(), buyFrozen = false, ignoreExternalReserveChanges = false, ignoreExternalSupplyChanges = false, sellFrozen = false, index, advanced = {
        initialSupplyPad: 0,
        initialReservesPad: 0
    } }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!targetMint) {
                if (sellTargetRoyalties || buyTargetRoyalties) {
                    throw new Error("Cannot define target royalties if mint is not defined");
                }
                if (typeof targetMintDecimals == "undefined") {
                    throw new Error("Cannot define mint without decimals ");
                }
            }
            const provider = this.provider;
            const state = (yield this.getState());
            let isNative = baseMint.equals(spl_token_1.NATIVE_MINT) || baseMint.equals(state.wrappedSolMint);
            if (isNative) {
                baseMint = state.wrappedSolMint;
            }
            const instructions = [];
            const signers = [];
            let shouldCreateMint = false;
            if (!targetMint) {
                signers.push(targetMintKeypair);
                targetMint = targetMintKeypair.publicKey;
                shouldCreateMint = true;
            }
            // Find the proper bonding index to use that isn't taken.
            let indexToUse = index || 0;
            const getTokenBonding = () => {
                return SplTokenBonding.tokenBondingKey(targetMint, indexToUse);
            };
            const getTokenBondingAccount = () => __awaiter(this, void 0, void 0, function* () {
                return this.provider.connection.getAccountInfo((yield getTokenBonding())[0]);
            });
            if (!index) {
                // Find an empty voucher account
                while (yield getTokenBondingAccount()) {
                    indexToUse++;
                }
            }
            else {
                indexToUse = index;
            }
            const [tokenBonding, bumpSeed] = yield SplTokenBonding.tokenBondingKey(targetMint, indexToUse);
            if (shouldCreateMint) {
                instructions.push(...(yield (0, spl_utils_1.createMintInstructions)(provider, tokenBonding, targetMint, targetMintDecimals)));
            }
            const baseStorageKeypair = anchor.web3.Keypair.generate();
            signers.push(baseStorageKeypair);
            const baseStorage = baseStorageKeypair.publicKey;
            instructions.push(web3_js_1.SystemProgram.createAccount({
                fromPubkey: payer,
                newAccountPubkey: baseStorage,
                space: spl_token_1.AccountLayout.span,
                programId: spl_token_1.TOKEN_PROGRAM_ID,
                lamports: yield this.provider.connection.getMinimumBalanceForRentExemption(spl_token_1.AccountLayout.span),
            }), spl_token_1.Token.createInitAccountInstruction(spl_token_1.TOKEN_PROGRAM_ID, baseMint, baseStorage, tokenBonding));
            if (isNative) {
                buyBaseRoyalties = buyBaseRoyalties === null ? null : (buyBaseRoyalties || buyBaseRoyaltiesOwner);
                sellBaseRoyalties = sellBaseRoyalties === null ? null : (sellBaseRoyalties || sellBaseRoyaltiesOwner);
            }
            let createdAccts = new Set();
            if (typeof buyTargetRoyalties === "undefined") {
                buyTargetRoyalties = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, targetMint, buyTargetRoyaltiesOwner, true);
                // If sell target royalties are undefined, we'll do this in the next step
                if (!createdAccts.has(buyTargetRoyalties.toBase58()) &&
                    !(yield this.accountExists(buyTargetRoyalties))) {
                    console.log("Creating buy target royalties...");
                    instructions.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, targetMint, buyTargetRoyalties, buyTargetRoyaltiesOwner, payer));
                    createdAccts.add(buyTargetRoyalties.toBase58());
                }
            }
            if (typeof sellTargetRoyalties === "undefined") {
                sellTargetRoyalties = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, targetMint, sellTargetRoyaltiesOwner, true);
                if (!createdAccts.has(sellTargetRoyalties.toBase58()) &&
                    !(yield this.accountExists(sellTargetRoyalties))) {
                    console.log("Creating sell target royalties...");
                    instructions.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, targetMint, sellTargetRoyalties, sellTargetRoyaltiesOwner, payer));
                    createdAccts.add(buyTargetRoyalties.toBase58());
                }
            }
            if (typeof buyBaseRoyalties === "undefined") {
                buyBaseRoyalties = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, baseMint, buyBaseRoyaltiesOwner, true);
                // If sell base royalties are undefined, we'll do this in the next step
                if (!createdAccts.has(buyBaseRoyalties.toBase58()) &&
                    !(yield this.accountExists(buyBaseRoyalties))) {
                    console.log("Creating base royalties...", buyBaseRoyalties.toBase58());
                    instructions.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, baseMint, buyBaseRoyalties, buyBaseRoyaltiesOwner, payer));
                    createdAccts.add(buyBaseRoyalties.toBase58());
                }
            }
            if (typeof sellBaseRoyalties === "undefined") {
                sellBaseRoyalties = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, baseMint, sellBaseRoyaltiesOwner, true);
                if (!createdAccts.has(sellBaseRoyalties.toBase58()) &&
                    !(yield this.accountExists(sellBaseRoyalties))) {
                    console.log("Creating base royalties...", sellBaseRoyalties.toBase58());
                    instructions.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, baseMint, sellBaseRoyalties, sellBaseRoyaltiesOwner, payer));
                    createdAccts.add(sellBaseRoyalties.toBase58());
                }
            }
            const pads = {
                initialReservesPad: advanced.initialReservesPad
                    ? (0, utils_1.toBN)(advanced.initialReservesPad, yield (0, spl_utils_1.getMintInfo)(this.provider, baseMint))
                    : new bn_js_1.default(0),
                initialSupplyPad: advanced.initialSupplyPad
                    ? (0, utils_1.toBN)(advanced.initialSupplyPad, typeof targetMintDecimals == "undefined" ?
                        (yield (0, spl_utils_1.getMintInfo)(this.provider, targetMint)).decimals : targetMintDecimals)
                    : new bn_js_1.default(0),
            };
            instructions.push(yield this.instruction.initializeTokenBondingV0(Object.assign({ index: indexToUse, goLiveUnixTime: new bn_js_1.default(Math.floor(goLiveDate.valueOf() / 1000)), freezeBuyUnixTime: freezeBuyDate
                    ? new bn_js_1.default(Math.floor(freezeBuyDate.valueOf() / 1000))
                    : null, buyBaseRoyaltyPercentage: (0, spl_utils_1.percent)(buyBaseRoyaltyPercentage) || 0, buyTargetRoyaltyPercentage: (0, spl_utils_1.percent)(buyTargetRoyaltyPercentage) || 0, sellBaseRoyaltyPercentage: (0, spl_utils_1.percent)(sellBaseRoyaltyPercentage) || 0, sellTargetRoyaltyPercentage: (0, spl_utils_1.percent)(sellTargetRoyaltyPercentage) || 0, mintCap: mintCap || null, purchaseCap: purchaseCap || null, generalAuthority,
                curveAuthority,
                reserveAuthority,
                bumpSeed,
                buyFrozen,
                ignoreExternalReserveChanges,
                ignoreExternalSupplyChanges,
                sellFrozen }, pads), {
                accounts: {
                    payer: payer,
                    curve,
                    tokenBonding,
                    baseMint,
                    targetMint,
                    baseStorage,
                    buyBaseRoyalties: buyBaseRoyalties === null
                        ? this.wallet.publicKey // Default to this wallet, it just needs a system program acct
                        : buyBaseRoyalties,
                    buyTargetRoyalties: buyTargetRoyalties === null
                        ? this.wallet.publicKey // Default to this wallet, it just needs a system program acct
                        : buyTargetRoyalties,
                    sellBaseRoyalties: sellBaseRoyalties === null
                        ? this.wallet.publicKey // Default to this wallet, it just needs a system program acct
                        : sellBaseRoyalties,
                    sellTargetRoyalties: sellTargetRoyalties === null
                        ? this.wallet.publicKey // Default to this wallet, it just needs a system program acct
                        : sellTargetRoyalties,
                    tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    systemProgram: web3_js_1.SystemProgram.programId,
                    rent: web3_js_1.SYSVAR_RENT_PUBKEY,
                    clock: web3_js_1.SYSVAR_CLOCK_PUBKEY,
                },
            }));
            return {
                output: {
                    baseMint,
                    tokenBonding,
                    targetMint,
                    buyBaseRoyalties: buyBaseRoyalties || this.wallet.publicKey,
                    buyTargetRoyalties: buyTargetRoyalties || this.wallet.publicKey,
                    sellBaseRoyalties: sellBaseRoyalties || this.wallet.publicKey,
                    sellTargetRoyalties: sellTargetRoyalties || this.wallet.publicKey,
                    baseStorage,
                },
                instructions,
                signers,
            };
        });
    }
    /**
     * General utility function to check if an account exists
     * @param account
     * @returns
     */
    accountExists(account) {
        return __awaiter(this, void 0, void 0, function* () {
            return Boolean(yield this.provider.connection.getAccountInfo(account));
        });
    }
    /**
     * Runs {@link `createTokenBondingInstructions`}
     *
     * @param args
     * @returns
     */
    createTokenBonding(args, commitment = "confirmed") {
        return this.execute(this.createTokenBondingInstructions(args), args.payer, commitment);
    }
    /**
     * Update a bonding curve.
     *
     * @param param0
     * @returns
     */
    updateTokenBondingInstructions({ tokenBonding, buyBaseRoyaltyPercentage, buyTargetRoyaltyPercentage, sellBaseRoyaltyPercentage, sellTargetRoyaltyPercentage, buyBaseRoyalties, buyTargetRoyalties, sellBaseRoyalties, sellTargetRoyalties, generalAuthority, reserveAuthority, buyFrozen, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenBondingAcct = (yield this.getTokenBonding(tokenBonding));
            const generalChanges = anyDefined(buyBaseRoyaltyPercentage, buyTargetRoyaltyPercentage, sellBaseRoyaltyPercentage, sellTargetRoyaltyPercentage, buyBaseRoyalties, buyTargetRoyalties, sellBaseRoyalties, sellTargetRoyalties, generalAuthority, buyFrozen);
            const reserveAuthorityChanges = anyDefined(reserveAuthority);
            const instructions = [];
            if (generalChanges) {
                if (!tokenBondingAcct.generalAuthority) {
                    throw new Error("Cannot update a token bonding account that has no authority");
                }
                const args = {
                    buyBaseRoyaltyPercentage: definedOr((0, spl_utils_1.percent)(buyBaseRoyaltyPercentage), tokenBondingAcct.buyBaseRoyaltyPercentage),
                    buyTargetRoyaltyPercentage: definedOr((0, spl_utils_1.percent)(buyTargetRoyaltyPercentage), tokenBondingAcct.buyTargetRoyaltyPercentage),
                    sellBaseRoyaltyPercentage: definedOr((0, spl_utils_1.percent)(sellBaseRoyaltyPercentage), tokenBondingAcct.sellBaseRoyaltyPercentage),
                    sellTargetRoyaltyPercentage: definedOr((0, spl_utils_1.percent)(sellTargetRoyaltyPercentage), tokenBondingAcct.sellTargetRoyaltyPercentage),
                    generalAuthority: generalAuthority === null
                        ? null
                        : generalAuthority ||
                            tokenBondingAcct.generalAuthority,
                    buyFrozen: typeof buyFrozen === "undefined"
                        ? tokenBondingAcct.buyFrozen
                        : buyFrozen,
                };
                instructions.push(yield this.instruction.updateTokenBondingV0(args, {
                    accounts: {
                        tokenBonding,
                        generalAuthority: tokenBondingAcct.generalAuthority,
                        baseMint: tokenBondingAcct.baseMint,
                        targetMint: tokenBondingAcct.targetMint,
                        buyTargetRoyalties: buyTargetRoyalties || tokenBondingAcct.buyTargetRoyalties,
                        buyBaseRoyalties: buyBaseRoyalties || tokenBondingAcct.buyBaseRoyalties,
                        sellTargetRoyalties: sellTargetRoyalties || tokenBondingAcct.sellTargetRoyalties,
                        sellBaseRoyalties: sellBaseRoyalties || tokenBondingAcct.sellBaseRoyalties,
                    },
                }));
            }
            if (reserveAuthorityChanges) {
                if (!tokenBondingAcct.reserveAuthority) {
                    throw new Error("Cannot update reserve authority of a token bonding account that has no reserve authority");
                }
                instructions.push(yield this.instruction.updateReserveAuthorityV0({
                    newReserveAuthority: reserveAuthority || null,
                }, {
                    accounts: {
                        tokenBonding,
                        reserveAuthority: tokenBondingAcct.reserveAuthority,
                    },
                }));
            }
            return {
                output: null,
                signers: [],
                instructions,
            };
        });
    }
    /**
     * Runs {@link updateTokenBonding}
     * @param args
     */
    updateTokenBonding(args, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute(this.updateTokenBondingInstructions(args), this.wallet.publicKey, commitment);
        });
    }
    /**
     * Instructions to buy twSOL from normal SOL.
     *
     * We wrap SOL so that the bonding contract isn't soaking up a bunch o SOL and damaging the security of the network.
     * The plan is to create a DAO for Strata that will govern what happens with this SOL.
     *
     * @param param0
     * @returns
     */
    buyBondingWrappedSolInstructions({ payer = this.wallet.publicKey, destination, source = this.wallet.publicKey, amount, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = (yield this.getState());
            const stateAddress = (yield web3_js_1.PublicKey.findProgramAddress([Buffer.from("state", "utf-8")], this.programId))[0];
            const mintAuthority = (yield SplTokenBonding.wrappedSolMintAuthorityKey(this.programId))[0];
            const mint = yield (0, spl_utils_1.getMintInfo)(this.provider, state.wrappedSolMint);
            let usedAta = false;
            if (!destination) {
                destination = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, state.wrappedSolMint, source, true);
                usedAta = true;
            }
            const instructions = [];
            if (usedAta && !(yield this.accountExists(destination))) {
                instructions.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, state.wrappedSolMint, destination, source, payer));
            }
            instructions.push(yield this.instruction.buyWrappedSolV0({
                amount: (0, utils_1.toBN)(amount, mint),
            }, {
                accounts: {
                    state: stateAddress,
                    wrappedSolMint: state.wrappedSolMint,
                    mintAuthority: mintAuthority,
                    solStorage: state.solStorage,
                    source,
                    destination,
                    tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    systemProgram: web3_js_1.SystemProgram.programId,
                },
            }));
            return {
                signers: [],
                output: {
                    destination,
                },
                instructions,
            };
        });
    }
    /**
     * Invoke `buyBondingWrappedSol` instructions
     * @param args
     * @returns
     */
    buyBondingWrappedSol(args, commitment = "confirmed") {
        return this.execute(this.buyBondingWrappedSolInstructions(args), args.payer, commitment);
    }
    /**
     * Instructions to sell twSOL back into normal SOL.
     *
     * @param param0
     * @returns
     */
    sellBondingWrappedSolInstructions({ source, owner = this.wallet.publicKey, destination = this.wallet.publicKey, amount, all = false, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = (yield this.getState());
            const stateAddress = (yield web3_js_1.PublicKey.findProgramAddress([Buffer.from("state", "utf-8")], this.programId))[0];
            const mint = yield (0, spl_utils_1.getMintInfo)(this.provider, state.wrappedSolMint);
            if (!source) {
                source = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, state.wrappedSolMint, owner, true);
            }
            const instructions = [];
            instructions.push(yield this.instruction.sellWrappedSolV0({
                amount: (0, utils_1.toBN)(amount, mint),
                all,
            }, {
                accounts: {
                    state: stateAddress,
                    wrappedSolMint: state.wrappedSolMint,
                    solStorage: state.solStorage,
                    source,
                    owner,
                    destination,
                    tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    systemProgram: web3_js_1.SystemProgram.programId,
                },
            }));
            if (all) {
                instructions.push(spl_token_1.Token.createCloseAccountInstruction(spl_token_1.TOKEN_PROGRAM_ID, source, destination, owner, []));
            }
            return {
                signers: [],
                output: null,
                instructions,
            };
        });
    }
    /**
     * Execute `sellBondingWrappedSolInstructions`
     * @param args
     * @returns
     */
    sellBondingWrappedSol(args, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            return this.execute(this.sellBondingWrappedSolInstructions(args), args.payer, commitment);
        });
    }
    /**
     * Issue a command to buy `targetMint` tokens with `baseMint` tokens.
     *
     * @param param0
     * @returns
     */
    buyInstructions({ tokenBonding, source, sourceAuthority = this.wallet.publicKey, destination, desiredTargetAmount, baseAmount, expectedOutputAmount, expectedBaseAmount, slippage, payer = this.wallet.publicKey, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = (yield this.getState());
            const tokenBondingAcct = (yield this.getTokenBonding(tokenBonding));
            const isNative = tokenBondingAcct.baseMint.equals(spl_token_1.NATIVE_MINT) ||
                tokenBondingAcct.baseMint.equals(state.wrappedSolMint);
            // @ts-ignore
            const targetMint = yield (0, spl_utils_1.getMintInfo)(this.provider, tokenBondingAcct.targetMint);
            const baseMint = yield (0, spl_utils_1.getMintInfo)(this.provider, tokenBondingAcct.baseMint);
            const baseStorage = yield (0, spl_utils_1.getTokenAccount)(this.provider, tokenBondingAcct.baseStorage);
            const curve = yield this.getPricingCurve(tokenBondingAcct.curve, (0, utils_1.amountAsNum)(tokenBondingAcct.ignoreExternalReserveChanges ? tokenBondingAcct.reserveBalanceFromBonding : baseStorage.amount, baseMint), (0, utils_1.amountAsNum)(tokenBondingAcct.ignoreExternalSupplyChanges ? tokenBondingAcct.supplyFromBonding : targetMint.supply, targetMint), tokenBondingAcct.goLiveUnixTime.toNumber());
            const instructions = [];
            const signers = [];
            if (!destination) {
                destination = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.targetMint, sourceAuthority, true);
                if (!(yield this.accountExists(destination))) {
                    console.log("Creating target account");
                    instructions.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.targetMint, destination, sourceAuthority, payer));
                }
            }
            let buyTargetAmount = null;
            let buyWithBase = null;
            let maxPrice = 0;
            if (desiredTargetAmount) {
                const desiredTargetAmountNum = (0, utils_1.toNumber)(desiredTargetAmount, targetMint);
                const neededAmount = desiredTargetAmountNum *
                    (1 / (1 - (0, utils_1.asDecimal)(tokenBondingAcct.buyTargetRoyaltyPercentage)));
                const min = expectedBaseAmount
                    ? (0, utils_1.toNumber)(expectedBaseAmount, targetMint)
                    : curve.buyTargetAmount(desiredTargetAmountNum, tokenBondingAcct.buyBaseRoyaltyPercentage, tokenBondingAcct.buyTargetRoyaltyPercentage);
                maxPrice = min * (1 + slippage);
                buyTargetAmount = {
                    targetAmount: new bn_js_1.default(Math.floor(neededAmount * Math.pow(10, targetMint.decimals))),
                    maximumPrice: (0, utils_1.toBN)(maxPrice, baseMint),
                };
            }
            if (baseAmount) {
                const baseAmountNum = (0, utils_1.toNumber)(baseAmount, baseMint);
                maxPrice = baseAmountNum;
                const min = expectedOutputAmount
                    ? (0, utils_1.toNumber)(expectedOutputAmount, targetMint)
                    : curve.buyWithBaseAmount(baseAmountNum, tokenBondingAcct.buyBaseRoyaltyPercentage, tokenBondingAcct.buyTargetRoyaltyPercentage);
                buyWithBase = {
                    baseAmount: (0, utils_1.toBN)(baseAmount, baseMint),
                    minimumTargetAmount: new bn_js_1.default(Math.ceil(min * (1 - slippage) * Math.pow(10, targetMint.decimals))),
                };
            }
            if (!source) {
                if (isNative) {
                    source = sourceAuthority;
                }
                else {
                    source = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.baseMint, sourceAuthority, true);
                    if (!(yield this.accountExists(source))) {
                        console.warn("Source account for bonding buy does not exist, if it is not created in an earlier instruction this can cause an error");
                    }
                }
            }
            const args = {
                // @ts-ignore
                buyTargetAmount,
                // @ts-ignore
                buyWithBase,
            };
            const common = {
                tokenBonding,
                // @ts-ignore
                curve: tokenBondingAcct.curve,
                baseMint: tokenBondingAcct.baseMint,
                targetMint: tokenBondingAcct.targetMint,
                baseStorage: tokenBondingAcct.baseStorage,
                buyBaseRoyalties: tokenBondingAcct.buyBaseRoyalties,
                buyTargetRoyalties: tokenBondingAcct.buyTargetRoyalties,
                tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                clock: web3_js_1.SYSVAR_CLOCK_PUBKEY,
                destination,
            };
            if (isNative) {
                instructions.push(yield this.instruction.buyNativeV0(args, {
                    accounts: {
                        common,
                        state: state.publicKey,
                        wrappedSolMint: state.wrappedSolMint,
                        mintAuthority: (yield SplTokenBonding.wrappedSolMintAuthorityKey(this.programId))[0],
                        solStorage: state.solStorage,
                        systemProgram: web3_js_1.SystemProgram.programId,
                        source,
                    },
                }));
            }
            else {
                instructions.push(yield this.instruction.buyV1(args, {
                    accounts: {
                        common,
                        state: state.publicKey,
                        source,
                        sourceAuthority,
                    },
                }));
            }
            return {
                output: null,
                signers: [],
                instructions,
            };
        });
    }
    /**
     * Runs {@link buy}
     * @param args
     */
    buy(args, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute(this.buyInstructions(args), args.payer, commitment);
        });
    }
    getTokenAccountBalance(account, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            const acct = yield this.provider.connection.getAccountInfo(account, commitment);
            if (acct) {
                return spl_token_1.u64.fromBuffer(spl_token_1.AccountLayout.decode(acct.data).amount);
            }
            return new bn_js_1.default(0);
        });
    }
    /**
     * Swap from any base mint to any target mint that are both on a shared link of bonding curves.
     * Intelligently traverses using either buy or sell, executing multiple txns to either sell baseAmount
     * or buy with baseAmount
     *
     * @param param0
     */
    swap({ payer = this.wallet.publicKey, sourceAuthority = this.wallet.publicKey, baseMint, targetMint, baseAmount, expectedBaseAmount, desiredTargetAmount, expectedOutputAmount, slippage, balanceCheckTries = 5, extraInstructions = () => Promise.resolve({
        instructions: [],
        signers: [],
        output: null,
    }), }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const hierarchyFromTarget = yield this.getBondingHierarchy((yield SplTokenBonding.tokenBondingKey(targetMint))[0], baseMint);
            const hierarchyFromBase = yield this.getBondingHierarchy((yield SplTokenBonding.tokenBondingKey(baseMint))[0], targetMint);
            const hierarchy = [hierarchyFromTarget, hierarchyFromBase].find((hierarchy) => hierarchy === null || hierarchy === void 0 ? void 0 : hierarchy.contains(baseMint, targetMint));
            if (!hierarchy) {
                throw new Error(`No bonding curve hierarchies found for base or target that contain both ${baseMint.toBase58()} and ${targetMint.toBase58()}`);
            }
            const isBuy = hierarchy.tokenBonding.targetMint.equals(targetMint);
            const arrHierarchy = (hierarchy === null || hierarchy === void 0 ? void 0 : hierarchy.toArray()) || [];
            const baseMintInfo = yield (0, spl_utils_1.getMintInfo)(this.provider, baseMint);
            let currAmount = baseAmount ? (0, utils_1.toBN)(baseAmount, baseMintInfo) : undefined;
            const hierarchyToTraverse = isBuy ? arrHierarchy.reverse() : arrHierarchy;
            const processedMints = [];
            for (const [index, subHierarchy] of hierarchyToTraverse.entries()) {
                const isLastHop = index === arrHierarchy.length - 1;
                const tokenBonding = subHierarchy.tokenBonding;
                const baseIsSol = tokenBonding.baseMint.equals((_a = (yield this.getState())) === null || _a === void 0 ? void 0 : _a.wrappedSolMint);
                const ata = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, isBuy ? tokenBonding.targetMint : tokenBonding.baseMint, sourceAuthority, true);
                const getBalance = () => __awaiter(this, void 0, void 0, function* () {
                    var _b;
                    if (!isBuy && baseIsSol) {
                        const amount = ((_b = (yield this.provider.connection.getAccountInfo(sourceAuthority, "single"))) === null || _b === void 0 ? void 0 : _b.lamports) || 0;
                        return new bn_js_1.default(amount);
                    }
                    else {
                        return this.getTokenAccountBalance(ata, "single");
                    }
                });
                const preBalance = yield getBalance();
                let instructions;
                let signers;
                let currMint;
                if (isBuy) {
                    console.log(`Actually doing ${tokenBonding.baseMint.toBase58()} to ${tokenBonding.targetMint.toBase58()}`);
                    ({ instructions, signers } = yield this.buyInstructions({
                        payer,
                        sourceAuthority,
                        baseAmount: currAmount,
                        tokenBonding: tokenBonding.publicKey,
                        expectedOutputAmount: isLastHop && !desiredTargetAmount
                            ? expectedOutputAmount
                            : undefined,
                        desiredTargetAmount: isLastHop && desiredTargetAmount ? desiredTargetAmount : undefined,
                        expectedBaseAmount: isLastHop && desiredTargetAmount ? expectedBaseAmount : undefined,
                        slippage,
                    }));
                    currMint = tokenBonding.targetMint;
                }
                else {
                    console.log(`SELL doing ${tokenBonding.baseMint.toBase58()} to ${tokenBonding.targetMint.toBase58()}`);
                    ({ instructions, signers } = yield this.sellInstructions({
                        payer,
                        sourceAuthority,
                        targetAmount: currAmount,
                        tokenBonding: tokenBonding.publicKey,
                        expectedOutputAmount: isLastHop ? expectedOutputAmount : undefined,
                        slippage,
                    }));
                    currMint = tokenBonding.baseMint;
                }
                const { instructions: extraInstrs, signers: extaSigners } = yield extraInstructions({
                    tokenBonding,
                    amount: currAmount,
                    desiredTargetAmount,
                    isBuy,
                });
                try {
                    yield this.sendInstructions([...instructions, ...extraInstrs], [...signers, ...extaSigners], payer);
                }
                catch (e) {
                    // Throw a nice error if the swap partially succeeded.
                    if (processedMints.length > 0) {
                        const splTokenMetadata = yield spl_utils_1.SplTokenMetadata.init(this.provider);
                        const lastMint = processedMints[processedMints.length - 1];
                        const metadataKey = yield mpl_token_metadata_1.Metadata.getPDA(lastMint);
                        const metadata = yield splTokenMetadata.getMetadata(metadataKey);
                        const name = (metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol) || lastMint.toBase58();
                        const err = new Error(`Swap partially failed, check your wallet for ${name} tokens. Error: ${e.toString()}`);
                        err.stack = e.stack;
                        throw err;
                    }
                    throw e;
                }
                processedMints.push(currMint);
                function newBalance(tries = 0) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (tries > balanceCheckTries) {
                            return new bn_js_1.default(0);
                        }
                        let postBalance = yield getBalance();
                        // Sometimes it can take a bit for Solana to catch up
                        // Wait and see if the balance truly hasn't changed.
                        if (postBalance.eq(preBalance)) {
                            console.log("No balance change detected while swapping, trying again", tries);
                            yield sleep(5000);
                            return newBalance(tries + 1);
                        }
                        return postBalance;
                    });
                }
                const postBalance = yield newBalance();
                currAmount = postBalance.sub(preBalance || new bn_js_1.default(0));
                // Fees, or something else caused the balance to be negative. Just report the change
                // and quit
                if (currAmount.eq(new bn_js_1.default(0))) {
                    const targetMintInfo = yield (0, spl_utils_1.getMintInfo)(this.provider, isBuy ? tokenBonding.targetMint : tokenBonding.baseMint);
                    return {
                        targetAmount: (0, utils_1.toNumber)(postBalance, targetMintInfo) -
                            (0, utils_1.toNumber)(preBalance, targetMintInfo),
                    };
                }
            }
            const targetMintInfo = yield (0, spl_utils_1.getMintInfo)(this.provider, targetMint);
            return {
                targetAmount: (0, utils_1.toNumber)(currAmount, targetMintInfo),
            };
        });
    }
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state) {
                return this.state;
            }
            const stateAddress = (yield web3_js_1.PublicKey.findProgramAddress([Buffer.from("state", "utf-8")], this.programId))[0];
            const stateRaw = yield this.account.programStateV0.fetchNullable(stateAddress);
            const state = stateRaw
                ? Object.assign(Object.assign({}, stateRaw), { publicKey: stateAddress }) : null;
            if (state) {
                this.state = state;
            }
            return state;
        });
    }
    /**
     * Instructions to burn `targetMint` tokens in exchange for `baseMint` tokens
     *
     * @param param0
     * @returns
     */
    sellInstructions({ tokenBonding, source, sourceAuthority = this.wallet.publicKey, destination, targetAmount, expectedOutputAmount, slippage, payer = this.wallet.publicKey, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = (yield this.getState());
            const tokenBondingAcct = (yield this.getTokenBonding(tokenBonding));
            if (tokenBondingAcct.sellFrozen) {
                throw new Error("Sell is frozen on this bonding curve");
            }
            const isNative = tokenBondingAcct.baseMint.equals(spl_token_1.NATIVE_MINT) ||
                tokenBondingAcct.baseMint.equals(state.wrappedSolMint);
            // @ts-ignore
            const targetMint = yield (0, spl_utils_1.getMintInfo)(this.provider, tokenBondingAcct.targetMint);
            const baseMint = yield (0, spl_utils_1.getMintInfo)(this.provider, tokenBondingAcct.baseMint);
            const baseStorage = yield (0, spl_utils_1.getTokenAccount)(this.provider, tokenBondingAcct.baseStorage);
            // @ts-ignore
            const curve = yield this.getPricingCurve(tokenBondingAcct.curve, (0, utils_1.amountAsNum)(tokenBondingAcct.ignoreExternalReserveChanges ? tokenBondingAcct.reserveBalanceFromBonding : baseStorage.amount, baseMint), (0, utils_1.amountAsNum)(tokenBondingAcct.ignoreExternalSupplyChanges ? tokenBondingAcct.supplyFromBonding : targetMint.supply, targetMint), tokenBondingAcct.goLiveUnixTime.toNumber());
            const instructions = [];
            if (!source) {
                source = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.targetMint, sourceAuthority, true);
                if (!(yield this.accountExists(source))) {
                    console.warn("Source account for bonding buy does not exist, if it is not created in an earlier instruction this can cause an error");
                }
            }
            if (!destination) {
                if (isNative) {
                    destination = sourceAuthority;
                }
                else {
                    destination = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.baseMint, sourceAuthority, true);
                    if (!(yield this.accountExists(destination))) {
                        console.log("Creating base account");
                        instructions.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.baseMint, destination, sourceAuthority, payer));
                    }
                }
            }
            const targetAmountNum = (0, utils_1.toNumber)(targetAmount, targetMint);
            const min = expectedOutputAmount
                ? (0, utils_1.toNumber)(expectedOutputAmount, baseMint)
                : curve.sellTargetAmount(targetAmountNum, tokenBondingAcct.sellBaseRoyaltyPercentage, tokenBondingAcct.sellTargetRoyaltyPercentage);
            const args = {
                targetAmount: (0, utils_1.toBN)(targetAmount, targetMint),
                minimumPrice: new bn_js_1.default(Math.ceil(min * (1 - slippage) * Math.pow(10, baseMint.decimals))),
            };
            const common = {
                tokenBonding,
                // @ts-ignore
                curve: tokenBondingAcct.curve,
                baseMint: tokenBondingAcct.baseMint,
                targetMint: tokenBondingAcct.targetMint,
                baseStorage: tokenBondingAcct.baseStorage,
                sellBaseRoyalties: tokenBondingAcct.sellBaseRoyalties,
                sellTargetRoyalties: tokenBondingAcct.sellTargetRoyalties,
                source,
                sourceAuthority,
                tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                clock: web3_js_1.SYSVAR_CLOCK_PUBKEY,
            };
            if (isNative) {
                instructions.push(yield this.instruction.sellNativeV0(args, {
                    accounts: {
                        common,
                        destination,
                        state: state.publicKey,
                        wrappedSolMint: state.wrappedSolMint,
                        mintAuthority: (yield SplTokenBonding.wrappedSolMintAuthorityKey(this.programId))[0],
                        solStorage: state.solStorage,
                        systemProgram: web3_js_1.SystemProgram.programId,
                    },
                }));
            }
            else {
                instructions.push(yield this.instruction.sellV1(args, {
                    accounts: {
                        common,
                        state: state.publicKey,
                        destination,
                    },
                }));
            }
            return {
                output: null,
                signers: [],
                instructions,
            };
        });
    }
    /**
     * Runs {@link sell}
     * @param args
     */
    sell(args, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute(this.sellInstructions(args), args.payer, commitment);
        });
    }
    /**
     * Instructions to close the bonding curve
     *
     * @param param0
     * @returns
     */
    closeInstructions({ tokenBonding, generalAuthority, refund = this.wallet.publicKey, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenBondingAcct = (yield this.getTokenBonding(tokenBonding));
            if (!tokenBondingAcct.generalAuthority) {
                throw new Error("Cannot close a bonding account with no general authority");
            }
            return {
                output: null,
                signers: [],
                instructions: [
                    yield this.instruction.closeTokenBondingV0({
                        accounts: {
                            refund,
                            tokenBonding,
                            generalAuthority: generalAuthority || tokenBondingAcct.generalAuthority,
                            targetMint: tokenBondingAcct.targetMint,
                            baseStorage: tokenBondingAcct.baseStorage,
                            tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                        },
                    }),
                ],
            };
        });
    }
    /**
     * Runs {@link closeInstructions}
     * @param args
     */
    close(args, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute(this.closeInstructions(args), args.payer, commitment);
        });
    }
    /**
     * Instructions to transfer the reserves of the bonding curve
     *
     * @param param0
     * @returns
     */
    transferReservesInstructions({ tokenBonding, destination, amount, reserveAuthority, payer = this.wallet.publicKey, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenBondingAcct = (yield this.getTokenBonding(tokenBonding));
            const state = (yield this.getState());
            const isNative = tokenBondingAcct.baseMint.equals(spl_token_1.NATIVE_MINT) ||
                tokenBondingAcct.baseMint.equals(state.wrappedSolMint);
            const baseMint = yield (0, spl_utils_1.getMintInfo)(this.provider, tokenBondingAcct.baseMint);
            const instructions = [];
            if (!tokenBondingAcct.reserveAuthority) {
                throw new Error("Cannot transfer reserves on a bonding account with no reserve authority");
            }
            if (!destination) {
                if (isNative) {
                    destination = this.wallet.publicKey;
                }
                else {
                    destination = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.baseMint, this.wallet.publicKey, true);
                }
            }
            const destAcct = yield this.provider.connection.getAccountInfo(destination);
            // Destination is a wallet, need to get the ATA
            if (!isNative &&
                (!destAcct || destAcct.owner.equals(web3_js_1.SystemProgram.programId))) {
                const ataDestination = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.baseMint, destination, true);
                if (!(yield this.accountExists(ataDestination))) {
                    instructions.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.baseMint, ataDestination, destination, payer));
                }
                destination = ataDestination;
            }
            const common = {
                tokenBonding,
                reserveAuthority: reserveAuthority || tokenBondingAcct.reserveAuthority,
                baseMint: tokenBondingAcct.baseMint,
                baseStorage: tokenBondingAcct.baseStorage,
                tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
            };
            const args = {
                amount: (0, utils_1.toBN)(amount, baseMint),
            };
            if (isNative) {
                instructions.push(yield this.instruction.transferReservesNativeV0(args, {
                    accounts: {
                        common,
                        destination,
                        state: state.publicKey,
                        wrappedSolMint: state.wrappedSolMint,
                        mintAuthority: (yield SplTokenBonding.wrappedSolMintAuthorityKey(this.programId))[0],
                        solStorage: state.solStorage,
                        systemProgram: web3_js_1.SystemProgram.programId,
                    },
                }));
            }
            else {
                instructions.push(yield this.instruction.transferReservesV0(args, {
                    accounts: {
                        common,
                        destination,
                    },
                }));
            }
            return {
                output: null,
                signers: [],
                instructions,
            };
        });
    }
    /**
     * Runs {@link closeInstructions}
     * @param args
     */
    transferReserves(args, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute(this.transferReservesInstructions(args), args.payer, commitment);
        });
    }
    /**
     * Get a class capable of displaying pricing information or this token bonding at its current reserve and supply
     *
     * @param tokenBonding
     * @returns
     */
    getBondingPricingCurve(tokenBonding) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenBondingAcct = (yield this.getTokenBonding(tokenBonding));
            const targetMint = yield (0, spl_utils_1.getMintInfo)(this.provider, tokenBondingAcct.targetMint);
            const baseMint = yield (0, spl_utils_1.getMintInfo)(this.provider, tokenBondingAcct.baseMint);
            const baseStorage = yield (0, spl_utils_1.getTokenAccount)(this.provider, tokenBondingAcct.baseStorage);
            return yield this.getPricingCurve(tokenBondingAcct.curve, (0, utils_1.amountAsNum)(tokenBondingAcct.ignoreExternalReserveChanges
                ? tokenBondingAcct.reserveBalanceFromBonding
                : baseStorage.amount, baseMint), (0, utils_1.amountAsNum)(tokenBondingAcct.ignoreExternalSupplyChanges
                ? tokenBondingAcct.supplyFromBonding
                : targetMint.supply, targetMint), tokenBondingAcct.goLiveUnixTime.toNumber());
        });
    }
    /**
     * Given some reserves and supply, get a pricing model for a curve at `key`.
     *
     * @param key
     * @param baseAmount
     * @param targetSupply
     * @param goLiveUnixTime
     * @returns
     */
    getPricingCurve(key, baseAmount, targetSupply, goLiveUnixTime) {
        return __awaiter(this, void 0, void 0, function* () {
            const curve = yield this.getCurve(key);
            return (0, curves_1.fromCurve)(curve, baseAmount, targetSupply, goLiveUnixTime);
        });
    }
    getPricing(tokenBondingKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const hierarchy = yield this.getBondingHierarchy(tokenBondingKey);
            if (hierarchy) {
                return new pricing_1.BondingPricing({
                    hierarchy: hierarchy,
                });
            }
        });
    }
    /**
     * Fetch the token bonding curve and all of its direct ancestors
     *
     * @param tokenBondingKey
     * @returns
     */
    getBondingHierarchy(tokenBondingKey, stopAtMint) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!tokenBondingKey) {
                return;
            }
            const [wrappedSolMint, tokenBonding] = yield Promise.all([
                this.getState().then((s) => s === null || s === void 0 ? void 0 : s.wrappedSolMint),
                this.getTokenBonding(tokenBondingKey),
            ]);
            if (stopAtMint === null || stopAtMint === void 0 ? void 0 : stopAtMint.equals(spl_token_1.NATIVE_MINT)) {
                stopAtMint = wrappedSolMint;
            }
            if (!tokenBonding) {
                return;
            }
            const pricingCurve = yield this.getBondingPricingCurve(tokenBondingKey);
            const parentKey = (yield SplTokenBonding.tokenBondingKey(tokenBonding.baseMint))[0];
            const ret = new bondingHierarchy_1.BondingHierarchy({
                parent: (stopAtMint === null || stopAtMint === void 0 ? void 0 : stopAtMint.equals(tokenBonding.baseMint))
                    ? undefined
                    : yield this.getBondingHierarchy(parentKey, stopAtMint),
                tokenBonding,
                pricingCurve,
                wrappedSolMint,
            });
            (ret.parent || {}).child = ret;
            return ret;
        });
    }
}
exports.SplTokenBonding = SplTokenBonding;
SplTokenBonding.ID = new web3_js_1.PublicKey("TBondmkCYxaPCKG4CHYfVTcwQ8on31xnJrPzk8F8WsS");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5314:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BondingPricing = void 0;
const spl_token_1 = __webpack_require__(9874);
/**
 * Traverse a bonding hierarchy, executing func and accumulating
 * the results until destination token
 *
 * @param param0
 * @returns
 */
function reduce({ hierarchy, func, initial, destination, wrappedSolMint, }) {
    var _a;
    if (!hierarchy ||
        ((_a = hierarchy.child) === null || _a === void 0 ? void 0 : _a.tokenBonding.baseMint.equals(destination))) {
        return initial;
    }
    if (destination === null || destination === void 0 ? void 0 : destination.equals(spl_token_1.NATIVE_MINT)) {
        destination = wrappedSolMint;
    }
    let current = hierarchy;
    let value = func(initial, current);
    while (!current.tokenBonding.baseMint.equals(destination)) {
        current = current.parent;
        if (!current) {
            throw new Error(`Base mint ${destination.toBase58()} is not in the hierarchy for ${hierarchy.tokenBonding.publicKey.toBase58()}`);
        }
        value = func(value, current);
    }
    return value;
}
/**
 * Traverse a bonding hierarchy, executing func and accumulating
 * the results until destination token starting from parent going to children
 *
 * @param param0
 * @returns
 */
function reduceFromParent({ hierarchy, func, initial, destination, wrappedSolMint, }) {
    if (!hierarchy) {
        return initial;
    }
    if (destination === null || destination === void 0 ? void 0 : destination.equals(spl_token_1.NATIVE_MINT)) {
        destination = wrappedSolMint;
    }
    let current = hierarchy;
    while (!current.tokenBonding.baseMint.equals(destination)) {
        current = current.parent;
        if (!current) {
            throw new Error(`Base mint ${destination.toBase58()} is not in the hierarchy for ${hierarchy.tokenBonding.publicKey.toBase58()}`);
        }
    }
    destination = hierarchy.tokenBonding.targetMint;
    let value = func(initial, current);
    while (!current.tokenBonding.targetMint.equals(destination)) {
        current = current.child;
        value = func(value, current);
    }
    return value;
}
class BondingPricing {
    constructor(args) {
        this.hierarchy = args.hierarchy;
    }
    current(baseMint = this.hierarchy.tokenBonding.baseMint) {
        return reduce({
            hierarchy: this.hierarchy,
            func: (acc, current) => {
                return acc * current.pricingCurve.current();
            },
            initial: 1,
            destination: baseMint,
            wrappedSolMint: this.hierarchy.wrappedSolMint,
        });
    }
    locked(baseMint = this.hierarchy.tokenBonding.baseMint) {
        return reduce({
            hierarchy: this.hierarchy.parent,
            func: (acc, current) => {
                return acc * current.pricingCurve.current();
            },
            initial: this.hierarchy.pricingCurve.locked(),
            destination: baseMint,
            wrappedSolMint: this.hierarchy.wrappedSolMint,
        });
    }
    swap(baseAmount, baseMint, targetMint) {
        const lowMint = this.hierarchy.lowest(baseMint, targetMint);
        const highMint = lowMint.equals(baseMint) ? targetMint : baseMint;
        const isBuying = lowMint.equals(targetMint);
        const path = this.hierarchy.path(lowMint, highMint);
        if (path.length == 0) {
            throw new Error(`No path from ${baseMint} to ${targetMint}`);
        }
        if (isBuying) {
            return path.reverse().reduce((amount, { pricingCurve, tokenBonding }) => {
                return pricingCurve.buyWithBaseAmount(amount, tokenBonding.buyBaseRoyaltyPercentage, tokenBonding.buyTargetRoyaltyPercentage);
            }, baseAmount);
        }
        else {
            return path.reduce((amount, { pricingCurve, tokenBonding }) => {
                return pricingCurve.sellTargetAmount(amount, tokenBonding.sellBaseRoyaltyPercentage, tokenBonding.sellTargetRoyaltyPercentage);
            }, baseAmount);
        }
    }
    swapTargetAmount(targetAmount, baseMint, targetMint) {
        const lowMint = this.hierarchy.lowest(baseMint, targetMint);
        const highMint = lowMint.equals(baseMint) ? targetMint : baseMint;
        const isBuying = lowMint.equals(targetMint);
        const path = this.hierarchy.path(lowMint, highMint);
        if (path.length == 0) {
            throw new Error(`No path from ${baseMint} to ${targetMint}`);
        }
        return isBuying
            ? path.reverse().reduce((amount, { pricingCurve, tokenBonding }) => {
                return pricingCurve.buyWithBaseAmount(-amount, tokenBonding.sellBaseRoyaltyPercentage, tokenBonding.sellTargetRoyaltyPercentage);
            }, targetAmount)
            : path.reverse().reduce((amount, { pricingCurve, tokenBonding }) => {
                return pricingCurve.buyTargetAmount(amount, tokenBonding.buyBaseRoyaltyPercentage, tokenBonding.buyTargetRoyaltyPercentage);
            }, targetAmount);
    }
    sellTargetAmount(targetAmountNum, baseMint = this.hierarchy.tokenBonding.baseMint) {
        return reduce({
            hierarchy: this.hierarchy,
            func: (acc, current) => {
                return current.pricingCurve.sellTargetAmount(acc, current.tokenBonding.sellBaseRoyaltyPercentage, current.tokenBonding.sellTargetRoyaltyPercentage);
            },
            initial: targetAmountNum,
            destination: baseMint,
            wrappedSolMint: this.hierarchy.wrappedSolMint,
        });
    }
    buyTargetAmount(targetAmountNum, baseMint = this.hierarchy.tokenBonding.baseMint) {
        return reduce({
            hierarchy: this.hierarchy,
            func: (acc, current) => {
                return current.pricingCurve.buyTargetAmount(acc, current.tokenBonding.buyBaseRoyaltyPercentage, current.tokenBonding.buyTargetRoyaltyPercentage);
            },
            initial: targetAmountNum,
            destination: baseMint,
            wrappedSolMint: this.hierarchy.wrappedSolMint,
        });
    }
    buyWithBaseAmount(baseAmountNum, baseMint = this.hierarchy.tokenBonding.baseMint) {
        return reduceFromParent({
            hierarchy: this.hierarchy,
            func: (acc, current) => {
                return current.pricingCurve.buyWithBaseAmount(acc, current.tokenBonding.buyBaseRoyaltyPercentage, current.tokenBonding.buyTargetRoyaltyPercentage);
            },
            initial: baseAmountNum,
            destination: baseMint,
            wrappedSolMint: this.hierarchy.wrappedSolMint,
        });
    }
}
exports.BondingPricing = BondingPricing;
//# sourceMappingURL=pricing.js.map

/***/ }),

/***/ 5216:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.asDecimal = exports.supplyAsNum = exports.amountAsNum = exports.toBN = exports.toNumber = exports.toU128 = void 0;
const spl_token_1 = __webpack_require__(9874);
const bn_js_1 = __importDefault(__webpack_require__(2961));
/**
 * Convert a number to a string avoiding scientific notation
 * @param n
 * @returns
 */
function toFixedSpecial(num, n) {
    var str = num.toFixed(n);
    if (str.indexOf("e+") === -1)
        return str;
    // if number is in scientific notation, pick (b)ase and (p)ower
    str = str
        .replace(".", "")
        .split("e+")
        .reduce(function (b, p) {
        // @ts-ignore
        return b + Array(p - b.length + 2).join(0);
    });
    if (n > 0) {
        // @ts-ignore
        str += "." + Array(n + 1).join(0);
    }
    return str;
}
/**
 * Convert a number to a 12 decimal fixed precision u128
 *
 * @param num Number to convert to a 12 decimal fixed precision BN
 * @returns
 */
function toU128(num) {
    if (bn_js_1.default.isBN(num)) {
        return num;
    }
    if (num == Infinity) {
        return new bn_js_1.default(0);
    }
    try {
        return new bn_js_1.default(toFixedSpecial(num, 12).replace(".", ""));
    }
    catch (e) {
        console.error(`Error converting ${num} to U128`);
        return new bn_js_1.default(0);
    }
}
exports.toU128 = toU128;
function toNumber(numberOrBn, mint) {
    if (bn_js_1.default.isBN(numberOrBn)) {
        return amountAsNum(numberOrBn, mint);
    }
    else {
        return numberOrBn;
    }
}
exports.toNumber = toNumber;
function toBN(numberOrBn, mintOrDecimals) {
    const decimals = typeof mintOrDecimals === "number"
        ? mintOrDecimals
        : mintOrDecimals.decimals;
    if (bn_js_1.default.isBN(numberOrBn)) {
        return numberOrBn;
    }
    else {
        return new bn_js_1.default(Math.ceil(Number(numberOrBn) * Math.pow(10, decimals)).toLocaleString("fullwide", { useGrouping: false }));
    }
}
exports.toBN = toBN;
function amountAsNum(amount, mint) {
    const decimals = new spl_token_1.u64(Math.pow(10, mint.decimals).toString());
    const decimal = amount.mod(decimals).toNumber() / decimals.toNumber();
    return amount.div(decimals).toNumber() + decimal;
}
exports.amountAsNum = amountAsNum;
function supplyAsNum(mint) {
    return amountAsNum(mint.supply, mint);
}
exports.supplyAsNum = supplyAsNum;
function asDecimal(percent) {
    return percent / 4294967295; // uint32 max value
}
exports.asDecimal = asDecimal;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 7653:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorCode = exports.SplTokenCollectiveIDLJson = void 0;
exports.SplTokenCollectiveIDLJson = {
    "version": "3.2.5",
    "name": "spl_token_collective",
    "instructions": [
        {
            "name": "initializeCollectiveV0",
            "accounts": [
                {
                    "name": "collective",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mintAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "InitializeCollectiveV0Args"
                    }
                }
            ]
        },
        {
            "name": "updateCollectiveV0",
            "accounts": [
                {
                    "name": "collective",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "UpdateCollectiveV0Args"
                    }
                }
            ]
        },
        {
            "name": "setAsPrimaryV0",
            "accounts": [
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "owner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "tokenRef",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "primaryTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "SetAsPrimaryV0Args"
                    }
                }
            ]
        },
        {
            "name": "initializeOwnedSocialTokenV0",
            "accounts": [
                {
                    "name": "initializeArgs",
                    "accounts": [
                        {
                            "name": "authority",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "payer",
                            "isMut": true,
                            "isSigner": true
                        },
                        {
                            "name": "collective",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "tokenBonding",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "tokenMetadata",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "baseMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "targetMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "buyBaseRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "buyTargetRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "sellBaseRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "sellTargetRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "systemProgram",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "rent",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "clock",
                            "isMut": false,
                            "isSigner": false
                        }
                    ]
                },
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "ownerTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mintTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "owner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "InitializeSocialTokenV0Args"
                    }
                }
            ]
        },
        {
            "name": "initializeUnclaimedSocialTokenV0",
            "accounts": [
                {
                    "name": "initializeArgs",
                    "accounts": [
                        {
                            "name": "authority",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "payer",
                            "isMut": true,
                            "isSigner": true
                        },
                        {
                            "name": "collective",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "tokenBonding",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "tokenMetadata",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "baseMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "targetMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "buyBaseRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "buyTargetRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "sellBaseRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "sellTargetRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "systemProgram",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "rent",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "clock",
                            "isMut": false,
                            "isSigner": false
                        }
                    ]
                },
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "ownerTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mintTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenMetadata",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "name",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "InitializeSocialTokenV0Args"
                    }
                }
            ]
        },
        {
            "name": "claimSocialTokenV0",
            "accounts": [
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "collective",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "ownerTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "newTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mintTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenBonding",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenMetadata",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "name",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "baseMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "targetMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "buyBaseRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "buyTargetRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "sellBaseRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "sellTargetRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "newBuyBaseRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "newBuyTargetRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "newSellBaseRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "newSellTargetRoyalties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenBondingProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenMetadataProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "ClaimSocialTokenV0Args"
                    }
                }
            ]
        },
        {
            "name": "updateTokenBondingV0",
            "accounts": [
                {
                    "name": "collective",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "mintTokenRef",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenBonding",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenRefAuthority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "tokenBondingProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "baseMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "targetMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "buyBaseRoyalties",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "buyTargetRoyalties",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "sellBaseRoyalties",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "sellTargetRoyalties",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "UpdateTokenBondingV0ArgsWrapper"
                    }
                }
            ]
        },
        {
            "name": "changeOptStatusUnclaimedV0",
            "accounts": [
                {
                    "name": "ownerTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mintTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "name",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenBondingUpdateAccounts",
                    "accounts": [
                        {
                            "name": "tokenBonding",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "baseMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "targetMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "buyBaseRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "buyTargetRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "sellBaseRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "sellTargetRoyalties",
                            "isMut": false,
                            "isSigner": false
                        }
                    ]
                },
                {
                    "name": "tokenBondingProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "ChangeOptStatusUnclaimedV0Args"
                    }
                }
            ]
        },
        {
            "name": "changeOptStatusClaimedV0",
            "accounts": [
                {
                    "name": "ownerTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "primaryTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "owner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "mintTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenBondingUpdateAccounts",
                    "accounts": [
                        {
                            "name": "tokenBonding",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "baseMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "targetMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "buyBaseRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "buyTargetRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "sellBaseRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "sellTargetRoyalties",
                            "isMut": false,
                            "isSigner": false
                        }
                    ]
                },
                {
                    "name": "tokenBondingProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "ChangeOptStatusClaimedV0Args"
                    }
                }
            ]
        },
        {
            "name": "updateOwnerV0",
            "accounts": [
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "newOwner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "baseMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "owner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "oldOwnerTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "newOwnerTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mintTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "oldPrimaryTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "newPrimaryTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "UpdateOwnerV0Args"
                    }
                }
            ]
        },
        {
            "name": "updateAuthorityV0",
            "accounts": [
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "baseMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "ownerTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "mintTokenRef",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "primaryTokenRef",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "args",
                    "type": {
                        "defined": "UpdateAuthorityV0Args"
                    }
                }
            ]
        },
        {
            "name": "claimBondingAuthorityV0",
            "accounts": [
                {
                    "name": "mintTokenRef",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenBondingUpdateAccounts",
                    "accounts": [
                        {
                            "name": "tokenBonding",
                            "isMut": true,
                            "isSigner": false
                        },
                        {
                            "name": "baseMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "targetMint",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "buyBaseRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "buyTargetRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "sellBaseRoyalties",
                            "isMut": false,
                            "isSigner": false
                        },
                        {
                            "name": "sellTargetRoyalties",
                            "isMut": false,
                            "isSigner": false
                        }
                    ]
                },
                {
                    "name": "tokenBondingProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "CollectiveV0",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "mint",
                        "type": "publicKey"
                    },
                    {
                        "name": "authority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "config",
                        "type": {
                            "defined": "CollectiveConfigV0"
                        }
                    },
                    {
                        "name": "bumpSeed",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "TokenRefV0",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "collective",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "tokenMetadata",
                        "type": "publicKey"
                    },
                    {
                        "name": "mint",
                        "type": "publicKey"
                    },
                    {
                        "name": "tokenBonding",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "name",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "owner",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "authority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "isClaimed",
                        "type": "bool"
                    },
                    {
                        "name": "isPrimary",
                        "type": "bool"
                    },
                    {
                        "name": "bumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "targetRoyaltiesOwnerBumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "isOptedOut",
                        "type": "bool"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "ClaimSocialTokenV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "isPrimary",
                        "type": "bool"
                    },
                    {
                        "name": "authority",
                        "type": {
                            "option": "publicKey"
                        }
                    }
                ]
            }
        },
        {
            "name": "InitializeCollectiveV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "bumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "authority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "config",
                        "type": {
                            "defined": "CollectiveConfigV0"
                        }
                    }
                ]
            }
        },
        {
            "name": "UpdateCollectiveV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "authority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "config",
                        "type": {
                            "defined": "CollectiveConfigV0"
                        }
                    }
                ]
            }
        },
        {
            "name": "CollectiveConfigV0",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "isOpen",
                        "type": "bool"
                    },
                    {
                        "name": "unclaimedTokenMetadataSettings",
                        "type": {
                            "option": {
                                "defined": "TokenMetadataSettingsV0"
                            }
                        }
                    },
                    {
                        "name": "unclaimedTokenBondingSettings",
                        "type": {
                            "option": {
                                "defined": "TokenBondingSettingsV0"
                            }
                        }
                    },
                    {
                        "name": "claimedTokenBondingSettings",
                        "type": {
                            "option": {
                                "defined": "TokenBondingSettingsV0"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "TokenMetadataSettingsV0",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "symbol",
                        "type": {
                            "option": "string"
                        }
                    },
                    {
                        "name": "uri",
                        "type": {
                            "option": "string"
                        }
                    },
                    {
                        "name": "nameIsNameServiceName",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "RoyaltySettingV0",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "address",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "ownedByName",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "UpdateOwnerV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "ownerTokenRefBumpSeed",
                        "type": "u8"
                    },
                    {
                        "name": "primaryTokenRefBumpSeed",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "TokenBondingSettingsV0",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "curve",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "minSellBaseRoyaltyPercentage",
                        "type": {
                            "option": "u32"
                        }
                    },
                    {
                        "name": "minSellTargetRoyaltyPercentage",
                        "type": {
                            "option": "u32"
                        }
                    },
                    {
                        "name": "maxSellBaseRoyaltyPercentage",
                        "type": {
                            "option": "u32"
                        }
                    },
                    {
                        "name": "maxSellTargetRoyaltyPercentage",
                        "type": {
                            "option": "u32"
                        }
                    },
                    {
                        "name": "minBuyBaseRoyaltyPercentage",
                        "type": {
                            "option": "u32"
                        }
                    },
                    {
                        "name": "minBuyTargetRoyaltyPercentage",
                        "type": {
                            "option": "u32"
                        }
                    },
                    {
                        "name": "maxBuyBaseRoyaltyPercentage",
                        "type": {
                            "option": "u32"
                        }
                    },
                    {
                        "name": "maxBuyTargetRoyaltyPercentage",
                        "type": {
                            "option": "u32"
                        }
                    },
                    {
                        "name": "targetMintDecimals",
                        "type": {
                            "option": "u8"
                        }
                    },
                    {
                        "name": "buyBaseRoyalties",
                        "type": {
                            "defined": "RoyaltySettingV0"
                        }
                    },
                    {
                        "name": "sellBaseRoyalties",
                        "type": {
                            "defined": "RoyaltySettingV0"
                        }
                    },
                    {
                        "name": "buyTargetRoyalties",
                        "type": {
                            "defined": "RoyaltySettingV0"
                        }
                    },
                    {
                        "name": "sellTargetRoyalties",
                        "type": {
                            "defined": "RoyaltySettingV0"
                        }
                    },
                    {
                        "name": "minPurchaseCap",
                        "type": {
                            "option": "u64"
                        }
                    },
                    {
                        "name": "maxPurchaseCap",
                        "type": {
                            "option": "u64"
                        }
                    },
                    {
                        "name": "minMintCap",
                        "type": {
                            "option": "u64"
                        }
                    },
                    {
                        "name": "maxMintCap",
                        "type": {
                            "option": "u64"
                        }
                    }
                ]
            }
        },
        {
            "name": "SetAsPrimaryV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "bumpSeed",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "InitializeSocialTokenV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "authority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "nameParent",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "nameClass",
                        "type": {
                            "option": "publicKey"
                        }
                    }
                ]
            }
        },
        {
            "name": "UpdateTokenBondingV0ArgsWrapper",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "tokenBondingAuthority",
                        "type": {
                            "option": "publicKey"
                        }
                    },
                    {
                        "name": "buyBaseRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "buyTargetRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "sellBaseRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "sellTargetRoyaltyPercentage",
                        "type": "u32"
                    },
                    {
                        "name": "buyFrozen",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "ChangeOptStatusUnclaimedV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "hashedName",
                        "type": "bytes"
                    },
                    {
                        "name": "isOptedOut",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "ChangeOptStatusClaimedV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "isOptedOut",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "UpdateAuthorityV0Args",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "newAuthority",
                        "type": "publicKey"
                    }
                ]
            }
        },
        {
            "name": "UpdateMetadataAccountArgs",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "uri",
                        "type": "string"
                    }
                ]
            }
        },
        {
            "name": "ErrorCode",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "NoAuthority"
                    },
                    {
                        "name": "InvalidBump"
                    },
                    {
                        "name": "InvalidAuthority"
                    },
                    {
                        "name": "InvalidTokenBondingSettings"
                    },
                    {
                        "name": "InvalidTokenBondingRoyalties"
                    },
                    {
                        "name": "InvalidTokenMetadataSettings"
                    },
                    {
                        "name": "IncorrectOwner"
                    },
                    {
                        "name": "NoBonding"
                    },
                    {
                        "name": "InvalidCollective"
                    },
                    {
                        "name": "InvalidNameAuthority"
                    },
                    {
                        "name": "UnclaimedNotLive"
                    },
                    {
                        "name": "InvalidGoLive"
                    }
                ]
            }
        }
    ]
};
exports.ErrorCode = {
    NoAuthority: { noauthority: {} },
    InvalidBump: { invalidbump: {} },
    InvalidAuthority: { invalidauthority: {} },
    InvalidTokenBondingSettings: { invalidtokenbondingsettings: {} },
    InvalidTokenBondingRoyalties: { invalidtokenbondingroyalties: {} },
    InvalidTokenMetadataSettings: { invalidtokenmetadatasettings: {} },
    IncorrectOwner: { incorrectowner: {} },
    NoBonding: { nobonding: {} },
    InvalidCollective: { invalidcollective: {} },
    InvalidNameAuthority: { invalidnameauthority: {} },
    UnclaimedNotLive: { unclaimednotlive: {} },
    InvalidGoLive: { invalidgolive: {} }
};
//# sourceMappingURL=spl-token-collective.js.map

/***/ }),

/***/ 6394:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SplTokenCollective = void 0;
const mpl_token_metadata_1 = __webpack_require__(9817);
const anchor = __importStar(__webpack_require__(1024));
const spl_name_service_1 = __webpack_require__(3663);
const spl_token_1 = __webpack_require__(9874);
const web3_js_1 = __webpack_require__(7831);
const spl_token_bonding_1 = __webpack_require__(9587);
const spl_utils_1 = __webpack_require__(4022);
const borsh_1 = __webpack_require__(3871);
__exportStar(__webpack_require__(7653), exports);
(0, spl_utils_1.extendBorsh)();
function undefinedToNull(obj) {
    if (typeof obj === "undefined") {
        return null;
    }
    return obj;
}
function toIdlTokenMetadataSettings(settings) {
    return {
        symbol: undefinedToNull(settings === null || settings === void 0 ? void 0 : settings.symbol),
        uri: undefinedToNull(settings === null || settings === void 0 ? void 0 : settings.uri),
        nameIsNameServiceName: !!(settings === null || settings === void 0 ? void 0 : settings.nameIsNameServiceName),
    };
}
function toIdlRoyaltySettings(settings) {
    return {
        ownedByName: !!(settings === null || settings === void 0 ? void 0 : settings.ownedByName),
        address: undefinedToNull(settings === null || settings === void 0 ? void 0 : settings.address),
    };
}
function toIdlTokenBondingSettings(settings) {
    return {
        curve: undefinedToNull(settings === null || settings === void 0 ? void 0 : settings.curve),
        minSellBaseRoyaltyPercentage: undefinedToNull((0, spl_utils_1.percent)(settings === null || settings === void 0 ? void 0 : settings.minSellBaseRoyaltyPercentage)),
        minSellTargetRoyaltyPercentage: undefinedToNull((0, spl_utils_1.percent)(settings === null || settings === void 0 ? void 0 : settings.minSellTargetRoyaltyPercentage)),
        maxSellBaseRoyaltyPercentage: undefinedToNull((0, spl_utils_1.percent)(settings === null || settings === void 0 ? void 0 : settings.maxSellBaseRoyaltyPercentage)),
        maxSellTargetRoyaltyPercentage: undefinedToNull((0, spl_utils_1.percent)(settings === null || settings === void 0 ? void 0 : settings.maxSellTargetRoyaltyPercentage)),
        minBuyBaseRoyaltyPercentage: undefinedToNull((0, spl_utils_1.percent)(settings === null || settings === void 0 ? void 0 : settings.minBuyBaseRoyaltyPercentage)),
        minBuyTargetRoyaltyPercentage: undefinedToNull((0, spl_utils_1.percent)(settings === null || settings === void 0 ? void 0 : settings.minBuyTargetRoyaltyPercentage)),
        maxBuyBaseRoyaltyPercentage: undefinedToNull((0, spl_utils_1.percent)(settings === null || settings === void 0 ? void 0 : settings.maxBuyBaseRoyaltyPercentage)),
        maxBuyTargetRoyaltyPercentage: undefinedToNull((0, spl_utils_1.percent)(settings === null || settings === void 0 ? void 0 : settings.maxBuyTargetRoyaltyPercentage)),
        targetMintDecimals: undefinedToNull(settings === null || settings === void 0 ? void 0 : settings.targetMintDecimals),
        // @ts-ignore
        buyBaseRoyalties: toIdlRoyaltySettings(settings === null || settings === void 0 ? void 0 : settings.buyBaseRoyalties),
        // @ts-ignore
        sellBaseRoyalties: toIdlRoyaltySettings(settings === null || settings === void 0 ? void 0 : settings.sellBaseRoyalties),
        // @ts-ignore
        buyTargetRoyalties: toIdlRoyaltySettings(settings === null || settings === void 0 ? void 0 : settings.buyTargetRoyalties),
        // @ts-ignore
        sellTargetRoyalties: toIdlRoyaltySettings(settings === null || settings === void 0 ? void 0 : settings.sellTargetRoyalties),
        minPurchaseCap: undefinedToNull(settings === null || settings === void 0 ? void 0 : settings.minPurchaseCap),
        maxPurchaseCap: undefinedToNull(settings === null || settings === void 0 ? void 0 : settings.maxPurchaseCap),
        minMintCap: undefinedToNull(settings === null || settings === void 0 ? void 0 : settings.minMintCap),
        maxMintCap: undefinedToNull(settings === null || settings === void 0 ? void 0 : settings.maxMintCap),
    };
}
function toIdlConfig(config) {
    return {
        isOpen: config.isOpen,
        // @ts-ignore
        unclaimedTokenBondingSettings: toIdlTokenBondingSettings(config.unclaimedTokenBondingSettings),
        // @ts-ignore
        claimedTokenBondingSettings: toIdlTokenBondingSettings(config.claimedTokenBondingSettings),
        // @ts-ignore
        unclaimedTokenMetadataSettings: toIdlTokenMetadataSettings(config.unclaimedTokenMetadataSettings),
    };
}
function definedOr(value, def) {
    if (typeof value == "undefined") {
        return def;
    }
    return value;
}
class SplTokenCollective extends spl_utils_1.AnchorSdk {
    constructor(opts) {
        super(opts);
        /**
         * Account decoder to a unified TokenRef interface
         *
         * @param pubkey
         * @param account
         * @returns
         */
        this.tokenRefDecoder = (pubkey, account) => {
            const coded = this.program.coder.accounts.decode("TokenRefV0", account.data);
            return Object.assign(Object.assign({}, coded), { publicKey: pubkey });
        };
        /**
         * Account decoder to a unified Collective interface
         *
         * @param pubkey
         * @param account
         * @returns
         */
        this.collectiveDecoder = (pubkey, account) => {
            const coded = this.program.coder.accounts.decode("CollectiveV0", account.data);
            return Object.assign(Object.assign({}, coded), { publicKey: pubkey });
        };
        this.splTokenBondingProgram = opts.splTokenBondingProgram;
        this.splTokenMetadata = opts.splTokenMetadata;
    }
    static init(provider, splCollectiveProgramId = SplTokenCollective.ID, splTokenBondingProgramId = spl_token_bonding_1.SplTokenBonding.ID) {
        return __awaiter(this, void 0, void 0, function* () {
            const SplCollectiveIDLJson = yield anchor.Program.fetchIdl(splCollectiveProgramId, provider);
            // @ts-ignore
            const splCollective = new anchor.Program(SplCollectiveIDLJson, splCollectiveProgramId, provider);
            const splTokenBondingProgram = yield spl_token_bonding_1.SplTokenBonding.init(provider, splTokenBondingProgramId);
            const splTokenMetadata = yield spl_utils_1.SplTokenMetadata.init(provider);
            return new this({
                provider,
                program: splCollective,
                splTokenBondingProgram,
                splTokenMetadata,
            });
        });
    }
    getCollective(collectiveKey) {
        return this.getAccount(collectiveKey, this.collectiveDecoder);
    }
    getTokenRef(ownerTokenRefKey) {
        return this.getAccount(ownerTokenRefKey, this.tokenRefDecoder);
    }
    /**
     * Instructions to create a Collective
     *
     * @param param0
     * @returns
     */
    createCollectiveInstructions({ payer = this.wallet.publicKey, mint, authority, mintAuthority, config, bonding, metadata, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const instructions = [];
            const signers = [];
            let metadataAdded = false;
            const addMetadata = () => __awaiter(this, void 0, void 0, function* () {
                if (metadata && !metadataAdded) {
                    const { instructions: metadataInstructions, signers: metadataSigners } = yield this.splTokenMetadata.createMetadataInstructions({
                        mint: mint,
                        authority: mintAuthority,
                        data: new mpl_token_metadata_1.DataV2({
                            name: metadata.name,
                            symbol: metadata.symbol,
                            uri: metadata.uri,
                            creators: null,
                            sellerFeeBasisPoints: 0,
                            collection: null,
                            uses: null,
                        }),
                    });
                    instructions.push(...metadataInstructions);
                    signers.push(...metadataSigners);
                }
                metadataAdded = true;
            });
            if (!mint) {
                const targetMintKeypair = (bonding === null || bonding === void 0 ? void 0 : bonding.targetMintKeypair) || anchor.web3.Keypair.generate();
                signers.push(targetMintKeypair);
                mint = targetMintKeypair.publicKey;
                instructions.push(...(yield (0, spl_utils_1.createMintInstructions)(this.provider, payer, mint, (bonding === null || bonding === void 0 ? void 0 : bonding.targetMintDecimals) || 9)));
                mintAuthority = payer;
                yield addMetadata();
            }
            if (!mintAuthority) {
                const mintAcct = yield this.provider.connection.getAccountInfo(mint);
                const data = Buffer.from(mintAcct.data);
                const mintInfo = spl_token_1.MintLayout.decode(data);
                if (mintInfo.mintAuthorityOption === 0) {
                    throw new Error("Must have mint authority to create a collective");
                }
                else {
                    mintAuthority = new web3_js_1.PublicKey(mintInfo.mintAuthority);
                }
                yield addMetadata();
            }
            const [collective, collectiveBump] = yield SplTokenCollective.collectiveKey(mint);
            if (yield this.provider.connection.getAccountInfo(collective)) {
                throw new Error("Collective already exists");
            }
            instructions.push(yield this.instruction.initializeCollectiveV0(
            // @ts-ignore
            {
                authority: authority ? authority : null,
                bumpSeed: collectiveBump,
                config: toIdlConfig(config),
            }, {
                accounts: {
                    collective,
                    mint: mint,
                    mintAuthority: mintAuthority,
                    payer,
                    systemProgram: web3_js_1.SystemProgram.programId,
                    rent: web3_js_1.SYSVAR_RENT_PUBKEY,
                },
            }));
            const instructions2 = [];
            const signers2 = [];
            let tokenBonding;
            if (bonding) {
                tokenBonding = (yield spl_token_bonding_1.SplTokenBonding.tokenBondingKey(mint, bonding.index || 0))[0];
                // Set back to token bonding's authority
                instructions2.push(spl_token_1.Token.createSetAuthorityInstruction(spl_token_1.TOKEN_PROGRAM_ID, mint, tokenBonding, "MintTokens", mintAuthority, []));
                mintAuthority = tokenBonding;
                var { instructions: tokenBondingInstructions, signers: tokenBondingSigners, output: { tokenBonding: outputTokenBonding }, } = yield this.splTokenBondingProgram.createTokenBondingInstructions(Object.assign(Object.assign({}, bonding), { targetMint: mint }));
                tokenBonding = outputTokenBonding;
                instructions2.push(...tokenBondingInstructions);
                signers2.push(...tokenBondingSigners);
            }
            return {
                output: { collective, tokenBonding },
                instructions: [instructions, instructions2],
                signers: [signers, signers2],
            };
        });
    }
    /**
     * Run {@link createCollectiveInstructions}
     * @param args
     * @returns
     */
    createCollective(args, commitment = "confirmed") {
        return this.executeBig(this.createCollectiveInstructions(args), args.payer, commitment);
    }
    /**
     * Instructions to claim a social token
     *
     * @param param0
     * @returns
     */
    claimSocialTokenInstructions({ payer = this.wallet.publicKey, owner = this.wallet.publicKey, tokenRef, tokenName, symbol, buyBaseRoyalties, buyTargetRoyalties, sellBaseRoyalties, sellTargetRoyalties, ignoreMissingName, isPrimary = true, authority = this.wallet.publicKey, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenRefAcct = (yield this.getTokenRef(tokenRef));
            if (!tokenRefAcct.tokenBonding) {
                throw new Error("Claiming token ref without token bonding not yet supported");
            }
            const tokenBondingAcct = (yield this.splTokenBondingProgram.getTokenBonding(tokenRefAcct.tokenBonding));
            const ownerTokenRef = (yield SplTokenCollective.ownerTokenRefKey({
                mint: tokenBondingAcct.baseMint,
                name: tokenRefAcct.name,
            }))[0];
            const name = tokenRefAcct.name;
            const instructions0 = [];
            if (!ignoreMissingName &&
                !(yield this.splTokenBondingProgram.accountExists(name))) {
                throw new Error("Name account does not exist");
            }
            const defaultBaseRoyalties = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.baseMint, owner, true);
            const defaultTargetRoyalties = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.targetMint, owner, true);
            if ((!buyTargetRoyalties || !sellTargetRoyalties) &&
                !(yield this.splTokenBondingProgram.accountExists(defaultTargetRoyalties))) {
                console.log(`Creating target royalties ${defaultTargetRoyalties}...`);
                instructions0.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.targetMint, defaultTargetRoyalties, owner, payer));
            }
            if ((!buyBaseRoyalties || !sellBaseRoyalties) &&
                !(yield this.splTokenBondingProgram.accountExists(defaultBaseRoyalties))) {
                console.log(`Creating base royalties ${defaultBaseRoyalties}...`);
                instructions0.push(spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, tokenBondingAcct.baseMint, defaultBaseRoyalties, owner, payer));
            }
            if (!buyBaseRoyalties) {
                buyBaseRoyalties = defaultBaseRoyalties;
            }
            if (!sellBaseRoyalties) {
                sellBaseRoyalties = defaultBaseRoyalties;
            }
            if (!buyTargetRoyalties) {
                buyTargetRoyalties = defaultTargetRoyalties;
            }
            if (!sellTargetRoyalties) {
                sellTargetRoyalties = defaultTargetRoyalties;
            }
            const [mintTokenRef] = yield SplTokenCollective.mintTokenRefKey(tokenBondingAcct.targetMint);
            const [newTokenRef] = yield web3_js_1.PublicKey.findProgramAddress(SplTokenCollective.ownerTokenRefSeeds({
                mint: tokenBondingAcct.baseMint,
                owner,
            }), this.programId);
            const instructions1 = [];
            instructions1.push(yield this.instruction.claimSocialTokenV0({
                isPrimary,
                authority,
            }, {
                accounts: {
                    payer,
                    collective: tokenRefAcct.collective || web3_js_1.PublicKey.default,
                    ownerTokenRef,
                    newTokenRef,
                    mintTokenRef,
                    tokenBonding: tokenRefAcct.tokenBonding,
                    tokenMetadata: tokenRefAcct.tokenMetadata,
                    name,
                    owner,
                    baseMint: tokenBondingAcct.baseMint,
                    targetMint: tokenBondingAcct.targetMint,
                    buyBaseRoyalties: tokenBondingAcct.buyBaseRoyalties,
                    buyTargetRoyalties: tokenBondingAcct.buyTargetRoyalties,
                    sellBaseRoyalties: tokenBondingAcct.sellBaseRoyalties,
                    sellTargetRoyalties: tokenBondingAcct.sellTargetRoyalties,
                    newBuyBaseRoyalties: buyBaseRoyalties,
                    newBuyTargetRoyalties: buyTargetRoyalties,
                    newSellBaseRoyalties: sellBaseRoyalties,
                    newSellTargetRoyalties: sellTargetRoyalties,
                    tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    tokenBondingProgram: this.splTokenBondingProgram.programId,
                    tokenMetadataProgram: mpl_token_metadata_1.MetadataProgram.PUBKEY,
                    systemProgram: web3_js_1.SystemProgram.programId,
                    rent: web3_js_1.SYSVAR_RENT_PUBKEY,
                },
            }));
            if (symbol) {
                const tokenMetadataRaw = yield this.provider.connection.getAccountInfo(tokenRefAcct.tokenMetadata);
                const tokenMetadata = new mpl_token_metadata_1.Metadata(tokenRefAcct.tokenMetadata, tokenMetadataRaw).data;
                const { instructions: updateInstructions } = yield this.splTokenMetadata.updateMetadataInstructions({
                    data: new mpl_token_metadata_1.DataV2({
                        name: tokenName || tokenMetadata.data.name,
                        symbol: symbol || tokenMetadata.data.symbol,
                        uri: tokenMetadata.data.uri,
                        sellerFeeBasisPoints: 0,
                        creators: null,
                        collection: null,
                        uses: null,
                    }),
                    newAuthority: owner,
                    updateAuthority: owner,
                    metadata: tokenRefAcct.tokenMetadata,
                });
                instructions1.push(...updateInstructions);
            }
            const instructions2 = [];
            if (isPrimary) {
                const { instructions: setAsPrimaryInstrs } = yield this.setAsPrimaryInstructions({
                    tokenRef: mintTokenRef,
                    payer,
                    owner,
                });
                instructions2.push(...setAsPrimaryInstrs);
            }
            return {
                signers: [[], [], []],
                instructions: [instructions0, instructions1, instructions2],
                output: null,
            };
        });
    }
    /**
     * Run {@link claimSocialTokenInstructions}
     * @param args
     */
    claimSocialToken(args) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.executeBig(this.claimSocialTokenInstructions(args));
        });
    }
    /**
     * Get the seeds for the PDA of a token ref given the various parameters.
     *
     * @param param0
     * @returns
     */
    static ownerTokenRefSeeds({ owner, name, mint, isPrimary, }) {
        const str = Buffer.from("owner-token-ref", "utf-8");
        if ((isPrimary || !mint) && !name) {
            if (!owner) {
                throw new Error("Owner is required for a primary token refs");
            }
            return [str, owner.toBuffer()];
        }
        else {
            if (!mint) {
                throw new Error("Mint is required for non-primary token refs");
            }
            return [str, (name || owner).toBuffer(), mint.toBuffer()];
        }
    }
    static collectiveKey(mint, programId = SplTokenCollective.ID) {
        return web3_js_1.PublicKey.findProgramAddress([Buffer.from("collective", "utf-8"), mint.toBuffer()], programId);
    }
    static ownerTokenRefKey(args, programId = SplTokenCollective.ID) {
        return __awaiter(this, void 0, void 0, function* () {
            return web3_js_1.PublicKey.findProgramAddress(this.ownerTokenRefSeeds(args), programId);
        });
    }
    static mintTokenRefKey(mint, programId = SplTokenCollective.ID) {
        return __awaiter(this, void 0, void 0, function* () {
            return web3_js_1.PublicKey.findProgramAddress([Buffer.from("mint-token-ref", "utf-8"), mint.toBuffer()], programId);
        });
    }
    /**
     * Get instructions to set this ownerTokenRef as our primary token ref (lookups to "owner-token-ref", owner pda find this ownerTokenRef)
     *
     * @param param0
     * @returns
     */
    setAsPrimaryInstructions({ payer = this.wallet.publicKey, tokenRef, owner, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!owner) {
                // @ts-ignore
                owner = (yield this.getTokenRef(tokenRef)).owner;
            }
            const [primaryTokenRef, bumpSeed] = yield SplTokenCollective.ownerTokenRefKey({
                isPrimary: true,
                owner,
            });
            return {
                signers: [],
                instructions: [
                    yield this.instruction.setAsPrimaryV0({
                        bumpSeed,
                    }, {
                        accounts: {
                            payer,
                            owner: owner,
                            tokenRef,
                            primaryTokenRef,
                            systemProgram: web3_js_1.SystemProgram.programId,
                            rent: web3_js_1.SYSVAR_RENT_PUBKEY,
                        },
                    }),
                ],
                output: {
                    primaryTokenRef,
                },
            };
        });
    }
    /**
     * Run {@link setAsPrimaryInstructions}
     * @param args
     */
    setAsPrimary(args) {
        return this.execute(this.setAsPrimaryInstructions(args));
    }
    /**
     * Get instructions to update this collective
     *
     * @param param0
     * @returns
     */
    updateCollectiveInstructions({ collective, authority, config, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof authority == "undefined") {
                // @ts-ignore
                authority = (yield this.getCollective(collective)).authority;
            }
            return {
                signers: [],
                instructions: [
                    yield this.instruction.updateCollectiveV0(
                    // @ts-ignore
                    {
                        config: toIdlConfig(config),
                        authority,
                    }, {
                        accounts: {
                            collective,
                            authority,
                        },
                    }),
                ],
                output: null,
            };
        });
    }
    /**
     * Run {@link updateCollectiveInstructions}
     * @param args
     */
    updateCollective(args) {
        return this.execute(this.updateCollectiveInstructions(args));
    }
    /**
     * Instructions to create everything around a social token... metadata, bonding curves, etc.
     *
     * @param param0
     * @returns
     */
    createSocialTokenInstructions({ ignoreIfExists = false, payer = this.wallet.publicKey, collective, mint, name, owner, targetMintKeypair = anchor.web3.Keypair.generate(), metadata, nameClass, nameParent, tokenBondingParams, isPrimary = name ? false : true, authority, }) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return __awaiter(this, void 0, void 0, function* () {
            let metadataUri = metadata === null || metadata === void 0 ? void 0 : metadata.uri;
            if (!owner && !name) {
                owner = this.wallet.publicKey;
            }
            if (!authority && !name) {
                authority = this.wallet.publicKey;
            }
            const curve = tokenBondingParams.curve;
            const programId = this.programId;
            const provider = this.provider;
            const instructions1 = [];
            const signers1 = [];
            if (!mint && !collective) {
                mint = SplTokenCollective.OPEN_COLLECTIVE_MINT_ID;
            }
            const state = (yield this.splTokenBondingProgram.getState());
            const isNative = (mint === null || mint === void 0 ? void 0 : mint.equals(spl_token_1.NATIVE_MINT)) || (mint === null || mint === void 0 ? void 0 : mint.equals(state.wrappedSolMint));
            if (isNative) {
                mint = state.wrappedSolMint;
            }
            let collectiveBumpSeed = 0;
            if (!collective) {
                [collective, collectiveBumpSeed] = yield SplTokenCollective.collectiveKey(mint);
            }
            const collectiveAcct = yield this.getCollective(collective);
            if (collectiveAcct) {
                collectiveBumpSeed = collectiveAcct.bumpSeed;
            }
            const config = collectiveAcct === null || collectiveAcct === void 0 ? void 0 : collectiveAcct.config;
            if (!mint) {
                if (!collectiveAcct) {
                    throw new Error("Must either provide a collective or a mint");
                }
                mint = collectiveAcct.mint;
            }
            // Token refs
            const [ownerTokenRef, ownerTokenRefBumpSeed] = yield web3_js_1.PublicKey.findProgramAddress(SplTokenCollective.ownerTokenRefSeeds({ mint, owner, name }), programId);
            // create mint with payer as auth
            console.log(`Creating social token mint ${targetMintKeypair.publicKey.toBase58()}`);
            signers1.push(targetMintKeypair);
            const targetMint = targetMintKeypair.publicKey;
            instructions1.push(...(yield (0, spl_utils_1.createMintInstructions)(provider, payer, targetMint, tokenBondingParams.targetMintDecimals ||
                (
                // @ts-ignore
                (_a = config === null || config === void 0 ? void 0 : config.unclaimedTokenBondingSettings) === null || _a === void 0 ? void 0 : _a.targetMintDecimals) ||
                9)));
            const [mintTokenRef, mintTokenRefBumpSeed] = yield SplTokenCollective.mintTokenRefKey(targetMint);
            console.log("ownerTokenRef", ownerTokenRef.toBase58());
            console.log("reverse", mintTokenRef.toBase58());
            const existing = yield this.getTokenRef(ownerTokenRef);
            if (existing) {
                if (ignoreIfExists) {
                    return {
                        instructions: [],
                        signers: [],
                        output: {
                            mint: existing.mint,
                            ownerTokenRef,
                            mintTokenRef,
                            tokenBonding: existing.tokenBonding,
                        },
                    };
                }
                throw new Error("Social token already exists for this wallet or name");
            }
            // create metadata with payer as temporary authority
            console.log("Creating social token metadata...");
            // @ts-ignore
            let uri = metadataUri || ((_b = config === null || config === void 0 ? void 0 : config.unclaimedTokenMetadataSettings) === null || _b === void 0 ? void 0 : _b.uri);
            if (!uri) {
                throw new Error("Must pass metadata.uri or it must be defined on the collective config");
            }
            const tokenBonding = (yield spl_token_bonding_1.SplTokenBonding.tokenBondingKey(targetMint, 0))[0];
            const { instructions: metadataInstructions, signers: metadataSigners, output: { metadata: tokenMetadata }, } = yield this.splTokenMetadata.createMetadataInstructions({
                mint: targetMint,
                authority: owner ? owner : mintTokenRef,
                data: new mpl_token_metadata_1.DataV2(Object.assign({ uri, collection: null, uses: null, creators: null, sellerFeeBasisPoints: 0 }, metadata)),
            });
            instructions1.push(...metadataInstructions);
            signers1.push(...metadataSigners);
            instructions1.push(spl_token_1.Token.createSetAuthorityInstruction(spl_token_1.TOKEN_PROGRAM_ID, targetMint, tokenBonding, "MintTokens", payer, []));
            // Create token bonding
            const instructions2 = [];
            const tokenBondingSettings = owner
                ? config === null || config === void 0 ? void 0 : config.claimedTokenBondingSettings
                : config === null || config === void 0 ? void 0 : config.unclaimedTokenBondingSettings;
            const signers2 = [];
            const curveToUse = (curve ||
                (!owner &&
                    (
                    // @ts-ignore
                    (_d = (_c = collectiveAcct === null || collectiveAcct === void 0 ? void 0 : collectiveAcct.config) === null || _c === void 0 ? void 0 : _c.unclaimedTokenBondingSettings) === null || _d === void 0 ? void 0 : _d.curve)) ||
                // @ts-ignore
                (owner && ((_f = (_e = collectiveAcct === null || collectiveAcct === void 0 ? void 0 : collectiveAcct.config) === null || _e === void 0 ? void 0 : _e.claimedTokenBondingSettings) === null || _f === void 0 ? void 0 : _f.curve)) ||
                (
                // @ts-ignore
                (_h = (_g = collectiveAcct === null || collectiveAcct === void 0 ? void 0 : collectiveAcct.config) === null || _g === void 0 ? void 0 : _g.unclaimedTokenBondingSettings) === null || _h === void 0 ? void 0 : _h.curve) ||
                (
                // @ts-ignore
                (_k = (_j = collectiveAcct === null || collectiveAcct === void 0 ? void 0 : collectiveAcct.config) === null || _j === void 0 ? void 0 : _j.claimedTokenBondingSettings) === null || _k === void 0 ? void 0 : _k.curve));
            if (!curveToUse) {
                throw new Error("No curve provided");
            }
            const { instructions: bondingInstructions, signers: bondingSigners, output: { buyBaseRoyalties, buyTargetRoyalties, sellBaseRoyalties, sellTargetRoyalties, baseMint, }, } = yield this.splTokenBondingProgram.createTokenBondingInstructions(Object.assign({ payer, index: 0, 
                // @ts-ignore
                curve: curveToUse, baseMint: mint, targetMint, generalAuthority: mintTokenRef, reserveAuthority: mintTokenRef, curveAuthority: mintTokenRef, 
                // @ts-ignore
                buyBaseRoyaltiesOwner: (tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.buyBaseRoyalties.ownedByName)
                    ? mintTokenRef
                    : undefined, 
                // @ts-ignore
                sellBaseRoyaltiesOwner: (tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.sellBaseRoyalties.ownedByName)
                    ? mintTokenRef
                    : undefined, 
                // @ts-ignore
                buyTargetRoyaltiesOwner: (tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.buyTargetRoyalties.ownedByName)
                    ? mintTokenRef
                    : undefined, 
                // @ts-ignore
                sellTargetRoyaltiesOwner: (tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.sellTargetRoyalties.ownedByName)
                    ? mintTokenRef
                    : undefined, 
                // @ts-ignore
                buyBaseRoyalties: ((_l = tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.buyBaseRoyalties) === null || _l === void 0 ? void 0 : _l.address) || undefined, 
                // @ts-ignore
                sellBaseRoyalties: ((_m = tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.sellBaseRoyalties) === null || _m === void 0 ? void 0 : _m.address) || undefined, 
                // @ts-ignore
                buyTargetRoyalties: ((_o = tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.buyTargetRoyalties) === null || _o === void 0 ? void 0 : _o.address) || undefined, 
                // @ts-ignore
                sellTargetRoyalties: ((_p = tokenBondingSettings === null || tokenBondingSettings === void 0 ? void 0 : tokenBondingSettings.sellTargetRoyalties) === null || _p === void 0 ? void 0 : _p.address) || undefined }, tokenBondingParams));
            instructions2.push(...bondingInstructions);
            signers2.push(...bondingSigners);
            const initializeArgs = {
                authority: (collectiveAcct === null || collectiveAcct === void 0 ? void 0 : collectiveAcct.authority) ||
                    web3_js_1.PublicKey.default,
                collective,
                tokenMetadata: new web3_js_1.PublicKey(tokenMetadata),
                tokenBonding,
                payer,
                baseMint,
                targetMint,
                buyBaseRoyalties,
                buyTargetRoyalties,
                sellBaseRoyalties,
                sellTargetRoyalties,
                systemProgram: web3_js_1.SystemProgram.programId,
                rent: web3_js_1.SYSVAR_RENT_PUBKEY,
                clock: web3_js_1.SYSVAR_CLOCK_PUBKEY,
            };
            const args = {
                authority: authority || null,
                nameClass: nameClass || null,
                nameParent: nameParent || null,
                collectiveBumpSeed,
                ownerTokenRefBumpSeed,
                mintTokenRefBumpSeed,
            };
            console.log(args);
            const instructions3 = [];
            const signers3 = [];
            if (owner) {
                instructions3.push(yield this.instruction.initializeOwnedSocialTokenV0(args, {
                    accounts: {
                        initializeArgs,
                        owner,
                        payer,
                        ownerTokenRef,
                        mintTokenRef,
                        systemProgram: web3_js_1.SystemProgram.programId,
                        rent: web3_js_1.SYSVAR_RENT_PUBKEY,
                    },
                }));
                if (isPrimary) {
                    const { instructions: setAsPrimaryInstrs } = yield this.setAsPrimaryInstructions({
                        tokenRef: ownerTokenRef,
                        payer,
                        owner,
                    });
                    instructions3.push(...setAsPrimaryInstrs);
                }
            }
            else {
                instructions3.push(yield this.instruction.initializeUnclaimedSocialTokenV0(args, {
                    accounts: {
                        initializeArgs,
                        name: name,
                        payer,
                        ownerTokenRef,
                        mintTokenRef,
                        tokenMetadata,
                        systemProgram: web3_js_1.SystemProgram.programId,
                        rent: web3_js_1.SYSVAR_RENT_PUBKEY,
                    },
                }));
            }
            return {
                output: {
                    mint: targetMintKeypair.publicKey,
                    ownerTokenRef,
                    mintTokenRef,
                    tokenBonding,
                },
                instructions: [instructions1, instructions2, instructions3],
                signers: [signers1, signers2, signers3],
            };
        });
    }
    /**
     * Run {@link createSocialTokenInstructions}
     * @param args
     * @returns
     */
    createSocialToken(args, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            return this.executeBig(this.createSocialTokenInstructions(args), args.payer, commitment);
        });
    }
    getUserTokensWithMeta(tokenAccounts) {
        return Promise.all((tokenAccounts || []).map(({ pubkey, info }) => __awaiter(this, void 0, void 0, function* () {
            const metadataKey = yield mpl_token_metadata_1.Metadata.getPDA(info.mint);
            const [mintTokenRefKey] = yield SplTokenCollective.mintTokenRefKey(info.mint);
            const account = yield this.provider.connection.getAccountInfo(mintTokenRefKey);
            const ownerTokenRef = account && this.tokenRefDecoder(mintTokenRefKey, account);
            const tokenBondingKey = (yield spl_token_bonding_1.SplTokenBonding.tokenBondingKey(info.mint))[0];
            const tokenBondingAccount = yield this.provider.connection.getAccountInfo(tokenBondingKey);
            const tokenBonding = tokenBondingAccount &&
                this.splTokenBondingProgram.tokenBondingDecoder(tokenBondingKey, tokenBondingAccount);
            return Object.assign(Object.assign({}, (yield this.splTokenMetadata.getTokenMetadata(new web3_js_1.PublicKey(metadataKey)))), { tokenRef: ownerTokenRef || undefined, tokenBonding: tokenBonding || undefined, publicKey: pubkey, account: info });
        })));
    }
    /**
     * Claims the reserve and general authority from any bonding curve
     * that has this token ref as the authority. Useful for setting bonding curves
     * that can later be claimed by the social token holder.
     *
     * @param param0
     * @returns
     */
    claimBondingAuthorityInstructions({ tokenBonding, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenBondingAcct = (yield this.splTokenBondingProgram.getTokenBonding(tokenBonding));
            const [mintTokenRef] = yield SplTokenCollective.mintTokenRefKey(tokenBondingAcct.baseMint);
            return {
                output: null,
                signers: [],
                instructions: [
                    yield this.instruction.claimBondingAuthorityV0({
                        accounts: {
                            mintTokenRef,
                            tokenBondingUpdateAccounts: {
                                tokenBonding: tokenBonding,
                                baseMint: tokenBondingAcct.baseMint,
                                targetMint: tokenBondingAcct.targetMint,
                                buyBaseRoyalties: tokenBondingAcct.buyBaseRoyalties,
                                sellBaseRoyalties: tokenBondingAcct.sellBaseRoyalties,
                                buyTargetRoyalties: tokenBondingAcct.buyTargetRoyalties,
                                sellTargetRoyalties: tokenBondingAcct.sellTargetRoyalties,
                            },
                            tokenBondingProgram: this.splTokenBondingProgram.programId,
                        },
                    }),
                ],
            };
        });
    }
    /**
     * Runs {@link `claimBondingAuthorityInstructions`}
     *
     * @param args
     * @retruns
     */
    claimBondingAuthority(args, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute(this.claimBondingAuthorityInstructions(args), this.wallet.publicKey, commitment);
        });
    }
    /**
     * Update a bonding cruve.
     *
     * @param args
     * @returns
     */
    updateTokenBondingInstructions({ tokenRef, buyBaseRoyaltyPercentage, buyTargetRoyaltyPercentage, sellBaseRoyaltyPercentage, sellTargetRoyaltyPercentage, buyBaseRoyalties, buyTargetRoyalties, sellBaseRoyalties, sellTargetRoyalties, buyFrozen, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenRefAcct = (yield this.getTokenRef(tokenRef));
            if (!tokenRefAcct.tokenBonding) {
                throw new Error("Cannot update token bonding on a token ref that has no token bonding");
            }
            if (!tokenRefAcct.authority) {
                throw new Error("No authority on this token. Cannot update token bonding.");
            }
            const collectiveAcct = tokenRefAcct.collective &&
                (yield this.getCollective(tokenRefAcct.collective));
            const tokenBondingAcct = (yield this.splTokenBondingProgram.getTokenBonding(tokenRefAcct.tokenBonding));
            if (!tokenBondingAcct.generalAuthority) {
                throw new Error("Cannot update a token bonding account that has no authority");
            }
            const [mintTokenRef] = yield SplTokenCollective.mintTokenRefKey(tokenBondingAcct.targetMint);
            const args = {
                tokenBondingAuthority: tokenBondingAcct.generalAuthority,
                buyBaseRoyaltyPercentage: definedOr((0, spl_utils_1.percent)(buyBaseRoyaltyPercentage), tokenBondingAcct.buyBaseRoyaltyPercentage),
                buyTargetRoyaltyPercentage: definedOr((0, spl_utils_1.percent)(buyTargetRoyaltyPercentage), tokenBondingAcct.buyTargetRoyaltyPercentage),
                sellBaseRoyaltyPercentage: definedOr((0, spl_utils_1.percent)(sellBaseRoyaltyPercentage), tokenBondingAcct.sellBaseRoyaltyPercentage),
                sellTargetRoyaltyPercentage: definedOr((0, spl_utils_1.percent)(sellTargetRoyaltyPercentage), tokenBondingAcct.sellTargetRoyaltyPercentage),
                buyFrozen: typeof buyFrozen === "undefined"
                    ? tokenBondingAcct.buyFrozen
                    : buyFrozen,
            };
            console.log({
                tokenRefAuthority: tokenRefAcct.authority,
                collective: tokenRefAcct.collective || web3_js_1.PublicKey.default,
                authority: (collectiveAcct &&
                    collectiveAcct.authority) ||
                    web3_js_1.PublicKey.default,
                mintTokenRef: mintTokenRef,
                tokenBonding: tokenRefAcct.tokenBonding,
                tokenBondingProgram: this.splTokenBondingProgram.programId,
                baseMint: tokenBondingAcct.baseMint,
                targetMint: tokenBondingAcct.targetMint,
                buyBaseRoyalties: buyBaseRoyalties || tokenBondingAcct.buyBaseRoyalties,
                buyTargetRoyalties: buyTargetRoyalties || tokenBondingAcct.buyTargetRoyalties,
                sellBaseRoyalties: sellBaseRoyalties || tokenBondingAcct.sellBaseRoyalties,
                sellTargetRoyalties: sellTargetRoyalties || tokenBondingAcct.sellTargetRoyalties,
            });
            return {
                output: null,
                signers: [],
                instructions: [
                    yield this.instruction.updateTokenBondingV0(args, {
                        accounts: {
                            tokenRefAuthority: tokenRefAcct.authority,
                            collective: tokenRefAcct.collective || web3_js_1.PublicKey.default,
                            authority: (collectiveAcct &&
                                collectiveAcct.authority) ||
                                web3_js_1.PublicKey.default,
                            mintTokenRef: mintTokenRef,
                            tokenBonding: tokenRefAcct.tokenBonding,
                            tokenBondingProgram: this.splTokenBondingProgram.programId,
                            baseMint: tokenBondingAcct.baseMint,
                            targetMint: tokenBondingAcct.targetMint,
                            buyBaseRoyalties: buyBaseRoyalties || tokenBondingAcct.buyBaseRoyalties,
                            buyTargetRoyalties: buyTargetRoyalties || tokenBondingAcct.buyTargetRoyalties,
                            sellBaseRoyalties: sellBaseRoyalties || tokenBondingAcct.sellBaseRoyalties,
                            sellTargetRoyalties: sellTargetRoyalties || tokenBondingAcct.sellTargetRoyalties,
                        },
                    }),
                ],
            };
        });
    }
    /**
     * Runs {@link `updateTokenBondingInstructions`}
     *
     * @param args
     * @retruns
     */
    updateTokenBonding(args, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute(this.updateTokenBondingInstructions(args), this.wallet.publicKey, commitment);
        });
    }
    getOptionalNameRecord(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || name.equals(web3_js_1.PublicKey.default)) {
                return null;
            }
            let nameAccountRaw = yield this.provider.connection.getAccountInfo(name);
            if (nameAccountRaw) {
                return (0, borsh_1.deserializeUnchecked)(spl_name_service_1.NameRegistryState.schema, spl_name_service_1.NameRegistryState, nameAccountRaw.data);
            }
            return null;
        });
    }
    /**
     * Opt out a social token
     *
     * @param args
     * @returns
     */
    optOutInstructions({ tokenRef, handle, nameClass, nameParent, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenRefAcct = (yield this.getTokenRef(tokenRef));
            if (!tokenRefAcct.tokenBonding) {
                throw new Error("Cannot currently opt out on a token ref that has no token bonding");
            }
            const nameAcct = yield this.getOptionalNameRecord(tokenRefAcct.name);
            if (!nameClass && nameAcct) {
                nameClass = nameAcct.class;
            }
            if (!nameParent && nameAcct) {
                nameParent = nameAcct.parentName;
            }
            let nameParentAcct = yield this.getOptionalNameRecord(nameParent);
            const tokenBondingAcct = (yield this.splTokenBondingProgram.getTokenBonding(tokenRefAcct.tokenBonding));
            const [mintTokenRef] = yield SplTokenCollective.mintTokenRefKey(tokenBondingAcct.targetMint);
            const [ownerTokenRef] = yield SplTokenCollective.ownerTokenRefKey({
                name: tokenRefAcct.name,
                owner: tokenRefAcct.isClaimed
                    ? tokenRefAcct.owner
                    : undefined,
                mint: tokenBondingAcct === null || tokenBondingAcct === void 0 ? void 0 : tokenBondingAcct.baseMint,
            });
            const instructions = [];
            if (!tokenRefAcct.isClaimed && !handle) {
                throw new Error("Handle must be provided for opting out of unclaimed tokens");
            }
            const tokenBondingUpdateAccounts = {
                tokenBonding: tokenRefAcct.tokenBonding,
                baseMint: tokenBondingAcct.baseMint,
                targetMint: tokenBondingAcct.targetMint,
                buyBaseRoyalties: tokenBondingAcct.buyBaseRoyalties,
                sellBaseRoyalties: tokenBondingAcct.sellBaseRoyalties,
                buyTargetRoyalties: tokenBondingAcct.buyTargetRoyalties,
                sellTargetRoyalties: tokenBondingAcct.sellTargetRoyalties,
            };
            if (tokenRefAcct.isClaimed) {
                const [primaryTokenRef] = yield SplTokenCollective.ownerTokenRefKey({
                    owner: tokenRefAcct.owner,
                    isPrimary: true,
                });
                instructions.push(yield this.instruction.changeOptStatusClaimedV0({
                    isOptedOut: true,
                }, {
                    accounts: {
                        primaryTokenRef,
                        ownerTokenRef,
                        mintTokenRef,
                        owner: tokenRefAcct.owner,
                        tokenBondingUpdateAccounts,
                        tokenBondingProgram: this.splTokenBondingProgram.programId,
                    },
                }));
            }
            else {
                instructions.push(yield this.instruction.changeOptStatusUnclaimedV0({
                    hashedName: yield (0, spl_name_service_1.getHashedName)(handle),
                    isOptedOut: true,
                }, {
                    accounts: {
                        ownerTokenRef,
                        mintTokenRef,
                        name: tokenRefAcct.name,
                        tokenBondingUpdateAccounts,
                        tokenBondingProgram: this.splTokenBondingProgram.programId,
                    },
                    remainingAccounts: [
                        {
                            pubkey: nameClass || web3_js_1.PublicKey.default,
                            isWritable: false,
                            isSigner: !!nameClass && !nameClass.equals(web3_js_1.PublicKey.default),
                        },
                        {
                            pubkey: nameParent || web3_js_1.PublicKey.default,
                            isWritable: false,
                            isSigner: false,
                        },
                        {
                            pubkey: (nameParentAcct === null || nameParentAcct === void 0 ? void 0 : nameParentAcct.owner) || web3_js_1.PublicKey.default,
                            isWritable: false,
                            isSigner: !!nameParent && !nameParent.equals(web3_js_1.PublicKey.default),
                        },
                    ],
                }));
            }
            return {
                output: null,
                signers: [],
                instructions,
            };
        });
    }
    /**
     * Runs {@link `optOutInstructions`}
     *
     * @param args
     * @retruns
     */
    optOut(args, commitment = "confirmed") {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute(this.optOutInstructions(args), args.payer, commitment);
        });
    }
    /**
     * Update the owner wallet of a social token
     *
     * @param args
     * @returns
     */
    updateOwnerInstructions({ payer = this.wallet.publicKey, tokenRef, newOwner, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenRefAcct = (yield this.getTokenRef(tokenRef));
            if (!tokenRefAcct.tokenBonding) {
                throw new Error("Cannot update a token ref that has no token bonding");
            }
            if (!tokenRefAcct.isClaimed) {
                throw new Error("Cannot update owner on an unclaimed token ref");
            }
            const tokenBondingAcct = (yield this.splTokenBondingProgram.getTokenBonding(tokenRefAcct.tokenBonding));
            const [mintTokenRef] = yield SplTokenCollective.mintTokenRefKey(tokenBondingAcct.targetMint);
            const [oldOwnerTokenRef] = yield SplTokenCollective.ownerTokenRefKey({
                owner: tokenRefAcct.owner,
                mint: tokenBondingAcct === null || tokenBondingAcct === void 0 ? void 0 : tokenBondingAcct.baseMint,
            });
            const [newOwnerTokenRef, ownerTokenRefBumpSeed] = yield SplTokenCollective.ownerTokenRefKey({
                owner: newOwner,
                mint: tokenBondingAcct === null || tokenBondingAcct === void 0 ? void 0 : tokenBondingAcct.baseMint,
            });
            const [oldPrimaryTokenRef] = yield SplTokenCollective.ownerTokenRefKey({
                owner: tokenRefAcct.owner,
                isPrimary: true,
            });
            const [newPrimaryTokenRef, primaryTokenRefBumpSeed] = yield SplTokenCollective.ownerTokenRefKey({
                owner: newOwner,
                isPrimary: true,
            });
            return {
                output: {
                    ownerTokenRef: newOwnerTokenRef,
                },
                signers: [],
                instructions: [
                    yield this.instruction.updateOwnerV0({
                        ownerTokenRefBumpSeed,
                        primaryTokenRefBumpSeed,
                    }, {
                        accounts: {
                            newOwner,
                            payer,
                            baseMint: tokenBondingAcct.baseMint,
                            oldOwnerTokenRef,
                            oldPrimaryTokenRef,
                            newPrimaryTokenRef,
                            newOwnerTokenRef,
                            mintTokenRef,
                            owner: tokenRefAcct.owner,
                            systemProgram: web3_js_1.SystemProgram.programId,
                            rent: web3_js_1.SYSVAR_RENT_PUBKEY,
                        },
                    }),
                ],
            };
        });
    }
    /**
     * Runs {@link `updateOwnerInstructions`}
     *
     * @param args
     * @retruns
     */
    updateOwner(args, commitment = "confirmed") {
        return this.execute(this.updateOwnerInstructions(args), args.payer, commitment);
    }
    /**
     * Update the authority of a social token
     *
     * @param args
     * @returns
     */
    updateAuthorityInstructions({ payer = this.wallet.publicKey, tokenRef, newAuthority, owner, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenRefAcct = (yield this.getTokenRef(tokenRef));
            if (!tokenRefAcct.tokenBonding) {
                throw new Error("Cannot update a token ref that has no token bonding");
            }
            if (!tokenRefAcct.isClaimed) {
                throw new Error("Cannot update authority on an unclaimed token ref");
            }
            owner = owner || tokenRefAcct.owner;
            const tokenBondingAcct = (yield this.splTokenBondingProgram.getTokenBonding(tokenRefAcct.tokenBonding));
            const [mintTokenRef] = yield SplTokenCollective.mintTokenRefKey(tokenBondingAcct.targetMint);
            const [ownerTokenRef] = yield SplTokenCollective.ownerTokenRefKey({
                owner,
                mint: tokenBondingAcct === null || tokenBondingAcct === void 0 ? void 0 : tokenBondingAcct.baseMint,
            });
            const [primaryTokenRef] = yield SplTokenCollective.ownerTokenRefKey({
                owner,
                isPrimary: true,
            });
            return {
                output: null,
                signers: [],
                instructions: [
                    yield this.instruction.updateAuthorityV0({
                        newAuthority,
                    }, {
                        accounts: {
                            payer,
                            primaryTokenRef,
                            baseMint: tokenBondingAcct.baseMint,
                            ownerTokenRef,
                            mintTokenRef,
                            authority: tokenRefAcct.authority,
                        },
                    }),
                ],
            };
        });
    }
    /**
     * Runs {@link `updateAuthorityInstructions`}
     *
     * @param args
     * @retruns
     */
    updateAuthority(args) {
        return this.execute(this.updateAuthorityInstructions(args), args.payer);
    }
}
exports.SplTokenCollective = SplTokenCollective;
SplTokenCollective.ID = new web3_js_1.PublicKey("TCo1sfSr2nCudbeJPykbif64rG9K1JNMGzrtzvPmp3y");
SplTokenCollective.OPEN_COLLECTIVE_ID = new web3_js_1.PublicKey("3cYa5WvT2bgXSLxxu9XDJSHV3x5JZGM91Nc3B7jYhBL7");
SplTokenCollective.OPEN_COLLECTIVE_BONDING_ID = new web3_js_1.PublicKey("9Zse7YX2mPQFoyMuz2Gk2K8WcH83FY1BLfu34vN4sdHi");
SplTokenCollective.OPEN_COLLECTIVE_MINT_ID = new web3_js_1.PublicKey("openDKyuDPS6Ak1BuD3JtvkQGV3tzCxjpHUfe1mdC79");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2072:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountFetchCache = exports.DEFAULT_DELAY = exports.DEFAULT_CHUNK_SIZE = void 0;
const web3_js_1 = __webpack_require__(7831);
const eventEmitter_1 = __webpack_require__(3313);
const getMultipleAccounts_1 = __webpack_require__(3546);
exports.DEFAULT_CHUNK_SIZE = 99;
exports.DEFAULT_DELAY = 50;
function getWriteableAccounts(instructions) {
    return instructions
        .flatMap((i) => i.keys)
        .filter((k) => k.isWritable)
        .map((a) => a.pubkey);
}
class AccountFetchCache {
    constructor({ connection, chunkSize = exports.DEFAULT_CHUNK_SIZE, delay = exports.DEFAULT_DELAY, commitment, missingRefetchDelay = 10000, extendConnection = false, }) {
        this.accountWatchersCount = new Map();
        this.accountChangeListeners = new Map();
        this.statics = new Set();
        this.missingAccounts = new Map();
        this.genericCache = new Map();
        this.keyToAccountParser = new Map();
        this.timeout = null;
        this.currentBatch = new Set();
        this.pendingCallbacks = new Map();
        this.pendingCalls = new Map();
        this.emitter = new eventEmitter_1.EventEmitter();
        this.connection = connection;
        this.chunkSize = chunkSize;
        this.delay = delay;
        this.commitment = commitment;
        this.missingInterval = setInterval(this.fetchMissing.bind(this), missingRefetchDelay);
        const oldSendTransaction = connection.sendTransaction.bind(connection);
        const oldSendRawTransaction = connection.sendRawTransaction.bind(connection);
        const self = this;
        if (extendConnection) {
            const oldGetAccountinfo = connection.getAccountInfo.bind(connection);
            connection.getAccountInfo = (publicKey, com) => __awaiter(this, void 0, void 0, function* () {
                if ((com || connection.commitment) == commitment) {
                    const [result, dispose] = yield this.searchAndWatch(publicKey);
                    setTimeout(dispose, 30 * 1000); // cache for 30s
                    return (result === null || result === void 0 ? void 0 : result.account) || null;
                }
                return oldGetAccountinfo(publicKey, com);
            });
        }
        connection.sendTransaction = function overloadedSendTransaction(transaction, signers, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield oldSendTransaction(transaction, signers, options);
                this.confirmTransaction(result, "finalized")
                    .then(() => {
                    return self.requeryMissing(transaction.instructions);
                })
                    .catch(console.error);
                return result;
            });
        };
        connection.sendRawTransaction = function overloadedSendRawTransaction(rawTransaction, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield oldSendRawTransaction(rawTransaction, options);
                const instructions = web3_js_1.Transaction.from(rawTransaction).instructions;
                this.confirmTransaction(result, "finalized")
                    .then(() => {
                    return self.requeryMissing(instructions);
                })
                    .catch(console.error);
                return result;
            });
        };
    }
    requeryMissing(instructions) {
        return __awaiter(this, void 0, void 0, function* () {
            const writeableAccounts = getWriteableAccounts(instructions).map((a) => a.toBase58());
            yield Promise.all(writeableAccounts.map((account) => __awaiter(this, void 0, void 0, function* () {
                const parser = this.missingAccounts.get(account);
                const [found, dispose] = yield this.searchAndWatch(new web3_js_1.PublicKey(account), parser, this.statics.has(account), true);
                dispose();
                if (found) {
                    this.missingAccounts.delete(account);
                }
            })));
        });
    }
    fetchMissing() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Promise.all([...this.missingAccounts].map(([account, _]) => this.searchAndWatch(new web3_js_1.PublicKey(account), this.missingAccounts.get(account), this.statics.has(account), true).then(([_, dispose]) => dispose()) // Dispose immediately, this isn't watching.
                ));
            }
            catch (e) {
                // This happens in an interval, so just log errors
                console.error(e);
            }
        });
    }
    close() {
        clearInterval(this.missingInterval);
    }
    fetchBatch() {
        return __awaiter(this, void 0, void 0, function* () {
            const currentBatch = this.currentBatch;
            this.currentBatch = new Set(); // Erase current batch from state, so we can fetch multiple at a time
            try {
                console.log(`Batching account fetch of ${currentBatch.size}`);
                const { keys, array } = yield (0, getMultipleAccounts_1.getMultipleAccounts)(this.connection, [...currentBatch], this.commitment);
                keys.forEach((key, index) => {
                    const callback = this.pendingCallbacks.get(key);
                    callback && callback(array[index], null);
                });
                return { keys, array };
            }
            catch (e) {
                currentBatch.forEach((key) => {
                    const callback = this.pendingCallbacks.get(key);
                    callback && callback(null, e);
                });
                throw e;
            }
        });
    }
    addToBatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const idStr = id.toBase58();
            this.currentBatch.add(idStr);
            this.timeout != null && clearTimeout(this.timeout);
            if (this.currentBatch.size > exports.DEFAULT_CHUNK_SIZE) {
                this.fetchBatch();
            }
            else {
                this.timeout = setTimeout(() => this.fetchBatch(), this.delay);
            }
            const promise = new Promise((resolve, reject) => {
                this.pendingCallbacks.set(idStr, (info, err) => {
                    this.pendingCallbacks.delete(idStr);
                    if (err) {
                        return reject(err);
                    }
                    resolve(info);
                });
            });
            return promise;
        });
    }
    flush() {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout && clearTimeout(this.timeout);
            yield this.fetchBatch();
        });
    }
    searchAndWatch(pubKey, parser, isStatic = false, // optimization, set if the data will never change
    forceRequery = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let id;
            if (typeof pubKey === "string") {
                id = new web3_js_1.PublicKey(pubKey);
            }
            else {
                id = pubKey;
            }
            const address = id.toBase58();
            const data = yield this.search(pubKey, parser, isStatic, forceRequery);
            const dispose = this.watch(id, parser, !!data);
            const cacheEntry = this.genericCache.get(address);
            if (!this.genericCache.has(address) || cacheEntry != data) {
                this.updateCache(address, data || null);
            }
            return [data, dispose];
        });
    }
    updateCache(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const isNew = !this.genericCache.has(id);
            this.genericCache.set(id, data || null);
            this.emitter.raiseCacheUpdated(id, isNew, this.keyToAccountParser.get(id));
        });
    }
    // The same as query, except swallows errors and returns undefined.
    search(pubKey, parser, isStatic = false, // optimization, set if the data will never change
    forceRequery = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let id;
            if (typeof pubKey === "string") {
                id = new web3_js_1.PublicKey(pubKey);
            }
            else {
                id = pubKey;
            }
            this.registerParser(id, parser);
            const address = id.toBase58();
            if (isStatic) {
                this.statics.add(address);
            }
            else if (this.statics.has(address)) {
                this.statics.delete(address); // If trying to use this as not static, need to rm it from the statics list.
            }
            if (!forceRequery && this.genericCache.has(address)) {
                const result = this.genericCache.get(address);
                return result == null
                    ? undefined
                    : result;
            }
            const existingQuery = this.pendingCalls.get(address);
            if (!forceRequery && existingQuery) {
                return existingQuery;
            }
            const query = this.addToBatch(id).then((data) => {
                this.pendingCalls.delete(address);
                if (!data) {
                    return undefined;
                }
                const result = this.getParsed(id, data, parser) || {
                    pubkey: id,
                    account: data,
                    info: undefined,
                };
                // Only set the cache for defined static accounts. Static accounts can change if they go from nonexistant to existant.
                // Rely on searchAndWatch to set the generic cache for everything else.
                if (isStatic && result && result.info) {
                    this.updateCache(address, result);
                }
                return result;
            });
            this.pendingCalls.set(address, query);
            return query;
        });
    }
    onAccountChange(key, parser, account) {
        const parsed = this.getParsed(key, account, parser);
        const address = key.toBase58();
        this.updateCache(address, parsed || null);
    }
    watch(id, parser, exists = true) {
        const address = id.toBase58();
        const isStatic = this.statics.has(address);
        let oldCount = (this.accountWatchersCount.get(address) || 0) + 1;
        this.accountWatchersCount.set(address, oldCount);
        if (exists && !isStatic) {
            // Only websocket watch accounts that exist
            // Don't recreate listeners
            if (!this.accountChangeListeners.has(address)) {
                this.accountChangeListeners.set(address, this.connection.onAccountChange(id, (account) => this.onAccountChange(id, undefined, account), this.commitment));
            }
        }
        else if (!exists) {
            // Poll accounts that don't exist
            this.missingAccounts.set(address, parser || this.missingAccounts.get(address));
        }
        return () => {
            const newCount = this.accountWatchersCount.get(address) - 1;
            this.accountWatchersCount.set(address, newCount);
            if (newCount <= 0) {
                const subscriptionId = this.accountChangeListeners.get(address);
                if (subscriptionId) {
                    this.accountChangeListeners.delete(address);
                    this.connection.removeAccountChangeListener(subscriptionId);
                }
                this.missingAccounts.delete(address);
            }
        };
    }
    query(pubKey, parser) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = yield this.search(pubKey, parser);
            if (!ret) {
                throw new Error("Account not found");
            }
            return ret;
        });
    }
    getParsed(id, obj, parser) {
        const address = typeof id === "string" ? id : id === null || id === void 0 ? void 0 : id.toBase58();
        this.registerParser(id, parser);
        const deserialize = (this.keyToAccountParser.get(address) ||
            AccountFetchCache.defaultParser);
        const account = deserialize(new web3_js_1.PublicKey(address), obj);
        if (!account) {
            return {
                pubkey: new web3_js_1.PublicKey(id),
                account: obj,
            };
        }
        return account;
    }
    get(pubKey) {
        let key;
        if (typeof pubKey !== "string") {
            key = pubKey.toBase58();
        }
        else {
            key = pubKey;
        }
        return this.genericCache.get(key);
    }
    delete(pubKey) {
        let key;
        if (typeof pubKey !== "string") {
            key = pubKey.toBase58();
        }
        else {
            key = pubKey;
        }
        const subId = this.accountChangeListeners.get(key);
        if (subId) {
            this.connection.removeAccountChangeListener(subId);
            this.accountChangeListeners.delete(key);
        }
        if (this.genericCache.has(key)) {
            this.genericCache.delete(key);
            this.emitter.raiseCacheDeleted(key);
            return true;
        }
        return false;
    }
    byParser(parser) {
        const result = [];
        for (const id of this.keyToAccountParser.keys()) {
            if (this.keyToAccountParser.get(id) === parser) {
                result.push(id);
            }
        }
        return result;
    }
    registerParser(pubkey, parser) {
        if (pubkey) {
            const address = typeof pubkey === "string" ? pubkey : pubkey === null || pubkey === void 0 ? void 0 : pubkey.toBase58();
            if (parser && !this.keyToAccountParser.get(address)) {
                this.keyToAccountParser.set(address, parser);
                const cached = this.genericCache.get(address);
                if (cached) {
                    const parsed = parser(cached.pubkey, cached.account);
                    if (parsed) {
                        this.genericCache.set(address, parsed);
                    }
                }
            }
        }
        return pubkey;
    }
}
exports.AccountFetchCache = AccountFetchCache;
AccountFetchCache.defaultParser = (pubkey, account) => ({
    pubkey,
    account,
});
//# sourceMappingURL=accountFetchCache.js.map

/***/ }),

/***/ 3313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventEmitter = exports.CacheDeleteEvent = exports.CacheUpdateEvent = void 0;
const eventemitter3_1 = __webpack_require__(5502);
class CacheUpdateEvent {
    constructor(id, isNew, parser) {
        this.id = id;
        this.parser = parser;
        this.isNew = isNew;
    }
}
exports.CacheUpdateEvent = CacheUpdateEvent;
CacheUpdateEvent.type = "CacheUpdate";
class CacheDeleteEvent {
    constructor(id) {
        this.id = id;
    }
}
exports.CacheDeleteEvent = CacheDeleteEvent;
CacheDeleteEvent.type = "CacheDelete";
class EventEmitter {
    constructor() {
        this.emitter = new eventemitter3_1.EventEmitter();
    }
    onCache(callback) {
        this.emitter.on(CacheUpdateEvent.type, callback);
        return () => this.emitter.removeListener(CacheUpdateEvent.type, callback);
    }
    raiseCacheUpdated(id, isNew, parser) {
        this.emitter.emit(CacheUpdateEvent.type, new CacheUpdateEvent(id, isNew, parser));
    }
    raiseCacheDeleted(id) {
        this.emitter.emit(CacheDeleteEvent.type, new CacheDeleteEvent(id));
    }
}
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=eventEmitter.js.map

/***/ }),

/***/ 3546:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMultipleAccounts = exports.chunks = void 0;
const web3_js_1 = __webpack_require__(7831);
const chunks = (array, size) => Array.apply(0, new Array(Math.ceil(array.length / size))).map((_, index) => array.slice(index * size, (index + 1) * size));
exports.chunks = chunks;
const getMultipleAccountsCore = (connection, keys, commitment) => __awaiter(void 0, void 0, void 0, function* () {
    const args = connection._buildArgs([keys], commitment, "base64");
    const unsafeRes = yield connection._rpcRequest("getMultipleAccounts", args);
    if (unsafeRes.error) {
        throw new Error("failed to get info about account " + unsafeRes.error.message);
    }
    if (unsafeRes.result.value) {
        const array = unsafeRes.result.value;
        return { keys, array };
    }
    // TODO: fix
    throw new Error();
});
const getMultipleAccounts = (connection, keys, commitment) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getMultipleAccountsCore(connection, keys, commitment);
    const array = result.array.map((acc) => {
        if (!acc) {
            return undefined;
        }
        const { data } = acc, rest = __rest(acc, ["data"]);
        const obj = Object.assign(Object.assign({}, rest), { owner: rest.owner && new web3_js_1.PublicKey(rest.owner), data: Buffer.from(data[0], "base64") });
        return obj;
    });
    return { keys, array };
});
exports.getMultipleAccounts = getMultipleAccounts;
//# sourceMappingURL=getMultipleAccounts.js.map

/***/ }),

/***/ 8706:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2072), exports);
__exportStar(__webpack_require__(3313), exports);
__exportStar(__webpack_require__(3546), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4562:
/***/ ((__unused_webpack_module, exports) => {


// TODO: Go back to anchor once they handle:
// Error: Raw transaction 4nZwiENzNwKLfCBtDirAr5xE71GUqsNKsUNafSUHiEUkWhqbVgEmximswnDFp4ZFFy5C4NXJ75qCKP6nnWBSmFey failed ({"err":{"InstructionError":[4,{"Custom":1}]}})
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgramError = exports.SystemErrorMessage = void 0;
const LangErrorCode = {
    // Instructions.
    InstructionMissing: 100,
    InstructionFallbackNotFound: 101,
    InstructionDidNotDeserialize: 102,
    InstructionDidNotSerialize: 103,
    // IDL instructions.
    IdlInstructionStub: 1000,
    IdlInstructionInvalidProgram: 1001,
    // Constraints.
    ConstraintMut: 2000,
    ConstraintHasOne: 2001,
    ConstraintSigner: 2002,
    ConstraintRaw: 2003,
    ConstraintOwner: 2004,
    ConstraintRentExempt: 2005,
    ConstraintSeeds: 2006,
    ConstraintExecutable: 2007,
    ConstraintState: 2008,
    ConstraintAssociated: 2009,
    ConstraintAssociatedInit: 2010,
    ConstraintClose: 2011,
    ConstraintAddress: 2012,
    ConstraintZero: 2013,
    ConstraintTokenMint: 2014,
    ConstraintTokenOwner: 2015,
    ConstraintMintMintAuthority: 2016,
    ConstraintMintFreezeAuthority: 2017,
    ConstraintMintDecimals: 2018,
    ConstraintSpace: 2019,
    // Accounts.
    AccountDiscriminatorAlreadySet: 3000,
    AccountDiscriminatorNotFound: 3001,
    AccountDiscriminatorMismatch: 3002,
    AccountDidNotDeserialize: 3003,
    AccountDidNotSerialize: 3004,
    AccountNotEnoughKeys: 3005,
    AccountNotMutable: 3006,
    AccountOwnedByWrongProgram: 3007,
    InvalidProgramId: 3008,
    InvalidProgramExecutable: 3009,
    AccountNotSigner: 3010,
    AccountNotSystemOwned: 3011,
    AccountNotInitialized: 3012,
    AccountNotProgramData: 3013,
    AccountNotAssociatedTokenAccount: 3014,
    // State.
    StateInvalidAddress: 4000,
    // Used for APIs that shouldn't be used anymore.
    Deprecated: 5000,
};
exports.SystemErrorMessage = new Map([
    [
        1,
        "Insufficient balance."
    ], [
        2,
        "Invalid instruction data."
    ], [
        3,
        "Invalid account data"
    ], [
        4,
        "Account data too small"
    ], [
        5,
        "Insufficient funds"
    ], [
        6,
        "Incorrect prgoram id"
    ], [
        7,
        "Missing required signature"
    ], [
        8,
        "Account already initialized"
    ], [
        9,
        "Attempt to operate on an account that was not yet initialized"
    ], [
        10,
        "Not enough account keys provided"
    ], [
        11,
        "Account borrow failed, already borrowed"
    ], [
        12,
        "Max seed length exceeded"
    ], [
        13,
        "Invalid seeds"
    ], [
        14,
        "Borsh IO Error"
    ], [
        15,
        "Account not rent exempt"
    ]
]);
const LangErrorMessage = new Map([
    // Instructions.
    [
        LangErrorCode.InstructionMissing,
        "8 byte instruction identifier not provided",
    ],
    [
        LangErrorCode.InstructionFallbackNotFound,
        "Fallback functions are not supported",
    ],
    [
        LangErrorCode.InstructionDidNotDeserialize,
        "The program could not deserialize the given instruction",
    ],
    [
        LangErrorCode.InstructionDidNotSerialize,
        "The program could not serialize the given instruction",
    ],
    // Idl instructions.
    [
        LangErrorCode.IdlInstructionStub,
        "The program was compiled without idl instructions",
    ],
    [
        LangErrorCode.IdlInstructionInvalidProgram,
        "The transaction was given an invalid program for the IDL instruction",
    ],
    // Constraints.
    [LangErrorCode.ConstraintMut, "A mut constraint was violated"],
    [LangErrorCode.ConstraintHasOne, "A has_one constraint was violated"],
    [LangErrorCode.ConstraintSigner, "A signer constraint was violated"],
    [LangErrorCode.ConstraintRaw, "A raw constraint was violated"],
    [LangErrorCode.ConstraintOwner, "An owner constraint was violated"],
    [LangErrorCode.ConstraintRentExempt, "A rent exempt constraint was violated"],
    [LangErrorCode.ConstraintSeeds, "A seeds constraint was violated"],
    [LangErrorCode.ConstraintExecutable, "An executable constraint was violated"],
    [LangErrorCode.ConstraintState, "A state constraint was violated"],
    [LangErrorCode.ConstraintAssociated, "An associated constraint was violated"],
    [
        LangErrorCode.ConstraintAssociatedInit,
        "An associated init constraint was violated",
    ],
    [LangErrorCode.ConstraintClose, "A close constraint was violated"],
    [LangErrorCode.ConstraintAddress, "An address constraint was violated"],
    [LangErrorCode.ConstraintZero, "Expected zero account discriminant"],
    [LangErrorCode.ConstraintTokenMint, "A token mint constraint was violated"],
    [LangErrorCode.ConstraintTokenOwner, "A token owner constraint was violated"],
    [
        LangErrorCode.ConstraintMintMintAuthority,
        "A mint mint authority constraint was violated",
    ],
    [
        LangErrorCode.ConstraintMintFreezeAuthority,
        "A mint freeze authority constraint was violated",
    ],
    [
        LangErrorCode.ConstraintMintDecimals,
        "A mint decimals constraint was violated",
    ],
    [LangErrorCode.ConstraintSpace, "A space constraint was violated"],
    // Accounts.
    [
        LangErrorCode.AccountDiscriminatorAlreadySet,
        "The account discriminator was already set on this account",
    ],
    [
        LangErrorCode.AccountDiscriminatorNotFound,
        "No 8 byte discriminator was found on the account",
    ],
    [
        LangErrorCode.AccountDiscriminatorMismatch,
        "8 byte discriminator did not match what was expected",
    ],
    [LangErrorCode.AccountDidNotDeserialize, "Failed to deserialize the account"],
    [LangErrorCode.AccountDidNotSerialize, "Failed to serialize the account"],
    [
        LangErrorCode.AccountNotEnoughKeys,
        "Not enough account keys given to the instruction",
    ],
    [LangErrorCode.AccountNotMutable, "The given account is not mutable"],
    [
        LangErrorCode.AccountOwnedByWrongProgram,
        "The given account is owned by a different program than expected",
    ],
    [LangErrorCode.InvalidProgramId, "Program ID was not as expected"],
    [LangErrorCode.InvalidProgramExecutable, "Program account is not executable"],
    [LangErrorCode.AccountNotSigner, "The given account did not sign"],
    [
        LangErrorCode.AccountNotSystemOwned,
        "The given account is not owned by the system program",
    ],
    [
        LangErrorCode.AccountNotInitialized,
        "The program expected this account to be already initialized",
    ],
    [
        LangErrorCode.AccountNotProgramData,
        "The given account is not a program data account",
    ],
    [
        LangErrorCode.AccountNotAssociatedTokenAccount,
        "The given account is not the associated token account",
    ],
    // State.
    [
        LangErrorCode.StateInvalidAddress,
        "The given state account does not have the correct address",
    ],
    // Misc.
    [
        LangErrorCode.Deprecated,
        "The API being used is deprecated and should no longer be used",
    ],
]);
// An error from a user defined program.
class ProgramError {
    constructor(code, msg, ...params) {
        this.code = code;
        this.msg = msg;
    }
    static parse(err, idlErrors) {
        var _a;
        let errorCode = null;
        if (err.InstructionError) {
            if (typeof err.InstructionError[0] == "number") {
                errorCode = err.InstructionError[0];
            }
            if ((_a = err.InstructionError[1]) === null || _a === void 0 ? void 0 : _a.Custom) {
                errorCode = err.InstructionError[1].Custom;
            }
        }
        if (errorCode == null) {
            // TODO: don't rely on the error string. web3.js should preserve the error
            //       code information instead of giving us an untyped string.
            let components = err.toString().split("custom program error: ");
            if (errorCode == null && components.length !== 2) {
                return null;
            }
            try {
                errorCode = parseInt(components[1]);
            }
            catch (parseErr) {
                return null;
            }
        }
        let errorMsg = (err.InstructionErr && err.InstructionErr[1]) ||
            idlErrors.get(errorCode) ||
            LangErrorMessage.get(errorCode) ||
            exports.SystemErrorMessage.get(errorCode);
        if (errorMsg !== undefined) {
            return new ProgramError(errorCode, errorMsg, errorCode + ": " + errorMsg);
        }
        // Unable to parse the error. Just return the untranslated error.
        return null;
    }
    toString() {
        return this.msg;
    }
}
exports.ProgramError = ProgramError;
//# sourceMappingURL=anchorError.js.map

/***/ }),

/***/ 9768:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnchorSdk = void 0;
const transaction_1 = __webpack_require__(6294);
class AnchorSdk {
    constructor(args) {
        var _a;
        this.program = args.program;
        this.provider = args.provider;
        this.programId = args.program.programId;
        this.rpc = args.program.rpc;
        this.instruction = args.program.instruction;
        this.wallet = args.provider.wallet;
        this.account = args.program.account;
        this.errors = (_a = args.program.idl.errors) === null || _a === void 0 ? void 0 : _a.reduce((acc, err) => {
            acc.set(err.code, `${err.name}: ${err.msg}`);
            return acc;
        }, new Map());
    }
    getAccount(key, decoder) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield this.provider.connection.getAccountInfo(key);
            if (account) {
                return decoder(key, account);
            }
            return null;
        });
    }
    sendInstructions(instructions, signers, payer, commitment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, transaction_1.sendInstructions)(this.errors || new Map(), this.provider, instructions, signers, payer, commitment);
            }
            catch (e) {
                // If all compute was consumed, this can often mean that the bonding price moved too much, causing
                // our root estimates to be off.
                if (e.logs && e.logs.some((l) => l.endsWith("consumed 200000 of 200000 compute units"))) {
                    throw new Error("Consumed all of the compute units. It's possible the price has moved too much, please try again.");
                }
                throw e;
            }
        });
    }
    execute(command, payer = this.wallet.publicKey, commitment) {
        return __awaiter(this, void 0, void 0, function* () {
            const { instructions, signers, output } = yield command;
            if (instructions.length > 0) {
                yield this.sendInstructions(instructions, signers, payer, commitment);
            }
            return output;
        });
    }
    executeBig(command, payer = this.wallet.publicKey, finality) {
        return __awaiter(this, void 0, void 0, function* () {
            const { instructions, signers, output } = yield command;
            if (instructions.length > 0) {
                yield (0, transaction_1.sendMultipleInstructions)(this.errors || new Map(), this.provider, instructions, signers, payer || this.wallet.publicKey, finality);
            }
            return output;
        });
    }
}
exports.AnchorSdk = AnchorSdk;
//# sourceMappingURL=anchorSdk.js.map

/***/ }),

/***/ 4867:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFilesWithMetadata = exports.prePayForFilesInstructions = exports.uploadToArweave = exports.ARWEAVE_UPLOAD_URL = exports.AR_SOL_HOLDER_ID = void 0;
const arweave_cost_1 = __webpack_require__(537);
const web3_js_1 = __webpack_require__(7831);
const crypto_1 = __importDefault(__webpack_require__(6113));
exports.AR_SOL_HOLDER_ID = new web3_js_1.PublicKey("6FKvsq4ydWFci6nGq9ckbjYMtnmaqAoatz5c9XWjiDuS");
exports.ARWEAVE_UPLOAD_URL = process.env.REACT_APP_ARWEAVE_UPLOAD_URL ||
    "https://us-central1-metaplex-studios.cloudfunctions.net/uploadFile";
// export const ARWEAVE_UPLOAD_URL = process.env.REACT_APP_ARWEAVE_UPLOAD_URL || "https://us-central1-principal-lane-200702.cloudfunctions.net/uploadFile4";
const MEMO_ID = new web3_js_1.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
function uploadToArweave(txid, mintKey, files, uploadUrl = exports.ARWEAVE_UPLOAD_URL, env = "mainnet-beta") {
    return __awaiter(this, void 0, void 0, function* () {
        // this means we're done getting AR txn setup. Ship it off to ARWeave!
        const data = new FormData();
        data.append("transaction", txid);
        data.append("env", env);
        const tags = files.reduce((acc, f) => {
            acc[f.name] = [{ name: "mint", value: mintKey.toBase58() }];
            return acc;
        }, {});
        data.append("tags", JSON.stringify(tags));
        files.map((f) => data.append("file[]", f));
        // TODO: convert to absolute file name for image
        const resp = yield fetch(uploadUrl, {
            method: "POST",
            // @ts-ignore
            body: data,
        });
        if (!resp.ok) {
            return Promise.reject(new Error("Unable to upload the artwork to Arweave. Please wait and then try again."));
        }
        const result = yield resp.json();
        if (result.error) {
            return Promise.reject(new Error(result.error));
        }
        return result;
    });
}
exports.uploadToArweave = uploadToArweave;
const prePayForFilesInstructions = (payer, files) => __awaiter(void 0, void 0, void 0, function* () {
    const instructions = [];
    const sizes = files.map((f) => f.size);
    const result = yield (0, arweave_cost_1.calculate)(sizes);
    instructions.push(web3_js_1.SystemProgram.transfer({
        fromPubkey: payer,
        toPubkey: exports.AR_SOL_HOLDER_ID,
        lamports: web3_js_1.LAMPORTS_PER_SOL * result.solana,
    }));
    for (let i = 0; i < files.length; i++) {
        const hashSum = crypto_1.default.createHash("sha256");
        hashSum.update(yield files[i].text());
        const hex = hashSum.digest("hex");
        instructions.push(new web3_js_1.TransactionInstruction({
            keys: [],
            programId: MEMO_ID,
            data: Buffer.from(hex),
        }));
    }
    return instructions;
});
exports.prePayForFilesInstructions = prePayForFilesInstructions;
function getFilesWithMetadata(files, metadata) {
    var _a;
    const metadataContent = {
        name: metadata.name,
        symbol: metadata.symbol,
        description: metadata.description,
        seller_fee_basis_points: metadata.sellerFeeBasisPoints,
        image: metadata.image,
        animation_url: metadata.animationUrl,
        external_url: metadata.externalUrl,
        attributes: metadata.attributes,
        properties: Object.assign(Object.assign({}, metadata.properties), { creators: (_a = metadata.creators) === null || _a === void 0 ? void 0 : _a.map((creator) => {
                return {
                    address: creator.address,
                    share: creator.share,
                };
            }) }),
    };
    const realFiles = [
        ...files,
        new File([JSON.stringify(metadataContent)], "metadata.json"),
    ];
    return realFiles;
}
exports.getFilesWithMetadata = getFilesWithMetadata;
//# sourceMappingURL=arweave.js.map

/***/ }),

/***/ 1019:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAndSignRemoteTxns = exports.executeTxnsInOrder = exports.signOnlyNeeded = exports.executeRemoteTxn = void 0;
const web3_js_1 = __webpack_require__(7831);
const anchorError_1 = __webpack_require__(4562);
const axios_1 = __importDefault(__webpack_require__(9644));
const transaction_1 = __webpack_require__(6294);
function promiseAllInOrder(it) {
    return __awaiter(this, void 0, void 0, function* () {
        let ret = [];
        for (const i of it) {
            ret.push(yield i());
        }
        return ret;
    });
}
/**
 * Execute transactions from a remote server (either single or multiple transactions)
 * @param provider
 * @param url
 * @param body
 * @param errors
 * @returns
 */
function executeRemoteTxn(provider, url, body, errors = new Map()) {
    return __awaiter(this, void 0, void 0, function* () {
        const txnsToExec = yield getAndSignRemoteTxns(provider, url, body);
        return executeTxnsInOrder(provider, txnsToExec, errors);
    });
}
exports.executeRemoteTxn = executeRemoteTxn;
function signOnlyNeeded(provider, rawTxns) {
    return __awaiter(this, void 0, void 0, function* () {
        const txns = rawTxns.map((t) => web3_js_1.Transaction.from(t));
        const needToSign = txns.filter((tx) => tx.signatures.some((sig) => sig.publicKey.equals(provider.wallet.publicKey)));
        const signedTxns = yield provider.wallet.signAllTransactions(needToSign);
        const txnsToExec = txns.map((txn, idx) => {
            const index = needToSign.indexOf(txn);
            if (index >= 0) {
                return signedTxns[index].serialize({
                    requireAllSignatures: false,
                    verifySignatures: false,
                });
            }
            return Buffer.from(rawTxns[idx]);
        });
        return txnsToExec;
    });
}
exports.signOnlyNeeded = signOnlyNeeded;
function executeTxnsInOrder(provider, txns, errors = new Map()) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return [
                ...(yield promiseAllInOrder(txns.map((txn) => () => __awaiter(this, void 0, void 0, function* () {
                    const { txid } = yield (0, transaction_1.sendAndConfirmWithRetry)(provider.connection, txn, {
                        skipPreflight: true,
                    }, "confirmed");
                    return txid;
                })))),
            ];
        }
        catch (e) {
            const wrappedE = anchorError_1.ProgramError.parse(e, errors);
            throw wrappedE == null ? e : wrappedE;
        }
    });
}
exports.executeTxnsInOrder = executeTxnsInOrder;
/**
 * Get and sign transactions from a remote server (either single or multiple transactions)
 * @param provider
 * @param url
 * @param body
 * @param errors
 * @returns
 */
function getAndSignRemoteTxns(provider, url, body) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resp = yield axios_1.default.post(url, body, {
                responseType: "json",
            });
            const rawTxns = Array.isArray(resp.data) ? resp.data : [resp.data];
            return yield signOnlyNeeded(provider, rawTxns.map((t) => t.data));
        }
        catch (e) {
            if ((_b = (_a = e.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) {
                throw new Error(e.response.data.message);
            }
            throw e;
        }
    });
}
exports.getAndSignRemoteTxns = getAndSignRemoteTxns;
//# sourceMappingURL=executeRemoteTxn.js.map

/***/ }),

/***/ 5448:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extendBorsh = void 0;
const web3_js_1 = __webpack_require__(7831);
const borsh_1 = __webpack_require__(3871);
const bs58_1 = __importDefault(__webpack_require__(390));
const extendBorsh = () => {
    borsh_1.BinaryReader.prototype.readPubkey = function () {
        const reader = this;
        const array = reader.readFixedArray(32);
        return new web3_js_1.PublicKey(array);
    };
    borsh_1.BinaryWriter.prototype.writePubkey = function (value) {
        const writer = this;
        writer.writeFixedArray(value.toBuffer());
    };
    borsh_1.BinaryReader.prototype.readPubkeyAsString = function () {
        const reader = this;
        const array = reader.readFixedArray(32);
        return bs58_1.default.encode(array);
    };
    borsh_1.BinaryWriter.prototype.writePubkeyAsString = function (value) {
        const writer = this;
        writer.writeFixedArray(bs58_1.default.decode(value));
    };
};
exports.extendBorsh = extendBorsh;
(0, exports.extendBorsh)();
//# sourceMappingURL=extendBorsh.js.map

/***/ }),

/***/ 2264:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFeesPerSignature = void 0;
const getFeesPerSignature = (connection) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const feeCalculator = yield connection.getFeeCalculatorForBlockhash((yield connection.getRecentBlockhash()).blockhash);
    return (_a = feeCalculator.value) === null || _a === void 0 ? void 0 : _a.lamportsPerSignature;
});
exports.getFeesPerSignature = getFeesPerSignature;
//# sourceMappingURL=fees.js.map

/***/ }),

/***/ 4022:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5395), exports);
__exportStar(__webpack_require__(5448), exports);
__exportStar(__webpack_require__(6294), exports);
__exportStar(__webpack_require__(6960), exports);
__exportStar(__webpack_require__(9793), exports);
__exportStar(__webpack_require__(8706), exports);
__exportStar(__webpack_require__(4562), exports);
__exportStar(__webpack_require__(2264), exports);
__exportStar(__webpack_require__(9768), exports);
__exportStar(__webpack_require__(4867), exports);
__exportStar(__webpack_require__(9784), exports);
__exportStar(__webpack_require__(1019), exports);
__exportStar(__webpack_require__(9420), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5395:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.percent = void 0;
const percent = (p) => {
    if (typeof p !== "undefined" && p != null) {
        return Math.floor((p / 100) * 4294967295); // unit32 max value
    }
};
exports.percent = percent;
//# sourceMappingURL=percent.js.map

/***/ }),

/***/ 9784:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copied from https://github.com/project-serum/serum-ts/blob/master/packages/common/src/index.ts
// This package hasn't had it's dependencies updated in a year and so explodes with newer versions of web3js
// Better to just cut the dependency
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sleep = exports.parseTokenAccount = exports.getTokenAccount = exports.parseMintAccount = exports.getMintInfo = exports.createMintInstructions = exports.createMint = void 0;
const spl_token_1 = __webpack_require__(9874);
const web3_js_1 = __webpack_require__(7831);
function createMint(provider, authority, decimals) {
    return __awaiter(this, void 0, void 0, function* () {
        if (authority === undefined) {
            authority = provider.wallet.publicKey;
        }
        const mint = new web3_js_1.Account();
        const instructions = yield createMintInstructions(provider, authority, mint.publicKey, decimals);
        const tx = new web3_js_1.Transaction();
        tx.add(...instructions);
        yield provider.send(tx, [mint]);
        return mint.publicKey;
    });
}
exports.createMint = createMint;
function createMintInstructions(provider, authority, mint, decimals, freezeAuthority) {
    return __awaiter(this, void 0, void 0, function* () {
        let instructions = [
            web3_js_1.SystemProgram.createAccount({
                fromPubkey: provider.wallet.publicKey,
                newAccountPubkey: mint,
                space: 82,
                lamports: yield provider.connection.getMinimumBalanceForRentExemption(82),
                programId: spl_token_1.TOKEN_PROGRAM_ID,
            }),
            spl_token_1.Token.createInitMintInstruction(spl_token_1.TOKEN_PROGRAM_ID, mint, decimals !== null && decimals !== void 0 ? decimals : 0, authority, freezeAuthority || null),
        ];
        return instructions;
    });
}
exports.createMintInstructions = createMintInstructions;
function getMintInfo(provider, addr) {
    return __awaiter(this, void 0, void 0, function* () {
        let depositorAccInfo = yield provider.connection.getAccountInfo(addr);
        if (depositorAccInfo === null) {
            throw new Error('Failed to find token account');
        }
        return parseMintAccount(depositorAccInfo.data);
    });
}
exports.getMintInfo = getMintInfo;
function parseMintAccount(data) {
    const m = spl_token_1.MintLayout.decode(data);
    m.mintAuthority = new web3_js_1.PublicKey(m.mintAuthority);
    m.supply = spl_token_1.u64.fromBuffer(m.supply);
    m.isInitialized = m.state !== 0;
    return m;
}
exports.parseMintAccount = parseMintAccount;
function getTokenAccount(provider, addr) {
    return __awaiter(this, void 0, void 0, function* () {
        let depositorAccInfo = yield provider.connection.getAccountInfo(addr);
        if (depositorAccInfo === null) {
            throw new Error('Failed to find token account');
        }
        return parseTokenAccount(depositorAccInfo.data);
    });
}
exports.getTokenAccount = getTokenAccount;
function parseTokenAccount(data) {
    const accountInfo = spl_token_1.AccountLayout.decode(data);
    accountInfo.mint = new web3_js_1.PublicKey(accountInfo.mint);
    accountInfo.owner = new web3_js_1.PublicKey(accountInfo.owner);
    accountInfo.amount = spl_token_1.u64.fromBuffer(accountInfo.amount);
    if (accountInfo.delegateOption === 0) {
        accountInfo.delegate = null;
        // eslint-disable-next-line new-cap
        accountInfo.delegatedAmount = new spl_token_1.u64(0);
    }
    else {
        accountInfo.delegate = new web3_js_1.PublicKey(accountInfo.delegate);
        accountInfo.delegatedAmount = spl_token_1.u64.fromBuffer(accountInfo.delegatedAmount);
    }
    accountInfo.isInitialized = accountInfo.state !== 0;
    accountInfo.isFrozen = accountInfo.state === 2;
    if (accountInfo.isNativeOption === 1) {
        accountInfo.rentExemptReserve = spl_token_1.u64.fromBuffer(accountInfo.isNative);
        accountInfo.isNative = true;
    }
    else {
        accountInfo.rentExemptReserve = null;
        accountInfo.isNative = false;
    }
    if (accountInfo.closeAuthorityOption === 0) {
        accountInfo.closeAuthority = null;
    }
    else {
        accountInfo.closeAuthority = new web3_js_1.PublicKey(accountInfo.closeAuthority);
    }
    return accountInfo;
}
exports.parseTokenAccount = parseTokenAccount;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sleep = sleep;
//# sourceMappingURL=splToken.js.map

/***/ }),

/***/ 9793:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SplTokenMetadata = exports.getImageFromMeta = exports.MetadataCategory = exports.StorageProvider = void 0;
const mpl_token_metadata_1 = __webpack_require__(9817);
const web3_js_1 = __webpack_require__(7831);
const _1 = __webpack_require__(4022);
const arweave_1 = __webpack_require__(4867);
// @ts-ignore
const localstorage_memory_1 = __importDefault(__webpack_require__(1737));
var StorageProvider;
(function (StorageProvider) {
    StorageProvider["Arweave"] = "arweave";
})(StorageProvider = exports.StorageProvider || (exports.StorageProvider = {}));
var MetadataCategory;
(function (MetadataCategory) {
    MetadataCategory["Audio"] = "audio";
    MetadataCategory["Video"] = "video";
    MetadataCategory["Image"] = "image";
    MetadataCategory["VR"] = "vr";
})(MetadataCategory = exports.MetadataCategory || (exports.MetadataCategory = {}));
const USE_CDN = false; // copied from metaplex. Guess support isn't there yet?
const routeCDN = (uri) => {
    let result = uri;
    if (USE_CDN) {
        result = uri.replace("https://arweave.net/", "https://coldcdn.com/api/cdn/bronil/");
    }
    return result;
};
function getImageFromMeta(meta) {
    var _a, _b;
    if (meta === null || meta === void 0 ? void 0 : meta.image) {
        return meta === null || meta === void 0 ? void 0 : meta.image;
    }
    else {
        const found = (_b = (((_a = meta === null || meta === void 0 ? void 0 : meta.properties) === null || _a === void 0 ? void 0 : _a.files) || []).find((f) => typeof f !== "string" && f.type === "Ima")) === null || _b === void 0 ? void 0 : _b.uri;
        return found;
    }
}
exports.getImageFromMeta = getImageFromMeta;
const imageFromJson = (newUri, extended) => {
    const image = getImageFromMeta(extended);
    if (image) {
        const file = image.startsWith("http")
            ? extended.image
            : `${newUri}/${extended.image}`;
        return routeCDN(file);
    }
};
const localStorage = global.localStorage || localstorage_memory_1.default;
class SplTokenMetadata {
    constructor(opts) {
        this.provider = opts.provider;
    }
    static init(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            return new this({
                provider,
            });
        });
    }
    static attributesToRecord(attributes) {
        if (!attributes) {
            return undefined;
        }
        return attributes === null || attributes === void 0 ? void 0 : attributes.reduce((acc, att) => {
            if (att.trait_type)
                acc[att.trait_type] = att.value;
            return acc;
        }, {});
    }
    static getArweaveMetadata(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            if (uri) {
                const newUri = routeCDN(uri);
                const cached = localStorage.getItem(newUri);
                if (cached) {
                    return JSON.parse(cached);
                }
                else {
                    try {
                        // TODO: BL handle concurrent calls to avoid double query
                        const result = yield fetch(newUri);
                        let data = yield result.json();
                        if (data.uri) {
                            data = Object.assign(Object.assign({}, data), (yield SplTokenMetadata.getArweaveMetadata(data.uri)));
                        }
                        try {
                            localStorage.setItem(newUri, JSON.stringify(data));
                        }
                        catch (e) {
                            // ignore
                        }
                        return data;
                    }
                    catch (e) {
                        console.log(`Could not fetch from ${uri}`, e);
                        return undefined;
                    }
                }
            }
        });
    }
    static getImage(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            if (uri) {
                const newUri = routeCDN(uri);
                const metadata = yield SplTokenMetadata.getArweaveMetadata(uri);
                // @ts-ignore
                if (metadata === null || metadata === void 0 ? void 0 : metadata.uri) {
                    // @ts-ignore
                    return SplTokenMetadata.getImage(metadata === null || metadata === void 0 ? void 0 : metadata.uri);
                }
                return imageFromJson(newUri, metadata);
            }
        });
    }
    getEditionInfo(metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!metadata) {
                return {};
            }
            const editionKey = yield mpl_token_metadata_1.Edition.getPDA(new web3_js_1.PublicKey(metadata.mint));
            let edition;
            let masterEdition;
            const editionOrMasterEditionAcct = yield this.provider.connection.getAccountInfo(editionKey);
            const editionOrMasterEdition = editionOrMasterEditionAcct
                ? (editionOrMasterEditionAcct === null || editionOrMasterEditionAcct === void 0 ? void 0 : editionOrMasterEditionAcct.data[0]) == mpl_token_metadata_1.MetadataKey.EditionV1
                    ? new mpl_token_metadata_1.Edition(editionKey, editionOrMasterEditionAcct)
                    : new mpl_token_metadata_1.MasterEdition(editionKey, editionOrMasterEditionAcct)
                : null;
            if (editionOrMasterEdition instanceof mpl_token_metadata_1.Edition) {
                edition = editionOrMasterEdition;
                const masterEditionInfoAcct = yield this.provider.connection.getAccountInfo(new web3_js_1.PublicKey(editionOrMasterEdition.data.parent));
                masterEdition =
                    masterEditionInfoAcct &&
                        new mpl_token_metadata_1.MasterEdition(new web3_js_1.PublicKey(editionOrMasterEdition.data.parent), masterEditionInfoAcct);
            }
            else {
                masterEdition = editionOrMasterEdition;
            }
            return {
                edition: edition === null || edition === void 0 ? void 0 : edition.data,
                masterEdition: (masterEdition === null || masterEdition === void 0 ? void 0 : masterEdition.data) || undefined,
            };
        });
    }
    getTokenMetadata(metadataKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const metadataAcc = yield this.provider.connection.getAccountInfo(metadataKey);
            const metadata = metadataAcc && new mpl_token_metadata_1.Metadata(metadataKey, metadataAcc).data;
            const data = yield SplTokenMetadata.getArweaveMetadata(metadata === null || metadata === void 0 ? void 0 : metadata.data.uri);
            const image = yield SplTokenMetadata.getImage(metadata === null || metadata === void 0 ? void 0 : metadata.data.uri);
            const description = data === null || data === void 0 ? void 0 : data.description;
            const mint = metadata &&
                (yield (0, _1.getMintInfo)(this.provider, new web3_js_1.PublicKey(metadata.mint)));
            const displayName = (metadata === null || metadata === void 0 ? void 0 : metadata.data.name.length) == 32 ? data === null || data === void 0 ? void 0 : data.name : metadata === null || metadata === void 0 ? void 0 : metadata.data.name;
            return Object.assign({ displayName, metadata: metadata || undefined, metadataKey,
                image, mint: mint || undefined, data,
                description }, (metadata ? yield this.getEditionInfo(metadata) : {}));
        });
    }
    sendInstructions(instructions, signers, payer) {
        return (0, _1.sendInstructions)(new Map(), this.provider, instructions, signers, payer);
    }
    uploadMetadata(args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return this.createArweaveMetadata(Object.assign(Object.assign({}, args), { image: (_a = args.image) === null || _a === void 0 ? void 0 : _a.name, files: [args.image].filter(_1.truthy), mint: args.mint }));
        });
    }
    /**
     * Wrapper function that prepays for arweave metadata files in SOL, then uploads them to arweave and returns the url
     *
     * @param args
     * @returns
     */
    createArweaveMetadata(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { txid, files } = yield this.presignCreateArweaveUrl(args);
            let env = args.env;
            if (!env) {
                // @ts-ignore
                const url = this.provider.connection._rpcEndpoint;
                if (url.includes("devnet")) {
                    env = "devnet";
                }
                else {
                    env = "mainnet-beta";
                }
            }
            const uri = yield this.getArweaveUrl({
                txid,
                mint: args.mint,
                files,
                env,
                uploadUrl: args.uploadUrl || arweave_1.ARWEAVE_UPLOAD_URL,
            });
            return uri;
        });
    }
    presignCreateArweaveUrlInstructions({ name, symbol, description = "", image, creators, files = [], payer = this.provider.wallet.publicKey, existingFiles, attributes, externalUrl, animationUrl, extraMetadata, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const metadata = Object.assign({ name,
                symbol,
                description,
                image,
                attributes, externalUrl: externalUrl || "", animationUrl, properties: {
                    category: MetadataCategory.Image,
                    files: [...(existingFiles || []), ...files],
                }, creators: creators ? creators : null, sellerFeeBasisPoints: 0 }, (extraMetadata || {}));
            const realFiles = yield (0, arweave_1.getFilesWithMetadata)(files, metadata);
            const prepayTxnInstructions = yield (0, arweave_1.prePayForFilesInstructions)(payer, realFiles);
            return {
                instructions: prepayTxnInstructions,
                signers: [],
                output: {
                    files: realFiles,
                },
            };
        });
    }
    presignCreateArweaveUrl(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { output: { files }, instructions, signers, } = yield this.presignCreateArweaveUrlInstructions(args);
            const txid = yield this.sendInstructions(instructions, signers);
            return {
                files,
                txid,
            };
        });
    }
    getArweaveUrl({ txid, mint, files = [], uploadUrl = arweave_1.ARWEAVE_UPLOAD_URL, env = "mainnet-beta", }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, arweave_1.uploadToArweave)(txid, mint, files, uploadUrl, env);
            const metadataFile = (_a = result.messages) === null || _a === void 0 ? void 0 : _a.find((m) => m.filename === "manifest.json");
            if (!metadataFile) {
                throw new Error("Metadata file not found");
            }
            // Use the uploaded arweave files in token metadata
            return `https://arweave.net/${metadataFile.transactionId}`;
        });
    }
    createMetadataInstructions({ data, authority = this.provider.wallet.publicKey, mint, mintAuthority = this.provider.wallet.publicKey, payer = this.provider.wallet.publicKey, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const metadata = yield mpl_token_metadata_1.Metadata.getPDA(mint);
            const instructions = new mpl_token_metadata_1.CreateMetadataV2({
                feePayer: payer,
            }, {
                metadata,
                mint,
                metadataData: new mpl_token_metadata_1.DataV2(Object.assign({}, data)),
                mintAuthority,
                updateAuthority: authority,
            }).instructions;
            return {
                instructions,
                signers: [],
                output: {
                    metadata,
                },
            };
        });
    }
    getMetadata(metadataKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const metadataAcc = yield this.provider.connection.getAccountInfo(metadataKey);
            return metadataAcc && new mpl_token_metadata_1.Metadata(metadataKey, metadataAcc).data;
        });
    }
    createMetadata(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { instructions, signers, output } = yield this.createMetadataInstructions(args);
            yield this.sendInstructions(instructions, signers, args.payer);
            return output;
        });
    }
    updateMetadataInstructions({ data, newAuthority, metadata, updateAuthority, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const metadataAcct = (yield this.getMetadata(metadata));
            const instructions = new mpl_token_metadata_1.UpdateMetadataV2({}, {
                metadata,
                metadataData: data
                    ? new mpl_token_metadata_1.DataV2(Object.assign({}, data))
                    : new mpl_token_metadata_1.DataV2(Object.assign(Object.assign({}, metadataAcct.data), { collection: metadataAcct === null || metadataAcct === void 0 ? void 0 : metadataAcct.collection, uses: metadataAcct === null || metadataAcct === void 0 ? void 0 : metadataAcct.uses })),
                updateAuthority: updateAuthority || new web3_js_1.PublicKey(metadataAcct.updateAuthority),
                newUpdateAuthority: typeof newAuthority == "undefined"
                    ? new web3_js_1.PublicKey(metadataAcct.updateAuthority)
                    : newAuthority || undefined,
                primarySaleHappened: null,
                isMutable: null,
            }).instructions;
            return {
                instructions,
                signers: [],
                output: {
                    metadata,
                },
            };
        });
    }
    updateMetadata(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { instructions, signers, output } = yield this.updateMetadataInstructions(args);
            yield this.sendInstructions(instructions, signers, args.payer);
            return output;
        });
    }
}
exports.SplTokenMetadata = SplTokenMetadata;
//# sourceMappingURL=splTokenMetadata.js.map

/***/ }),

/***/ 6960:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAssociatedAccountBalance = void 0;
const spl_token_1 = __webpack_require__(9874);
function getAssociatedAccountBalance(connection, account, mint) {
    return __awaiter(this, void 0, void 0, function* () {
        const ata = yield spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, mint, account, true);
        return (yield connection.getTokenAccountBalance(ata)).value;
    });
}
exports.getAssociatedAccountBalance = getAssociatedAccountBalance;
//# sourceMappingURL=token.js.map

/***/ }),

/***/ 6294:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendAndConfirmWithRetry = exports.awaitTransactionSignatureConfirmation = exports.sendMultipleInstructions = exports.sendInstructions = void 0;
const web3_js_1 = __webpack_require__(7831);
const _1 = __webpack_require__(4022);
const anchorError_1 = __webpack_require__(4562);
function promiseAllInOrder(it) {
    return __awaiter(this, void 0, void 0, function* () {
        let ret = [];
        for (const i of it) {
            ret.push(yield i());
        }
        return ret;
    });
}
function sendInstructions(idlErrors, provider, instructions, signers, payer = provider.wallet.publicKey, commitment = "confirmed") {
    return __awaiter(this, void 0, void 0, function* () {
        let tx = new web3_js_1.Transaction();
        tx.recentBlockhash = (yield provider.connection.getRecentBlockhash()).blockhash;
        tx.feePayer = payer || provider.wallet.publicKey;
        tx.add(...instructions);
        if (signers.length > 0) {
            tx.partialSign(...signers);
        }
        tx = yield provider.wallet.signTransaction(tx);
        try {
            const { txid } = yield sendAndConfirmWithRetry(provider.connection, tx.serialize(), {
                skipPreflight: true,
            }, commitment);
            return txid;
        }
        catch (e) {
            console.error(e);
            const wrappedE = anchorError_1.ProgramError.parse(e, idlErrors);
            throw wrappedE == null ? e : wrappedE;
        }
    });
}
exports.sendInstructions = sendInstructions;
function truthy(value) {
    return !!value;
}
function sendMultipleInstructions(idlErrors, provider, instructionGroups, signerGroups, payer, finality = "confirmed") {
    return __awaiter(this, void 0, void 0, function* () {
        const recentBlockhash = (yield provider.connection.getRecentBlockhash("confirmed")).blockhash;
        const txns = instructionGroups
            .map((instructions, index) => {
            const signers = signerGroups[index];
            if (instructions.length > 0) {
                console.log(provider.wallet.publicKey.toBase58(), payer === null || payer === void 0 ? void 0 : payer.toBase58());
                const tx = new web3_js_1.Transaction({
                    feePayer: payer || provider.wallet.publicKey,
                    recentBlockhash,
                });
                tx.add(...instructions);
                if (signers.length > 0) {
                    tx.partialSign(...signers);
                }
                return tx;
            }
        })
            .filter(truthy);
        const txnsSigned = (yield provider.wallet.signAllTransactions(txns)).map((tx) => tx.serialize());
        console.log("Sending multiple transactions...");
        try {
            return yield promiseAllInOrder(txnsSigned.map((txn) => () => __awaiter(this, void 0, void 0, function* () {
                const { txid } = yield sendAndConfirmWithRetry(provider.connection, txn, {
                    skipPreflight: true,
                }, finality);
                return txid;
            })));
        }
        catch (e) {
            console.error(e);
            const wrappedE = anchorError_1.ProgramError.parse(e, idlErrors);
            throw wrappedE == null ? e : wrappedE;
        }
    });
}
exports.sendMultipleInstructions = sendMultipleInstructions;
function getUnixTime() {
    return new Date().valueOf() / 1000;
}
const awaitTransactionSignatureConfirmation = (txid, timeout, connection, commitment = "recent", queryStatus = false) => __awaiter(void 0, void 0, void 0, function* () {
    let done = false;
    let status = {
        slot: 0,
        confirmations: 0,
        err: null,
    };
    let subId = 0;
    status = yield new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        setTimeout(() => {
            if (done) {
                return;
            }
            done = true;
            console.log("Rejecting for timeout...");
            reject({ timeout: true });
        }, timeout);
        try {
            console.log("COMMIMENT", commitment);
            subId = connection.onSignature(txid, (result, context) => {
                done = true;
                status = {
                    err: result.err,
                    slot: context.slot,
                    confirmations: 0,
                };
                if (result.err) {
                    console.log("Rejected via websocket", result.err);
                    reject(status);
                }
                else {
                    console.log("Resolved via websocket", result);
                    resolve(status);
                }
            }, commitment);
        }
        catch (e) {
            done = true;
            console.error("WS error in setup", txid, e);
        }
        while (!done && queryStatus) {
            // eslint-disable-next-line no-loop-func
            (() => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    const signatureStatuses = yield connection.getSignatureStatuses([
                        txid,
                    ]);
                    status = signatureStatuses && signatureStatuses.value[0];
                    if (!done) {
                        if (!status) {
                            console.log("REST null result for", txid, status);
                        }
                        else if (status.err) {
                            console.log("REST error for", txid, status);
                            done = true;
                            reject(status.err);
                        }
                        else if (!status.confirmations && !status.confirmationStatus) {
                            console.log("REST no confirmations for", txid, status);
                        }
                        else {
                            console.log("REST confirmation for", txid, status);
                            if (!status.confirmationStatus || status.confirmationStatus ==
                                commitment) {
                                done = true;
                                resolve(status);
                            }
                        }
                    }
                }
                catch (e) {
                    if (!done) {
                        console.log("REST connection error: txid", txid, e);
                    }
                }
            }))();
            yield (0, _1.sleep)(2000);
        }
    }));
    //@ts-ignore
    if (connection._signatureSubscriptions[subId]) {
        connection.removeSignatureListener(subId);
    }
    done = true;
    console.log("Returning status ", status);
    return status;
});
exports.awaitTransactionSignatureConfirmation = awaitTransactionSignatureConfirmation;
function simulateTransaction(connection, transaction, commitment) {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        transaction.recentBlockhash = yield connection._recentBlockhash(
        // @ts-ignore
        connection._disableBlockhashCaching);
        const signData = transaction.serializeMessage();
        // @ts-ignore
        const wireTransaction = transaction._serialize(signData);
        const encodedTransaction = wireTransaction.toString("base64");
        const config = { encoding: "base64", commitment };
        const args = [encodedTransaction, config];
        // @ts-ignore
        const res = yield connection._rpcRequest("simulateTransaction", args);
        if (res.error) {
            throw new Error("failed to simulate transaction: " + res.error.message);
        }
        return res.result;
    });
}
const DEFAULT_TIMEOUT = 3 * 60 * 1000; // 3 minutes
/*
  A validator has up to 120s to accept the transaction and send it into a block.
  If it doesn’t happen within that timeframe, your transaction is dropped and you’ll need
  to send the transaction again. You can get the transaction signature and periodically
  Ping the network for that transaction signature. If you never get anything back,
  that means it’s definitely been dropped. If you do get a response back, you can keep pinging
  until it’s gone to a confirmed status to move on.
*/
function sendAndConfirmWithRetry(connection, txn, sendOptions, commitment, timeout = DEFAULT_TIMEOUT) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let done = false;
        let slot = 0;
        const txid = yield connection.sendRawTransaction(txn, sendOptions);
        const startTime = getUnixTime();
        (() => __awaiter(this, void 0, void 0, function* () {
            while (!done && getUnixTime() - startTime < timeout) {
                yield connection.sendRawTransaction(txn, sendOptions);
                yield (0, _1.sleep)(500);
            }
        }))();
        try {
            const confirmation = yield (0, exports.awaitTransactionSignatureConfirmation)(txid, timeout, connection, commitment, true);
            if (!confirmation)
                throw new Error("Timed out awaiting confirmation on transaction");
            if (confirmation.err) {
                const tx = yield connection.getTransaction(txid);
                console.error((_b = (_a = tx === null || tx === void 0 ? void 0 : tx.meta) === null || _a === void 0 ? void 0 : _a.logMessages) === null || _b === void 0 ? void 0 : _b.join("\n"));
                console.error(confirmation.err);
                throw new Error("Transaction failed: Custom instruction error");
            }
            slot = (confirmation === null || confirmation === void 0 ? void 0 : confirmation.slot) || 0;
        }
        catch (err) {
            console.error("Timeout Error caught", err);
            if (err.timeout) {
                throw new Error("Timed out awaiting confirmation on transaction");
            }
            let simulateResult = null;
            try {
                simulateResult = (yield simulateTransaction(connection, web3_js_1.Transaction.from(txn), "single")).value;
            }
            catch (e) { }
            if (simulateResult && simulateResult.err) {
                if (simulateResult.logs) {
                    console.error(simulateResult.logs.join("\n"));
                }
            }
            if (err.err) {
                throw err.err;
            }
            throw err;
        }
        finally {
            done = true;
        }
        console.log("Latency", txid, getUnixTime() - startTime);
        return { txid };
    });
}
exports.sendAndConfirmWithRetry = sendAndConfirmWithRetry;
//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 9420:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.truthy = void 0;
const truthy = (value) => !!value;
exports.truthy = truthy;
//# sourceMappingURL=utils.js.map

/***/ })

};
;