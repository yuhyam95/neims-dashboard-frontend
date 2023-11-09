import create from "./http-service";

export interface Product {
    _id: string,
    name: string,
    quantity: number,
    srvnumber: string,
    tag: 'string',
    bincard: string[],
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

export default create('/product');