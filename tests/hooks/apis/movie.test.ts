import {getMovieDetail, getMovieDetailVideos, getNowMovie, getPopularMovie} from "@/hooks/query/apis/movie";

describe("movie Apis", () => {
  describe("function : getNowMovie", () => {
    /**
     * API 테스트를 할때 파라미터를 변경해서 값이 다른게 오는걸 테스트하는 것은
     * 백엔드 혹은 API 작업 쪽에서 해야하는 것으로
     * 프론트엔드 테스트에서는 정상적인 값이 호출이 되는가?를 확인하면 되는거 같다.
     *
     */

    context.skip("파라미터가 1일때 ", () => {
      it("response의 page가 1이다.", async () => {
        const data = await getNowMovie();
        expect(data).toHaveProperty("page", 1);
      });
    });
    context.skip("파라미터가 2일때", () => {
      it("response의 page가 2이다.", async () => {
        const data = await getNowMovie(2);
        expect(data).toHaveProperty("page", 2);
      });
    });

    it("정상 호출시 results를 포함하고 있는가?", async () => {
      const data = await getNowMovie(2);
      expect(data).toHaveProperty("results");
      expect(data.results).toHaveLength(2);
    });
  });

  describe("getPopularMovie", () => {
    it("파라미터 region:KR , page :2 일때 정상 결과가 나오는가?", async () => {
      const data = await getPopularMovie("KR", 2);

      expect(data).toHaveProperty("results");
      expect(data).toHaveProperty("page");
    });

    it("default 파라미터 일때 정상 결과가 나오는가?", async () => {
      const data = await getPopularMovie();

      expect(data).toHaveProperty("results");
      expect(data).toHaveProperty("page");
    });
  });

  const movieId = 333339;
  describe("getMovieDetail", () => {
    it(`파리미터 id:${movieId} 일때 정상 호출이되고 response가 정상적인가?`, async () => {
      const data = await getMovieDetail(movieId);
      expect(data.id).toBe(movieId);
      expect(data).toHaveProperty("poster_path");
    });
  });

  describe("getMovieDetailVideos", () => {
    it(`파리미터 id:${movieId} 일때 정상 호출이되고 response가 정상적인가?`, async () => {
      const data = await getMovieDetailVideos(movieId);
      expect(data.id).toBe(movieId);
      expect(data).toHaveProperty("results");
    });
  });
});
