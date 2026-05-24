import { PaymentLinkQuery } from './PaymentLinkQuery';

export class CardCaptureFormQuery extends PaymentLinkQuery {
    public obName: string = "CardCaptureFormQuery";
    public isCardCapture: boolean;

    public constructor(query?: Partial<CardCaptureFormQuery>) {
        super(query);
        this.isCardCapture = true;
        Object.assign(this, query);
    }

    public serialize() {
        return {
            ...super.serialize(),
            isCardCapture: this.isCardCapture
        };
    }
}
