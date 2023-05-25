import {renderHook, waitFor} from "@testing-library/react";
import {useMovieNowContents} from "@/hooks/query/queries/movieQueries";

import {QueryClient} from "@tanstack/react-query";
import {useContentsList} from "@/hooks/query/queries/commonQueries";

import {wrapper} from "./testUtils";

describe("query test", () => {
  const queryClient = new QueryClient();

  it("wrapper test 와 query hook test", async () => {
    const {result} = renderHook(() => useMovieNowContents(), {wrapper});
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data?.results).toHaveLength(2);
  });

  it("contents hook test", async () => {
    const {result} = renderHook(() => useContentsList(), {wrapper});
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toHaveLength(5);
  });
});
