import {Now as MovieNow, Popular as MoviePopular} from "@/types/data/MovieType";
import {Tv} from "@/types/data/TvType";

export type Time_window = "6h" | "day" | "week";
export type ImageType = "banner" | "content";

export interface CommonResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface CommonResult {
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  vote_average: number;
  vote_count: number;
}

export type Trending = CommonResponse<TrendingResult>;

export interface TrendingResult extends CommonResult {
  adult: boolean;
  title?: string;
  release_date?: string;
  video?: boolean;
  original_title?: string;
  media_type: string;
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[];
}

export interface ContentsList {
  type: "ALL" | "MOVIE" | "TV";
  title: string;
  list: MovieNow["results"] | MoviePopular["results"] | Tv["results"] | Trending["results"];
}
