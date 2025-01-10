import { APIError, APISuccess } from "@/config/axios/response-handler";
import { APIResponse, ServerErrorResponse } from "@/types/api";
import { AxiosError, AxiosResponse } from "axios";
import { ToastKeys } from "@/constants/toast";
import { HTTP_STATUS } from "@/constants/axios";

export function handleApiSuccess<T>(response: T): APIResponse<T> {
  return new APISuccess<T>({
    code: HTTP_STATUS.OK,
    data: response,
    type: ToastKeys.SUCCESS,
  });
}

export function handleApiError(
  error: AxiosError<ServerErrorResponse>,
): APIResponse<null> {
  const { code, message } = error.response?.data || {};
  return new APIError({ code, message, type: ToastKeys.ERROR });
}

export async function safeApiCall<T>(
  apiCall: Promise<AxiosResponse<T>>,
): Promise<APIResponse<T | null>> {
  try {
    const response = await apiCall;
    return handleApiSuccess<T>(response.data);
  } catch (error) {
    return handleApiError(error as AxiosError<ServerErrorResponse>);
  }
}
