import {time_window} from "@/types/data/CommonType";
const common = {
  base: `https://api.themoviedb.org/3`,
  image: (path: string) => `https://image.tmdb.org/t/p/original/${path}`,
  trending: (tw: time_window = "day") => `/trending/all/${tw}`,
};

const movie = {
  now: `/movie/now_playing`,
  detail: (id: number) => `/movie/${id}`,
  detail_videos: (id: number) => `${movie.detail(id)}/videos`,
  popular: `/movie/popular`,
  provider: (id: number) => `/movie/${id}/watch/providers`,
};

const tv = {
  popular: `/tv/popular`,
  top_rated: `tv/top_rated`,
  provider: (id: number) => `/tv/${id}/watch/providers`,
};

const routes = {
  base: "/api",
  contents: `/api/contents`,
};
export default {movie, common, tv, routes};
