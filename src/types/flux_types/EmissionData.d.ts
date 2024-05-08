export declare class MulticastEmissionDataId {
    uuid: string;
    sequenceNumber: number;
    constructor(uuid?: string, sequenceNumber?: number);
}
export declare class EmissionData {
    private static readonly DEFAULT_MESSAGE_IDENTIFIER;
    messageIdentifier: number;
    objectId?: number;
    id: MulticastEmissionDataId;
    merchantId?: number;
    notifyType?: string;
    resyncRequired?: boolean;
    notifyObjectType?: string;
    associatedData: string;
    constructor(obj: any);
    getFluxType(): any;
    toJSON(): string;
}
