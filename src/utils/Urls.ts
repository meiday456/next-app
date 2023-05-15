import {time_window} from "@/types/data/CommonType";

const movie = {
  now: `/movie/now_playing`,
  detail: (id: number) => `/movie/${id}`,
  detail_videos: (id: number) => `${movie.detail(id)}/videos`,
};

const common = {
  base: `https://api.themoviedb.org/3`,
  image: (path: string) => `https://image.tmdb.org/t/p/original/${path}`,
  trending: (tw: time_window = "day") => `/trending/all/${tw}`,
};

const tv = {};
export default {movie, common, tv};
