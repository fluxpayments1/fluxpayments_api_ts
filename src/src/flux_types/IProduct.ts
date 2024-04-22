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

export interface IProduct {
    uniqueId?: string,
    id?: number,
    metadata?: string,
    name: string,
    description?: string,
    price: number,
    sku?: string,
    type: 'SUBSCRIPTION' | 'SERVICE' | 'PHYSICAL_PRODUCT',
    subscriptionInterval?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY',
    inventoryCount?: number,
    imageUrl?: string,
    category?: string,
    currency?: string,
    enableBackorderedProducts: boolean,
    enableInventoryManagement: boolean,
    orderQuantity?: number //Must be included in a transaction.
}