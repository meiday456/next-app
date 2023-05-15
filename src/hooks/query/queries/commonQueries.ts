import {useQuery, UseQueryOptions, UseQueryResult} from "@tanstack/react-query";
import {AxiosError} from "axios";

import queryKeys from "../keys/queryKeys";
import {time_window, Trending} from "@/types/data/CommonType";
import {getTrendingList} from "@/hooks/query/apis/common";

export const useCommonTrending = (
  tw: time_window = "day",
  options: UseQueryOptions<Trending, AxiosError> = {},
  onSuccess: (data: Trending) => void = () => {},
): UseQueryResult<Trending, AxiosError> => {
  return useQuery({
    queryKey: queryKeys.common.query.trending(),
    queryFn: () => getTrendingList(tw),
    onSuccess,
    ...options,
  });
};
