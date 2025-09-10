import { IPermissions } from "./IPermissions";
import { FluxType } from "./FluxType";
export declare class Permissions extends FluxType implements IPermissions {
    id: number;
    uniqueId: string;
    metadata: string;
    permissionObjectType: string;
    permissionAction: string;
    getDispName(): string;
    protected objectType: string;
    obName: string;
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        objectType: string;
        permissionObjectType: string;
        permissionAction: string;
    };
    constructor(c?: Partial<IPermissions>);
}
