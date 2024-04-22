import { FluxType } from "./";
export declare class OneTimePaymentLink extends FluxType {
    obName: string;
    serialize(): {
        id: number;
        metadata: string;
        objectType: string;
        uniqueId: string;
        liveStatus: any;
        removeOnSuccess: any;
        paymentLink: string;
        accountId: number;
    };
    id: number;
    metadata: string;
    uniqueId: string;
    liveStatus: any;
    removeOnSuccess: any;
    paymentLink: string;
    accountId: number;
    protected objectType: string;
    constructor(oneTimePaymentLink?: Partial<OneTimePaymentLink>);
}
