import { ResponseBodyBase } from "./ResponseBodyBase";
import { ForthClientMapping } from "../../flux_types/ForthClientMapping";
import { ForthActivityEvent } from "../../flux_types/ForthActivityEvent";
import { ForthScheduledCharge } from "../../flux_types/ForthScheduledCharge";
export interface ForthClientDetailResult {
    status: number;
    errorMsg?: string;
    mapping: ForthClientMapping | null;
    /** Every debt/charge for this client, newest processDate first. */
    charges: ForthScheduledCharge[];
    /** Full activity history for this client (newest first). */
    events: ForthActivityEvent[];
    cardBrand?: string;
    cardLastFour?: string;
    cardAuthStatus?: string;
    cardLastAuthError?: string;
    clientName?: string;
    clientEmail?: string;
    clientPhone?: string;
    /** A card-intake form already open for this client, if any. */
    openIntakeUrl?: string;
    /** Charges still retrying (dunning). Powers the "they'll move to the new card" warning. */
    activeDunningCount: number;
}
export declare class ForthClientDetailResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): ForthClientDetailResponse;
    getClientReturnValue(): ForthClientDetailResult;
}
