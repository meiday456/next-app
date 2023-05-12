import {render, renderHook, screen, waitFor} from "@testing-library/react";
import Main from "$/pages/main";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "@testing-library/jest-dom";
import {ReactNode} from "react";
import {useMovieNowContents} from "@/hooks/query/queries/movieQueries";

describe("home test", () => {
  const queryClient = new QueryClient();

  const wrapper = ({children}: {children: ReactNode}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const renderMain = () => {
    const {container} = render(
      <QueryClientProvider client={queryClient}>
        <Main />,
      </QueryClientProvider>,
    );
    const {result} = renderHook(() => useMovieNowContents(), {wrapper});
    return {result, container};
  };

  context("화면 출력이 되는가?", () => {
    it("배너가 정상적으로 출력되는가?", async () => {
      const {result, container} = renderMain();
      await waitFor(() => expect(result.current.isSuccess).toBe(true));
      expect(screen.getByText(/설명/)).toBeInTheDocument();

      const h1El = await screen.findByRole("h1");
      expect(h1El).toHaveTextContent(/레디/);
    });
  });
});
