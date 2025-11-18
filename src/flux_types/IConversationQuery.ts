import { IBaseQuery } from "./IBaseQuery";
import { IConversation } from "./IConversation";
import { ISearchOptions } from "./ISearchOptions";

export type IConversationQuery = Partial<IConversation> & Partial<ISearchOptions>;
