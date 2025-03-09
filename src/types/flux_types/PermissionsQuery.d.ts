import { BaseQuery } from "./BaseQuery";
import { IPermissionsQuery } from "./IPermissionsQuery";
import { IProductQuery } from "./IProductQuery";
import { Permissions } from "./Permissions";
/**
 * This is an object that is used to query for products.
 */
export declare class PermissionsQuery extends BaseQuery<Permissions> implements IPermissionsQuery {
    protected objectType: string;
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        permissionObjectType: string;
        permissionAction: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    metadata?: string;
    permissionObjectType?: string;
    permissionAction?: string;
    constructor(permissionsQuery?: IPermissionsQuery);
    static createQuery(ipq: IProductQuery): PermissionsQuery;
}
