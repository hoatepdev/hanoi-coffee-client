import { getUsers, getUser } from "@/apis/users";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const users = createQueryKeys("users", {
  all: null,
  detail: (userId: string) => ({
    queryKey: [userId],
    queryFn: () => getUser(userId),
  }),
  list: (filters) => ({
    queryKey: [filters],
    queryFn: () => getUsers(filters),
  }),
});
