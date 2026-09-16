/**
 * A card-network or ACH dispute (chargeback) raised against a transaction.
 *
 * Server-written for network-sourced cases (`source = REPORTING_API`); the
 * merchant may create a case manually (`source = MANUAL`) and edit the
 * rebuttal narrative. Everything else (bundle keys, hashes, resolution) is
 * evidence the server owns.
 */
export interface IDispute {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    transactionId?: number;
    /** VISA | MASTERCARD | AMEX | DISCOVER | ACH */
    network?: string;
    caseNumber?: string;
    reasonCode?: string;
    /** FRAUD | NOT_RECEIVED | CANCELLED_RECURRING | NOT_AS_DESCRIBED | CREDIT_NOT_PROCESSED | DUPLICATE | OTHER */
    reasonCategory?: string;
    amount?: number | string;
    currency?: string;
    /** OPENED | EVIDENCE_REQUESTED | RESPONDED | WON | LOST | ACCEPTED | EXPIRED */
    status?: string;
    openedAt?: number;
    respondByAt?: number;
    respondedAt?: number;
    resolvedAt?: number;
    rebuttalText?: string;
    bundleS3Key?: string;
    bundleSha256?: string;
    /** REPORTING_API | MANUAL */
    source?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    createdAt?: number;
    updatedAt?: Date;
}
