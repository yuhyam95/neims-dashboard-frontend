import create from "./http-service"

export interface Report {
    _id: string,
    state: string,
    lga: string,
    community: string,
    numberofaffectedpersons: number,
    datereported: string,
    approved: boolean
}


export default create('/report')