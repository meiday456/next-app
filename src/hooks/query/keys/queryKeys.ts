const movie = {
  all: ["movie"],
  allQuery: () => [...movie.all, "query"],
  query: {
    now: () => [...movie.allQuery(), "now"],
    detail: (movieId: number) => [...movie.allQuery(), "detail", movieId],
    detail_videos: (movieId: number) => [...movie.query.detail(movieId), "videos"],
  },
};

const common = {
  all: ["common"],
  allQuery: () => [...common.all, "query"],
  query: {
    trending: () => [...common.allQuery(), "trending"],
    contents: () => [...common.allQuery(), "contents"],
  },
};

export default {movie, common};
