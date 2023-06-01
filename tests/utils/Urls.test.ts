import urls from "@/utils/Urls";

describe("Urls", () => {
  describe("common", () => {
    describe("trending", () => {
      context("파라미터 없이 호출 시", () => {
        it("/trending/all/day 을 반환한다.", () => {
          const url = urls.common.trending();
          expect(url).toBe("/trending/all/day");
        });
      });

      context("tw가 week일때", () => {
        it("/trending/all/week 을 반환한다.", () => {
          const url = urls.common.trending("week");
          expect(url).toBe("/trending/all/week");
        });
      });
    });
  });

  describe("tv", () => {
    describe("provider", () => {
      context("id가 333339 일때", () => {
        it("/tv/333339/watch/providers 를 반환한다.", () => {
          const url = urls.tv.provider(333339);
          expect(url).toBe("/tv/333339/watch/providers");
        });
      });
    });
  });

  describe("movie", () => {
    describe("provider", () => {
      context("id가 333339 일때", () => {
        it("/movie/333339/watch/providers 를 반환한다.", () => {
          const url = urls.movie.provider(333339);
          expect(url).toBe("/movie/333339/watch/providers");
        });
      });
    });
  });
});
