const movie = {
  all: ["movie"],
  allQuery: () => [...movie.all, "query"],
  query: {
    now: () => [...movie.allQuery(), "now"],
    detail: (id: number) => [...movie.allQuery(), "detail", id],
    detailVideos: (id: number) => [...movie.query.detail(id), "videos"],
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

const queryKeys = {movie, common};

export default queryKeys;
