[fluxpayments](../README.md) / [Modules](../modules.md) / [PaymentLink](../modules/PaymentLink.md) / PaymentLink

# Class: PaymentLink

[PaymentLink](../modules/PaymentLink.md).PaymentLink

## Hierarchy

- [`FluxType`](FluxType.FluxType.md)

  ↳ **`PaymentLink`**

## Implements

- [`IPaymentLink`](../interfaces/IPaymentLink.IPaymentLink.md)

## Table of contents

### Constructors

- [constructor](PaymentLink.PaymentLink.md#constructor)

### Properties

- [accountEmail](PaymentLink.PaymentLink.md#accountemail)
- [accountId](PaymentLink.PaymentLink.md#accountid)
- [confidenceLevel](PaymentLink.PaymentLink.md#confidencelevel)
- [createdAt](PaymentLink.PaymentLink.md#createdat)
- [currencies](PaymentLink.PaymentLink.md#currencies)
- [currentStatus](PaymentLink.PaymentLink.md#currentstatus)
- [dataTableMetadata](PaymentLink.PaymentLink.md#datatablemetadata)
- [emailNotificationDisabled](PaymentLink.PaymentLink.md#emailnotificationdisabled)
- [id](PaymentLink.PaymentLink.md#id)
- [metadata](PaymentLink.PaymentLink.md#metadata)
- [obName](PaymentLink.PaymentLink.md#obname)
- [obType](PaymentLink.PaymentLink.md#obtype)
- [objectType](PaymentLink.PaymentLink.md#objecttype)
- [oneTimeUse](PaymentLink.PaymentLink.md#onetimeuse)
- [paymentLink](PaymentLink.PaymentLink.md#paymentlink)
- [products](PaymentLink.PaymentLink.md#products)
- [redirectUrl](PaymentLink.PaymentLink.md#redirecturl)
- [requireAccountInformation](PaymentLink.PaymentLink.md#requireaccountinformation)
- [requireShippingAddress](PaymentLink.PaymentLink.md#requireshippingaddress)
- [serviceFeeRate](PaymentLink.PaymentLink.md#servicefeerate)
- [status](PaymentLink.PaymentLink.md#status)
- [taxAmount](PaymentLink.PaymentLink.md#taxamount)
- [taxRatesId](PaymentLink.PaymentLink.md#taxratesid)
- [uniqueId](PaymentLink.PaymentLink.md#uniqueid)
- [updateAccInfo](PaymentLink.PaymentLink.md#updateaccinfo)
- [updateAddInfo](PaymentLink.PaymentLink.md#updateaddinfo)
- [updatedAt](PaymentLink.PaymentLink.md#updatedat)
- [wallets](PaymentLink.PaymentLink.md#wallets)

### Methods

- [delete](PaymentLink.PaymentLink.md#delete)
- [getId](PaymentLink.PaymentLink.md#getid)
- [getObjectType](PaymentLink.PaymentLink.md#getobjecttype)
- [merge](PaymentLink.PaymentLink.md#merge)
- [persist](PaymentLink.PaymentLink.md#persist)
- [refresh](PaymentLink.PaymentLink.md#refresh)
- [serialize](PaymentLink.PaymentLink.md#serialize)
- [setId](PaymentLink.PaymentLink.md#setid)
- [createInstanceLazy](PaymentLink.PaymentLink.md#createinstancelazy)
- [createInstanceSafe](PaymentLink.PaymentLink.md#createinstancesafe)
- [createObjects](PaymentLink.PaymentLink.md#createobjects)
- [createObjectsSafe](PaymentLink.PaymentLink.md#createobjectssafe)
- [createObjectsWeb](PaymentLink.PaymentLink.md#createobjectsweb)
- [deleteObjects](PaymentLink.PaymentLink.md#deleteobjects)
- [generateStatelessSession](PaymentLink.PaymentLink.md#generatestatelesssession)
- [getBackendConn](PaymentLink.PaymentLink.md#getbackendconn)
- [getLinkedObjectsById](PaymentLink.PaymentLink.md#getlinkedobjectsbyid)
- [getObjectsById](PaymentLink.PaymentLink.md#getobjectsbyid)
- [getObjectsByIdInternal](PaymentLink.PaymentLink.md#getobjectsbyidinternal)
- [instantiateInstance](PaymentLink.PaymentLink.md#instantiateinstance)
- [instantiateLazyInstance](PaymentLink.PaymentLink.md#instantiatelazyinstance)
- [queryObjects](PaymentLink.PaymentLink.md#queryobjects)
- [queryObjectsWeb](PaymentLink.PaymentLink.md#queryobjectsweb)
- [updateObjects](PaymentLink.PaymentLink.md#updateobjects)

## Constructors

### constructor

• **new PaymentLink**(`pl?`): [`PaymentLink`](PaymentLink.PaymentLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pl?` | `Partial`\<[`PaymentLink`](PaymentLink.PaymentLink.md)\> |

#### Returns

[`PaymentLink`](PaymentLink.PaymentLink.md)

#### Overrides

[FluxType](FluxType.FluxType.md).[constructor](FluxType.FluxType.md#constructor)

#### Defined in

[PaymentLink.d.ts:55](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L55)

## Properties

### accountEmail

• **accountEmail**: `string`

#### Defined in

[PaymentLink.d.ts:51](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L51)

___

### accountId

• **accountId**: `number`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[accountId](../interfaces/IPaymentLink.IPaymentLink.md#accountid)

#### Defined in

[PaymentLink.d.ts:49](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L49)

___

### confidenceLevel

• **confidenceLevel**: `number`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[confidenceLevel](../interfaces/IPaymentLink.IPaymentLink.md#confidencelevel)

#### Defined in

[PaymentLink.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L41)

___

### createdAt

• **createdAt**: `number`

#### Inherited from

[FluxType](FluxType.FluxType.md).[createdAt](FluxType.FluxType.md#createdat)

#### Defined in

[FluxType.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L8)

___

### currencies

• **currencies**: [`Currency`](Currency.Currency.md)[]

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[currencies](../interfaces/IPaymentLink.IPaymentLink.md#currencies)

#### Defined in

[PaymentLink.d.ts:53](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L53)

___

### currentStatus

• **currentStatus**: `any`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[currentStatus](../interfaces/IPaymentLink.IPaymentLink.md#currentstatus)

#### Defined in

[PaymentLink.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L42)

___

### dataTableMetadata

• **dataTableMetadata**: `any`

#### Inherited from

[FluxType](FluxType.FluxType.md).[dataTableMetadata](FluxType.FluxType.md#datatablemetadata)

#### Defined in

[FluxType.d.ts:6](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L6)

___

### emailNotificationDisabled

• **emailNotificationDisabled**: `boolean`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[emailNotificationDisabled](../interfaces/IPaymentLink.IPaymentLink.md#emailnotificationdisabled)

#### Defined in

[PaymentLink.d.ts:48](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L48)

___

### id

• **id**: `number`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[id](../interfaces/IPaymentLink.IPaymentLink.md#id)

#### Overrides

[FluxType](FluxType.FluxType.md).[id](FluxType.FluxType.md#id)

#### Defined in

[PaymentLink.d.ts:33](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L33)

___

### metadata

• **metadata**: `string`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[metadata](../interfaces/IPaymentLink.IPaymentLink.md#metadata)

#### Defined in

[PaymentLink.d.ts:34](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L34)

___

### obName

• **obName**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[obName](FluxType.FluxType.md#obname)

#### Defined in

[PaymentLink.d.ts:7](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L7)

___

### obType

• **obType**: (`o?`: `any`) => `this`

#### Type declaration

• **new obType**(`o?`): `this`

##### Parameters

| Name | Type |
| :------ | :------ |
| `o?` | `any` |

##### Returns

`this`

#### Inherited from

[FluxType](FluxType.FluxType.md).[obType](FluxType.FluxType.md#obtype)

#### Defined in

[FluxType.d.ts:10](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L10)

___

### objectType

• `Protected` **objectType**: `string`

#### Overrides

[FluxType](FluxType.FluxType.md).[objectType](FluxType.FluxType.md#objecttype)

#### Defined in

[PaymentLink.d.ts:54](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L54)

___

### oneTimeUse

• **oneTimeUse**: `boolean`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[oneTimeUse](../interfaces/IPaymentLink.IPaymentLink.md#onetimeuse)

#### Defined in

[PaymentLink.d.ts:47](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L47)

___

### paymentLink

• **paymentLink**: `string`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[paymentLink](../interfaces/IPaymentLink.IPaymentLink.md#paymentlink)

#### Defined in

[PaymentLink.d.ts:44](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L44)

___

### products

• **products**: [`Product`](Product.Product.md)[]

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[products](../interfaces/IPaymentLink.IPaymentLink.md#products)

#### Defined in

[PaymentLink.d.ts:52](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L52)

___

### redirectUrl

• **redirectUrl**: `string`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[redirectUrl](../interfaces/IPaymentLink.IPaymentLink.md#redirecturl)

#### Defined in

[PaymentLink.d.ts:46](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L46)

___

### requireAccountInformation

• **requireAccountInformation**: `boolean`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[requireAccountInformation](../interfaces/IPaymentLink.IPaymentLink.md#requireaccountinformation)

#### Defined in

[PaymentLink.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L40)

___

### requireShippingAddress

• **requireShippingAddress**: `boolean`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[requireShippingAddress](../interfaces/IPaymentLink.IPaymentLink.md#requireshippingaddress)

#### Defined in

[PaymentLink.d.ts:45](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L45)

___

### serviceFeeRate

• **serviceFeeRate**: `number`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[serviceFeeRate](../interfaces/IPaymentLink.IPaymentLink.md#servicefeerate)

#### Defined in

[PaymentLink.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L38)

___

### status

• **status**: `string`

#### Defined in

[PaymentLink.d.ts:50](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L50)

___

### taxAmount

• **taxAmount**: `number`

#### Defined in

[PaymentLink.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L43)

___

### taxRatesId

• **taxRatesId**: `number`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[taxRatesId](../interfaces/IPaymentLink.IPaymentLink.md#taxratesid)

#### Defined in

[PaymentLink.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L39)

___

### uniqueId

• **uniqueId**: `string`

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[uniqueId](../interfaces/IPaymentLink.IPaymentLink.md#uniqueid)

#### Overrides

[FluxType](FluxType.FluxType.md).[uniqueId](FluxType.FluxType.md#uniqueid)

#### Defined in

[PaymentLink.d.ts:35](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L35)

___

### updateAccInfo

• **updateAccInfo**: `boolean`

#### Defined in

[PaymentLink.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L36)

___

### updateAddInfo

• **updateAddInfo**: `boolean`

#### Defined in

[PaymentLink.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L37)

___

### updatedAt

• **updatedAt**: `Date`

#### Inherited from

[FluxType](FluxType.FluxType.md).[updatedAt](FluxType.FluxType.md#updatedat)

#### Defined in

[FluxType.d.ts:9](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L9)

___

### wallets

• **wallets**: [`Wallet`](Wallet.Wallet.md)[]

#### Implementation of

[IPaymentLink](../interfaces/IPaymentLink.IPaymentLink.md).[wallets](../interfaces/IPaymentLink.IPaymentLink.md#wallets)

#### Defined in

[PaymentLink.d.ts:32](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L32)

## Methods

### delete

▸ **delete**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[delete](FluxType.FluxType.md#delete)

#### Defined in

[FluxType.d.ts:22](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L22)

___

### getId

▸ **getId**(): [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Returns

[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)

#### Inherited from

[FluxType](FluxType.FluxType.md).[getId](FluxType.FluxType.md#getid)

#### Defined in

[FluxType.d.ts:16](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L16)

___

### getObjectType

▸ **getObjectType**(): `string`

#### Returns

`string`

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectType](FluxType.FluxType.md#getobjecttype)

#### Defined in

[FluxType.d.ts:13](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L13)

___

### merge

▸ **merge**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[merge](FluxType.FluxType.md#merge)

#### Defined in

[FluxType.d.ts:23](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L23)

___

### persist

▸ **persist**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[persist](FluxType.FluxType.md#persist)

#### Defined in

[FluxType.d.ts:24](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L24)

___

### refresh

▸ **refresh**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[refresh](FluxType.FluxType.md#refresh)

#### Defined in

[FluxType.d.ts:37](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L37)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountEmail` | `string` |
| `accountId` | `number` |
| `confidenceLevel` | `number` |
| `currencies` | [`Currency`](Currency.Currency.md)[] |
| `currentStatus` | `any` |
| `emailNotificationDisabled` | `boolean` |
| `id` | `number` |
| `metadata` | `string` |
| `objectType` | `string` |
| `oneTimeUse` | `boolean` |
| `paymentLink` | `string` |
| `products` | [`Product`](Product.Product.md)[] |
| `redirectUrl` | `string` |
| `requireAccountInformation` | `boolean` |
| `requireShippingAddress` | `boolean` |
| `serviceFeeRate` | `number` |
| `status` | `string` |
| `taxRatesId` | `number` |
| `uniqueId` | `string` |
| `updateAccInfo` | `boolean` |
| `updateAddInfo` | `boolean` |
| `wallets` | [`Wallet`](Wallet.Wallet.md)[] |

#### Overrides

[FluxType](FluxType.FluxType.md).[serialize](FluxType.FluxType.md#serialize)

#### Defined in

[PaymentLink.d.ts:8](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L8)

___

### setId

▸ **setId**(`fi`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) |

#### Returns

`void`

#### Inherited from

[FluxType](FluxType.FluxType.md).[setId](FluxType.FluxType.md#setid)

#### Defined in

[FluxType.d.ts:17](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L17)

___

### createInstanceLazy

▸ **createInstanceLazy**(`acc`): `Promise`\<[`PaymentLink`](PaymentLink.PaymentLink.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IPaymentLink`](../interfaces/IPaymentLink.IPaymentLink.md)\> |

#### Returns

`Promise`\<[`PaymentLink`](PaymentLink.PaymentLink.md)\>

#### Defined in

[PaymentLink.d.ts:56](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L56)

___

### createInstanceSafe

▸ **createInstanceSafe**(`acc`): `Promise`\<[`PaymentLink`](PaymentLink.PaymentLink.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `Partial`\<[`IPaymentLink`](../interfaces/IPaymentLink.IPaymentLink.md)\> |

#### Returns

`Promise`\<[`PaymentLink`](PaymentLink.PaymentLink.md)\>

#### Defined in

[PaymentLink.d.ts:57](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/PaymentLink.d.ts#L57)

___

### createObjects

▸ **createObjects**\<`T`\>(`ob`, `cfs?`): `Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |
| `cfs?` | `Flux`\<`SecurityHandler`\> |

#### Returns

`Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[createObjects](FluxType.FluxType.md#createobjects)

#### Defined in

[FluxType.d.ts:46](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L46)

___

### createObjectsSafe

▸ **createObjectsSafe**\<`T`\>(`ob`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[createObjectsSafe](FluxType.FluxType.md#createobjectssafe)

#### Defined in

[FluxType.d.ts:47](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L47)

___

### createObjectsWeb

▸ **createObjectsWeb**\<`T`\>(`ob`, `cfs?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |
| `cfs?` | `Flux`\<`SecurityHandler`\> |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[createObjectsWeb](FluxType.FluxType.md#createobjectsweb)

#### Defined in

[FluxType.d.ts:43](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L43)

___

### deleteObjects

▸ **deleteObjects**\<`T`\>(`this`, `fi`, `cfs?`): `Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | (`o?`: `any`) => `T` |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |
| `cfs?` | `Flux`\<`SecurityHandler`\> |

#### Returns

`Promise`\<[`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[deleteObjects](FluxType.FluxType.md#deleteobjects)

#### Defined in

[FluxType.d.ts:44](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L44)

___

### generateStatelessSession

▸ **generateStatelessSession**(): `Promise`\<`any`\>

Used for account free or stateless payments.
Creating a payment method with a stateless
token will store the payment method in our
system and return a token. You can then pass
this token for one time use into a transaction
object.

#### Returns

`Promise`\<`any`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[generateStatelessSession](FluxType.FluxType.md#generatestatelesssession)

#### Defined in

[FluxType.d.ts:36](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L36)

___

### getBackendConn

▸ **getBackendConn**(): `Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Returns

`Promise`\<`Flux`\<`SecurityHandler`\>\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getBackendConn](FluxType.FluxType.md#getbackendconn)

#### Defined in

[FluxType.d.ts:20](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L20)

___

### getLinkedObjectsById

▸ **getLinkedObjectsById**\<`T`, `U`\>(`this`, `returnType`, `fi`): `Promise`\<`U`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |
| `U` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | () => `T` |
| `returnType` | (`o?`: `any`) => `U` |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |

#### Returns

`Promise`\<`U`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getLinkedObjectsById](FluxType.FluxType.md#getlinkedobjectsbyid)

#### Defined in

[FluxType.d.ts:40](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L40)

___

### getObjectsById

▸ **getObjectsById**\<`T`\>(`this`, `fi`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | () => `T` |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectsById](FluxType.FluxType.md#getobjectsbyid)

#### Defined in

[FluxType.d.ts:39](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L39)

___

### getObjectsByIdInternal

▸ **getObjectsByIdInternal**\<`T`\>(`fi`, `obType`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fi` | [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md) \| [`FluxIdentifier`](FluxIdentifier.FluxIdentifier.md)[] |
| `obType` | (`o?`: `any`) => `T` |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[getObjectsByIdInternal](FluxType.FluxType.md#getobjectsbyidinternal)

#### Defined in

[FluxType.d.ts:38](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L38)

___

### instantiateInstance

▸ **instantiateInstance**\<`U`, `T`\>(`ob`, `obType`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `Partial`\<`U`\> |
| `obType` | (`o?`: `Partial`\<`U`\>) => `T` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[instantiateInstance](FluxType.FluxType.md#instantiateinstance)

#### Defined in

[FluxType.d.ts:19](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L19)

___

### instantiateLazyInstance

▸ **instantiateLazyInstance**\<`U`, `T`\>(`ob`, `obType`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `Partial`\<`U`\> |
| `obType` | (`o?`: `Partial`\<`U`\>) => `T` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[instantiateLazyInstance](FluxType.FluxType.md#instantiatelazyinstance)

#### Defined in

[FluxType.d.ts:18](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L18)

___

### queryObjects

▸ **queryObjects**\<`T`, `U`\>(`q`, `cfs?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |
| `U` | extends [`BaseQuery`](BaseQuery.BaseQuery.md)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `U` |
| `cfs?` | `Flux`\<`SecurityHandler`\> |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[queryObjects](FluxType.FluxType.md#queryobjects)

#### Defined in

[FluxType.d.ts:41](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L41)

___

### queryObjectsWeb

▸ **queryObjectsWeb**\<`T`, `U`\>(`q`, `cfs?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |
| `U` | extends [`BaseQuery`](BaseQuery.BaseQuery.md)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `U` |
| `cfs?` | `Flux`\<`SecurityHandler`\> |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[queryObjectsWeb](FluxType.FluxType.md#queryobjectsweb)

#### Defined in

[FluxType.d.ts:42](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L42)

___

### updateObjects

▸ **updateObjects**\<`T`\>(`ob`, `cfs?`): `Promise`\<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FluxType`](FluxType.FluxType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ob` | `T` \| `T`[] |
| `cfs?` | `Flux`\<`SecurityHandler`\> |

#### Returns

`Promise`\<`T`[]\>

#### Inherited from

[FluxType](FluxType.FluxType.md).[updateObjects](FluxType.FluxType.md#updateobjects)

#### Defined in

[FluxType.d.ts:45](https://github.com/fluxpayments1/fluxpayments_api_ts/blob/2772c747e214a3cab637ab4d18a9d6944f43ee64/src/types/flux_types/FluxType.d.ts#L45)
