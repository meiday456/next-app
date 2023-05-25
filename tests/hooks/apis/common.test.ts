import {getTrendingList} from "@/hooks/query/apis/common";

describe("common url Apis", () => {
  context("getTrendingList", () => {
    it("파라미터 tx: week, page: 1", async () => {
      const data = await getTrendingList("week", 1);
      expect(data).toHaveProperty("results");
    });
    it("파라미터 tx: week, page: 2", async () => {
      const data = await getTrendingList("week", 2);
      expect(data).toHaveProperty("page", 2);
    });

    it("전달 파라미터 없이, use default param", async () => {
      const data = await getTrendingList();
      expect(data).toHaveProperty("page", 1);
      expect(data).toHaveProperty("results");
    });
  });
});
