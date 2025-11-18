import { FluxType } from "./FluxType";
import { IConversation } from "./IConversation";

export class Conversation extends FluxType implements IConversation {
    public obName: string = "Conversation";

    public getDispName(): string {
        return this.title || `Conversation #${this.id}`;
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            title: this.title,
            chatType: this.chatType,
            lastMessageAt: this.lastMessageAt,
            lastMessageText: this.lastMessageText,
            activeStatus: this.activeStatus,
            metadata: this.metadata,
            version: this.version,
            objectType: this.objectType
        };
    }

    public id: number;
    public uniqueId: string;
    public merchantId?: number;
    public title?: string;
    public chatType?: 'ask' | 'support' | 'agent';
    public lastMessageAt?: Date | string;
    public lastMessageText?: string;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "conversation";

    constructor(data?: Partial<IConversation>) {
        super(data, Conversation);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IConversation>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IConversation>) {
        return await FluxType.instantiateInstance(data, this);
    }
}

