import { RequestBodyBase } from "./RequestBodyBase";
export declare class ProcessForthChargeNowRequest extends RequestBodyBase {
    private chargeId?;
    constructor();
    loadClientData(chargeId?: number): void;
    getRequestAsString(): string;
}
