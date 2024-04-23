// import { assert } from "chai";
// import { Product } from "../flux_types/Product";
// import { ProductQuery } from "../flux_types/ProductQuery";
// import { Flux } from "../lib/Flux";
// import { flux } from "../lib/index";



// describe("Product specific tests", function () {
//     let fluxObj: Flux, prod: Product, prod2: Product;
//     this.timeout(50000); // sets a 50-second timeout for all tests in this suite

//     before(async () => {
//         try {
//             fluxObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");

//             prod = await Product.createInstanceSafe({
//                 uniqueId: "FIRSTPRODUCT",
//                 type: "PHYSICAL_PRODUCT",
//                 name: "TEST 1",
//                 price: .51

//             });
//             prod2 = await Product.createInstanceSafe({
//                 uniqueId: "SECONDPRODUCT",
//                 type: "PHYSICAL_PRODUCT",
//                 name: "TEST 2",
//                 price: .51
//             });
//         } catch (e: any) {
//             console.log(e.message)
//         }

//     });

//     it("should have instantiated a fluxObj", () => {
//         assert.isDefined(fluxObj);
//     });

//     it("should merge changes correctly, refresh objects correctly, and make correct use of load lazy", async () => {
//         let product = Product.createInstanceLazy({
//             uniqueId: "FIRSTPRODUCT",
//         })

//         await product.refresh()

//         assert.isDefined(product.id)

//         product.category = "TEST"

//         await product.merge();

//         product = Product.createInstanceLazy({
//             uniqueId: "FIRSTPRODUCT",
//         })

//         await product.refresh()

//         assert.equal(product.category, "TEST")

//     })

//     it("should manage addresses correctly and refresh the first acc correctly", async () => {
//         await prod.refresh()

//         assert.equal(prod.category, "TEST")




//     });

//     after(async () => {

//         await prod.delete();
//         await prod2.delete();

//         let prodSearch = await fluxObj.getProducts(new ProductQuery({}));


//         it("should clean up resources properly", () => {
//             assert.lengthOf(prodSearch, 0);
//         })

//     });
// });


// describe("It should manage inventory count correctly", function () {
//     this.timeout(50000000)
//     //Should error out when manually trying to change the quantity
//     let errOne: boolean = false;

//     //Should error our if the merchant tries disabling backordered
//     //products when there is a negative inventory.
//     let errTwo: boolean = false;

//     //Should error out if the merchant tries ordering a product 
//     //that would push the inventoryCount below zero
//     let errThree: boolean = false;

//     //It should error out if the quantity of a product 
//     //that does not have inventory management enabled is
//     //being manipulated
//     let errFour: boolean = false;

//     //It should allow inventory count to go negative if
//     //the inventoryTracking is enabled and the backordered
//     //products are also enabled.
//     let sucTestOne: boolean = false;

//     //It should never have a negative quantity if the flags are
//     //enabled (Made for the random tests)
//     let sucTestTwo: boolean = false;

//     //The final quantity should be the same as the
//     //precomputed quantity
//     let sucTestThree: boolean = false;

//     //Product with tracking enabled and backorders disabled
//     let productOne: Product;

//     //Product with tracking disable and backorders disabled
//     let productTwo: Product;

//     //Product with tracking enable and backorders enabled
//     let productThree: Product;

//     before(async () => {

//         await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");

//         productOne = await Product.createInstanceSafe({
//             name: "Test Product",
//             type: "PHYSICAL_PRODUCT",
//             inventoryCount: 100,
//             price: 50.00,
//             enableBackorderedProducts: false,
//             enableInventoryManagement: true,
//             uniqueId: "TESTPRODUCT"
//         })

//         productTwo = await Product.createInstanceSafe({
//             name: "Test Product 2",
//             type: "PHYSICAL_PRODUCT",
//             inventoryCount: 100,
//             price: 50.00,
//             enableBackorderedProducts: false,
//             enableInventoryManagement: false,
//             uniqueId: "TESTPRODUCT2"
//         })

//         productThree = await Product.createInstanceSafe({
//             name: "Test Product 3",
//             type: "PHYSICAL_PRODUCT",
//             inventoryCount: -50,
//             price: 50.00,
//             enableBackorderedProducts: true,
//             enableInventoryManagement: true,
//             uniqueId: "TESTPRODUCT3"
//         })

//     })

//     it("Should error out when manually trying to change the quantity", async () => {
//         productOne.inventoryCount = 500;
//         try {
//             await productOne.merge()
//         } catch (e: any) {
//             console.log(e.message)
//             errOne = true
//         }
//         await productOne.refresh();
//         assert.equal(productOne.inventoryCount, 100);
//         assert.isTrue(errOne);
//     })

//     it("Should error out if the merchant tries ordering a product that would push the inventoryCount below zero", async () => {
//         await productOne.decrementInventoryCount(100)

//         //count at zero
//         try {
//             await productOne.decrementInventoryCount(1);

//         } catch (e: any) {
//             console.log(e.message)
//             errThree = true
//         }

//         assert.isTrue(errThree)
//         assert.equal(productOne.inventoryCount, 0)

//     })


//     // it("It should never have a negative quantity if the flags are enabled (Made for the random tests)", async () => {
//     //     let promiseArr: Promise<Product>[] = []
//     //     for (let i = 0; i < 100; i++) {
//     //         let incAmount = Math.floor(Math.random() * 100)
//     //         let decAmount = Math.floor(Math.random() * 100)
//     //         promiseArr.push(productOne.decrementInventoryCount(decAmount))
//     //         promiseArr.push(productOne.incrementInventoryCount(incAmount))
//     //     }

//     //     let prods = await Promise.allSettled(promiseArr)

//     //     prods.forEach(e => {
//     //         if (e.status === 'fulfilled') {
//     //             assert.isTrue(e.value.inventoryCount >= 0)
//     //         } else if (e.status === "rejected") {
//     //             console.log(e.reason)
//     //         }
//     //     })
//     //     sucTestTwo = true;

//     //     assert.isTrue(sucTestTwo)

//     // })

//     // it("The final quantity should be the same as the precomputed quantity", async () => {
//     //     await productOne.refresh()
//     //     let promiseArr: Promise<Product>[] = []
//     //     await productOne.incrementInventoryCount(10000)
//     //     await productOne.refresh()
    
//     //     let finalAmount = productOne.inventoryCount + 10000
//     //     for (let i = 0; i < 1000; i++) {
//     //         let incAmount = Math.floor(Math.random() * 100)
//     //         let decAmount = incAmount - 10
//     //         promiseArr.push(productOne.incrementInventoryCount(incAmount))
//     //         promiseArr.push(productOne.decrementInventoryCount(decAmount))
//     //     }

//     //     let prods = await Promise.allSettled(promiseArr)
//     //     prods.forEach(e => {
//     //         if (e.status === "rejected") {
//     //             console.log(e.reason)
//     //         }
//     //     })
//     //     await productOne.refresh()

//     //     assert.equal(finalAmount, productOne.inventoryCount)
       
//     //     sucTestThree = true;

//     //     assert.isTrue(sucTestThree)

//     // })


//     it("It should error out if the quantity of a product that does not have inventory management enabled is being manipulated", async () => {
//         try {
//             await productTwo.decrementInventoryCount(3);
//         } catch (e: any) {
//             console.log(e.message)
//             errFour = true;
//         }

//         assert.isTrue(errFour)
//     })

//     it("should error our if the merchant tries disabling backordered products when there is a negative inventory.", async () => {
//         productThree.enableBackorderedProducts = false
//         try {
//             await productThree.merge();
//         } catch (e: any) {
//             console.log(e.message)
//             errTwo = true
//         }

//         await productThree.refresh()

//         assert.isTrue(productThree.enableBackorderedProducts);
//         assert.isTrue(errTwo)
//     })

//     it("should allow the backordered product to increment and decrement the quantity and change the flag when inv count is positive", async () => {
//         await productThree.decrementInventoryCount(50);
//         await productThree.incrementInventoryCount(100);
//         productThree.enableBackorderedProducts = false;

//         await productThree.merge();

//         assert.equal(productThree.inventoryCount, 0)
//         assert.isFalse(productThree.enableBackorderedProducts)

//     })

//     it("It should allow inventory count to go negative if the inventory Tracking is enabled and the backordered products are also enabled.", async () => {
//         productThree.enableBackorderedProducts = true;
//         await productThree.merge();
//         await productThree.decrementInventoryCount(50);
//         assert.equal(productThree.inventoryCount, -50)
//         sucTestOne = true
//         assert.isTrue(sucTestOne)
//     })

//     // it("should handle optimistic lock exceptions properly", async () => {
//     //     let promiseArr: Promise<any>[] = []
//     //     for (let i = 0; i < 1000; i++) {
//     //         productThree = await Product.createInstanceLazy({
//     //             uniqueId: "TESTPRODUCT3",
//     //             price: Math.random() * 1000 + 1
//     //         })
//     //         promiseArr.push(productThree.merge());
//     //         promiseArr.push(productThree.incrementInventoryCount(50));
//     //     }

//     //     let allProds = await Promise.allSettled(promiseArr)

//     //     allProds.forEach(e => {
//     //         if (e.status === "fulfilled") {
                
//     //         } else {
//     //             console.log(e.reason)
//     //         }
//     //     })

        

//     //     await productThree.refresh()

//     //     assert.equal(productThree.inventoryCount, 49950)


//     // })


//     after(async () => {
//         await productOne.delete()
//         await productTwo.delete()
//         await productThree.delete();
//     })

// })