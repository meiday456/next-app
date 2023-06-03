import {CommonResponse, CommonResult, Genre, ProductionCompany, ProductionCountry, SpokenLanguage} from "./CommonType";

export interface Now extends CommonResponse<MovieResult> {
  dates: Dates;
}

export type Popular = CommonResponse<MovieResult>;

export interface MovieResult extends CommonResult {
  adult: boolean;
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface MovieDetail extends CommonResult {
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  original_title: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
}
