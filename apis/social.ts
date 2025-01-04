import { mainAPI } from "@/lib/axios";

export async function loginGoogle(options?: { signal?: AbortSignal }) {
  const response = await mainAPI.get<any>("login/google", {
    params: {},
    signal: options?.signal,
  });
  console.log("⭐ response", response);

  return response;
}
