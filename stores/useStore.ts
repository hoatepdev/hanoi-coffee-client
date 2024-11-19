import { GetUsersFilters } from "@/apis/users";
import { create } from "zustand";

type UserStore = {
  filters: GetUsersFilters;
  setFilters: (filters?: GetUsersFilters) => void;
};
export const useUserStore = create<UserStore>((set) => ({
  filters: {
    limit: 10,
    skip: 0,
  },
  setFilters: (filters) => set({ filters }),
}));
