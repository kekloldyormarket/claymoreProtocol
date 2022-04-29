import { PublicKey } from "@solana/web3.js";
export declare const BountyContribute: ({ mintKey, onContributeSuccess, onBuyMore, }: {
    mintKey: PublicKey | undefined;
    onContributeSuccess: () => void;
    onBuyMore?: ((baseMint: PublicKey) => void) | undefined;
}) => JSX.Element;
//# sourceMappingURL=BountyContribute.d.ts.map