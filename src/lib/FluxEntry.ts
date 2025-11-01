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

import { platform } from "os";
import { MerchantEndpointsSecurityHandle } from "../ajax/security/MerchantEndpointsSecurityHandle";
import { FluxComms } from "./Flux";
import { FluxSocketImpl, FluxWebsockets } from "./FluxSockets";
import { GeneralSecurityHandle } from "../ajax/security/GeneralSecurityHandle";
import { AccountDataSecurityHandle } from "../ajax/security/AccountDataSecurityHandle";

/**
 * Initializes a connection to the flux websocket.
 *
 *
 * @param publicKey
 * @param privateKey
 * @param username
 * @param passphrase
 * @returns
 */
export async function fluxSocket(
  publicKey: string,
  privateKey: string,
  username: string,
  passphrase: string
) {
  return new Promise<FluxSocketImpl>(async (resolve, reject) => {
    try {
      let fma = FluxComms.getInstance();
      let exchangedKey = await fma.getGeneralAuthorizationAccess(publicKey);
      passphrase = SecurityHandlerBase.sha256(passphrase, exchangedKey);

      FluxWebsockets.initializeSecurityHandle(
        exchangedKey,
        privateKey,
        username,
        passphrase
      );
      let fm = await FluxWebsockets.getInstance();
      resolve(fm);
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Resolves a Flux object that can be used to interact with the Flux API
 *
 * @param publicKey Public key displayed in the Flux dashboard
 * @param privateKey Private key displayed in the Flux dashboard
 * @param username Username displayed in the Flux dashboard
 * @param passphrase Passphrase displayed in the Flux dashboard
 * @returns A Promise resolving to a Flux object that can be used to interact with the Flux API
 */
export async function flux(
  publicKey: string,
  privateKey: string,
  username: string,
  passphrase: string
): Promise<FluxComms<MerchantEndpointsSecurityHandle>> {
  return new Promise<FluxComms<MerchantEndpointsSecurityHandle>>(
    async (resolve, reject) => {
      try {
        let fma = FluxComms.getInstance<MerchantEndpointsSecurityHandle>();
        let exchangedKey = await fma.getGeneralAuthorizationAccess(publicKey);
        passphrase = SecurityHandlerBase.sha256(passphrase, exchangedKey);

        fma.securityHandle = new MerchantEndpointsSecurityHandle(
          exchangedKey,
          privateKey,
          username,
          passphrase
        );
        fma.isAuthenticated = true;
        resolve(fma);
      } catch (e) {
        reject(e);
      }
    }
  );
}

export async function fluxBrowser(
  publicKey?: string
): Promise<FluxComms<GeneralSecurityHandle>> {
  if (sessionStorage.getItem("exchangedKey")) {
    let fma = FluxComms.getInstance<GeneralSecurityHandle>();
    fma.securityHandle = new GeneralSecurityHandle(
      sessionStorage.getItem("exchangedKey")
    );
    fma.isAuthenticated = true;
    return fma;
  }

  let fma = FluxComms.getInstance<GeneralSecurityHandle>();
  let exchangedKey = await fma.getGeneralAuthorizationAccess(publicKey);
  fma.securityHandle = new GeneralSecurityHandle(exchangedKey);
  fma.isAuthenticated = true;

  if (isBrowserEnv()) {
    sessionStorage.setItem("publicKey", publicKey);
    sessionStorage.setItem("exchangedKey", exchangedKey);
  }

  return fma;
}

export function fluxGetter() {
  if (isBrowserEnv()) {
    let exchangedKey = sessionStorage.getItem("exchangedKey");

    if (!exchangedKey)
      throw new Error(
        "no flux connection established, please authenticate by invoking fluxBrowser with public key"
      );

    let fma = FluxComms.getInstance<GeneralSecurityHandle>();
    fma.securityHandle = new GeneralSecurityHandle(exchangedKey);
    fma.isAuthenticated = true;
    return fma;
  }

  let fi = FluxComms.getInstance();

  if (!fi.isAuthenticated)
    throw new Error(
      "no flux connection established, please authenticate by invoking flux with your credentials"
    );

  return fi;
}

function isBrowserEnv() {
  return (
    typeof window !== "undefined" && typeof window.document !== "undefined"
  );
}

export async function fluxSocketBrowserSessionBased(
  secHandle: AccountDataSecurityHandle
): Promise<FluxSocketImpl> {
  FluxWebsockets.initializeWebSecHandle(secHandle);
  let fm = await FluxWebsockets.getInstance();
  return fm;
}

import { WebsiteSecurityHandle } from "../ajax/security/WebsiteSecurityHandle";
import {
  ReactNativeSecurityHandle,
  RequestType,
} from "../ajax/security/ReactNativeSecurityHandle";
import { FluxTokenBackend } from "./FluxTokenBackend";
import {
  SecurityHandlerBase,
  SensitiveClientDataSecurityHandle,
} from "../ajax/security/";

import Cookies from "js-cookie";
import { WebsiteSignUpSecurityHandle } from "../ajax/security/WebsiteSignUpSecurityHandle";
import {
  CreateSessionResponse,
  CreateSessionResponse as SessionRes,
} from "../ajax/Responses/CreateSessionResponse";
import { UserSecurityHandle } from "../../src/ajax/security/UserSecurityHandle";
import { SessionStorage } from "../ajax/security/SessionStorage";
/**
 * How does web auth work
 *
 *
 * From the user email we get the public key
 *
 * We then use the public key to encrypt a jwt
 *
 * and validate the password
 *
 * if validation occurs we send an auth cookie that
 * is good for 15 minutes.
 *
 * With each successive request that auth cookie is
 * updated
 *
 * If the user uses an expired token it should take them
 * back to the initial page
 *
 *
 * @param email
 * @param password
 */
export async function fluxWebsiteSignInAuthorization(
  email,
  password,
  token?: string
) {
  return new Promise<FluxTokenBackend<WebsiteSecurityHandle>>(
    async (resolve, reject) => {
      try {
        let fma =
          FluxTokenBackend.getFluxTokebBackendInstance<WebsiteSecurityHandle>();

        let publicKey = await fma.getWebsitePublicKey(email);

        password = SecurityHandlerBase.sha256(password, publicKey);

        let pubPrivKeyPair =
          await SecurityHandlerBase.generateRsaKeyPairBrowser();

        let handle = new WebsiteSecurityHandle(
          publicKey,
          password,
          pubPrivKeyPair,
          token
        );

        fma.securityHandle = handle;

        await fma.authorizeWebsiteUser();

        fma.isAuthenticated = true;

        resolve(fma);
      } catch (e) {
        reject(e);
      }
    }
  );
}

export async function resetPassword(
  email: string,
  token: string
): Promise<boolean> {
  let fma = FluxTokenBackend.getFluxTokebBackendInstance();
  let publicKey = await fma.getWebsitePublicKey(email);
  let pubPrivKeyPair = await SecurityHandlerBase.generateRsaKeyPairBrowser();

  let handle = new WebsiteSecurityHandle(
    publicKey,
    undefined,
    pubPrivKeyPair,
    token
  );

  fma.securityHandle = handle;

  handle.resetPassword = true;

  try {
    await fma.authorizeWebsiteUser();
  } catch (e) {
    //Should error out with 401 unauthorized.

    return true;
  }

  return false;
}

export async function updatePassword(
  email: string,
  password: string,
  passwordResetCode: string,
  token: string
): Promise<boolean> {
  let fma = FluxTokenBackend.getFluxTokebBackendInstance();
  let publicKey = await fma.getWebsitePublicKey(email);
  let pubPrivKeyPair = await SecurityHandlerBase.generateRsaKeyPairBrowser();

  let handle = new WebsiteSecurityHandle(
    publicKey,
    undefined,
    pubPrivKeyPair,
    token
  );

  password = SecurityHandlerBase.sha256(password, publicKey);

  handle.newPassword = password;

  passwordResetCode = SecurityHandlerBase.sha256(passwordResetCode, publicKey);

  handle.passwordCode = passwordResetCode;
  handle.passwordResetRequest = true;

  fma.securityHandle = handle;

  try {
    await fma.authorizeWebsiteUser();
  } catch (e) {
    //Should error out with 401 unauthorized.

    return true;
  }

  return false;
}

export async function fluxWebsite2fa(number: string, token: string) {
  return new Promise<FluxTokenBackend<WebsiteSecurityHandle>>(
    async (resolve, reject) => {
      try {
        let fma =
          FluxTokenBackend.getFluxTokebBackendInstance<WebsiteSecurityHandle>();
        let handle: WebsiteSecurityHandle =
          fma.securityHandle as WebsiteSecurityHandle;
        handle.token = token;
        const minutes = 15;
        const days = minutes / (24 * 60);
        handle.twoFa = number;

        await fma.authorizeWebsiteUser();

        SessionStorage.set2FAPresent();

        fma.isAuthenticated = true;

        resolve(fma);
      } catch (e) {
        reject(e);
      }
    }
  );
}

export async function fluxWebsiteSignUp(
  email: string,
  password: string,
  token: string,
  additionalInfo: any
) {
  let fma =
    FluxTokenBackend.getFluxTokebBackendInstance<WebsiteSignUpSecurityHandle>();
  let handle: WebsiteSignUpSecurityHandle = new WebsiteSignUpSecurityHandle(
    email,
    await SecurityHandlerBase.generateRsaKeyPairBrowser(),
    token
  );

  //Setup email creation and checks
  fma.securityHandle = handle;
  await fma.signUp();

  const creds = SessionStorage.getSessionCredentials();
  let publicKey = creds.clientEncryptionKey;

  if (!publicKey || publicKey === "" || publicKey === "null") {
    throw "Email already in use, please sign in";
  }

  let shadPassword = SecurityHandlerBase.sha256(password, publicKey);
  handle.password = await SecurityHandlerBase.encryptRsaBrowser(
    publicKey,
    shadPassword
  );
  handle.address = additionalInfo.addressFormControl;
  handle.firstName = additionalInfo.nameFormControl;
  handle.lastName = additionalInfo.lastNameFormControl;
  handle.phoneNumber = additionalInfo.phoneFormControl;
  handle.city = additionalInfo.cityFormControl;
  handle.state = additionalInfo.stateFormControl;
  handle.zipCode = additionalInfo.zipFormControl;
  handle.businessLegalName = additionalInfo.businessNameFormControl;
  handle.walletAddress = additionalInfo.walletAddressFormControl;
  handle.walletType = additionalInfo.walletTypeFormControl;
  handle.defaultCurrency = additionalInfo.currencyFormControl;

  await fma.signUp();
}

export async function fluxWebsiteCookieAuthorization() {
  return new Promise<FluxTokenBackend<WebsiteSecurityHandle>>(
    async (resolve, reject) => {
      try {
        const creds = SessionStorage.getSessionCredentials();
        
        if (!creds.clientDecryptionKey || !creds.serverEncryptionKey || !creds.clientEncryptionKey) {
          reject(new Error("No valid session credentials found"));
          return;
        }

        let fma =
          FluxTokenBackend.getFluxTokebBackendInstance<WebsiteSecurityHandle>();
        
        // Create a new handle with saved auth token loaded
        let handle = new WebsiteSecurityHandle(
          creds.clientEncryptionKey, 
          undefined, 
          {
            publicKey: creds.serverEncryptionKey,
            privateKey: creds.clientDecryptionKey,
          },
          undefined,
          true // Load saved auth token from SessionStorage
        );

        fma.securityHandle = handle;

        await fma.authorizeWebsiteUser();
        fma.isAuthenticated = true;

        resolve(fma);
      } catch (e) {
        reject(e);
      }
    }
  );
}

export async function fluxSocketBrowser(
  secHandle: WebsiteSecurityHandle
): Promise<FluxSocketImpl> {
  FluxWebsockets.initializeWebSecHandle(secHandle);
  let fm = await FluxWebsockets.getInstance();
  return fm;
}

export function fluxTokGetter() {
  let fi = FluxTokenBackend.getInstance();
  if (!fi.isAuthenticated)
    throw new Error(
      "no flux connection established, please authenticate by invoking flux with your credentials"
    );

  return fi;
}

export async function getAccountSessionFromOTPL(
  otpl: string
): Promise<CreateSessionResponse> {
  return FluxTokenBackend.exchangeOTPLForSession(otpl);
}

export async function getMerchantPublicKeyFromOTPL(
  otpl: string
): Promise<CreateSessionResponse> {
  return FluxTokenBackend.getMerchantPublicKeyFromOTPL(otpl);
}

// ============================================================================
// REACT NATIVE FUNCTIONS
// ============================================================================

/**
 * React Native Sign-In Authorization
 *
 * Similar to fluxWebsiteSignInAuthorization but uses ReactNativeSecurityHandle
 * with session management via Expo SecureStore
 *
 * @param email - User email/username
 * @param password - User password (will be hashed)
 * @param token - Optional reCAPTCHA token
 */
export async function fluxReactNativeSignInAuthorization(
  email: string,
  password: string,
  token?: string
): Promise<FluxTokenBackend<ReactNativeSecurityHandle>> {
  return new Promise<FluxTokenBackend<ReactNativeSecurityHandle>>(
    async (resolve, reject) => {
      try {
        let fma =
          FluxTokenBackend.getFluxTokebBackendInstance<ReactNativeSecurityHandle>();

        let publicKey = await fma.getWebsitePublicKey(email);

        password = SecurityHandlerBase.sha256(password, publicKey);

        let handle = new ReactNativeSecurityHandle(
          publicKey,
          password,
          undefined,
          email, // username
          token // optional reCAPTCHA token
        );

        handle.requestType = RequestType.SIGNIN_REQUEST;

        fma.securityHandle = handle;

        let res = await fma.authorizeWebsiteUser();
        fma.isAuthenticated = true;

        resolve(fma);
      } catch (e) {
        reject(e);
      }
    }
  );
}

// 2FA removed for React Native - not needed for simplified mobile flow

/**
 * React Native Session Authorization
 *
 * Attempts to authenticate using existing session token from SecureStore
 * Falls back to sign-in if no valid session
 *
 * @param email - User email/username (needed for public key lookup)
 */
export async function fluxReactNativeSessionAuthorization(
  email: string,
  sessionToken: string
): Promise<FluxTokenBackend<ReactNativeSecurityHandle>> {
  return new Promise<FluxTokenBackend<ReactNativeSecurityHandle>>(
    async (resolve, reject) => {
      try {
        let fma =
          FluxTokenBackend.getFluxTokebBackendInstance<ReactNativeSecurityHandle>();

        // Create handler for data request (with session)
        let handle = new ReactNativeSecurityHandle(
          undefined,
          "", // No password needed for session auth
          sessionToken,
          email
        );

        handle.requestType = RequestType.AUTH_REQUEST;

        fma.securityHandle = handle;

        await fma.authorizeWebsiteUser();

        handle.requestType = RequestType.DATA_REQUEST;

        fma.isAuthenticated = true;

        resolve(fma);
      } catch (e) {
        reject(e);
      }
    }
  );
}

export async function fluxSendConfirmationEmail(email: string, token: string) {
  return new Promise<void>(async (resolve, reject) => {
    try {
      let fma =
        FluxTokenBackend.getFluxTokebBackendInstance<WebsiteSecurityHandle>();
      await fma.sendConfirmationEmail(email, token);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

export async function fluxConfirmEmailCode(
  email: string,
  code: string,
  token: string
): Promise<FluxComms<UserSecurityHandle>> {
  return new Promise<FluxComms<UserSecurityHandle>>(async (resolve, reject) => {
    try {
      let fma =
        FluxTokenBackend.getFluxTokebBackendInstance<UserSecurityHandle>();
      await fma.confirmEmailCode(email, code, token);
      resolve(fma);
    } catch (e) {
      reject(e);
    }
  });
}

export async function fluxUpdatePaymentMethodSubscription(
  fma: FluxTokenBackend<UserSecurityHandle>,
  subscriptionId: number,
  paymentMethodId: number
) {
  return new Promise<void>(async (resolve, reject) => {
    try {
      await fma.updatePaymentMethodSubscription(
        subscriptionId,
        paymentMethodId
      );
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

export async function fluxCancelSubscription(
  fma: FluxTokenBackend<UserSecurityHandle>,
  subscriptionId: number
) {
  return new Promise<FluxComms<UserSecurityHandle>>(async (resolve, reject) => {
    try {
      await fma.cancelSubscription(subscriptionId);
      resolve(fma);
    } catch (e) {
      reject(e);
    }
  });
}


export async function fluxRemovePaymentMethod(fma: FluxTokenBackend<UserSecurityHandle>, paymentMethodId: string) {
  return new Promise<FluxComms<UserSecurityHandle>>(async (resolve, reject) => {
    try {
      await fma.removePaymentMethod(paymentMethodId);
      resolve(fma);
    } catch (e) {
      reject(e);
    }
  });
}