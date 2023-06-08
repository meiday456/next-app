import {useQuery, UseQueryOptions, UseQueryResult} from "@tanstack/react-query";
import {AxiosError} from "axios";

import queryKeys from "../keys/queryKeys";
import {ContentsList, ContentType, Time_window, Trending} from "@/types/data/CommonType";
import {getActors, getContentsList, getTrendingList} from "@/hooks/query/apis/common";

export const useCommonTrending = (
  tw: Time_window = "day",
  page = 1,
  options: UseQueryOptions<Trending, AxiosError> = {},
): UseQueryResult<Trending, AxiosError> => {
  return useQuery({
    queryKey: queryKeys.common.query.trending(),
    queryFn: () => getTrendingList(tw, page),
    ...options,
  });
};

export const useContentsList = (
  options: UseQueryOptions<ContentsList[], AxiosError> = {},
): UseQueryResult<ContentsList[], AxiosError> => {
  return useQuery({
    queryKey: queryKeys.common.query.contents(),
    queryFn: () => getContentsList(),
    ...options,
  });
};

export const useGetActors = (type: ContentType, id: number, options: UseQueryOptions<string[], AxiosError> = {}) => {
  const lowerType = type.toLowerCase() as Lowercase<ContentType>;

  return useQuery({
    queryKey: queryKeys.common.query.credits(lowerType, id),
    queryFn: () => getActors(lowerType, id),
    ...options,
  });
};
