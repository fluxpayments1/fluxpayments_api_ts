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
const flux_types_1 = require("../flux_types");
const lib_1 = require("../lib");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
function createRandomProduct() {
    const types = ['SUBSCRIPTION', 'SERVICE', 'PHYSICAL_PRODUCT'];
    const subscriptionIntervals = ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'];
    const product = new flux_types_1.Product({
        uniqueId: Math.random().toString(36).substring(2), // Random string
        metadata: Math.random().toString(36).substring(2), // Random string
        name: `Product_${Math.floor(Math.random() * 10000)}`, // Random product name
        description: `Description_${Math.floor(Math.random() * 10000)}`, // Random description
        price: +(Math.random() * 1000).toFixed(2) + .5, // Random price between 0 and 1000
        sku: `SKU_${Math.floor(Math.random() * 10000)}`, // Random SKU
        type: types[Math.floor(Math.random() * types.length)], // Random type from the types array
        subscriptionInterval: subscriptionIntervals[Math.floor(Math.random() * subscriptionIntervals.length)], // Random interval from the intervals array
        inventoryCount: Math.floor(Math.random() * 1000), // Random inventory count between 0 and 1000
        imageUrl: `https://example.com/image_${Math.floor(Math.random() * 10000)}.jpg`, // Random image URL
        category: `Category_${Math.floor(Math.random() * 100)}`, // Random category
    });
    return product;
}
(0, mocha_1.describe)("Flux Product CRUD Tests", function () {
    let fluxObj;
    let productIds;
    let deletedFirstFluxIdentifiers;
    let deletedSecondFluxIdentifiers;
    let deletedThirdFluxIdentifiers;
    let duplicatedFluxIdentifierError = false;
    let negativePriceError = false;
    let nonExistentTypeError = false;
    let longNameError = false;
    let secondProductWithoutUniqueId;
    let thirdProductWithoutUniqueId;
    let subscriptionProductWithoutIntervalError = false;
    let updatedProductFirstCreatedProduct;
    let updatedProductByUniqueId;
    let updateInactivatedProduct;
    let firstSearchZeroResult;
    let secondSearchResult;
    let thirdSearchResult;
    let fourthSearchResult;
    let fifthSearchResult;
    let createdProductWithNullType = true;
    let invalidImageUrl = false;
    let providedIdError = false;
    let validImageUrl = false;
    let testNonExistantDelete = false;
    let testDeleteAlreadyDeletedProduct = false;
    let lastSearch;
    this.timeout(500000); // sets a 50-second timeout for all tests in this suite
    const product = {
        uniqueId: "FIRSTPRODUCT",
        metadata: "SOMEMETADATA",
        name: "PRODUCT 1",
        description: "USED AS A TEST",
        price: 100.00,
        sku: "1234",
        type: 'PHYSICAL_PRODUCT',
        inventoryCount: 100,
        enableBackorderedProducts: false,
        enableInventoryManagement: false
    };
    (0, mocha_1.before)(() => __awaiter(this, void 0, void 0, function* () {
        try {
            fluxObj = yield (0, lib_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
            productIds = yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(product));
        }
        catch (e) {
            console.error(e.message);
        }
        // Duplicate product test
        try {
            yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(product));
        }
        catch (e) {
            console.error(e.message);
            duplicatedFluxIdentifierError = true;
            productIds[0].id = null;
            deletedFirstFluxIdentifiers = yield flux_types_1.Product.deleteObjects(productIds);
        }
        //Creating a product with an id
        try {
            let res = yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { id: 100000 })));
            console.log("logging res");
            console.log(res, "finished");
        }
        catch (e) {
            console.error(e);
            providedIdError = true;
        }
        // Negative price test
        try {
            yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: "SECONDPRODUCT", price: -100.00 })));
        }
        catch (e) {
            console.error(e.message);
            negativePriceError = true;
        }
        // Non-existent type test
        try {
            //@ts-ignore
            yield flux_types_1.Product.createObjects(Object.assign(Object.assign({}, product), { uniqueId: "THIRDPRODUCT", type: 'PHYSICAL_PRODUC' }));
        }
        catch (e) {
            console.error(e.message);
            nonExistentTypeError = true;
        }
        // No unique id test
        try {
            secondProductWithoutUniqueId = yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: undefined, name: "PRODUCT 3" })));
            deletedSecondFluxIdentifiers = yield flux_types_1.Product.deleteObjects(secondProductWithoutUniqueId);
        }
        catch (e) {
            console.error(e.message);
        }
        // Overly long name test
        try {
            yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { name: 'a'.repeat(300) })));
        }
        catch (e) {
            console.error(e.message);
            longNameError = true;
        }
        // Creating the same product twice with no unique id
        try {
            thirdProductWithoutUniqueId = yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: undefined, name: "PRODUCT 3" })));
            deletedThirdFluxIdentifiers = yield flux_types_1.Product.deleteObjects(thirdProductWithoutUniqueId);
        }
        catch (e) {
            console.error(e.message);
        }
        try {
            updatedProductFirstCreatedProduct = yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(product));
            updatedProductByUniqueId = yield flux_types_1.Product.updateObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { type: "SERVICE" })));
            yield flux_types_1.Product.deleteObjects(updatedProductFirstCreatedProduct);
        }
        catch (e) {
            console.error(e.message);
        }
        try {
            let subscriptionProductWithoutIntervalError = yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { type: "SUBSCRIPTION" })));
        }
        catch (e) {
            console.error(e.message);
            subscriptionProductWithoutIntervalError = true;
        }
        try {
            //@ts-ignore
            updateInactivatedProduct = yield flux_types_1.Product.updateObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { activeStatus: true, id: 107 })));
        }
        catch (e) {
            console.error(e.message);
        }
        try {
            //@ts-ignore
            updateInactivatedProduct = yield flux_types_1.Product.updateObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { activeStatus: true, uniqueId: "HELLO" })));
        }
        catch (e) {
            console.error(e.message);
        }
        try {
            //@ts-ignore
            updateInactivatedProduct = yield flux_types_1.Product.updateObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { activeStatus: true, uniqueId: "HELLO", id: 107 })));
        }
        catch (e) {
            console.error(e.message);
        }
        //Search tests
        try {
            firstSearchZeroResult = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
                pagination: {
                    pageNumber: 1,
                    itemsPerPage: 500
                }
            }));
            firstSearchZeroResult = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
                pagination: {
                    itemsPerPage: 500
                }
            }));
            firstSearchZeroResult = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
                pagination: {
                    pageNumber: 1,
                }
            }));
            let id2 = yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(product));
            secondSearchResult = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
                type: "PHYSICAL_PRODUCT"
            }));
            yield flux_types_1.Product.deleteObjects(id2);
            //Need to create an entire set of products and query them
            let ids = yield flux_types_1.Product.createObjects(yield [
                yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: "SECONDPRODUCT", name: "PRODUCT 2", category: "CATEGORY 1" })),
                yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: "THIRDPRODUCT", name: "PRODUCT 3", category: "CATEGORY 2" })),
                yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: "FOURTHPRODUCT", name: "PRODUCT 4", category: "CATEGORY 2" })),
                yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: "FIFTHPRODUCT", name: "PRODUCT 5", category: "CATEGORY 1" })),
                yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: "SIXTHPRODUCT", name: "PRODUCT 6", category: "CATEGORY 1" })),
                yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: "SEVENTHPRODUCT", name: "PRODUCT 7", category: "CATEGORY 2" })),
                yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: "EIGHTHPRODUCT", name: "PRODUCT 8", category: "CATEGORY 1" })),
                yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: "NINTHPRODUCT", name: "PRODUCT 9", category: "CATEGORY 2" })),
                yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { uniqueId: "TENTHPRODUCT", name: "PRODUCT 10", category: "CATEGORY 1" })),
            ]);
            thirdSearchResult = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
                category: "CATEGORY 1",
            }));
            fourthSearchResult = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
                category: "CATEGORY 2",
            }));
            yield flux_types_1.Product.deleteObjects(ids);
            fifthSearchResult = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({}));
        }
        catch (e) {
            console.error(e.message);
        }
        //Creating a product with a null type
        try {
            let prod = yield flux_types_1.Product.createInstanceLazy(Object.assign({}, product));
            //Delete the type
            delete prod.type;
            yield flux_types_1.Product.createObjects(yield prod);
        }
        catch (e) {
            console.error(e.message);
            createdProductWithNullType = false;
        }
        //Creating a product with an invalid image url
        try {
            let id = yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { imageUrl: "asdf" })));
        }
        catch (e) {
            console.error(e.message);
            invalidImageUrl = true;
        }
        let id;
        //Creating a product with a valid image url
        try {
            id = yield flux_types_1.Product.createObjects(yield flux_types_1.Product.createInstanceLazy(Object.assign(Object.assign({}, product), { imageUrl: "https://google.com" })));
            yield flux_types_1.Product.deleteObjects(id);
            validImageUrl = true;
        }
        catch (e) {
            console.error(e.message);
        }
        //All products should be deleted
        try {
            lastSearch = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({}));
        }
        catch (e) {
            console.error(e.message);
        }
        try {
            if (id)
                yield flux_types_1.Product.deleteObjects(id);
        }
        catch (e) {
            console.log(e.message);
            testDeleteAlreadyDeletedProduct = true;
        }
        try {
            yield flux_types_1.Product.deleteObjects(new flux_types_1.FluxIdentifier(undefined, Math.pow(2, 32)));
        }
        catch (e) {
            console.log(e.message);
            testNonExistantDelete = true;
        }
    }));
    (0, mocha_1.it)("shouldn't allow the user to create a product with a system generated id", () => {
        chai_1.assert.isTrue(providedIdError);
    });
    (0, mocha_1.it)("should return the system generated id when the user creates the product", () => {
        chai_1.assert.exists(secondProductWithoutUniqueId);
        chai_1.assert.lengthOf(secondProductWithoutUniqueId, 1);
        chai_1.assert.exists(secondProductWithoutUniqueId[0].id);
    });
    (0, mocha_1.it)("should initialize the Flux object", function () {
        chai_1.assert.exists(fluxObj, 'fluxObj is neither `null` nor `undefined`');
    });
    (0, mocha_1.it)(`should create a product with a unique id of ${product.uniqueId}`, () => {
        chai_1.assert.exists(productIds);
        chai_1.assert.lengthOf(productIds, 1);
        chai_1.assert.equal(product.uniqueId, productIds[0].uniqueId);
    });
    (0, mocha_1.it)('should prevent the creation of a product with a duplicate uniqueId', () => {
        chai_1.assert.isTrue(duplicatedFluxIdentifierError);
    });
    (0, mocha_1.it)('should prevent the creation of a product with a negative price', () => {
        chai_1.assert.isTrue(negativePriceError);
    });
    (0, mocha_1.it)("should have the updated object converted into the class with methods bound", () => {
        let id = updatedProductByUniqueId[0].getId();
        chai_1.assert.exists(id);
        chai_1.assert.exists(id.id);
    });
    (0, mocha_1.it)('should prevent the creation of a product with a non-existent type', () => {
        chai_1.assert.isTrue(nonExistentTypeError);
    });
    (0, mocha_1.it)('should prevent the creation of a product with an overly long name', () => {
        chai_1.assert.isTrue(longNameError);
    });
    (0, mocha_1.it)('should allow the creation of a product without a uniqueId', () => {
        chai_1.assert.exists(secondProductWithoutUniqueId);
        chai_1.assert.lengthOf(secondProductWithoutUniqueId, 1);
        chai_1.assert.notExists(secondProductWithoutUniqueId[0].uniqueId);
        chai_1.assert.exists(secondProductWithoutUniqueId[0].id);
    });
    (0, mocha_1.it)("should allow the creation of two similar products without uniqueId", () => {
        chai_1.assert.exists(thirdProductWithoutUniqueId);
        chai_1.assert.lengthOf(thirdProductWithoutUniqueId, 1);
        chai_1.assert.notExists(thirdProductWithoutUniqueId[0].uniqueId);
        chai_1.assert.exists(thirdProductWithoutUniqueId[0].id);
    });
    (0, mocha_1.it)("should delete the first product using its uniqueId", () => {
        chai_1.assert.exists(deletedFirstFluxIdentifiers);
        chai_1.assert.lengthOf(deletedFirstFluxIdentifiers, 1);
    });
    (0, mocha_1.it)("should delete the second product created without uniqueId", () => {
        chai_1.assert.exists(deletedSecondFluxIdentifiers);
        chai_1.assert.lengthOf(deletedSecondFluxIdentifiers, 1);
    });
    (0, mocha_1.it)("should delete the third product created without uniqueId", () => {
        chai_1.assert.exists(deletedThirdFluxIdentifiers);
        chai_1.assert.lengthOf(deletedThirdFluxIdentifiers, 1);
    });
    (0, mocha_1.it)("should have created a product and updated the type to service", () => {
        chai_1.assert.propertyVal(updatedProductByUniqueId[0], "type", "SERVICE");
    });
    (0, mocha_1.it)("shouldn't let me create a subscription product without an interval", () => {
        chai_1.assert.exists(subscriptionProductWithoutIntervalError);
    });
    (0, mocha_1.it)("shouldn't be able to activate a product that is inactive", () => {
        chai_1.assert.notExists(updateInactivatedProduct);
    });
    (0, mocha_1.it)("should be length 0", () => {
        chai_1.assert.lengthOf(firstSearchZeroResult, 0);
    });
    (0, mocha_1.it)("should be able to search for a product with an empty seach criteria", () => {
        chai_1.assert.lengthOf(secondSearchResult, 1);
    });
    (0, mocha_1.it)("should be able to search for a product with a category", () => {
        chai_1.assert.lengthOf(thirdSearchResult, 5);
        chai_1.assert.equal(thirdSearchResult[0].category, "CATEGORY 1");
    });
    (0, mocha_1.it)("should be able to search for a product with a category", () => {
        chai_1.assert.lengthOf(fourthSearchResult, 4);
        chai_1.assert.equal(fourthSearchResult[0].category, "CATEGORY 2");
    });
    (0, mocha_1.it)("should be empty", () => {
        chai_1.assert.lengthOf(fifthSearchResult, 0);
    });
    (0, mocha_1.it)("should not allow the creation of a product with a null type", () => {
        chai_1.assert.isFalse(createdProductWithNullType);
    });
    (0, mocha_1.it)("shouldn't create a product with a malformed imageurl", () => {
        chai_1.assert.isTrue(invalidImageUrl);
    });
    (0, mocha_1.it)("should create a product with a valid imageurl", () => {
        chai_1.assert.isTrue(validImageUrl);
    });
    (0, mocha_1.it)("should have deleted all products", () => {
        chai_1.assert.lengthOf(lastSearch, 0);
    });
    (0, mocha_1.it)("shouldnt allow you to delete an already delete product / set of products", () => {
        chai_1.assert.isTrue(testDeleteAlreadyDeletedProduct);
    });
    (0, mocha_1.it)("shouldn't allow you to delete a product that doesn't exist", () => {
        chai_1.assert.isTrue(testNonExistantDelete);
    });
});
(0, mocha_1.describe)("Pagination and additional functionalities tests", function () {
    this.timeout(500000);
    //Paginaition tests
    let searchedProductsPage0 = false;
    let searchedProductsPage1;
    let searchedProductsPage2;
    let searchedProductsPage3;
    let orderedProductsByName;
    let orderbyInvalidColumnShouldFail = false;
    let products = [];
    (0, mocha_1.before)(() => __awaiter(this, void 0, void 0, function* () {
        let fluxObj = yield (0, lib_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
        while (products.length < 53) {
            try {
                let productIds = yield flux_types_1.Product.createObjects(yield createRandomProduct());
                products = products.concat(productIds);
            }
            catch (e) {
            }
        }
        try {
            yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
                pagination: {
                    pageNumber: 0,
                    itemsPerPage: 50
                }
            }));
        }
        catch (e) {
            searchedProductsPage0 = true;
            console.log(e.message);
        }
        searchedProductsPage1 = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
            pagination: {
                pageNumber: 1,
                itemsPerPage: 50
            }
        }));
        searchedProductsPage2 = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
            pagination: {
                pageNumber: 2,
                itemsPerPage: 50
            }
        }));
        searchedProductsPage3 = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
            pagination: {
                pageNumber: 3,
                itemsPerPage: 50
            }
        }));
        orderedProductsByName = yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
            pagination: {
                pageNumber: 1,
                itemsPerPage: 50
            },
            additionalSearchOptions: [
                {
                    column: "type",
                    order: "DESCENDING"
                },
                {
                    column: "subscriptionInterval",
                    order: "ASCENDING"
                },
                {
                    column: "id",
                    order: "ASCENDING"
                }
            ]
        }));
        try {
            yield flux_types_1.Product.queryObjects(new flux_types_1.ProductQuery({
                pagination: {
                    pageNumber: 1,
                    itemsPerPage: 50
                },
                additionalSearchOptions: [
                    {
                        column: "type",
                        order: "DESCENDING"
                    },
                    {
                        column: "subscriptioninterval",
                        order: "ASCENDING"
                    },
                    {
                        column: "id",
                        order: "ASCENDING"
                    }
                ]
            }));
        }
        catch (e) {
            console.log(e.message);
            orderbyInvalidColumnShouldFail = true;
        }
        yield flux_types_1.Product.deleteObjects(products);
    }));
    (0, mocha_1.it)("should have created 53 products", () => {
        chai_1.assert.lengthOf(products, 53);
    });
    (0, mocha_1.it)("should have errored out on a zero page", () => {
        chai_1.assert.isTrue(searchedProductsPage0);
    });
    (0, mocha_1.it)("should have returned 50 products for page 1 search, 3 for page 2, and 0 for page 3", () => {
        chai_1.assert.lengthOf(searchedProductsPage1, 50);
        chai_1.assert.lengthOf(searchedProductsPage2, 3);
        chai_1.assert.lengthOf(searchedProductsPage3, 0);
    });
    (0, mocha_1.it)("should have sorted by identified columns", () => {
        function customSort(a, b) {
            // First, sort by `type` in descending order
            if (a.type < b.type)
                return 1;
            if (a.type > b.type)
                return -1;
            // Next, sort by `subscriptionInterval` using the custom sequence
            const intervalsOrder = ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'];
            const aIntervalIndex = intervalsOrder.indexOf(a.subscriptionInterval);
            const bIntervalIndex = intervalsOrder.indexOf(b.subscriptionInterval);
            if (aIntervalIndex < bIntervalIndex)
                return -1;
            if (aIntervalIndex > bIntervalIndex)
                return 1;
            // Finally, sort by `id` in ascending order
            return a.id - b.id;
        }
        let concatenatedArr = searchedProductsPage1.concat(searchedProductsPage2);
        let sortedArr = concatenatedArr.sort(customSort);
        sortedArr.forEach((e, i) => {
            if (i < 50) {
                chai_1.assert.isTrue(e.id === orderedProductsByName[i].id);
            }
        });
    });
    (0, mocha_1.it)("should error out if ordered on invalid column", () => {
        chai_1.assert.isTrue(orderbyInvalidColumnShouldFail);
    });
});
//# sourceMappingURL=ProductCRUD.spec.js.map