import { FluxType } from "./FluxType";
import { IProduct } from "./IProduct";
export declare class Product extends FluxType implements IProduct {
    getDispName(): string;
    obName: string;
    serialize(): {
        uniqueId: string;
        id: number;
        metadata: string;
        name: string;
        shippingFee: number;
        description: string;
        price: number;
        sku: string;
        currency: string;
        type: "SUBSCRIPTION" | "SERVICE" | "PHYSICAL_PRODUCT" | "INSTALLMENT" | "ACCOUNT_TRANSFER";
        subscriptionInterval: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
        inventoryCount: number;
        imageUrl: string;
        category: string;
        enableBackorderedProducts: boolean;
        enableInventoryManagement: boolean;
        hasDynamicPrice: boolean;
        installments: number;
        objectType: string;
        orderQuantity: number;
        memo: string;
        discountId: number;
        displayOrder: number;
    };
    currency: string;
    orderQuantity: number;
    uniqueId: string;
    id: number;
    metadata: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    type: 'SUBSCRIPTION' | 'SERVICE' | 'PHYSICAL_PRODUCT' | 'INSTALLMENT' | 'ACCOUNT_TRANSFER';
    subscriptionInterval: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    inventoryCount: number;
    imageUrl: string;
    category: string;
    enableInventoryManagement: boolean;
    shippingFee: number;
    enableBackorderedProducts: boolean;
    hasDynamicPrice: boolean;
    installments: number;
    memo: string;
    discountId: number;
    /**
     * Per-PaymentLink display position (0-based). Set by the merchant portal
     * when sending products on create/update so the order shown on the link is
     * exactly the order configured. Server-side integrations can leave it
     * undefined — the backend falls back to array index.
     */
    displayOrder: number;
    protected objectType: string;
    constructor(prod?: Partial<IProduct>);
    incrementInventoryCount(quantity: number): Promise<Product>;
    decrementInventoryCount(quantity: number): Promise<Product>;
    static createInstanceLazy(acc: Partial<IProduct>): Promise<Product>;
    static createInstanceSafe(acc: Partial<IProduct>): Promise<Product>;
}
