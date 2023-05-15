export type time_window = "6h" | "day" | "week";

export interface Trending {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result extends CommonResult {
  media_type: string;
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[];
}

export interface CommonResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
