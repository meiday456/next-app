import {rest} from "msw";
import contents from "$/fixture/common/contents.json";
import trending from "$/fixture/common/trending.json";
import trendingPage2 from "$/fixture/common/trending_other_page.json";
import Urls from "@/utils/Urls";

export const commonHandlers = [
  rest.get(`/api/contents`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(contents));
  }),

  rest.get(`${Urls.common.base}/trending/all/:time_window`, (req, res, ctx) => {
    const page = req.url.searchParams.get("page");

    if (Number(page) === 1) {
      return res(ctx.status(200), ctx.json(trending));
    } else {
      return res(ctx.status(200), ctx.json(trendingPage2));
    }
  }),
];
