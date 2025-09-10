import { FluxType } from './FluxType';
import _cloneDeep from 'lodash/cloneDeep';
import { INotification } from './INotification';

export class Notification extends FluxType implements INotification {
    obName: string = "Notification";

    getDispName(): string {
        return this.message
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            version: this.version,
            objectType: this.objectType,
            isOpened: this.isOpened,
            message : this.message
        };
    }
    public objectType: string = "notification";
    public uniqueId: string;
    public metadata: string;
    public version: number;
    public message: string
    public isOpened: boolean;
    public constructor(notifications?: Partial<INotification>) {
        super(notifications, Notification);
        Object.assign(this, notifications)
    }

}
