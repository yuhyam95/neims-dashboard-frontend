import create from "./http-service";
  
 export interface Beneficiary {
      _id?: string,
      beneficiaries: BeneficiaryItem[],
      men: number,
      women: number,
      children: number
  }
  
  interface BeneficiaryItem {
    id: string,
    age: number,
    createdAt: string,
    updatedAt: string,
    lga: string,
    name: string,
    state: String,
    station: Station
  }

  interface Station {
    name: string,
    type: string
  }

export default create('/beneficiary');