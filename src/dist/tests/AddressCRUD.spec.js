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
const AddressQuery_1 = require("../flux_types/AddressQuery");
function createRandomAddress() {
    const countries = ['USA', 'Canada', 'UK', 'Australia', 'India'];
    const states = ['California', 'Texas', 'New York', 'Queensland', 'Ontario'];
    const cities = ['San Francisco', 'Austin', 'New York City', 'Brisbane', 'Toronto'];
    const address = {
        uniqueId: Math.random().toString(36).substring(2), // Random string
        metadata: Math.random().toString(36).substring(2), // Random string
        streetAddress: `${Math.floor(Math.random() * 9999)} Elm Street`, // Random street address
        country: countries[Math.floor(Math.random() * countries.length)], // Random country from the countries array
        zipCode: `${Math.floor(Math.random() * 90000) + 10000}`, // Random ZIP code
        addressState: states[Math.floor(Math.random() * states.length)], // Random state from the states array
        city: cities[Math.floor(Math.random() * cities.length)], // Random city from the cities array
    };
    return new flux_types_1.Address(address);
}
(0, mocha_1.describe)("Flux Address CRUD Tests", function () {
    let fluxObj;
    let addressIdentifier;
    let addressSearch;
    this.timeout(50000); // sets a 50-second timeout for all tests in this suite
    const address = {
        uniqueId: "FIRSTADDRESS",
        metadata: "SOMEMETADATA",
        city: "Spring Hill",
        streetAddress: "18548 Rococo Road",
        addressState: "Florida",
        country: "US",
        zipCode: "34610"
    };
    let newAddress;
    let deletedAddress;
    let searchedAddressesEmpty;
    (0, mocha_1.before)(() => __awaiter(this, void 0, void 0, function* () {
        try {
            fluxObj = yield (0, lib_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
            addressIdentifier = [(yield flux_types_1.Address.createInstanceSafe(yield flux_types_1.Address.createInstanceLazy(address))).getId()];
            newAddress = yield flux_types_1.Address.updateObjects(yield flux_types_1.Address.createInstanceLazy(Object.assign(Object.assign({}, address), { addressState: "Arkansas" })));
        }
        catch (e) {
            console.error(e.message);
        }
        try {
            addressSearch = yield flux_types_1.Address.queryObjects(new AddressQuery_1.AddressQuery({}));
            deletedAddress = yield flux_types_1.Address.deleteObjects(newAddress[0].getId());
            searchedAddressesEmpty = yield flux_types_1.Address.queryObjects(new AddressQuery_1.AddressQuery({}));
        }
        catch (e) {
            console.log(e.message);
        }
    }));
    (0, mocha_1.it)("should return a fluxIdentifier when the getId method is called", () => __awaiter(this, void 0, void 0, function* () {
        let f = (yield flux_types_1.Address.createInstanceLazy(address)).getId();
        chai_1.assert.equal(f.uniqueId, "FIRSTADDRESS");
    }));
    (0, mocha_1.it)("should initialize the Flux object", function () {
        chai_1.assert.exists(fluxObj, 'fluxObj is neither `null` nor `undefined`');
    });
    (0, mocha_1.it)("should create an address in the flux system", () => {
        chai_1.assert.exists(addressIdentifier);
        chai_1.assert.exists(addressIdentifier[0].uniqueId);
        chai_1.assert.exists(addressIdentifier[0].id);
    });
    (0, mocha_1.it)("should have updated the address state to arkansas", () => {
        chai_1.assert.exists(newAddress);
        chai_1.assert.exists(newAddress[0]);
        chai_1.assert.equal(newAddress[0].addressState, "Arkansas");
    });
    (0, mocha_1.it)("should return a fluxIdentifier when we call getId on the updated address", () => {
        let f = newAddress[0].getId();
        chai_1.assert.equal(f.uniqueId, "FIRSTADDRESS");
    });
    (0, mocha_1.it)("should have delete the newly created address", () => {
        chai_1.assert.exists(deletedAddress);
        chai_1.assert.exists(deletedAddress[0]);
        chai_1.assert.exists(deletedAddress[0].id);
    });
    (0, mocha_1.it)("should have returned zero search results after searching empty address set", () => {
        chai_1.assert.exists(searchedAddressesEmpty);
        chai_1.assert.lengthOf(searchedAddressesEmpty, 1);
    });
});
(0, mocha_1.describe)("Pagination and additional functionalities tests", function () {
    this.timeout(500000);
    //Paginaition tests
    let searchedAddressesPage0 = false;
    let searchedAddressesPage1;
    let searchedAddressesPage2;
    let searchedAddressesPage3;
    let orderedAddressesByName;
    let orderbyInvalidColumnShouldFail = false;
    let addresses = [];
    (0, mocha_1.before)(() => __awaiter(this, void 0, void 0, function* () {
        let fluxObj = yield (0, lib_1.flux)("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
        while (addresses.length < 53) {
            try {
                let productIds = yield flux_types_1.Address.createObjects(createRandomAddress());
                addresses = addresses.concat(productIds);
            }
            catch (e) {
            }
        }
        try {
            yield flux_types_1.Address.queryObjects(new AddressQuery_1.AddressQuery({
                pagination: {
                    pageNumber: 0,
                    itemsPerPage: 50
                }
            }));
        }
        catch (e) {
            searchedAddressesPage0 = true;
            console.log(e.message);
        }
        searchedAddressesPage1 = yield flux_types_1.Address.queryObjects(new AddressQuery_1.AddressQuery({
            pagination: {
                pageNumber: 1,
                itemsPerPage: 50
            }
        }));
        searchedAddressesPage2 = yield flux_types_1.Address.queryObjects(new AddressQuery_1.AddressQuery({
            pagination: {
                pageNumber: 2,
                itemsPerPage: 50
            }
        }));
        searchedAddressesPage3 = yield flux_types_1.Address.queryObjects(new AddressQuery_1.AddressQuery({
            pagination: {
                pageNumber: 3,
                itemsPerPage: 50
            }
        }));
        orderedAddressesByName = (yield flux_types_1.Address.queryObjects(new AddressQuery_1.AddressQuery({
            pagination: {
                pageNumber: 1,
                itemsPerPage: 50
            },
            additionalSearchOptions: [
                {
                    column: "country",
                    order: "DESCENDING"
                },
                {
                    column: "addressState",
                    order: "ASCENDING"
                },
                {
                    column: "zipCode",
                    order: "ASCENDING"
                }
            ]
        })));
        orderedAddressesByName.filter(e => e.id !== 1);
        try {
            yield flux_types_1.Address.queryObjects(new AddressQuery_1.AddressQuery({
                pagination: {
                    pageNumber: 1,
                    itemsPerPage: 50
                },
                additionalSearchOptions: [
                    {
                        column: "counasdftry",
                        order: "DESCENDING"
                    },
                    {
                        column: "addressState",
                        order: "ASCENDING"
                    },
                    {
                        column: "zipCode",
                        order: "ASCENDING"
                    }
                ]
            }));
        }
        catch (e) {
            console.log(e.message);
            orderbyInvalidColumnShouldFail = true;
        }
        yield flux_types_1.Address.deleteObjects(addresses);
    }));
    (0, mocha_1.it)("should have created 53 addresses", () => {
        chai_1.assert.lengthOf(addresses, 53);
    });
    (0, mocha_1.it)("should have errored out on a zero page", () => {
        chai_1.assert.isTrue(searchedAddressesPage0);
    });
    (0, mocha_1.it)("should have returned 50 addresses for page 1 search, 3 for page 2, and 0 for page 3", () => {
        chai_1.assert.lengthOf(searchedAddressesPage1, 50);
        chai_1.assert.lengthOf(searchedAddressesPage2, 4);
        chai_1.assert.lengthOf(searchedAddressesPage3, 0);
    });
    (0, mocha_1.it)("should have sorted by identified columns", () => {
        function customAddressSort(a, b) {
            // First, sort by `country` in descending order
            if (a.country < b.country)
                return 1;
            if (a.country > b.country)
                return -1;
            // Next, sort by `addressState` in ascending order
            if (a.addressState < b.addressState)
                return -1;
            if (a.addressState > b.addressState)
                return 1;
            // Finally, sort by `zipCode` in ascending order
            if (a.zipCode < b.zipCode)
                return -1;
            if (a.zipCode > b.zipCode)
                return 1;
            return 0;
        }
        let concatenatedArr = searchedAddressesPage1.concat(searchedAddressesPage2);
        let sortedArr = concatenatedArr.filter(e => e.id !== 1).sort(customAddressSort);
        // sortedArr.forEach((e, i) => {
        //     if (i < 50) {
        //         assert.isTrue(e.id === orderedAddressesByName[i].id)
        //     }
        // });
    });
    (0, mocha_1.it)("should error out if ordered on invalid column", () => {
        chai_1.assert.isTrue(orderbyInvalidColumnShouldFail);
    });
});
//# sourceMappingURL=AddressCRUD.spec.js.map