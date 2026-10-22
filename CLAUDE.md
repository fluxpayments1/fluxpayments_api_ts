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

**`PaymentLink.cancelOnFailedAutoCharge` (2026-10-11):** new boolean in `PaymentLink.serialize()` + `IPaymentLink` — an invoice whose saved-card auto-charge fails is auto-cancelled. Forth sets it server-side; an API/portal consumer sets it at create. Portal carries it only after a `dist_web/lib.js` rebuild.

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

**The websocket login carries the global headers (2026-10-18).** `CMMT.initializeWebSocketConnection` builds its auth message from the security handle's headers PLUS `CMMT.globalHeaders` (security headers first, globals after — the HTTP order). The only global is `X-Act-As-Merchant`; without it an admin viewing another merchant got their OWN merchant's live events. Anything added to `globalHeaders` now reaches the websocket login too.

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
object — the admin "view as merchant" click died with no error visible. (`listMemberships` /
`selectMembership` are INSTANCE methods on `Flux`, so they need no entry here — see below.)
Checklist for any new SDK function the portal will call: FluxEntry.ts export →
import in index.rn.standalone.ts → key in the `Functions` object → rebuild.

## GOTCHA — Response classes are WHITELISTS too (`setResponseJSON` drops unknown keys)

`serialize()` is the well-known outbound trap. The INBOUND direction has the exact
same shape and is easier to miss: most `setResponseJSON(json)` implementations build
`this.result` as an **explicit object literal with no `...p` spread**, so any key the
backend adds is silently discarded in the SDK layer — the field reaches the browser
in the HTTP body and then dies on the way to the caller.

It fails silently in BOTH type systems: the response class compiles fine (you simply
never mentioned the field), and portal call sites usually type the payload as `any`
(e.g. `status: any` in `forth-pay.component.ts`), so `tsc` reports nothing at either
end. The symptom is a UI element that never renders, with a correct backend and a
correct template.

Adding a backend response field is therefore a **three-place** SDK edit:
1. the `...Result` interface,
2. the object literal inside `setResponseJSON`,
3. the default `private result = {...}` initializer — **only if the field should have
   a default**.

**Do not reflexively copy the `|| 0` / `|| []` idiom** from neighbouring lines. That
coercion destroys the difference between "an older backend never sent this" and "the
value is genuinely zero". When a caller guards on presence to decide whether to render
at all (`hasSevenDayMetric` in `forth-pay.component.ts` does exactly this), `|| 0`
turns a hidden tile into a fake `0 / $0.00` tile against every backend that predates
the field. For optional/newer fields use a bare passthrough (`x: p.x`), leave them out
of the default initializer, and let them stay `undefined`.

Verify with `grep -c '<fieldName>' dist_web/lib.js` — 0 means it dies in the SDK,
regardless of what the backend emits.

## Chargeback evidence types (2026-09-11)

Five new read-mostly FluxTypes (each with `I*.ts`, `*Query.ts`, `I*Query.ts`, all
exported from `flux_types/index.ts` and registered in the portal's
`CommsService.loadModules`):

| Type | objectType | Client-writable surface |
|---|---|---|
| `TransactionEvidence` | `transaction_evidence` | NONE — append-only server-side; `serialize()` carries id/uniqueId only |
| `EvidenceAddendum` | `evidence_addendum` | NONE — same identity-only `serialize()` |
| `EvidenceAttachment` | `evidence_attachment` | transactionId, disputeId, label, fileName, contentType, sizeBytes, `s3Key` (a `@FluxDocument` field — send the document, the server writes back the key, exactly like `Merchant.merchantLogo`) |
| `EmailLog` | `email_log` | NONE — written by the mail engine + provider webhooks |
| `Dispute` | `dispute` | case fields + `rebuttalText` (a merchant may open a manual case, but cannot SAY so — see `source` below); `bundleS3Key`/`bundleSha256`/`source` are server-owned and deliberately absent from `serialize()` |

**`Transaction` gained ~38 evidence fields and only FIVE are in `serialize()`** —
`fulfillmentCarrier`, `fulfillmentTracking`, `shippedAt`, `deliveredAt`,
`refundReason`. Everything else (card last four / BIN, approval + AVS/CVV codes,
network ids, commerce indicator / initiator / stored-credential fields, customer
user agent / Accept-Language / device fingerprint / checkout session, the consent
timestamps and text hashes, the billing-address snapshot, and every
`evidencePacket*` / `evidenceRetainUntil` / `evidenceLegalHold` field) is
server-written evidence: **leaving it out of `serialize()` is the enforcement**
that a portal edit can never forge it. Do not "helpfully" add one.
`networkTransactionId` is now a mapped column (it used to be a request-hop-only
value in the stored-credential work) — `cardLastFour`/`cardBin` are the
PCI-permitted truncations; a full PAN or any CVV never appears in any SDK type.

**Those five fields are written through `Flux.updateTransactionFulfillment(...)`,
not through `updateObjects`** (`ajax/Requests|Responses/UpdateTransactionFulfillmentRequest|Response.ts`,
added 2026-09-11). Endpoint string `"updateTransactionFulfillment"` — **no `Web`
suffix**, `CMMT.getPath` appends it in the browser. There is no generic
client-reachable transaction update on the backend at all (`UpdateTransactionService`
carries no `@FluxService`), so their presence in `serialize()` is for the refund
CREATE path and for reading them back, not for a generic save.

**The `!== undefined` test in `getRequestAsString()` is load-bearing.** A key is
emitted only when the caller supplied one, because the endpoint's contract is
`omitted` = leave the stored value alone, `""` = CLEAR it, else set. A truthiness
test would swallow `""` and make clearing structurally impossible — which is the
one behaviour the endpoint exists to add (the backend's generic update is a
non-null merge and cannot clear a column, and clearing a wrong tracking number is
the point: a stale one is worse evidence than none). Dates go up as strings
(ISO-8601, epoch millis, epoch seconds or `yyyy-MM-dd` all accepted) even though
the columns are `Timestamp` — see `Spring/CLAUDE.md` for why a `Timestamp`-typed
request field would fail SILENTLY server-side.

`Merchant.statementDescriptor` IS in `serialize()` (merchant-editable).
`CustomerSensitiveData` gained `achAuthAccepted` + `achAuthText` in `serialize()`
— the NACHA authorization for a vaulted bank account; the server stamps
accepted-at, the text hash, the IP and the user agent itself and never trusts a
body for those.

> **BLOCKED ON THE BACKEND — do not remove these two keys to "fix" it.**
> `DAO/CustomerSensitiveData.java` declares neither `achAuthAccepted` nor
> `achAuthText` (it has only the four persisted `achAuth*` columns), and the
> entity is deserialized from a browser body through the same strict mapper —
> so every ACH save 500s until the backend adds them as inbound-only
> `@Transient` properties (plus `@JsonIgnoreProperties(ignoreUnknown = true)`)
> and stamps the four columns in `CreateSensitiveClientData`. The keys here are
> the contract; the backend has to meet it. Until then the four KEYDB ACH
> consent columns are never written and ACH authorization evidence is not
> captured at all.

`TransactionEvidence` exposes the packet schema version as **`packetVersion`**,
not `version`. The Java entity maps column `VERSION_NUMBER` to `packetVersion`
precisely because `version` is already taken by `VersionedEntity`'s Hibernate
optimistic-lock counter. Both properties exist on the SDK type and they mean
different things: `packetVersion` is the packet shape, `version` is the row's
lock counter (1, 2, 3…). Parse packet shape off `packetVersion` only — an
evidence viewer that keys on `version` reads the wrong schema.

`Dispute.serialize()` deliberately **omits `source`** (REPORTING_API vs MANUAL).
Provenance is the whole point of that table, so a client must not be able to
assert it; the server forces `MANUAL` on client-side creates. Readable, never
writable. Related backend gap to close: there is no dispute service, so Dispute
rides `GenericCreator`/`GenericUpdater`, and `GenericUpdater`'s evidence strip is
gated on `ob instanceof Transaction` — until a Dispute strip exists, the
resolution fields (`status`, `resolvedAt`, …) are still client-writable.

### `CreatePaymentIntentRequest` / `GenerateCardTokenRequest` are DOCUMENTATION ONLY

Both classes in `ajax/Requests/` have **no caller** — no `Flux.ts` method, no
`Functions` entry. The bodies actually on the wire are hand-built:

| Endpoint | Authoritative body |
|---|---|
| `createPaymentIntentWeb` | `one_time_payment_link/src/app/comms.service.ts` (~line 196) |
| `generateCardToken(Web)` | `hosted_fields/src/coordinator/coordinator.html` (~line 660) |

Do not assume either class is live. A canonical shape nobody sends is the shape
that drifts, and both had already drifted into bodies the server would reject:
`CreatePaymentIntentRequest` carried a `customerSensitiveDataId` that has never
existed on the Java class (the saved-card path does not use this endpoint), and
`GenerateCardTokenRequest` carried `authToken` plus a nested `extraFields` map —
**billing fields are FLAT on that endpoint** (`billingAddress`, `billingCity`,
…, and there is no `billingAddress2`); the *service* builds the `extraFields`
map itself before writing to Redis. Both are fixed and now mirror the real
bodies. Either keep them in lockstep with the two files above, or delete them.

**Why a single unknown key is fatal, not ignored:** `SpringServiceBase.initializeRequest`
deserializes with a bare `new ObjectMapper()`, so `FAIL_ON_UNKNOWN_PROPERTIES` is
TRUE; the `UnrecognizedPropertyException` is a `JsonProcessingException` and gets
swallowed by the surrounding catch, leaving the request object NULL — the service
then NPEs into a 500. So an added evidence field is a **backend-deploys-first**
change, and the request classes that take money want
`@JsonIgnoreProperties(ignoreUnknown = true)` (precedent: `Spring/Requests/GetForthStatusRequest.java`).
This matters because hosted_fields/OTPL ship via `payment-link-build` →
`unifi-deploy` while backend containers rotate in a separate stage.

The evidence payload itself: `termsAccepted`, `termsTextSnapshot`,
`refundPolicySnapshot`, `recurringAuthAccepted`, `recurringAuthText`,
`deviceFingerprint`, `checkoutSessionId`, plus flat
`billingPlaceId`/`billingLat`/`billingLng` on the card-token body (lat/lng travel
only as a pair). **IP, User-Agent and Accept-Language are NOT in either body** —
the server reads them off the HTTP request, so a browser can never spoof them.
Endpoint strings stay `createPaymentIntent` / `generateCardToken`: CMMT appends
`Web` in the browser.

### Published `types/` can lag `src/` — and `skipLibCheck` hides it

`package.json` `"types"` points at `types/src/...`, emitted by
`npm run compile-src`. A watcher's incremental pass can emit the classes and skip
siblings: after this feature, `types/src/flux_types/index.d.ts` exported
`IDisputeQuery`, `IEmailLogQuery`, `ITransactionEvidenceQuery`,
`IEvidenceAddendumQuery` and `IEvidenceAttachmentQuery` while none of those five
`.d.ts` files existed — TS2307 for any consumer that typechecks against the
published types. `merchant_website/tsconfig.json` sets `skipLibCheck: true`, so
the portal compiles anyway and the breakage is invisible there. After adding
types, run `npm run compile-src` (then `compile-web`) and verify:

```bash
ls types/src/flux_types | grep -cE 'IDisputeQuery|IEmailLogQuery|ITransactionEvidenceQuery|IEvidenceAddendumQuery|IEvidenceAttachmentQuery'   # expect 5
```


## `downloadInvoiceWeb` document types (2026-09-11)

`DownloadInvoiceWebRequest` exports `DownloadDocumentType`:
`"INVOICE" | "RECEIPT" | "REFUND" | "EVIDENCE" | "EVIDENCE_JSON" | `ADDENDUM:${number}``,
and `Flux.downloadInvoiceWeb` takes it (type-only import, so nothing is added to the
bundle — the request class is still dynamically imported inside the method).

**No `dist_web/lib.js` rebuild is needed for the new types**, exactly as REFUND shipped:
`documentType` is a plain `String` server-side and a pass-through string in the request's
`getRequestAsString()`, and the portal calls through an untyped `f: any`. The union is
compile-time correctness only — it is NOT a gate, and a value it does not list still
reaches the backend.

**Evidence types are REFUSED (403) under admin act-as and for any MAC without `EVIDENCE:READ`**
(`executeEvidenceDownload`; since the MAC split, 2026-10-12 — act-as is admin-only and the
non-admin case is a real catalog permission checked in-service): the packet carries the
cardholder IP, device fingerprint, full billing AND delivery address and the rendered
consent text, which is not the sensitivity class the endpoint's `INVOICE:READ` permission
covers. `EVIDENCE:READ` is in NO default grant. `INVOICE`/`RECEIPT`/`REFUND` are unaffected.

`EVIDENCE` is the sealed chargeback evidence record PDF, `EVIDENCE_JSON` its
machine-readable sidecar (the canonical record and the surface a Visa CE3.0 / Mastercard
First-Party-Trust submission reads), and `ADDENDUM:<id>` one later event appended to that
record. **The addendum id rides inside `documentType` on purpose:** the request carries no
addendum identifier field, and overloading `transactionId` — which the server also needs,
to scope and re-check the lookup — would make one numeric field mean two different things.

All three require `transactionId`. Evidence downloads have **no inline-generation
fallback**: a sealed record is never re-rendered on demand, so the server returns a
404-class "being prepared" / "being rebuilt" message and the caller must surface it rather
than substituting a freshly generated document.

## Dispute + evidence-attachment methods (2026-09-11)

Five instance methods on `Flux` for the chargeback response flow (docs/chargeback-evidence/DESIGN.md
3.2, 7.3, 7.4; root `CLAUDE.md` §10.9.5). All endpoint strings carry **no `"Web"` suffix** — `CMMT`
appends it in the browser.

| Method | Endpoint sent | Notes |
|---|---|---|
| `respondToDispute({disputeId, rebuttalText?, markResponded?})` | `respondToDispute` | Omit `rebuttalText` to leave it alone, `""` CLEARS |
| `uploadEvidenceAttachment({transactionId, fileName, label?, sizeBytes?, disputeId?})` | `uploadEvidenceAttachment` | STEP 1 — returns `{uploadUrl, uploadKey}` |
| `confirmEvidenceAttachment({transactionId, fileName, uploadKey, label?, disputeId?})` | `uploadEvidenceAttachment` | STEP 2 — returns `{attachment}` |
| `removeEvidenceAttachment({attachmentId, reason?})` | `removeEvidenceAttachment` | Soft `removedAt`, not a delete |
| `getDisputeBundle(disputeId)` | `getDisputeBundle` | `{downloadUrl?, pdfBase64?, filename, sha256, manifest[]}` |

- **The upload is two calls with a raw PUT between them.** Presign → `PUT` the bytes STRAIGHT to
  storage (never through the API — that is the point of a presigned URL) → confirm, at which point
  the server sniffs the real type from the magic bytes and REJECTS a file whose contents disagree
  with its extension. `sizeBytes` is the browser's claim and is not trusted; it only lets an
  oversized file be refused before it is uploaded. Both steps hit the same endpoint and differ by
  the `action` field, which `uploadEvidenceAttachment`/`confirmEvidenceAttachment` set for you.
- **`""` vs omitted is load-bearing** on `rebuttalText`, and
  `RespondToDisputeRequest.getRequestAsString` emits a key only on `!== undefined && !== null` — a
  truthiness test would swallow `""` and make clearing impossible. The platform's normal persisted
  write is a non-null merge, which structurally cannot clear a field, and a stale rebuttal that no
  longer matches the uploaded evidence is worse than none. Same convention as
  `updateTransactionFulfillment`.
- **`markResponded` can never set an outcome.** WON / LOST / EXPIRED come only from the processor's
  chargeback report via the backend's ingestion job.
- `getDisputeBundle` returns a short-lived signed `downloadUrl` where the evidence store can be
  signed and `pdfBase64` otherwise; `sha256` is the hash of exactly the bytes handed over and
  `manifest` names every source that went in, **including anything that could not be embedded and
  must be supplied separately**. It rides `DISPUTE:READ`, deliberately not `downloadInvoiceWeb`'s
  `INVOICE:READ` — the bundle carries the cardholder IP, the billing address and the card fragment.
- **The portal runs the PREBUILT `dist_web/lib.js`, so these five methods do not exist at runtime
  until the SDK bundle is rebuilt** (and `ng serve` must be restarted afterwards — it bundles
  lib.js at startup and does not watch it). The new `Dispute` / `EvidenceAttachment` /
  `EvidenceAddendum` / `EmailLog` FluxTypes landed with Phase A, so `comms.getObjects(...)` works on
  the current bundle; only the five bespoke calls need the rebuild.


## `getEvidenceCoverage()` (2026-09-11, Phase 7)

`Flux.getEvidenceCoverage()` → `getEvidenceCoverageWeb`, endpoint string
`"getEvidenceCoverage"` (**never with `Web`** — `CMMT` appends it in the browser).
`GetEvidenceCoverageRequest` takes **no parameters at all**, deliberately: scope comes from
the authenticated session, and a `merchantId` in the body would be a request to widen
visibility.

`EvidenceCoverageResult` = `{ partnerView, admin, merchant: EvidenceCoverageBlock,
crossMerchant: EvidenceCoverageBlock | null, merchants: EvidenceCoverageMerchantRow[] }`.
`merchant` is ALWAYS the act-as-resolved merchant; `crossMerchant` is **null** for a
single-merchant login (not a zeroed block — see `Spring/CLAUDE.md`; it is filled for an env admin
or a multi-merchant login since 2026-10-12), and `merchants` is worst-coverage first.

**`sealedPct` defaults to 100, not 0,** in `toBlock()`. A missing field must not render as
"0% sealed", which reads as a platform-wide outage; "nothing eligible yet" is 100%.

**`countsOk` defaults to FALSE and is the portal's availability gate** (added 2026-09-11).
It is the one field here whose safe default is the pessimistic one: `sealedPct` defaults high
so a missing value cannot fake an outage, but `countsOk` defaults low because every OTHER
default on the block reads as HEALTHY — `eligibleCount: 0` renders as 100% ("no card charges
yet" is deliberately not a failure), so a server-side count failure would paint a green 100%
on the panel built to detect that evidence is not being produced. Both portal surfaces hide
their section unless `countsOk === true`. Hiding is already this panel's safe state (it is
what the `typeof f.getEvidenceCoverage !== 'function'` feature-detect does), so a
backend-older-than-bundle skew degrades the same way.

**`sealedReconstructedCount` / `sealedLiveCount`** split `sealedCount` by provenance: a
reconstruction was rebuilt by the nightly backfill from mutable sources after the fact, not
captured at checkout. `backfillCount` only covers reconstructions that have not sealed yet, so
without this the two become indistinguishable after one night — and merchant-facing copy must
not claim charge-time capture for the rebuilt share.

**The endpoint is PERMISSION-LESS server-side** (it was `DISPUTE:READ`, which 401'd — and a
401 makes `CommsService` hard-navigate to `/`, i.e. a sign-out, not a hidden tile). Nothing
changes in the SDK, but do not "restore" a permission when reading the backend.

**The portal runs the PREBUILT `dist_web/lib.js`, so this method does not exist at runtime
until the bundle is rebuilt** (and `ng serve` restarted — it bundles lib.js at startup and
does not watch it). Both portal surfaces **feature-detect** it
(`typeof f.getEvidenceCoverage !== 'function'`) and hide their section instead of throwing
inside the shared auth wrapper, so a stale bundle degrades to "no coverage panel" rather
than a console error on every settings load.


## Embedded card capture — save a card on file from a merchant's OWN site (2026-09-12)

The embedded equivalent of a Card Capture Form. **Almost none of this is new code**:
the only genuinely missing pieces were an SDK surface that returns the link STRING and
the browser-half methods. Four calls, and only the first needs merchant credentials.

| # | Runs on | SDK | Endpoint sent | Auth |
|---|---|---|---|---|
| 1 | merchant SERVER | `flux.createCardCaptureForm({accountEmail, …})` | `createPaymentLink` | API keys |
| 2 | BROWSER | `Functions.getCardCaptureForm(paymentLink)` | `getCardCaptureForm` | link string |
| 3 | BROWSER | `FluxHostedFields.forPaymentLink(paymentLink)` → `createToken()` | `generateAuthTokenWeb` + `generateCardToken` | link string |
| 4 | BROWSER | `Functions.capturePaymentMethod({paymentLink, cardToken, termsAccepted})` | `capturePaymentMethod` | link string |

Files: `ajax/Requests|Responses/{CreateCardCaptureForm,GetCardCaptureForm,CapturePaymentMethod}*.ts`,
three methods on `FluxComms`, two standalone exports in `FluxEntry.ts`, both keyed into
the `Functions` object in `index.rn.standalone.ts`.

**Steps 2 and 4 are STATIC / standalone and BROWSER-ONLY, deliberately.** They are
authenticated by the link string alone (`GenAuthDataSecurityHandle`, a pure pass-through
— no encryption, no headers), exactly like `exchangeOTPLForSession` and
`getMerchantPublicKeyFromOTPL`, so a merchant's API keys never reach a browser. There is
no server-side sibling: only `getCardCaptureFormWeb` / `capturePaymentMethodWeb` exist,
and CMMT appends that suffix only in the browser. The reason is the consent record —
`termsAcceptedAt`, the IP and the user agent stored beside the saved card describe
whoever ticked the box, and a capture proxied through a merchant's server would otherwise
name a data centre. (A merchant who proxies anyway still gets a truthful record: the
server falls back to the browser fact captured at TOKENIZE time and drops a client-library
agent rather than recording one as the cardholder's.)

**`createCardCaptureForm` is NOT `createObjectGeneric`, for two concrete reasons.**
`FluxType.createObjects` parses with `GenericCreatorResponse`, which returns
`FluxIdentifier[]` — ids only, so the link string needs a second round trip. And
`createObjectGeneric` derives the endpoint as `create${obName}`: **`CardCaptureForm.obName`
is `"CardCaptureForm"`, so `CardCaptureForm.createInstanceSafe(...)` resolves to
`createCardCaptureForm` on a server and 404s** (`createCardCaptureFormWeb` exists for the
portal; the API-key sibling does not, and neither does any `...InstanceSafe`). That trap
predates this work; `createCardCaptureForm` routes around it by naming
`createPaymentLink` explicitly, which IS registered for API keys and where all the
card-capture validation already lives (keyed on the `isCardCapture` flag, not on the
registration).

**The request body is `{"createdObjects":[{…}]}` and NOTHING else at the top level.**
A top-level `objectType` key throws `UnrecognizedPropertyException` against
`CreatorRequest` (bare ObjectMapper → `req` null → INVALID_REQUEST_BODY). Observed, not
theorised. The PER-OBJECT `objectType: "payment_link"` IS required — it is the Jackson
subtype discriminator.

**`emailNotificationDisabled: true` is what you want on an embedded form.** Left unset,
the server emails the customer a link to the Flux-HOSTED form.

**`termsText` from step 2 is not decoration.** It is built by the same server-side call
that snapshots the authorization onto the saved card at step 4, so displayed and recorded
cannot drift — render it verbatim, and `{{merchantName}}` interpolation in a
`termsTextOverride` happens server-side (verified: override in, interpolated text out).

**`allowACHEntry` in the step-2 response reflects the MERCHANT's ACH setting, not a
choice.** A capture form always permits ACH server-side when the merchant has ACH enabled
(the hosted form and the Forth intakes rely on it). Card-only means rendering card fields
only.

**Check `authRejected` on the step-4 result.** With `autoReauthEnabled` on the form, a
DECLINED $0 verification still SAVES the card and returns 200 — show a success screen
carrying `authRejectionReason`. With it off, a decline is a 400 and nothing is saved.

**Exactly one $0 hold, and it is $0.** Minting the auth token for a card-capture link tags
it `skipCardAuth`, so tokenization skips its own verification and the capture runs the
single authoritative establishment auth (verified on the live Redis hash:
`skipCardAuth=1` for a form created by an API key).

**THE PORTAL AND EVERY BROWSER CONSUMER RUN THE PREBUILT `dist_web/lib.js`.** None of
these five methods exists at runtime until that bundle is rebuilt, and `ng serve` must be
restarted afterwards (it bundles lib.js at startup and does not watch it). The two
standalone functions must stay in the `Functions` object literal in
`index.rn.standalone.ts` or webpack tree-shakes them out and the call site silently gets
`undefined` (prod incident 2026-07-15, `setActAsMerchant`). **A page that talks to the
endpoints over its own proxy — which is how the shipped hosted-fields example works —
needs NO SDK bundle at all**: every body is plain JSON on an unencrypted endpoint.

## Terms gate — `getTermsStatus` / `acceptTerms` / `listTermsAcceptances` (2026-10-06)

`Flux.getTermsStatus()` → `getTermsStatusWeb` (no params; `TermsStatusResult` with
`required`, `version`, and `agreementMarkdown` + `agreementSha256` ONLY when required).
`Flux.acceptTerms({agreed, scrolledToEnd, signerName, signerTitle?, signatureDataUrl,
agreementSha256})` → `acceptTermsWeb`, same result shape. `Flux.listTermsAcceptances()` →
`listTermsAcceptancesWeb` (admin; `rows[]` with `merchantId`, `signerName`, `acceptedAt`,
`ip`, `source` portal|onboarding, signed `signatureUrl`). Endpoint strings carry **no `Web`**.
Instance methods, so no `Functions` registration — but the portal runs the prebuilt
`dist_web/lib.js`, so **rebuild it** or every caller's feature-detect hides the feature.

## `createMerchantAccount` (2026-09-24)

`Flux.createMerchantAccount(opts)` -> `createMerchantAccountWeb`. Admin-only: creates a
merchant + owner login + set-your-password invite with no application, through the same
server writer approving an application uses. Endpoint string `"createMerchantAccount"`, **no
`Web` suffix**. `opts` = the merchant facts (`email`, `businessName`, `firstName`,
`lastName` required) + the identical CyberSource/pricing block `reviewMerchantApplications`'s
approve takes. A `confirmRequired` of `'ROUNDING' | 'P12_UNVERIFIED'` on the result (a 200)
means nothing was created yet — re-send with `acceptRounding` / `acceptUnverifiedP12`. The
result carries `merchantId`, `macId`, `email`, `businessName`, `inviteEmailSent`. Needs the
`dist_web/lib.js` rebuild; the portal feature-detects.

## `reviewMerchantApplications` (2026-09-18)

`Flux.reviewMerchantApplications(action, opts)` -> `reviewMerchantApplicationsWeb`. Admin-only
merchant application review; actions `list` | `get` | `decide` | `packet`.

- Endpoint string is `"reviewMerchantApplications"` with **no `Web` suffix** — `CMMT` appends it
  in the browser (see the naming convention above).
- `packet` returns the whole application as one PDF, **base64 on `packetBase64`**, plus
  `packetFileName` and a `packetDocumentsNotEmbedded` count. It is rendered on demand and never
  stored, so there is no key to sign and no URL to hand out.
- `MerchantApplicationDetail` is deliberately `{ [key: string]: any }`. The server builds that
  map field by field precisely so nothing is serialized by reflection — the row carries an
  encrypted SSN, an encrypted bank account number and a Plaid access token — and restating forty
  fields as a strict interface would only drift from it.
- **Instance method on `Flux`, so no `Functions`-namespace registration is needed** (same as
  every other admin / terms / evidence method). It still needs the `dist_web/lib.js` rebuild
  before a browser can call it.

## `listMemberships` / `selectMembership` — the merchant switcher (2026-10-12)

The MAC split: one `PORTAL_LOGIN` per person, one MAC per merchant they belong to, and a login
with two or more active memberships is a *multi-merchant login* that SWITCHES between its own
memberships — never impersonation. `Flux.managePartners` and its request/response classes are
DELETED (the backend endpoint is gone; `types/src/ajax/{Requests,Responses}/ManagePartners*.d.ts`
are stale build output until `npm run compile-src` regenerates `types/`).

- `Flux.listMemberships()` → `listMembershipsWeb`; `Flux.selectMembership(macId)` →
  `selectMembershipWeb`. Endpoint strings `"listMemberships"` / `"selectMembership"` — **no
  `Web`**, `CMMT` appends it. Instance methods, so no `Functions` registration. **`dist_web/lib.js`
  was rebuilt 2026-10-12 18:57 and carries both endpoints** (`grep -c listMembershipsWeb
  dist_web/lib.js` = 2, `selectMembershipWeb` = 2, `managePartners` = 0; no source under `src/`
  is newer; `dist_web` is NOT gitignored — only `src/dist_web` is — so it is a tracked file the
  deploy ships once committed) — commit it with the SDK sources and restart `ng serve`; a portal
  served from an older bundle feature-detects and treats the missing method as "one membership,
  no switcher".
- **`ListMembershipsResult` gained `merchants` + `actingAsMerchantId` (2026-10-14).** `merchants`
  (`MerchantCatalogRow{merchantId, businessName}`) is every active merchant, served to env ADMINS
  only (empty for everyone else) — the portal switcher's "All businesses" list, which replaced the
  admin act-as banner. `actingAsMerchantId` is `undefined` when the key is absent (an older
  backend), `null` when the server applied no act-as, else the acted-as merchant id. Both are on
  the response WHITELIST, so they reach the portal only after the `dist_web/lib.js` rebuild.
- **The AI stream's 403 body is surfaced (2026-10-13).** `CMMT`'s streaming fetch used to throw
  the bare `HTTP error! status: 403`; the AI gate answers 403 with `{"error":"<a sentence written
  for the person>"}` (admin-only, or a login that belongs to several businesses), so `CMMT` now
  reads the body, throws `new Error(serverMessage)` with `status` kept on the error (the portal's
  401 interceptor still recognises an expired session) and `userFacing = true` when the server
  explained itself; non-JSON bodies keep the status line and `userFacing = false`. The portal
  chatbot renders a `userFacing` message as written and everything else as its generic line.
- `ListMembershipsResult` = `{ memberships: MembershipRow[], admin, multiMerchant, currentMacId,
  loginId }`; each row carries `macId, merchantId, businessName, isAdminKey, permissionCount,
  current`. **`currentMacId` / `current` are the SERVER's verdict** (`PORTAL_LOGIN.LAST_SELECTED_MAC_ID`,
  else the lowest-id active MAC) — prefer them over any client memory; both are `null`/`false`
  against a backend that predates them (bare passthrough, no `|| 0`).
- `selectMembership` answers HTTP 200 for BOTH outcomes: `{ok:true, macId, merchantId}` or
  `{ok:false, reason}` — a refusal is deliberately NEVER a 401, because `CommsService.isUnauthorizedError`
  signs the user out on any "401". The SDK persists the macId in `SessionStorage` under
  `XSELECTED_MAC` ONLY on `ok:true` (`Functions.getSelectedMembership()` /
  `setSelectedMembership(macId)` are the standalone accessors, keyed into the `Functions`
  object so they survive tree-shaking); `clearSession()` wipes it with the other keys on
  logout. The server never reads that value — it resolves the current membership from the
  session it holds — so a tampered entry can only misdraw the switcher.
- **`reason` is display text, never a switch (2026-10-12).** The server collapsed its refusals so
  `selectMembership` is not a MAC-id oracle: a target that is missing, login-less, an API key or
  another person's membership ALL answer one wording ("That business is not one you belong to."),
  decided before the row's active flag is read; your OWN membership that was removed answers "Your
  access to that business has been removed."; a session with no login answers its own line. Show
  `reason` verbatim and do not branch on it (the portal's `comms.switchMembership` passes it
  through, defaulting to "Could not switch businesses.").
- **MAC reads come back credential-free.** `getUserWeb`, `getMerchantAccessCredentialsWeb` and a
  `fulltextSearchWeb` over `user` / `merchant_access_credentials` null password, aesKey,
  privateKey, publicKey, publicDataKey, username, nonce and the 2FA / reset code (the first and the
  fulltext path also their timestamps + `paswwordResetTries`) — a membership row carries the
  PERSON's shared credential since the split. `MerchantAccessCredentials.ts` / `User.ts` still
  DECLARE (and `serialize()` still sends) those fields: treat them as always-absent on a read and
  never echo one back. The fulltext path additionally requires USER:READ /
  MERCHANT_ACCESS_CREDENTIALS:READ and refuses with a 400 (not a 401, so no sign-out). The
  one place an API key's `aesKey` is ever returned is still the create response.
- `GetPartnerDashboardResponse` maps `multiMerchant` (the backend's name since the split);
  the pre-split `partnerOnly` is gone from both sides.


## Interchange-plus flag on the admin requests (2026-10-07)

`CreateMerchantAccountRequest` and `ReviewMerchantApplicationsRequest` carry `icPlus?: boolean`
(null = leave as is). Server-managed on the merchant row, so it is deliberately NOT in
`Merchant.serialize()`; the portal reads `merchant.icPlus` off the raw JSON. Needs the
`dist_web/lib.js` rebuild before the admin forms can send it.

## `PaymentLink.currency` (2026-10-08)

`IPaymentLink.currency?: string` + in `PaymentLink.serialize()`. ISO-4217 code the link is
charged in (root CLAUDE.md §10.20); the server refuses anything outside its 2-decimal allowlist. Needs the `dist_web/lib.js` rebuild
before the portal can send it.

## Forth client detail — `getForthClientDetail` + `getForthStatus` includeInactive (2026-10-11)

`Flux.getForthClientDetail(mappingId)` → `getForthClientDetail` (endpoint string, **no `Web`**;
reuses `ForthMappingActionRequest`). Returns `ForthClientDetailResult` — mapping, `charges[]`,
`events[]`, `cardBrand`/`cardLastFour`/`cardAuthStatus`/`cardLastAuthError`,
`clientName`/`clientEmail`/`clientPhone`, `openIntakeUrl?`, `activeDunningCount`. Backs the portal's
`/ForthClient/:id` page.

`getForthStatus(page, pageSize, search, includeInactive?)` gained a 4th arg (also on
`GetForthStatusRequest.loadClientData`/`serialize`): `true` = include clients deleted in Forth
(soft-deleted mappings), for the Clients tab. Absent/false keeps the active-only view.

Instance methods, so no `Functions` registration — but **the portal runs the prebuilt
`dist_web/lib.js`, so both need the bundle rebuilt** (and `ng serve` restarted) before they work.
`getForthStatus` with the extra arg degrades gracefully on a stale bundle (an extra JS arg is
ignored → active-only list). `ForthClientDetailResponse.setResponseJSON` follows the explicit
object-literal whitelist pattern (reads each field by name).

## `getTransactionMetrics(range)` — the Transactions page aggregate (2026-10-14)

`Flux.getTransactionMetrics(range = '30d')` → `getTransactionMetricsWeb` (`TRANSACTION:READ`).
Endpoint string `"getTransactionMetrics"` — **no `Web`**, `CMMT` appends it in the browser. The
sibling of `getInvoiceMetrics()`: one call returns the money-bar dollars + chip counts for ONE
range (`"7d" | "30d" | "90d" | "ytd" | "all"`; the server resolves anything else to `"30d"` and
echoes the resolved `range` + `sinceMillis` lower bound, `null` for `"all"`).

- **The range reaches the body through `loadClientData`, not the constructor.** `CMMT.fetch`
  instantiates every request with `new req()` (no args) and then calls
  `loadClientData(...trailingArgs)`, so `GetTransactionMetricsRequest`'s constructor default
  (`'30d'`) only covers a direct `new`; the Flux method passes `range` as the trailing
  `CMMT.fetch` arg exactly like `getPartnerDashboard(range, probe)`. A no-op `loadClientData`
  would silently send `'30d'` for every call.
- `GetTransactionMetricsResponse` exports `TransactionMetrics` — the explicit whitelist
  (`Number(x ?? 0)` for the numerics, `String(range ?? '')`, `sinceMillis` passthrough-or-null):
  `paymentsTotal/Count`, `refundTotal/Count`, `netTotal` (payments minus refunds),
  `cardTotal/Count` (CREDIT_CARD + DEBIT_CARD), `achTotal/Count`, `achPendingTotal/Count`,
  `authCount`, `feeTotal/Count` (MONTHLY_FEE — the platform fee, not a processing fee),
  `declinedCount`, `allCount` (every non-AUTH row). No `transactionCost` figure is returned.
- Instance method, so no `Functions` registration — but the portal runs the prebuilt
  `dist_web/lib.js`, so **it needs the bundle rebuilt** (and `ng serve` restarted) before a
  browser can call it; the portal should feature-detect `typeof f.getTransactionMetrics`.

## `PaymentLink.charge` — the saved-card charge outcome on create (2026-10-15)

`PaymentLink.charge?: PaymentLinkChargeResult` (`{status: 'APPROVED'|'DECLINED'|'NOT_CHARGED'|'UNKNOWN', transactionId?, declineReason?, retryable?: 'RETRYABLE'|'NOT_RETRYABLE', retryAfterHours?, networkResponse?}` — the last three added 2026-10-15, see Spring/CLAUDE.md, exported from `flux_types/index.ts`). Present ONLY on the `createPaymentLink` response for a link created with a `paymentMethodOnFileId`; read-only (deliberately NOT in `serialize()`, and the server ignores it on input). It arrives through the constructor's `Object.assign`, so even a stale bundle carries the raw value; the type needs the `dist_web/lib.js` rebuild.

## Webhooks (2026-10-16 — root CLAUDE.md §10.24)

`Flux.createWebhookEndpoint`, `getWebhookEndpoints`, `updateWebhookEndpoint`, `deleteWebhookEndpoint`, `rotateWebhookSecret`, `testWebhookEndpoint`, `getWebhookDeliveries`, `resendWebhookDelivery`, `replayWebhookEndpoint`, `getWebhookEvents` — instance methods sharing a private `webhookCall`; endpoint strings carry no `Web` (CMMT appends it in the browser). Types: `ajax/Requests/WebhookRequest.ts`, `ajax/Responses/WebhookResponse.ts` (`WebhookResult` copies a whitelist of fields). **Needs the `dist_web/lib.js` rebuild** — the portal's Webhooks pages feature-detect and say so until then. The detail pages need NO new SDK method: `getWebhookDeliveries(undefined, {deliveryId})` and `getWebhookEvents({newestFirst, beforeEventId, eventId})` pass the extra keys straight through (`WebhookRequest` copies every set key), and the answers come back in fields `WebhookResponse` already whitelists (`deliveries`, `endpoint`, `event`).

## Subscription page calls (2026-10-16)

`Flux.getSubscriptionMetrics(range?)` (list volume card, `SubscriptionMetricsResponse.ts` whitelist), `Flux.getSubscriptionDetail(subscriptionId)` and `Flux.manageSubscription(subscriptionId, 'CANCEL'|'DEFER'|'RESCHEDULE'|'CHANGE_CARD'|'SEND_CARD_FORM', {months?, date?, paymentMethodOnFileId?})` share a private `subscriptionCall` (endpoint strings carry no `Web`). Types: `ajax/Requests/SubscriptionRequest.ts` (sends only set keys), `ajax/Responses/SubscriptionDetailResponse.ts` (`SubscriptionDetailResult` whitelist, incl. `cardForm`). `RecurringTransaction` declares `productName?` / `customerName?` - server-computed list columns, read-only, deliberately NOT in `serialize()`; they arrive through the constructor's `Object.assign`, so a stale bundle still shows them. **Needs the `dist_web/lib.js` rebuild** + an `ng serve` restart.


## Billing interval values (2026-10-17)

`Product` / `IProduct` / `ProductQuery` / `ProductDump` `subscriptionInterval` is now typed `'MONTHLY' | 'QUARTERLY' | 'ANNUALLY'` — the backend `Frequency` enum. The old union (`DAILY | WEEKLY | MONTHLY | YEARLY`) named three values that never existed, so any non-monthly product failed the request. The backend still reads `YEARLY` as `ANNUALLY` for older bundles. Type-only change; the prebuilt `dist_web/lib.js` carries no runtime difference.

## `setMerchantAiEnabled` + two response fields (2026-10-19 — root CLAUDE.md §10.28)

`Flux.setMerchantAiEnabled(merchantId, aiEnabled)` → `setMerchantAiEnabledWeb` (endpoint string carries no `Web`; `SetMerchantAiEnabledRequest` / `SetMerchantAiEnabledResponse` → `{ok, merchantId, aiEnabled}`). PLATFORM ADMINS ONLY, server-gated; the target is the act-as-resolved merchant, so the portal calls it under `runAsMerchant` and `merchantId` is a cross-check. Two whitelist additions: `PartnerMerchantRow.aiEnabled` (`r.aiEnabled !== false` — absent on an older backend = on) and `MembershipRow.partnerMembership` (`!!r.partnerMembership`). `Merchant.aiEnabled` is deliberately NOT in `Merchant.serialize()` (server-managed; the portal reads it off the raw JSON like `icPlus`). Instance method, no `Functions` registration — but **needs the `dist_web/lib.js` rebuild** (and an `ng serve` restart) before the dashboard toggle works; the portal feature-detects.

## `managePartnerAccess` — the Partners panel (2026-10-19)

`Flux.managePartnerAccess(opts)` (instance method, endpoint string `managePartnerAccess`, no `Web`) with `ManagePartnerAccessRequest` / `ManagePartnerAccessResponse` (`PartnerAccessResult`). Actions `list` / `add` / `update` / `remove` / `removePartner` / `resendInvite`; admin-only server-side. **Needs the `dist_web/lib.js` rebuild + an `ng serve` restart** — the panel says so on an older bundle.

## Tax rates + isTaxExempt (2026-10-21 — root CLAUDE.md §10.29)

`TaxRates.taxRate` is a PERCENT on every read and write; `getDispName()` returns `"<rate>%"`. `isTaxExempt` is removed from `IAccount` / `Account` / `AccountQuery` (the backend ignores the key if an older bundle sends it). Needs the `dist_web/lib.js` rebuild + an `ng serve` restart for the display name.

## `Product.trialDays` (2026-10-21 — root CLAUDE.md §10.30)

`Product.serialize()` sends `trialDays` (declared `trialDays: number`, `IProduct.trialDays?: number`) — a free trial on a SUBSCRIPTION product; the backend refuses it on any other type. **Needs the `dist_web/lib.js` rebuild** before the portal can create one. `RecurringTransaction` carries `trialDays` back on the raw JSON (no type change needed to read it); the PATCH body may carry `paymentMethodId` (write-only on the server) — no SDK field was added, send it on the plain object.

## `manageSubscription` gained `STOP_RETRIES` (2026-10-21 — root CLAUDE.md §10.30)

The action union is `'CANCEL' | 'DEFER' | 'RESCHEDULE' | 'CHANGE_CARD' | 'SEND_CARD_FORM' | 'STOP_RETRIES'` (`opts.date` optional for the stop). Type-only: the prebuilt `dist_web/lib.js` passes the string through unchanged, so the portal's button works on the current bundle. The integration API twin is `POST /v2/recurring-transactions/{id}/stop-retries` (no SDK method; a plain REST call with the API key).
