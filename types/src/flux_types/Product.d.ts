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
        subscriptionInterval: "MONTHLY" | "QUARTERLY" | "ANNUALLY";
        inventoryCount: number;
        imageUrl: string;
        category: string;
        enableBackorderedProducts: boolean;
        enableInventoryManagement: boolean;
        hasDynamicPrice: boolean;
        installments: number;
        trialDays: number;
        taxRatesId: number;
        fixedTaxAmount: number;
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
    subscriptionInterval: 'MONTHLY' | 'QUARTERLY' | 'ANNUALLY';
    inventoryCount: number;
    imageUrl: string;
    category: string;
    enableInventoryManagement: boolean;
    shippingFee: number;
    enableBackorderedProducts: boolean;
    hasDynamicPrice: boolean;
    installments: number;
    /** Free-trial length in days on a SUBSCRIPTION plan (0/absent = none): nothing is charged for the line at checkout; the first charge runs when the trial ends. */
    trialDays: number;
    /**
     * Tax rate for this product (2026-10-25). On a catalog product: its default rate, applied
     * on every invoice it appears on. On an invoice line: overrides the catalog default for
     * that line only. When any line carries tax the invoice can't also have its own tax rate.
     */
    taxRatesId: number;
    /** An invoice line only: a fixed tax amount for the whole line instead of a rate (0 = untaxed). */
    fixedTaxAmount: number;
    /** Read-only, set by the server: the line's rate (percent), its name, and the tax on the line. */
    lineTaxRate?: number;
    lineTaxName?: string;
    lineTax?: number;
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
