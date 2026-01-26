import { RequestBodyBase } from "./RequestBodyBase";
export declare class ResendTransactionEmailRequest extends RequestBodyBase {
    private transactionId;
    private recipientType;
    constructor();
    loadClientData(transactionId: number, recipientType: "MERCHANT" | "CUSTOMER"): void;
    getRequestAsString(): string;
}
