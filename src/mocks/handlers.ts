import {rest} from "msw";
import Urls from "@/utils/Urls";
import nowMovies from "$/fixture/movie/now.json";
import movieDetail from "$/fixture/movie/detail.json";

export const handlers = [
  // now movies
  rest.get(`${Urls.movie.base}${Urls.movie.now}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(nowMovies));
  }),

  //detail
  rest.get(`${Urls.movie.base}/movie/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieDetail));
  }),
];
