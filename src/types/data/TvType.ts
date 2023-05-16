import {CommonResponse, CommonResult} from "@/types/data/CommonType";

export type Tv = CommonResponse<TvResult>;

export interface TvResult extends CommonResult {
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_name: string;
}
