import { ResponseBodyBase } from "./ResponseBodyBase";
import { MerchantForthCredentials } from "../../flux_types/MerchantForthCredentials";
import { ForthClientMapping } from "../../flux_types/ForthClientMapping";
import { ForthActivityEvent } from "../../flux_types/ForthActivityEvent";
import { ForthScheduledCharge } from "../../flux_types/ForthScheduledCharge";

export interface ForthStatusResult {
    connected: boolean;
    credentials: MerchantForthCredentials | null;
    linkedClientCount: number;
    cardsOnFileCount: number;
    chargesThisMonthCount: number;
    chargesThisMonthAmount: string | number;
    failedChargesCount: number;
    awaitingCardRefreshCount: number;
    recentEvents: ForthActivityEvent[];
    mappings: ForthClientMapping[];
    totalMappings: number;
    mappingPage: number;
    mappingPageSize: number;
    scheduledChargesByMapping: { [mappingId: number]: ForthScheduledCharge[] };
    /** Merchant-wide upcoming charges sorted by effective next-charge time. */
    upcomingCharges: ForthScheduledCharge[];
    /** mappingId -> client display name for the upcoming charges. */
    upcomingClientNames: { [mappingId: number]: string };
    /** Charges due now through +7 days (merchant-scoped, chargeable statuses only).
     *  Absent on an older backend - callers MUST distinguish absent from zero. */
    upcomingSevenDayCount?: number;
    /** Summed amount of the rows upcomingSevenDayCount counts. Absent on an older backend. */
    upcomingSevenDayAmount?: string | number;
}

export class GetForthStatusResponse extends ResponseBodyBase {
    private result: ForthStatusResult = {
        connected: false,
        credentials: null,
        linkedClientCount: 0,
        cardsOnFileCount: 0,
        chargesThisMonthCount: 0,
        chargesThisMonthAmount: 0,
        failedChargesCount: 0,
        awaitingCardRefreshCount: 0,
        recentEvents: [],
        mappings: [],
        totalMappings: 0,
        mappingPage: 1,
        mappingPageSize: 25,
        scheduledChargesByMapping: {},
        upcomingCharges: [],
        upcomingClientNames: {},
    };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): GetForthStatusResponse {
        const p = JSON.parse(jsonString);
        const charges: { [mappingId: number]: ForthScheduledCharge[] } = {};
        if (p.scheduledChargesByMapping && typeof p.scheduledChargesByMapping === 'object') {
            for (const k of Object.keys(p.scheduledChargesByMapping)) {
                charges[Number(k)] = (p.scheduledChargesByMapping[k] || [])
                    .map((c: any) => new ForthScheduledCharge(c));
            }
        }
        this.result = {
            connected: !!p.connected,
            credentials: p.credentials ? new MerchantForthCredentials(p.credentials) : null,
            linkedClientCount: p.linkedClientCount || 0,
            cardsOnFileCount: p.cardsOnFileCount || 0,
            chargesThisMonthCount: p.chargesThisMonthCount || 0,
            chargesThisMonthAmount: p.chargesThisMonthAmount || 0,
            failedChargesCount: p.failedChargesCount || 0,
            awaitingCardRefreshCount: p.awaitingCardRefreshCount || 0,
            recentEvents: (p.recentEvents || []).map((e: any) => new ForthActivityEvent(e)),
            mappings: (p.mappings || []).map((m: any) => new ForthClientMapping(m)),
            totalMappings: p.totalMappings || 0,
            mappingPage: p.mappingPage || 1,
            mappingPageSize: p.mappingPageSize || 25,
            scheduledChargesByMapping: charges,
            upcomingCharges: (p.upcomingCharges || []).map((c: any) => new ForthScheduledCharge(c)),
            upcomingClientNames: (p.upcomingClientNames && typeof p.upcomingClientNames === 'object')
                ? p.upcomingClientNames : {},
            // Deliberately NOT `|| 0` like the sibling counts above: the portal's
            // hasSevenDayMetric guard treats undefined as "server never sent it" and
            // hides the tile. Coercing to 0 would render a fake "0 charges / $0.00".
            upcomingSevenDayCount: p.upcomingSevenDayCount,
            upcomingSevenDayAmount: p.upcomingSevenDayAmount,
        };
        return this;
    }

    public getClientReturnValue(): ForthStatusResult { return this.result; }
}
