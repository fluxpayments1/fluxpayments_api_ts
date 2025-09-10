import { FluxType } from './FluxType';
import { INotification } from './INotification';
export declare class Notification extends FluxType implements INotification {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        uniqueId: string;
        metadata: string;
        version: number;
        objectType: string;
        isOpened: boolean;
        message: string;
    };
    objectType: string;
    uniqueId: string;
    metadata: string;
    version: number;
    message: string;
    isOpened: boolean;
    constructor(notifications?: Partial<INotification>);
}
