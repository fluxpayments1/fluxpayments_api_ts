import { FluxType } from './FluxType';
import { IPaymentLink } from './IPaymentLink';
import { FluxIdentifier } from './FluxIdentifier';
export declare class PaymentLink extends FluxType implements IPaymentLink {
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
        redirectUrl: string;
        oneTimeUse: boolean;
    };
    id: number;
    metadata: string;
    uniqueId: string;
    paymentLink: string;
    redirectUrl: string;
    oneTimeUse: boolean;
    accountId: number;
    status: string;
    accountEmail: string;
    products: FluxIdentifier[];
    protected objectType: string;
    constructor(pl?: Partial<PaymentLink>);
    static createInstanceLazy(acc: Partial<IPaymentLink>): Promise<PaymentLink>;
    static createInstanceSafe(acc: Partial<IPaymentLink>): Promise<PaymentLink>;
}
