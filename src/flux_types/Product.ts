
/*
 * Copyright (c) 2024 Flux Payment Solutions Company
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { FluxComms } from "../lib/Flux";
import { FluxType } from "./FluxType";
import { IProduct } from "./IProduct";
import { SecurityHandler } from "../ajax/security";


export class Product extends FluxType implements IProduct {

    public getDispName(): string {
        return this.name
    }

    public obName: string = "Product";
    public serialize() {
        return {
            uniqueId: this.uniqueId,
            id: this.id,
            metadata: this.metadata,
            name: this.name,
            shippingFee: this.shippingFee,
            description: this.description,
            price: this.price,
            sku: this.sku,
            currency: this.currency,
            type: this.type,
            subscriptionInterval: this.subscriptionInterval,
            inventoryCount: this.inventoryCount,
            imageUrl: this.imageUrl,
            category: this.category,
            enableBackorderedProducts: this.enableBackorderedProducts,
            enableInventoryManagement: this.enableInventoryManagement,
            hasDynamicPrice: this.hasDynamicPrice,
            installments: this.installments,
            objectType: "product",
            orderQuantity: this.orderQuantity,
            memo: this.memo,
            discountId: this.discountId,
            displayOrder: this.displayOrder
        }
    }
    currency: string;
    orderQuantity: number;
    uniqueId: string;
    id: number;
    metadata: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    type: 'SUBSCRIPTION' | 'SERVICE' | 'PHYSICAL_PRODUCT' | 'INSTALLMENT';
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
    protected objectType: string = "product";

    constructor(prod?: Partial<IProduct>) {
        super(prod, Product)
        Object.assign(this, prod);
    }

    public async incrementInventoryCount(quantity: number): Promise<Product> {
        let fi = await FluxType.getBackendConn() as FluxComms<SecurityHandler>;
        let prod = await fi.updateProductQuantity(1, quantity, this.getId());

        if (!prod || prod.length !== 1) throw new Error("couldnt increment inventory count")

        Object.assign(this, prod[0])

        return this

    }

    public async decrementInventoryCount(quantity: number): Promise<Product> {
        let fi = await FluxType.getBackendConn() as FluxComms<SecurityHandler>;
        let prod = await fi.updateProductQuantity(-1, quantity, this.getId());

        if (!prod || prod.length !== 1) throw new Error("couldnt decrement inventory count")

        Object.assign(this, prod[0]);

        return this
    }

    public static async createInstanceLazy(acc: Partial<IProduct>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<IProduct>) {
        return await FluxType.instantiateInstance(acc, this)
    }


}


