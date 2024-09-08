import { FluxType } from './FluxType';
import { IPaymentLink } from './IPaymentLink';
import { Product } from './Product';
import { Currency } from './Currency';
import { Wallet } from './Wallet';
export declare class PaymentLink extends FluxType implements IPaymentLink {
    obName: string;
    serialize(): {
        id: number;
        metadata: string;
        objectType: string;
        uniqueId: string;
        paymentLink: string;
        accountId: number;
        products: Product[];
        wallets: Wallet[];
        currencies: Currency[];
        accountEmail: string;
        status: string;
        redirectUrl: string;
        oneTimeUse: boolean;
    };
    wallets: Wallet[];
    id: number;
    metadata: string;
    uniqueId: string;
    paymentLink: string;
    redirectUrl: string;
    oneTimeUse: boolean;
    accountId: number;
    status: string;
    accountEmail: string;
    products: Product[];
    currencies: Currency[];
    protected objectType: string;
    constructor(pl?: Partial<PaymentLink>);
    static createInstanceLazy(acc: Partial<IPaymentLink>): Promise<PaymentLink>;
    static createInstanceSafe(acc: Partial<IPaymentLink>): Promise<PaymentLink>;
}
