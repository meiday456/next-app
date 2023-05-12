import ApiUtils from "@/utils/ApiUtils";
import {Detail, Now, Video} from "@/types/data/MovieType";
import urls from "@/utils/Urls";

export const getMovieNow = async () => {
  const {data} = await ApiUtils.get<Now>(urls.movie.now);
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
