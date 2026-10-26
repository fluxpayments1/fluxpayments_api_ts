import { DumpId } from "./DumpId";
import { FluxType } from "./FluxType";
import { IProduct } from "./IProduct";
export declare class ProductDump extends FluxType implements IProduct {
    obName: string;
    protected objectType: string;
    serialize(): void;
    getDispName(): string;
    dumpId: DumpId;
    metadata: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    type: 'SUBSCRIPTION' | 'SERVICE' | 'PHYSICAL_PRODUCT' | 'INSTALLMENT' | 'ACCOUNT_TRANSFER';
    subscriptionInterval: 'MONTHLY' | 'QUARTERLY' | 'ANNUALLY';
    inventoryCount: number;
    imageUrl: string;
    category: string;
    enableBackorderedProducts: boolean;
    enableInventoryManagement: boolean;
    orderQuantity: number;
    hasDynamicPrice: boolean;
    memo: string;
    discountId: number;
    discountName: string;
    discountValue: number;
    /** The line's tax as snapshotted on the invoice (2026-10-25): rate id, PERCENT, name, or a fixed amount. */
    taxRatesId: number;
    taxRate: number;
    taxName: string;
    fixedTaxAmount: number;
    /** Read-only: the tax on this line. */
    lineTax: number;
    getInterface(): IProduct;
    constructor(prodDump?: any);
    static createInstanceLazy(acc: Partial<IProduct>): Promise<ProductDump>;
    static createInstanceSafe(acc: Partial<IProduct>): Promise<ProductDump>;
}
