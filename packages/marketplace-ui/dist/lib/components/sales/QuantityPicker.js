"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantityPicker = void 0;
const react_1 = require("@chakra-ui/react");
const React = __importStar(require("react"));
const fi_1 = require("react-icons/fi");
const QuantityPicker = (props) => {
    const { min = 0, max, rootProps } = props, rest = __rest(props, ["min", "max", "rootProps"]);
    const [value, setValue] = (0, react_1.useControllableState)(rest);
    const handleDecrement = () => setValue(value === min ? value : value - 1);
    const handleIncrement = () => setValue(value === max ? value : value + 1);
    return (React.createElement(react_1.FormControl, Object.assign({}, rootProps),
        React.createElement(react_1.FormLabel, { fontSize: "sm", fontWeight: "medium" }, "Quantity"),
        React.createElement(react_1.Flex, { borderRadius: "base", px: "2", py: "0.4375rem", borderWidth: "1px", justifyContent: "space-between" },
            React.createElement(QuantityPickerButton, { onClick: handleDecrement, icon: React.createElement(fi_1.FiMinus, null), isDisabled: value === min, "aria-label": "Decrement" }),
            React.createElement(react_1.Center, { minW: "8" },
                React.createElement(react_1.Text, { as: "span", fontWeight: "semibold", userSelect: "none" }, value)),
            React.createElement(QuantityPickerButton, { onClick: handleIncrement, icon: React.createElement(fi_1.FiPlus, null), isDisabled: value === max, "aria-label": "Increment" }))));
};
exports.QuantityPicker = QuantityPicker;
const QuantityPickerButton = (props) => (React.createElement(react_1.IconButton, Object.assign({ size: "sm", fontSize: "md", _focus: { boxShadow: "none" }, _focusVisible: { boxShadow: "outline" } }, props)));
//# sourceMappingURL=QuantityPicker.js.map