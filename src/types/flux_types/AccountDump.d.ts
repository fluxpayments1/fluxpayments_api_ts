import { AccountUserType, DumpId, FluxType, IAccount } from "./";
export declare class AccountDump extends FluxType {
    obName: string;
    serialize(): void;
    protected objectType: string;
    dumpId: DumpId;
    firstName: string;
    middleName: string;
    lastName: string;
    metadata: string;
    accountEmail: string;
    accountUserType: AccountUserType;
    creationTime: Date;
    getInterface(): IAccount;
    constructor(accDump?: any);
}
