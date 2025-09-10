import { INotification } from "./INotification";
import { IObjectCounts } from "./IObjectCounts";
import { ISearchOptions } from ".";

export type INotificationQuery = Partial<INotification> & Partial<ISearchOptions>;
