import AxiosUtils from "@/utils/ApiUtils";
import urls from "@/utils/Urls";
import {Tv} from "@/types/data/TvType";
export const getPopularTv = async (page = 1, region = "") => {
  const {data} = await AxiosUtils.get<Tv>(urls.tv.popular, {
    params: {page, with_origin_country: region, "vote_count.gte": 200},
  });
  return data;
};

export const getTopRatedTv = async (page = 1, region = "") => {
  const {data} = await AxiosUtils.get<Tv>(urls.tv.top_rated, {
    params: {page, with_origin_country: region, "vote_count.gte": 200},
  });
  return data;
};
