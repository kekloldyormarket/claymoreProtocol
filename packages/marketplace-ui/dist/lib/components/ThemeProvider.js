"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_3 = require("@strata-foundation/react");
const ThemeProvider = ({ children }) => (react_1.default.createElement(react_2.ChakraProvider, { resetCSS: true, theme: react_3.theme }, children));
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map