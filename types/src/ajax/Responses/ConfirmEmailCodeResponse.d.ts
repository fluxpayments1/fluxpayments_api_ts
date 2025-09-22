import { ResponseBodyBase } from "./ResponseBodyBase";
import { CustomerAccountData } from "../../flux_types/CustomerAccountData";
import { CustomerSensitiveData } from "../../flux_types/CustomerSensitiveData";
export interface CustomerTransactionsData {
    id: number;
    masterMacId: number;
    email: string;
    databaseName: string;
    transactionId: number;
    activeStatus: boolean;
    createdAt: string;
    updatedAt: string;
    uniqueId: string;
    metadata: string;
    objectType: string;
    merchantId: number;
    version: number;
}
export interface TransactionDetails {
    id: number;
    txnHash: string;
    direction: string;
    transactionId: number;
    productId: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    productName: string;
    productDescription: string;
    productSku: string;
    currency: string;
    createdAt: string;
    updatedAt: string;
    activeStatus: boolean;
    uniqueId: string;
    metadata: string;
    objectType: string;
    merchantId: number;
    databaseName: string;
    version: number;
}
export declare class ConfirmEmailCodeResponse extends ResponseBodyBase {
    private _message;
    private _confirmed;
    private _transactionData;
    private _sensitiveData;
    private _accountData;
    private _transactionDetails;
    get message(): string;
    set message(message: string);
    get confirmed(): boolean;
    set confirmed(confirmed: boolean);
    get transactionData(): CustomerTransactionsData[];
    set transactionData(transactionData: CustomerTransactionsData[]);
    get sensitiveData(): CustomerSensitiveData[];
    set sensitiveData(sensitiveData: CustomerSensitiveData[]);
    get accountData(): CustomerAccountData[];
    set accountData(accountData: CustomerAccountData[]);
    get transactionDetails(): TransactionDetails[];
    set transactionDetails(transactionDetails: TransactionDetails[]);
    getClientReturnValue(): ConfirmEmailCodeResponse;
}
