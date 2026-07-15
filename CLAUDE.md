# fluxpayments_api_ts — TypeScript SDK Guide

## Overview

Multi-platform TypeScript SDK published to npm (v1.0.113). Targets Node.js, Browser, and React Native. The compiled bundle at `dist_web/lib.js` is loaded directly by `merchant_website` and `one_time_payment_link`.

## Directory Structure

```
src/
├── lib/                    # Core entry points
│   ├── FluxEntry.ts        # flux(), fluxSocket(), fluxBrowser(), etc.
│   ├── Flux.ts             # FluxComms singleton
│   ├── FluxSockets.ts      # WebSocket + EventEmitter
│   └── FluxTokenBackend.ts # Token management
├── ajax/
│   ├── lib/CMMT.ts         # Message transport (fetch + encryption + WS)
│   ├── security/           # 13 security handler files
│   ├── Requests/           # 36+ Request classes
│   └── Responses/          # 28+ Response classes
└── flux_types/             # 172 files — domain models + queries
    ├── FluxType.ts         # Abstract base class
    ├── BaseQuery.ts        # Query base
    ├── Product.ts, Transaction.ts, PaymentLink.ts, ... (50+ entities)
    └── ProductQuery.ts, TransactionQuery.ts, ... (paired queries)
```

## Entry Points

```typescript
// Server-side (API keys)
const api = await flux(publicKey, privateKey, username, passphrase);
const ws = await fluxSocket(publicKey, privateKey, username, passphrase);

// Browser merchant portal (cookie/JWT) — uses AuthCache for auto caching
const api = await fluxBrowser();
const api = await fluxWebsiteCookieAuthorization();
const ws = await fluxSocketBrowserSessionBased();

// Website auth flow
const api = await fluxWebsiteSignInAuthorization(email, password, recaptchaToken);
const api = await fluxWebsite2fa(code, recaptchaToken);
const api = await fluxWebsiteSignUp(email, password, recaptchaToken, additionalInfo);

// React Native
const api = await fluxReactNativeSignInAuthorization(email, password);
const api = await fluxReactNativeSessionAuthorization(email, sessionToken);

// Payment link (OTPL)
const session = await getAccountSessionFromOTPL(otplId);
const pubKey = await getMerchantPublicKeyFromOTPL(otplId);

// Logout (clears WebSocket + SessionStorage + AuthCache)
fluxWebsiteLogout();

// Passkeys / WebAuthn (all exported via the `Functions` namespace)
passkeySupported();                                  // browser capability check
const api = await fluxWebsitePasskey2fa(recaptcha);  // complete sign-in with a passkey (call INSTEAD of fluxWebsite2fa, after password)
await fluxWebsiteRegisterPasskey(label);             // enroll (runs navigator.credentials.create)
await fluxWebsiteListPasskeys();                      // manage list (safe metadata)
await fluxWebsiteDeletePasskey(credentialDbId);      // remove one
```

## FluxType — Base Class Pattern

Every domain model extends `FluxType`:

```typescript
const product = new Product({ name: "Widget", price: 9.99 });
await product.persist();             // CREATE
await product.refresh();             // READ
product.name = "Updated"; await product.merge();  // UPDATE
await product.delete();              // soft DELETE

const products = await Product.queryObjects(new ProductQuery());
const one = await Product.getObjectsById(new FluxIdentifier(123));
```

**CRITICAL — `serialize()`:** Every entity implements `serialize()` returning only the fields sent to the backend. If a field isn't in `serialize()`, it won't be transmitted. Always check this before wondering why a field isn't being saved.

## objectType Convention

Always snake_case: `"product"`, `"payment_link"`, `"transaction"`. Never PascalCase. Use `obj.getObjectType()` to read, not hardcoded strings. Backend Jackson polymorphism depends on this.

## Security Handlers

| Handler | Use Case | Auth Method |
|---|---|---|
| `MerchantEndpointsSecurityHandle` | Server-side API calls | RSA-4096 + AES-256-GCM |
| `WebsiteSecurityHandle` | Merchant portal browser | JWT + cookies + 2FA (only handler with `clone()`) |
| `SensitiveClientDataSecurityHandle` | Payment forms | Account session token |
| `ReactNativeSecurityHandle` | Mobile apps | Expo SecureStore |
| `GeneralSecurityHandle` | Anonymous browser | Basic exchanged key |
| `GenAuthDataSecurityHandle` | Auth exchanges | Minimal security |
| `WebsiteSignUpSecurityHandle` | Sign-up flow | RSA + identity docs |
| `UserSecurityHandle` | Logged-in users | Session-based |
| `AccountDataSecurityHandle` | Session queries | Account session token |

**AES key format:** `genAesKey()` returns `randomBytes(32).toString('base64')` — a base64 STRING, not raw bytes. Java backend calls `DatatypeConverter.parseBase64Binary(key)` so the key MUST be a valid base64 string.

## Session Management

- **AuthCache** (`ajax/security/AuthCache.ts`) — In-memory singleton cache for authenticated `FluxTokenBackend` instances. `getOrCreateAuthenticatedInstance<T>(authFn)` returns cached or triggers fresh auth. Clears on logout or auth failure.
- **SessionStorage** (`ajax/security/SessionStorage.ts`) — localStorage persistence for session credentials: `XAUTH_KEY_PRIV` (client decryption), `XAUTH_KEY_PUB` (server encryption), `PUB_KEY` (client encryption), auth token, 2FA state. `clearSession()` removes all data + clears AuthCache.
- **Security Handle Cloning** — All `Flux.ts` methods clone security handles for request isolation (parallel request support). Only `WebsiteSecurityHandle` implements `clone()` currently.

## WebSocket Subscriptions

```typescript
const ws = await fluxSocket(publicKey, privateKey, username, passphrase);
await ws.subscribe(Subscription.TRANSACTION_CREATE, (data: EmissionData) => {
  console.log(data.object);  // Transaction object
});
```

Subscription types follow `ENTITY.ACTION` pattern: `ACCOUNT.CREATE`, `TRANSACTION.UPDATE`, `PAYMENT_LINK.DELETE`, etc.

## Query Pattern

```typescript
const q = new ProductQuery();
q.pagination = { pageSize: 50, pageNumber: 1 };
q.conditionalLogic = "AND";
const results = await Product.queryObjects(q);
```

## Building

```bash
npm run build          # Webpack — outputs to dist_web/lib.js
```

Do NOT run `npm run build` yourself — the user handles deployment builds.

## GOTCHA — the `Functions` namespace is a MANUAL list (tree-shaking trap)

The web bundle's entry is `src/lib/index.rn.standalone.ts`, and its `Functions`
export is a **hand-curated object literal** — NOT a namespace re-export. Adding
a new exported function to `FluxEntry.ts` is NOT enough: if you don't ALSO add
it to the `Functions = { ... }` object (and the import list above it), nothing
references it, webpack production tree-shakes it out of `dist_web/lib.js`, and
`Functions.yourNewFn` is silently `undefined` at runtime. TypeScript can't
catch it because portal call sites use `(Functions as any)`. Prod incident
2026-07-15: `setActAsMerchant` existed in FluxEntry.ts but was missing from the
object — the partner "view as merchant" click died with no error visible.
Checklist for any new SDK function the portal will call: FluxEntry.ts export →
import in index.rn.standalone.ts → key in the `Functions` object → rebuild.
