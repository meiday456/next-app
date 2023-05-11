const movie = {
  base: `https://api.themoviedb.org/3/`,
  now: `/movie/now_playing`,
  detail: (id: number) => `/movie/${id}`,
};

export default {movie};
