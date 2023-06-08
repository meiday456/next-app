import ApiUtils from "@/utils/ApiUtils";
import urls from "@/utils/Urls";
import {ContentsList, ContentType, Credits, Time_window, Trending} from "@/types/data/CommonType";
import axios from "axios";

export const getTrendingList = async (tw: Time_window = "day", page = 1) => {
  const {data} = await ApiUtils.get<Trending>(urls.common.trending(tw), {
    params: {
      page,
    },
  });
  return data;
};

export const getContentsList = async () => {
  const {data} = await axios.get<ContentsList[]>(urls.routes.contents);
  return data;
};

export const getCredits = async (type: Lowercase<ContentType>, id: number) => {
  const {data} = await ApiUtils.get<Credits>(urls.common.credits(type, id));
  return data;
};

export const getActors = async (type: Lowercase<ContentType>, id: number) => {
  const {data} = await ApiUtils.get<Credits>(urls.common.credits(type, id));
  return data.cast.map(cast => cast.name);
};
