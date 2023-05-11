import ApiUtils from "@/utils/ApiUtils";
import {Detail, Now} from "@/types/data/MovieType";
import urls from "@/utils/Urls";

export const getMovieNow = async () => {
  const {data} = await ApiUtils.get<Now>(urls.movie.now);
  return data;
};

export const getMovieDetail = async (id: number) => {
  const {data} = await ApiUtils.get<Detail>(urls.movie.detail(id));
  return data;
};
