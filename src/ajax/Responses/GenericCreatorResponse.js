"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericCreatorResponse = void 0;
const ResponseBodyBase_1 = require("./ResponseBodyBase");
class GenericCreatorResponse extends ResponseBodyBase_1.ResponseBodyBase {
    get createdObjects() {
        return this._createdObjects;
    }
    set createdObjects(fi) {
        this._createdObjects = fi;
    }
    getClientReturnValue() {
        return this._createdObjects;
    }
}
exports.GenericCreatorResponse = GenericCreatorResponse;
//# sourceMappingURL=GenericCreatorResponse.js.map