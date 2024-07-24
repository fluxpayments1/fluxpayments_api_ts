import { assert } from "chai";
import { IAccount } from "fluxpayments/flux_types";
import { IAddress } from "fluxpayments/flux_types";
import { IProduct } from "fluxpayments/flux_types";
import { Transaction } from "fluxpayments/flux_types";
import { Account, AccountUserType, Address, PaymentMethod, Product } from "fluxpayments/flux_types";
import { flux } from "fluxpayments/lib";
import { Card } from "fluxpayments/flux_types";

describe("Transaction tests basic", function ()  {
    let prod1 : Product;
    let prod2 : Product;
    let acc1: Account;
    let acc2: Account;
    let add1: Address;
    let add2: Address;
    let paymentMethod1: PaymentMethod;
    let transaction1: Transaction;
    let transaction2: Transaction;
    this.timeout(500000)

    before (async () => {
        await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
        
        prod1 = await Product.createInstanceSafe({
            uniqueId: "SOME_RANDOM_FIRST_PRODUCT",
            type: "PHYSICAL_PRODUCT",
            name: "TEST 1",
            orderQuantity: 100,
            price: .51
        })

        acc1 = await Account.createInstanceSafe({
            id: 1
        })

        acc2 = await Account.createInstanceSafe({
            uniqueId: "SOME_RANDOM_ACCOUNT_H",
            firstName: "Nick",
            accountUserType: AccountUserType.CUSTOMER
        })

        add1 = await Address.createInstanceSafe({
            id: 1
        })

        paymentMethod1 = await Card.createInstanceLazy({
            id: 1,
        })

        
        await acc2.setDefaultPaymentMethod(paymentMethod1)
        await acc2.setDefaultShippingAddress(add1)


        prod2 = await Product.createInstanceSafe({
            uniqueId: "SOME_RANDOM_SECOND_PRODUCT",
            type: "PHYSICAL_PRODUCT",
            name: "TEST 2",
            orderQuantity: 10,
            price: 1.51
        })

        add2 = await Address.createInstanceSafe({
            uniqueId: "SOME_RANDOM_SECOND_ADDRESS",
            streetAddress: "125 Main Street"
        })
        try {
            await acc1.addAddress(add2)

        } catch(e) {

        }


    })

    it("should load the proper data", () => {
        assert.isDefined(prod1)
        assert.isDefined(acc1)
        assert.isDefined(add1)
        assert.isDefined(paymentMethod1)
    })

    it("Should create 100 transaction and profile this", async () => {
        let start = new Date().getTime()
        for (let j = 0; j < 10; j++) {
            let arr = []
            let startInner = new Date().getTime()

            for (let i = 0; i < 1000; i++) {
                arr.push(Transaction.createInstanceSafe({
                    account: acc1,
                    shippingAddress: add1,
                    paymentMethod: paymentMethod1,
                    products: prod1
                }))
            }
            await Promise.all(arr)
            console.log("Profiled time in seconds: ", (new Date().getTime() - startInner) / 1000)

        }
        console.log("Profiled time in seconds final: ", (new Date().getTime() - start) / 1000)

    })

})