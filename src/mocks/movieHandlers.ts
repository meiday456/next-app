import {rest} from "msw";
import Urls from "@/utils/Urls";
import nowMovies from "$/fixture/movie/now.json";
import nowMoviesPage2 from "$/fixture/movie/now_page_2.json";
import movieDetail from "$/fixture/movie/detail.json";
import popularMovies from "$/fixture/movie/popular.json";
import vidoes from "$/fixture/movie/videos.json";

export const movieHandlers = [
  // // now movies
  rest.get(`${Urls.common.base}${Urls.movie.now}`, (req, res, ctx) => {
    const page = req.url.searchParams.get("page") ?? 1;

    if (+page === 1) {
      return res(ctx.status(200), ctx.json(nowMovies));
    } else {
      return res(ctx.status(200), ctx.json(nowMoviesPage2));
    }
  }),
  //popular
  rest.get(`${Urls.common.base}${Urls.movie.popular}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(popularMovies));
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
