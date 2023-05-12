import {useQuery, UseQueryOptions, UseQueryResult} from "@tanstack/react-query";
import queryKeys from "@/hooks/query/keys/queryKeys";
import {getMovieDetail, getMovieNow, getMovieDetailVideos} from "@/hooks/query/apis/movie";
import {Detail, Now, Video} from "@/types/data/MovieType";
import {AxiosError} from "axios";

export const useMovieNowContents = (
  options: UseQueryOptions<Now, AxiosError> = {},
  onSuccess: () => void = () => {},
): UseQueryResult<Now, AxiosError> => {
  return useQuery<Now, AxiosError>({
    queryKey: queryKeys.movie.query.now(),
    queryFn: () => getMovieNow(),
    onSuccess,
    ...options,
  });
};

export const useMovieDetail = (
  id: number,
  options: UseQueryOptions<Detail, AxiosError> = {},
  onSuccess: () => void = () => {},
): UseQueryResult<Detail, AxiosError> => {
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
    queryKey: queryKeys.movie.query.detail_videos(id),
    queryFn: () => getMovieDetailVideos(id),
    ...options,
  });
};
