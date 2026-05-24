import { PaymentLink } from './PaymentLink';
import { ICardCaptureForm } from './ICardCaptureForm';
import { FluxType } from './FluxType';

export class CardCaptureForm extends PaymentLink implements ICardCaptureForm {
    public obName: string = "CardCaptureForm";

    public constructor(form?: Partial<CardCaptureForm>) {
        super(form);
        this.isCardCapture = true;
        Object.assign(this, form);
    }

    public static async createInstanceLazy(form: Partial<ICardCaptureForm>) {
        return await FluxType.instantiateLazyInstance(form, this);
    }

    public static async createInstanceSafe(form: Partial<ICardCaptureForm>) {
        return await FluxType.instantiateInstance(form, this);
    }
}
