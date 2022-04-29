"use strict";
(() => {
var exports = {};
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 558:
/***/ ((module) => {

module.exports = import("js-base64");;

/***/ }),

/***/ 5184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(558);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils_initMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_base64__WEBPACK_IMPORTED_MODULE_0__]);
js_base64__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const domain =  false ? 0 : "strataprotocol.com$";
// Initialize the cors middleware
const cors = (0,_src_utils_initMiddleware__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_2___default()({
    // Only allow requests with GET
    methods: [
        "GET"
    ],
    origin: [
        new RegExp(`\.${domain}`),
        new RegExp(domain), 
    ]
}));
async function handler(req, res) {
    await cors(req, res);
    const token = js_base64__WEBPACK_IMPORTED_MODULE_0__.Base64.encode(`${""}:${""}`);
    try {
        const { access_token  } = (await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${"https://auth.genesysgo.net/auth/realms/RPCs/protocol/openid-connect"}/token`, "grant_type=client_credentials", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${token}`
            }
        })).data;
        res.status(200).json({
            access_token
        });
    } catch (e) {
        console.log(e);
        res.status(500);
    }
};

});

/***/ }),

/***/ 3594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ initMiddleware)
/* harmony export */ });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
    return (req, res)=>new Promise((resolve, reject)=>{
            middleware(req, res, (result)=>{
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        })
    ;
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5184));
module.exports = __webpack_exports__;

})();