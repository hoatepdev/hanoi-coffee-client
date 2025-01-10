import { APIClient, authAPI, mainAPI, mediaAPI } from "@/lib/axios";
import { safeApiCall } from "@/utils/api";
import { RequestConfig } from "@/types/api";

export class client {
  constructor(private readonly api: APIClient = mainAPI) {}

  public post = <T, R>(endpoint: string, body: R, config?: RequestConfig) => {
    return safeApiCall<T>(this.api.post(endpoint, body, config));
  };
}

export const clientMain = new client();

export const clientAuth = new client(authAPI);

export const clientMedia = new client(mediaAPI);
