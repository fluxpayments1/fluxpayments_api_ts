import { BaseQuery } from "./BaseQuery";
import { IUserQuery } from "./IUserQuery";
import { User } from "./User";
export declare class UserQuery extends BaseQuery<User> implements IUserQuery {
    protected objectType: string;
    uniqueId?: string;
    id?: number;
    metadata?: string;
    isApiKey?: boolean;
    isAdminKey?: boolean;
    isAccountLocked?: boolean;
    userEmail?: string;
    customerPublicKey?: string;
    permissions: any;
    serialize(): {
        id: number;
        objectType: string;
        uniqueId: string;
        metadata: string;
        isApiKey: boolean;
        isAdminKey: boolean;
        isAccountLocked: boolean;
        userEmail: string;
        customerPublicKey: string;
    };
    constructor(iUserQ?: IUserQuery);
    static createQuery(ipq: IUserQuery): UserQuery;
}
