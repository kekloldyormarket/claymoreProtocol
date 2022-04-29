"use strict";
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 6822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ UseExistingMintInputs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var _FormControlWithError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5109);
/* harmony import */ var _MintSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4948);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MintSelect__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__]);
([_MintSelect__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








function UseExistingMintInputs() {
    const { register , watch , formState: { errors  } , setValue ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useFormContext)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const mint = router.query["mint"];
    const { useExistingMint , existingMint , name , symbol  } = watch();
    const existingMintPkey = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.usePublicKey)(existingMint);
    const { metadata  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useMetaplexTokenMetadata)(existingMintPkey);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (mint) {
            setValue("existingMint", mint);
            setValue("useExistingMint", !!mint);
        }
    }, [
        mint,
        router,
        setValue
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setValue("name", metadata === null || metadata === void 0 ? void 0 : metadata.data.name);
        setValue("symbol", metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol);
        setValue("uri", metadata === null || metadata === void 0 ? void 0 : metadata.data.uri);
    }, [
        setValue,
        metadata
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_6__/* .FormControlWithError */ .H, {
                id: "useExistingMint",
                help: "Sell a set amount of an existing spl token rather than creating a new one to sell. Note that you must have the amount you wish to sell in your wallet.",
                label: "Use an existing token?",
                errors: errors,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Switch, {
                    isChecked: useExistingMint,
                    ...register("useExistingMint")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                w: "full",
                p: 0,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                    in: useExistingMint,
                    animateOpacity: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FormControlWithError__WEBPACK_IMPORTED_MODULE_6__/* .FormControlWithError */ .H, {
                        id: "existingMint",
                        help: "The mint id of the existing token to use for this sale",
                        label: "Mint",
                        errors: errors,
                        children: [
                            name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                color: "gray.400",
                                size: "sm",
                                children: [
                                    name,
                                    " (",
                                    symbol,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MintSelect__WEBPACK_IMPORTED_MODULE_7__/* .MintSelect */ .J, {
                                value: watch("existingMint") || "",
                                onChange: (s)=>setValue("existingMint", s)
                            })
                        ]
                    })
                })
            })
        ]
    }));
}

});

/***/ })

};
;