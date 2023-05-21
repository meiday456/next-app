import {getByText, render, renderHook, screen, waitFor} from "@testing-library/react";
import Main from "$/pages/main";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "@testing-library/jest-dom";
import {ReactNode} from "react";
import {useMovieNowContents} from "@/hooks/query/queries/movieQueries";

describe("home test", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const wrapper = ({children}: {children: ReactNode}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const renderMain = () => {
    return render(<Main />, {wrapper});
  };

  context("화면 출력이 되는가?", () => {
    it("배너가 정상적으로 출력되는가?", async () => {
      const {container} = renderMain();
      const {result} = renderHook(() => useMovieNowContents(), {wrapper});

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      //간헐적으로 통과하지못함,
      const titleEl = await screen.findByRole("heading", {level: 1});
      expect(titleEl).toHaveTextContent(/(바티칸|슈퍼)/);
    });

    it("전체 트랜드 is render?", async () => {
      renderMain();
      const contentTitle = await screen.findByRole("heading", {
        level: 3,
        name: "전체 트랜드",
      });
      expect(contentTitle).toBeInTheDocument();
    });

    it("인기 영화 20 is render?", async () => {
      renderMain();
      const contentTitle = await screen.findByRole("heading", {
        level: 3,
        name: "인기 영화 20",
      });
      expect(contentTitle).toBeInTheDocument();
    });

    it("현재 상영중인 영화 is render?", async () => {
      renderMain();
      const contentTitle = await screen.findByRole("heading", {
        level: 3,
        name: "현재 상영중인 영화",
      });
      expect(contentTitle).toBeInTheDocument();
    });

    it("인기 TV 프로그램 is render?", async () => {
      renderMain();
      const contentTitle = await screen.findByRole("heading", {
        level: 3,
        name: "인기 TV 프로그램",
      });
      expect(contentTitle).toBeInTheDocument();
    });

    it("Top 20 TV 프로그램 is render?", async () => {
      renderMain();
      const contentTitle = await screen.findByRole("heading", {
        level: 3,
        name: "Top 20 TV 프로그램",
      });
      expect(contentTitle).toBeInTheDocument();
    });
  });
});
