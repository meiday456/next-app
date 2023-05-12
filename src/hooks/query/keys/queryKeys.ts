const movie = {
  all: ["movie"],
  allQuery: () => [...movie.all, "query"],
  query: {
    now: () => [...movie.allQuery(), "now"],
    detail: (movieId: number) => [...movie.allQuery(), "detail", movieId],
    detail_videos: (movieId: number) => [...movie.query.detail(movieId), "videos"],
  },
};

export default {movie};
