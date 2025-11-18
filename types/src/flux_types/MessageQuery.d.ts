import { BaseQuery } from "./BaseQuery";
import { IMessageQuery } from "./IMessageQuery";
import { Message } from "./Message";
/**
 * This is an object that is used to query for messages.
 */
export declare class MessageQuery extends BaseQuery<Message> implements IMessageQuery {
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        conversationId: number;
        isUserMessage: boolean;
        activeStatus: boolean;
        metadata: string;
        objectType: string;
        version: number;
    };
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    conversationId?: number;
    isUserMessage?: boolean;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    objectType: string;
    constructor(messageQuery?: IMessageQuery);
    static createQuery(imq: IMessageQuery): MessageQuery;
}
