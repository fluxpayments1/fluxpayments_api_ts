import { INotification } from "./INotification";
import { ISearchOptions } from ".";
export type INotificationQuery = Partial<INotification> & Partial<ISearchOptions>;
