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

import { FluxBackend } from "../lib/FluxBackend";
import { FluxBaseObject } from "./FluxBaseObject";
import { FluxIdentifier } from "./FluxIdentifier";
import { IAddress } from "./IAddress";
import { IAddressQuery } from ".";

export class Address extends FluxBaseObject {
    public serialize() {
        return {
            uniqueId: this.uniqueId,
            id: this.id,
            metadata: this.metadata,
            streetAddress: this.streetAddress,
            country: this.country,
            zipCode: this.zipCode,
            addressState: this.addressState,
            city: this.city,
            objectType: "address"
        }
    }

    uniqueId: string;
    id: number;
    metadata: string;
    streetAddress: string;
    country: string;
    zipCode: string;
    addressState: string;
    city: string;
    protected objectType = "address"

    constructor(add?: Partial<IAddress>) {
        super(add)
        Object.assign(this, add);
    }

    /**
     * Instantiates a new address and
     * persists the address to the flux system if not
     * already persisted.
     * 
     * This will not merge an address with an updated
     * context. Meant to sync with the flux system
     * 
     * @param add 
     * @returns 
     */
    public static async createInstanceSafe(add?: Partial<IAddress>): Promise<Address> {
        let fi = FluxBackend.getInstance();

        if (!fi) return Promise.reject("no flux connection established");

        let address: Address = new Address(add)

        let adds = await fi.getAddressesById(address.getId())
        let persisted = (adds).length === 1;

        if (!persisted) {
            address.setId((await fi.createAddress(address))[0])
            return address
        }
        return adds[0];

    }

    public static createInstanceLazy(acc?: Partial<IAddress>): Address {
        let account: Address = new Address(acc)
        return account;
    }


    public async delete(): Promise<void> {
        let rmAcc = await (await FluxBaseObject.getBackendConn()).deleteAddress({ id: this.id, uniqueId: this.uniqueId, objectType: this.objectType })
        Object.assign(this, {});
    }

    public async merge(): Promise<void> {
        let adds: Address[] = await (await FluxBaseObject.getBackendConn()).updateAddreess(this);
        if (adds.length !== 1) throw new Error("couldn't persist the account");

        Object.assign(this, adds[0])
    }
    public async persist(): Promise<void> {
        let accs = await (await FluxBaseObject.getBackendConn()).createAddress(this)
        this.setId(accs[0]);
    }
    public async refresh(): Promise<void> {
        let adds: Address[] = await (await FluxBaseObject.getBackendConn()).getAddressesById(this.getId())

        if (adds.length !== 1) throw new Error("couldn't refresh the account");

        Object.assign(this, adds[0])
    }


    public static async updateObjects(acc: IAddress | IAddress[]): Promise<Address[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;

        if (Array.isArray(acc)) {
            let accs = acc.map(e => Address.createInstanceLazy(e))
            return await fi.updateAddreess(accs)
        }
        return await fi.updateAddreess(Address.createInstanceLazy(acc))
    }

    public static async deleteObjects(fii: FluxIdentifier | FluxIdentifier[]): Promise<FluxIdentifier[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;
        return await fi.deleteAddress(fii)
    }


    public static async createObjects(acc: IAddress | IAddressQuery[]): Promise<FluxIdentifier[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;

        if (Array.isArray(acc)) {
            let accs = acc.map(e => Address.createInstanceLazy(e))
            return await fi.createAddress(accs)
        }
        return await fi.createAddress(Address.createInstanceLazy(acc))
    }

    public static async getObjectsById(acc: FluxIdentifier | FluxIdentifier[]): Promise<Address[]> {
        let fi = await FluxBaseObject.getBackendConn() as Flux;

        return await fi.getAddressesById(acc)
    }

}
