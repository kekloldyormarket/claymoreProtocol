"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormContainer = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const FormContainer = ({ children, title, }) => {
    return (react_1.default.createElement(react_2.Box, { w: "full", backgroundColor: "#f9f9f9" },
        react_1.default.createElement(react_2.Container, { maxW: "container.md", pt: 8, pb: "200px" },
            react_1.default.createElement(react_2.Heading, { mb: 4, size: "lg" }, title),
            react_1.default.createElement(react_2.Box, { padding: 8, backgroundColor: "white", rounded: "lg" }, children))));
};
exports.FormContainer = FormContainer;
//# sourceMappingURL=FormContainer.js.map