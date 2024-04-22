
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
import { FluxBaseObject } from "./FluxBaseObject";
import { IProduct } from "./IProduct";
import { FluxIdentifier } from "./FluxIdentifier";

export class Product extends FluxBaseObject {
    public serialize() {
        return {
            uniqueId: this.uniqueId,
            id: this.id,
            metadata: this.metadata,
            name: this.name,
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
    static ftb: FluxTokenBackend;
    static lookupPage: string;
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
    enableBackorderedProducts: boolean;
    protected objectType: string = "product";

    constructor(prod?: Partial<IProduct>) {
        super(prod)
        Object.assign(this, prod);
    }

    public async delete(): Promise<void> {
        let rmAcc = await (await FluxBaseObject.getBackendConn()).deleteProduct({ id: this.id, uniqueId: this.uniqueId, objectType: this.objectType })
        Object.assign(this, {})
    }
    public async merge(): Promise<void> {
        let prods: Product[] = await (await FluxBaseObject.getBackendConn() as Flux).updateProduct(this);
        if (prods.length !== 1) throw new Error("couldn't persist the account");

        Object.assign(this, prods[0])
    }
    public async persist(): Promise<void> {
        let prod = await (await FluxBaseObject.getBackendConn()).createProduct(this)
        this.setId(prod[0]);
    }
    public async refresh(): Promise<void> {
        let prods: Product[] = await (await FluxBaseObject.getBackendConn() as Flux).getProductsById(this.getId())

        if (prods.length !== 1) throw new Error("couldn't refresh the account");

        Object.assign(this, prods[0])
    }

    public static createInstanceLazy(acc?: Partial<IProduct>): Product {
        let product: Product = new Product(acc)
        return product;
    }

    public static async createInstanceSafe(acc: Partial<IProduct>): Promise<Product> {
        let fi: Flux = (await FluxBaseObject.getBackendConn())

        let product: Product = new Product(acc)

        let prods = await fi.getProductsById(product.getId())
        let persisted = (prods).length === 1;

        if (!persisted) {
            product.setId((await fi.createProduct(product))[0])
            return product;
        }

        prods[0].orderQuantity = acc.orderQuantity

        return prods[0]


    }


    public static async updateObjects(acc: IProduct | IProduct[]): Promise<Product[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;

        if (Array.isArray(acc)) {
            let accs = acc.map(e => Product.createInstanceLazy(e))
            return await fi.updateProduct(accs)
        }
        return await fi.updateProduct(Product.createInstanceLazy(acc))
    }

    public static async deleteObjects(fii: FluxIdentifier | FluxIdentifier[]): Promise<FluxIdentifier[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;
        return await fi.deleteProduct(fii)
    }


    public static async createObjects(acc: IProduct | IProduct[]): Promise<FluxIdentifier[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;

        if (Array.isArray(acc)) {
            let accs = acc.map(e => Product.createInstanceLazy(e))
            return await fi.createProduct(accs)
        }
        return await fi.createProduct(Product.createInstanceLazy(acc))
    }

    public static async getObjectsById(acc: FluxIdentifier | FluxIdentifier[]): Promise<Product[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;

        return await fi.getProductsById(acc)
    }

    public async incrementInventoryCount(quantity: number): Promise<Product> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;
        let prod = await fi.updateProductQuantity(1, quantity, this.getId());

        if (!prod || prod.length !== 1) throw new Error("couldnt increment inventory count")

        Object.assign(this, prod[0])

        return this

    }

    public async decrementInventoryCount(quantity: number): Promise<Product> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;
        let prod = await fi.updateProductQuantity(-1, quantity, this.getId());

        if (!prod || prod.length !== 1) throw new Error("couldnt decrement inventory count")

        Object.assign(this, prod[0]);

        return this
    }


}


