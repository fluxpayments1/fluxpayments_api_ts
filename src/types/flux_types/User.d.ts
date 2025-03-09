import { FluxType } from './FluxType';
import IUser from './IUser';
import { Permissions } from './Permissions';
export declare class User extends FluxType implements IUser {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        objectType: string;
        uniqueId: string;
        metadata: string;
        isApiKey: boolean;
        isAdminKey: boolean;
        isAccountLocked: boolean;
        userEmail: string;
        permissions: Permissions[];
        password: string;
        customerPublicKey: string;
    };
    uniqueId: string;
    id: number;
    metadata: string;
    isApiKey: boolean;
    isAdminKey: boolean;
    isAccountLocked: boolean;
    userEmail: string;
    customerPublicKey: string;
    password: string;
    permissions: Permissions[];
    protected objectType: string;
    constructor(user?: Partial<IUser>);
}
