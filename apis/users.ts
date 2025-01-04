import { mainAPI } from "@/lib/axios";

export type GetUsersFilters = {
  limit: number;
  skip: number;
};

const ENDPOINT = "/users";

export async function getAllUsers(options?: { signal?: AbortSignal }) {
  const response = await mainAPI.get<any>(ENDPOINT, {
    params: {},
    signal: options?.signal,
  });
  return response;
}

export async function getUsers(
  filters: GetUsersFilters,
  options?: { signal?: AbortSignal },
) {
  const response = await mainAPI.get<any>(ENDPOINT, {
    params: filters,
    signal: options?.signal,
  });

  return response;
}

export async function getUser(id: string, options?: { signal?: AbortSignal }) {
  const response = await mainAPI.get<any>(`${ENDPOINT}/${id}`, {
    params: {},
    signal: options?.signal,
  });

  return response;
}
