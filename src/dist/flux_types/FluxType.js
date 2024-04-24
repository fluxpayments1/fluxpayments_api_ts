"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluxType = void 0;
const FluxIdentifier_1 = require("./FluxIdentifier");
let fluxGetter;
let loadingPromise;
function loadFluxGetter() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!loadingPromise) {
            loadingPromise = (() => __awaiter(this, void 0, void 0, function* () {
                try {
                    const module = yield Promise.resolve().then(() => __importStar(require("../lib/FluxEntry")));
                    fluxGetter = module.fluxGetter;
                }
                catch (error) {
                    console.error("Error loading module:", error);
                }
            }))();
        }
        return loadingPromise;
    });
}
class FluxType {
    getObjectType() { return this.objectType; }
    constructor(fbo, t) {
        this.obType = t;
    }
    getId() {
        return new FluxIdentifier_1.FluxIdentifier(this.uniqueId, this.id, this.objectType);
    }
    setId(fi) {
        this.id = fi.id;
        this.uniqueId = fi.uniqueId;
    }
    static instantiateLazyInstance(ob, obType) {
        return __awaiter(this, void 0, void 0, function* () {
            let object = new obType(ob);
            return object;
        });
    }
    static instantiateInstance(ob, obType) {
        return __awaiter(this, void 0, void 0, function* () {
            let object = new obType(ob);
            let obs = yield FluxType.createObjectsSafe(object);
            return obs[0];
        });
    }
    static getBackendConn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadFluxGetter();
            if (!fluxGetter) {
                throw new Error("Failed to load FluxGetter module.");
            }
            return fluxGetter();
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType.getBackendConn();
            yield f.deleteObjects(this.getId(), this.obType);
            Object.keys(this).forEach(e => {
                this[e] = undefined;
            });
            Object.assign(this, {});
        });
    }
    ;
    merge() {
        return __awaiter(this, void 0, void 0, function* () {
            let t = this.obType;
            let f = yield FluxType.getBackendConn();
            let obs = yield f.updateObjects(this);
            if (obs.length !== 1)
                throw new Error("couldn't persist the object");
            Object.assign(this, obs[0]);
        });
    }
    ;
    persist() {
        return __awaiter(this, void 0, void 0, function* () {
            let obs = yield FluxType.createObjects(this);
            this.setId(obs[0]);
        });
    }
    ;
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            let obs = yield FluxType.getObjectsByIdInternal(this.getId(), this.obType);
            if (obs.length !== 1)
                throw new Error("couldn't refresh the object");
            Object.assign(this, obs[0]);
        });
    }
    ;
    static getObjectsByIdInternal(fi, obType) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType.getBackendConn();
            let obs = yield f.getObjectsById(fi, obType);
            return obs;
        });
    }
    static getObjectsById(fi) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType.getBackendConn();
            let obs = yield f.getObjectsById(fi, (new this().obType));
            return obs;
        });
    }
    static queryObjects(q) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType.getBackendConn();
            let obs = yield f.getObjects(q);
            return obs;
        });
    }
    static deleteObjects(fi) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType.getBackendConn();
            return yield f.deleteObjects(fi, this);
        });
    }
    static updateObjects(ob) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType.getBackendConn();
            let obs = yield f.updateObjects(ob);
            return obs;
        });
    }
    static createObjects(ob) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType.getBackendConn();
            let obs = yield f.createObjectGeneric(ob);
            return obs;
        });
    }
    static createObjectsSafe(ob) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType.getBackendConn();
            let obs = yield f.createObjectGenericSafe(ob);
            return obs;
        });
    }
}
exports.FluxType = FluxType;
//# sourceMappingURL=FluxType.js.map