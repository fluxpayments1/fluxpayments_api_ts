export interface IMessage {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    conversationId?: number;
    messageText?: string;
    isUserMessage?: boolean;
    createdObjects?: string; // JSON string
    updatedObjects?: string; // JSON string
    deletedObjects?: string; // JSON string
    returnedObjects?: string; // JSON string
    todoList?: string; // JSON string
    pendingApproval?: boolean;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
}

