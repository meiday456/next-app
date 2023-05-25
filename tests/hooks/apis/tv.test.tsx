import {getPopularTv, getTopRatedTv} from "@/hooks/query/apis/tv";

describe("tv Apis", () => {
  describe("fn : getPopularTv", () => {
    it("default 파라미터 시 정상 호출되고, response가 정상인가?", async () => {
      const data = await getPopularTv();
      expect(data).toHaveProperty("page");
      expect(data.results).toHaveLength(20);
    });
  });

  describe("fn : getTopRatedTv", () => {
    it("default 파라미터 시 정상 호출되고, response가 정상인가?", async () => {
      const data = await getTopRatedTv();
      expect(data).toHaveProperty("page");
      expect(data.results).toHaveLength(20);
    });
  });
});
