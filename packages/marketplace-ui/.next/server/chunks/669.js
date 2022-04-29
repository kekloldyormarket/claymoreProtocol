"use strict";
exports.id = 669;
exports.ids = [669];
exports.modules = {

/***/ 1546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AsyncButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_4__);





const AsyncButton = ({ action , children , ...props })=>{
    const { awaitingApproval  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useProvider)();
    const { execute , loading , error  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_4__.useAsyncCallback)(action);
    const { handleErrors  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useErrorHandler)();
    handleErrors(error);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        isLoading: loading || awaitingApproval,
        loadingText: awaitingApproval ? "Awaiting Approval" : "Loading",
        onClick: execute,
        ...props,
        children: children
    }));
};


/***/ }),

/***/ 2579:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export BurnButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9874);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_spl_token__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AsyncButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1546);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const BurnButton = ({ mintKey  })=>{
    const { provider  } = useProvider();
    const { publicKey  } = useWallet();
    const { associatedAccount: account , associatedAccountKey  } = useAssociatedAccount(publicKey, mintKey);
    const hasTokens = account && account.amount.toNumber() > 0;
    return(/*#__PURE__*/ _jsx(AsyncButton, {
        isDisabled: !hasTokens,
        colorScheme: "red",
        action: async ()=>{
            if (account && publicKey && provider && associatedAccountKey) {
                const tx = new Transaction();
                tx.add(Token.createBurnInstruction(TOKEN_PROGRAM_ID, account.mint, associatedAccountKey, account.owner, [], account.amount), Token.createCloseAccountInstruction(TOKEN_PROGRAM_ID, associatedAccountKey, publicKey, publicKey, []));
                await provider.send(tx);
            }
        },
        children: hasTokens ? "Burn my Bounty Tokens" : "No Bounty Tokens Found"
    }));
};

});

/***/ }),

/***/ 6687:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DisburseFunds)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_spl_governance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3111);
/* harmony import */ var _solana_spl_governance__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_spl_governance__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useIsBountyAdmin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9744);
/* harmony import */ var _contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9684);
/* harmony import */ var _AsyncButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1546);
/* harmony import */ var _form_Recipient__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];














async function getInstructions(marketplaceSdk, reserveAmount, tokenBondingKey, address, includeRetrievalCurve) {
    if (marketplaceSdk && address && reserveAmount) {
        return marketplaceSdk === null || marketplaceSdk === void 0 ? void 0 : marketplaceSdk.disburseCurveInstructions({
            destination: address,
            tokenBonding: tokenBondingKey,
            includeRetrievalCurve
        });
    }
}
const DisburseFunds = ({ tokenBondingKey , includeRetrievalCurve =false  })=>{
    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const { marketplaceSdk  } = (0,_contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_11__/* .useMarketplaceSdk */ .T7)();
    const reserveAmount = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__.useReserveAmount)(tokenBondingKey);
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();
    const { info: tokenBonding , loading: bondingLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__.useTokenBonding)(tokenBondingKey);
    const addressKey = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__.usePublicKey)(address);
    const { info: governance , loading: governanceLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__.useGovernance)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority);
    const { result: instructionResult , loading  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_7__.useAsync)(getInstructions, [
        marketplaceSdk,
        reserveAmount,
        tokenBondingKey,
        addressKey,
        includeRetrievalCurve, 
    ]);
    const { isAdmin  } = (0,_hooks_useIsBountyAdmin__WEBPACK_IMPORTED_MODULE_10__/* .useIsBountyAdmin */ .Y)(publicKey || undefined, tokenBondingKey);
    if (isAdmin && tokenBonding) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            w: "full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                    htmlFor: "recipient",
                    children: "Recipient"
                }),
                publicKey && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    variant: "link",
                    onClick: ()=>setAddress(publicKey.toBase58())
                    ,
                    children: "Set to My Wallet"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_Recipient__WEBPACK_IMPORTED_MODULE_13__/* .Recipient */ .y, {
                    name: "recipient",
                    value: address,
                    onChange: (e)=>{
                        // @ts-ignore
                        setAddress(e.target.value);
                    }
                }),
                !governance && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsyncButton__WEBPACK_IMPORTED_MODULE_12__/* .AsyncButton */ .Z, {
                    mt: 4,
                    isLoading: bondingLoading || governanceLoading,
                    variant: "outline",
                    colorScheme: "primary",
                    w: "full",
                    action: async ()=>{
                        if (marketplaceSdk) {
                            await marketplaceSdk.disburseCurve({
                                tokenBonding: tokenBondingKey,
                                destination: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.PublicKey(address),
                                includeRetrievalCurve
                            });
                        }
                    },
                    children: "Disburse"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                    spacing: 2,
                    align: "flex-start",
                    children: governance && instructionResult && instructionResult.instructions.map((i, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "outline",
                            colorScheme: "primary",
                            leftIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                as: react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsClipboard
                            }),
                            onClick: ()=>{
                                const ixData = (0,_solana_spl_governance__WEBPACK_IMPORTED_MODULE_2__.serializeInstructionToBase64)(i);
                                navigator.clipboard.writeText(ixData);
                                react_hot_toast__WEBPACK_IMPORTED_MODULE_8___default().custom((t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__.Notification, {
                                        show: t.visible,
                                        type: "info",
                                        heading: "Copied to Clipboard",
                                        message: ixData,
                                        onDismiss: ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_8___default().dismiss(t.id)
                                    })
                                );
                            },
                            children: [
                                "Instruction ",
                                index + 1
                            ]
                        }, index)
                    )
                })
            ]
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    }));
};

});

/***/ }),

/***/ 9958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__);




const sections = [
    {
        title: "Docs",
        items: [
            {
                title: "Tutorial",
                href: "https://docs.strataprotocol.com"
            }, 
        ]
    },
    {
        title: "Community",
        items: [
            {
                title: "Discord",
                href: "https://discord.gg/XQhCFg77WM"
            },
            {
                title: "Twitter",
                href: "https://twitter.com/StrataProtocol"
            }, 
        ]
    },
    {
        title: "More",
        items: [
            {
                title: "Blog",
                href: "https://www.strataprotocol.com/blog"
            },
            {
                title: "GitHub",
                href: "https://github.com/StrataFoundation/strata"
            }, 
        ]
    }, 
];
const Footer = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
        backgroundColor: "#303846",
        padding: "29px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                maxW: "container.lg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    spacing: 16,
                    direction: [
                        "column",
                        "row"
                    ],
                    children: sections.map(({ title , items  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                            align: "left",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontWeight: 700,
                                    fontSize: "15px",
                                    color: "white",
                                    children: title
                                }),
                                items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                        href: item.href,
                                        fontWeight: 400,
                                        fontSize: "15px",
                                        color: "orange.500",
                                        isExternal: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                            spacing: 1,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                    as: react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiExternalLinkLine
                                                })
                                            ]
                                        })
                                    }, item.title)
                                )
                            ]
                        }, title)
                    )
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                textColor: "rgba(255, 255, 255, 0.49)",
                w: "full",
                children: "Copyright \xa9 2022 Strata Foundation."
            })
        ]
    }));
};


/***/ }),

/***/ 9141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ FormContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);



const FormContainer = ({ children , title  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        w: "full",
        backgroundColor: "#f9f9f9",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
            maxW: "container.md",
            pt: 8,
            pb: "200px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                    mb: 4,
                    size: "lg",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    padding: 8,
                    backgroundColor: "white",
                    rounded: "lg",
                    children: children
                })
            ]
        })
    }));
};


/***/ }),

/***/ 7634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1247);
/* harmony import */ var _TwitterLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(490);
/* harmony import */ var _WalletModalButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3447);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(884);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_WalletModalButton__WEBPACK_IMPORTED_MODULE_6__, _TwitterLink__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__]);
([_WalletModalButton__WEBPACK_IMPORTED_MODULE_6__, _TwitterLink__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const NavLink = ({ href , children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
        px: 2,
        py: 1,
        href: href,
        fontSize: "sm",
        children: children
    })
;
const Header = ()=>{
    const Links = [
        {
            link: "Launchpad",
            href: (0,_utils_routes__WEBPACK_IMPORTED_MODULE_7__/* .route */ .B)(_utils_routes__WEBPACK_IMPORTED_MODULE_7__/* .routes.launchpad */ ._.launchpad)
        }, 
    ];
    const { disconnect , connected  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            zIndex: 100,
            color: "white",
            bg: "black.300",
            w: "full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {
                    w: "full",
                    height: "56px",
                    alignItems: "center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
                        maxW: "container.lg",
                        w: "full",
                        display: "flex",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                size: "md",
                                bg: "black.300",
                                icon: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.CloseIcon, {
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.HamburgerIcon, {
                                }),
                                "aria-label": "Open Menu",
                                display: {
                                    md: "none"
                                },
                                _active: {
                                    bg: "black.300"
                                },
                                _hover: {
                                    bg: "black.300"
                                },
                                onClick: isOpen ? onClose : onOpen
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                spacing: 8,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                            height: "40px",
                                            alt: "Claymore Protocol",
                                            src: "/jare.jpeg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                        as: "nav",
                                        spacing: 4,
                                        display: {
                                            base: "none",
                                            md: "flex"
                                        },
                                        children: Links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                                href: link.href,
                                                children: link.link
                                            }, link.link)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                align: "center",
                                justify: [
                                    "center",
                                    "space-between",
                                    "flex-end",
                                    "flex-end"
                                ],
                                direction: [
                                    "column",
                                    "row",
                                    "row",
                                    "row"
                                ],
                                pt: "0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                        justify: "center",
                                        align: "center",
                                        display: {
                                            base: "none",
                                            md: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TwitterLink__WEBPACK_IMPORTED_MODULE_5__/* .TwitterLink */ .Y, {
                                            }),
                                            connected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                size: "sm",
                                                _hover: {
                                                    backgroundColor: "black.500"
                                                },
                                                variant: "ghost",
                                                onClick: ()=>disconnect()
                                                ,
                                                children: "Disconnect"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletModalButton__WEBPACK_IMPORTED_MODULE_6__/* .WalletModalButton */ .e, {
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                        justify: "center",
                                        display: {
                                            base: "flex",
                                            md: "none"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletModalButton__WEBPACK_IMPORTED_MODULE_6__/* .WalletModalButton */ .e, {
                                            size: "sm"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    pb: 4,
                    display: {
                        md: "none"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                        as: "nav",
                        spacing: 4,
                        children: Links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                href: link.href,
                                children: link.link
                            }, link.link)
                        )
                    })
                }) : null
            ]
        })
    }));
};

});

/***/ }),

/***/ 6334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ MetadataMeta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(163);




const MetadataMeta = ({ title , description , image , cardType ="summary" , url  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
        title: title,
        description: description,
        openGraph: {
            url: url,
            title: title,
            description: description,
            images: [
                {
                    url: image
                }
            ],
            site_name: "StrataLaunchpad"
        },
        twitter: {
            handle: "@StrataProtocol",
            site: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SITE_URL */ ._O,
            cardType: cardType
        }
    }));
};


/***/ }),

/***/ 7323:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8847);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9963);
/* harmony import */ var _contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9684);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Wallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7834);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__, _Wallet__WEBPACK_IMPORTED_MODULE_7__]);
([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__, _Wallet__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_8__.ApolloClient({
    uri: "https://graph.holaplex.com/v1",
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_8__.InMemoryCache({
        resultCaching: false
    })
});
const Providers = ({ children , cluster  })=>{
    const onError = react__WEBPACK_IMPORTED_MODULE_5___default().useCallback((error)=>{
        var ref, ref1;
        console.error(error);
        if ((ref = error.message) === null || ref === void 0 ? void 0 : ref.includes("Attempt to debit an account but found no record of a prior credit.")) {
            error = new Error("Not enough SOL to perform this action");
        }
        const code = (((ref1 = error.message) === null || ref1 === void 0 ? void 0 : ref1.match("custom program error: (.*)")) || [])[1];
        if (code == "0x1") {
            error = new Error("Insufficient balance.");
        } else if (code === "0x0") {
            error = new Error("Blockhash expired. Please retry");
        }
        react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().custom((t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.Notification, {
                type: "error",
                show: t.visible,
                heading: error.name,
                // @ts-ignore
                message: error.message || error.msg || error.toString(),
                onDismiss: ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().dismiss(t.id)
            })
        );
    }, [
        (react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default())
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .ThemeProvider */ .f, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_8__.ApolloProvider, {
            client: client,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.ErrorHandlerProvider, {
                onError: onError,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Wallet__WEBPACK_IMPORTED_MODULE_7__/* .Wallet */ .w5, {
                    cluster: cluster,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__.WalletModalProvider, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.StrataSdksProvider, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.AccountProvider, {
                                commitment: "confirmed",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.TokenListProvider, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_marketplaceSdkContext__WEBPACK_IMPORTED_MODULE_4__/* .MarketplaceSdkProvider */ .AE, {
                                        children: children
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }));
};

});

/***/ }),

/***/ 9963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);




const ThemeProvider = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
        resetCSS: true,
        theme: _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.theme,
        children: children
    })
;


/***/ }),

/***/ 7438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export TokenDisplay */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__);



function TokenDisplay({ tokenRef: tokenRefKey , tokenBonding: tokenBondingKey  }) {
    const { info: tokenRef , loading  } = useTokenRef(tokenRefKey);
    const { info: tokenBonding , loading: loadingTokenBonding  } = useTokenBonding(tokenBondingKey);
    const { image , metadata , loading: metaLoading  } = useTokenMetadata(tokenRef && tokenRef.mint);
    const { pricing , loading: loadingPricing  } = useBondingPricing(tokenBondingKey);
    if (loading || metaLoading || loadingPricing || loadingTokenBonding) {
        return(/*#__PURE__*/ _jsx("div", {
            children: "Loading..."
        }));
    }
    return(/*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx("img", {
                src: image
            }),
            metadata && /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsx("b", {
                            children: metadata.data.name
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        children: metadata.data.symbol
                    })
                ]
            }),
            pricing && /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            "Current Price: ",
                            pricing.current()
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            "Value Locked: ",
                            pricing.locked()
                        ]
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ TwitterLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4022);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useLinkTwitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6162);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(163);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const link = async (publicKey, state, code, ownerTwitterHandle, provider)=>{
    if (!ownerTwitterHandle) {
        if (state == localStorage.getItem("state") && provider && publicKey) {
            await (0,_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_4__.executeRemoteTxn)(provider, _constants__WEBPACK_IMPORTED_MODULE_9__/* .WUMBO_IDENTITY_SERVICE_URL */ .Db + "/twitter/oauth", {
                pubkey: publicKey.toBase58(),
                redirectUri: localStorage.getItem("redirectUri"),
                code,
                state
            });
            localStorage.removeItem("state");
            localStorage.removeItem("redirectUri");
            return true;
        }
    }
};
const TwitterLink = ()=>{
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();
    const [code, setCode] = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useQueryString)("code", "");
    const { provider , awaitingApproval  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useProvider)();
    const [state, setState] = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useQueryString)("state", "");
    const { nameString: ownerTwitterHandle , error: reverseTwitterError  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useReverseName)(publicKey || undefined, _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.WUMBO_TWITTER_VERIFIER, _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.WUMBO_TWITTER_TLD);
    const { handleErrors  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useErrorHandler)();
    const { execute  } = (0,_hooks_useLinkTwitter__WEBPACK_IMPORTED_MODULE_5__/* .useLinkTwitter */ .$9)();
    const { loading: linkLoading , error: linkError , result ,  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_7__.useAsync)(link, [
        publicKey,
        state,
        code,
        ownerTwitterHandle,
        provider
    ]);
    handleErrors(reverseTwitterError, linkError);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (result) {
            setCode("");
            setState("");
        }
    }, [
        result,
        setCode,
        setState
    ]);
    if (publicKey) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
            colorScheme: "twitter",
            isDisabled: !!ownerTwitterHandle,
            leftIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaTwitter
            }),
            variant: ownerTwitterHandle ? "ghost" : "outline",
            onClick: execute,
            isLoading: linkLoading,
            loadingText: awaitingApproval ? "Awaiting Approval" : "Linking",
            children: ownerTwitterHandle ? ownerTwitterHandle : "Link Wallet"
        }));
    }
    return null;
};

});

/***/ }),

/***/ 7834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Am": () => (/* binding */ DEFAULT_ENDPOINT),
/* harmony export */   "w5": () => (/* binding */ Wallet)
/* harmony export */ });
/* unused harmony export getToken */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7280);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(163);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1447);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__, _hooks__WEBPACK_IMPORTED_MODULE_5__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__, _hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const DEFAULT_ENDPOINT = _constants__WEBPACK_IMPORTED_MODULE_4__/* .SOLANA_URL */ .vd;
const getToken = async ()=>{
    const req = await fetch("/api/get-token");
    const { access_token  } = await req.json();
    return access_token;
};
const Wallet = ({ children , cluster  })=>{
    const { endpoint  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useEndpoint */ .JC)();
    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded
    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>[
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.PhantomWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.SlopeWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.SolflareWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.TorusWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.LedgerWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.SolletWalletAdapter({
            }),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.SolletExtensionWalletAdapter({
            }), 
        ]
    , []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.ConnectionProvider, {
        endpoint: cluster || endpoint,
        config: {
            commitment: "confirmed"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.WalletProvider, {
            wallets: wallets,
            autoConnect: true,
            children: children
        })
    }));
};

});

/***/ }),

/***/ 3447:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ WalletModalButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3364);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8847);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useEndpoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3635);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__, _hooks_useEndpoint__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__]);
([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__, _hooks_useEndpoint__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const WalletModalButton = ({ children ="Select Wallet" , onClick , ...props })=>{
    const { connected , publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();
    const { visible , setVisible  } = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__.useWalletModal)();
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((event)=>{
        if (onClick) onClick(event);
        if (!event.defaultPrevented) setVisible(!visible);
    }, [
        onClick,
        visible,
        setVisible
    ]);
    const { cluster , setClusterOrEndpoint  } = (0,_hooks_useEndpoint__WEBPACK_IMPORTED_MODULE_8__/* .useEndpoint */ .J)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
        marginTop: "auto",
        colorScheme: "primary",
        color: "white",
        variant: "outline",
        spacing: "6",
        isAttached: true,
        size: props.size,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                color: "white",
                borderColor: "primary.500",
                ...props,
                leftIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    w: "16px",
                    h: "16px",
                    as: react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsFillPersonFill
                }),
                onClick: handleClick,
                _hover: {
                    backgroundColor: "orange.500"
                },
                children: connected ? (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_5__.truncatePubkey)(publicKey) : children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                isLazy: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuButton, {
                        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton,
                        color: "white",
                        borderColor: "primary.500",
                        borderLeft: "none",
                        "aria-label": "Network",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                            as: react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsChevronDown
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuList, {
                        backgroundColor: "black.300",
                        borderColor: "black.500",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuOptionGroup, {
                            title: "Network",
                            type: "radio",
                            onChange: (e)=>setClusterOrEndpoint(e)
                            ,
                            value: cluster,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItemOption, {
                                    value: _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletAdapterNetwork.Mainnet,
                                    _focus: {
                                        backgroundColor: "primary.300"
                                    },
                                    _hover: {
                                        backgroundColor: "primary.500"
                                    },
                                    children: "Mainnet"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItemOption, {
                                    _focus: {
                                        backgroundColor: "primary.300"
                                    },
                                    _hover: {
                                        backgroundColor: "primary.500"
                                    },
                                    value: _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletAdapterNetwork.Devnet,
                                    children: "Devnet"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItemOption, {
                                    _focus: {
                                        backgroundColor: "primary.300"
                                    },
                                    _hover: {
                                        backgroundColor: "primary.500"
                                    },
                                    value: "localnet",
                                    children: "Localnet"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 2469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ BountyContribute)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1136);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
([___WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const BountyContribute = ({ mintKey , onContributeSuccess , onBuyMore  })=>{
    const { 0: qty , 1: setQty  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { connected  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();
    const { info: tokenBonding , loading: bondingLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenBondingFromMint)(mintKey);
    const { tokenBondingSdk  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useStrataSdks)();
    const { 0: isWithdraw , 1: setIsWithdraw  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { pricing  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useBondingPricing)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const { metadata: baseMetadata  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const targetBalance = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useOwnedAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const baseBalance = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useOwnedAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const disabledText1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
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
            } else {
                if (!baseBalance || baseBalance < Number(qty)) {
                    disabledText = "Insufficient funds";
                }
                if (!connected) {
                    disabledText = "Connect Wallet";
                }
            }
        }
        return disabledText;
    }, [
        pricing,
        targetBalance,
        qty,
        connected,
        baseBalance,
        isWithdraw
    ]);
    const isDisabled = !!disabledText1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
        w: "full",
        justify: "stretch",
        spacing: 2,
        children: [
            baseMetadata && onBuyMore && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "link",
                size: "sm",
                marginLeft: "auto",
                onClick: ()=>onBuyMore(tokenBonding.baseMint)
                ,
                children: [
                    "Buy More ",
                    baseMetadata.data.symbol,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        type: "number",
                        value: qty,
                        onChange: (e)=>{
                            setQty(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputRightElement, {
                        pr: "6px",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "gray.500",
                        justifyContent: "flex-end",
                        width: "120px",
                        children: baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                justify: "stretch",
                w: "full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        flexGrow: 1,
                        onClick: ()=>setIsWithdraw(!isWithdraw)
                        ,
                        fontWeight: 400,
                        variant: "outline",
                        colorScheme: "primary",
                        children: isWithdraw ? "Contribute Funds" : "Withdraw Funds"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_5__/* .AsyncButton */ .Z6, {
                        flexGrow: 1,
                        colorScheme: "primary",
                        action: async ()=>{
                            const quantity = Number(qty);
                            if (isWithdraw && pricing) {
                                await (tokenBondingSdk === null || tokenBondingSdk === void 0 ? void 0 : tokenBondingSdk.sell({
                                    targetAmount: -pricing.buyWithBaseAmount(-quantity),
                                    tokenBonding: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey,
                                    slippage: 0
                                }));
                            } else if (!isWithdraw) {
                                await (tokenBondingSdk === null || tokenBondingSdk === void 0 ? void 0 : tokenBondingSdk.buy({
                                    baseAmount: quantity,
                                    tokenBonding: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey,
                                    slippage: 0
                                }));
                            }
                            onContributeSuccess();
                        },
                        isDisabled: isDisabled,
                        children: isDisabled ? disabledText1 : isWithdraw ? "Widthdraw Funds" : "Contribute Funds"
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 9982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ BountyDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useBountyInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1271);
/* harmony import */ var _hooks_useIsBountyAdmin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9744);
/* harmony import */ var _AuthorityAndTokenInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8189);
/* harmony import */ var _BountyCardContribution__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5417);
/* harmony import */ var _BountyContribute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2469);
/* harmony import */ var _DisburseFunds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6687);
/* harmony import */ var _TopHolders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DisburseFunds__WEBPACK_IMPORTED_MODULE_12__, _TopHolders__WEBPACK_IMPORTED_MODULE_13__, _BountyContribute__WEBPACK_IMPORTED_MODULE_11__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
([_DisburseFunds__WEBPACK_IMPORTED_MODULE_12__, _TopHolders__WEBPACK_IMPORTED_MODULE_13__, _BountyContribute__WEBPACK_IMPORTED_MODULE_11__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);














const BountyDetail = ({ name , description , image , mintKey , onEdit , onBuyMore  })=>{
    const { info: tokenBonding , loading: bondingLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenBondingFromMint)(mintKey);
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();
    const { pricing  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useBondingPricing)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const targetBalance = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useOwnedAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const reserveAmount = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useReserveAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const { 0: topHolderKey , 1: setTopHolderKey  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const refreshTopHolders = ()=>setTopHolderKey((k)=>k + 1
        )
    ;
    const { isAdmin , isEditor  } = (0,_hooks_useIsBountyAdmin__WEBPACK_IMPORTED_MODULE_8__/* .useIsBountyAdmin */ .Y)(publicKey || undefined, tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const { info: { name: fromChainName , image: targetImage , createdAt , description: fromChainDescription , fundsHaveBeenUsed , bountyClosed , attributes , isNormalBounty ,  } , loading ,  } = (0,_hooks_useBountyInfo__WEBPACK_IMPORTED_MODULE_7__/* .useBountyInfo */ .o)(mintKey);
    name = fromChainName || name;
    image = targetImage || image;
    description = fromChainDescription || description;
    const dataMissing = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>!name && !image && !description
    , [
        name,
        image,
        description
    ]);
    const { metadata: baseMetadata  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    if (!loading && dataMissing || attributes && !attributes.is_strata_bounty) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
            height: "300px",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: "404: "
                    }),
                    " Not found"
                ]
            })
        }));
    }
    if (dataMissing) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
        spacing: 2,
        w: "full",
        children: [
            isEditor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                color: "gray.400",
                // __hover={{ rounded: "lg", borderColor: "gray.200", backgroundColor: "gray.100" }}
                leftIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    as: react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiPencilFill,
                    mr: "-1px"
                }),
                variant: "ghost",
                marginLeft: "auto",
                onClick: ()=>onEdit && onEdit()
                ,
                children: "Edit"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                w: "full",
                p: 6,
                pt: isEditor ? 0 : 8,
                spacing: 8,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                        spacing: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                textAlign: "center",
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthorityAndTokenInfo__WEBPACK_IMPORTED_MODULE_9__/* .AuthorityAndTokenInfo */ .O, {
                                mintKey: mintKey
                            }),
                            tokenBonding && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontSize: "15px",
                                color: "gray.400",
                                children: [
                                    "Created ",
                                    moment__WEBPACK_IMPORTED_MODULE_4___default()(createdAt).fromNow()
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        w: "full",
                        align: "left",
                        fontSize: "15px",
                        color: "gray.500",
                        whiteSpace: "pre-line",
                        children: [
                            description,
                            "\n",
                            (attributes === null || attributes === void 0 ? void 0 : attributes.discussion) && `Discussion: ${attributes.discussion}\n`,
                            (attributes === null || attributes === void 0 ? void 0 : attributes.contact) && `Contact: ${attributes.contact}`
                        ]
                    }),
                    fundsHaveBeenUsed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                        status: "error",
                        children: "Funds have been disbursed from this bounty without closing it. Existing contributors may not be able to withdraw what they put into the bounty. Contact the bounty authority if you have any questions"
                    }),
                    !isNormalBounty && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                        status: "warning",
                        children: "This bounty does not have normal bonding curve parameters. It may have royalties set, or be using a non fixed price curve. Buyer beware."
                    }),
                    bountyClosed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                                status: "info",
                                children: "This bounty has been closed."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                                color: "gray.200"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                mb: "-6px",
                                alignSelf: "flex-start",
                                size: "sm",
                                children: "Top Contributors"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopHolders__WEBPACK_IMPORTED_MODULE_13__/* .TopHolders */ .A, {
                                mintKey: mintKey
                            }, topHolderKey)
                        ]
                    }),
                    !bountyClosed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
                                w: "full",
                                justifyContent: "stretch",
                                columns: [
                                    1,
                                    1,
                                    2
                                ],
                                spacing: 2,
                                gap: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BountyCardContribution__WEBPACK_IMPORTED_MODULE_10__/* .BountyCardContribution */ .e, {
                                        amount: reserveAmount,
                                        symbol: baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BountyCardContribution__WEBPACK_IMPORTED_MODULE_10__/* .BountyCardContribution */ .e, {
                                        amount: typeof targetBalance === "undefined" ? undefined : pricing === null || pricing === void 0 ? void 0 : pricing.sellTargetAmount(targetBalance),
                                        symbol: baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol,
                                        text: "My Contributions"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                align: "flex-end",
                                w: "full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BountyContribute__WEBPACK_IMPORTED_MODULE_11__/* .BountyContribute */ .F, {
                                    onBuyMore: onBuyMore,
                                    mintKey: mintKey,
                                    onContributeSuccess: refreshTopHolders
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                                color: "gray.200"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                mb: "-6px",
                                alignSelf: "flex-start",
                                size: "sm",
                                children: "Top Contributors"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopHolders__WEBPACK_IMPORTED_MODULE_13__/* .TopHolders */ .A, {
                                mintKey: mintKey
                            }, topHolderKey),
                            isAdmin && tokenBonding && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                w: "full",
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                                        color: "gray.200"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                        alignSelf: "flex-start",
                                        size: "sm",
                                        children: "Disburse Funds"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DisburseFunds__WEBPACK_IMPORTED_MODULE_12__/* .DisburseFunds */ .Z, {
                                        tokenBondingKey: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 9530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ TopHolders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9587);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3239);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const onCreatorClick = (c, t, tokenRef, handle)=>{
    window.open(tokenRef ? `https://wum.bo/app/profile/view/${tokenRef.mint.toBase58()}` : handle ? `https://twitter.com/${handle}` : `https://explorer.solana.com/address/${c.toBase58()}`, "_blank");
};
async function getLargestTokenAccounts(connection, mint) {
    if (mint) {
        const accounts = (await connection.getTokenLargestAccounts(mint)).value;
        return accounts.filter((a)=>a.uiAmount
        ).map((account)=>({
                publicKey: account.address,
                amount: account.uiAmount
            })
        );
    }
    return [];
}
const TopHolders = ({ mintKey  })=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)();
    const { result: accounts , loading  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_6__.useAsync)(getLargestTokenAccounts, [
        connection,
        mintKey, 
    ]);
    if (loading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
        w: "full",
        spacing: 2,
        divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.StackDivider, {
            borderColor: "gray.200"
        }),
        children: accounts === null || accounts === void 0 ? void 0 : accounts.map((account, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LeaderboardItem, {
                rank: index + 1,
                ...account
            }, account.publicKey.toBase58())
        )
    }));
};
const LeaderboardItem = ({ publicKey , rank  })=>{
    const { info: account , loading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenAccount)(publicKey);
    const mint = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useMint)(account === null || account === void 0 ? void 0 : account.mint);
    if (loading || !account) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
        align: "center",
        w: "full",
        padding: 2,
        justify: "space-between",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                align: "center",
                spacing: 8,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontWeight: 500,
                        color: "gray.500",
                        children: rank
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.Creator, {
                        creator: account.owner,
                        onClick: onCreatorClick
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontWeight: 700,
                color: "gray.600",
                marginLeft: "auto",
                children: mint && (0,_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_7__/* .numberWithCommas */ .x)((0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.roundToDecimals)((0,_strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_4__.toNumber)(account.amount, mint), mint.decimals))
            })
        ]
    }));
};

});

/***/ }),

/***/ 8395:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _BountyCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8917);
/* harmony import */ var _BountyCardContribution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5417);
/* harmony import */ var _BountyDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9982);
/* harmony import */ var _BountyList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4382);
/* harmony import */ var _MintSelectModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9559);
/* harmony import */ var _TopHolders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9530);
/* harmony import */ var _AuthorityAndTokenInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8189);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TopHolders__WEBPACK_IMPORTED_MODULE_5__, _MintSelectModal__WEBPACK_IMPORTED_MODULE_4__, _BountyDetail__WEBPACK_IMPORTED_MODULE_2__]);
([_TopHolders__WEBPACK_IMPORTED_MODULE_5__, _MintSelectModal__WEBPACK_IMPORTED_MODULE_4__, _BountyDetail__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








});

/***/ }),

/***/ 4267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bD": () => (/* reexport safe */ _RadioCard__WEBPACK_IMPORTED_MODULE_9__.b)
/* harmony export */ });
/* harmony import */ var _BountyForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _EditBountyForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4830);
/* harmony import */ var _FormControlWithError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5109);
/* harmony import */ var _MintSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4948);
/* harmony import */ var _Recipient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7892);
/* harmony import */ var _SaleForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1043);
/* harmony import */ var _ManualForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2034);
/* harmony import */ var _FullyManagedForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(947);
/* harmony import */ var _TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8300);
/* harmony import */ var _RadioCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1031);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_8__, _FullyManagedForm__WEBPACK_IMPORTED_MODULE_7__, _ManualForm__WEBPACK_IMPORTED_MODULE_6__, _SaleForm__WEBPACK_IMPORTED_MODULE_5__, _MintSelect__WEBPACK_IMPORTED_MODULE_3__, _EditBountyForm__WEBPACK_IMPORTED_MODULE_1__, _BountyForm__WEBPACK_IMPORTED_MODULE_0__]);
([_TokenMetadataInputs__WEBPACK_IMPORTED_MODULE_8__, _FullyManagedForm__WEBPACK_IMPORTED_MODULE_7__, _ManualForm__WEBPACK_IMPORTED_MODULE_6__, _SaleForm__WEBPACK_IMPORTED_MODULE_5__, _MintSelect__WEBPACK_IMPORTED_MODULE_3__, _EditBountyForm__WEBPACK_IMPORTED_MODULE_1__, _BountyForm__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











});

/***/ }),

/***/ 1136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Am": () => (/* reexport safe */ _Wallet__WEBPACK_IMPORTED_MODULE_11__.Am),
/* harmony export */   "eU": () => (/* reexport safe */ _WalletModalButton__WEBPACK_IMPORTED_MODULE_12__.e),
/* harmony export */   "Z6": () => (/* reexport safe */ _AsyncButton__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "zj": () => (/* reexport safe */ _lbc__WEBPACK_IMPORTED_MODULE_14__.zj),
/* harmony export */   "cd": () => (/* reexport safe */ _lbc__WEBPACK_IMPORTED_MODULE_14__.cd),
/* harmony export */   "yH": () => (/* reexport safe */ _lbc__WEBPACK_IMPORTED_MODULE_14__.yH),
/* harmony export */   "Zg": () => (/* reexport safe */ _lbc__WEBPACK_IMPORTED_MODULE_14__.Zg),
/* harmony export */   "g4": () => (/* reexport safe */ _lbc__WEBPACK_IMPORTED_MODULE_14__.g4),
/* harmony export */   "cQ": () => (/* reexport safe */ _lbc__WEBPACK_IMPORTED_MODULE_14__.cQ)
/* harmony export */ });
/* harmony import */ var _bounties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8395);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4267);
/* harmony import */ var _sales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6551);
/* harmony import */ var _BurnButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2579);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9958);
/* harmony import */ var _FormContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9141);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7634);
/* harmony import */ var _MetadataMeta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6334);
/* harmony import */ var _Providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7323);
/* harmony import */ var _TokenDisplay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7438);
/* harmony import */ var _TwitterLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(490);
/* harmony import */ var _Wallet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7834);
/* harmony import */ var _WalletModalButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3447);
/* harmony import */ var _AsyncButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1546);
/* harmony import */ var _lbc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4201);
/* harmony import */ var _DisburseFunds__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6687);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DisburseFunds__WEBPACK_IMPORTED_MODULE_15__, _lbc__WEBPACK_IMPORTED_MODULE_14__, _WalletModalButton__WEBPACK_IMPORTED_MODULE_12__, _Wallet__WEBPACK_IMPORTED_MODULE_11__, _TwitterLink__WEBPACK_IMPORTED_MODULE_10__, _Providers__WEBPACK_IMPORTED_MODULE_8__, _Header__WEBPACK_IMPORTED_MODULE_6__, _BurnButton__WEBPACK_IMPORTED_MODULE_3__, _sales__WEBPACK_IMPORTED_MODULE_2__, _form__WEBPACK_IMPORTED_MODULE_1__, _bounties__WEBPACK_IMPORTED_MODULE_0__]);
([_DisburseFunds__WEBPACK_IMPORTED_MODULE_15__, _lbc__WEBPACK_IMPORTED_MODULE_14__, _WalletModalButton__WEBPACK_IMPORTED_MODULE_12__, _Wallet__WEBPACK_IMPORTED_MODULE_11__, _TwitterLink__WEBPACK_IMPORTED_MODULE_10__, _Providers__WEBPACK_IMPORTED_MODULE_8__, _Header__WEBPACK_IMPORTED_MODULE_6__, _BurnButton__WEBPACK_IMPORTED_MODULE_3__, _sales__WEBPACK_IMPORTED_MODULE_2__, _form__WEBPACK_IMPORTED_MODULE_1__, _bounties__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

















});

/***/ }),

/***/ 5468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ BondingPlot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3239);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);









const GET_BONDING_CHANGES = _apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql`
  query GetBondingChanges(
    $address: PublicKey!
    $startUnixTime: NaiveDateTime!
    $stopUnixTime: NaiveDateTime!
    $limit: Int!
    $offset: Int!
  ) {
    enrichedBondingChanges(
      address: $address
      startUnixTime: $startUnixTime
      stopUnixTime: $stopUnixTime
      limit: $limit
      offset: $offset
    ) {
      reserveChange
      supplyChange
      insertTs
    }
  }
`;
function now() {
    return new Date().valueOf() / 1000;
}
const BondingPlot = ({ tokenBondingKey  })=>{
    var ref;
    const { info: tokenBonding , loading: loadingBonding  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useTokenBonding)(tokenBondingKey);
    const { 0: stopTime , 1: setStopTime  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(now());
    const baseMint = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const targetMint = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const { data: { enrichedBondingChanges  } = {
    } , error , loading ,  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery)(GET_BONDING_CHANGES, {
        variables: {
            address: tokenBondingKey,
            startUnixTime: Math.max(stopTime - 60 * 60 * 24, (tokenBonding === null || tokenBonding === void 0 ? void 0 : (ref = tokenBonding.goLiveUnixTime) === null || ref === void 0 ? void 0 : ref.toNumber()) || 0),
            stopUnixTime: stopTime,
            offset: 0,
            limit: 1000
        }
    });
    const data = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (enrichedBondingChanges && baseMint && targetMint) {
            return enrichedBondingChanges.map((c)=>({
                    time: c.insertTs * 1000,
                    price: Math.abs(Number(c.reserveChange) / Math.pow(10, baseMint.decimals) / (Number(c.supplyChange) / Math.pow(10, targetMint.decimals)))
                })
            ).filter((p)=>p.price !== NaN && p.price !== Infinity
            );
        }
        return [];
    }, [
        enrichedBondingChanges,
        baseMint,
        targetMint
    ]);
    const { handleErrors  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useErrorHandler)();
    handleErrors(error);
    const labelColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("black", "white");
    const icoColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("black", "white");
    const longestLabelLength = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>data.map((d)=>(0,_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_7__/* .numberWithCommas */ .x)(d.price, 9)
        ).reduce((acc, cur)=>cur.length > acc ? cur.length : acc
        , 0)
    , [
        data,
        baseMint
    ]);
    if (loadingBonding || !baseMint || !targetMint) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
            })
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
        spacing: 4,
        w: "full",
        align: "left",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                spacing: 0,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: "18px",
                        fontWeight: "700",
                        children: "Price History"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                        "aria-label": "Fetch More",
                        onClick: ()=>setStopTime(now())
                        ,
                        isLoading: loading,
                        color: icoColor,
                        variant: "link",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                            h: "24px",
                            w: "24px",
                            mb: "-2px",
                            as: react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiRefresh
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                w: "full",
                h: "136px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {
                    height: "100%",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_6__.LineChart, {
                        data: data,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.CartesianGrid, {
                                stroke: "rgba(229, 229, 229, 0.3)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.XAxis, {
                                tickCount: 5,
                                interval: 0,
                                dataKey: "time",
                                domain: [
                                    "auto",
                                    "auto"
                                ],
                                name: "Time",
                                tickFormatter: (unixTime)=>moment__WEBPACK_IMPORTED_MODULE_3___default()(unixTime).format("LT")
                                ,
                                type: "number"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, {
                                tickFormatter: (num)=>(0,_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_7__/* .numberWithCommas */ .x)(num, baseMint.decimals)
                                ,
                                tickCount: 3,
                                domain: [
                                    "auto",
                                    "auto"
                                ],
                                tickLine: false,
                                type: "number",
                                orientation: "right",
                                stroke: labelColor,
                                width: longestLabelLength * 7,
                                axisLine: false
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.Line, {
                                isAnimationActive: false,
                                dot: false,
                                type: "monotone",
                                dataKey: "price",
                                stroke: "#81fff0"
                            })
                        ]
                    })
                })
            })
        ]
    }));
};


/***/ }),

/***/ 5547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ Branding)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Branding = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                spacing: 4,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                        isExternal: true,
                        href: "https://strataprotocol.com",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                            h: "24px",
                            alt: "Strata",
                            src: "/logo-white.svg"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                        isExternal: true,
                        href: "https://metaplex.com",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                            h: "9px",
                            alt: "Metaplex",
                            src: "/metaplex-logo.svg"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "14px",
                color: "gray.400",
                children: "Powered by Strata & Metaplex"
            })
        ]
    })
;


/***/ }),

/***/ 6749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ LbcInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useLivePrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2375);
/* harmony import */ var _utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3239);









const BlackBox = ({ children , ...other })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
        p: "26px",
        rounded: "lg",
        backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "black.500"),
        ...other,
        children: children
    }));
};
const BigText = ({ children , ...other })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontWeight: 700,
        fontSize: "24px",
        ...other,
        children: children
    }));
};
const LbcInfo = ({ tokenBondingKey , useTokenOfferingCurve =false , price: inputPrice  })=>{
    const { isOpen , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)({
        defaultIsOpen: false
    });
    const { info: tokenBonding , loading: loadingBonding  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useTokenBonding)(tokenBondingKey);
    const { price , loading: loadingPricing  } = (0,_hooks_useLivePrice__WEBPACK_IMPORTED_MODULE_7__/* .useLivePrice */ .L)(tokenBondingKey);
    const { numRemaining , mintCap  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useCapInfo)(tokenBondingKey, useTokenOfferingCurve);
    const priceToUse = inputPrice || price;
    const { info: curve  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useCurve)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.curve);
    const maxTime = // @ts-ignore
    curve === null || curve === void 0 ? void 0 : curve.definition.timeV0.curves[0].curve.timeDecayExponentialCurveV0.interval;
    const { 0: elapsedTime , 1: setElapsedTime  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useInterval)(()=>{
        setElapsedTime(tokenBonding ? new Date().valueOf() / 1000 - tokenBonding.goLiveUnixTime.toNumber() : undefined);
    }, 500);
    const endDate = new Date(0);
    endDate.setUTCSeconds(((tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.goLiveUnixTime.toNumber()) || 0) + (maxTime || 0));
    const { metadata  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
        spacing: 4,
        align: "stretch",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                direction: [
                    "column",
                    "row"
                ],
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                        flexGrow: 2,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BlackBox, {
                                w: "full",
                                position: "relative",
                                children: [
                                    loadingPricing || typeof priceToUse == "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
                                        size: "lg"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BigText, {
                                        children: isNaN(priceToUse) ? "Not Started" : `${(0,_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_8__/* .numberWithCommas */ .x)(priceToUse, 4)} ${metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                        label: `${moment__WEBPACK_IMPORTED_MODULE_3___default().duration(maxTime - (elapsedTime || 0), "seconds").humanize()} Remaining`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            position: "absolute",
                                            top: "14px",
                                            right: "14px",
                                            w: "14px",
                                            h: "14px",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__.CircularProgressbar, {
                                                counterClockwise: true,
                                                value: elapsedTime && maxTime ? (maxTime - elapsedTime) / maxTime * 100 : 0,
                                                strokeWidth: 50,
                                                styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__.buildStyles)({
                                                    strokeLinecap: "butt",
                                                    trailColor: "transparent",
                                                    pathColor: "rgba(255, 255, 255, 0.36)"
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("black", "white"),
                                variant: "link",
                                fontWeight: 700,
                                onClick: onToggle,
                                rightIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                    mb: "-3px",
                                    color: "gray.300",
                                    as: isOpen ? react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsChevronUp : react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsChevronDown
                                }),
                                children: "Price"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                        flexGrow: 1,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BlackBox, {
                                w: "full",
                                position: "relative",
                                children: [
                                    loadingBonding ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BigText, {
                                        children: numRemaining ? (0,_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_8__/* .numberWithCommas */ .x)(numRemaining, 4) : "0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.LightMode, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Progress, {
                                            w: "95%",
                                            size: "xs",
                                            h: "2px",
                                            position: "absolute",
                                            bottom: "-1px",
                                            colorScheme: "primary",
                                            background: "rgba(196, 196, 196, 0.4)",
                                            value: (numRemaining || 0) / (mintCap || 0) * 100
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontWeight: 700,
                                children: "Remaining"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                in: isOpen,
                animateOpacity: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                    align: "left",
                    spacing: 4,
                    padding: 4,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                            spacing: 1,
                            align: "left",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "14px",
                                    fontWeight: "700",
                                    children: "How does Dynamic Pricing work?"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "12px",
                                    children: [
                                        "Dynamic Pricing is similiar to a Dutch Auction. The price starts high, lowers gradually, and only increases when people buy. This price discovery mechanism is powered by a Strata Liquidity Bootstrapping Curve (LBC).",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            color: "primary.500",
                                            href: "https://docs.strataprotocol.com/marketplace/lbc",
                                            children: "Learn More"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontSize: "14px",
                            children: [
                                "End Date: ",
                                moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate).format("LLL")
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 8530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LbcStatus)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../react/dist/lib/index.js
var lib = __webpack_require__(1186);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-countdown"
var external_react_countdown_ = __webpack_require__(4449);
var external_react_countdown_default = /*#__PURE__*/__webpack_require__.n(external_react_countdown_);
;// CONCATENATED MODULE: ./src/components/Countdown.tsx




const TimeCard = ({ name , value  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
        flexGrow: 1,
        spacing: 2,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontWeight: 900,
                fontSize: "24px",
                color: "primary.500",
                children: value
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                color: "gray.400",
                fontSize: "14px",
                children: name
            })
        ]
    })
;
const Sep = ()=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
        fontWeight: 600,
        fontSize: "24px",
        color: "gray.500",
        children: ":"
    })
;
const Countdown = ({ date , children  })=>{
    const renderer = ({ days , hours , minutes , seconds , completed  })=>{
        if (completed) {
            // Render a completed state
            return children || /*#__PURE__*/ jsx_runtime_.jsx("div", {
            });
        } else {
            // Render a countdown
            return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                w: "full",
                rounded: "lg",
                borderColor: "primary.500",
                borderWidth: "1px",
                padding: 4,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                    w: "full",
                    spacing: 2,
                    align: "top",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TimeCard, {
                            value: days,
                            name: "Days"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Sep, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TimeCard, {
                            value: hours,
                            name: "Hours"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Sep, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TimeCard, {
                            value: minutes,
                            name: "Minutes"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Sep, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TimeCard, {
                            value: seconds,
                            name: "Seconds"
                        })
                    ]
                })
            }));
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_countdown_default()), {
        date: date,
        renderer: renderer
    }));
};

;// CONCATENATED MODULE: ./src/components/lbc/LbcStatus.tsx





const LbcStatus = ({ tokenBondingKey  })=>{
    const { info: tokenBonding  } = (0,lib.useTokenBonding)(tokenBondingKey);
    const goLiveDate = (0,external_react_.useMemo)(()=>{
        if (tokenBonding) {
            const date = new Date(0);
            date.setUTCSeconds(tokenBonding.goLiveUnixTime.toNumber());
            return date;
        }
    }, [
        tokenBonding
    ]);
    const { 0: isLive , 1: setIsLive  } = (0,external_react_.useState)(true);
    (0,react_.useInterval)(()=>{
        setIsLive(goLiveDate ? goLiveDate < new Date() : true);
    }, 500);
    const { numRemaining  } = (0,lib.useCapInfo)(tokenBondingKey);
    const isSoldOut = typeof numRemaining !== "undefined" && numRemaining <= 0;
    if (isSoldOut) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
            rounded: "lg",
            borderColor: "primary.500",
            borderWidth: "1px",
            padding: 4,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontWeight: 600,
                color: "primary.500",
                children: "SOLD OUT"
            })
        }));
    } else if (!isLive && goLiveDate) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(Countdown, {
            date: goLiveDate
        }));
    } else {
        return null;
    }
};


/***/ }),

/***/ 6611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ MintButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useLivePrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










async function buy({ tokenBondingSdk , tokenBonding , maxPrice  }) {
    if (isNaN(maxPrice)) {
        throw new Error("Invalid slippage");
    }
    if (tokenBondingSdk) {
        await tokenBondingSdk.buy({
            tokenBonding,
            desiredTargetAmount: 1,
            expectedBaseAmount: maxPrice,
            slippage: 0
        });
        react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().custom((t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.Notification, {
                show: t.visible,
                type: "success",
                heading: "Transaction Successful",
                message: `Succesfully minted! Check the collectibles section of your wallet for the token.`,
                onDismiss: ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().dismiss(t.id)
            })
        );
    }
}
const MintButton = ({ tokenBondingKey , price: inputPrice , isDisabled , disabledText , onMint =buy  })=>{
    const { isOpen , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    const { connected , publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();
    const { awaitingApproval  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useProvider)();
    const { 0: slippage , 1: setSlippage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("5");
    const { numRemaining  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useCapInfo)(tokenBondingKey);
    const { pricing , loading: pricingLoading , error: pricingError ,  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useBondingPricing)(tokenBondingKey);
    const { handleErrors  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useErrorHandler)();
    const { tokenBondingSdk  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useStrataSdks)();
    const { execute , loading , error  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_5__.useAsyncCallback)(onMint);
    handleErrors(pricingError, error);
    const { info: tokenBonding , loading: bondingLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenBonding)(tokenBondingKey);
    const { price  } = (0,_hooks_useLivePrice__WEBPACK_IMPORTED_MODULE_9__/* .useLivePrice */ .L)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const priceToUse = inputPrice || price;
    const targetBalance = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useUserOwnedAmount)(publicKey, tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const ownedAmount = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useUserOwnedAmount)(publicKey, tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const insufficientBalance = (priceToUse || 0) > (ownedAmount || 0);
    const notLive = tokenBonding && tokenBonding.goLiveUnixTime.toNumber() > new Date().valueOf() / 1000;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
        spacing: 8,
        align: "stretch",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.LightMode, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    onClick: ()=>execute({
                            tokenBondingSdk,
                            tokenBonding: tokenBondingKey,
                            maxPrice: priceToUse * (1 + Number(slippage) / 100)
                        })
                    ,
                    isLoading: bondingLoading || pricingLoading || loading,
                    colorScheme: "primary",
                    isDisabled: numRemaining == 0 && !targetBalance || (targetBalance || 0) === 0 && insufficientBalance || notLive || isDisabled,
                    loadingText: awaitingApproval ? "Awaiting Approval" : loading ? "Submitting" : "Loading",
                    children: (targetBalance || 0) > 0 ? "Finish previous Mint Transaction" : numRemaining == 0 ? "Sold Out" : insufficientBalance ? "Insufficient Balance" : notLive ? `Goes live at ${tokenBonding && new Date(tokenBonding.goLiveUnixTime.toNumber() * 1000).toLocaleString()}` : isDisabled ? disabledText : connected ? "Mint" : "Connect Wallet"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("black", "white"),
                variant: "link",
                onClick: onToggle,
                fontSize: "14px",
                rightIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    mb: "-3px",
                    color: "gray.300",
                    as: isOpen ? react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsChevronUp : react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsChevronDown
                }),
                children: "Advanced Settings"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                in: isOpen,
                animateOpacity: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                    spacing: 1,
                    padding: 4,
                    align: "stretch",
                    color: "gray.400",
                    borderColor: "gray.400",
                    borderWidth: "1px",
                    rounded: "lg",
                    fontSize: "sm",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        justify: "space-between",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        children: "Slippage"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                        placement: "top",
                                        label: "Your transaction will fail if the price changes unfavorably more than this percentage.",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                w: 5,
                                                h: 5,
                                                as: react_icons_ri__WEBPACK_IMPORTED_MODULE_8__.RiInformationLine,
                                                _hover: {
                                                    color: "primary.500",
                                                    cursor: "pointer"
                                                }
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
                                size: "sm",
                                w: "60px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        id: "slippage",
                                        borderColor: "gray.400",
                                        _hover: {
                                            borderColor: "gray.500"
                                        },
                                        textAlign: "right",
                                        rounded: "lg",
                                        placeholder: "0",
                                        type: "number",
                                        fontWeight: "semibold",
                                        step: 1,
                                        min: 1,
                                        max: 90,
                                        paddingRight: 5,
                                        paddingLeft: 1,
                                        value: slippage,
                                        onChange: (e)=>setSlippage(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputRightElement, {
                                        zIndex: 0,
                                        w: 4,
                                        justifyContent: "end",
                                        paddingRight: 1.5,
                                        rounded: "lg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            margin: 0,
                                            children: "%"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 8114:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TransactionHistory)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2531);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3239);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1247);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useTransactions__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__]);
([_hooks_useTransactions__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










const TransactionHistory = ({ tokenBondingKey  })=>{
    const { info: tokenBonding , loading: loadingBonding  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__.useTokenBonding)(tokenBondingKey);
    const { isOpen: mineOnly , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    const { result: sellOnlyTokenBondingKey , error: keyError1  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__.useTokenBondingKey)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint, 1);
    if (keyError1) {
        console.error(keyError1);
    }
    const { info: sellOnlyTokenBonding , loading: sellOnlyLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__.useTokenBonding)(sellOnlyTokenBondingKey);
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)();
    const address = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>mineOnly ? publicKey || undefined : tokenBondingKey
    , [
        publicKey,
        tokenBondingKey,
        mineOnly
    ]);
    const { transactions , fetchMore , loadingInitial , fetchNew , loadingMore  } = (0,_hooks_useTransactions__WEBPACK_IMPORTED_MODULE_3__/* .useTransactions */ .n)({
        numTransactions: 5,
        address
    });
    const baseMint = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const targetMint = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_4__.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return tokenBonding && !sellOnlyLoading ? transactions.map((transaction)=>{
            var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19;
            const reserveIdx = transaction.transaction.message.accountKeys.map((k)=>k.toBase58()
            ).indexOf(tokenBonding.baseStorage.toBase58());
            const sellOnlyReserveIdx = transaction.transaction.message.accountKeys.map((k)=>k.toBase58()
            ).indexOf((sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseStorage.toBase58()) || "");
            const preReserves = (ref2 = (ref = transaction.meta) === null || ref === void 0 ? void 0 : (ref1 = ref.preTokenBalances) === null || ref1 === void 0 ? void 0 : ref1.find((b)=>b.accountIndex == reserveIdx && b.mint == tokenBonding.baseMint.toBase58()
            )) === null || ref2 === void 0 ? void 0 : ref2.uiTokenAmount.uiAmount;
            const postReserves = (ref5 = (ref3 = transaction.meta) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.postTokenBalances) === null || ref4 === void 0 ? void 0 : ref4.find((b)=>b.accountIndex == reserveIdx && b.mint == tokenBonding.baseMint.toBase58()
            )) === null || ref5 === void 0 ? void 0 : ref5.uiTokenAmount.uiAmount;
            const reserveChange = (postReserves || 0) - (preReserves || 0);
            const preToken = (ref9 = (ref8 = (ref6 = transaction.meta) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.preTokenBalances) === null || ref7 === void 0 ? void 0 : ref7.filter((b)=>b.mint == tokenBonding.targetMint.toBase58()
            )) === null || ref8 === void 0 ? void 0 : ref8.map((v)=>v.uiTokenAmount.uiAmount
            )) === null || ref9 === void 0 ? void 0 : ref9.reduce((v1, v2)=>(v1 || 0) + (v2 || 0)
            , 0);
            const postToken = (ref13 = (ref12 = (ref10 = transaction.meta) === null || ref10 === void 0 ? void 0 : (ref11 = ref10.postTokenBalances) === null || ref11 === void 0 ? void 0 : ref11.filter((b)=>b.mint == tokenBonding.targetMint.toBase58()
            )) === null || ref12 === void 0 ? void 0 : ref12.map((v)=>v.uiTokenAmount.uiAmount
            )) === null || ref13 === void 0 ? void 0 : ref13.reduce((v1, v2)=>(v1 || 0) + (v2 || 0)
            , 0);
            const tokenChange = (postToken || 0) - (preToken || 0);
            const preSellOnlyReserves = (ref16 = (ref14 = transaction.meta) === null || ref14 === void 0 ? void 0 : (ref15 = ref14.preTokenBalances) === null || ref15 === void 0 ? void 0 : ref15.find((b)=>{
                return b.accountIndex == sellOnlyReserveIdx && b.mint == (sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseMint.toBase58());
            })) === null || ref16 === void 0 ? void 0 : ref16.uiTokenAmount.uiAmount;
            const postSellOnlyReserves = (ref19 = (ref17 = transaction.meta) === null || ref17 === void 0 ? void 0 : (ref18 = ref17.postTokenBalances) === null || ref18 === void 0 ? void 0 : ref18.find((b)=>{
                return b.accountIndex == sellOnlyReserveIdx && b.mint == (sellOnlyTokenBonding === null || sellOnlyTokenBonding === void 0 ? void 0 : sellOnlyTokenBonding.baseMint.toBase58());
            })) === null || ref19 === void 0 ? void 0 : ref19.uiTokenAmount.uiAmount;
            const sellOnlyChange = (preSellOnlyReserves || 0) - (postSellOnlyReserves || 0);
            return {
                price: reserveChange / Math.max(tokenChange, sellOnlyChange),
                volume: Math.max(tokenChange, sellOnlyChange),
                time: (transaction.blockTime || 0) * 1000,
                signature: transaction.transaction.signatures[0]
            };
        }).filter((d)=>d.price
        ) : [];
    }, [
        transactions,
        tokenBonding,
        sellOnlyLoading,
        sellOnlyTokenBonding
    ]);
    const icoColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("black", "white");
    const thProps = {
        textTransform: "none",
        color: "white",
        fontSize: "14px",
        letterSpacing: "none",
        padding: 4
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
        spacing: 4,
        w: "full",
        align: "left",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                justify: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        fontSize: "18px",
                        fontWeight: "700",
                        children: "Recent Transactions"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                        spacing: 1,
                        children: [
                            publicKey && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Switch, {
                                size: "sm",
                                onChange: ()=>onToggle()
                                ,
                                children: "Mine Only"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                "aria-label": "Fetch New Transactions",
                                title: "Fetch New Transactions",
                                onClick: ()=>fetchNew(20)
                                ,
                                isLoading: loadingMore,
                                color: icoColor,
                                variant: "link",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                    h: "24px",
                                    w: "24px",
                                    mb: "-2px",
                                    as: react_icons_bi__WEBPACK_IMPORTED_MODULE_8__.BiRefresh
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {
                    variant: "simple",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Thead, {
                            variant: "unstyled",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                                        ...thProps,
                                        children: "Volume"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                                        ...thProps,
                                        children: "Price"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                                        ...thProps,
                                        children: "Time"
                                    })
                                ]
                            })
                        }),
                        data.map(({ price , volume , time , signature  })=>{
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {
                                onClick: ()=>window.open(`https://explorer.solana.com/tx/${signature}`, "_blank")
                                ,
                                _hover: {
                                    background: "#303947",
                                    cursor: "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                                        children: (0,_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_6__/* .numberWithCommas */ .x)(volume, targetMint === null || targetMint === void 0 ? void 0 : targetMint.decimals)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                                        children: (0,_utils_numberWithCommas__WEBPACK_IMPORTED_MODULE_6__/* .numberWithCommas */ .x)(price, baseMint === null || baseMint === void 0 ? void 0 : baseMint.decimals)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                                        title: moment__WEBPACK_IMPORTED_MODULE_5___default()(time).format("llll"),
                                        children: moment__WEBPACK_IMPORTED_MODULE_5___default()(time).fromNow()
                                    })
                                ]
                            }, signature));
                        })
                    ]
                })
            }),
            loadingInitial && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                w: "100%",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                color: "gray.500",
                variant: "ghost",
                onClick: ()=>fetchMore(20)
                ,
                children: "Show More"
            })
        ]
    }));
};

});

/***/ }),

/***/ 4201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zj": () => (/* reexport safe */ _BondingPlot__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   "yH": () => (/* reexport safe */ _LbcInfo__WEBPACK_IMPORTED_MODULE_1__.y),
/* harmony export */   "g4": () => (/* reexport safe */ _MintButton__WEBPACK_IMPORTED_MODULE_2__.g),
/* harmony export */   "cd": () => (/* reexport safe */ _Branding__WEBPACK_IMPORTED_MODULE_3__.c),
/* harmony export */   "Zg": () => (/* reexport safe */ _LbcStatus__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "cQ": () => (/* reexport safe */ _TransactionHistory__WEBPACK_IMPORTED_MODULE_6__.Z)
/* harmony export */ });
/* harmony import */ var _BondingPlot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);
/* harmony import */ var _LbcInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6749);
/* harmony import */ var _MintButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6611);
/* harmony import */ var _Branding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5547);
/* harmony import */ var _LbcStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8530);
/* harmony import */ var _mint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(848);
/* harmony import */ var _TransactionHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8114);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TransactionHistory__WEBPACK_IMPORTED_MODULE_6__, _MintButton__WEBPACK_IMPORTED_MODULE_2__]);
([_TransactionHistory__WEBPACK_IMPORTED_MODULE_6__, _MintButton__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








});

/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ MintedNftNotification)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const MintedNftNotification = ({ onDismiss , mint  })=>{
    const { metadata , image , loading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_2__.useTokenMetadata)(mint);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
        w: "full",
        bgColor: "black.300",
        borderTop: "1px",
        borderTopColor: "gray.600",
        rounded: "lg",
        fontFamily: "body",
        color: "white",
        status: "success",
        flexDirection: "column",
        p: 0,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                w: "full",
                children: [
                    (loading || !image) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                        w: "full",
                        h: "327px"
                    }),
                    !loading && image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        objectFit: "cover",
                        alt: metadata === null || metadata === void 0 ? void 0 : metadata.data.name,
                        w: "full",
                        minH: "327px",
                        src: image
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                align: "left",
                w: "full",
                p: 8,
                spacing: 1,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                        align: "left",
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AlertTitle, {
                                fontSize: "24px",
                                fontWeight: 700,
                                children: "Success!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AlertIcon, {
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "gray.400",
                        children: loading ? "Waiting on your preview..." : `Here is a preview of your NFT: ${metadata ? metadata.data.name : ""}`
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CloseButton, {
                position: "absolute",
                right: "8px",
                top: "8px",
                color: "gray.400",
                _hover: {
                    color: "gray.600",
                    cursor: "pointer"
                },
                onClick: onDismiss
            })
        ]
    }));
};


/***/ }),

/***/ 1756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dk": () => (/* binding */ CANDY_MACHINE_PROGRAM),
/* harmony export */   "Qk": () => (/* binding */ getCandyMachineState),
/* harmony export */   "CI": () => (/* binding */ mintOneToken)
/* harmony export */ });
/* unused harmony exports awaitTransactionSignatureConfirmation, getCandyMachineCreator, shortenAddress */
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1024);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9874);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4022);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2198);





const CANDY_MACHINE_PROGRAM = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ");
const TOKEN_METADATA_PROGRAM_ID = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
const awaitTransactionSignatureConfirmation = async (txid, timeout, connection, queryStatus = false)=>{
    let done = false;
    let status = {
        slot: 0,
        confirmations: 0,
        err: null
    };
    let subId = 0;
    status = await new Promise(async (resolve, reject)=>{
        setTimeout(()=>{
            if (done) {
                return;
            }
            done = true;
            console.log("Rejecting for timeout...");
            reject({
                timeout: true
            });
        }, timeout);
        while(!done && queryStatus){
            // eslint-disable-next-line no-loop-func
            (async ()=>{
                try {
                    const signatureStatuses = await connection.getSignatureStatuses([
                        txid, 
                    ]);
                    status = signatureStatuses && signatureStatuses.value[0];
                    if (!done) {
                        if (!status) {
                            console.log("REST null result for", txid, status);
                        } else if (status.err) {
                            console.log("REST error for", txid, status);
                            done = true;
                            reject(status.err);
                        } else if (!status.confirmations) {
                            console.log("REST no confirmations for", txid, status);
                        } else {
                            console.log("REST confirmation for", txid, status);
                            done = true;
                            resolve(status);
                        }
                    }
                } catch (e) {
                    if (!done) {
                        console.log("REST connection error: txid", txid, e);
                    }
                }
            })();
            await sleep(2000);
        }
    });
    //@ts-ignore
    if (connection._signatureSubscriptions[subId]) {
        connection.removeSignatureListener(subId);
    }
    done = true;
    console.log("Returning status", status);
    return status;
};
const createAssociatedTokenAccountInstruction = (associatedTokenAddress, payer, walletAddress, splTokenMintAddress)=>{
    const keys = [
        {
            pubkey: payer,
            isSigner: true,
            isWritable: true
        },
        {
            pubkey: associatedTokenAddress,
            isSigner: false,
            isWritable: true
        },
        {
            pubkey: walletAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: splTokenMintAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SystemProgram.programId,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false
        }, 
    ];
    return new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.TransactionInstruction({
        keys,
        programId: _utils__WEBPACK_IMPORTED_MODULE_4__/* .SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID */ .Tb,
        data: Buffer.from([])
    });
};
const getCandyMachineState = async (anchorWallet, candyMachineId, connection)=>{
    const provider = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.Provider(connection, anchorWallet, {
        preflightCommitment: "processed"
    });
    const idl = await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.Program.fetchIdl(CANDY_MACHINE_PROGRAM, provider);
    const program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.Program(idl, CANDY_MACHINE_PROGRAM, provider);
    const state = await program.account.candyMachine.fetch(candyMachineId);
    const itemsAvailable = state.data.itemsAvailable.toNumber();
    const itemsRedeemed = state.itemsRedeemed.toNumber();
    const itemsRemaining = itemsAvailable - itemsRedeemed;
    return {
        id: candyMachineId,
        program,
        state: {
            itemsAvailable,
            itemsRedeemed,
            itemsRemaining,
            isSoldOut: itemsRemaining === 0,
            isActive: false,
            isPresale: false,
            isWhitelistOnly: false,
            goLiveDate: state.data.goLiveDate,
            treasury: state.wallet,
            tokenMint: state.tokenMint,
            gatekeeper: state.data.gatekeeper,
            endSettings: state.data.endSettings,
            whitelistMintSettings: state.data.whitelistMintSettings,
            hiddenSettings: state.data.hiddenSettings,
            price: state.data.price
        }
    };
};
const getMasterEdition = async (mint)=>{
    return (await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from("edition"), 
    ], TOKEN_METADATA_PROGRAM_ID))[0];
};
const getMetadata = async (mint)=>{
    return (await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(), 
    ], TOKEN_METADATA_PROGRAM_ID))[0];
};
const getCandyMachineCreator = async (candyMachine)=>{
    return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        Buffer.from("candy_machine"),
        candyMachine.toBuffer()
    ], CANDY_MACHINE_PROGRAM);
};
const mintOneToken = async (candyMachine, payer, { tokenBondingSdk , tokenBonding , maxPrice  })=>{
    if (!tokenBondingSdk) {
        throw new Error("No bonding sdk");
    }
    if (isNaN(maxPrice)) {
        throw new Error("Invalid slippage");
    }
    const mint = _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.Keypair.generate();
    const userTokenAccountAddress = (await (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getAtaForMint */ .w2)(mint.publicKey, payer))[0];
    const userPayingAccountAddress = candyMachine.state.tokenMint ? (await (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getAtaForMint */ .w2)(candyMachine.state.tokenMint, payer))[0] : payer;
    const candyMachineAddress = candyMachine.id;
    const remainingAccounts = [];
    const instructions = [];
    const signers = [
        mint
    ];
    const cleanupInstructions = [];
    const ataBalance = (await tokenBondingSdk.getTokenAccountBalance(userPayingAccountAddress)).toNumber();
    let bondingInstructions = [];
    let bondingSigners = [];
    if (ataBalance < 1) {
        console.log("Buying bonding curve...", ataBalance);
        const { instructions , signers  } = await tokenBondingSdk.buyInstructions({
            tokenBonding,
            desiredTargetAmount: 1,
            expectedBaseAmount: maxPrice,
            slippage: 0
        });
        bondingInstructions.push(...instructions);
        bondingSigners.push(...signers);
    }
    instructions.push(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SystemProgram.createAccount({
        fromPubkey: payer,
        newAccountPubkey: mint.publicKey,
        space: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.MintLayout.span,
        lamports: await candyMachine.program.provider.connection.getMinimumBalanceForRentExemption(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.MintLayout.span),
        programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID
    }), _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createInitMintInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, mint.publicKey, 0, payer, payer), createAssociatedTokenAccountInstruction(userTokenAccountAddress, payer, payer, mint.publicKey), _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createMintToInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, mint.publicKey, userTokenAccountAddress, payer, [], 1));
    if (candyMachine.state.gatekeeper) {
        remainingAccounts.push({
            pubkey: (await (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getNetworkToken */ .Gj)(payer, candyMachine.state.gatekeeper.gatekeeperNetwork))[0],
            isWritable: true,
            isSigner: false
        });
        if (candyMachine.state.gatekeeper.expireOnUse) {
            remainingAccounts.push({
                pubkey: _utils__WEBPACK_IMPORTED_MODULE_4__/* .CIVIC */ .Ex,
                isWritable: false,
                isSigner: false
            });
            remainingAccounts.push({
                pubkey: (await (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getNetworkExpire */ .T7)(candyMachine.state.gatekeeper.gatekeeperNetwork))[0],
                isWritable: false,
                isSigner: false
            });
        }
    }
    if (candyMachine.state.whitelistMintSettings) {
        const mint = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey(candyMachine.state.whitelistMintSettings.mint);
        const whitelistToken = (await (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getAtaForMint */ .w2)(mint, payer))[0];
        remainingAccounts.push({
            pubkey: whitelistToken,
            isWritable: true,
            isSigner: false
        });
        if (candyMachine.state.whitelistMintSettings.mode.burnEveryTime) {
            const whitelistBurnAuthority = _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.Keypair.generate();
            remainingAccounts.push({
                pubkey: mint,
                isWritable: true,
                isSigner: false
            });
            remainingAccounts.push({
                pubkey: whitelistBurnAuthority.publicKey,
                isWritable: false,
                isSigner: true
            });
            signers.push(whitelistBurnAuthority);
            const exists = await candyMachine.program.provider.connection.getAccountInfo(whitelistToken);
            if (exists) {
                instructions.push(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createApproveInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, whitelistToken, whitelistBurnAuthority.publicKey, payer, [], 1));
                cleanupInstructions.push(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createRevokeInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, whitelistToken, payer, []));
            }
        }
    }
    if (candyMachine.state.tokenMint) {
        const transferAuthority = _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.Keypair.generate();
        signers.push(transferAuthority);
        remainingAccounts.push({
            pubkey: userPayingAccountAddress,
            isWritable: true,
            isSigner: false
        });
        remainingAccounts.push({
            pubkey: transferAuthority.publicKey,
            isWritable: false,
            isSigner: true
        });
        instructions.push(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createApproveInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, userPayingAccountAddress, transferAuthority.publicKey, payer, [], candyMachine.state.price.toNumber()));
        cleanupInstructions.push(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.Token.createRevokeInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID, userPayingAccountAddress, payer, []));
    }
    const metadataAddress = await getMetadata(mint.publicKey);
    const masterEdition = await getMasterEdition(mint.publicKey);
    const [candyMachineCreator, creatorBump] = await getCandyMachineCreator(candyMachineAddress);
    instructions.push(await candyMachine.program.instruction.mintNft(creatorBump, {
        accounts: {
            candyMachine: candyMachineAddress,
            candyMachineCreator,
            payer: payer,
            wallet: candyMachine.state.treasury,
            mint: mint.publicKey,
            metadata: metadataAddress,
            masterEdition,
            mintAuthority: payer,
            updateAuthority: payer,
            tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
            tokenProgram: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID,
            systemProgram: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.SystemProgram.programId,
            rent: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SYSVAR_RENT_PUBKEY,
            clock: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SYSVAR_CLOCK_PUBKEY,
            recentBlockhashes: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.SYSVAR_SLOT_HASHES_PUBKEY,
            instructionSysvarAccount: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.SYSVAR_INSTRUCTIONS_PUBKEY
        },
        remainingAccounts: remainingAccounts.length > 0 ? remainingAccounts : undefined
    }));
    await (0,_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_3__.sendMultipleInstructions)(tokenBondingSdk.errors || new Map(), tokenBondingSdk.provider, [
        bondingInstructions,
        instructions,
        cleanupInstructions
    ], [
        bondingSigners,
        signers,
        []
    ], payer, "confirmed");
    return mint.publicKey;
};
const shortenAddress = (address, chars = 4)=>{
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};
const sleep = (ms)=>{
    return new Promise((resolve)=>setTimeout(resolve, ms)
    );
};


/***/ }),

/***/ 848:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _candy_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1756);
/* harmony import */ var _MintedNftNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(138);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2198);





/***/ }),

/***/ 2198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZU": () => (/* binding */ toDate),
/* harmony export */   "Tb": () => (/* binding */ SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID),
/* harmony export */   "Ex": () => (/* binding */ CIVIC),
/* harmony export */   "w2": () => (/* binding */ getAtaForMint),
/* harmony export */   "T7": () => (/* binding */ getNetworkExpire),
/* harmony export */   "Gj": () => (/* binding */ getNetworkToken)
/* harmony export */ });
/* unused harmony exports formatNumber, createAssociatedTokenAccountInstruction */
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1024);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9874);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);




const toDate = (value)=>{
    if (!value) {
        return;
    }
    return new Date(value.toNumber() * 1000);
};
const numberFormater = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
const formatNumber = {
    format: (val)=>{
        if (!val) {
            return "--";
        }
        return numberFormater.format(val);
    },
    asNumber: (val)=>{
        if (!val) {
            return undefined;
        }
        return val.toNumber() / _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL;
    }
};
const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
const CIVIC = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs");
const getAtaForMint = async (mint, buyer)=>{
    return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        buyer.toBuffer(),
        _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.TOKEN_PROGRAM_ID.toBuffer(),
        mint.toBuffer()
    ], SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID);
};
const getNetworkExpire = async (gatekeeperNetwork)=>{
    return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        gatekeeperNetwork.toBuffer(),
        Buffer.from("expire")
    ], CIVIC);
};
const getNetworkToken = async (wallet, gatekeeperNetwork)=>{
    return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.web3.PublicKey.findProgramAddress([
        wallet.toBuffer(),
        Buffer.from("gateway"),
        Buffer.from([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]),
        gatekeeperNetwork.toBuffer(), 
    ], CIVIC);
};
function createAssociatedTokenAccountInstruction(associatedTokenAddress, payer, walletAddress, splTokenMintAddress) {
    const keys = [
        {
            pubkey: payer,
            isSigner: true,
            isWritable: true
        },
        {
            pubkey: associatedTokenAddress,
            isSigner: false,
            isWritable: true
        },
        {
            pubkey: walletAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: splTokenMintAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: SystemProgram.programId,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: TOKEN_PROGRAM_ID,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false
        }, 
    ];
    return new TransactionInstruction({
        keys,
        programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        data: Buffer.from([])
    });
}


/***/ }),

/***/ 4854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ QuantityPicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);




const QuantityPicker = (props)=>{
    const { min =0 , max , rootProps , ...rest } = props;
    const [value, setValue] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useControllableState)(rest);
    const handleDecrement = ()=>setValue(value === min ? value : value - 1)
    ;
    const handleIncrement = ()=>setValue(value === max ? value : value + 1)
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
        ...rootProps,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                fontSize: "sm",
                fontWeight: "medium",
                children: "Quantity"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                borderRadius: "base",
                px: "2",
                py: "0.4375rem",
                borderWidth: "1px",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(QuantityPickerButton, {
                        onClick: handleDecrement,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiMinus, {
                        }),
                        isDisabled: value === min,
                        "aria-label": "Decrement"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                        minW: "8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            as: "span",
                            fontWeight: "semibold",
                            userSelect: "none",
                            children: value
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(QuantityPickerButton, {
                        onClick: handleIncrement,
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiPlus, {
                        }),
                        isDisabled: value === max,
                        "aria-label": "Increment"
                    })
                ]
            })
        ]
    }));
};
const QuantityPickerButton = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
        size: "sm",
        fontSize: "md",
        _focus: {
            boxShadow: "none"
        },
        _focusVisible: {
            boxShadow: "outline"
        },
        ...props
    })
;


/***/ }),

/***/ 7004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SaleItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SaleItemAdmin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5780);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _QuantityPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4854);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










async function buy(tokenBondingSdk, tokenBonding, quantity) {
    await tokenBondingSdk.buy({
        tokenBonding,
        desiredTargetAmount: quantity,
        slippage: 0.05
    });
    react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().custom((t)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.Notification, {
            show: t.visible,
            type: "success",
            heading: "Transactoin Successful",
            message: `Successfully purchased ${quantity}`,
            onDismiss: ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().dismiss(t.id)
        })
    );
}
const SaleItem = ({ mintKey , name , description , image  })=>{
    var ref, ref1;
    const { info: tokenBonding , loading: bondingLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenBondingFromMint)(mintKey);
    const { connected , publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();
    const targetMint = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const { image: targetImage , metadata: targetMetadata , data: targetData , loading: targetMetaLoading ,  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const { metadata: baseMetadata , loading: metadataLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const { pricing , loading: pricingLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useBondingPricing)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const { tokenBondingSdk  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useStrataSdks)();
    const { 0: qty , 1: setQty  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { execute , loading , error  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_5__.useAsyncCallback)(buy);
    const { awaitingApproval  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useProvider)();
    const qtyNumber = Number(qty);
    const mintCapNumber = (ref = tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.mintCap) === null || ref === void 0 ? void 0 : ref.toNumber();
    const targetSupplyNumber = targetMint === null || targetMint === void 0 ? void 0 : targetMint.supply.toNumber();
    const balance = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useOwnedAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const price = pricing === null || pricing === void 0 ? void 0 : pricing.buyTargetAmount(1);
    const total = pricing === null || pricing === void 0 ? void 0 : pricing.buyTargetAmount(Number(qty) || 1);
    const notEnoughFunds = (balance || 0) < (total || 0);
    const passedMintCap = mintCapNumber && (targetSupplyNumber || 0) >= (mintCapNumber || 0);
    const remainingAmount = (mintCapNumber || 0) - (targetSupplyNumber || 0);
    const isAdmin = publicKey && ((ref1 = tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority) === null || ref1 === void 0 ? void 0 : ref1.equals(publicKey));
    name = (targetMetadata === null || targetMetadata === void 0 ? void 0 : targetMetadata.data.name) || name;
    image = targetImage || image;
    description = (targetData === null || targetData === void 0 ? void 0 : targetData.description) || description;
    const dataMissing = !name && !image && !description;
    if (!targetMetaLoading && dataMissing) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
            height: "300px",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: "404: "
                    }),
                    " Not found"
                ]
            })
        }));
    }
    if (dataMissing) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        pt: "8",
        px: {
            base: "5",
            lg: "8"
        },
        pb: {
            base: "10",
            lg: "8"
        },
        w: "full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            direction: {
                base: "column",
                md: "row"
            },
            spacing: "8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    flex: "1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: "4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AspectRatio, {
                            ratio: 4 / 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                rounded: "md",
                                src: image,
                                objectFit: "cover",
                                alt: "Placeholder",
                                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    flex: "1",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: {
                            base: "4",
                            md: "8"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                spacing: {
                                    base: "2",
                                    md: "4"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                        spacing: "3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                            alignSelf: "start",
                                            textTransform: "none",
                                            size: "sm",
                                            fontWeight: "semibold",
                                            lineHeight: "1rem",
                                            borderRadius: "base",
                                            py: "1",
                                            px: "2",
                                            bg: "primary.500",
                                            color: "white",
                                            children: passedMintCap ? "Sold Out" : "For Sale"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                        size: "lg",
                                        fontWeight: "medium",
                                        children: name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                        direction: {
                                            base: "column",
                                            md: "row"
                                        },
                                        spacing: "1",
                                        align: "baseline",
                                        justify: "space-between",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                            spacing: "1",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                as: "span",
                                                fontSize: "lg",
                                                fontWeight: "semibold",
                                                color: "gray.700",
                                                children: [
                                                    baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol,
                                                    " ",
                                                    pricingLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
                                                        size: "xs"
                                                    }) : price === null || price === void 0 ? void 0 : price.toFixed(2)
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        color: "gray.600",
                                        whiteSpace: "pre-line",
                                        children: description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                spacing: {
                                    base: "4",
                                    md: "8"
                                },
                                align: "flex-end",
                                justify: "space-evenly",
                                children: [
                                    mintCapNumber && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        flex: "1",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                    fontSize: "sm",
                                                    fontWeight: "medium",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                                        spacing: "2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                                children: "Available"
                                                            }),
                                                            mintCapNumber && remainingAmount < mintCapNumber / 4 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                                                spacing: "1",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                                        as: react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiClock
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                                        fontSize: "xs",
                                                                        fontWeight: "medium",
                                                                        children: "Low stock"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                                    borderRadius: "base",
                                                    px: "2",
                                                    py: "0.705rem",
                                                    borderWidth: "1px",
                                                    justifyContent: "space-between",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                                        minW: "8",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                            as: "span",
                                                            fontWeight: "semibold",
                                                            userSelect: "none",
                                                            children: bondingLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
                                                                size: "xs"
                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    remainingAmount,
                                                                    " / ",
                                                                    mintCapNumber || 0
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        flex: "1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QuantityPicker__WEBPACK_IMPORTED_MODULE_9__/* .QuantityPicker */ .l, {
                                            defaultValue: 1,
                                            max: remainingAmount > 0 ? Math.round(remainingAmount / 2) : mintCapNumber ? 0 : Infinity,
                                            onChange: (num)=>setQty(num)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                spacing: "3",
                                children: [
                                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                                        status: "error",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                                            status: "error",
                                            children: error.toString()
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        isDisabled: !connected || notEnoughFunds || passedMintCap || !qtyNumber || qtyNumber <= 0,
                                        isLoading: loading,
                                        value: qty,
                                        loadingText: awaitingApproval ? "Awaiting Approval" : "Loading",
                                        onClick: ()=>{
                                            return qtyNumber && qtyNumber > 0 && execute(tokenBondingSdk, tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey, qtyNumber);
                                        },
                                        w: "full",
                                        size: "lg",
                                        colorScheme: "primary",
                                        children: !connected ? "Connect a Wallet" : notEnoughFunds ? `Not Enough ${(baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol) || "funds"}` : passedMintCap ? "Sold Out" : "Buy"
                                    }),
                                    isAdmin && tokenBonding && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SaleItemAdmin__WEBPACK_IMPORTED_MODULE_7__/* .SaleItemAdmin */ .X, {
                                        tokenBondingKey: tokenBonding.publicKey
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            children: [
                                                "Total: ",
                                                baseMetadata === null || baseMetadata === void 0 ? void 0 : baseMetadata.data.symbol,
                                                " ",
                                                pricingLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
                                                    size: "xs"
                                                }) : total,
                                                " "
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 5780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ SaleItemAdmin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9587);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AsyncButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1546);






const SaleItemAdmin = ({ tokenBondingKey  })=>{
    const { tokenBondingSdk  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useStrataSdks)();
    const { info: tokenBonding , loading: bondingLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenBonding)(tokenBondingKey);
    const account = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenAccount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseStorage);
    const mint = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const { metadata , loading: metadataLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    const amount = (account === null || account === void 0 ? void 0 : account.info) && mint && (0,_strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_4__.toNumber)(account.info.amount, mint);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
        spacing: 2,
        borderBottom: 1,
        borderBottomColor: "gray.300",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AsyncButton__WEBPACK_IMPORTED_MODULE_5__/* .AsyncButton */ .Z, {
                w: "full",
                variant: "outline",
                colorScheme: "primary",
                isDisabled: !tokenBondingSdk || !amount,
                action: ()=>tokenBondingSdk.transferReserves({
                        tokenBonding: tokenBondingKey,
                        amount: amount
                    })
                ,
                children: [
                    "Collect",
                    " ",
                    account && !(bondingLoading || metadataLoading) && `${amount === null || amount === void 0 ? void 0 : amount.toFixed(2)} ${metadata === null || metadata === void 0 ? void 0 : metadata.data.symbol}`
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AsyncButton__WEBPACK_IMPORTED_MODULE_5__/* .AsyncButton */ .Z, {
                w: "full",
                colorScheme: "red",
                isDisabled: !tokenBondingSdk || amount != 0,
                title: amount != 0 ? "Must have no remaning balance to close, run collect first" : undefined,
                action: ()=>tokenBondingSdk.close({
                        tokenBonding: tokenBondingKey
                    })
                ,
                children: "Delete Listing"
            })
        ]
    }));
};


/***/ }),

/***/ 6551:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _SaleItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7004);
/* harmony import */ var _SaleItemAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5780);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SaleItem__WEBPACK_IMPORTED_MODULE_0__]);
_SaleItem__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



});

/***/ }),

/***/ 1447:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LN": () => (/* reexport safe */ _useLivePrice__WEBPACK_IMPORTED_MODULE_3__.L),
/* harmony export */   "XU": () => (/* reexport safe */ _useEndpoint__WEBPACK_IMPORTED_MODULE_6__.X),
/* harmony export */   "JC": () => (/* reexport safe */ _useEndpoint__WEBPACK_IMPORTED_MODULE_6__.J)
/* harmony export */ });
/* harmony import */ var _useBounties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7579);
/* harmony import */ var _useTransactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2531);
/* harmony import */ var _useLinkTwitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6162);
/* harmony import */ var _useLivePrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2375);
/* harmony import */ var _useIsBountyAdmin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9744);
/* harmony import */ var _useBountyInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1271);
/* harmony import */ var _useEndpoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3635);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useEndpoint__WEBPACK_IMPORTED_MODULE_6__, _useTransactions__WEBPACK_IMPORTED_MODULE_1__]);
([_useEndpoint__WEBPACK_IMPORTED_MODULE_6__, _useTransactions__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








});

/***/ }),

/***/ 1271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useBountyInfo)
/* harmony export */ });
/* harmony import */ var _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4761);
/* harmony import */ var _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9587);
/* harmony import */ var _strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4022);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sevenoutman_use_debounced_memo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2398);
/* harmony import */ var _sevenoutman_use_debounced_memo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sevenoutman_use_debounced_memo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






function useBountyInfo(mintKey) {
    const { info: tokenBonding , loading: bondingLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_1__.useTokenBondingFromMint)(mintKey);
    const { data: targetData , metadata , loading: targetMetaLoading , image , displayName  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_1__.useTokenMetadata)(mintKey);
    const reserveAmount = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_1__.useReserveAmount)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const baseMint = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_1__.useMint)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.baseMint);
    // Debounce because this can cause it to flash a notification when reserves change at the
    // same time as bonding, but one comes through before the other.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fundsHaveBeenUsed = _sevenoutman_use_debounced_memo__WEBPACK_IMPORTED_MODULE_4___default()(()=>tokenBonding && baseMint && reserveAmount && (0,_strata_foundation_spl_token_bonding__WEBPACK_IMPORTED_MODULE_2__.toNumber)(tokenBonding.reserveBalanceFromBonding, baseMint) !== reserveAmount
    , [
        tokenBonding,
        baseMint,
        reserveAmount
    ], 500);
    const bountyClosed = _sevenoutman_use_debounced_memo__WEBPACK_IMPORTED_MODULE_4___default()(()=>Boolean(mintKey && !tokenBonding && !bondingLoading && metadata)
    , [
        mintKey,
        tokenBonding,
        bondingLoading,
        metadata
    ], 500);
    const attributes = react__WEBPACK_IMPORTED_MODULE_5___default().useMemo(()=>{
        return _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_3__.SplTokenMetadata.attributesToRecord(targetData === null || targetData === void 0 ? void 0 : targetData.attributes);
    }, [
        targetData
    ]);
    return {
        info: {
            name: displayName,
            image,
            createdAt: tokenBonding && new Date(tokenBonding.goLiveUnixTime.toNumber() * 1000),
            description: targetData === null || targetData === void 0 ? void 0 : targetData.description,
            fundsHaveBeenUsed,
            bountyClosed,
            contributed: reserveAmount,
            attributes,
            isNormalBounty: _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_0__.MarketplaceSdk.isNormalBounty(tokenBonding)
        },
        loading: bondingLoading || targetMetaLoading
    };
}


/***/ }),

/***/ 3635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getClusterAndEndpoint),
/* harmony export */   "J": () => (/* binding */ useEndpoint)
/* harmony export */ });
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1136);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3364);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__]);
([_components__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




const shortnames = new Set([
    "localnet",
    ...Object.values(_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletAdapterNetwork).map((v)=>v.toString()
    ), 
]);
function getClusterAndEndpoint(clusterOrEndpoint) {
    if (clusterOrEndpoint) {
        return {
            cluster: "mainnet-beta",
            endpoint: "https://ssc-dao.genesysgo.net/"
        };
    }
    return {
        cluster: "mainnet-beta",
        endpoint: _components__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENDPOINT */ .Am
    };
}
function useEndpoint() {
    const [clusterOrEndpoint, setCluster] = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__.useQueryString)("cluster", _components__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_ENDPOINT */ .Am);
    const { cluster: actualCluster , endpoint  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>getClusterAndEndpoint(clusterOrEndpoint)
    , [
        clusterOrEndpoint
    ]);
    return {
        cluster: actualCluster,
        endpoint,
        setClusterOrEndpoint: setCluster
    };
}

});

/***/ }),

/***/ 9744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useIsBountyAdmin)
/* harmony export */ });
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__);

function useIsBountyAdmin(wallet, tokenBondingKey) {
    var ref, ref1;
    const { info: tokenBonding , loading: bondingLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__.useTokenBonding)(tokenBondingKey);
    const { info: governance , loading: governanceLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__.useGovernance)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority);
    const { metadata: targetMetadata , loading: targetMetaLoading ,  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__.useTokenMetadata)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.targetMint);
    const { info: tokenRef , loading: tokenRefLoading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__.useTokenRef)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority);
    // Was an unclaimed social token that was the authority over this
    const isTokenRefAuthority = tokenRef && wallet && ((ref = tokenRef.authority) === null || ref === void 0 ? void 0 : ref.equals(wallet));
    return {
        loading: targetMetaLoading || bondingLoading || governanceLoading || tokenRefLoading,
        isAdmin: Boolean(wallet && ((ref1 = tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.reserveAuthority) === null || ref1 === void 0 ? void 0 : ref1.equals(wallet)) || governance || isTokenRefAuthority),
        isEditor: Boolean((targetMetadata === null || targetMetadata === void 0 ? void 0 : targetMetadata.updateAuthority) && targetMetadata.updateAuthority == (wallet === null || wallet === void 0 ? void 0 : wallet.toBase58()))
    };
}


/***/ }),

/***/ 6162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$9": () => (/* binding */ useLinkTwitter)
/* harmony export */ });
/* unused harmony exports auth0Options, auth0 */
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5514);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(163);


const auth0Options = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN || "wumbo.us.auth0.com",
    maxAge: 1,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID || "GPsjYroOyNKWCScIk2woGZi4kBTGDDTW"
};
function makeId(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for(var i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_0__.WebAuth(auth0Options);
function useLinkTwitter(redirectUri = _constants__WEBPACK_IMPORTED_MODULE_1__/* .SITE_URL */ ._O) {
    const execute = ()=>{
        const state = makeId(6);
        localStorage.setItem("state", state);
        localStorage.setItem("redirectUri", redirectUri);
        auth0.authorize({
            scope: "openid profile",
            redirectUri,
            responseType: "code",
            prompt: "login",
            state
        });
    };
    return {
        redirectUri,
        execute
    };
}


/***/ }),

/***/ 2375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useLivePrice)
/* harmony export */ });
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useLivePrice(tokenBondingKey) {
    const { pricing , loading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__.useBondingPricing)(tokenBondingKey);
    const { 0: currentPrice , 1: setCurrentPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_0__.useInterval)(()=>{
        if (pricing) {
            setCurrentPrice(pricing.current());
        }
    }, 500);
    return {
        loading,
        price: currentPrice
    };
}


/***/ }),

/***/ 2531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useTransactions)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



async function getSignatures(connection, address, until, lastSignature, maxSignatures = 1000) {
    if (!connection || !address) {
        return [];
    }
    const fetchSize = Math.min(1000, maxSignatures);
    const signatures = await connection.getSignaturesForAddress(address, {
        before: lastSignature,
        limit: fetchSize
    });
    const withinTime = signatures.filter((sig)=>{
        return (sig.blockTime || 0) > ((until === null || until === void 0 ? void 0 : until.valueOf()) || 0) / 1000;
    });
    if (withinTime.length == 1000) {
        return [
            ...withinTime,
            ...await getSignatures(connection, address, until, signatures[signatures.length - 1].signature, maxSignatures), 
        ];
    }
    return withinTime;
}
async function hydrateTransactions(connection, signatures) {
    if (!connection) {
        return [];
    }
    const sorted = signatures.sort((a, b)=>(b.blockTime || 0) - (a.blockTime || 0)
    );
    return (await Promise.all(sorted.map(async (s)=>{
        const ret = await connection.getTransaction(s.signature);
        // @ts-ignore
        ret.signature = s.signature;
        return ret;
    }))).filter(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_1__.truthy);
}
const useTransactions = ({ numTransactions , until , address  })=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useConnection)();
    const { 0: loadingInitial , 1: setLoadingInitial  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: loadingMore , 1: setLoadingMore  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: transactions , 1: setTransactions  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const addrStr = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return address === null || address === void 0 ? void 0 : address.toBase58();
    }, [
        address
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (async ()=>{
            setLoadingInitial(true);
            setTransactions([]);
            try {
                const signatures = await getSignatures(connection, address, until, undefined, numTransactions);
                setTransactions(await hydrateTransactions(connection, signatures));
            } catch (e) {
                setError(e);
            } finally{
                setLoadingInitial(false);
            }
        })();
    }, [
        connection,
        addrStr,
        until,
        setTransactions,
        numTransactions
    ]);
    const fetchMore = async (num)=>{
        setLoadingMore(true);
        try {
            const lastTx = transactions[transactions.length - 1];
            const signatures = await getSignatures(connection, address, until, lastTx && lastTx.transaction.signatures[0], num);
            const newTxns = await hydrateTransactions(connection, signatures);
            setTransactions((txns)=>[
                    ...txns,
                    ...newTxns
                ]
            );
        } catch (e) {
            setError(e);
        } finally{
            setLoadingMore(false);
        }
    };
    const fetchNew = async (num)=>{
        setLoadingMore(true);
        try {
            const earlyTx = transactions[0];
            const earlyBlockTime = earlyTx && earlyTx.blockTime;
            let lastDate = until;
            if (earlyBlockTime) {
                const date = new Date(0);
                date.setUTCSeconds(earlyBlockTime);
                lastDate = date;
            }
            const signatures = await getSignatures(connection, address, lastDate, undefined, num);
            const newTxns = await hydrateTransactions(connection, signatures);
            setTransactions((txns)=>[
                    ...newTxns,
                    ...txns
                ]
            );
        } catch (e) {
            setError(e);
        } finally{
            setLoadingMore(false);
        }
    };
    return {
        transactions,
        error,
        loadingInitial,
        loadingMore,
        fetchMore,
        fetchNew
    };
};

});

/***/ })

};
;