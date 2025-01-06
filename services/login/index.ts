"use client";
import { loginCredentials } from "@/apis/login";
import { ILoginRequest } from "@/types/login";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

interface ILoginCredentialsProps {
  mutationOptions?: UseMutationOptions<
    { data: ILoginRequest },
    Error,
    ILoginRequest,
    unknown
  >;
}

export function useLoginCredentials(props: ILoginCredentialsProps) {
  return useMutation({
    ...props.mutationOptions,
    mutationKey: ["loginCredentials"],
    mutationFn: (data: ILoginRequest) => loginCredentials({ body: data }),
  });
}

// export function useLoginGoogle(props: ILoginCredentialsProps) {
//   return useQuery({
//     ...props.queryOptions,
//     queryKey: ["loginCredentials", JSON.stringify(props.body)],
//     queryFn: () => loginCredentials({ body: props.body }),
//   });
// }
