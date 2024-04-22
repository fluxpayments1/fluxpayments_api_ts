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

let fluxBrwGetter;
let loadingBrwPromise: Promise<void>;
async function loadFluxBrwGetter() {
  if (!loadingBrwPromise) {
    loadingBrwPromise = (async () => {
      try {
        const module = await import("../lib/FluxEntry");
        fluxBrwGetter = module.fluxBrwGetter;
      } catch (error) {
        console.error("Error loading module:", error);
      }
    })();
  }
  return loadingBrwPromise;
}


let fluxTokGetter;
let loadingTokPromise: Promise<void>;
async function loadFluxTokGetter() {
  if (!loadingTokPromise) {
    loadingTokPromise = (async () => {
      try {
        const module = await import("../lib/FluxEntry");
        fluxTokGetter = module.fluxTokGetter;
      } catch (error) {
        console.error("Error loading module:", error);
      }
    })();
  }
  return loadingTokPromise;
}


export abstract class FluxBaseObject {
  public dataTableMetadata;
  uniqueId: string
  protected abstract objectType: string;

  getObjectType() { return this.objectType }

  constructor(fbo: any) { }
  id: number;
  getId(): FluxIdentifier {
    return new FluxIdentifier(this.uniqueId, this.id, this.objectType)
  }

  setId(fi: FluxIdentifier): void {
    this.id = fi.id;
    this.uniqueId = fi.uniqueId
  }
  protected static async getBackendConn() {
    await loadFluxGetter();
    if (!fluxGetter) {
      throw new Error("Failed to load FluxGetter module.");
    }
    return fluxGetter();
  }

  public static tokConn: FluxTokenBackend

  protected static async getTokenConn() {

    if (FluxBaseObject.tokConn) { return FluxBaseObject.tokConn }

    await loadFluxTokGetter();
    if (!fluxTokGetter) {
      throw new Error("Failed to load FluxGetter module.");
    }
    return fluxTokGetter();
  }

  protected static async getFrontendConn() {
    await loadFluxBrwGetter()
    if (!fluxBrwGetter) {
      throw new Error("Failed to load the FluxBrwGetter module.")
    }
    return fluxBrwGetter();
  }

  public abstract serialize();

  public static createInstanceSafe(a?: any): Promise<FluxBaseObject> { return null; };
  public static createInstanceLazy(a?: any): FluxBaseObject { return null }
  public abstract delete(): Promise<void>;
  public abstract merge(): Promise<void>;
  public abstract persist(): Promise<void>;
  public abstract refresh(): Promise<void>;

  public static async queryObjects<T extends FluxBaseObject, U extends BaseQuery>(q: U, ob?: { ftb: FluxTokenBackend, obType: new (fbo?: any) => T, obName: string }): Promise<T[]> {
    let fi = ob?.ftb || await FluxBaseObject.getBackendConn();
    return await fi.getObjects(q, ob.obType, ob.obName)
  }
  public static async deleteObjectsWebsite(fii: FluxIdentifier | FluxIdentifier[], ob: { ftb: FluxTokenBackend, obType: string }): Promise<FluxIdentifier[]> {
    let fi = ob.ftb;
    return await fi.deleteObjects(fii, ob.obType)
  }

  public static async updateObjectsWebsite<T extends FluxBaseObject>(fii: T | T[], ob: { ftb: FluxTokenBackend, obType: new (fbo?: any) => T, obName: string }): Promise<T[]> {
    let fi = ob.ftb;
    return await fi.updateObjects(fii, ob.obType, ob.obName)
  }

}
