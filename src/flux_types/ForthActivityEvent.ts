import { FluxType } from "./FluxType";
import { IForthActivityEvent } from "./IForthActivityEvent";

export class ForthActivityEvent extends FluxType implements IForthActivityEvent {
    public obName: string = "ForthActivityEvent";

    public getDispName(): string {
        return this.eventType + (this.message ? " — " + this.message : "");
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            credentialsId: this.credentialsId,
            mappingId: this.mappingId,
            eventType: this.eventType,
            severity: this.severity,
            message: this.message,
            payload: this.payload,
            createdAt: this.createdAt,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            version: this.version,
            objectType: this.objectType
        };
    }

    public id: number;
    public uniqueId: string;
    public merchantId?: number;
    public credentialsId?: number;
    public mappingId?: number;
    public eventType?: string;
    public severity?: string;
    public message?: string;
    public payload?: string;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "forth_activity_event";

    constructor(data?: Partial<IForthActivityEvent>) {
        super(data, ForthActivityEvent);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IForthActivityEvent>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IForthActivityEvent>) {
        return await FluxType.instantiateInstance(data, this);
    }
}
