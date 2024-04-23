import { Product } from "flux_types/Product";
import { Transaction } from "flux_types/Transaction";
import { RequestBodyBase } from "./RequestBodyBase";
export declare class CreateTransactionRequest extends RequestBodyBase {
    private _prod;
    private _txn;
    get txn(): any;
    set txn(txn: any);
    get prod(): Product[];
    set prod(prod: Product | Product[]);
    loadClientData(txn: Transaction, prod: Product | Product[]): void;
}
