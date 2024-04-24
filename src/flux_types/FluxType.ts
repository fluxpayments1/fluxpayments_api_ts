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
  public obType: new (o?: any) => FluxType;
  public abstract obName: string
  protected abstract objectType: string;

  getObjectType() { return this.objectType }

  constructor(fbo: any, t: new (o?: any) => FluxType) {
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

  protected static async getBackendConn(): Promise<Flux> {
    await loadFluxGetter();
    if (!fluxGetter) {
      throw new Error("Failed to load FluxGetter module.");
    }
    return fluxGetter();
  }

  public abstract serialize();

  public async delete(): Promise<void> {
    let f: Flux = await FluxType.getBackendConn()
    f.deleteObjects(this.getId(), this.obType)
    Object.keys(this).forEach(e => {
      this[e] = undefined
    })
    Object.assign(this, {})
  };

  public async merge(): Promise<void> {
    let t = this.obType
    let f: Flux = await FluxType.getBackendConn()
    let obs = await f.updateObjects(this)    
    if (obs.length !== 1) throw new Error("couldn't persist the object");
    Object.assign(this, obs[0])
  };

  public async persist(): Promise<void> {
    let obs = await FluxType.createObjects(this)
    this.setId(obs[0]);
  };

  public async refresh(): Promise<void> {
    let obs = await FluxType.getObjectsById(this.getId(), this.obType)
    if (obs.length !== 1) throw new Error("couldn't refresh the object");
    Object.assign(this, obs[0])
  };

  public static async getObjectsById<T extends FluxType>(fi: FluxIdentifier | FluxIdentifier[], obType: new (o?: any) => T): Promise<T[]> {
    let f: Flux = await FluxType.getBackendConn()
    let obs = await f.getObjectsById(fi, obType)
    return obs;
  }

  public static async queryObjects<T extends FluxType, U extends BaseQuery<T>>(q: U): Promise<T[]> {
    let f: Flux = await FluxType.getBackendConn()
    let obs = await f.getObjects<T, U>(q)
    return obs;
  }

  public static async deleteObjects<T extends FluxType>(this: new (o?: any) => T, fi: FluxIdentifier | FluxIdentifier[]): Promise<FluxIdentifier[]> {
    let f: Flux = await FluxType.getBackendConn()
    return await f.deleteObjects<T>(fi, this)
  }

  public static async updateObjects<T extends FluxType>(ob: T | T[]): Promise<T[]> {
    let f: Flux = await FluxType.getBackendConn()
    let obs = await f.updateObjects<T>(ob)
    return obs;
  }

  public static async createObjects<T extends FluxType>(ob: T | T[]): Promise<FluxIdentifier[]> {
    let f: Flux = await FluxType.getBackendConn()
    let obs: FluxIdentifier[] = await f.createObjectGeneric<T>(ob)
    return obs;
  }

  public static async createObjectsSafe<T extends FluxType>( ob: T | T[]): Promise<T[]> {
    let f: Flux = await FluxType.getBackendConn()
    let obs: T[] = await f.createObjectGenericSafe<T>(ob)
    return obs;
  }




}