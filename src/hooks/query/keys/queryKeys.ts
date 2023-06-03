const movie = {
  all: ["movie"],
  allQuery: () => [...movie.all, "query"],
  query: {
    now: () => [...movie.allQuery(), "now"],
    detail: (id: number) => [...movie.allQuery(), "detail", id],
    detailVideos: (id: number) => [...movie.query.detail(id), "videos"],
  },
};

const tv = {
  all: ["tv"],
  allQuery: () => [...tv.all, "query"],
  query: {
    detail: (id: number) => [...tv.allQuery(), "detail", id],
    detailVideos: (id: number) => [...tv.query.detail(id), "videos"],
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
