import { BaseQuery } from "./BaseQuery";
import { Transaction } from "./Transaction";
import { TransactionQuery } from "./TransactionQuery";
import { ITransactionTotalsDailyQuery } from "./ITransactionTotalsDailyQuery";
import { TransactionTotalsDaily } from "./TransactionTotalsDaily";

/**
 * This is an object that is used to query for transaction_totals_dailys.
 */
export class TransactionTotalsDailyQuery extends TransactionQuery {
    constructor() {
        super()
        this.attachedObject = TransactionTotalsDaily
    }    

}
