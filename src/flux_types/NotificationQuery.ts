import { BaseQuery } from "./BaseQuery";
import { IObjectCountsQuery } from "./IObjectCountsQuery";
import { ObjectCounts } from "./ObjectCounts";
import { Notification } from "./Notification";
import { INotificationQuery } from "./INotificationQuery";

/**
 * This is an object that is used to query for object_countss.
 */
export class NotificationQuery extends BaseQuery<Notification> {
    public serialize() {
        return {
            id: this.id,
            uniqueid: this.uniqueId,
            metadata: this.metadata,
            objectType: this.objectType,
            version: this.version,
            isOpened: this.isOpened,
            message : this.message,
            createdAt: this.createdAt
        };
    }
    id: number;
    uniqueId: string;
    isOpened: boolean
    metadata: string;
    version: number;
    message: string
    objectType: string = "notification";

    public constructor(tokQ?: INotificationQuery){
        super(Notification);
        Object.assign(this, tokQ);
        // Add additional constructor logic here if needed
    }

}
