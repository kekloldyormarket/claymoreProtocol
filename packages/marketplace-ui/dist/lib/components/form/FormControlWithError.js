"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormControlWithError = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
function FormControlWithError(_a) {
    var _b, _c;
    var { id, label, help, children, errors } = _a, rest = __rest(_a, ["id", "label", "help", "children", "errors"]);
    return react_2.default.createElement(react_1.FormControl, Object.assign({ id: id }, rest),
        label && react_2.default.createElement(react_1.FormLabel, { htmlFor: id }, label),
        children,
        (errors[id] || help) && react_2.default.createElement(react_1.FormHelperText, { color: ((_b = errors[id]) === null || _b === void 0 ? void 0 : _b.message) && "red.400" }, ((_c = errors[id]) === null || _c === void 0 ? void 0 : _c.message) || help));
}
exports.FormControlWithError = FormControlWithError;
//# sourceMappingURL=FormControlWithError.js.map