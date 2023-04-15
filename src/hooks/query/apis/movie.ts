import ApiUtils from "@/utils/ApiUtils";
import {Detail, Now} from "@/types/data/MovieType";

export const getMovieNow = async () => {
  const {data} = await ApiUtils.get<Now>("/movie/now_playing");
  return data;
};

export const getMovieDetail = async (id: number) => {
  const {data} = await ApiUtils.get<Detail>(`/movie/${id}`);
  return data;
};
