import { FluxType } from "./FluxType";
import { IProduct } from "./IProduct";
export declare class Product extends FluxType implements IProduct {
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
        type: "SUBSCRIPTION" | "SERVICE" | "PHYSICAL_PRODUCT";
        subscriptionInterval: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
        inventoryCount: number;
        imageUrl: string;
        category: string;
        enableBackorderedProducts: boolean;
        enableInventoryManagement: boolean;
        objectType: string;
        orderQuantity: number;
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
    type: 'SUBSCRIPTION' | 'SERVICE' | 'PHYSICAL_PRODUCT';
    subscriptionInterval: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    inventoryCount: number;
    imageUrl: string;
    category: string;
    enableInventoryManagement: boolean;
    shippingFee: number;
    enableBackorderedProducts: boolean;
    protected objectType: string;
    constructor(prod?: Partial<IProduct>);
    incrementInventoryCount(quantity: number): Promise<Product>;
    decrementInventoryCount(quantity: number): Promise<Product>;
    static createInstanceLazy(acc: Partial<IProduct>): Promise<Product>;
    static createInstanceSafe(acc: Partial<IProduct>): Promise<Product>;
}
