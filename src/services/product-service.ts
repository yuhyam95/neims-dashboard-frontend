import create from "./http-service";

export interface Product {
    products: ProductData[],
    total: number
}

 interface ProductData {
    _id: string,
    name: string,
    quantity: number,
    srvnumber: string,
    tag: 'string',
    bincard: BinCardItem[],
    date: string
    station: StationItem,
    category: CategoryItem
    storeofficer: StoreOfficer,
    verificationofficer: VerificationOfficer,
    createdAt: string
}

interface StationItem {
    _id: string,
    name: string
}

interface CategoryItem {
    _id: string,
    name: string
}

interface StoreOfficer {
    _id: string,
    name: string
}

interface VerificationOfficer {
    _id: string,
    name: string
}

interface BinCardItem {
    date: string;
    number: string;
    movement: string;
    quantity: number,
    balance: number,
    signature: string,
    createdAt: string
  }

export default create('/product');