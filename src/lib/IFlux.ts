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

import { SecurityHandler } from "../ajax/security";
import { FluxIdentifier, FluxType, BaseQuery } from "../flux_types";


export interface IFlux {
    getObjects<T extends FluxType, U extends BaseQuery<T>>(query: U,secHandle?: SecurityHandler): Promise<T[]> 
    createObjectGenericSafe<T extends FluxType>(ob: T | T[],secHandle?: SecurityHandler): Promise<T[]>
    getGeneralAuthorizationAccess(customerPublicKey: string): Promise<string>;
    createSession(id: FluxIdentifier): Promise<string>
    getObjects<T extends FluxType, U extends BaseQuery<T>>(query: U, secHandle?: SecurityHandler): Promise<T[]>
    deleteObjects(prodIds: FluxIdentifier | FluxIdentifier[], obType, secHandle?: SecurityHandler): Promise<FluxIdentifier[]>
    updateObjects<T extends FluxType>(prod: T | T[], s?: SecurityHandler): Promise<T[]>
    createObjectGeneric<T extends FluxType>(ob: T | T[], s?: SecurityHandler): Promise<FluxIdentifier[]>
    getObjectsById<T extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T, obName: string): Promise<T[]>
}