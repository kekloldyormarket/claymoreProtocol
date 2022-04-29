import * as yup from "yup";
export interface IDisclosures {
    notASecurity: boolean;
    acceptedFees: boolean;
}
export declare const disclosuresSchema: import("yup/lib/object").OptionalObjectSchema<{
    notASecurity: yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, true>;
    acceptedFees: yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, true>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    notASecurity: yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, true>;
    acceptedFees: yup.BooleanSchema<boolean | undefined, import("yup/lib/types").AnyObject, true>;
}>>;
export declare const Disclosures: ({ fees }: {
    fees: number;
}) => JSX.Element;
//# sourceMappingURL=Disclosures.d.ts.map