import { BaseQuery } from "./BaseQuery";
import { IConversationQuery } from "./IConversationQuery";
import { Conversation } from "./Conversation";
/**
 * This is an object that is used to query for conversations.
 */
export declare class ConversationQuery extends BaseQuery<Conversation> implements IConversationQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        title: string;
        chatType: "ask" | "support" | "agent";
        activeStatus: boolean;
        metadata: string;
        objectType: string;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    title?: string;
    chatType?: 'ask' | 'support' | 'agent';
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string;
    constructor(conversationQuery?: IConversationQuery);
    static createQuery(icq: IConversationQuery): ConversationQuery;
}
