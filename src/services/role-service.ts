import create from "./http-service";

 export interface Role {
      _id: string,
      name: string
      description: string,
      permissions: string[]
  }

export default create('/role');