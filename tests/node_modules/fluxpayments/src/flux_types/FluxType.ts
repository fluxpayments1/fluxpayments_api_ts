/*
 * Copyright (c) 2024 Flux<SecurityHandler> Payment Solutions Company
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

import { MerchantEndpointsSecurityHandle, SecurityHandler } from "../ajax/security";
import { Flux } from "../lib/Flux";
import { BaseQuery } from "./BaseQuery";
import { FluxIdentifier } from "./FluxIdentifier";




let fluxGetter;
let loadingPromise: Promise<void>;

async function loadFluxGetter() {
  if (!loadingPromise) {
    loadingPromise = (async () => {
      try {
        const module = await import("../lib/FluxEntry");
        fluxGetter = module.fluxGetter;
      } catch (error) {
        console.error("Error loading module:", error);
      }
    })();
  }
  return loadingPromise;
}

export abstract class FluxType {
  public dataTableMetadata;
  uniqueId: string
  public obType: new (o?: any) => this;
  public abstract obName: string
  protected abstract objectType: string;

  getObjectType() { return this.objectType }

  constructor(fbo: any, t: new (o?: any) => any) {
    this.obType = t;
  }

  id: number;
  getId(): FluxIdentifier {
    return new FluxIdentifier(this.uniqueId, this.id, this.objectType)
  }

  setId(fi: FluxIdentifier): void {
    this.id = fi.id;
    this.uniqueId = fi.uniqueId
  }

  protected static async instantiateLazyInstance<U, T extends FluxType>(ob: Partial<U>, obType: new (o?: Partial<U>) => T): Promise<T> {
    let object = new obType(ob);
    return object
  }

  protected static async instantiateInstance<U, T extends FluxType>(ob: Partial<U>, obType: new (o?: Partial<U>) => T): Promise<T> {
    let object = new obType(ob);
    let obs = await FluxType.createObjectsSafe(object)
    return obs[0]
  }

  protected static async getBackendConn(): Promise<Flux<SecurityHandler>> {
    await loadFluxGetter();
    if (!fluxGetter) {
      throw new Error("Failed to load FluxGetter module.");
    }
    return fluxGetter();
  }

  public abstract serialize();

  public async delete(): Promise<void> {
    let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
    await f.deleteObjects(this.getId(), this.obType)
    Object.keys(this).forEach(e => {
      this[e] = undefined
    })
    Object.assign(this, {})
  };

  public async merge(): Promise<void> {
    let t = this.obType
    let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
    let obs = await f.updateObjects(this)
    if (obs.length !== 1) throw new Error("couldn't persist the object");
    Object.assign(this, obs[0])
  };

  public async persist(): Promise<void> {
    let obs = await FluxType.createObjects(this)
    this.setId(obs[0]);
  };

  /**
   * Used for account free or stateless payments.
   * Creating a payment method with a stateless
   * token will store the payment method in our 
   * system and return a token. You can then pass
   * this token for one time use into a transaction
   * object.
   * 
   * 
   * @returns 
   */
  public static async generateStatelessSession() {
    return null;
  }

  public async refresh(): Promise<void> {
    let obs = await FluxType.getObjectsByIdInternal(this.getId(), this.obType)
    if (obs.length !== 1) throw new Error("couldn't refresh the object");
    Object.assign(this, obs[0])
  };

  protected static async getObjectsByIdInternal<T extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T): Promise<T[]> {
    let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
    let obs = await f.getObjectsById(fi, obType)
    return obs;
  }

  public static async getObjectsById<T extends FluxType>(this: new () => T, fi: FluxIdentifier | FluxIdentifier[]): Promise<T[]> {

    let obType = new this().objectType
    if (Array.isArray(fi)) {
      fi.forEach(e => {
        if (!e.objectType) e.objectType = (new this()).objectType
      })
    } else {
      if (!fi.objectType) fi.objectType = (new this()).objectType
    }

    let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
    if (!(f.securityHandle instanceof MerchantEndpointsSecurityHandle) && obType === "payment_method") {
      throw new Error("get by id is not supported in the browser environment")
    }
    let obs = await f.getObjectsById<T>(fi, (new this().obType))
    return obs;
  }

  public static async getLinkedObjectsById<T extends FluxType, U extends FluxType>(this: new () => T, returnType: new (o?: any) => U, fi: FluxIdentifier | FluxIdentifier[]): Promise<U[]> {


    let f: Flux<SecurityHandler> = await FluxType.getBackendConn()

    let obs = await f.getLinkedObjectsById<T, U>(fi, this, returnType)
    return obs;
  }


  public static async queryObjects<T extends FluxType, U extends BaseQuery<T>>(q: U, cfs?: Flux<SecurityHandler>): Promise<T[]> {
    let f: Flux<SecurityHandler> = cfs || await FluxType.getBackendConn()
    let obs = await f.getObjects<T, U>(q)
    return obs;
  }

  public static async deleteObjects<T extends FluxType>(this: new (o?: any) => T, fi: FluxIdentifier | FluxIdentifier[]): Promise<FluxIdentifier[]> {
    let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
    return await f.deleteObjects<T>(fi, this)
  }

  public static async updateObjects<T extends FluxType>(ob: T | T[]): Promise<T[]> {
    let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
    let obs = await f.updateObjects<T>(ob)
    return obs;
  }

  public static async createObjects<T extends FluxType>(ob: T | T[]): Promise<FluxIdentifier[]> {
    let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
    let obs: FluxIdentifier[] = await f.createObjectGeneric<T>(ob)
    return obs;
  }

  protected static async createObjectsSafe<T extends FluxType>(ob: T | T[]): Promise<T[]> {
    let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
    let obs: T[] = await f.createObjectGenericSafe<T>(ob)
    return obs;
  }




}