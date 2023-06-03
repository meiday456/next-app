import {Now as MovieNow, Popular as MoviePopular} from "@/types/data/MovieType";
import {Tv} from "@/types/data/TvType";

export type ContentType = "M" | "P";
export type Time_window = "day" | "week";
export type ImageType = "banner" | "content";

export interface CommonResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface CommonResult {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export type Trending = CommonResponse<TrendingResult>;

export interface TrendingResult extends CommonResult {
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

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}
export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Video {
  id: number;
  results: VideoResult[];
}

export interface VideoResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
