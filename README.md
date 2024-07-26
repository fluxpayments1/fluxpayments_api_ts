# Flux Payments

## Installation
```bash
npm install fluxpayments
```

## Configuration
Register for an account and get your sandbox keys.

## Introduction

Welcome to the Flux Payments documentation. Below you will find sample code that demonstrates the API workflow and a comprehensive list of modules and their respective documentation links.

## Server Side code
```typescript
import { flux } from "fluxpayments/lib";
import { Account } from "fluxpayments/flux_types";

await flux (
    "public_key", 
    "private_key", 
    "username", 
    "password"
);

let firstAccount : Account = await Account.createInstanceSafe({
    accountUserType: AccountUserType.CUSTOMER,
    uniqueId: "TESTACCOUNT"
});

let firstAddress = await Address.createInstanceSafe({
    uniqueId: "FIRSTADDRESS",
    streetAddress: "123 Main Street",
    zipCode: "123456",
    city: "Tampa",
    state: "Florida"
})

let secondAddress = await Address.createInstanceSafe({
    uniqueId: "SECONDADDRESS",
    streetAddress: "123 Main Street",
    zipCode: "123453",
    city: "Tampa",
    state: "Florida"
})

await acc.addAddress(firstAddress);
await acc.addAddress(secondAddress);
await acc.setDefaultShippingAddress(firstAddress);

let sessionGenerated = await acc.generateSession();

```
## Getting exciting...
Send the session to the frontend to create a payment method for the account.
## Browser Code
```typescript
import { fluxBrowser } from "fluxpayments/lib";
import { Card, Account } from "fluxpayments/flux_types";

await fluxBrowser("PK_ewRVuDFJEe61LwJCwKjwBA==");

paymentMethod = await Card.createInstanceSafe({
    address: add1,
    firstName: "Jane",
    lastName: "Doe",
    accountSession: sessionGenerated,
    cardNumber: "1234123412341234",
    cvv: "1234",
    expMonth: "05",
    expYear: "35"
});

await Account.setDefaultPaymentMethod(paymentMethod)
```
## Drum roll...
Create a product and a transaction to charge the newly created account

## Server side code
```typescript
//Create a product and a transaction
import { flux } from "fluxpayments/lib";
import { Account, Product, Transaction, Address } from "fluxpayments/flux_types";

await flux(
    "public_key", 
    "private_key", 
    "username", 
    "password"
);

let prod: Product = await Product.createInstanceSafe({
    uniqueId: "FIRST_PRODUCT",
    type: "PHYSICAL_PRODUCT",
    name: "TEST 1",
    inventoryCount: 100,
    price: .51
})

let account : Account = await Account.createInstanceLazy({
    uniqueId: "TESTACCOUNT"
});

let address : Address = await Address.createInstanceLazy({
    uniqueId: "SECONDADDRESS"
})

//Transaction that uses the default payment method
//and a provided address.
let txn = await Transaction.createInstanceSafe({
    account: account,
    shippingAddress: address,
    products: {...prod, orderQuantity: 5}
})

```

## Table of contents

### Flux Classes
- [Account](docs/classes/Account.Account.md)
- [Address](docs/classes/Address.Address.md)
- [BankAccount](docs/classes/BankAccount.BankAccount.md)
- [Card](docs/classes/Card.Card.md)
- [FluxIdentifier](docs/classes/FluxIdentifier.FluxIdentifier.md)
- [FluxType](docs/classes/FluxType.FluxType.md)
- [InstallmentTransaction](docs/classes/InstallmentTransaction.InstallmentTransaction.md)
- [OneTimePaymentLink](docs/classes/OneTimePaymentLink.OneTimePaymentLink.md)
- [PaymentMethod](docs/classes/PaymentMethod.PaymentMethod.md)
- [Product](docs/classes/Product.Product.md)
- [RecurringTransaction](docs/classes/RecurringTransaction.RecurringTransaction.md)
- [Token](docs/classes/Token.Token.md)
- [Transaction](docs/classes/Transaction.Transaction.md)

### Flux Class Interfaces
- [IAccount](docs/interfaces/IAccount.IAccount.md)
- [IAddress](docs/interfaces/IAddress.IAddress.md)
- [IBankAccount](docs/interfaces/IBankAccount.IBankAccount.md)
- [ICard](docs/interfaces/ICard.ICard.md)
- [IInstallmentTransaction](docs/interfaces/IInstallmentTransaction.IInstallmentTransaction.md)
- [IOneTimePaymentLink](docs/interfaces/IOneTimePaymentLink.IOneTimePaymentLink.md)
- [IPaymentMethod](docs/interfaces/IPaymentMethod.IPaymentMethod.md)
- [IProduct](docs/interfaces/IProduct.IProduct.md)
- [IRecurringTransaction](docs/interfaces/IRecurringTransaction.IRecurringTransaction.md)
- [ISearchOptions](docs/interfaces/ISearchOptions.ISearchOptions.md)
- [IToken](docs/interfaces/IToken.IToken.md)
- [ITransaction](docs/interfaces/ITransaction.ITransaction.md)

### Query Classes
- [AccountQuery](docs/classes/AccountQuery.AccountQuery.md)
- [AdditionalSearchOptions](docs/classes/AdditionalSearchOptions.AdditionalSearchOptions.md)
- [AddressQuery](docs/classes/AddressQuery.AddressQuery.md)
- [InstallmentTransactionQuery](docs/classes/InstallmentTransactionQuery.InstallmentTransactionQuery.md)
- [OneTimePaymentLinkQuery](docs/classes/OneTimePaymentLinkQuery.OneTimePaymentLinkQuery.md)
- [PaymentMethodQuery](docs/classes/PaymentMethodQuery.PaymentMethodQuery.md)
- [ProductQuery](docs/classes/ProductQuery.ProductQuery.md)
- [RecurringTransactionQuery](docs/classes/RecurringTransactionQuery.RecurringTransactionQuery.md)
- [TokenQuery](docs/classes/TokenQuery.TokenQuery.md)
- [TransactionQuery](docs/classes/TransactionQuery.TransactionQuery.md)
- [PaginationSupport](docs/classes/PaginationSupport.PaginationSupport.md)

### Query Types
- [IAccountQuery](docs/modules/IAccountQuery.md)
- [IAddressQuery](docs/modules/IAddressQuery.md)
- [IInstallmentTransactionQuery](docs/modules/IInstallmentTransactionQuery.md)
- [IOneTimePaymentLinkQuery](docs/modules/IOneTimePaymentLinkQuery.md)
- [IPaymentMethodQuery](docs/modules/IPaymentMethodQuery.md)
- [IProductQuery](docs/modules/IProductQuery.md)
- [IRecurringTransactionQuery](docs/modules/IRecurringTransactionQuery.md)
- [ITokenQuery](docs/modules/ITokenQuery.md)
- [ITransactionQuery](docs/modules/ITransactionQuery.md)
- [IInstallmentTransactionQuery](docs/modules/IInstallmentTransactionQuery.md)
