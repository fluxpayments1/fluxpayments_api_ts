import { BaseQuery } from "./BaseQuery";
import { IMessageQuery } from "./IMessageQuery";
import { Message } from "./Message";

/**
 * This is an object that is used to query for messages.
 */
export class MessageQuery extends BaseQuery<Message> implements IMessageQuery {
    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            conversationId: this.conversationId,
            isUserMessage: this.isUserMessage,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            objectType: this.objectType,
            version: this.version,
        };
    }

    id?: number;
    uniqueId?: string;
    merchantId?: number;
    conversationId?: number;
    isUserMessage?: boolean;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string = "message";

    constructor(messageQuery?: IMessageQuery) {
        super(Message);
        Object.assign(this, messageQuery);
    }

    public static createQuery(imq: IMessageQuery) {
        return new MessageQuery(imq);
    }
}

