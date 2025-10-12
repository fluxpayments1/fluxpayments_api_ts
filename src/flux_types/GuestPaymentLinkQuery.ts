import { BaseQuery } from "./BaseQuery";
import { Currency } from "./Currency";
import { Product } from "./Product";
import { Wallet } from "./Wallet";
import { IGuestPaymentLinkQuery } from "./IGuestPaymentLinkQuery";
import { GuestPaymentLink } from "./GuestPaymentLink";
import { Merchant } from "./Merchant";

/**
 * This is an object that is used to query for one-time payment links.
 */
export class GuestPaymentLinkQuery extends BaseQuery<GuestPaymentLink> {
    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            uniqueId: this.uniqueId,
            accountId: this.accountId,
            status: this.status,
            accountEmail: this.accountEmail,
            createdAt: this.createdAt,
            paymentLink: this.paymentLink,
            disableACH: this.disableACH,
            disableCard: this.disableCard,
            merchant: this.merchant,
            products: this.products,
            objectType: this.objectType,
            isReusable: this.isReusable,
            isInvoice: this.isInvoice,
            dueDate: this.dueDate,
            qbInvoiceId: this.qbInvoiceId,
            hasBeenSyncedToQuickbooks: this.hasBeenSyncedToQuickbooks
        };
    }

    paymentLink: string;
    isReusable: boolean
    id: number;
    metadata: string;
    uniqueId: string;
    accountId: number;
    disableACH: boolean;
    disableCard: boolean;
    status: string;
    accountEmail: string;
    merchant: Merchant; // Assuming the Merchant type has been imported and defined elsewhere
    products: Product[]; // Assuming the Product type has been imported and defined elsewhere
    wallets: Wallet[]
    currencies: Currency[]
    isInvoice: boolean;
    dueDate: number;
    qbInvoiceId: string;
    hasBeenSyncedToQuickbooks: boolean;
    objectType: string = "payment_link";

    public constructor(otplQ?: IGuestPaymentLinkQuery) {
        super(GuestPaymentLink);
        Object.assign(this, otplQ);
    }

    public static createQuery(ipq: IGuestPaymentLinkQuery) {
        return new GuestPaymentLinkQuery(ipq);
    }
}
