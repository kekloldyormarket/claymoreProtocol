/// <reference types="bn.js" />
import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { IMintArgs } from "../MintButton";
export declare const CANDY_MACHINE_PROGRAM: anchor.web3.PublicKey;
interface CandyMachineState {
    itemsAvailable: number;
    itemsRedeemed: number;
    itemsRemaining: number;
    treasury: anchor.web3.PublicKey;
    tokenMint: anchor.web3.PublicKey;
    isSoldOut: boolean;
    isActive: boolean;
    isPresale: boolean;
    isWhitelistOnly: boolean;
    goLiveDate: anchor.BN;
    price: anchor.BN;
    gatekeeper: null | {
        expireOnUse: boolean;
        gatekeeperNetwork: anchor.web3.PublicKey;
    };
    endSettings: null | {
        number: anchor.BN;
        endSettingType: any;
    };
    whitelistMintSettings: null | {
        mode: any;
        mint: anchor.web3.PublicKey;
        presale: boolean;
        discountPrice: null | anchor.BN;
    };
    hiddenSettings: null | {
        name: string;
        uri: string;
        hash: Uint8Array;
    };
}
export interface CandyMachineAccount {
    id: anchor.web3.PublicKey;
    program: anchor.Program;
    state: CandyMachineState;
}
export declare const awaitTransactionSignatureConfirmation: (txid: anchor.web3.TransactionSignature, timeout: number, connection: anchor.web3.Connection, queryStatus?: boolean) => Promise<anchor.web3.SignatureStatus | null | void>;
export declare const getCandyMachineState: (anchorWallet: anchor.Wallet, candyMachineId: anchor.web3.PublicKey, connection: anchor.web3.Connection) => Promise<CandyMachineAccount>;
export declare const getCandyMachineCreator: (candyMachine: anchor.web3.PublicKey) => Promise<[anchor.web3.PublicKey, number]>;
export declare const mintOneToken: (candyMachine: CandyMachineAccount, payer: anchor.web3.PublicKey, { tokenBondingSdk, tokenBonding, maxPrice }: IMintArgs) => Promise<PublicKey>;
export declare const shortenAddress: (address: string, chars?: number) => string;
export {};
//# sourceMappingURL=candy-machine.d.ts.map