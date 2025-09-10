import { EmailConfirmation } from "./EmailConfirmation";
import { BaseQuery } from "./BaseQuery";
import { IEmailConfirmationQuery } from "./IEmailConfirmationQuery";

/**
 * This is an object that is used to query for enabled_states_taxs.
 */
export class EmailConfirmationQuery extends BaseQuery<EmailConfirmation> {
    public serialize() {
        return {
            objectType: this.objectType,
            code: this.code,
            payLink: this.payLink,
            email: this.email
        }
    }

    code: string
    payLink: string
    email: string
    objectType = "email_confirmation";
    

    public constructor(tokQ?: IEmailConfirmationQuery){
        super(EmailConfirmation);
        Object.assign(this, tokQ);
    }


    public static createQuery(ipq:  IEmailConfirmationQuery) {
        return new EmailConfirmationQuery(ipq);
    }
}
