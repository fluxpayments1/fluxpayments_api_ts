import { PaymentLink } from './PaymentLink';
import { ICardCaptureForm } from './ICardCaptureForm';
export declare class CardCaptureForm extends PaymentLink implements ICardCaptureForm {
    obName: string;
    constructor(form?: Partial<CardCaptureForm>);
    static createInstanceLazy(form: Partial<ICardCaptureForm>): Promise<CardCaptureForm>;
    static createInstanceSafe(form: Partial<ICardCaptureForm>): Promise<CardCaptureForm>;
}
