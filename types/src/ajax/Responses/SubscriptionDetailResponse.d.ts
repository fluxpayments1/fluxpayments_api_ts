import { ResponseBodyBase } from "./ResponseBodyBase";
/** One subscription as the portal's subscription page shows it (hand-built server maps). */
export interface SubscriptionDetailResult {
    subscription?: any;
    account?: any;
    product?: any;
    paymentLink?: any;
    /** The card the next charge uses: brand, last4, expMonth, expYear. */
    card?: any;
    savedCards?: any[];
    transactions?: any[];
    retryAttempts?: any[];
    /** The next few charge dates (ISO). */
    upcoming?: string[];
    /** cancel / defer / reschedule / changeCard booleans, plus scheduleBlockedReason. */
    actions?: any;
    /** Set by manageSubscription: what changed, in plain words. */
    note?: string;
    /** The card form sent from the page that the customer has not used yet: id, url, createdAt. */
    cardForm?: any;
}
/** Explicit whitelist: a key the backend adds is dropped until it is named here. */
export declare class SubscriptionDetailResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): SubscriptionDetailResponse;
    getClientReturnValue(): SubscriptionDetailResult;
}
