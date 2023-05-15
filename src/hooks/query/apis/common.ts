import ApiUtils from "@/utils/ApiUtils";
import urls from "@/utils/Urls";
import {time_window, Trending} from "@/types/data/CommonType";
import {param} from "ts-interface-checker";
export const getTrendingList = async (tw: time_window) => {
  const {data} = await ApiUtils.get<Trending>(urls.common.trending(), {
    params: {
      time_window: tw,
    },
  });
  return data;
};
