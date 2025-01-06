import { API_VERSION } from "@/constants/api";
import { mainAPI } from "@/lib/axios";
import { ILoginRequest, ILoginResponse } from "@/types/login";

export async function loginCredentials({
  body,
  options,
}: {
  body: ILoginRequest;
  options?: { signal?: AbortSignal };
}) {
  console.log("⭐ options", options);
  const response = await mainAPI.post<any>(`${API_VERSION}/login`, body);

  console.log("⭐ response", response);

  return response;
}

export async function loginGoogle(options?: { signal?: AbortSignal }) {
  const response = await mainAPI.get<any>(`${API_VERSION}/login/google`, {
    params: {},
    signal: options?.signal,
  });

  return response;
}
