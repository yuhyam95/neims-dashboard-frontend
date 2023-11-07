import apiClient from "./api-client";

interface Entity {
  _id?: string;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
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