import {useQuery, UseQueryOptions, UseQueryResult} from "@tanstack/react-query";
import queryKeys from "@/hooks/query/keys/queryKeys";
import {getMovieDetail, getMovieNow} from "@/hooks/query/apis/movie";
import {Detail, Now} from "@/types/MovieType";
import {AxiosError} from "axios";

export const useMovieNowContents = (
  options: UseQueryOptions<Now, AxiosError> = {},
  onSuccess: () => void = () => {
    return;
  },
): UseQueryResult<Now, AxiosError> => {
  return useQuery<Now, AxiosError>({
    queryKey: queryKeys.movie.query.now(),
    queryFn: () => getMovieNow(),
    onSuccess,
    ...options,
  });
};

export const useMovieDetail = (
  options: UseQueryOptions<Detail, AxiosError> = {},
  onSuccess: () => void = () => {
    return;
  },
  id: number,
): UseQueryResult<Detail, AxiosError> => {
  return useQuery({
    queryKey: queryKeys.movie.query.detail(id),
    queryFn: () => getMovieDetail(id),
    onSuccess,
    ...options,
  });
};
