/**
 * One outbound customer/merchant email and its delivery lifecycle — the
 * "we told the customer" half of a chargeback evidence packet.
 * Server-written; read-only to a client.
 */
export interface IEmailLog {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    /** Provider's message id (SendGrid/Mailgun) used to match webhook events. */
    providerMessageId?: string;
    transactionId?: number;
    paymentLinkId?: number;
    accountId?: number;
    recipient?: string;
    template?: string;
    /** SENDGRID | MAILGUN */
    provider?: string;
    sentAt?: number;
    deliveredAt?: number;
    openedAt?: number;
    clickedAt?: number;
    bounceReason?: string;
    status?: string;
    /** S3 key of the rendered email body. */
    bodyS3Key?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    createdAt?: number;
    updatedAt?: Date;
}
