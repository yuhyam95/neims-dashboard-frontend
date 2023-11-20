import create from "./http-service";
  
 export interface User {
      _id?: string,
      firstname: string,
      surname: string,
      email: string
      role: Role,
      station: Station, 
      status: string
  }
  
  interface Role {
      name: string
  }
  
  interface Station {
      name: string
  }
  
  export interface createUser {
      _id?: string,
      firstname: string,
      surname: string,
      email: string
      role: string,
      station: string,
      status?: string
  }

export default create('/user');