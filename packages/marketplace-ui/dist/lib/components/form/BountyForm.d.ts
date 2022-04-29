import { PublicKey } from "@solana/web3.js";
import { DefaultValues } from "react-hook-form";
import { IMetadataFormProps } from "./TokenMetadataInputs";
interface IBountyFormProps extends IMetadataFormProps {
    mint: string;
    shortName: string;
    contact: string;
    discussion: string;
    authority: string;
}
export declare const BountyForm: ({ defaultValues, onComplete, hide, }: {
    defaultValues?: {
        mint?: string | undefined;
        shortName?: string | undefined;
        contact?: string | undefined;
        discussion?: string | undefined;
        authority?: string | undefined;
        image?: File | undefined;
        name?: string | undefined;
        description?: string | undefined;
        provider?: import("@strata-foundation/spl-utils").StorageProvider | undefined;
    } | undefined;
    onComplete?: ((mintKey: PublicKey) => void) | undefined;
    hide?: Set<string> | undefined;
}) => JSX.Element;
export {};
//# sourceMappingURL=BountyForm.d.ts.map