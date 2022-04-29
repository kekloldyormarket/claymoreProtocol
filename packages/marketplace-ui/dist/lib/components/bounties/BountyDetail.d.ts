import { PublicKey } from "@solana/web3.js";
export declare const BountyDetail: ({ name, description, image, mintKey, onEdit, onBuyMore }: {
    mintKey?: PublicKey | undefined;
    name?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
    onEdit?: (() => void) | undefined;
    onBuyMore?: ((baseMint: PublicKey) => void) | undefined;
}) => JSX.Element;
//# sourceMappingURL=BountyDetail.d.ts.map