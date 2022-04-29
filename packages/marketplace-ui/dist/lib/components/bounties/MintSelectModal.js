"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintSelectModal = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const MintSelect_1 = require("../form/MintSelect");
const react_3 = require("@strata-foundation/react");
const MintSelectModal = ({ onChange, value, buttonProps, }) => {
    const { isOpen, onOpen, onClose } = (0, react_2.useDisclosure)();
    const mintKey = (0, react_3.usePublicKey)(value);
    const { metadata, loading } = (0, react_3.useTokenMetadata)(mintKey);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Button, Object.assign({ onClick: onOpen }, buttonProps), loading ? (react_1.default.createElement(react_2.Spinner, { size: "xs" })) : metadata ? (metadata.data.symbol) : ("All Mints")),
        react_1.default.createElement(react_2.Modal, { isOpen: isOpen, onClose: onClose },
            react_1.default.createElement(react_2.ModalOverlay, null),
            react_1.default.createElement(react_2.ModalContent, null,
                react_1.default.createElement(react_2.ModalHeader, null, "Select Mint"),
                react_1.default.createElement(react_2.ModalCloseButton, null),
                react_1.default.createElement(react_2.ModalBody, null,
                    react_1.default.createElement(MintSelect_1.MintSelect, { onChange: onChange, value: value })),
                react_1.default.createElement(react_2.ModalFooter, null,
                    react_1.default.createElement(react_2.Button, { colorScheme: "blue", mr: 3, onClick: onClose }, "Done"))))));
};
exports.MintSelectModal = MintSelectModal;
//# sourceMappingURL=MintSelectModal.js.map