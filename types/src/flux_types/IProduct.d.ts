export interface IProduct {
    uniqueId?: string;
    id?: number;
    metadata?: string;
    name: string;
    description?: string;
    price: number;
    sku?: string;
    type: 'SUBSCRIPTION' | 'SERVICE' | 'PHYSICAL_PRODUCT' | 'INSTALLMENT';
    subscriptionInterval?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    inventoryCount?: number;
    imageUrl?: string;
    category?: string;
    shippingFee?: number;
    serviceFee?: number;
    currency?: string;
    enableBackorderedProducts: boolean;
    enableInventoryManagement: boolean;
    hasDynamicPrice: boolean;
    installments?: number;
    orderQuantity?: number;
    memo?: string;
}
