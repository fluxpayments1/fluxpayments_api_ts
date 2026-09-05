import { PaymentLink } from './PaymentLink';
import { ITransfer } from './ITransfer';
/**
 * Visa Direct Transfer — the 5th PaymentLink variant. An invoice-shaped record
 * whose settlement is a push (OCT, funds TO the customer's card) or pull (AFT,
 * funds FROM it). transferStatus is server-owned lifecycle state.
 */
export declare class Transfer extends PaymentLink implements ITransfer {
    obName: string;
    constructor(form?: Partial<Transfer>);
    static createInstanceLazy(form: Partial<ITransfer>): Promise<Transfer>;
    static createInstanceSafe(form: Partial<ITransfer>): Promise<Transfer>;
}
