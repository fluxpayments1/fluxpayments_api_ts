import { FluxType } from "./FluxType";
import { IForthActivityEvent } from "./IForthActivityEvent";
export declare class ForthActivityEvent extends FluxType implements IForthActivityEvent {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        credentialsId: number;
        mappingId: number;
        eventType: string;
        severity: string;
        message: string;
        payload: string;
        createdAt: number;
        activeStatus: boolean;
        metadata: string;
        version: number;
        objectType: string;
    };
    id: number;
    uniqueId: string;
    merchantId?: number;
    credentialsId?: number;
    mappingId?: number;
    eventType?: string;
    severity?: string;
    message?: string;
    payload?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    protected objectType: string;
    constructor(data?: Partial<IForthActivityEvent>);
    static createInstanceLazy(data: Partial<IForthActivityEvent>): Promise<ForthActivityEvent>;
    static createInstanceSafe(data: Partial<IForthActivityEvent>): Promise<ForthActivityEvent>;
}
