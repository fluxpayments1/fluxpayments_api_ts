export interface IConversation {
    id?: number;
    uniqueId?: string;
    merchantId?: number;
    title?: string;
    chatType?: 'ask' | 'support' | 'agent';
    lastMessageAt?: Date | string;
    lastMessageText?: string;
    activeStatus?: boolean;
    metadata?: string;
    version?: number;
}

