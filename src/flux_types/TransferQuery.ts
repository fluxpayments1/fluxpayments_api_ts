import { PaymentLinkQuery } from './PaymentLinkQuery';

export class TransferQuery extends PaymentLinkQuery {
    public obName: string = "TransferQuery";

    public constructor(query?: Partial<TransferQuery>) {
        super(query);
        Object.assign(this, query);
    }
}
