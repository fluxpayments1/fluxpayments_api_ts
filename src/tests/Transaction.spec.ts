// import { assert } from "chai";
// import { IAccount } from "../flux_types/IAccount";
// import { IAddress } from "../flux_types/IAddress";
// import { IProduct } from "../flux_types/IProduct";
// import { Transaction } from "../flux_types/Transaction";
// import { Account, AccountUserType, Address, PaymentMethod, Product } from "../flux_types/index";
// import { flux } from "../lib/index";
// import { Card } from "../flux_types/Card";

// describe("Transaction tests basic", function ()  {
//     let prod1 : Product;
//     let prod2 : Product;
//     let acc1: Account;
//     let acc2: Account;
//     let add1: Address;
//     let add2: Address;
//     let paymentMethod1: PaymentMethod;
//     let transaction1: Transaction;
//     let transaction2: Transaction;
//     this.timeout(500000)

//     before (async () => {
//         await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
        
//         prod1 = await Product.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_FIRST_PRODUCT",
//             type: "PHYSICAL_PRODUCT",
//             name: "TEST 1",
//             orderQuantity: 100,
//             price: .51
//         })

//         acc1 = await Account.createInstanceSafe({
//             id: 1
//         })

//         acc2 = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_H",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         add1 = await Address.createInstanceSafe({
//             id: 1
//         })

//         paymentMethod1 = Card.createInstanceLazy({
//             id: 1,
//             paymentRefId: 1,
//             payType: "CARD"
//         })

        
//         await acc2.setDefaultPaymentMethod(paymentMethod1)
//         await acc2.setDefaultShippingAddress(add1)


//         prod2 = await Product.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_SECOND_PRODUCT",
//             type: "PHYSICAL_PRODUCT",
//             name: "TEST 2",
//             orderQuantity: 10,
//             price: 1.51
//         })

//         add2 = await Address.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_SECOND_ADDRESS",
//             streetAddress: "125 Main Street"
//         })
//         try {
//             await acc1.addAddress(add2)

//         } catch(e) {

//         }


//     })

//     it("should load the proper data", () => {
//         assert.isDefined(prod1)
//         assert.isDefined(acc1)
//         assert.isDefined(add1)
//         assert.isDefined(paymentMethod1)
//     })

//     it("should create a transaction", async () => {
        
//         transaction1 = await Transaction.createInstanceSafe({
//             account: acc1,
//             shippingAddress: add1,
//             paymentMethod: paymentMethod1,
//             products: prod1
//         })
//         console.log(transaction1)
//         assert.isDefined(transaction1)
//     })

//     it("should return the dump account after calling get account", async () => {
//         let acc : IAccount = await transaction1.getAccount();
//         console.log(acc);

//         assert.isDefined(acc);
        
//     })

//     it("should return the account after calling get flux account", async () => {
//         let acc : Account = await transaction1.getFluxAccount();
//         console.log(acc);

//         assert.isDefined(acc);
        
//     })

//     it("should return the shipping address dump", async () => {
//         let add : IAddress = await transaction1.getShippingAddress();

//         console.log(add);

//         assert.isDefined(add)

//     })
//     it("should return the shipping address", async () => {
//         let add : Address = await transaction1.getFluxShippingAddress();

//         console.log(add);

//         assert.isDefined(add)

//     })



//     it("should get the payment method address dump", async () => {
//         let add : IAddress = await transaction1.getPaymentMethodAddress();

//         console.log(add);

//         assert.isDefined(add)
//     })

//     it("should get the payment method address", async () => {
//         let add : Address = await transaction1.getFluxPaymentMethodAddress();

//         console.log(add);

//         assert.isDefined(add)
//     })

//     it("should get the product dump or the products attached to the transaction", async () => {
//         try {
//             let prod: IProduct[] = await transaction1.getProducts()
//             console.log(prod)
    
//             assert.isDefined(prod);
//         } catch (e) {
//             console.log(e)
//             assert.fail()
//         }


//     })

//     it("should get the product or the products attached to the transaction", async () => {
//         try {
//             let prods: Product[] = await transaction1.getFluxProducts()
//             console.log(prods)
    
//             assert.isDefined(prods);
//         } catch (e) {
//             console.log(e)
//             assert.fail()
//         }

//     })

//     it("should pull up details of the od addresses after we update the address", async () => {
//         add1.city = "Test City"
//         console.log(add1)
//         await add1.merge();

//         let payAdd : IAddress = await transaction1.getPaymentMethodAddress();
//         let shipAdd : IAddress = await transaction1.getShippingAddress();
//         assert.isDefined(payAdd);
//         assert.equal(payAdd.city, "Los Angeles")

//         assert.isDefined(shipAdd);
//         assert.equal(shipAdd.city, "Los Angeles")

//         let currPayAdd : Address = await transaction1.getFluxPaymentMethodAddress()
//         let currShipAdd : Address = await transaction1.getFluxShippingAddress();

//         assert.isDefined(currPayAdd)
//         assert.isDefined(currShipAdd)

//         assert.equal(currPayAdd.city, "Test City")
//         assert.equal(currShipAdd.city, "Test City")

//         add1.city = "Los Angeles"

//         await add1.merge();

//     })

//     it("should pull up details of the old product after we update the product", async () => {
//         try {
//             prod1.category = "Test Cat 123"
//             await prod1.merge();
    
//             let promArr = [transaction1.getProducts(), transaction1.getFluxProducts()]
    
//             let res = await Promise.all(promArr)
//             let iProd: IProduct[] = res[0] as IProduct[]
    
//             assert.isDefined(iProd);
//             assert.notEqual(iProd[0].category, "Test Cat 123")
    
//             let prod : Product[] = res[1] as Product[]
    
//             assert.isDefined(prod)
//             assert.equal(prod[0].category, "Test Cat 123");
    
//             prod1.category = ""
//             await prod1.merge();
//         } catch (e) {
//             console.log(e)
//             assert.fail()
//         }


//     })


//     it("should be able to create a new transaction with the second product and the second address", async () => {
//         transaction2 = await Transaction.createInstanceSafe({
//             account: acc1,
//             shippingAddress: add2,
//             products: prod2,
//             paymentMethod: paymentMethod1
//         })
//         console.log(transaction2)
//         assert.isDefined(transaction2)

//     })


//     it("should pull the correct information for the second transaction", async () => {

//         let payAdd = transaction2.getPaymentMethodAddress()
//         let payAddCurr = transaction2.getFluxPaymentMethodAddress()
//         let shipAdd = transaction2.getShippingAddress()
//         let shipAddCurr = transaction2.getFluxShippingAddress()

//         let res = await Promise.all([payAdd, payAddCurr, shipAdd, shipAddCurr]);

//         let paymentAdd: IAddress = res[0]
//         let paymentAddCurr : Address = res[1]
//         let shippingAdd : IAddress = res[2];
//         let shippingAddCurr : Address = res[3]

//         assert.isDefined(paymentAdd)
//         assert.isDefined(paymentAddCurr)
//         assert.isDefined(shippingAdd)
//         assert.isDefined(shippingAddCurr)


//         console.log(paymentAdd)
//         console.log(paymentAddCurr)
//         console.log(shippingAdd)
//         console.log(shippingAddCurr)

//         assert.equal(shippingAdd.uniqueId, "SOME_RANDOM_SECOND_ADDRESS")
//         assert.equal(shippingAddCurr.uniqueId, "SOME_RANDOM_SECOND_ADDRESS")

//         await (acc1.removeAddress(add2))


//     })

//     it("should create a transaction for the second account which has a default shipping and payment method", async () => {
        
//         try {
//             let txn: Transaction = await Transaction.createInstanceSafe({
//                 account: acc2,
//                 products: [prod2, prod1]
//             })
//             console.log(txn)
//             console.log(await txn.getAccount())
//             console.log(await txn.getFluxAccount())
//             console.log(await txn.getPaymentMethod())
//             console.log(await txn.getPaymentMethodAddress())
//             console.log(await txn.getFluxPaymentMethodAddress())
//             console.log(await txn.getShippingAddress())
//             console.log(await txn.getFluxShippingAddress())
//             console.log(await txn.getProducts())
//             console.log(await txn.getFluxProducts())
//         } catch (e) {
//             console.log(e)
//         }

//     })


//     it("should correctly decrement the product quantity from a physical product with inventory tracking enabled", async () => {
//         let phyProd = await Product.createInstanceSafe({
//             type: "PHYSICAL_PRODUCT",
//             price: 5.54,
//             enableBackorderedProducts: false,
//             enableInventoryManagement: true,
//             inventoryCount: 100,
//             name: "Test Product"
//         })

//         phyProd.orderQuantity = 10

//         let txn = await Transaction.createInstanceSafe({
//             account: acc2,
//             products: phyProd,
//         })

//         console.log(txn)

//         await phyProd.refresh()


//         assert.equal(phyProd.inventoryCount, 90);

//         await phyProd.delete();

//     })

//     it("should correctly decline a transaction if the product count goes below 0", async () => {
//         let phyProd = await Product.createInstanceSafe({
//             type: "PHYSICAL_PRODUCT",
//             price: 5.54,
//             enableBackorderedProducts: false,
//             enableInventoryManagement: true,
//             inventoryCount: 10,
//             name: "Test Product"
//         })

//         phyProd.orderQuantity = 11
//         try {
//             let txn = await Transaction.createInstanceSafe({
//                 account: acc2,
//                 products: phyProd,
//             })
//         } catch (e) {console.log(e)}


//         await phyProd.refresh()


//         assert.equal(phyProd.inventoryCount, 10);

//         await phyProd.delete();

//     })

//     it("should allow the count to go to zero", async () => {
//         let phyProd = await Product.createInstanceSafe({
//             type: "PHYSICAL_PRODUCT",
//             price: 5.54,
//             enableBackorderedProducts: false,
//             enableInventoryManagement: true,
//             inventoryCount: 10,
//             name: "Test Product"
//         })

//         phyProd.orderQuantity = 10
//         try {
//             let txn = await Transaction.createInstanceSafe({
//                 account: acc2,
//                 products: phyProd,
//             })
//             console.log(txn)
//         } catch (e) {}


//         await phyProd.refresh()


//         assert.equal(phyProd.inventoryCount, 0);

//         await phyProd.delete();

//     })

//     it("should allow the count to go below zero if enableBackordere is true", async () => {
//         let phyProd = await Product.createInstanceSafe({
//             type: "PHYSICAL_PRODUCT",
//             price: 5.54,
//             enableBackorderedProducts: true,
//             enableInventoryManagement: true,
//             inventoryCount: 10,
//             name: "Test Product"
//         })

//         phyProd.orderQuantity = 20
//         try {
//             let txn = await Transaction.createInstanceSafe({
//                 account: acc2,
//                 products: phyProd,
//             })
//             console.log(txn)
//         } catch (e) {}


//         await phyProd.refresh()


//         assert.equal(phyProd.inventoryCount, -10);

//         await phyProd.delete();

//     })

//     it("should error out if you try creating a transaction with a physical_product and no shipping address", async () => {
//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_HJHHHH",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })
//         await acc.setDefaultPaymentMethod(paymentMethod1);
//         try {
//             await Transaction.createInstanceSafe({
//                 account: acc,
//                 products: [prod1, prod2]
//             })
//             assert.fail()
//         } catch(e) {
//             console.log(e)
//         }

//         await acc.delete();

//     })

//     it ("should use the default payment method and default shipping address if not attached", async () => {
//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.setDefaultPaymentMethod(paymentMethod1);
//         await acc.setDefaultShippingAddress(add1);

//         let transaction = await Transaction.createInstanceSafe({
//             account: acc,
//             products: [prod1]
//         })

//         console.log(transaction)
        
//         await acc.delete();

//     })

//     it ("should use default payment method if not attached", async () => {
//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.setDefaultPaymentMethod(paymentMethod1);
//         await acc.setDefaultShippingAddress(add1);

//         let transaction = await Transaction.createInstanceSafe({
//             account: acc,
//             products: [prod1],
//             shippingAddress: add1
//         })

//         console.log(transaction)
        
//         await acc.delete();
//     })

//     it ("should use default shipping address if not attached", async () => {
//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.setDefaultPaymentMethod(paymentMethod1);
//         await acc.setDefaultShippingAddress(add1);

//         let transaction = await Transaction.createInstanceSafe({
//             account: acc,
//             products: [prod1],
//             paymentMethod: paymentMethod1
//         })

//         console.log(transaction)
        
//         await acc.delete();
//     })

//     it ("shouldn't allow you to pass a shipping address that isn't attached to the account", async () => {
//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.setDefaultPaymentMethod(paymentMethod1);

//         try {
//             let transaction = await Transaction.createInstanceSafe({
//                 account: acc,
//                 products: [prod1],
//                 paymentMethod: paymentMethod1,
//                 shippingAddress: add1
//             })
//             assert.fail()
//         } catch (e) {
//             console.log(e)
//         }
        
//         await acc.delete();
//     })

//     it ("shouldn't allow you to pass a payment method that isn't attached to an account", async () => {
//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.setDefaultShippingAddress(add1);

//         try {
//             let transaction = await Transaction.createInstanceSafe({
//                 account: acc,
//                 products: [prod1],
//                 paymentMethod: paymentMethod1,
//                 shippingAddress: add1
//             })
//             assert.fail()
//         } catch (e) {
//             console.log(e)
//         }
        
//         await acc.delete();
//     })

//     it ("should allow the user to pass the default payment method and default shipping address to the transaction", async () => {
//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.setDefaultPaymentMethod(paymentMethod1);
//         await acc.setDefaultShippingAddress(add1);

//         let transaction = await Transaction.createInstanceSafe({
//             account: acc,
//             products: [prod1],
//             paymentMethod: paymentMethod1,
//             shippingAddress: add1
//         })

//         console.log(transaction)
        
//         await acc.delete();
//     })

//     it ("should allow you to use a payment method and address attached to the account but not defaults", async () => {
//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.addAddress(add1);
//         //TODO - FIX THIS WHEN WE ADD THE METHODS
//         await acc.setDefaultPaymentMethod(paymentMethod1);

//         let transaction = await Transaction.createInstanceSafe({
//             account: acc,
//             products: [prod1],
//             paymentMethod: paymentMethod1,
//             shippingAddress: add1
//         })

//         await acc.removeAddress(add1)

//         console.log(transaction)
        
//         await acc.delete();
//     })

//     it ("should error out on no products attached", async () => {
//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.removeAddress(add1);
//         //TODO - FIX THIS WHEN WE ADD THE METHODS
//         await acc.setDefaultPaymentMethod(paymentMethod1);
//         try {
//             let transaction = await Transaction.createInstanceSafe({
//                 account: acc,
//                 paymentMethod: paymentMethod1,
//                 shippingAddress: add1
//             })
//             assert.fail()
//         } catch (e) {
//             console.log(e)
//         }

//         await acc.delete();
//     })

//     it ("should use the specified tax rate if passed", async () => {
//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.setDefaultPaymentMethod(paymentMethod1);
//         await acc.setDefaultShippingAddress(add1);

//         let transaction = await Transaction.createInstanceSafe({
//             account: acc,
//             products: [prod1],
//             paymentMethod: paymentMethod1,
//             shippingAddress: add1,
//             taxRate: .6
//         })

//         console.log(transaction)
        
//         assert.equal(transaction.taxRate, .6);

//         await acc.delete();
//     })

//     it ("should use the currency of the merchant if no account currency and multiple product currencies and there is no txn currency", async () => {
        
//         let firstProd = await Product.createInstanceSafe({
//             uniqueId: "TESTTTTTTT",
//             type: "PHYSICAL_PRODUCT",
//             name: "TESTIE",
//             orderQuantity: 100,
//             currency: "JPY",
//             price: .51
//         })

//         let secondProduct = await Product.createInstanceSafe({
//             uniqueId: "TESTLJFSD",
//             type: "PHYSICAL_PRODUCT",
//             name: "TEST 2",
//             orderQuantity: 10,
//             currency: "EUR",
//             price: 1.51
//         })

//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.setDefaultPaymentMethod(paymentMethod1);
//         await acc.setDefaultShippingAddress(add1);

//         let transaction = await Transaction.createInstanceSafe({
//             account: acc,
//             products: [firstProd, secondProduct],
//             paymentMethod: paymentMethod1,
//             shippingAddress: add1
//         })

//         console.log(transaction)
        
//         assert.equal(transaction.currency, "USD");

//         await acc.delete();
//         await firstProd.delete();
//         await secondProduct.delete()



//     })

//     it ("should use the currency of the products if they are all the same and there is no txn currency", async () => {
//         let firstProd = await Product.createInstanceSafe({
//             uniqueId: "TESTTTTTTT",
//             type: "PHYSICAL_PRODUCT",
//             name: "TESTIE",
//             orderQuantity: 100,
//             currency: "EUR",
//             price: .51
//         })

//         let secondProduct = await Product.createInstanceSafe({
//             uniqueId: "TESTLJFSD",
//             type: "PHYSICAL_PRODUCT",
//             name: "TEST 2",
//             orderQuantity: 10,
//             currency: "EUR",
//             price: 1.51
//         })

//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.setDefaultPaymentMethod(paymentMethod1);
//         await acc.setDefaultShippingAddress(add1);

//         let transaction = await Transaction.createInstanceSafe({
//             account: acc,
//             products: [firstProd, secondProduct],
//             paymentMethod: paymentMethod1,
//             shippingAddress: add1
//         })

//         console.log(transaction)
        
//         assert.equal(transaction.currency, "EUR");

//         await acc.delete();
//         await firstProd.delete();
//         await secondProduct.delete()

//     })

//     it ("should use the currency of the account if the product currencies are different and there is no txn currency", async () => {
//         let firstProd = await Product.createInstanceSafe({
//             uniqueId: "TESTTTTTTT",
//             type: "PHYSICAL_PRODUCT",
//             name: "TESTIE",
//             orderQuantity: 100,
//             currency: "JPY",
//             price: .51
//         })

//         let secondProduct = await Product.createInstanceSafe({
//             uniqueId: "TESTLJFSD",
//             type: "PHYSICAL_PRODUCT",
//             name: "TEST 2",
//             orderQuantity: 10,
//             currency: "EUR",
//             price: 1.51
//         })

//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             currency: "AOA",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.setDefaultPaymentMethod(paymentMethod1);
//         await acc.setDefaultShippingAddress(add1);

//         let transaction = await Transaction.createInstanceSafe({
//             account: acc,
//             products: [firstProd, secondProduct],
//             paymentMethod: paymentMethod1,
//             shippingAddress: add1
//         })

//         console.log(transaction)
        
//         assert.equal(transaction.currency, "AOA");

//         await acc.delete();
//         await firstProd.delete();
//         await secondProduct.delete()

//     })

//     it ("should use the txn currency if it is present", async () => {
//         let firstProd = await Product.createInstanceSafe({
//             uniqueId: "TESTTTTTTT",
//             type: "PHYSICAL_PRODUCT",
//             name: "TESTIE",
//             orderQuantity: 100,
//             currency: "JPY",
//             price: .51
//         })

//         let secondProduct = await Product.createInstanceSafe({
//             uniqueId: "TESTLJFSD",
//             type: "PHYSICAL_PRODUCT",
//             name: "TEST 2",
//             orderQuantity: 10,
//             currency: "EUR",
//             price: 1.51
//         })

//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             currency: "AOA",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.setDefaultPaymentMethod(paymentMethod1);
//         await acc.setDefaultShippingAddress(add1);

//         let transaction = await Transaction.createInstanceSafe({
//             account: acc,
//             products: [firstProd, secondProduct],
//             paymentMethod: paymentMethod1,
//             shippingAddress: add1,
//             currency: "AWG"
//         })

//         console.log(transaction)
        
//         assert.equal(transaction.currency, "AWG");

//         await acc.delete();
//         await firstProd.delete();
//         await secondProduct.delete()
//     })

//     it ("should not dead lock when multiple products are being locked in reverse order", async () => {

//     })

//     it ("should update the state of transactions and transaction_products that are backordered when orderCount is incremented", async () => {

//     })

//     it ("should allow you to create a transaction without pricing, just use with inventory tracking. Costs 5 cents", async () => {
        
//         try {
//             let firstProd = await Product.createInstanceSafe({
//                 uniqueId: "TESTTTTTTT",
//                 type: "PHYSICAL_PRODUCT",
//                 name: "TESTIE",
//                 orderQuantity: 100,
//                 currency: "JPY",
//                 price: .51
//             })
    
//             let secondProduct = await Product.createInstanceSafe({
//                 uniqueId: "TESTLJFSD",
//                 type: "PHYSICAL_PRODUCT",
//                 name: "TEST 2",
//                 orderQuantity: 10,
//                 currency: "EUR",
//                 price: 1.51
//             })
    
//             let acc = await Account.createInstanceSafe({
//                 uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//                 firstName: "Nick",
//                 currency: "AOA",
//                 accountUserType: AccountUserType.CUSTOMER
//             })
    
//             await acc.setDefaultPaymentMethod(paymentMethod1);
//             await acc.setDefaultShippingAddress(add1);
    
//             let transaction = await Transaction.createInstanceSafe({
//                 account: acc,
//                 products: [firstProd, secondProduct],
//                 currency: "AWG",
//                 inventoryOnlyOrder: true
//             })
    
//             console.log(transaction)
            
//             assert.equal(transaction.currency, "AWG");
    
//             await acc.delete();
//             await firstProd.delete();
//             await secondProduct.delete()
//         } catch (e) {
//             assert.fail()
//         }

//     })

//     it ("should rollback if we delete an account and fail, not related to transactions but bug", async () => {

//         let acc = await Account.createInstanceSafe({
//             uniqueId: "SOME_RANDOM_ACCOUNT_NEXT",
//             firstName: "Nick",
//             currency: "AOA",
//             accountUserType: AccountUserType.CUSTOMER
//         })

//         await acc.addAddress(add1)

//         try {
//             await acc.delete();
//             assert.fail()
//         } catch(e) {
//             console.log(e)
//             await acc.removeAddress(add1)
//             await acc.delete()
//         }

    
//     })


    

//     after(async () => {
//         await add2.delete();
//         await prod1.delete();
//         await prod2.delete();
//         await acc2.delete();
//     })


    

//     //We should be able to create a transaction and get a successfull
//     //response

//     //Types of transactions to test
//         //Transactions with one product
//         //Transactions with multiple products.
//         //Transactions with multiple products and different types of products
//             //We should ensure that transactions are correctly managing product
//             //inventory.
      
//     //The way we calculate currency
//         //If there is no currency on the product we look on the transaction
//         //If there is no currency on the transaction we look at the merchant
//         //default currency
//         //If there are multiple currencies on the products and no currencies ont
//         //the transaction we MUST use the merchants default currency.

//     //

//     //Transactions should calculate the taxRate if the field is null.
//     //If there is a shipping address we should use that as the tax
//     //rate, otherwise we should use the payment method addreess.

//     //No transaction amount field, all amounts should 
//     //be calculated from the given products.

//     //Need to do sets of concurrency testing. Combinations of all the above
//     //tests happening at the same time

//     //Need to ensure that the data is being dumped and linked correctly. Changing
//     //a product shouldn't change the transactions product. Updating a product then 
//     //having new transactions should not affect the products attached to old transa
//     //ctions.

// })