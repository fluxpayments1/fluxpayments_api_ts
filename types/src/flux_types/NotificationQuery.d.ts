import { BaseQuery } from "./BaseQuery";
import { Notification } from "./Notification";
import { INotificationQuery } from "./INotificationQuery";
/**
 * This is an object that is used to query for object_countss.
 */
export declare class NotificationQuery extends BaseQuery<Notification> {
    serialize(): {
        id: number;
        uniqueid: string;
        metadata: string;
        objectType: string;
        version: number;
        isOpened: boolean;
        message: string;
        createdAt: number;
    };
    id: number;
    uniqueId: string;
    isOpened: boolean;
    metadata: string;
    version: number;
    message: string;
    objectType: string;
    constructor(tokQ?: INotificationQuery);
}
