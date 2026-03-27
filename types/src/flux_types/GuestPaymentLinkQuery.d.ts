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
export declare class GuestPaymentLinkQuery extends BaseQuery<GuestPaymentLink> {
    serialize(): {
        id: number;
        metadata: string;
        uniqueId: string;
        accountId: number;
        status: string;
        accountEmail: string;
        createdAt: number;
        paymentLink: string;
        disableACH: boolean;
        disableCard: boolean;
        merchant: Merchant;
        products: Product[];
        objectType: string;
        isReusable: boolean;
        isInvoice: boolean;
        dueDate: number;
        customerEmail: string;
        customerFirstName: string;
        customerLastName: string;
        customerPhone: string;
        qbInvoiceId: string;
        hasBeenSyncedToQuickbooks: boolean;
    };
    customerEmail: string;
    customerFirstName: string;
    customerLastName: string;
    customerPhone: string;
    paymentLink: string;
    isReusable: boolean;
    id: number;
    metadata: string;
    uniqueId: string;
    accountId: number;
    disableACH: boolean;
    disableCard: boolean;
    status: string;
    accountEmail: string;
    merchant: Merchant;
    products: Product[];
    wallets: Wallet[];
    currencies: Currency[];
    isInvoice: boolean;
    dueDate: number;
    qbInvoiceId: string;
    hasBeenSyncedToQuickbooks: boolean;
    objectType: string;
    constructor(otplQ?: IGuestPaymentLinkQuery);
    static createQuery(ipq: IGuestPaymentLinkQuery): GuestPaymentLinkQuery;
}
