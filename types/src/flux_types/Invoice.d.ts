import { PaymentLink } from './PaymentLink';
import { IInvoice } from './IInvoice';
export declare class Invoice extends PaymentLink implements IInvoice {
    obName: string;
    constructor(invoice?: Partial<Invoice>);
    static createInstanceLazy(inv: Partial<IInvoice>): Promise<Invoice>;
    static createInstanceSafe(inv: Partial<IInvoice>): Promise<Invoice>;
}
