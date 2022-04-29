"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const icons_1 = require("@chakra-ui/icons");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const TwitterLink_1 = require("./TwitterLink");
const WalletModalButton_1 = require("./WalletModalButton");
const routes_1 = require("../utils/routes");
const NavLink = ({ href, children }) => (react_1.default.createElement(react_2.Link, { px: 2, py: 1, href: href, fontSize: "sm" }, children));
const Header = () => {
    const Links = [
        { link: "Launchpad", href: (0, routes_1.route)(routes_1.routes.launchpad) },
        //  { link: "Bounties", href: route(routes.bounties) },
    ];
    const { disconnect, connected } = (0, wallet_adapter_react_1.useWallet)();
    const { isOpen, onOpen, onClose } = (0, react_2.useDisclosure)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Box, { zIndex: 100, color: "white", bg: "black.300", w: "full" },
            react_1.default.createElement(react_2.Center, { w: "full", height: "56px", alignItems: "center" },
                react_1.default.createElement(react_2.Container, { maxW: "container.lg", w: "full", display: "flex", justifyContent: "space-between" },
                    react_1.default.createElement(react_2.IconButton, { size: "md", bg: "black.300", icon: isOpen ? react_1.default.createElement(icons_1.CloseIcon, null) : react_1.default.createElement(icons_1.HamburgerIcon, null), "aria-label": "Open Menu", display: { md: "none" }, _active: {
                            bg: "black.300",
                        }, _hover: {
                            bg: "black.300",
                        }, onClick: isOpen ? onClose : onOpen }),
                    react_1.default.createElement(react_2.HStack, { spacing: 8, alignItems: "center" },
                        react_1.default.createElement(react_2.Link, { href: "/" },
                            react_1.default.createElement(react_2.Image, { height: "40px", alt: "Claymore Protocol", src: "/jare.jpeg" })),
                        react_1.default.createElement(react_2.HStack, { as: "nav", spacing: 4, display: { base: "none", md: "flex" } }, Links.map((link) => (react_1.default.createElement(NavLink, { key: link.link, href: link.href }, link.link))))),
                    react_1.default.createElement(react_2.HStack, { align: "center", justify: ["center", "space-between", "flex-end", "flex-end"], direction: ["column", "row", "row", "row"], pt: "0" },
                        react_1.default.createElement(react_2.Flex, { justify: "center", align: "center", display: { base: "none", md: "flex" } },
                            react_1.default.createElement(TwitterLink_1.TwitterLink, null),
                            connected && (react_1.default.createElement(react_2.Button, { size: "sm", _hover: { backgroundColor: "black.500" }, variant: "ghost", onClick: () => disconnect() }, "Disconnect")),
                            react_1.default.createElement(WalletModalButton_1.WalletModalButton, null)),
                        react_1.default.createElement(react_2.Flex, { justify: "center", display: { base: "flex", md: "none" } },
                            react_1.default.createElement(WalletModalButton_1.WalletModalButton, { size: "sm" }))))),
            isOpen ? (react_1.default.createElement(react_2.Box, { pb: 4, display: { md: "none" } },
                react_1.default.createElement(react_2.VStack, { as: "nav", spacing: 4 }, Links.map((link) => (react_1.default.createElement(NavLink, { key: link.link, href: link.href }, link.link)))))) : null)));
};
exports.Header = Header;
//# sourceMappingURL=Header.js.map