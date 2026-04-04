import { RequestBodyBase } from "./RequestBodyBase";

export class FullTextSearchRequestBody extends RequestBodyBase {
    _searchTerm: string;
    _objectType: string;
    _lookupPage: string;
    _pageNumber: number;
    _itemsPerPage: number;
    _subType: string;

    public loadClientData(params: {
        searchTerm: string;
        objectType: string;
        lookupPage?: string;
        pageNumber?: number;
        itemsPerPage?: number;
        subType?: string;
    }): void {
        this._searchTerm = params.searchTerm;
        this._objectType = params.objectType;
        this._lookupPage = params.lookupPage;
        this._pageNumber = params.pageNumber || 1;
        this._itemsPerPage = params.itemsPerPage || 50;
        this._subType = params.subType;
    }
}
