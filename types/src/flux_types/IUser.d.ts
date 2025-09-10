import { Permissions } from "./Permissions";
export default interface IUser {
    uniqueId?: string;
    id?: number;
    metadata?: string;
    isApiKey?: boolean;
    isAdminKey?: boolean;
    isAccountLocked?: boolean;
    userEmail?: string;
    customerPublicKey?: string;
    permissions?: Permissions[];
}
