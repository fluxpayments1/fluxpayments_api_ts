import { RequestBodyBase } from ".";
import { Transaction, Product } from "../../flux_types/";
export declare class CreateTransactionRequest extends RequestBodyBase {
    private _prod;
    private _txn;
    get txn(): any;
    set txn(txn: any);
    get prod(): Product[];
    set prod(prod: Product | Product[]);
    loadClientData(txn: Transaction, prod: Product | Product[]): void;
}
