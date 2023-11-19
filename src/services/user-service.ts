import create from "./http-service";


  
 export interface User {
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