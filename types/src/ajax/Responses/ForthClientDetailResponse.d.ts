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
    /** Charges on the automatic retry schedule. A completed card form pauses them until they are rescheduled in Forth; powers the warning before sending a form. */
    activeDunningCount: number;
}
export declare class ForthClientDetailResponse extends ResponseBodyBase {
    private result;
    constructor();
    setResponseJSON(jsonString: string): ForthClientDetailResponse;
    getClientReturnValue(): ForthClientDetailResult;
}
