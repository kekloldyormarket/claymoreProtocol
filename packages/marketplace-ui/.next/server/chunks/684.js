"use strict";
exports.id = 684;
exports.ids = [684];
exports.modules = {

/***/ 9684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AE": () => (/* binding */ MarketplaceSdkProvider),
/* harmony export */   "T7": () => (/* binding */ useMarketplaceSdk)
/* harmony export */ });
/* unused harmony exports MarketplaceSdkContext, MarketplaceSdkProviderRaw */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1024);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4761);
/* harmony import */ var _strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1186);
/* harmony import */ var _strata_foundation_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_5__);






const MarketplaceSdkContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createContext({
    loading: true
});
async function tryProm(prom) {
    try {
        return await prom;
    } catch (e) {
        console.error(e);
    }
    return undefined;
}
async function getSdk(provider) {
    if (!provider) {
        return undefined;
    }
    return tryProm(_strata_foundation_marketplace_sdk__WEBPACK_IMPORTED_MODULE_2__.MarketplaceSdk.init(provider));
}
const MarketplaceSdkProviderRaw = ({ children  })=>{
    const { provider  } = (0,_strata_foundation_react__WEBPACK_IMPORTED_MODULE_3__.useProvider)();
    const { result , loading , error  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_5__.useAsync)(getSdk, [
        provider
    ]);
    const sdks = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>({
            marketplaceSdk: result,
            error,
            loading
        })
    , [
        result,
        loading,
        error
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarketplaceSdkContext.Provider, {
        value: sdks,
        children: children
    }));
};
const MarketplaceSdkProvider = ({ children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarketplaceSdkProviderRaw, {
        children: children
    }));
};
const useMarketplaceSdk = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(MarketplaceSdkContext);
};


/***/ })

};
;