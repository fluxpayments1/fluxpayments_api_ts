"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBodyBase = void 0;
class ResponseBodyBase {
    getMetaData() {
        return this._metadata;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    sanitizeResults(clazz, obj) {
        let basePropsSet = new Set(Object.keys(new clazz()));
        let keys = Object.keys(obj);
        for (let key of keys) {
            if (!basePropsSet.has(key))
                delete obj[key];
        }
    }
    setResponseJSON(json) {
        /**
         * Parse the json as an object, walk through the
         * keys and set this[key] = jsonObj[key]
         *
         * Follow convention an use the underscore. Otherwise
         * this framework will not work.
         */
        let jsonObj = JSON.parse(json);
        for (let key in jsonObj) {
            this["_".concat(key)] = jsonObj[key];
        }
        return this;
    }
}
exports.ResponseBodyBase = ResponseBodyBase;
//# sourceMappingURL=ResponseBodyBase.js.map