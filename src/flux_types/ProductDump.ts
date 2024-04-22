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

import { DumpId } from "./DumpId";
import { FluxTypeBase } from "./FluxBaseObject";

import { IProduct } from "./IProduct";


export class ProductDump extends FluxTypeBase {
    protected objectType: string = "product_dump";
    public serialize() {
        throw new Error("Method not implemented.");
    }
    public delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public merge(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public persist(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public refresh(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public dumpId: DumpId;
    public metadata: string;
    public name: string;
    public description: string;
    public price: number;
    public sku: string;
    public type: 'SUBSCRIPTION' | 'SERVICE' | 'PHYSICAL_PRODUCT';
    public subscriptionInterval: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    public inventoryCount: number;
    public imageUrl: string;
    public category: string;
    public enableBackorderedProducts: boolean;
    public enableInventoryManagement: boolean;
    public orderQuantity: number

    public getInterface(): IProduct {
        return {
            id: this.dumpId.refId,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            name: this.name,
            description: this.description,
            price: this.price,
            sku: this.sku,
            type: this.type,
            subscriptionInterval: this.subscriptionInterval,
            inventoryCount: this.inventoryCount,
            imageUrl: this.imageUrl,
            category: this.category,
            enableBackorderedProducts: this.enableBackorderedProducts,
            enableInventoryManagement: this.enableInventoryManagement,
            orderQuantity: this.orderQuantity
        } as IProduct
    }

    public constructor(prodDump?: any) {
        super(prodDump);
        Object.assign(this, prodDump)
    }


}