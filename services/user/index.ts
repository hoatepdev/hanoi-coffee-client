"use client";
import { getAllUsers, GetUsersFilters } from "@/apis/users";
import { queries } from "@/queries";
import { useQuery } from "@tanstack/react-query";

export function useUsersAll() {
  return useQuery({
    ...queries.users.all,
    queryFn: () => getAllUsers(),
  });
}

export function useUserDetail(id: string) {
  return useQuery(queries.users.detail(id));
}

export function useUserList(filters: GetUsersFilters) {
  return useQuery(queries.users.list(filters));
}
