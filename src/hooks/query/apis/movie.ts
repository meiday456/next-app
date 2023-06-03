import ApiUtils from "@/utils/ApiUtils";
import {MovieDetail, Now, Popular} from "@/types/data/MovieType";
import {Video} from "@/types/data/CommonType";
import urls from "@/utils/Urls";

export const getNowMovie = async (page = 1) => {
  const {data} = await ApiUtils.get<Now>(urls.movie.now, {params: {page}});
  return data;
};

export const getPopularMovie = async (region = "", page = 1) => {
  const params = {
    page,
    with_origin_country: region,
  };
  const {data} = await ApiUtils.get<Popular>(urls.movie.popular, {params});
  return data;
};

export const getDetailMovie = async (id: number) => {
  const {data} = await ApiUtils.get<MovieDetail>(urls.movie.detail(id));
  return data;
};

export const getDetailMovieVideos = async (id: number) => {
  const {data} = await ApiUtils.get<Video>(urls.movie.detailVideos(id));
  return data;
};
