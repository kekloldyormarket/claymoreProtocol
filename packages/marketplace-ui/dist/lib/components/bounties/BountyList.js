"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BountyList = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const BountyList = ({ children }) => {
    return (react_1.default.createElement(react_2.VStack, { align: "left", rounded: "lg", spacing: 0, backgroundColor: "white", divider: react_1.default.createElement(react_2.StackDivider, { borderColor: "gray.200" }) }, children));
};
exports.BountyList = BountyList;
//# sourceMappingURL=BountyList.js.map