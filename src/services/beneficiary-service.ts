import create from "./http-service"

export interface Beneficiaries {
    beneficiaries: Beneficiairy[],
    men: number,
    women: number,
    children: number
}

interface Beneficiairy {
    _id: string,
    name: string,
    individual: string,
    state: string,
    lga: string,
    age: number,
    createdAt: string,
    updatedAt: string
}

export default create('/beneficiary')