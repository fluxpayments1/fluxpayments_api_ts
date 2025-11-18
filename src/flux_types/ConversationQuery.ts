import { BaseQuery } from "./BaseQuery";
import { IConversationQuery } from "./IConversationQuery";
import { Conversation } from "./Conversation";

/**
 * This is an object that is used to query for conversations.
 */
export class ConversationQuery extends BaseQuery<Conversation> implements IConversationQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            title: this.title,
            chatType: this.chatType,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
        };
    }

    id?: number;
    uniqueId?: string;
    merchantId?: number;
    title?: string;
    chatType?: 'ask' | 'support' | 'agent';
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string = "conversation";

    constructor(conversationQuery?: IConversationQuery) {
        super(Conversation);
        Object.assign(this, conversationQuery);
    }

    public static createQuery(icq: IConversationQuery) {
        return new ConversationQuery(icq);
    }
}

