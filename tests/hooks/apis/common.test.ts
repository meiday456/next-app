import {getTrendingList} from "@/hooks/query/apis/common";

describe("common url apis", () => {
  it("getTrendingList 파라미터 tx: week, page: 1", async () => {
    const data = await getTrendingList("week", 1);

    expect(data).toHaveAttribute("page");
  });
});
