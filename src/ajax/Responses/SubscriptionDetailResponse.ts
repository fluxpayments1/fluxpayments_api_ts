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
export class SubscriptionDetailResponse extends ResponseBodyBase {
    private result: SubscriptionDetailResult = {};

    constructor() {
        super();
    }

    public setResponseJSON(jsonString: string): SubscriptionDetailResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            subscription: p.subscription ?? undefined,
            account: p.account ?? undefined,
            product: p.product ?? undefined,
            paymentLink: p.paymentLink ?? undefined,
            card: p.card ?? undefined,
            savedCards: p.savedCards ?? undefined,
            transactions: p.transactions ?? undefined,
            retryAttempts: p.retryAttempts ?? undefined,
            upcoming: p.upcoming ?? undefined,
            actions: p.actions ?? undefined,
            note: p.note ?? undefined,
            cardForm: p.cardForm ?? undefined,
        };
        return this;
    }

    public getClientReturnValue(): SubscriptionDetailResult {
        return this.result;
    }
}
