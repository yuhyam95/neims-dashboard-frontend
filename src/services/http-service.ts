import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

type QueryParameters = {
  type?: string;
  category?: string,
  station?: string
};

interface Entity {
  _id?: string;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }


  getAll<T>(queryParams: QueryParameters = {}) {
    const controller = new AbortController();

    const config: AxiosRequestConfig = {
      signal: controller.signal,
      params: queryParams 
   
    };
 
  const request = apiClient.get<T[]>(this.endpoint, config);
  const objrequest = apiClient.get<T | null>(this.endpoint, config)  
  
   return { objrequest, request, cancel: () => controller.abort() };
  
  }

  delete(id: string) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.put(this.endpoint + "/" + entity._id, entity);
  }

  getById<T extends Entity>(id: string) {
    return apiClient.get<T>(this.endpoint + "/" + id);
  }

}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;