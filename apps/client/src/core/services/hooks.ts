//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

import { AxiosRequestConfig } from "axios";
import {
  UseQueryOptions,
  useQuery,
  useMutation,
  UseMutationOptions,
  QueryClient,
  QueryKey,
} from "@tanstack/react-query";
import { RequestError, SwaggerResponse } from "./config";

import type { LoginRequestDto } from "./types";
import { get, postAuthLogin } from "./services";

export type SwaggerTypescriptMutationDefaultParams<TExtra> = {
  _extraVariables?: TExtra;
  configOverride?: AxiosRequestConfig;
};
type SwaggerTypescriptUseQueryOptions<TData> = Omit<
  UseQueryOptions<SwaggerResponse<TData>, RequestError | Error>,
  "queryKey"
>;

type SwaggerTypescriptUseMutationOptions<TData, TRequest, TExtra> =
  UseMutationOptions<
    SwaggerResponse<TData>,
    RequestError | Error,
    TRequest & SwaggerTypescriptMutationDefaultParams<TExtra>
  >;

type SwaggerTypescriptUseMutationOptionsVoid<TData, TExtra> =
  UseMutationOptions<
    SwaggerResponse<TData>,
    RequestError | Error,
    SwaggerTypescriptMutationDefaultParams<TExtra> | void
  >;

export const useGet = (
  options?: SwaggerTypescriptUseQueryOptions<any>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGet.info(configOverride);
  return useQuery({
    queryKey: key,
    queryFn: fun,
    ...options,
  });
};
useGet.info = (configOverride?: AxiosRequestConfig) => {
  return {
    key: [get.key] as QueryKey,
    fun: () => get(configOverride),
  };
};
useGet.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<any>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGet.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery({
        queryKey: key,
        queryFn: () => fun(),
        ...options,
      });
};
export const usePostAuthLogin = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: LoginRequestDto },
    TExtra
  >
) => {
  return useMutation({
    mutationFn: (_o) => {
      const {
        requestBody,

        configOverride,
      } = _o || {};

      return postAuthLogin(
        requestBody,

        configOverride
      );
    },
    ...options,
  });
};
