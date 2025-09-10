import { FluxType } from './FluxType';
export declare class EnabledStatesTax extends FluxType {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        activeStatus: any;
        uniqueid: string;
        version: number;
        email: string;
        metadata: string;
        enabled: any;
        objectType: string;
        stateCode: string;
    };
    id: number;
    activeStatus: any;
    uniqueid: string;
    version: number;
    email: string;
    metadata: string;
    enabled: any;
    stateCode: string;
    protected objectType: string;
    constructor(enabledStatesTax?: Partial<EnabledStatesTax>);
}
