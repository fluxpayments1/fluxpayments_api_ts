"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericDeleterResponse = void 0;
const ResponseBodyBase_1 = require("./ResponseBodyBase");
class GenericDeleterResponse extends ResponseBodyBase_1.ResponseBodyBase {
    constructor() {
        super();
    }
    get deletedObjIdList() {
        return this._deletedObjIdList;
    }
    set deletedObjIdList(deletedObj) {
        this._deletedObjIdList = deletedObj;
    }
    getClientReturnValue() {
        return this._deletedObjIdList;
    }
}
exports.GenericDeleterResponse = GenericDeleterResponse;
//# sourceMappingURL=GenericDeleterResponse.js.map