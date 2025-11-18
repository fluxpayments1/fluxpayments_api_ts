import { FluxType } from "./FluxType";
import { IMessage } from "./IMessage";

export class Message extends FluxType implements IMessage {
    public obName: string = "Message";

    public getDispName(): string {
        return this.messageText || `Message #${this.id}`;
    }

    public serialize() {
        return {
            id: this.id,
            uniqueId: this.uniqueId,
            merchantId: this.merchantId,
            conversationId: this.conversationId,
            messageText: this.messageText,
            isUserMessage: this.isUserMessage,
            createdObjects: this.createdObjects,
            updatedObjects: this.updatedObjects,
            deletedObjects: this.deletedObjects,
            returnedObjects: this.returnedObjects,
            todoList: this.todoList,
            pendingApproval: this.pendingApproval,
            activeStatus: this.activeStatus,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            metadata: this.metadata,
            version: this.version,
            objectType: this.objectType
        };
    }

    public id: number;
    public uniqueId: string;
    public merchantId?: number;
    public conversationId?: number;
    public messageText?: string;
    public isUserMessage?: boolean;
    public createdObjects?: string;
    public updatedObjects?: string;
    public deletedObjects?: string;
    public returnedObjects?: string;
    public todoList?: string;
    public pendingApproval?: boolean;
    public activeStatus?: boolean;
    public metadata?: string;
    public version?: number;
    protected objectType: string = "message";

    constructor(data?: Partial<IMessage>) {
        super(data, Message);
        Object.assign(this, data);
    }

    public static async createInstanceLazy(data: Partial<IMessage>) {
        return await FluxType.instantiateLazyInstance(data, this);
    }

    public static async createInstanceSafe(data: Partial<IMessage>) {
        return await FluxType.instantiateInstance(data, this);
    }
}

