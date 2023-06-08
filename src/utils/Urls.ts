import {ContentType, ImageType, Time_window} from "@/types/data/CommonType";
import {getItemImgWPath} from "@/utils/CommonUtils";

const common = {
  base: `https://api.themoviedb.org/3`,
  image: (path: string, type?: ImageType, width: 200 | 300 | 400 | 500 | number = 1920) =>
    `https://image.tmdb.org/t/p/${getItemImgWPath(width, type)}${path}`,
  trending: (tw: Time_window = "day") => `/trending/all/${tw}`,
  credits: (type: Lowercase<ContentType>, id: number) => `/${type}/${id}/credits`,
};

const movie = {
  popular: `/movie/popular`,
  now: `/movie/now_playing`,
  detail: (id: number) => `/movie/${id}`,
  detailVideos: (id: number) => `${movie.detail(id)}/videos`,
  provider: (id: number) => `/movie/${id}/watch/providers`,
};

const tv = {
  popular: `/tv/popular`,
  topRated: `/tv/top_rated`,
  detail: (id: number) => `/tv/${id}`,
  detailVideos: (id: number) => `${tv.detail(id)}/videos`,
  provider: (id: number) => `/tv/${id}/watch/providers`,
};

const routes = {
  base: "/api",
  contents: `/api/contents`,
};

const urls = {movie, common, tv, routes};
export default urls;
