import { PublicKey } from "@solana/web3.js";
import { SplTokenBonding } from "@strata-foundation/spl-token-bonding";
export interface IMintArgs {
    tokenBondingSdk: SplTokenBonding | undefined;
    tokenBonding: PublicKey;
    maxPrice: number;
}
export declare const MintButton: ({ tokenBondingKey, price: inputPrice, isDisabled, disabledText, onMint, }: {
    tokenBondingKey: PublicKey;
    price?: number | undefined;
    isDisabled?: boolean | undefined;
    disabledText?: string | undefined;
    onMint?: ((args: IMintArgs) => Promise<void>) | undefined;
}) => JSX.Element;
//# sourceMappingURL=MintButton.d.ts.map