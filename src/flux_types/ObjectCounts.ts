import { FluxType } from './FluxType';
import _cloneDeep from 'lodash/cloneDeep';

export class ObjectCounts extends FluxType {
    obName: string = "ObjectCounts";

    getDispName(): string {
        return this.id.toString()
    }

    

    public serialize() {
        return {
            id: this.id,
            uniqueid: this.uniqueid,
            metadata: this.metadata,
            version: this.version,
            email: this.email,
            account: this.account,
            wallet: this.wallet,
            walletLimit: this.walletLimit,
            address: this.address,
            product: this.product,
            currency: this.currency,
            accountaddress: this.accountaddress,
            paymentmethod: this.paymentmethod,
            token: this.token,
            accountLimit: this.accountLimit,
            addressLimit: this.addressLimit,
            productLimit: this.productLimit,
            accountaddressLimit: this.accountaddressLimit,
            taxratesLimit: this.taxratesLimit,
            taxrates: this.taxrates,
            paymentmethodLimit: this.paymentmethodLimit,
            currencyLimit: this.currencyLimit,
            tokenLimit: this.tokenLimit,
            objectType: this.objectType
        };
    }
    wallet: number;
    walletLimit: number;
    id: number;
    currencyLimit: number
    currency: number;
    uniqueid: string;
    metadata: string;
    version: number;
    email: string;
    account: number;
    address: number;
    product: number;
    accountaddress: number;
    paymentmethod: number;
    token: number;
    accountLimit: number;
    addressLimit: number;
    productLimit: number;
    accountaddressLimit: number;
    taxratesLimit: number;
    taxrates;
    paymentmethodLimit: number;
    tokenLimit: number;
    protected objectType: string = "objectCounts";

    public constructor(objectCounts?: Partial<ObjectCounts>) {
        super(objectCounts, ObjectCounts);
        Object.assign(this, objectCounts)
    }

}
