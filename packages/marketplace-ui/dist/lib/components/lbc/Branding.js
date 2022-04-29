"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branding = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const Branding = () => (react_2.default.createElement(react_1.VStack, null,
    react_2.default.createElement(react_1.HStack, { spacing: 4 },
        react_2.default.createElement(react_1.Link, { isExternal: true, href: "https://strataprotocol.com" },
            react_2.default.createElement(react_1.Image, { h: "24px", alt: "Strata", src: "/logo-white.svg" })),
        react_2.default.createElement(react_1.Link, { isExternal: true, href: "https://metaplex.com" },
            react_2.default.createElement(react_1.Image, { h: "9px", alt: "Metaplex", src: "/metaplex-logo.svg" }))),
    react_2.default.createElement(react_1.Text, { fontSize: "14px", color: "gray.400" }, "Powered by Strata & Metaplex")));
exports.Branding = Branding;
//# sourceMappingURL=Branding.js.map