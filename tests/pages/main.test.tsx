import {renderHook, screen, waitFor} from "@testing-library/react";
import Main from "$/pages/main";
import "@testing-library/jest-dom";
import {useMovieNowContents} from "@/hooks/query/queries/movieQueries";
import {queryRender, wrapper} from "../testUtils";

describe("home test", () => {
  const renderMain = () => {
    return queryRender(<Main />);
  };

  const findContentTitle = (name: string) => {
    return screen.queryByRole("heading", {level: 3, name});
  };

  context("화면 출력이 되는가?", () => {
    it("배너가 정상적으로 출력되는가?", async () => {
      const {container} = renderMain();
      const {result} = renderHook(() => useMovieNowContents(), {wrapper});

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      //react query 문제인지, 테스트 코드가 잘못된건지 간헐적으로 api 응답을 기다리는 await 후에
      // 영화 제못이 렌더링 되지않는 문제가 있다.
      const titleEl = await screen.findByRole("heading", {level: 1});
      expect(titleEl).toHaveTextContent(/(바티칸|슈퍼)/);

      expect(findContentTitle("전체 트랜드")).toBeInTheDocument();
      expect(findContentTitle("인기 영화 20")).toBeInTheDocument();
      expect(findContentTitle("현재 상영중인 영화")).toBeInTheDocument();
      expect(findContentTitle("인기 TV 프로그램")).toBeInTheDocument();
      expect(findContentTitle("Top 20 TV 프로그램")).toBeInTheDocument();
    });
  });
});
