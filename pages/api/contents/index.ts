import {NextApiRequest, NextApiResponse} from "next";
import {getTrendingList} from "@/hooks/query/apis/common";
import {getNowMovie, getPopularMovie} from "@/hooks/query/apis/movie";
import {getPopularTv, getTopRatedTv} from "@/hooks/query/apis/tv";

export default async function getList(req: NextApiRequest, res: NextApiResponse) {
  const allTrending = await getTrendingList("day"); //전체 트랜드 목록
  const popularMovie = await getPopularMovie(); //현재 인기 영화 목록
  const nowMovie = await getNowMovie(); //현재 상영중인 영화목록
  const popularTvShow = await getPopularTv(); //현재 인기 TV 목록
  const topRatedTvShow = await getTopRatedTv(); //현재 인기 TV 목록

  const result = [
    {type: "ALL", title: "전체 트랜드", list: allTrending.results},
    {type: "MOVIE", title: "인기 영화 20", list: popularMovie.results},
    {type: "MOVIE", title: "현재 상영중인 영화", list: nowMovie.results},
    {type: "TV", title: "인기 TV 프로그램", list: popularTvShow.results},
    {type: "TV", title: "Top 20 TV 프로그램", list: topRatedTvShow.results},
  ];

  res.status(200).json(result);
}
