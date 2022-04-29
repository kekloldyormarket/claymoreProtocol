"use strict";
exports.id = 507;
exports.ids = [507];
exports.modules = {

/***/ 1331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ TokenOffering)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9587);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_5__);






const identity = ()=>{
};
const TokenOffering = ({ mintKey , showAttribution =true  })=>{
    const { result: sellOnlyTokenBondingKey , error: keyError1  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenBondingKey)(mintKey, 1);
    const { tokenBondingSdk  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useStrataSdks)();
    const { info: sellOnlyTokenBonding , loading: sellOnlyLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenBonding)(sellOnlyTokenBondingKey);
    const { result: tokenBondingKey , error: keyError2  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenBondingKey)(sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.targetMint, 0);
    const { info: tokenBonding  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenBonding)(tokenBondingKey);
    const { info: supplyAcc  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenAccount)(sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseStorage);
    const supplyMint = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useMint)(sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseMint);
    const { execute: onSubmit , loading: submitting , error: submitError ,  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_4__.useAsyncCallback)(async function(values) {
        const instructions = [];
        const signers = [];
        const { instructions: i1 , signers: s1  } = await tokenBondingSdk.buyInstructions({
            desiredTargetAmount: +values.bottomAmount,
            slippage: +values.slippage / 100,
            tokenBonding: tokenBondingKey
        });
        instructions.push(...i1);
        signers.push(...s1);
        if (sellOnlyTokenBonding) {
            const { instructions: i2 , signers: s2  } = await tokenBondingSdk.sellInstructions({
                targetAmount: (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.roundToDecimals)(+values.bottomAmount, supplyMint.decimals),
                slippage: +values.slippage / 100,
                tokenBonding: sellOnlyTokenBondingKey
            });
            instructions.push(...i2);
            signers.push(...s2);
        }
        await tokenBondingSdk.sendInstructions(instructions, signers);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default().custom((t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.Notification, {
                show: t.visible,
                type: "success",
                heading: "Transaction Successful",
                message: `Succesfully purchased ${Number(values.bottomAmount).toFixed(9)}!`,
                onDismiss: ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default().dismiss(t.id)
            })
        );
    });
    const { handleErrors  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useErrorHandler)();
    handleErrors(keyError1, keyError2, submitError);
    const tradingMints = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            base: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint,
            target: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint
        };
    }, [
        tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint,
        tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint
    ]);
    const { loading: driverLoading , ...swapProps } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useSwapDriver)({
        tradingMints,
        onTradingMintsChange: ()=>{
        },
        swap: (args)=>{
        },
        onConnectWallet: identity,
        tokenBondingKey: tokenBondingKey
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.SwapForm, {
        showAttribution: showAttribution,
        isLoading: driverLoading || sellOnlyLoading,
        isSubmitting: submitting,
        ...swapProps,
        onSubmit: onSubmit,
        numRemaining: supplyAcc && supplyMint && (0,_strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_5__.toNumber)(supplyAcc.amount, supplyMint)
    }));
};


/***/ })

};
;