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
exports.AsyncButton = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_3 = require("@strata-foundation/react");
const react_async_hook_1 = require("react-async-hook");
const AsyncButton = (_a) => {
    var { action, children } = _a, props = __rest(_a, ["action", "children"]);
    const { awaitingApproval } = (0, react_3.useProvider)();
    const { execute, loading, error } = (0, react_async_hook_1.useAsyncCallback)(action);
    const { handleErrors } = (0, react_3.useErrorHandler)();
    handleErrors(error);
    return (react_1.default.createElement(react_2.Button, Object.assign({ isLoading: loading || awaitingApproval, loadingText: awaitingApproval ? "Awaiting Approval" : "Loading", onClick: execute }, props), children));
};
exports.AsyncButton = AsyncButton;
//# sourceMappingURL=AsyncButton.js.map