import { PublicKey } from "@solana/web3.js";
export interface IMintedNftNotificationProps {
    onDismiss?: () => void;
    mint: PublicKey;
}
export declare const MintedNftNotification: ({ onDismiss, mint, }: IMintedNftNotificationProps) => JSX.Element;
//# sourceMappingURL=MintedNftNotification.d.ts.map