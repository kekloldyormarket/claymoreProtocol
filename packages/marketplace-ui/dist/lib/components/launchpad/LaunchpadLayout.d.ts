import { FC } from "react";
export declare type LaunchpadLayoutProps = {
    heading: string;
    subHeading: string;
    backVisible?: boolean;
    onBack?: () => Promise<void>;
    nextDisabled?: boolean;
    onNext?: () => Promise<void>;
};
export declare const LaunchpadLayout: FC<LaunchpadLayoutProps>;
//# sourceMappingURL=LaunchpadLayout.d.ts.map