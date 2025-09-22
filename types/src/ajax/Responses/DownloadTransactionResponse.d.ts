import { ResponseBodyBase } from "./ResponseBodyBase";
export interface TransactionData {
    transactionId: string;
    amount: string;
    currency: string;
    status: string;
    date: string;
    description: string;
}
export declare class DownloadTransactionResponse extends ResponseBodyBase {
    private _transactionData;
    private _fileName;
    get transactionData(): TransactionData;
    set transactionData(transactionData: TransactionData);
    get fileName(): string;
    set fileName(fileName: string);
    getClientReturnValue(): DownloadTransactionResponse;
}
