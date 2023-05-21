import {rest} from "msw";
import Urls from "@/utils/Urls";
import nowMovies from "$/fixture/movie/now.json";
import movieDetail from "$/fixture/movie/detail.json";
import vidoes from "$/fixture/movie/videos.json";

export const movieHandlers = [
  // now movies
  rest.get(`${Urls.common.base}${Urls.movie.now}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(nowMovies));
  }),

  //detail
  rest.get(`${Urls.common.base}/movie/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieDetail));
  }),

  //detail_videos
  rest.get(`${Urls.common.base}/movie/:id/videos`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(vidoes));
  }),
];
