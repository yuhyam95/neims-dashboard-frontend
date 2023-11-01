import useData from "./useData";


export interface Station {
    id: number;
    name: string;
    type: string;
    total: number;
    category: Category[];
    change: string;
    productList: ProductList[];
    beneficiaries: Beneficiaries[];
  }
  
  interface Category{
    id: number;
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

  const useStation = () => useData<Station>('/station')
  
  export default useStation;