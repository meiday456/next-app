import {getMovieDetail, getMovieNow} from "@/hooks/query/apis/movie";
import {Dates, Result} from "@/types/data/MovieType";

describe("api test", () => {
  it("getMovieNow", async () => {
    const data = await getMovieNow();

    const sample = {
      dates: expect.any(Object) as Dates,
      page: 1,
      results: expect.anything() as Result[],
      total_pages: expect.any(Number) as number,
      total_results: expect.any(Number) as number,
    };

    expect(data).toMatchObject(sample);
  });

  it("getMovieDetail", async () => {
    const id = 333339;
    const data = await getMovieDetail(id);
    expect(data.id).toBe(id);
  });
});
