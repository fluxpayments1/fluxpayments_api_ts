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

export class ForthClientDetailResponse extends ResponseBodyBase {
    private result: ForthClientDetailResult = {
        status: 0,
        mapping: null,
        charges: [],
        events: [],
        activeDunningCount: 0,
    };

    constructor() { super(); }

    public setResponseJSON(jsonString: string): ForthClientDetailResponse {
        const p = JSON.parse(jsonString);
        this.result = {
            status: typeof p.status === "number" ? p.status : 0,
            errorMsg: p.errorMsg,
            mapping: p.mapping ? new ForthClientMapping(p.mapping) : null,
            charges: (p.charges || []).map((c: any) => new ForthScheduledCharge(c)),
            events: (p.events || []).map((e: any) => new ForthActivityEvent(e)),
            cardBrand: p.cardBrand,
            cardLastFour: p.cardLastFour,
            cardAuthStatus: p.cardAuthStatus,
            cardLastAuthError: p.cardLastAuthError,
            clientName: p.clientName,
            clientEmail: p.clientEmail,
            clientPhone: p.clientPhone,
            openIntakeUrl: p.openIntakeUrl,
            activeDunningCount: p.activeDunningCount || 0,
        };
        return this;
    }

    public getClientReturnValue(): ForthClientDetailResult { return this.result; }
}
