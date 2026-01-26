import { RequestBodyBase } from "./RequestBodyBase";
export declare class ResendPaymentRequestRequest extends RequestBodyBase {
    private paymentLinkId;
    constructor();
    loadClientData(paymentLinkId: number): void;
    getRequestAsString(): string;
}
