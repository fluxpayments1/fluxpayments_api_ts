import { FluxType } from './FluxType';
import { IOneTimePaymentLink } from './IOneTimePaymentLink';
export declare class OneTimePaymentLink extends FluxType implements IOneTimePaymentLink {
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
    static createInstanceLazy(acc: Partial<IOneTimePaymentLink>): Promise<OneTimePaymentLink>;
    static createInstanceSafe(acc: Partial<IOneTimePaymentLink>): Promise<OneTimePaymentLink>;
}
