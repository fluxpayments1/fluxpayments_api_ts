"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericDeleterRequest = void 0;
const RequestBodyBase_1 = require("./RequestBodyBase");
class GenericDeleterRequest extends RequestBodyBase_1.RequestBodyBase {
    constructor() {
        super();
    }
    get deletedObjIdList() {
        return this._deletedObjIdList;
    }
    set deletedObjIdList(prodIds) {
        this._deletedObjIdList = prodIds;
    }
    loadClientData(prodIds) {
        this._deletedObjIdList = Array.isArray(prodIds) ? prodIds : [prodIds];
    }
}
exports.GenericDeleterRequest = GenericDeleterRequest;
//# sourceMappingURL=GenericDeleterRequest.js.map