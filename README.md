# fluxpayments

Welcome to the fluxpayments documentation. Below you will find sample code and a comprehensive list of modules and their respective documentation links.

The TypeScript code snippet below illustrates the API workflow:

```typescript
//Server side code
import { flux } from "fluxpayments/lib";
import { Account } from "fluxpayments/flux_types";

await flux(
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

//Send the session to the frontend to create a payment method for
//the account
//Browser side code
import { fluxBrowser } from "fluxpayments/lib";
import { Card, Account } from "fluxpayments/flux_types";

await fluxBrowser("PK_ewRVuDFJEe61LwJCwKjwBA==");

paymentMethod = await Card.createInstanceSafe({
    address: add1,
    firstName: "Nick",
    lastName: "Kreissler",
    accountSession: sessionGenerated,
    cardNumber: "1234123412341234",
    cvv: "1234",
    expMonth: "05",
    expYear: "35"
});

await Account.setDefaultPaymentMethod(paymentMethod)

//Create a product and a transaction on 
//Server side code
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
### Modules
- [Account](docs/modules/Account.md)
- [Address](docs/modules/Address.md)
- [BankAccount](docs/modules/BankAccount.md)
- [Card](docs/modules/Card.md)
- [FluxIdentifier](docs/modules/FluxIdentifier.md)
- [FluxType](docs/modules/FluxType.md)
- [InstallmentTransaction](docs/modules/InstallmentTransaction.md)
- [Mac](docs/modules/Mac.md)
- [OneTimePaymentLink](docs/modules/OneTimePaymentLink.md)
- [PaymentMethod](docs/modules/PaymentMethod.md)
- [Product](docs/modules/Product.md)
- [RecurringTransaction](docs/modules/RecurringTransaction.md)
- [Token](docs/modules/Token.md)
- [Transaction](docs/modules/Transaction.md)

### Interfaces
- [IAccount](docs/modules/IAccount.md)
- [IAddress](docs/modules/IAddress.md)
- [IBankAccount](docs/modules/IBankAccount.md)
- [ICard](docs/modules/ICard.md)
- [IInstallmentTransaction](docs/modules/IInstallmentTransaction.md)
- [IOneTimePaymentLink](docs/modules/IOneTimePaymentLink.md)
- [IPaymentMethod](docs/modules/IPaymentMethod.md)
- [IProduct](docs/modules/IProduct.md)
- [IRecurringTransaction](docs/modules/IRecurringTransaction.md)
- [ISearchOptions](docs/modules/ISearchOptions.md)
- [IToken](docs/modules/IToken.md)
- [ITransaction](docs/modules/ITransaction.md)
- [IAccountQuery](docs/modules/IAccountQuery.md)
- [IAddressQuery](docs/modules/IAddressQuery.md)
- [IInstallmentTransactionQuery](docs/modules/IInstallmentTransactionQuery.md)
- [IOneTimePaymentLinkQuery](docs/modules/IOneTimePaymentLinkQuery.md)
- [IPaymentMethodQuery](docs/modules/IPaymentMethodQuery.md)
- [IProductQuery](docs/modules/IProductQuery.md)
- [IRecurringTransactionQuery](docs/modules/IRecurringTransactionQuery.md)
- [ITokenQuery](docs/modules/ITokenQuery.md)
- [ITransactionQuery](docs/modules/ITransactionQuery.md)
- [InstallmentTransactionQuery](docs/modules/InstallmentTransactionQuery.md)

### Queries
- [AccountQuery](docs/modules/AccountQuery.md)
- [AccountUserType](docs/modules/AccountUserType.md)
- [AdditionalSearchOptions](docs/modules/AdditionalSearchOptions.md)
- [AddressQuery](docs/modules/AddressQuery.md)
- [OneTimePaymentLinkQuery](docs/modules/OneTimePaymentLinkQuery.md)
- [PaymentMethodQuery](docs/modules/PaymentMethodQuery.md)
- [ProductQuery](docs/modules/ProductQuery.md)
- [RecurringTransactionQuery](docs/modules/RecurringTransactionQuery.md)
- [TokenQuery](docs/modules/TokenQuery.md)
- [TransactionQuery](docs/modules/TransactionQuery.md)
- [PaginationSupport](docs/modules/PaginationSupport.md)