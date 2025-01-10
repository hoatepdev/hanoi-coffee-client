"use client";
import { loginCredentials } from "@/apis/login";
import { APIResponse } from "@/types/api";
import { ILoginRequest, ILoginResponse } from "@/types/login";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

interface ILoginCredentialsProps {
  mutationOptions?: UseMutationOptions<
    APIResponse<ILoginResponse | null>,
    Error,
    ILoginRequest,
    unknown
  >;
}

export function useLoginCredentials(props: ILoginCredentialsProps) {
  return useMutation({
    ...props.mutationOptions,
    mutationKey: ["loginCredentials"],
    mutationFn: (body: ILoginRequest) => loginCredentials({ body }),
  });
}

// export function useLoginGoogle(props: ILoginCredentialsProps) {
//   return useQuery({
//     ...props.queryOptions,
//     queryKey: ["loginCredentials", JSON.stringify(props.body)],
//     queryFn: () => loginCredentials({ body: props.body }),
//   });
// }
