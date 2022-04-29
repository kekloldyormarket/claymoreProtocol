(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);

const defaultSeo = {
    title: "Claymore Protocol",
    description: "Claymore Protocol enables anyone to launch a token around a person, idea, or collective in minutes",
    openGraph: {
        url: _constants__WEBPACK_IMPORTED_MODULE_0__/* .SITE_URL */ ._O,
        title: "Claymore Protocol",
        description: "Launch a token around a person, project, idea, or collective in minutes",
        images: [
            {
                url: `${_constants__WEBPACK_IMPORTED_MODULE_0__/* .SITE_URL */ ._O}/seoDefaultCardImage.jpg`,
                width: 800,
                height: 600,
                alt: "Og Image Alt",
                type: "image/jpeg"
            }, 
        ],
        site_name: "StrataLaunchpad"
    },
    twitter: {
        handle: "@StrataProtocol",
        site: _constants__WEBPACK_IMPORTED_MODULE_0__/* .SITE_URL */ ._O,
        cardType: "summary_large_image"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultSeo);


/***/ }),

/***/ 5118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_bufferFill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3748);
/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7634);
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9958);
/* harmony import */ var _src_components_Providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7323);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3599);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(163);
/* harmony import */ var _src_utils_gtag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2740);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7404);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Header__WEBPACK_IMPORTED_MODULE_6__, _src_components_Providers__WEBPACK_IMPORTED_MODULE_8__]);
([_src_components_Header__WEBPACK_IMPORTED_MODULE_6__, _src_components_Providers__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













// Use require instead of import since order matters
__webpack_require__(4347);
__webpack_require__(4842);
__webpack_require__(8295);
const App = ({ Component , pageProps  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            /* invoke analytics function only for production */ if (_src_constants__WEBPACK_IMPORTED_MODULE_10__/* .IS_PRODUCTION */ .Mw) _src_utils_gtag__WEBPACK_IMPORTED_MODULE_11__/* .pageview */ .L(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_Providers__WEBPACK_IMPORTED_MODULE_8__/* .Providers */ .C, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.DefaultSeo, {
                ..._next_seo_config__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Header__WEBPACK_IMPORTED_MODULE_6__/* .Header */ .h, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_9__.BrowserView, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {
                    position: "bottom-left",
                    containerStyle: {
                        width: "420px"
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_9__.MobileView, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {
                    position: "bottom-center",
                    containerStyle: {
                        margin: "0 auto",
                        width: "90%",
                        maxWidth: "420px"
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_7__/* .Footer */ .$, {
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

});

/***/ }),

/***/ 3748:
/***/ (() => {

"use strict";

;// CONCATENATED MODULE: external "buffer"
const external_buffer_namespaceObject = require("buffer");
;// CONCATENATED MODULE: ./src/components/bufferFill.ts

// @ts-ignore
if (false) {}


/***/ }),

/***/ 2740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ pageview)
/* harmony export */ });
/* unused harmony export event */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    window.gtag("config", _constants__WEBPACK_IMPORTED_MODULE_0__/* .GA_TRACKING_ID */ .vt, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action , category , label , value  })=>{
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value
    });
};


/***/ }),

/***/ 4842:
/***/ (() => {



/***/ }),

/***/ 8295:
/***/ (() => {



/***/ }),

/***/ 4347:
/***/ (() => {



/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 5525:
/***/ ((module) => {

"use strict";
module.exports = require("@bonfida/spl-name-service");

/***/ }),

/***/ 4513:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2242:
/***/ ((module) => {

"use strict";
module.exports = require("@glasseaters/hydra-sdk");

/***/ }),

/***/ 9817:
/***/ ((module) => {

"use strict";
module.exports = require("@metaplex-foundation/mpl-token-metadata");

/***/ }),

/***/ 537:
/***/ ((module) => {

"use strict";
module.exports = require("@metaplex/arweave-cost");

/***/ }),

/***/ 1024:
/***/ ((module) => {

"use strict";
module.exports = require("@project-serum/anchor");

/***/ }),

/***/ 6365:
/***/ ((module) => {

"use strict";
module.exports = require("@project-serum/serum");

/***/ }),

/***/ 2398:
/***/ ((module) => {

"use strict";
module.exports = require("@sevenoutman/use-debounced-memo");

/***/ }),

/***/ 7362:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/buffer-layout");

/***/ }),

/***/ 3111:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/spl-governance");

/***/ }),

/***/ 3663:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/spl-name-service");

/***/ }),

/***/ 9874:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/spl-token");

/***/ }),

/***/ 9263:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/spl-token-registry");

/***/ }),

/***/ 7831:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ 5514:
/***/ ((module) => {

"use strict";
module.exports = require("auth0-js");

/***/ }),

/***/ 4215:
/***/ ((module) => {

"use strict";
module.exports = require("bignumber.js");

/***/ }),

/***/ 2961:
/***/ ((module) => {

"use strict";
module.exports = require("bn.js");

/***/ }),

/***/ 390:
/***/ ((module) => {

"use strict";
module.exports = require("bs58");

/***/ }),

/***/ 9031:
/***/ ((module) => {

"use strict";
module.exports = require("cross-fetch");

/***/ }),

/***/ 6974:
/***/ ((module) => {

"use strict";
module.exports = require("debug");

/***/ }),

/***/ 5502:
/***/ ((module) => {

"use strict";
module.exports = require("eventemitter3");

/***/ }),

/***/ 2733:
/***/ ((module) => {

"use strict";
module.exports = require("fuse.js");

/***/ }),

/***/ 8306:
/***/ ((module) => {

"use strict";
module.exports = require("jayson/lib/client/browser");

/***/ }),

/***/ 468:
/***/ ((module) => {

"use strict";
module.exports = require("js-sha3");

/***/ }),

/***/ 1737:
/***/ ((module) => {

"use strict";
module.exports = require("localstorage-memory");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9103:
/***/ ((module) => {

"use strict";
module.exports = require("query-string");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3188:
/***/ ((module) => {

"use strict";
module.exports = require("react-async-hook");

/***/ }),

/***/ 1400:
/***/ ((module) => {

"use strict";
module.exports = require("react-circular-progressbar");

/***/ }),

/***/ 4449:
/***/ ((module) => {

"use strict";
module.exports = require("react-countdown");

/***/ }),

/***/ 3599:
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ 8922:
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 8098:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ri");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3655:
/***/ ((module) => {

"use strict";
module.exports = require("recharts");

/***/ }),

/***/ 7201:
/***/ ((module) => {

"use strict";
module.exports = require("rpc-websockets");

/***/ }),

/***/ 7984:
/***/ ((module) => {

"use strict";
module.exports = require("secp256k1");

/***/ }),

/***/ 8311:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 2738:
/***/ ((module) => {

"use strict";
module.exports = require("text-encoding-utf-8");

/***/ }),

/***/ 1707:
/***/ ((module) => {

"use strict";
module.exports = require("tweetnacl");

/***/ }),

/***/ 4269:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 6464:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 1908:
/***/ ((module) => {

"use strict";
module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 3364:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ 1247:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 8847:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 7280:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 9491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 4300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 9796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [452,884,186,761,300,31,684,948,324,227,892,822,43,947,107,830,34,403,669], () => (__webpack_exec__(5118)));
module.exports = __webpack_exports__;

})();