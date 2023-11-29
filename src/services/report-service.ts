import create from "./http-service"

export interface Report {
    _id: string,
    title: string,
    body: string,
    images: string[]
    to: {
        _id: string,
        firstname: string,
        surtname: string
    },
    from: {
        _id: string,
        firstname: string,
        surtname: string
    }
    station: {
        _id: string,
        name: string,
    }
    createdAt: string,
    updatedAt: string
}


export default create('/report')