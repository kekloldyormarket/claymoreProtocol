import { PublicKey } from "@solana/web3.js";
import { DefaultValues } from "react-hook-form";
import { IMetadataFormProps } from "./TokenMetadataInputs";
interface IEditBountyFormProps extends IMetadataFormProps {
    shortName: string;
    contact: string;
    discussion: string;
    authority: string;
}
export declare const EditBountyFormRaw: ({ mintKey, values, onComplete, hide, }: {
    mintKey: PublicKey;
    values: DefaultValues<IEditBountyFormProps>;
    onComplete?: (() => void) | undefined;
    hide?: Set<string> | undefined;
}) => JSX.Element;
export declare const EditBountyForm: ({ mintKey, onComplete, hide, }: {
    mintKey: PublicKey;
    onComplete?: (() => void) | undefined;
    hide?: Set<string> | undefined;
}) => JSX.Element;
export {};
//# sourceMappingURL=EditBountyForm.d.ts.map