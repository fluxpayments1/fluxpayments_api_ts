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

**Evidence types are REFUSED (403) while a partner is viewing another merchant's account**
(`executeEvidenceDownload` checks `isPartnerActAsApplied()`): the packet carries the
cardholder IP, device fingerprint, full billing AND delivery address and the rendered
consent text, which is not the sensitivity class the endpoint's `INVOICE:READ` permission
covers, and a partner's default grant at attach includes every READ permission outside
`PARTNER_DEFAULT_EXCLUDE_TYPES`. `INVOICE`/`RECEIPT`/`REFUND` are unaffected.

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
non-partner (not a zeroed block — see `Spring/CLAUDE.md`), and `merchants` is worst-coverage
first.

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
  `managePartners`). It still needs the `dist_web/lib.js` rebuild before a browser can call it.

