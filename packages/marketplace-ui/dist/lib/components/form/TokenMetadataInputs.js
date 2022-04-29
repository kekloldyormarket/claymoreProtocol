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
exports.TokenMetadataInputs = void 0;
const react_1 = require("@chakra-ui/react");
const spl_utils_1 = require("@strata-foundation/spl-utils");
const react_2 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const ri_1 = require("react-icons/ri");
const FormControlWithError_1 = require("./FormControlWithError");
function TokenMetadataInputs({ entityName = "post", }) {
    var _a, _b;
    const { register, watch, formState: { errors }, clearErrors, setValue, setError, } = (0, react_hook_form_1.useFormContext)();
    const { image } = watch();
    const [imgUrl, setImgUrl] = (0, react_2.useState)();
    const hiddenFileInput = react_2.default.useRef(null);
    const { getRootProps, getRadioProps } = (0, react_1.useRadioGroup)({
        name: "provider",
        onChange: (option) => setValue("provider", option),
    });
    const group = getRootProps();
    const storageOptions = [
        {
            value: spl_utils_1.StorageProvider.Arweave,
            heading: "Arweave",
            illustration: "/arweave.png",
            helpText: "Instant storage for your image and description, but you will need to pay a small fee in Sol for the upload",
        },
    ];
    (0, react_2.useEffect)(() => {
        if (image) {
            const reader = new FileReader();
            reader.onload = (event) => {
                var _a;
                setImgUrl(((_a = event.target) === null || _a === void 0 ? void 0 : _a.result) || "");
            };
            reader.readAsDataURL(image);
        }
        else {
            setImgUrl(undefined);
        }
    }, [image]);
    // Default to Arweave
    (0, react_2.useEffect)(() => {
        setValue("provider", spl_utils_1.StorageProvider.Arweave);
    }, [setValue]);
    const provider = watch("provider");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const sizeKB = file.size / 1024;
        if (sizeKB < 25) {
            // @ts-ignore
            setError("image", {
                type: "manual",
                message: `The file ${file.name} is too small. It is ${Math.round(10 * sizeKB) / 10}KB but should be at least 25KB.`,
            });
            return;
        }
        // @ts-ignore
        setValue("image", file || null);
        // @ts-ignore
        clearErrors("image");
    };
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement(FormControlWithError_1.FormControlWithError, { id: "name", help: `The name that will be displayed for this ${entityName} + hydra`, label: "Name", errors: errors },
            react_2.default.createElement(react_1.Input, Object.assign({}, register("name")))),
        react_2.default.createElement(react_1.FormControl, { id: "image" },
            react_2.default.createElement(react_1.FormLabel, null, "Photo"),
            react_2.default.createElement(react_1.HStack, { w: "full", spacing: 4 },
                react_2.default.createElement(react_1.Button, { size: "md", colorScheme: "primary", variant: "outline", onClick: () => hiddenFileInput.current.click() }, "Choose"),
                image && (react_2.default.createElement(react_1.HStack, { spacing: 2, align: "center" },
                    react_2.default.createElement(react_1.Image, { alt: image.name, w: "32px", h: "32px", src: imgUrl }),
                    react_2.default.createElement(react_1.Text, { color: "gray.500" }, image.name),
                    react_2.default.createElement(react_1.Icon, { w: "22px", h: "22px", color: "green.400", as: ri_1.RiCheckFill })))),
            react_2.default.createElement("input", { id: "image", type: "file", accept: ".png,.jpg,.gif,.mp4,.svg", multiple: false, onChange: handleImageChange, ref: hiddenFileInput, style: { display: "none" } }),
            react_2.default.createElement(react_1.FormHelperText, { color: ((_a = errors.image) === null || _a === void 0 ? void 0 : _a.message) && "red.400" }, ((_b = errors.image) === null || _b === void 0 ? void 0 : _b.message) ||
                `The image that will be displayed with this ${entityName}`)),
        react_2.default.createElement(FormControlWithError_1.FormControlWithError, { id: "Description", help: `The description that will be displayed for this ${entityName}`, label: "Description", errors: errors },
            react_2.default.createElement(react_1.Textarea, Object.assign({ borderColor: "gray.200" }, register("description"))))));
}
exports.TokenMetadataInputs = TokenMetadataInputs;
//# sourceMappingURL=TokenMetadataInputs.js.map