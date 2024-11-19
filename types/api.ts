export interface APIResponse<T = any> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> extends APIResponse<T> {
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface ErrorResponse {
  message: string;
  code: string;
  status: number;
  details?: Record<string, any>;
}

export interface RequestConfig
  extends Omit<Partial<import("axios").AxiosRequestConfig>, "headers"> {
  headers?: Record<string, string>;
  apiVersion?: number;
}
