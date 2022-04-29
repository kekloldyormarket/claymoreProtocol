"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchpadLayout = void 0;
const react_1 = __importDefault(require("react"));
const router_1 = require("next/router");
const react_2 = require("@chakra-ui/react");
const LaunchpadLayout = ({ heading, subHeading, backVisible, onBack, nextDisabled, onNext, children, }) => {
    const router = (0, router_1.useRouter)();
    const handleOnBack = () => __awaiter(void 0, void 0, void 0, function* () {
        onBack && (yield onBack());
        router.back();
    });
    const handleOnNext = () => __awaiter(void 0, void 0, void 0, function* () {
        onNext && (yield onNext());
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Center, { padding: "54px", backgroundColor: "black.500" },
            react_1.default.createElement(react_2.Stack, { spacing: 6 },
                react_1.default.createElement(react_2.Text, { fontSize: "xl", color: "white", textAlign: "center" },
                    "Welcome to",
                    react_1.default.createElement(react_2.Text, { fontWeight: "Bold", background: "linear-gradient(to right,#FFCD01, #E17E44);", backgroundClip: "text" }, "Claymore Protocol")))),
        react_1.default.createElement(react_2.Box, { w: "full", py: 12, bgColor: "gray.100" },
            react_1.default.createElement(react_2.Container, { maxW: "container.lg" },
                react_1.default.createElement(react_2.Stack, { spacing: 8, justifyContent: "center" },
                    react_1.default.createElement(react_2.Stack, { alignItems: "center", textAlign: "center", fontWeight: "bold", lineHeight: "normal" },
                        react_1.default.createElement(react_2.Text, { fontSize: "2xl" }, heading),
                        react_1.default.createElement(react_2.Text, { color: "gray.400" }, subHeading)),
                    children))),
        react_1.default.createElement(react_2.Container, { maxW: "container.lg", display: "flex", justifyContent: "space-between", py: 6 },
            backVisible ? (react_1.default.createElement(react_2.Button, { colorScheme: "primary", variant: "outline", w: "full", maxW: "140px", onClick: handleOnBack }, "Back")) : (react_1.default.createElement("span", null)),
            react_1.default.createElement(react_2.Button, { colorScheme: "primary", disabled: nextDisabled, w: "full", maxW: "140px", onClick: handleOnNext }, "Next"))));
};
exports.LaunchpadLayout = LaunchpadLayout;
//# sourceMappingURL=LaunchpadLayout.js.map