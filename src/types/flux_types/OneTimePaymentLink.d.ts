import { FluxType } from './FluxType';
import { IOneTimePaymentLink } from './IOneTimePaymentLink';
import { FluxIdentifier } from './FluxIdentifier';
export declare class OneTimePaymentLink extends FluxType implements IOneTimePaymentLink {
    obName: string;
    serialize(): {
        id: number;
        metadata: string;
        objectType: string;
        uniqueId: string;
        paymentLink: string;
        accountId: number;
        products: FluxIdentifier[];
        accountEmail: string;
        status: string;
    };
    id: number;
    metadata: string;
    uniqueId: string;
    paymentLink: string;
    accountId: number;
    status: string;
    accountEmail: string;
    products: FluxIdentifier[];
    protected objectType: string;
    constructor(oneTimePaymentLink?: Partial<OneTimePaymentLink>);
    static createInstanceLazy(acc: Partial<IOneTimePaymentLink>): Promise<OneTimePaymentLink>;
    static createInstanceSafe(acc: Partial<IOneTimePaymentLink>): Promise<OneTimePaymentLink>;
}
