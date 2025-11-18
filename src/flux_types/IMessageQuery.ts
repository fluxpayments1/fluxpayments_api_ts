import { IMessage } from "./IMessage";
import { ISearchOptions } from "./ISearchOptions";

export type IMessageQuery = Partial<IMessage> & Partial<ISearchOptions>;