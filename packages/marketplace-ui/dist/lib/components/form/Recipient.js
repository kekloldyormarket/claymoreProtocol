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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipient = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = require("@chakra-ui/react");
const web3_js_1 = require("@solana/web3.js");
const react_3 = require("@strata-foundation/react");
const react_4 = __importStar(require("react"));
const ai_1 = require("react-icons/ai");
const bi_1 = require("react-icons/bi");
const Recipient = ({ value, onChange, name }) => {
    const [internalValue, setInternalValue] = (0, react_4.useState)(value);
    const recipient = (0, react_3.usePublicKey)(internalValue);
    const { info: tokenRefForOwner } = (0, react_3.usePrimaryClaimedTokenRef)(recipient);
    const { info: recipientAsTokenRef } = (0, react_3.useTokenRef)(recipient);
    const tokenRef = (0, react_4.useMemo)(() => tokenRefForOwner || recipientAsTokenRef, [tokenRefForOwner, recipientAsTokenRef]);
    const { metadata, image, loading: metadataLoading } = (0, react_3.useTokenMetadata)(tokenRef === null || tokenRef === void 0 ? void 0 : tokenRef.mint);
    const prevValue = (0, react_1.usePrevious)(value);
    const { nameString: handle, loading: handleLoading } = (0, react_3.useReverseName)(recipient, react_3.WUMBO_TWITTER_VERIFIER, react_3.WUMBO_TWITTER_TLD);
    const invalidAddress = Boolean(!recipient && internalValue);
    const recipientRef = react_4.default.useRef(null);
    const prevRecipientRef = (0, react_1.usePrevious)(recipientRef);
    (0, react_4.useEffect)(() => {
        if (value != internalValue && prevValue != value) {
            if (recipientRef.current && value) {
                recipientRef.current.innerText = value;
            }
            setInternalValue(value);
        }
    }, [recipientRef, value, internalValue, prevValue]);
    (0, react_4.useEffect)(() => {
        if ((!prevRecipientRef || !prevRecipientRef.current) && recipientRef.current) {
            if (internalValue) {
                recipientRef.current.innerText = internalValue;
            }
        }
    }, [prevRecipientRef, recipientRef, internalValue]);
    return (react_4.default.createElement(react_2.FormControl, null,
        react_4.default.createElement(react_2.HStack, { spacing: 4, rounded: 4, border: "1px", borderColor: "gray.200", p: 4 },
            react_4.default.createElement(react_2.Center, null,
                metadata && (react_4.default.createElement(react_2.Avatar, { w: "57px", h: "57px", src: image })),
                !metadata && (react_4.default.createElement(react_2.Circle, { w: internalValue ? "57px" : "24px", h: internalValue ? "57px" : "24px", backgroundColor: "gray.200" },
                    recipient && (react_4.default.createElement(react_2.Center, null,
                        react_4.default.createElement(react_2.Icon, { color: "green", as: bi_1.BiCheck }))),
                    invalidAddress && (react_4.default.createElement(react_2.Center, null,
                        react_4.default.createElement(react_2.Icon, { color: "red", as: ai_1.AiOutlineExclamation })))))),
            react_4.default.createElement(react_2.VStack, { w: "full", spacing: 1, alignItems: "start", justifyContent: "stretch" },
                metadata && (react_4.default.createElement(react_2.Text, { flexGrow: 0, fontWeight: 700 }, metadata.data.name)),
                !metadata && handle && (react_4.default.createElement(react_1.Link, { flexGrow: 0, fontWeight: 700, isExternal: true, href: `https://twitter.com/${handle}` },
                    "@",
                    handle)),
                invalidAddress && (react_4.default.createElement(react_2.Text, { flexGrow: 0, fontSize: "xs", color: "red" }, "Invalid address")),
                react_4.default.createElement(react_2.Text, { ref: recipientRef, onInput: (e) => {
                        // @ts-ignore
                        e.target.value = e.target.innerText;
                        // @ts-ignore
                        e.target.name = name;
                        // @ts-ignore
                        setInternalValue(e.target.value);
                        try {
                            // See if valid
                            // @ts-ignore
                            new web3_js_1.PublicKey(e.target.innerText);
                            onChange(e);
                        }
                        catch (err) {
                            // @ts-ignore
                            e.target.value = null;
                            onChange(e);
                        }
                    }, wordBreak: "break-word", flexGrow: 1, className: "input", role: "textbox", contentEditable: true, w: "full", border: "none", overflow: "auto", outline: "none", resize: "none", boxShadow: "none", ring: "none", placeholder: "Enter Address", _focus: { boxShadow: "none" } })))));
};
exports.Recipient = Recipient;
//# sourceMappingURL=Recipient.js.map