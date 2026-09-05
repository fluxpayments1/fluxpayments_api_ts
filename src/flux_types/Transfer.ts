import { PaymentLink } from './PaymentLink';
import { ITransfer } from './ITransfer';
import { FluxType } from './FluxType';

/**
 * Visa Direct Transfer — the 5th PaymentLink variant. An invoice-shaped record
 * whose settlement is a push (OCT, funds TO the customer's card) or pull (AFT,
 * funds FROM it). transferStatus is server-owned lifecycle state.
 */
export class Transfer extends PaymentLink implements ITransfer {
    public obName: string = "Transfer";

    public constructor(form?: Partial<Transfer>) {
        super(form);
        Object.assign(this, form);
    }

    public static async createInstanceLazy(form: Partial<ITransfer>) {
        return await FluxType.instantiateLazyInstance(form, this);
    }

    public static async createInstanceSafe(form: Partial<ITransfer>) {
        return await FluxType.instantiateInstance(form, this);
    }
}
