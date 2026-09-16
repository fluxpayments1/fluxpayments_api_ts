import { ResponseBodyBase } from "./ResponseBodyBase";

/**
 * One coverage picture. The DENOMINATOR (eligibleCount) is FINALIZED card/ACH
 * charges inside the 730-day evidence retention window — never "all
 * transactions", so a new transaction type cannot silently dilute the
 * percentage.
 */
export interface EvidenceCoverageBlock {
    /**
     * Did the server's count queries actually run?
     *
     * FALSE means every number here is a default, not a measurement — and the
     * defaults READ AS HEALTHY (eligibleCount 0 renders as "100% sealed", because no
     * card charges yet is deliberately not a coverage failure). So the portal must
     * HIDE its panels on false rather than paint a green 100% on the one surface
     * built to detect that evidence is NOT being produced.
     *
     * Absent in the payload is treated as FALSE (hide) — the same fail-safe the
     * components already use when this SDK method itself is missing from the
     * prebuilt bundle.
     */
    countsOk: boolean;
    eligibleCount: number;
    sealedCount: number;
    /**
     * Of sealedCount, how many were RECONSTRUCTED by the nightly backfill from
     * mutable sources after the fact, rather than captured at checkout. Reported
     * separately because backfillCount only counts reconstructions that have not
     * sealed yet — after one night they join sealedCount, and merchant-facing copy
     * must not claim charge-time capture for that share.
     */
    sealedReconstructedCount: number;
    /** sealedCount - sealedReconstructedCount: sealed from charge-time capture. */
    sealedLiveCount: number;
    /** Claimed but not yet sealed. */
    pendingCount: number;
    /** Claimed by the nightly backfill — a reconstruction, not a live capture. */
    backfillCount: number;
    /** Terminal render failures. Every one of these needs a human. */
    failedCount: number;
    /** Eligible charges with no packet promised at all — the backfill backlog. */
    unclaimedCount: number;
    /** sealed / eligible, 0-100. 100 when nothing is eligible yet. */
    sealedPct: number;
    sealedLast7Days: number;
    failedLast7Days: number;
    lastSealedAt: string | number | null;
    /** Charge date of the oldest eligible charge still unsealed. */
    oldestUnsealedAt: string | number | null;
    openDisputeCount: number;
    disputesDueWithin7Days: number;
}

export interface EvidenceCoverageMerchantRow {
    merchantId: number;
    businessName: string;
    eligibleCount: number;
    sealedCount: number;
    unsealedCount: number;
    sealedPct: number;
    openDisputeCount: number;
}

export interface EvidenceCoverageResult {
    /** True when the caller was allowed the cross-merchant block. */
    partnerView: boolean;
    /** True only for the ADMIN tier (unscoped). */
    admin: boolean;
    /** ALWAYS this merchant (act-as-resolved). */
    merchant: EvidenceCoverageBlock;
    /**
     * Aggregate over the caller's partner scope, or null for an ordinary
     * merchant login. Null rather than zeros on purpose — a merchant who is not
     * a partner must not see "0% across 0 merchants".
     */
    crossMerchant: EvidenceCoverageBlock | null;
    /** Per-merchant breakdown, worst coverage first. Empty unless partnerView. */
    merchants: EvidenceCoverageMerchantRow[];
}

const emptyBlock = (): EvidenceCoverageBlock => ({
    countsOk: false,
    eligibleCount: 0,
    sealedCount: 0,
    sealedReconstructedCount: 0,
    sealedLiveCount: 0,
    pendingCount: 0,
    backfillCount: 0,
    failedCount: 0,
    unclaimedCount: 0,
    sealedPct: 100,
    sealedLast7Days: 0,
    failedLast7Days: 0,
    lastSealedAt: null,
    oldestUnsealedAt: null,
    openDisputeCount: 0,
    disputesDueWithin7Days: 0,
});

const toBlock = (raw: any): EvidenceCoverageBlock => {
    const b = emptyBlock();
    if (!raw) return b;
    return {
        // Absent => false => the panel hides. A backend that predates the flag is a
        // version skew, and hiding is this panel's established safe state.
        countsOk: raw.countsOk === true,
        eligibleCount: raw.eligibleCount || 0,
        sealedCount: raw.sealedCount || 0,
        sealedReconstructedCount: raw.sealedReconstructedCount || 0,
        sealedLiveCount: raw.sealedLiveCount || 0,
        pendingCount: raw.pendingCount || 0,
        backfillCount: raw.backfillCount || 0,
        failedCount: raw.failedCount || 0,
        unclaimedCount: raw.unclaimedCount || 0,
        // 0 is NOT a safe default for a percentage: a payload missing the field
        // would render as "0% sealed" and read as a platform-wide outage.
        sealedPct: typeof raw.sealedPct === "number" ? raw.sealedPct : 100,
        sealedLast7Days: raw.sealedLast7Days || 0,
        failedLast7Days: raw.failedLast7Days || 0,
        lastSealedAt: raw.lastSealedAt ?? null,
        oldestUnsealedAt: raw.oldestUnsealedAt ?? null,
        openDisputeCount: raw.openDisputeCount || 0,
        disputesDueWithin7Days: raw.disputesDueWithin7Days || 0,
    };
};

export class GetEvidenceCoverageResponse extends ResponseBodyBase {
    private result: EvidenceCoverageResult = {
        partnerView: false,
        admin: false,
        merchant: emptyBlock(),
        crossMerchant: null,
        merchants: [],
    };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): GetEvidenceCoverageResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            partnerView: !!p.partnerView,
            admin: !!p.admin,
            merchant: toBlock(p.merchant),
            crossMerchant: p.crossMerchant ? toBlock(p.crossMerchant) : null,
            merchants: p.merchants || [],
        };
        return this;
    }

    public getClientReturnValue(): EvidenceCoverageResult {
        return this.result;
    }
}
