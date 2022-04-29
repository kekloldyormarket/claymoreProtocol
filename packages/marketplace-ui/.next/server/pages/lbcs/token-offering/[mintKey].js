"use strict";
(() => {
var exports = {};
exports.id = 866;
exports.ids = [866];
exports.modules = {

/***/ 2952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "LbcDisplay": () => (/* binding */ LbcDisplay),
/* harmony export */   "DarkModeDisplay": () => (/* binding */ DarkModeDisplay),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DisburseFunds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6687);
/* harmony import */ var _components_lbc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4201);
/* harmony import */ var _components_lbc_LbcInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6749);
/* harmony import */ var _components_MetadataMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6334);
/* harmony import */ var _components_TokenOffering__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1331);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(163);
/* harmony import */ var _hooks_useIsBountyAdmin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9744);
/* harmony import */ var _hooks_useLivePrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2375);
/* harmony import */ var _utils_tokenMetadataServerProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7217);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1247);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_lbc__WEBPACK_IMPORTED_MODULE_2__, _components_DisburseFunds__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__, _utils_tokenMetadataServerProps__WEBPACK_IMPORTED_MODULE_9__]);
([_components_lbc__WEBPACK_IMPORTED_MODULE_2__, _components_DisburseFunds__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__, _utils_tokenMetadataServerProps__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);















const getServerSideProps = _utils_tokenMetadataServerProps__WEBPACK_IMPORTED_MODULE_9__/* .mintMetadataServerSideProps */ .$;
const LbcDisplay = ({ name , image , description  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const { mintKey: mintKeyRaw  } = router.query;
    const mintKey = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_12__.usePublicKey)(mintKeyRaw);
    const { info: tokenBonding , loading  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_12__.useTokenBondingFromMint)(mintKey);
    const { price  } = (0,_hooks_useLivePrice__WEBPACK_IMPORTED_MODULE_8__/* .useLivePrice */ .L)(tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__.useWallet)();
    const { isAdmin  } = (0,_hooks_useIsBountyAdmin__WEBPACK_IMPORTED_MODULE_7__/* .useIsBountyAdmin */ .Y)(publicKey || undefined, tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey);
    const selectedProps = {
        borderBottom: "3px solid #F07733"
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {
        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.useColorModeValue)("black", "white"),
        w: "full",
        backgroundColor: "black.500",
        height: "100vh",
        overflow: "auto",
        paddingBottom: "200px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MetadataMeta__WEBPACK_IMPORTED_MODULE_4__/* .MetadataMeta */ .y, {
                title: `Strata LBC Token Offering | ${name}`,
                description: description,
                image: image,
                url: `${_constants__WEBPACK_IMPORTED_MODULE_6__/* .SITE_URL */ ._O}/bounty/${mintKey}/`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.VStack, {
                spacing: 2,
                align: "left",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Container, {
                    mt: "35px",
                    justify: "stretch",
                    maxW: "460px",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Tabs, {
                        varaint: "unstyled",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.TabList, {
                                borderBottom: "none",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Tab, {
                                        _selected: selectedProps,
                                        fontWeight: 600,
                                        children: "Swap"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Tab, {
                                        _selected: selectedProps,
                                        fontWeight: 600,
                                        children: "Transactions"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.TabPanels, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.TabPanel, {
                                        p: 0,
                                        pt: 4,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_lbc__WEBPACK_IMPORTED_MODULE_2__/* .LbcStatus */ .Zg, {
                                                tokenBondingKey: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                                zIndex: 1,
                                                shadow: "xl",
                                                rounded: "lg",
                                                p: "16px",
                                                pb: "29px",
                                                minH: "300px",
                                                bg: "black.300",
                                                children: [
                                                    isAdmin && tokenBonding && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                                        p: 4,
                                                        borderBottom: "3px solid",
                                                        borderRadius: "lg",
                                                        borderColor: "gray.300",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Heading, {
                                                                size: "md",
                                                                children: "Disburse Funds"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DisburseFunds__WEBPACK_IMPORTED_MODULE_1__/* .DisburseFunds */ .Z, {
                                                                tokenBondingKey: tokenBonding === null || tokenBonding === void 0 ? void 0 : tokenBonding.publicKey,
                                                                includeRetrievalCurve: true
                                                            })
                                                        ]
                                                    }),
                                                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Center, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Spinner, {
                                                        })
                                                    }),
                                                    !loading && tokenBonding && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.VStack, {
                                                        align: "stretch",
                                                        spacing: 8,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_lbc_LbcInfo__WEBPACK_IMPORTED_MODULE_3__/* .LbcInfo */ .y, {
                                                                price: price,
                                                                tokenBondingKey: tokenBonding.publicKey,
                                                                useTokenOfferingCurve: true
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TokenOffering__WEBPACK_IMPORTED_MODULE_5__/* .TokenOffering */ .z, {
                                                                mintKey: mintKey
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.TabPanel, {
                                        p: 0,
                                        pt: 4,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                            zIndex: 1,
                                            shadow: "xl",
                                            rounded: "lg",
                                            p: "16px",
                                            pb: "29px",
                                            minH: "300px",
                                            bg: "black.300",
                                            children: [
                                                loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Center, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Spinner, {
                                                    })
                                                }),
                                                !loading && tokenBonding && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.VStack, {
                                                    align: "stretch",
                                                    spacing: 8,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_lbc__WEBPACK_IMPORTED_MODULE_2__/* .BondingPlot */ .zj, {
                                                            tokenBondingKey: tokenBonding.publicKey
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_lbc__WEBPACK_IMPORTED_MODULE_2__/* .TransactionHistory */ .cQ, {
                                                            tokenBondingKey: tokenBonding.publicKey
                                                        })
                                                    ]
                                                })
                                            ]
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
const DarkModeDisplay = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.DarkMode, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LbcDisplay, {
            ...props
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkModeDisplay);

});

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 5525:
/***/ ((module) => {

module.exports = require("@bonfida/spl-name-service");

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2242:
/***/ ((module) => {

module.exports = require("@glasseaters/hydra-sdk");

/***/ }),

/***/ 9817:
/***/ ((module) => {

module.exports = require("@metaplex-foundation/mpl-token-metadata");

/***/ }),

/***/ 537:
/***/ ((module) => {

module.exports = require("@metaplex/arweave-cost");

/***/ }),

/***/ 1024:
/***/ ((module) => {

module.exports = require("@project-serum/anchor");

/***/ }),

/***/ 3929:
/***/ ((module) => {

module.exports = require("@project-serum/anchor/dist/cjs/nodewallet");

/***/ }),

/***/ 6365:
/***/ ((module) => {

module.exports = require("@project-serum/serum");

/***/ }),

/***/ 2398:
/***/ ((module) => {

module.exports = require("@sevenoutman/use-debounced-memo");

/***/ }),

/***/ 7362:
/***/ ((module) => {

module.exports = require("@solana/buffer-layout");

/***/ }),

/***/ 3111:
/***/ ((module) => {

module.exports = require("@solana/spl-governance");

/***/ }),

/***/ 3663:
/***/ ((module) => {

module.exports = require("@solana/spl-name-service");

/***/ }),

/***/ 9874:
/***/ ((module) => {

module.exports = require("@solana/spl-token");

/***/ }),

/***/ 9263:
/***/ ((module) => {

module.exports = require("@solana/spl-token-registry");

/***/ }),

/***/ 7831:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ 5514:
/***/ ((module) => {

module.exports = require("auth0-js");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4215:
/***/ ((module) => {

module.exports = require("bignumber.js");

/***/ }),

/***/ 2961:
/***/ ((module) => {

module.exports = require("bn.js");

/***/ }),

/***/ 390:
/***/ ((module) => {

module.exports = require("bs58");

/***/ }),

/***/ 9031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 6974:
/***/ ((module) => {

module.exports = require("debug");

/***/ }),

/***/ 5502:
/***/ ((module) => {

module.exports = require("eventemitter3");

/***/ }),

/***/ 2733:
/***/ ((module) => {

module.exports = require("fuse.js");

/***/ }),

/***/ 8306:
/***/ ((module) => {

module.exports = require("jayson/lib/client/browser");

/***/ }),

/***/ 468:
/***/ ((module) => {

module.exports = require("js-sha3");

/***/ }),

/***/ 1737:
/***/ ((module) => {

module.exports = require("localstorage-memory");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9103:
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("react-async-hook");

/***/ }),

/***/ 1400:
/***/ ((module) => {

module.exports = require("react-circular-progressbar");

/***/ }),

/***/ 4449:
/***/ ((module) => {

module.exports = require("react-countdown");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3655:
/***/ ((module) => {

module.exports = require("recharts");

/***/ }),

/***/ 7201:
/***/ ((module) => {

module.exports = require("rpc-websockets");

/***/ }),

/***/ 7984:
/***/ ((module) => {

module.exports = require("secp256k1");

/***/ }),

/***/ 8311:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 2738:
/***/ ((module) => {

module.exports = require("text-encoding-utf-8");

/***/ }),

/***/ 1707:
/***/ ((module) => {

module.exports = require("tweetnacl");

/***/ }),

/***/ 4269:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 6464:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 3364:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ 1247:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 8847:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 7280:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-wallets");;

/***/ }),

/***/ 558:
/***/ ((module) => {

module.exports = import("js-base64");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 9491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [452,884,186,761,300,31,684,948,324,227,892,822,43,947,107,830,34,403,669,217,507], () => (__webpack_exec__(2952)));
module.exports = __webpack_exports__;

})();