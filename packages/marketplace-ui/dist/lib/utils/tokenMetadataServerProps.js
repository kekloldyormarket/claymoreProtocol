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
exports.mintMetadataServerSideProps = void 0;
const anchor_1 = require("@project-serum/anchor");
const web3_js_1 = require("@solana/web3.js");
const nodewallet_1 = __importDefault(require("@project-serum/anchor/dist/cjs/nodewallet"));
const Wallet_1 = require("../components/Wallet");
const spl_utils_1 = require("@strata-foundation/spl-utils");
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const hooks_1 = require("../hooks");
const js_base64_1 = require("js-base64");
const axios_1 = __importDefault(require("axios"));
const web3_token_auth_1 = require("@strata-foundation/web3-token-auth");
function getToken() {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.env.NEXT_PUBLIC_ISSUER) {
            const token = js_base64_1.Base64.encode(`${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`);
            const { access_token } = (yield axios_1.default.post(`${process.env.NEXT_PUBLIC_ISSUER}/token`, "grant_type=client_credentials", {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Basic ${token}`,
                },
            })).data;
            return access_token;
        }
        return "";
    });
}
const mintMetadataServerSideProps = (context) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { endpoint } = (0, hooks_1.getClusterAndEndpoint)((context.query.cluster || Wallet_1.DEFAULT_ENDPOINT));
    const connection = new web3_js_1.Connection(endpoint, {
        fetchMiddleware: (0, web3_token_auth_1.tokenAuthFetchMiddleware)({
            getToken
        })
    });
    const provider = new anchor_1.Provider(connection, new nodewallet_1.default(web3_js_1.Keypair.generate()), {});
    const mint = new web3_js_1.PublicKey((_a = context.params) === null || _a === void 0 ? void 0 : _a.mintKey);
    const tokenMetadataSdk = yield spl_utils_1.SplTokenMetadata.init(provider);
    const metadataAcc = (yield tokenMetadataSdk.getMetadata(yield mpl_token_metadata_1.Metadata.getPDA(mint)));
    let metadata = null;
    try {
        metadata = yield spl_utils_1.SplTokenMetadata.getArweaveMetadata(metadataAcc === null || metadataAcc === void 0 ? void 0 : metadataAcc.data.uri);
    }
    catch (e) {
        console.error(e);
    }
    const name = ((_b = metadataAcc === null || metadataAcc === void 0 ? void 0 : metadataAcc.data) === null || _b === void 0 ? void 0 : _b.name.length) == 32 ? metadata === null || metadata === void 0 ? void 0 : metadata.name : (_c = metadataAcc === null || metadataAcc === void 0 ? void 0 : metadataAcc.data) === null || _c === void 0 ? void 0 : _c.name;
    return {
        props: {
            name: name || null,
            description: (metadata === null || metadata === void 0 ? void 0 : metadata.description) || null,
            image: (yield spl_utils_1.SplTokenMetadata.getImage(metadataAcc === null || metadataAcc === void 0 ? void 0 : metadataAcc.data.uri)) || null,
        },
    };
});
exports.mintMetadataServerSideProps = mintMetadataServerSideProps;
//# sourceMappingURL=tokenMetadataServerProps.js.map