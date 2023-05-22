import ApiUtils from "@/utils/ApiUtils";
import urls from "@/utils/Urls";
import {ContentsList, Time_window, Trending} from "@/types/data/CommonType";
import axios from "axios";

export const getTrendingList = async (tw: Time_window, page = 1) => {
  const {data} = await ApiUtils.get<Trending>(urls.common.trending(tw), {
    params: {
      time_window: tw,
      page,
    },
  });
  return data;
};

export const getContentsList = async () => {
  const {data} = await axios.get<ContentsList[]>(urls.routes.contents);
  return data;
};
