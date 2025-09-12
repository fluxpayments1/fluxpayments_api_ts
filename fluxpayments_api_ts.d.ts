// TypeScript declarations for fluxpayments_api_ts React Native bundle
import { FluxTokenBackend } from "./types/src/lib/FluxTokenBackend";
import { ReactNativeSecurityHandle } from "./types/src/ajax/security/ReactNativeSecurityHandle";
import { WebsiteSecurityHandle } from "./types/src/ajax/security/WebsiteSecurityHandle";
import { ResponseBodyBase } from "./types/src/ajax/Responses/ResponseBodyBase";
import * as FluxType from './types/src/flux_types';
import { Subscription, FluxSockets } from "./types/src/lib/FluxSockets";
import { SecurityHandler } from "./types/src/ajax/security/SecurityHandler";
import { GenAuthDataSecurityHandle } from "./types/src/ajax/security/GenAuthDataSecurityHandle";
import { SensitiveClientDataSecurityHandle } from "./types/src/ajax/security/SensitiveClientDataSecurityHandle";
import { FluxComms } from "./types/src/lib/Flux";
import * as Functions from "./types/src/lib/index.rn.standalone";
import * as Responses from "./types/src/ajax/Responses";
import * as SecurityHandles from "./types/src/ajax/security";

export declare module "fluxpayments_api_ts" {
  // Define AuthResult type first
  export type AuthResult = FluxComms<any>;
  export * from './types/src/lib/index.rn.standalone';

  export namespace SecurityHandles {
    export * from './types/src/ajax/security';
  }

  // FluxTypes namespace - export all flux types
  export namespace FluxTypes {
    export * from './types/src/flux_types';
  }

  export namespace Responses {
    export * from './types/src/ajax/Responses';
  }

  export const Flux = FluxComms;

  // Additional exports
  export const isReactNative: boolean;
  
  // Default export
}