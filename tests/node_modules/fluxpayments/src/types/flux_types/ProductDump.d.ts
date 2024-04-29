import { DumpId } from "./DumpId";
import { FluxType } from "./FluxType";
import { IProduct } from "./IProduct";
export declare class ProductDump extends FluxType implements IProduct {
    obName: string;
    protected objectType: string;
    serialize(): void;
    dumpId: DumpId;
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
    enableBackorderedProducts: boolean;
    enableInventoryManagement: boolean;
    orderQuantity: number;
    getInterface(): IProduct;
    constructor(prodDump?: any);
    static createInstanceLazy(acc: Partial<IProduct>): Promise<ProductDump>;
    static createInstanceSafe(acc: Partial<IProduct>): Promise<ProductDump>;
}
