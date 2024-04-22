import { FluxIdentifier } from "../../flux_types/";
import { RequestBodyBase } from ".";
export declare class ChngProdInvCntRequest extends RequestBodyBase {
    _multiplier: number;
    _prod: FluxIdentifier;
    _quantity: number;
    get multiplier(): number;
    set multiplier(m: number);
    get prod(): FluxIdentifier;
    set prod(p: FluxIdentifier);
    get quantity(): number;
    set quantity(q: number);
    loadClientData(m: number, q: number, p: FluxIdentifier): void;
}
