import { mainAPI } from "@/lib/axios";
import { ILoginRequest, ILoginResponse } from "@/types/login";
import { clientMain } from ".";

export async function loginCredentials({
  body,
}: {
  body: ILoginRequest;
  options?: { signal?: AbortSignal };
}) {
  return clientMain.post<ILoginResponse, ILoginRequest>(`/login`, body);
}

export async function loginGoogle(options?: { signal?: AbortSignal }) {
  const response = await mainAPI.get<any>(`/login/google`, {
    params: {},
    signal: options?.signal,
  });

  return response;
}
