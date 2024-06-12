import { AccountUserType } from "./AccountUserType";
import { DumpId } from "./DumpId";
import { FluxType } from "./FluxType";
import { IAccount } from "./IAccount";
export declare class AccountDump extends FluxType implements IAccount {
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
    phoneNumber: string;
    creationTime: Date;
    getInterface(): IAccount;
    constructor(accDump?: any);
    static createInstanceLazy(acc: Partial<IAccount>): Promise<AccountDump>;
    static createInstanceSafe(acc: Partial<IAccount>): Promise<AccountDump>;
}
