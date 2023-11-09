import create from "./http-service";

export interface Station {
    _id?: string;
    name: string;
    type: string;
    total: number;
    category: CategoryItem[];
    change: string;
    product: ProductList[];
    beneficiaries: Beneficiaries[];
    areaofcoverage: string[]
  }
  
  interface CategoryItem{
    id: string;
    name: string,
    total: number,
    color: string
  }

  interface ProductList{
    id: number;
    name: string,
    quantity: number,
    tag: Boolean
  }

  interface Beneficiaries {
    id: number;
    gender: string, 
    location: string
  }

export default create('/station');