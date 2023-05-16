import {renderHook, waitFor} from "@testing-library/react";
import {useMovieNowContents} from "@/hooks/query/queries/movieQueries";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactNode} from "react";

describe("query test", () => {
  const queryClient = new QueryClient();
  const wrapper = ({children}: {children: ReactNode}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it("wrapper test 와 query hook test", async () => {
    const {result} = renderHook(() => useMovieNowContents(), {wrapper});
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data?.results).toHaveLength(2);
  });
});
