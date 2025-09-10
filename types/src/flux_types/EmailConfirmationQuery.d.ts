import { EmailConfirmation } from "./EmailConfirmation";
import { BaseQuery } from "./BaseQuery";
import { IEmailConfirmationQuery } from "./IEmailConfirmationQuery";
/**
 * This is an object that is used to query for enabled_states_taxs.
 */
export declare class EmailConfirmationQuery extends BaseQuery<EmailConfirmation> {
    serialize(): {
        objectType: string;
        code: string;
        payLink: string;
        email: string;
    };
    code: string;
    payLink: string;
    email: string;
    objectType: string;
    constructor(tokQ?: IEmailConfirmationQuery);
    static createQuery(ipq: IEmailConfirmationQuery): EmailConfirmationQuery;
}
