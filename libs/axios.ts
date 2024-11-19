import { AxiosRequestConfig, AxiosResponse } from "axios";
import { createAxiosInstance } from "@/config/axios/instance-factory";
import { HTTP_METHODS } from "@/config/axios/constants";
import { RequestConfig, APIResponse } from "@/types/api";

export class APIClient {
  private instance: ReturnType<typeof createAxiosInstance>;
  private version: number;

  constructor(service: "main" | "auth" | "media" = "main", version = 1) {
    this.instance = createAxiosInstance(service);
    this.version = version;
  }

  private async request<T>(
    method: (typeof HTTP_METHODS)[keyof typeof HTTP_METHODS],
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<T> {
    try {
      const response = await this.instance.request<T>({
        method,
        url: endpoint,
        // apiVersion: this.version,
        ...config,
      });
      return response;
      // return response.data;
    } catch (error) {
      throw error;
    }
  }

  public get<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    return this.request<T>(HTTP_METHODS.GET, endpoint, config);
  }

  public post<T>(
    endpoint: string,
    data?: any,
    config: RequestConfig = {}
  ): Promise<T> {
    return this.request<T>(HTTP_METHODS.POST, endpoint, { ...config, data });
  }

  public put<T>(
    endpoint: string,
    data?: any,
    config: RequestConfig = {}
  ): Promise<T> {
    return this.request<T>(HTTP_METHODS.PUT, endpoint, { ...config, data });
  }

  public delete<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    return this.request<T>(HTTP_METHODS.DELETE, endpoint, config);
  }

  public patch<T>(
    endpoint: string,
    data?: any,
    config: RequestConfig = {}
  ): Promise<T> {
    return this.request<T>(HTTP_METHODS.PATCH, endpoint, { ...config, data });
  }
}

export const mainAPI = new APIClient("main", 1);
