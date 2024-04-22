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


import { CMMT } from "../ajax/lib";

import { CreateSessionRequest, GenAuthReq, GenericCreatorRequest, GenericGetByIdRequest, GenericGetterRequest } from "../ajax/Requests";
import { CreateSessionResponse, GenAuthRes, GenericCreatorResponse, GenericDeleterResponse, GenericGetterResponse } from "../ajax/Responses";

import { FluxIdentifier } from "../flux_types/FluxIdentifier";
import { MerchantEndpointsSecurityHandle } from "../ajax/security";
import { Flux } from "./Flux";
import { GenAuthDataSecurityHandle } from "../ajax/security/GenAuthDataSecurityHandle";
import { GenericUpdaterRequest } from "../ajax/Requests/GenericUpdaterRequest";
import { GenericDeleterRequest } from "../ajax/Requests/GenericDeleterRequest";
import { FluxBaseObject } from "../flux_types/FluxBaseObject";
import { BaseQuery } from "../flux_types/BaseQuery";
import { GenericUpdaterResponse } from "../ajax/Responses/GenericUpdaterResponse";

export class FluxBackend implements Flux {
    private _isAuthenticated: boolean = false;
    private _securityHandle: MerchantEndpointsSecurityHandle;
    private static fb: FluxBackend;
    private constructor() {

    }

    public static getInstance() {
        if (FluxBackend.fb) return FluxBackend.fb;

        FluxBackend.fb = new FluxBackend();
        return FluxBackend.fb
    }

    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    set isAuthenticated(b: boolean) {
        this._isAuthenticated = b;
    }

    get securityHandle(): MerchantEndpointsSecurityHandle {
        return this._securityHandle;
    }

    set securityHandle(securityHandle: MerchantEndpointsSecurityHandle) {
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
        return CMMT.fetch<string, CreateSessionRequest, CreateSessionResponse>(
            CreateSessionRequest,
            CreateSessionResponse,
            "createSession",
            "POST",
            this._securityHandle,
            id
        );
    }


    async createObjectGeneric<T extends FluxBaseObject>(
        ob: T | T[],
        obName: string
    ): Promise<FluxIdentifier[]> {
        return CMMT.fetch<FluxIdentifier[], GenericCreatorRequest, GenericCreatorResponse>(
            GenericCreatorRequest,
            GenericCreatorResponse,
            `create${obName}`,
            "POST",
            this._securityHandle,
            ob
        );
    }


    public async getObjects<T extends FluxBaseObject, U extends BaseQuery>(
        query: U,
        obType: new (o?: any) => T,
        obName: string
    ): Promise<T[]> {
        return CMMT.fetchGeneric<GenericGetterRequest<U>, GenericGetterResponse<T>, T>(
            GenericGetterRequest<U>,
            GenericGetterResponse<T>,
            obType,
            `get${obName}`,
            "POST",
            this._securityHandle,
            query
        );
    }

    public async deleteObjects(
        ids: FluxIdentifier | FluxIdentifier[],
        obName: string
    ): Promise<FluxIdentifier[]> {
        return CMMT.fetch<FluxIdentifier[], GenericDeleterRequest, GenericDeleterResponse>(
            GenericDeleterRequest,
            GenericDeleterResponse,
            `delete${obName}`,
            "POST",
            this._securityHandle,
            ids
        );
    }

    public async getObjectsById<T extends FluxBaseObject>(
        fi: FluxIdentifier | FluxIdentifier[],
        obType: new (o?: any) => T,
        obName: string
    ): Promise<T[]> {
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


    public async updateObjects<T extends FluxBaseObject>(
        ob: T | T[],
        obType: new (o?: any) => T,
        obName: string
    ): Promise<T[]> {
        return CMMT.fetchGeneric<GenericUpdaterRequest<T>, GenericUpdaterResponse<T>, T>(
            GenericUpdaterRequest<T>,
            GenericUpdaterResponse<T>,
            obType,
            `update${obName}`,
            "POST",
            this._securityHandle,
            ob
        );
    }


}

