"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Product_1 = require("../flux_types/Product");
const ProductQuery_1 = require("../flux_types/ProductQuery");
const index_1 = require("../lib/index");
describe("Product specific tests", function () {
    let fluxObj, prod, prod2;
    this.timeout(50000); // sets a 50-second timeout for all tests in this suite
    before(() => __awaiter(this, void 0, void 0, function* () {
        try {
            fluxObj = yield (0, index_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
            prod = yield Product_1.Product.createInstanceSafe({
                uniqueId: "FIRSTPRODUCT",
                type: "PHYSICAL_PRODUCT",
                name: "TEST 1",
                price: .51
            });
            prod2 = yield Product_1.Product.createInstanceSafe({
                uniqueId: "SECONDPRODUCT",
                type: "PHYSICAL_PRODUCT",
                name: "TEST 2",
                price: .51
            });
        }
        catch (e) {
            console.log(e.message);
        }
    }));
    it("should have instantiated a fluxObj", () => {
        chai_1.assert.isDefined(fluxObj);
    });
    it("should merge changes correctly, refresh objects correctly, and make correct use of load lazy", () => __awaiter(this, void 0, void 0, function* () {
        let product = yield Product_1.Product.createInstanceLazy({
            uniqueId: "FIRSTPRODUCT",
        });
        yield product.refresh();
        chai_1.assert.isDefined(product.id);
        product.category = "TEST";
        yield product.merge();
        product = yield Product_1.Product.createInstanceLazy({
            uniqueId: "FIRSTPRODUCT",
        });
        yield product.refresh();
        chai_1.assert.equal(product.category, "TEST");
    }));
    it("should manage addresses correctly and refresh the first acc correctly", () => __awaiter(this, void 0, void 0, function* () {
        yield prod.refresh();
        chai_1.assert.equal(prod.category, "TEST");
    }));
    after(() => __awaiter(this, void 0, void 0, function* () {
        yield prod.delete();
        yield prod2.delete();
        let prodSearch = yield Product_1.Product.queryObjects(ProductQuery_1.ProductQuery.createQuery({}));
        it("should clean up resources properly", () => {
            chai_1.assert.lengthOf(prodSearch, 0);
        });
    }));
});
describe("It should manage inventory count correctly", function () {
    this.timeout(50000000);
    //Should error out when manually trying to change the quantity
    let errOne = false;
    //Should error our if the merchant tries disabling backordered
    //products when there is a negative inventory.
    let errTwo = false;
    //Should error out if the merchant tries ordering a product 
    //that would push the inventoryCount below zero
    let errThree = false;
    //It should error out if the quantity of a product 
    //that does not have inventory management enabled is
    //being manipulated
    let errFour = false;
    //It should allow inventory count to go negative if
    //the inventoryTracking is enabled and the backordered
    //products are also enabled.
    let sucTestOne = false;
    //It should never have a negative quantity if the flags are
    //enabled (Made for the random tests)
    let sucTestTwo = false;
    //The final quantity should be the same as the
    //precomputed quantity
    let sucTestThree = false;
    //Product with tracking enabled and backorders disabled
    let productOne;
    //Product with tracking disable and backorders disabled
    let productTwo;
    //Product with tracking enable and backorders enabled
    let productThree;
    before(() => __awaiter(this, void 0, void 0, function* () {
        yield (0, index_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
        productOne = yield Product_1.Product.createInstanceSafe({
            name: "Test Product",
            type: "PHYSICAL_PRODUCT",
            inventoryCount: 100,
            price: 50.00,
            enableBackorderedProducts: false,
            enableInventoryManagement: true,
            uniqueId: "TESTPRODUCT"
        });
        productTwo = yield Product_1.Product.createInstanceSafe({
            name: "Test Product 2",
            type: "PHYSICAL_PRODUCT",
            inventoryCount: 100,
            price: 50.00,
            enableBackorderedProducts: false,
            enableInventoryManagement: false,
            uniqueId: "TESTPRODUCT2"
        });
        productThree = yield Product_1.Product.createInstanceSafe({
            name: "Test Product 3",
            type: "PHYSICAL_PRODUCT",
            inventoryCount: -50,
            price: 50.00,
            enableBackorderedProducts: true,
            enableInventoryManagement: true,
            uniqueId: "TESTPRODUCT3"
        });
    }));
    it("Should error out when manually trying to change the quantity", () => __awaiter(this, void 0, void 0, function* () {
        productOne.inventoryCount = 500;
        try {
            yield productOne.merge();
        }
        catch (e) {
            console.log(e.message);
            errOne = true;
        }
        yield productOne.refresh();
        chai_1.assert.equal(productOne.inventoryCount, 100);
        chai_1.assert.isTrue(errOne);
    }));
    it("Should error out if the merchant tries ordering a product that would push the inventoryCount below zero", () => __awaiter(this, void 0, void 0, function* () {
        yield productOne.decrementInventoryCount(100);
        //count at zero
        try {
            yield productOne.decrementInventoryCount(1);
        }
        catch (e) {
            console.log(e.message);
            errThree = true;
        }
        chai_1.assert.isTrue(errThree);
        chai_1.assert.equal(productOne.inventoryCount, 0);
    }));
    // it("It should never have a negative quantity if the flags are enabled (Made for the random tests)", async () => {
    //     let promiseArr: Promise<Product>[] = []
    //     for (let i = 0; i < 100; i++) {
    //         let incAmount = Math.floor(Math.random() * 100)
    //         let decAmount = Math.floor(Math.random() * 100)
    //         promiseArr.push(productOne.decrementInventoryCount(decAmount))
    //         promiseArr.push(productOne.incrementInventoryCount(incAmount))
    //     }
    //     let prods = await Promise.allSettled(promiseArr)
    //     prods.forEach(e => {
    //         if (e.status === 'fulfilled') {
    //             assert.isTrue(e.value.inventoryCount >= 0)
    //         } else if (e.status === "rejected") {
    //             console.log(e.reason)
    //         }
    //     })
    //     sucTestTwo = true;
    //     assert.isTrue(sucTestTwo)
    // })
    // it("The final quantity should be the same as the precomputed quantity", async () => {
    //     await productOne.refresh()
    //     let promiseArr: Promise<Product>[] = []
    //     await productOne.incrementInventoryCount(10000)
    //     await productOne.refresh()
    //     let finalAmount = productOne.inventoryCount + 10000
    //     for (let i = 0; i < 1000; i++) {
    //         let incAmount = Math.floor(Math.random() * 100)
    //         let decAmount = incAmount - 10
    //         promiseArr.push(productOne.incrementInventoryCount(incAmount))
    //         promiseArr.push(productOne.decrementInventoryCount(decAmount))
    //     }
    //     let prods = await Promise.allSettled(promiseArr)
    //     prods.forEach(e => {
    //         if (e.status === "rejected") {
    //             console.log(e.reason)
    //         }
    //     })
    //     await productOne.refresh()
    //     assert.equal(finalAmount, productOne.inventoryCount)
    //     sucTestThree = true;
    //     assert.isTrue(sucTestThree)
    // })
    it("It should error out if the quantity of a product that does not have inventory management enabled is being manipulated", () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield productTwo.decrementInventoryCount(3);
        }
        catch (e) {
            console.log(e.message);
            errFour = true;
        }
        chai_1.assert.isTrue(errFour);
    }));
    it("should error our if the merchant tries disabling backordered products when there is a negative inventory.", () => __awaiter(this, void 0, void 0, function* () {
        productThree.enableBackorderedProducts = false;
        try {
            yield productThree.merge();
        }
        catch (e) {
            console.log(e.message);
            errTwo = true;
        }
        yield productThree.refresh();
        chai_1.assert.isTrue(productThree.enableBackorderedProducts);
        chai_1.assert.isTrue(errTwo);
    }));
    it("should allow the backordered product to increment and decrement the quantity and change the flag when inv count is positive", () => __awaiter(this, void 0, void 0, function* () {
        yield productThree.decrementInventoryCount(50);
        yield productThree.incrementInventoryCount(100);
        productThree.enableBackorderedProducts = false;
        yield productThree.merge();
        chai_1.assert.equal(productThree.inventoryCount, 0);
        chai_1.assert.isFalse(productThree.enableBackorderedProducts);
    }));
    it("It should allow inventory count to go negative if the inventory Tracking is enabled and the backordered products are also enabled.", () => __awaiter(this, void 0, void 0, function* () {
        productThree.enableBackorderedProducts = true;
        yield productThree.merge();
        yield productThree.decrementInventoryCount(50);
        chai_1.assert.equal(productThree.inventoryCount, -50);
        sucTestOne = true;
        chai_1.assert.isTrue(sucTestOne);
    }));
    // it("should handle optimistic lock exceptions properly", async () => {
    //     let promiseArr: Promise<any>[] = []
    //     for (let i = 0; i < 1000; i++) {
    //         productThree = await Product.createInstanceLazy({
    //             uniqueId: "TESTPRODUCT3",
    //             price: Math.random() * 1000 + 1
    //         })
    //         promiseArr.push(productThree.merge());
    //         promiseArr.push(productThree.incrementInventoryCount(50));
    //     }
    //     let allProds = await Promise.allSettled(promiseArr)
    //     allProds.forEach(e => {
    //         if (e.status === "fulfilled") {
    //         } else {
    //             console.log(e.reason)
    //         }
    //     })
    //     await productThree.refresh()
    //     assert.equal(productThree.inventoryCount, 49950)
    // })
    after(() => __awaiter(this, void 0, void 0, function* () {
        yield productOne.delete();
        yield productTwo.delete();
        yield productThree.delete();
    }));
});
//# sourceMappingURL=Product.spec.js.map