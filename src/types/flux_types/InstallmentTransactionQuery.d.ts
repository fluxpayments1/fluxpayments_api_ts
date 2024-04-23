import { BaseQuery } from "./BaseQuery";
import { IInstallmentTransactionQuery } from "./IInstallmentTransactionQuery";
/**
 * This is an object that is used to query for installment_transactions.
 */
export declare class InstallmentTransactionQuery extends BaseQuery {
    serialize(): {
        id: number;
        metadata: string;
        objectType: string;
        originalTransactionId: number;
        installmentsLeft: number;
        installmentAmount: number;
        otplId: number;
        installmentPeriod: any;
        status: any;
    };
    id: number;
    metadata: string;
    originalTransactionId: number;
    installmentsLeft: number;
    installmentAmount: number;
    otplId: number;
    installmentPeriod: any;
    status: any;
    protected objectType: string;
    constructor(tokQ?: IInstallmentTransactionQuery);
    static createQuery(ipq: IInstallmentTransactionQuery): InstallmentTransactionQuery;
}
