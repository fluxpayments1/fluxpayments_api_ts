import { RequestBodyBase } from "./RequestBodyBase";

/**
 * Write the merchant's rebuttal on a dispute, and optionally mark it responded
 * (docs/chargeback-evidence/DESIGN.md 2.4, 7.3).
 *
 * <p>The rebuttal is MANDATORY content for Visa 13.3 (not as described /
 * defective) — the network requires a merchant statement answering the
 * cardholder's specific claim alongside the matching-description evidence.
 *
 * CLEARING: omit `rebuttalText` to leave the stored text alone; send `""` to
 * clear it. Same convention as the fulfillment endpoint and for the same reason —
 * the platform's normal persisted write is a non-null merge, which structurally
 * cannot clear a field, and a stale rebuttal that no longer matches the uploaded
 * evidence is worse than none.
 *
 * `markResponded` NEVER sets an outcome. WON / LOST / EXPIRED come from the
 * processor's own report, never from a client.
 */
export interface RespondToDisputeParams {
    disputeId: number;
    /** "" clears. Omit to leave alone. */
    rebuttalText?: string;
    /** true = the merchant has sent their response bundle to their bank. */
    markResponded?: boolean;
}

export class RespondToDisputeRequest extends RequestBodyBase {
    private disputeId: number;
    private rebuttalText?: string;
    private markResponded?: boolean;

    constructor() {
        super();
    }

    public loadClientData(params: RespondToDisputeParams): void {
        this.disputeId = params.disputeId;
        this.rebuttalText = params.rebuttalText;
        this.markResponded = params.markResponded;
    }

    public getRequestAsString(): string {
        const data: any = { disputeId: this.disputeId };
        // `!== undefined`, not a truthiness test: a truthiness test would swallow
        // "" and make clearing impossible, which is the one behaviour this
        // convention exists to add.
        if (this.rebuttalText !== undefined && this.rebuttalText !== null) {
            data.rebuttalText = this.rebuttalText;
        }
        if (this.markResponded !== undefined && this.markResponded !== null) {
            data.markResponded = this.markResponded;
        }
        return JSON.stringify(data);
    }
}
