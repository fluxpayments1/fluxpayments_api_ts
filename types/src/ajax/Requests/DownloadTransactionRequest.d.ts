import { RequestBodyBase } from "./RequestBodyBase";
export declare class DownloadTransactionRequest extends RequestBodyBase {
    private _transactionId;
    get transactionId(): string;
    set transactionId(transactionId: string);
    loadClientData(transactionId: string): void;
}
