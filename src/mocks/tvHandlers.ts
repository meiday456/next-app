import {rest} from "msw";
import Urls from "@/utils/Urls";
import popular from "$/fixture/tv/popular.json";
import topRated from "$/fixture/tv/top_rated.json";
export const tvHandlers = [
  rest.get(`${Urls.common.base}${Urls.tv.popular}`, (req, res, context) => {
    return res(context.status(200), context.json(popular));
  }),
  rest.get(`${Urls.common.base}${Urls.tv.topRated}`, (req, res, context) => {
    return res(context.status(200), context.json(topRated));
  }),
];
