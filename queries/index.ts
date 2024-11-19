import {
  mergeQueryKeys,
  inferQueryKeyStore,
} from "@lukemorales/query-key-factory";

import { users } from "./users";

export const queries = mergeQueryKeys(users);

export type QueryKeys = inferQueryKeyStore<typeof queries>;
