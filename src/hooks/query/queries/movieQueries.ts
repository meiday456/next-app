import {useQuery, UseQueryOptions, UseQueryResult} from "@tanstack/react-query";
import queryKeys from "@/hooks/query/keys/queryKeys";
import {getDetailMovie, getDetailMovieVideos, getNowMovie} from "@/hooks/query/apis/movie";
import {MovieDetail, Now} from "@/types/data/MovieType";
import {Video} from "@/types/data/CommonType";
import {AxiosError} from "axios";

export const useMovieNowContents = (
  options: UseQueryOptions<Now, AxiosError> = {},
): UseQueryResult<Now, AxiosError> => {
  return useQuery<Now, AxiosError>({
    queryKey: queryKeys.movie.query.now(),
    queryFn: () => getNowMovie(),
    ...options,
  });
};

export const useMovieDetail = (
  id: number,
  options: UseQueryOptions<MovieDetail, AxiosError> = {},
): UseQueryResult<MovieDetail, AxiosError> => {
  return useQuery({
    queryKey: queryKeys.movie.query.detail(id),
    queryFn: () => getDetailMovie(id),
    ...options,
  });
};

export const useMovieDetailVideos = (
  id: number,
  options: UseQueryOptions<Video, AxiosError>,
): UseQueryResult<Video, AxiosError> => {
  return useQuery({
    queryKey: queryKeys.movie.query.detailVideos(id),
    queryFn: () => getDetailMovieVideos(id),
    ...options,
  });
};
