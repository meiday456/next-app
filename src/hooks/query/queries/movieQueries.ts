import {useQuery, UseQueryOptions, UseQueryResult} from "@tanstack/react-query";
import queryKeys from "@/hooks/query/keys/queryKeys";
import {getMovieDetail, getNowMovie, getMovieDetailVideos} from "@/hooks/query/apis/movie";
import {MovieDetail, Now} from "@/types/data/MovieType";
import {Video} from "@/types/data/CommonType";
import {AxiosError} from "axios";

export const useMovieNowContents = (
  options: UseQueryOptions<Now, AxiosError> = {},
  onSuccess: (data: Now) => void = () => {},
): UseQueryResult<Now, AxiosError> => {
  return useQuery<Now, AxiosError>({
    queryKey: queryKeys.movie.query.now(),
    queryFn: () => getNowMovie(),
    onSuccess,
    ...options,
  });
};

export const useMovieDetail = (
  id: number,
  options: UseQueryOptions<MovieDetail, AxiosError> = {},
  onSuccess: (data: MovieDetail) => void = () => {},
): UseQueryResult<MovieDetail, AxiosError> => {
  return useQuery({
    queryKey: queryKeys.movie.query.detail(id),
    queryFn: () => getMovieDetail(id),
    onSuccess,
    ...options,
  });
};

export const useMovieDetailVideos = (
  id: number,
  options: UseQueryOptions<Video, AxiosError>,
): UseQueryResult<Video, AxiosError> => {
  return useQuery({
    queryKey: queryKeys.movie.query.detailVideos(id),
    queryFn: () => getMovieDetailVideos(id),
    ...options,
  });
};
