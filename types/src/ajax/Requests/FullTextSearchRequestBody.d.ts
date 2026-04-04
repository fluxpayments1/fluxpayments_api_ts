import { RequestBodyBase } from "./RequestBodyBase";
export declare class FullTextSearchRequestBody extends RequestBodyBase {
    _searchTerm: string;
    _objectType: string;
    _lookupPage: string;
    _pageNumber: number;
    _itemsPerPage: number;
    _subType: string;
    loadClientData(params: {
        searchTerm: string;
        objectType: string;
        lookupPage?: string;
        pageNumber?: number;
        itemsPerPage?: number;
        subType?: string;
    }): void;
}
