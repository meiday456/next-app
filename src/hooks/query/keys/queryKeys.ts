const movie = {
  all: ["movie"],
  allQuery: () => [...movie.all, "query"],
  query: {
    now: () => [...movie.allQuery(), "now"],
    detail: (movieId: number) => [...movie.allQuery(), "detail", movieId],
  },
};

export default {movie};
