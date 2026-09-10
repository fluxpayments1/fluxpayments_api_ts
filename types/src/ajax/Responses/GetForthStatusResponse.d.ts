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
    scheduledChargesByMapping: {
        [mappingId: number]: ForthScheduledCharge[];
    };
    /** Merchant-wide upcoming charges sorted by effective next-charge time. */
    upcomingCharges: ForthScheduledCharge[];
    /** mappingId -> client display name for the upcoming charges. */
    upcomingClientNames: {
        [mappingId: number]: string;
    };
    /** Charges due now through +7 days (merchant-scoped, chargeable statuses only).
     *  Absent on an older backend - callers MUST distinguish absent from zero. */
    upcomingSevenDayCount?: number;
    /** Summed amount of the rows upcomingSevenDayCount counts. Absent on an older backend. */
    upcomingSevenDayAmount?: string | number;
}
export declare class GetForthStatusResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): GetForthStatusResponse;
    getClientReturnValue(): ForthStatusResult;
}
