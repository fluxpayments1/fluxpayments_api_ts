export interface IMessage {
    id?: number;
    uniqueId?: string;
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
    previewData?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
}
