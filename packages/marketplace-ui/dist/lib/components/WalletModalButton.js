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
exports.WalletModalButton = void 0;
const react_1 = require("@chakra-ui/react");
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const wallet_adapter_react_ui_1 = require("@solana/wallet-adapter-react-ui");
const react_2 = require("@strata-foundation/react");
const react_3 = __importStar(require("react"));
const bs_1 = require("react-icons/bs");
const useEndpoint_1 = require("../hooks/useEndpoint");
const WalletModalButton = (_a) => {
    var { children = "Select Wallet", onClick } = _a, props = __rest(_a, ["children", "onClick"]);
    const { connected, publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const { visible, setVisible } = (0, wallet_adapter_react_ui_1.useWalletModal)();
    const handleClick = (0, react_3.useCallback)((event) => {
        if (onClick)
            onClick(event);
        if (!event.defaultPrevented)
            setVisible(!visible);
    }, [onClick, visible, setVisible]);
    const { cluster, setClusterOrEndpoint } = (0, useEndpoint_1.useEndpoint)();
    return (react_3.default.createElement(react_1.ButtonGroup, { marginTop: "auto", colorScheme: "primary", color: "white", variant: "outline", spacing: "6", isAttached: true, size: props.size },
        react_3.default.createElement(react_1.Button, Object.assign({ color: "white", borderColor: "primary.500" }, props, { leftIcon: react_3.default.createElement(react_1.Icon, { w: "16px", h: "16px", as: bs_1.BsFillPersonFill }), onClick: handleClick, _hover: { backgroundColor: "orange.500" } }), connected ? (0, react_2.truncatePubkey)(publicKey) : children),
        react_3.default.createElement(react_1.Menu, { isLazy: true },
            react_3.default.createElement(react_1.MenuButton, { as: react_1.IconButton, color: "white", borderColor: "primary.500", borderLeft: "none", "aria-label": "Network", icon: react_3.default.createElement(react_1.Icon, { as: bs_1.BsChevronDown }) }),
            react_3.default.createElement(react_1.MenuList, { backgroundColor: "black.300", borderColor: "black.500" },
                react_3.default.createElement(react_1.MenuOptionGroup, { title: "Network", type: "radio", onChange: (e) => setClusterOrEndpoint(e), value: cluster },
                    react_3.default.createElement(react_1.MenuItemOption, { value: wallet_adapter_base_1.WalletAdapterNetwork.Mainnet, _focus: { backgroundColor: "primary.300" }, _hover: { backgroundColor: "primary.500" } }, "Mainnet"),
                    react_3.default.createElement(react_1.MenuItemOption, { _focus: { backgroundColor: "primary.300" }, _hover: { backgroundColor: "primary.500" }, value: wallet_adapter_base_1.WalletAdapterNetwork.Devnet }, "Devnet"),
                    react_3.default.createElement(react_1.MenuItemOption, { _focus: { backgroundColor: "primary.300" }, _hover: { backgroundColor: "primary.500" }, value: "localnet" }, "Localnet"))))));
};
exports.WalletModalButton = WalletModalButton;
//# sourceMappingURL=WalletModalButton.js.map