"use strict";
exports.id = 892;
exports.ids = [892];
exports.modules = {

/***/ 7892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ Recipient)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__);








const Recipient = ({ value , onChange , name  })=>{
    const { 0: internalValue , 1: setInternalValue  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(value);
    const recipient = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.usePublicKey)(internalValue);
    const { info: tokenRefForOwner  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.usePrimaryClaimedTokenRef)(recipient);
    const { info: recipientAsTokenRef  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenRef)(recipient);
    const tokenRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>tokenRefForOwner || recipientAsTokenRef
    , [
        tokenRefForOwner,
        recipientAsTokenRef
    ]);
    const { metadata , image , loading: metadataLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenMetadata)(tokenRef === null || tokenRef === void 0 ? void 0 : tokenRef.mint);
    const prevValue = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.usePrevious)(value);
    const { nameString: handle , loading: handleLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useReverseName)(recipient, _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.WUMBO_TWITTER_VERIFIER, _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.WUMBO_TWITTER_TLD);
    const invalidAddress = Boolean(!recipient && internalValue);
    const recipientRef = react__WEBPACK_IMPORTED_MODULE_4___default().useRef(null);
    const prevRecipientRef = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.usePrevious)(recipientRef);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (value != internalValue && prevValue != value) {
            if (recipientRef.current && value) {
                recipientRef.current.innerText = value;
            }
            setInternalValue(value);
        }
    }, [
        recipientRef,
        value,
        internalValue,
        prevValue
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if ((!prevRecipientRef || !prevRecipientRef.current) && recipientRef.current) {
            if (internalValue) {
                recipientRef.current.innerText = internalValue;
            }
        }
    }, [
        prevRecipientRef,
        recipientRef,
        internalValue
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
            spacing: 4,
            rounded: 4,
            border: "1px",
            borderColor: "gray.200",
            p: 4,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                    children: [
                        metadata && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                            w: "57px",
                            h: "57px",
                            src: image
                        }),
                        !metadata && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Circle, {
                            w: internalValue ? "57px" : "24px",
                            h: internalValue ? "57px" : "24px",
                            backgroundColor: "gray.200",
                            children: [
                                recipient && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        color: "green",
                                        as: react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiCheck
                                    })
                                }),
                                invalidAddress && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        color: "red",
                                        as: react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineExclamation
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                    w: "full",
                    spacing: 1,
                    alignItems: "start",
                    justifyContent: "stretch",
                    children: [
                        metadata && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            flexGrow: 0,
                            fontWeight: 700,
                            children: metadata.data.name
                        }),
                        !metadata && handle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            flexGrow: 0,
                            fontWeight: 700,
                            isExternal: true,
                            href: `https://twitter.com/${handle}`,
                            children: [
                                "@",
                                handle
                            ]
                        }),
                        invalidAddress && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            flexGrow: 0,
                            fontSize: "xs",
                            color: "red",
                            children: "Invalid address"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            ref: recipientRef,
                            onInput: (e)=>{
                                // @ts-ignore
                                e.target.value = e.target.innerText;
                                // @ts-ignore
                                e.target.name = name;
                                // @ts-ignore
                                setInternalValue(e.target.value);
                                try {
                                    // See if valid
                                    // @ts-ignore
                                    new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(e.target.innerText);
                                    onChange(e);
                                } catch (err) {
                                    // @ts-ignore
                                    e.target.value = null;
                                    onChange(e);
                                }
                            },
                            wordBreak: "break-word",
                            flexGrow: 1,
                            className: "input",
                            role: "textbox",
                            contentEditable: true,
                            w: "full",
                            border: "none",
                            overflow: "auto",
                            outline: "none",
                            resize: "none",
                            boxShadow: "none",
                            ring: "none",
                            placeholder: "Enter Address",
                            _focus: {
                                boxShadow: "none"
                            }
                        })
                    ]
                })
            ]
        })
    }));
};


/***/ })

};
;