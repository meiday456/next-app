import ApiUtils from "@/utils/ApiUtils";
import {Detail, Now, Popular, Video} from "@/types/data/MovieType";
import urls from "@/utils/Urls";
import {DEFAULT_REGION} from "@/constants/common";

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

export const getMovieDetail = async (id: number) => {
  const {data} = await ApiUtils.get<Detail>(urls.movie.detail(id));
  return data;
};

export const getMovieDetailVideos = async (id: number) => {
  const {data} = await ApiUtils.get<Video>(urls.movie.detail_videos(id));
  return data;
};
