"use strict";
exports.id = 324;
exports.ids = [324];
exports.modules = {

/***/ 9324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ TokenMintDecimalsInputs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _FormControlWithError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5109);
/* harmony import */ var _RadioCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1031);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const TokenMintDecimalsInputs = ({ maxDecimals =12  })=>{
    const { watch , formState: { errors  } , setValue , clearErrors ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
    const { getRootProps , getRadioProps  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useRadioGroup)({
        name: "decimals",
        onChange: (value)=>{
            setValue("decimals", +value);
            clearErrors("decimals");
        }
    });
    const decimals = watch("decimals");
    const group = getRootProps();
    const decimalOptions = Array.from(Array(maxDecimals + 1)).map((_, index)=>({
            value: index,
            heading: index
        })
    );
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormControlWithError__WEBPACK_IMPORTED_MODULE_4__/* .FormControlWithError */ .H, {
            id: "decimals",
            label: "Mint Decimals",
            errors: errors,
            help: "The number of decimal places this mint will have. For example, SOL has 9 decimal places of precision. 0 is best used for 1:1 items like raffle tickets, collectibles, or something redeemable.",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                ...group,
                direction: "row",
                flexWrap: "wrap",
                spacing: 0,
                children: decimalOptions.map(({ value , heading  })=>{
                    const radio = getRadioProps({
                        value
                    });
                    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_RadioCard__WEBPACK_IMPORTED_MODULE_5__/* .RadioCard */ .R, {
                        ...radio,
                        isChecked: decimals === value,
                        key: value,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                            w: 10,
                            h: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                fontWeight: "bold",
                                fontSize: "md",
                                children: heading
                            })
                        })
                    }));
                })
            })
        })
    }));
};

});

/***/ })

};
;