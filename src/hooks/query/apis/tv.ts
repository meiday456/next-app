import ApiUtils from "@/utils/ApiUtils";
import urls from "@/utils/Urls";
import {Tv, TvDetail} from "@/types/data/TvType";

export const getPopularTv = async (page = 1, region = "") => {
  const {data} = await ApiUtils.get<Tv>(urls.tv.popular, {
    params: {page, with_origin_country: region, "vote_count.gte": 200},
  });
  return data;
};

export const getTopRatedTv = async (page = 1, region = "") => {
  const {data} = await ApiUtils.get<Tv>(urls.tv.topRated, {
    params: {page, with_origin_country: region, "vote_count.gte": 200},
  });
  return data;
};

export const getDetailTv = async (id: number) => {
  const {data} = await ApiUtils.get<TvDetail>(urls.tv.detail(id));
  return data;
};
