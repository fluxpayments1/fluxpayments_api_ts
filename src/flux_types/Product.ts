
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

import { Flux } from "../lib/Flux";
import { FluxType } from "./FluxType";
import { IProduct } from "./IProduct";
import { SecurityHandler } from "../ajax/security";


export class Product extends FluxType implements IProduct {
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
            objectType: "product",
            orderQuantity: this.orderQuantity
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
    type: 'SUBSCRIPTION' | 'SERVICE' | 'PHYSICAL_PRODUCT';
    subscriptionInterval: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    inventoryCount: number;
    imageUrl: string;
    category: string;
    enableInventoryManagement: boolean;
    shippingFee: number;
    enableBackorderedProducts: boolean;
    protected objectType: string = "product";

    constructor(prod?: Partial<IProduct>) {
        super(prod, Product)
        Object.assign(this, prod);
    }

    public async incrementInventoryCount(quantity: number): Promise<Product> {
        let fi = await FluxType.getBackendConn() as Flux<SecurityHandler>;
        let prod = await fi.updateProductQuantity(1, quantity, this.getId());

        if (!prod || prod.length !== 1) throw new Error("couldnt increment inventory count")

        Object.assign(this, prod[0])

        return this

    }

    public async decrementInventoryCount(quantity: number): Promise<Product> {
        let fi = await FluxType.getBackendConn() as Flux<SecurityHandler>;
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


