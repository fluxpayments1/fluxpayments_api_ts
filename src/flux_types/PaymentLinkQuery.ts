/*
 * Copyright (c) 2024 Flux Payment Solutions Company
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { BaseQuery } from "./BaseQuery";
import { IPaymentLinkQuery } from "./IPaymentLinkQuery";
import { PaymentLink } from "./PaymentLink";


/**
 * This is an object that is used to query for one_time_payment_links.
 */
export class PaymentLinkQuery extends BaseQuery<PaymentLink> implements IPaymentLinkQuery {
    public obName: string = "PaymentLink";
    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            objectType: this.objectType,
            createdAt: this.createdAt,
            disableACH: this.disableACH,
            disableCard: this.disableCard,
            uniqueId: this.uniqueId,
            isReusable: this.isReusable,
            liveStatus: this.liveStatus,
            removeOnSuccess: this.removeOnSuccess,
            paymentLink: this.paymentLink,
            name: this.name, 
            customerEmail: this.customerEmail,
            customerFirstName: this.customerFirstName,
            customerLastName: this.customerLastName,
            customerPhone: this.customerPhone,
            accountId: this.accountId,
            isInvoice: this.isInvoice,
            dueDate: this.dueDate,
            currentStatus: this.currentStatus,
            hasBeenSent: this.hasBeenSent,
            transferDirection: this.transferDirection,
            transferStatus: this.transferStatus,
            qbInvoiceId: this.qbInvoiceId,
            hasBeenSyncedToQuickbooks: this.hasBeenSyncedToQuickbooks,
            // Required by the Business detail page's Invoices/Transactions
            // tabs. Without it in serialize() the filter silently does not
            // transmit and the query returns EVERY invoice.
            businessId: this.businessId
        }
    }
    id: number;
    transferDirection?: 'PUSH' | 'PULL';
    transferStatus?: string;
    metadata: string;
    disableACH: boolean;
    customerEmail: string;
    customerFirstName: string;
    customerLastName: string;
    customerPhone: string;
    disableCard: boolean;
    name?: string;
    uniqueId: string;
    liveStatus: any;
    removeOnSuccess: any;
    createdAt: number;
    paymentLink: string;
    isReusable: boolean;
    accountId: number;
    isInvoice: boolean;
    dueDate: number;
    currentStatus: string;
    hasBeenSent: boolean;
    qbInvoiceId: string;
    hasBeenSyncedToQuickbooks: boolean;
    /** Filters links/invoices billed to one Business (Business detail page). */
    businessId: number;
    objectType: string = "payment_link";

    public constructor(tokQ?: IPaymentLinkQuery) {
        super(PaymentLink);
        Object.assign(this, tokQ);
        // Add additional constructor logic here if needed
    }

    // Additional methods like getToken and parseToken can be added here

    public static createQuery(ipq: IPaymentLinkQuery) {
        return new PaymentLinkQuery(ipq);
    }
}
