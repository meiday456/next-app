import queryKeys from "@/hooks/query/keys/queryKeys";

describe("query keys", () => {
  describe("movie", () => {
    const {movie} = queryKeys;

    describe("query detail", () => {
      context("movie id가 20일때", () => {
        it("배열의 마지막 값을 id를 리턴한다.", () => {
          const key = movie.query.detail(20);

          expect(key).toHaveLength(4);
          expect(key[key.length - 1]).toBe(20);
        });
      });
    });
    describe("query detail_videos", () => {
      context("movie id가 20일때", () => {
        it("[...detail(20), 'videos'] 결과를 반환한다.", () => {
          const detailKey = movie.query.detail(20);
          const videosKey = movie.query.detail_videos(20);

          detailKey.push("videos");
          expect(detailKey).toEqual(videosKey);
        });
      });
    });
  });

  describe("common", () => {
    const {common} = queryKeys;
    describe("query trending", () => {
      context("함수 호출 시", () => {
        it("length는 3, 배열 마지막 값은 trending 결과를 반환한다.", () => {
          const trendingKey = common.query.trending();
          expect(trendingKey).toHaveLength(3);
          expect(trendingKey[2]).toBe("trending");
        });
      });
    });
  });
});
