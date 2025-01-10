import { ToastType } from "./toast";

export interface APIResponse<T> {
  code: number;
  data: T | null;
  message: string | string[];
  type: ToastType | null;
}

export interface ServerErrorResponse {
  code: number;
  traceid: string;
  context: string;
  message: string | string[];
  status: number;
}

export interface PaginatedResponse<T> extends APIResponse<T> {
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface RequestConfig
  extends Omit<Partial<import("axios").AxiosRequestConfig>, "headers"> {
  headers?: Record<string, string>;
  apiVersion?: number;
  prefix?: string;
}
