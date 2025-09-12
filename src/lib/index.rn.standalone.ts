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

import * as env from '../env.json';

// Import all the functions and classes

import {
  flux,
  fluxSocket,
  fluxBrowser,
  fluxSocketBrowserSessionBased,
  fluxReactNativeSignInAuthorization,
  fluxReactNativeSessionAuthorization,
  getMerchantPublicKeyFromOTPL,
  getAccountSessionFromOTPL,
  updatePassword,
  fluxWebsiteSignInAuthorization,
  fluxWebsiteCookieAuthorization,
  fluxWebsite2fa,
  resetPassword,
  fluxWebsiteSignUp,
  fluxSocketBrowser,
} from './FluxEntry';



import { FluxComms} from './Flux';
import { FluxWebsockets, Subscription, FluxSocketImpl } from './FluxSockets';
// Import all flux types
import * as FluxTypesImport from '../flux_types';

// Import security handles
import * as SecurityHandlesImport from '../ajax/security';

// Import responses
import * as ResponsesImport from '../ajax/Responses';

import * as MainLib from './index';

// Import response classes
import { ResponseBodyBase } from '../ajax/Responses/ResponseBodyBase';

// Create the namespaces that match the type definitions
export const Functions = {
  flux,
  fluxSocket,
  fluxBrowser,
  fluxSocketBrowserSessionBased,
  fluxReactNativeSignInAuthorization,
  fluxReactNativeSessionAuthorization,
  fluxWebsiteSignUp,
  fluxSocketBrowser,
  fluxWebsiteSignInAuthorization,
  fluxWebsiteCookieAuthorization,
  fluxWebsite2fa,
  resetPassword,
  updatePassword,
  getMerchantPublicKeyFromOTPL,
  getAccountSessionFromOTPL,
  Subscription,
};

export const FluxTypes = FluxTypesImport;
export const SecurityHandles = SecurityHandlesImport;
export const Responses = ResponsesImport;

export const Flux = FluxComms;


