const movie = {
  base: `https://api.themoviedb.org/3`,
  now: `/movie/now_playing`,
  detail: (id: number) => `/movie/${id}`,
  detail_videos: (id: number) => `${movie.detail(id)}/videos`,
};

export default {movie};
