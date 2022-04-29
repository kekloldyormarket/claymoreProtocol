/// <reference types="bn.js" />
import * as anchor from "@project-serum/anchor";
export interface AlertState {
    open: boolean;
    message: string;
    severity: "success" | "info" | "warning" | "error" | undefined;
}
export declare const toDate: (value?: anchor.BN | undefined) => Date | undefined;
export declare const formatNumber: {
    format: (val?: number | undefined) => string;
    asNumber: (val?: anchor.BN | undefined) => number | undefined;
};
export declare const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID: anchor.web3.PublicKey;
export declare const CIVIC: anchor.web3.PublicKey;
export declare const getAtaForMint: (mint: anchor.web3.PublicKey, buyer: anchor.web3.PublicKey) => Promise<[anchor.web3.PublicKey, number]>;
export declare const getNetworkExpire: (gatekeeperNetwork: anchor.web3.PublicKey) => Promise<[anchor.web3.PublicKey, number]>;
export declare const getNetworkToken: (wallet: anchor.web3.PublicKey, gatekeeperNetwork: anchor.web3.PublicKey) => Promise<[anchor.web3.PublicKey, number]>;
export declare function createAssociatedTokenAccountInstruction(associatedTokenAddress: anchor.web3.PublicKey, payer: anchor.web3.PublicKey, walletAddress: anchor.web3.PublicKey, splTokenMintAddress: anchor.web3.PublicKey): anchor.web3.TransactionInstruction;
//# sourceMappingURL=utils.d.ts.map