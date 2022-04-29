"use strict";
exports.id = 227;
exports.ids = [227];
exports.modules = {

/***/ 9227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ disclosuresSchema),
/* harmony export */   "M": () => (/* binding */ Disclosures)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const disclosuresSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object({
    notASecurity: yup__WEBPACK_IMPORTED_MODULE_4__.boolean().required().isTrue(),
    acceptedFees: yup__WEBPACK_IMPORTED_MODULE_4__.boolean().required().isTrue()
});
const Disclosures = ({ fees  })=>{
    var ref, ref1;
    const { register , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
        spacing: 2,
        w: "full",
        align: "left",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                isInvalid: !!((ref = errors.disclosures) === null || ref === void 0 ? void 0 : ref.notASecurity),
                ...register("disclosures.notASecurity"),
                children: "I represent that I have undertaken sufficient legal analysis to determine that the token does not constitute a security under U.S. law."
            }),
            fees && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                isInvalid: !!((ref1 = errors.disclosures) === null || ref1 === void 0 ? void 0 : ref1.acceptedFees),
                ...register("disclosures.acceptedFees"),
                children: [
                    "I understand that Strata will take a ",
                    fees,
                    "% fee on tokens sold."
                ]
            })
        ]
    }));
};

});

/***/ })

};
;