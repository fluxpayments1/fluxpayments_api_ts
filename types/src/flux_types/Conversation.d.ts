import { FluxType } from "./FluxType";
import { IConversation } from "./IConversation";
export declare class Conversation extends FluxType implements IConversation {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        uniqueId: string;
        merchantId: number;
        title: string;
        chatType: "ask" | "support" | "agent";
        lastMessageAt: string | Date;
        lastMessageText: string;
        activeStatus: boolean;
        metadata: string;
        version: number;
        objectType: string;
    };
    id: number;
    uniqueId: string;
    merchantId?: number;
    title?: string;
    chatType?: 'ask' | 'support' | 'agent';
    lastMessageAt?: Date | string;
    lastMessageText?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
    protected objectType: string;
    constructor(data?: Partial<IConversation>);
    static createInstanceLazy(data: Partial<IConversation>): Promise<Conversation>;
    static createInstanceSafe(data: Partial<IConversation>): Promise<Conversation>;
}
