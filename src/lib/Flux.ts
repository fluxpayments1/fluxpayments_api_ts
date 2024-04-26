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
import { CreateSessionRequest } from "../ajax/Requests/CreateSessionRequest";
import { GenericCreatorRequest } from "../ajax/Requests/GenericCreatorRequest";
import { GenericGetterRequest } from "../ajax/Requests/GenericGetterRequest";
import { GenericDeleterRequest } from "../ajax/Requests/GenericDeleterRequest";
import { GenericGetByIdRequest } from "../ajax/Requests/GenericGetByIdRequest";
import { GenericUpdaterRequest } from "../ajax/Requests/GenericUpdaterRequest";
import { ChngProdInvCntRequest } from "../ajax/Requests/ChngProdInvCntRequest";

import { GenAuthReq } from "../ajax/Requests/GenAuthReq";
import { GenAuthRes, CreateSessionResponse, GenericCreatorResponse, GenericGetterResponse, GenericDeleterResponse, GenericUpdaterResponse, UpdateProductResponse } from "../ajax/Responses";
import { CMMT } from "../ajax/lib";
import { MerchantEndpointsSecurityHandle, GenAuthDataSecurityHandle, SecurityHandler } from "../ajax/security";
import { FluxIdentifier, FluxType, BaseQuery, Product } from "../flux_types";
import { IFlux } from "./IFlux";




export class Flux<A extends SecurityHandler> implements IFlux {
    private _isAuthenticated: boolean = false;
    private _securityHandle: A;
    private static fb: Flux<any>;
    private constructor() {

    }

    public static getInstance<T extends SecurityHandler>(): Flux<T> {
        if (Flux.fb) {
            return Flux.fb;
        }
        Flux.fb = new Flux<T>();
        return Flux.fb
    }

    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    set isAuthenticated(b: boolean) {
        this._isAuthenticated = b;
    }

    get securityHandle(): A {
        return this._securityHandle;
    }

    set securityHandle(securityHandle: A) {
        this._securityHandle = securityHandle;
    }

    public async getGeneralAuthorizationAccess(customerPublicKey: string): Promise<string> {
        return CMMT.fetch<string, GenAuthReq, GenAuthRes>(
            GenAuthReq,
            GenAuthRes,
            "getGeneralAuthorization",
            "POST",
            new GenAuthDataSecurityHandle(),
            customerPublicKey
        );
    }

    /**
     * Creates a Session with an account id
     * 
     * 
     * @param accoundId The account id used to create a session
     * @returns a session id
     */
    public async createSession(id: FluxIdentifier): Promise<string> {
        if (!(this._securityHandle instanceof MerchantEndpointsSecurityHandle))
            throw new Error("sessions must be created server side")
        return CMMT.fetch<string, CreateSessionRequest, CreateSessionResponse>(
            CreateSessionRequest,
            CreateSessionResponse,
            "createSession",
            "POST",
            this._securityHandle,
            id
        );
    }


    async createObjectGeneric<T extends FluxType>(
        ob: T | T[],
        secHandle? : SecurityHandler
    ): Promise<FluxIdentifier[]> {
        let obName
        if (Array.isArray(ob)) obName = ob[0].obName
        else obName = ob.obName

        return CMMT.fetch<FluxIdentifier[], GenericCreatorRequest, GenericCreatorResponse>(
            GenericCreatorRequest,
            GenericCreatorResponse,
            `create${obName}`,
            "POST",
            secHandle || this._securityHandle,
            ob
        );
    }

    async createObjectGenericSafe<T extends FluxType>(
        ob: T | T[],
        secHandle?: SecurityHandler
    ): Promise<T[]> {

        let obName
        let obType
        if (Array.isArray(ob)) {
            obName = ob[0].obName
            obType = ob[0].obType
        }
        else {
            obName = ob.obName
            obType = ob.obType
        }


        return CMMT.fetchGeneric<GenericCreatorRequest, GenericGetterResponse<T>, T>(
            GenericCreatorRequest,
            GenericGetterResponse<T>,
            obType,
            `create${obName}InstanceSafe`,
            "POST",
            secHandle || this._securityHandle,
            ob
        );
    }


    public async getObjects<T extends FluxType, U extends BaseQuery<T>>(
        query: U,
        secHandle?: SecurityHandler
    ): Promise<T[]> {
        let obType = query.attachedObject
        let name = new obType().obName
        return CMMT.fetchGeneric<GenericGetterRequest<T, U>, GenericGetterResponse<T>, T>(
            GenericGetterRequest<T, U>,
            GenericGetterResponse<T>,
            obType,
            `get${name}`,
            "POST",
            this._securityHandle,
            query
        );
    }

    public async deleteObjects<T extends FluxType>(
        ids: FluxIdentifier | FluxIdentifier[],
        obType: new (o?: any) => T,
        secHandle?: SecurityHandler
    ): Promise<FluxIdentifier[]> {
        let obName = new obType().obName
        return CMMT.fetch<FluxIdentifier[], GenericDeleterRequest, GenericDeleterResponse>(
            GenericDeleterRequest,
            GenericDeleterResponse,
            `delete${obName}`,
            "POST",
            secHandle || this._securityHandle,
            ids
        );
    }

    public async getObjectsById<T extends FluxType>(
        fi: FluxIdentifier | FluxIdentifier[],
        obType: new (o?: any) => T
    ): Promise<T[]> {
        let obName = new obType().obName
        return CMMT.fetchGeneric<GenericGetByIdRequest, GenericGetterResponse<T>, T>(
            GenericGetByIdRequest,
            GenericGetterResponse<T>,
            obType,
            `get${obName}ById`,
            "POST",
            this._securityHandle,
            fi
        )
    }

    public async updateObjects<T extends FluxType>(
        ob: T | T[],
        securityHandle?: SecurityHandler
    ): Promise<T[]> {
        let obType
        let obName
        if (Array.isArray(ob)) {
            obName = ob[0].obName
            obType = ob[0].obType
        }
        else {
            obName = ob.obName
            obType = ob.obType
        }
        return CMMT.fetchGeneric<GenericUpdaterRequest<T>, GenericUpdaterResponse<T>, T>(
            GenericUpdaterRequest<T>,
            GenericUpdaterResponse<T>,
            obType,
            `update${obName}`,
            "POST",
            securityHandle || this._securityHandle,
            ob
        );
    }

    public async updateProductQuantity(multiplier: number, quantity: number, fi: FluxIdentifier): Promise<Product[]> {
        if (!(this._securityHandle instanceof MerchantEndpointsSecurityHandle))
            throw new Error("inventory must be changed server side")
        return CMMT.fetch<Product[], ChngProdInvCntRequest, UpdateProductResponse>(
            ChngProdInvCntRequest,
            UpdateProductResponse,
            "updateProductQuantity",
            "POST",
            this._securityHandle,
            multiplier,
            quantity,
            fi
        )
    }
}

