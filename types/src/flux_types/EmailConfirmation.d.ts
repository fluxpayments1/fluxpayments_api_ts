import { IEmailConfirmation } from "./IEmailConfirmation";
import { Account } from "./Account";
import { Address } from "./Address";
import { FluxType } from './FluxType';
export declare class EmailConfirmation extends FluxType implements IEmailConfirmation {
    obName: string;
    getDispName(): string;
    objectType: string;
    payLink: string;
    email: string;
    code: string;
    acc: Account;
    accountSession: string;
    adds: Address[];
    constructor(ec?: Partial<EmailConfirmation>);
    serialize(): {
        id: number;
        payLink: string;
        email: string;
        code: string;
        objectType: string;
        acc: Account;
        adds: Address[];
        accountSession: string;
    };
}
