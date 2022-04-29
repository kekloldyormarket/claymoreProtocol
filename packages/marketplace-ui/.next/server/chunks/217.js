"use strict";
exports.id = 217;
exports.ids = [217];
exports.modules = {

/***/ 7217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ mintMetadataServerSideProps)
/* harmony export */ });
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1024);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_serum_anchor_dist_cjs_nodewallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3929);
/* harmony import */ var _project_serum_anchor_dist_cjs_nodewallet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor_dist_cjs_nodewallet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7834);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4022);
/* harmony import */ var _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9817);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1447);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(558);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _strata_foundation_web3_token_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1252);
/* harmony import */ var _strata_foundation_web3_token_auth__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_strata_foundation_web3_token_auth__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Wallet__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_6__, js_base64__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Wallet__WEBPACK_IMPORTED_MODULE_3__, _hooks__WEBPACK_IMPORTED_MODULE_6__, js_base64__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










async function getToken() {
    if (true) {
        const token = js_base64__WEBPACK_IMPORTED_MODULE_7__.Base64.encode(`${""}:${""}`);
        const { access_token  } = (await axios__WEBPACK_IMPORTED_MODULE_8___default().post(`${"https://auth.genesysgo.net/auth/realms/RPCs/protocol/openid-connect"}/token`, "grant_type=client_credentials", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${token}`
            }
        })).data;
        return access_token;
    }
    return "";
}
const mintMetadataServerSideProps = async (context)=>{
    var ref, ref1, ref2;
    const { endpoint  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .getClusterAndEndpoint */ .XU)(context.query.cluster || _components_Wallet__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_ENDPOINT */ .Am);
    const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Connection(endpoint, {
        fetchMiddleware: (0,_strata_foundation_web3_token_auth__WEBPACK_IMPORTED_MODULE_9__.tokenAuthFetchMiddleware)({
            getToken
        })
    });
    const provider = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.Provider(connection, new (_project_serum_anchor_dist_cjs_nodewallet__WEBPACK_IMPORTED_MODULE_2___default())(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Keypair.generate()), {
    });
    const mint = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey((ref = context.params) === null || ref === void 0 ? void 0 : ref.mintKey);
    const tokenMetadataSdk = await _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_4__.SplTokenMetadata.init(provider);
    const metadataAcc = await tokenMetadataSdk.getMetadata(await _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5__.Metadata.getPDA(mint));
    let metadata = null;
    try {
        metadata = await _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_4__.SplTokenMetadata.getArweaveMetadata(metadataAcc === null || metadataAcc === void 0 ? void 0 : metadataAcc.data.uri);
    } catch (e) {
        console.error(e);
    }
    const name = (metadataAcc === null || metadataAcc === void 0 ? void 0 : (ref1 = metadataAcc.data) === null || ref1 === void 0 ? void 0 : ref1.name.length) == 32 ? metadata === null || metadata === void 0 ? void 0 : metadata.name : metadataAcc === null || metadataAcc === void 0 ? void 0 : (ref2 = metadataAcc.data) === null || ref2 === void 0 ? void 0 : ref2.name;
    return {
        props: {
            name: name || null,
            description: (metadata === null || metadata === void 0 ? void 0 : metadata.description) || null,
            image: await _strata_foundation_spl_utils__WEBPACK_IMPORTED_MODULE_4__.SplTokenMetadata.getImage(metadataAcc === null || metadataAcc === void 0 ? void 0 : metadataAcc.data.uri) || null
        }
    };
};

});

/***/ }),

/***/ 1252:
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
exports.tokenAuthFetchMiddleware = exports.LocalTokenStorage = void 0;
const storage = typeof localStorage !== "undefined"
    ? localStorage
    : __webpack_require__(1737);
class LocalTokenStorage {
    setToken(token) {
        storage.setItem("auth-token", token);
        storage.setItem("last-set", new Date().valueOf());
    }
    getTimeSinceLastSet() {
        if (storage.getItem("last-set")) {
            return new Date().valueOf() - Number(storage.getItem("last-set"));
        }
        return null;
    }
    getToken() {
        return storage.getItem("auth-token");
    }
}
exports.LocalTokenStorage = LocalTokenStorage;
function tokenAuthFetchMiddleware({ tokenStorage = new LocalTokenStorage(), tokenExpiry = 5 * 60 * 1000, // 5 minutes
getToken }) {
    return (url, options, fetch) => {
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = tokenStorage.getToken();
                const timeSinceLastSet = tokenStorage.getTimeSinceLastSet();
                const tokenIsValid = token && timeSinceLastSet && timeSinceLastSet < tokenExpiry;
                if (!tokenIsValid) {
                    tokenStorage.setToken(yield getToken());
                }
            }
            catch (e) {
                console.error(e);
            }
            fetch(url, Object.assign(Object.assign({}, (options || {})), { headers: Object.assign(Object.assign({}, (options || {}).headers), { "Authorization": "Bearer " + tokenStorage.getToken() }) }));
        }))();
    };
}
exports.tokenAuthFetchMiddleware = tokenAuthFetchMiddleware;
//# sourceMappingURL=index.js.map

/***/ })

};
;