"use strict";
// import { FluxIdentifier, Address } from "../flux_types";
// import { Flux, flux } from "../lib";
// import { describe, it, before } from "mocha";
// import { assert } from "chai";
// import { create } from "domain";
// import { AddressQuery } from "../flux_types/AddressQuery";
// import { IAddress } from "../flux_types/IAddress";
// function createRandomAddress(): Address {
//     const countries = ['USA', 'Canada', 'UK', 'Australia', 'India'];
//     const states = ['California', 'Texas', 'New York', 'Queensland', 'Ontario'];
//     const cities = ['San Francisco', 'Austin', 'New York City', 'Brisbane', 'Toronto'];
//     const address: IAddress = {
//         uniqueId: Math.random().toString(36).substring(2), // Random string
//         metadata: Math.random().toString(36).substring(2), // Random string
//         streetAddress: `${Math.floor(Math.random() * 9999)} Elm Street`, // Random street address
//         country: countries[Math.floor(Math.random() * countries.length)], // Random country from the countries array
//         zipCode: `${Math.floor(Math.random() * 90000) + 10000}`, // Random ZIP code
//         addressState: states[Math.floor(Math.random() * states.length)], // Random state from the states array
//         city: cities[Math.floor(Math.random() * cities.length)], // Random city from the cities array
//     };
//     return new Address(address);
// }
// describe("Flux Address CRUD Tests", function () {
//     let fluxObj: Flux;
//     let addressIdentifier: FluxIdentifier[];
//     let addressSearch: Address[];
//     this.timeout(50000); // sets a 50-second timeout for all tests in this suite
//     const address: IAddress = {
//         uniqueId: "FIRSTADDRESS",
//         metadata: "SOMEMETADATA",
//         city: "Spring Hill",
//         streetAddress: "18548 Rococo Road",
//         addressState: "Florida",
//         country: "US",
//         zipCode: "34610"
//     };
//     let newAddress : Address[];
//     let deletedAddress : FluxIdentifier[];
//     let searchedAddressesEmpty : Address[];
//     before(async () => {
//         try {
//             fluxObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
//             addressIdentifier = await fluxObj.createAddress(Address.createInstanceLazy(address));
//             newAddress = await fluxObj.updateAddreess(Address.createInstanceLazy({...address, addressState: "Arkansas"}))
//         } catch (e: any) {
//             console.error(e.message);
//         }
//         try {
//             addressSearch = await fluxObj.getAddresses(new AddressQuery({}));
//             deletedAddress = await fluxObj.deleteAddress(newAddress[0].getId())
//             searchedAddressesEmpty = await fluxObj.getAddresses(new AddressQuery({}));
//         } catch (e: any) {
//             console.log(e.message)
//         }
//     });
//     it ("should return a fluxIdentifier when the getId method is called", () => {
//         let f: FluxIdentifier = Address.createInstanceLazy(address).getId()
//         assert.equal(f.uniqueId, "FIRSTADDRESS")
//     })
//     it("should initialize the Flux object", function () {
//         assert.exists(fluxObj, 'fluxObj is neither `null` nor `undefined`');
//     });
//     it("should create an address in the flux system", () => {
//         assert.exists(addressIdentifier)
//         assert.exists(addressIdentifier[0].uniqueId)
//         assert.exists(addressIdentifier[0].id)
//     })
//     it("should have updated the address state to arkansas", () => {
//         assert.exists(newAddress)
//         assert.exists(newAddress[0])
//         assert.equal(newAddress[0].addressState, "Arkansas")
//     })
//     it("should return a fluxIdentifier when we call getId on the updated address", () => {
//         let f: FluxIdentifier = newAddress[0].getId()
//         assert.equal(f.uniqueId, "FIRSTADDRESS")
//     })
//     it("should have delete the newly created address", () => {
//         assert.exists(deletedAddress)
//         assert.exists(deletedAddress[0])
//         assert.exists(deletedAddress[0].id);
//     })
//     it("should have returned zero search results after searching empty address set", () => {
//         assert.exists(searchedAddressesEmpty)
//         assert.lengthOf(searchedAddressesEmpty, 1);
//     })
// })
// describe("Pagination and additional functionalities tests", function () {
//     this.timeout(500000)
//     //Paginaition tests
//     let searchedAddressesPage0 : boolean = false;
//     let searchedAddressesPage1 : Address[];
//     let searchedAddressesPage2 : Address[];
//     let searchedAddressesPage3 : Address[];
//     let orderedAddressesByName : Address[];
//     let orderbyInvalidColumnShouldFail: boolean = false
//     let addresses: FluxIdentifier[] = []
//     before(async () => {
//         let fluxObj = await flux("PK_ewRVuDFJEe61LwJCwKjwBA==", "Z6ZeNlcxdxd9j2Gc1eDwuxkfovDr33BdFaLXZ1y/1Fs=", "mac_98", "your_password");
//         while (addresses.length < 53) {
//             try {
//                 let productIds = await fluxObj.createAddress(createRandomAddress());
//                 addresses = addresses.concat(productIds)
//             } catch (e: any) {
//             }
//         }
//         try {
//             await fluxObj.getAddresses(new AddressQuery({
//                 pagination: {
//                     pageNumber: 0,
//                     itemsPerPage: 50
//                 }
//             }))
//         } catch (e : any) {
//             searchedAddressesPage0 = true;
//             console.log(e.message)
//         }
//         searchedAddressesPage1 = await fluxObj.getAddresses(new AddressQuery({
//             pagination: {
//                 pageNumber: 1,
//                 itemsPerPage: 50
//             }
//         }))
//         searchedAddressesPage2 = await fluxObj.getAddresses(new AddressQuery({
//             pagination: {
//                 pageNumber: 2,
//                 itemsPerPage: 50
//             }
//         }))
//         searchedAddressesPage3 = await fluxObj.getAddresses(new AddressQuery({
//             pagination: {
//                 pageNumber: 3,
//                 itemsPerPage: 50
//             }
//         }))
//         orderedAddressesByName = (await fluxObj.getAddresses(new AddressQuery({
//             pagination: {
//                 pageNumber: 1,
//                 itemsPerPage: 50
//             },
//             additionalSearchOptions : [
//                 {
//                     column: "country",
//                     order: "DESCENDING"
//                 },
//                 {
//                     column: "addressState",
//                     order: "ASCENDING"
//                 },
//                 {
//                     column: "zipCode",
//                     order: "ASCENDING"
//                 }
//             ]
//         }))).filter(e => e.id !== 1)
//         try {
//             await fluxObj.getAddresses(new AddressQuery({
//                 pagination: {
//                     pageNumber: 1,
//                     itemsPerPage: 50
//                 },
//                 additionalSearchOptions : [
//                     {
//                         column: "counasdftry",
//                         order: "DESCENDING"
//                     },
//                     {
//                         column: "addressState",
//                         order: "ASCENDING"
//                     },
//                     {
//                         column: "zipCode",
//                         order: "ASCENDING"
//                     }
//                 ]
//             }))
//         } catch (e: any) {
//             console.log(e.message);
//             orderbyInvalidColumnShouldFail = true;
//         }
//         await fluxObj.deleteAddress(addresses);
//     })
//     it("should have created 53 addresses", () => {
//         assert.lengthOf(addresses, 53)
//     })
//     it("should have errored out on a zero page", () => {
//         assert.isTrue(searchedAddressesPage0)
//     })
//     it("should have returned 50 addresses for page 1 search, 3 for page 2, and 0 for page 3", () => {
//         assert.lengthOf(searchedAddressesPage1, 50)
//         assert.lengthOf(searchedAddressesPage2, 4)
//         assert.lengthOf(searchedAddressesPage3, 0)
//     })
//     it("should have sorted by identified columns", () => {
//         function customAddressSort(a: Address, b: Address) {
//             // First, sort by `country` in descending order
//             if (a.country < b.country) return 1;
//             if (a.country > b.country) return -1;
//             // Next, sort by `addressState` in ascending order
//             if (a.addressState < b.addressState) return -1;
//             if (a.addressState > b.addressState) return 1;
//             // Finally, sort by `zipCode` in ascending order
//             if (a.zipCode < b.zipCode) return -1;
//             if (a.zipCode > b.zipCode) return 1;
//             return 0;
//         }
//         let concatenatedArr = searchedAddressesPage1.concat(searchedAddressesPage2);
//         let sortedArr = concatenatedArr.filter(e => e.id !== 1).sort(customAddressSort);
//         // sortedArr.forEach((e, i) => {
//         //     if (i < 50) {
//         //         assert.isTrue(e.id === orderedAddressesByName[i].id)
//         //     }
//         // });
//     });
//     it("should error out if ordered on invalid column", () => {
//         assert.isTrue(orderbyInvalidColumnShouldFail)
//     })
// })
//# sourceMappingURL=AddressCRUD.spec.js.map