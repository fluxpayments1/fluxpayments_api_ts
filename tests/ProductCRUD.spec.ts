import { Product, FluxIdentifier, ProductQuery } from "fluxpayments/flux_types";
import { Flux, flux } from "fluxpayments/lib";
import { describe, it, before } from "mocha";
import { assert } from "chai";
import { create } from "domain";
import { IProduct } from "fluxpayments/flux_types";

function createRandomProduct(): Product {
    const types: Array<'SUBSCRIPTION' | 'SERVICE' | 'PHYSICAL_PRODUCT'> = ['SUBSCRIPTION', 'SERVICE', 'PHYSICAL_PRODUCT'];
    const subscriptionIntervals: Array<'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'> = ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'];

    const product: Product = new Product({
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

describe("Flux Product CRUD Tests", function () {
    let fluxObj: Flux<any>;
    let productIds: FluxIdentifier[];
    let deletedFirstFluxIdentifiers: FluxIdentifier[];
    let deletedSecondFluxIdentifiers: FluxIdentifier[];
    let deletedThirdFluxIdentifiers: FluxIdentifier[];
    let duplicatedFluxIdentifierError: boolean = false;
    let negativePriceError: boolean = false;
    let nonExistentTypeError: boolean = false;
    let longNameError: boolean = false;
    let secondProductWithoutUniqueId: FluxIdentifier[];
    let thirdProductWithoutUniqueId: FluxIdentifier[];
    let subscriptionProductWithoutIntervalError: boolean = false;
    let updatedProductFirstCreatedProduct: FluxIdentifier[]
    let updatedProductByUniqueId: Product[];
    let updateInactivatedProduct: Product[];
    let firstSearchZeroResult: Product[];
    let secondSearchResult: Product[];
    let thirdSearchResult: Product[];
    let fourthSearchResult: Product[];
    let fifthSearchResult: Product[];
    let createdProductWithNullType: boolean = true;
    let invalidImageUrl: boolean = false;
    let providedIdError: boolean = false;
    let validImageUrl: boolean = false;
    let testNonExistantDelete : boolean = false;
    let testDeleteAlreadyDeletedProduct : boolean = false; 

    let lastSearch: Product[];
    this.timeout(500000); // sets a 50-second timeout for all tests in this suite


    const product: IProduct = {
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

    before(async () => {
        try {
            fluxObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
            productIds = await Product.createObjects(await Product.createInstanceLazy(product));
        } catch (e: any) {
            console.error(e.message);
        }

        // Duplicate product test
        try {
            await Product.createObjects(await Product.createInstanceLazy(product));
        } catch (e: any) {
            console.error(e.message);
            duplicatedFluxIdentifierError = true;
            productIds[0].id = null;
            deletedFirstFluxIdentifiers = await Product.deleteObjects(productIds);
        }

        //Creating a product with an id
        try {
            let res = await Product.createObjects(await Product.createInstanceLazy({...product, id: 100000}));
            console.log("logging res")
            console.log(res, "finished")
        } catch (e: any) {
            console.error(e);
            providedIdError = true
        }

        // Negative price test
        try {
            await Product.createObjects(await Product.createInstanceLazy({ ...product, uniqueId: "SECONDPRODUCT", price: -100.00 }));
        } catch (e: any) {
            console.error(e.message);
            negativePriceError = true;
        }

        // Non-existent type test
        try {
            //@ts-ignore
            await Product.createObjects(await Product.createInstanceLazy({ ...product, uniqueId: "THIRDPRODUCT", type: 'PHYSICAL_PRODUC' }));
        } catch (e: any) {
            console.error(e.message);
            nonExistentTypeError = true;
        }

        // No unique id test
        try {
            secondProductWithoutUniqueId = await Product.createObjects(await Product.createInstanceLazy({ ...product, uniqueId: undefined, name: "PRODUCT 3" }));
            deletedSecondFluxIdentifiers = await Product.deleteObjects(secondProductWithoutUniqueId);
        } catch (e: any) {
            console.error(e.message);
        }

        // Overly long name test
        try {
            await Product.createObjects(await Product.createInstanceLazy({ ...product, name: 'a'.repeat(300) }));
        } catch (e: any) {
            console.error(e.message);
            longNameError = true;
        }

        // Creating the same product twice with no unique id
        try {
            thirdProductWithoutUniqueId = await Product.createObjects(await Product.createInstanceLazy({ ...product, uniqueId: undefined, name: "PRODUCT 3" }));
            deletedThirdFluxIdentifiers = await Product.deleteObjects(thirdProductWithoutUniqueId);
        } catch (e: any) {
            console.error(e.message);
        }

        try {
            updatedProductFirstCreatedProduct = await Product.createObjects(await Product.createInstanceLazy(product));
            updatedProductByUniqueId = await Product.updateObjects(await Product.createInstanceLazy({ ...product, type: "SERVICE" }))
            await Product.deleteObjects(updatedProductFirstCreatedProduct);
        } catch (e: any) {
            console.error(e.message);
        }

        try {
            let subscriptionProductWithoutIntervalError = await Product.createObjects(await Product.createInstanceLazy({ ...product, type: "SUBSCRIPTION" }));
        } catch (e: any) {
            console.error(e.message);
            subscriptionProductWithoutIntervalError = true;
        }

        try {
            //@ts-ignore
            updateInactivatedProduct = await Product.updateObjects(await Product.createInstanceLazy({ ...product, activeStatus: true, id: 107 }))
        } catch (e: any) {
            console.error(e.message);
        }

        try {
            //@ts-ignore
            updateInactivatedProduct = await Product.updateObjects(await Product.createInstanceLazy({ ...product, activeStatus: true, uniqueId: "HELLO" }))
        } catch (e: any) {
            console.error(e.message);
        }

        try {
            //@ts-ignore
            updateInactivatedProduct = await Product.updateObjects(await Product.createInstanceLazy({ ...product, activeStatus: true, uniqueId: "HELLO", id: 107 }))
        } catch (e: any) {
            console.error(e.message);
        }


        //Search tests

        try {
            firstSearchZeroResult = await Product.queryObjects(new ProductQuery({
                pagination: {
                    pageNumber: 1,
                    itemsPerPage: 500
                }
            }))

            firstSearchZeroResult = await Product.queryObjects(new ProductQuery({
                pagination: {
                    itemsPerPage: 500
                }
            }))

            firstSearchZeroResult = await Product.queryObjects(new ProductQuery({
                pagination: {
                    pageNumber: 1,
                }
            }))

            let id2 = await Product.createObjects(await Product.createInstanceLazy(product));

            secondSearchResult = await Product.queryObjects(new ProductQuery({
                type: "PHYSICAL_PRODUCT"
            }))

            await Product.deleteObjects(id2)

            //Need to create an entire set of products and query them
            let ids = await Product.createObjects(await [
                await Product.createInstanceLazy({ ...product, uniqueId: "SECONDPRODUCT", name: "PRODUCT 2", category: "CATEGORY 1" }),
                await Product.createInstanceLazy({ ...product, uniqueId: "THIRDPRODUCT", name: "PRODUCT 3", category: "CATEGORY 2" }),
                await Product.createInstanceLazy({ ...product, uniqueId: "FOURTHPRODUCT", name: "PRODUCT 4", category: "CATEGORY 2" }),
                await Product.createInstanceLazy({ ...product, uniqueId: "FIFTHPRODUCT", name: "PRODUCT 5", category: "CATEGORY 1" }),
                await Product.createInstanceLazy({ ...product, uniqueId: "SIXTHPRODUCT", name: "PRODUCT 6", category: "CATEGORY 1" }),
                await Product.createInstanceLazy({ ...product, uniqueId: "SEVENTHPRODUCT", name: "PRODUCT 7", category: "CATEGORY 2" }),
                await Product.createInstanceLazy({ ...product, uniqueId: "EIGHTHPRODUCT", name: "PRODUCT 8", category: "CATEGORY 1" }),
                await Product.createInstanceLazy({ ...product, uniqueId: "NINTHPRODUCT", name: "PRODUCT 9", category: "CATEGORY 2" }),
                await Product.createInstanceLazy({ ...product, uniqueId: "TENTHPRODUCT", name: "PRODUCT 10", category: "CATEGORY 1" }),
            ]);

            thirdSearchResult = await Product.queryObjects(new ProductQuery({
                category: "CATEGORY 1",
            }))

            fourthSearchResult = await Product.queryObjects(new ProductQuery({
                category: "CATEGORY 2",
            }))

            await Product.deleteObjects(ids)

            fifthSearchResult = await Product.queryObjects(new ProductQuery({}));



        } catch (e: any) {
            console.error(e.message);
        }

        //Creating a product with a null type
        try {
            let prod: Product = await Product.createInstanceLazy({ ...product });

            //Delete the type
            delete prod.type;

            await Product.createObjects(prod);

        } catch (e: any) {
            console.error(e.message)
            createdProductWithNullType = false
        }

        //Creating a product with an invalid image url
        try {

            let id = await Product.createObjects(await Product.createInstanceLazy({ ...product, imageUrl: "asdf" }));

        } catch (e: any) {
            console.error(e.message)
            invalidImageUrl = true;
        }
        let id;
        //Creating a product with a valid image url
        try {

            id = await Product.createObjects(await Product.createInstanceLazy({ ...product, imageUrl: "https://google.com" }));
            await Product.deleteObjects(id);
            validImageUrl = true;
        } catch (e: any) {
            console.error(e.message)

        }


        //All products should be deleted
        try {
            lastSearch = await Product.queryObjects(new ProductQuery({}));
        } catch (e: any) {
            console.error(e.message)
        }

        try {
            if (id) await Product.deleteObjects(id);
        } catch(e: any){
            console.log(e.message)
            testDeleteAlreadyDeletedProduct = true;
        }

        try {
            await Product.deleteObjects(new FluxIdentifier(undefined, Math.pow(2, 32)))
        } catch (e: any) {
            console.log(e.message)
            testNonExistantDelete = true;
        }




    });

    it("shouldn't allow the user to create a product with a system generated id", () => {
        assert.isTrue(providedIdError)
    })

    it("should return the system generated id when the user creates the product", () => {
        assert.exists(secondProductWithoutUniqueId);
        assert.lengthOf(secondProductWithoutUniqueId, 1);
        assert.exists(secondProductWithoutUniqueId[0].id)
    })

    it("should initialize the Flux object", function () {
        assert.exists(fluxObj, 'fluxObj is neither `null` nor `undefined`');
    });

    it(`should create a product with a unique id of ${product.uniqueId}`, () => {
        assert.exists(productIds);
        assert.lengthOf(productIds, 1);
        assert.equal(product.uniqueId, productIds[0].uniqueId);
    });

    it('should prevent the creation of a product with a duplicate uniqueId', () => {
        assert.isTrue(duplicatedFluxIdentifierError);
    });

    it('should prevent the creation of a product with a negative price', () => {
        assert.isTrue(negativePriceError);
    });

    it("should have the updated object converted into the class with methods bound", () => {
        let id : FluxIdentifier = updatedProductByUniqueId[0].getId()
        assert.exists(id)
        assert.exists(id.id)

    })

    it('should prevent the creation of a product with a non-existent type', () => {
        assert.isTrue(nonExistentTypeError);
    });

    it('should prevent the creation of a product with an overly long name', () => {
        assert.isTrue(longNameError);
    });

    it('should allow the creation of a product without a uniqueId', () => {
        assert.exists(secondProductWithoutUniqueId);
        assert.lengthOf(secondProductWithoutUniqueId, 1);
        assert.notExists(secondProductWithoutUniqueId[0].uniqueId);
        assert.exists(secondProductWithoutUniqueId[0].id);
    });

    it("should allow the creation of two similar products without uniqueId", () => {
        assert.exists(thirdProductWithoutUniqueId);
        assert.lengthOf(thirdProductWithoutUniqueId, 1);
        assert.notExists(thirdProductWithoutUniqueId[0].uniqueId);
        assert.exists(thirdProductWithoutUniqueId[0].id);
    });

    it("should delete the first product using its uniqueId", () => {
        assert.exists(deletedFirstFluxIdentifiers);
        assert.lengthOf(deletedFirstFluxIdentifiers, 1);
    });

    it("should delete the second product created without uniqueId", () => {
        assert.exists(deletedSecondFluxIdentifiers);
        assert.lengthOf(deletedSecondFluxIdentifiers, 1);
    });

    it("should delete the third product created without uniqueId", () => {
        assert.exists(deletedThirdFluxIdentifiers);
        assert.lengthOf(deletedThirdFluxIdentifiers, 1);
    });


    it("should have created a product and updated the type to service", () => {
        assert.propertyVal(updatedProductByUniqueId[0], "type", "SERVICE");
    })

    it("shouldn't let me create a subscription product without an interval", () => {
        assert.exists(subscriptionProductWithoutIntervalError);
    })

    it("shouldn't be able to activate a product that is inactive", () => {
        assert.notExists(updateInactivatedProduct);
    })

    it("should be length 0", () => {
        assert.lengthOf(firstSearchZeroResult, 0);
    })

    it("should be able to search for a product with an empty seach criteria", () => {
        assert.lengthOf(secondSearchResult, 1);
    })

    it("should be able to search for a product with a category", () => {

        assert.lengthOf(thirdSearchResult, 5);
        assert.equal(thirdSearchResult[0].category, "CATEGORY 1");
    })

    it("should be able to search for a product with a category", () => {

        assert.lengthOf(fourthSearchResult, 4);
        assert.equal(fourthSearchResult[0].category, "CATEGORY 2");
    })

    it("should be empty", () => {
        assert.lengthOf(fifthSearchResult, 0);
    })

    it("should not allow the creation of a product with a null type", () => {
        assert.isFalse(createdProductWithNullType)
    })

    it("shouldn't create a product with a malformed imageurl", () => {
        assert.isTrue(invalidImageUrl)
    })

    it("should create a product with a valid imageurl", () => {
        assert.isTrue(validImageUrl)
    })

    it("should have deleted all products", () => {
        assert.lengthOf(lastSearch, 0)
    })

    it("shouldnt allow you to delete an already delete product / set of products", () => {
        assert.isTrue(testDeleteAlreadyDeletedProduct)
    })

    it("shouldn't allow you to delete a product that doesn't exist", () => {
        assert.isTrue(testNonExistantDelete)
    })


});

describe("Pagination and additional functionalities tests", function () {
    this.timeout(500000)
    //Paginaition tests

    let searchedProductsPage0 : boolean = false;
    let searchedProductsPage1 : Product[];
    let searchedProductsPage2 : Product[];
    let searchedProductsPage3 : Product[];
    let orderedProductsByName : Product[];
    let orderbyInvalidColumnShouldFail: boolean = false
    let products: FluxIdentifier[] = []

    before(async () => {
        let fluxObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");

        while (products.length < 53) {
            try {
                let productIds = await Product.createObjects(await createRandomProduct());
                products = products.concat(productIds)
            } catch (e: any) {
            }
        }
        try {
            await Product.queryObjects(new ProductQuery({
                pagination: {
                    pageNumber: 0,
                    itemsPerPage: 50
                }
            }))
        } catch (e : any) {
            searchedProductsPage0 = true;
            console.log(e.message)
        }
      
        
        searchedProductsPage1 = await Product.queryObjects(new ProductQuery({
            pagination: {
                pageNumber: 1,
                itemsPerPage: 50
            }
        }))

        searchedProductsPage2 = await Product.queryObjects(new ProductQuery({
            pagination: {
                pageNumber: 2,
                itemsPerPage: 50
            }
        }))

        searchedProductsPage3 = await Product.queryObjects(new ProductQuery({
            pagination: {
                pageNumber: 3,
                itemsPerPage: 50
            }
        }))

        orderedProductsByName = await Product.queryObjects(new ProductQuery({
            pagination: {
                pageNumber: 1,
                itemsPerPage: 50
            },
            additionalSearchOptions : [
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
        }))
        try {
            await Product.queryObjects(new ProductQuery({
                pagination: {
                    pageNumber: 1,
                    itemsPerPage: 50
                },
                additionalSearchOptions : [
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
            }))
        } catch (e: any) {
            console.log(e.message);
            orderbyInvalidColumnShouldFail = true;
        }




        await Product.deleteObjects(products);


    })


    it("should have created 53 products", () => {
        assert.lengthOf(products, 53)
    })

    it("should have errored out on a zero page", () => {
        assert.isTrue(searchedProductsPage0)

    })

    it("should have returned 50 products for page 1 search, 3 for page 2, and 0 for page 3", () => {
        assert.lengthOf(searchedProductsPage1, 50)
        assert.lengthOf(searchedProductsPage2, 3)
        assert.lengthOf(searchedProductsPage3, 0)
        
    })

    it("should have sorted by identified columns", () => {
        function customSort(a, b) {
            // First, sort by `type` in descending order
            if (a.type < b.type) return 1;
            if (a.type > b.type) return -1;
        
            // Next, sort by `subscriptionInterval` using the custom sequence
            const intervalsOrder = ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'];
            const aIntervalIndex = intervalsOrder.indexOf(a.subscriptionInterval);
            const bIntervalIndex = intervalsOrder.indexOf(b.subscriptionInterval);
            if (aIntervalIndex < bIntervalIndex) return -1;
            if (aIntervalIndex > bIntervalIndex) return 1;
        
            // Finally, sort by `id` in ascending order
            return a.id - b.id;
        }
        



        let concatenatedArr = searchedProductsPage1.concat(searchedProductsPage2);
        let sortedArr = concatenatedArr.sort(customSort);


        sortedArr.forEach((e, i) => {
            if (i < 50) {
                assert.isTrue(e.id === orderedProductsByName[i].id)
            }
        })


    })

    it("should error out if ordered on invalid column", () => {
        assert.isTrue(orderbyInvalidColumnShouldFail)
    })

})
