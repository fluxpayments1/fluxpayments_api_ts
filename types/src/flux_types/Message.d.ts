import { FluxType } from "./FluxType";
import { IMessage } from "./IMessage";
export declare class Message extends FluxType implements IMessage {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        conversationId: number;
        messageText: string;
        isUserMessage: boolean;
        createdObjects: string;
        updatedObjects: string;
        deletedObjects: string;
        returnedObjects: string;
        todoList: string;
        pendingApproval: boolean;
        previewData: string;
        activeStatus: boolean;
        createdAt: number;
        updatedAt: Date;
        metadata: string;
        version: number;
        objectType: string;
    };
    id: number;
    uniqueId: string;
    merchantId?: number;
    conversationId?: number;
    messageText?: string;
    isUserMessage?: boolean;
    createdObjects?: string;
    updatedObjects?: string;
    deletedObjects?: string;
    returnedObjects?: string;
    todoList?: string;
    pendingApproval?: boolean;
    /** Display data for the invoice/link preview popup (PROPOSED_ACTIONS never leaves the backend). */
    previewData?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    protected objectType: string;
    constructor(data?: Partial<IMessage>);
    static createInstanceLazy(data: Partial<IMessage>): Promise<Message>;
    static createInstanceSafe(data: Partial<IMessage>): Promise<Message>;
}
