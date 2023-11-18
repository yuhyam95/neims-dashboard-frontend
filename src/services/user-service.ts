import create from "./http-service";


export interface User {
  users: UserItem[],
}

 interface UserItem {
    _id: string,
    firstname: string,
    surname: string,
    email: string
    role: Role,
    station: Station
}

interface Role {
    name: string
}

interface Station {
    name: string
}


export default create('/user');