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
exports.BurnButton = void 0;
const react_1 = __importDefault(require("react"));
const spl_token_1 = require("@solana/spl-token");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const web3_js_1 = require("@solana/web3.js");
const react_2 = require("@strata-foundation/react");
const AsyncButton_1 = require("./AsyncButton");
const BurnButton = ({ mintKey }) => {
    const { provider } = (0, react_2.useProvider)();
    const { publicKey } = (0, wallet_adapter_react_1.useWallet)();
    const { associatedAccount: account, associatedAccountKey } = (0, react_2.useAssociatedAccount)(publicKey, mintKey);
    const hasTokens = account && account.amount.toNumber() > 0;
    return (react_1.default.createElement(AsyncButton_1.AsyncButton, { isDisabled: !hasTokens, colorScheme: "red", action: () => __awaiter(void 0, void 0, void 0, function* () {
            if (account && publicKey && provider && associatedAccountKey) {
                const tx = new web3_js_1.Transaction();
                tx.add(spl_token_1.Token.createBurnInstruction(spl_token_1.TOKEN_PROGRAM_ID, account.mint, associatedAccountKey, account.owner, [], account.amount), spl_token_1.Token.createCloseAccountInstruction(spl_token_1.TOKEN_PROGRAM_ID, associatedAccountKey, publicKey, publicKey, []));
                yield provider.send(tx);
            }
        }) }, hasTokens ? "Burn my Bounty Tokens" : "No Bounty Tokens Found"));
};
exports.BurnButton = BurnButton;
//# sourceMappingURL=BurnButton.js.map