import {screen, waitFor} from "@testing-library/react";
import Main from "$/pages/main";
import "@testing-library/jest-dom";
import {renderWithProvider} from "../testUtils";

describe("home test", () => {
  const renderMain = () => {
    return renderWithProvider(<Main />);
  };

  const findContentTitle = (name: string) => {
    return screen.findByRole("heading", {level: 3, name});
  };

  context("화면 출력이 되는가?", () => {
    it("배너가 정상적으로 출력되는가?", async () => {
      renderMain();
      await waitFor(async () => {
        const titleEl = await screen.findByRole("heading", {level: 1});
        expect(titleEl).toHaveTextContent(/(바티칸|슈퍼)/);
      });
    });

    it("콘텐츠 리스트 5가지가 정상적으로 출력되는가?", async () => {
      renderMain();

      expect(await findContentTitle("전체 트랜드")).toBeInTheDocument();
      expect(await findContentTitle("인기 영화 20")).toBeInTheDocument();
      expect(await findContentTitle("현재 상영중인 영화")).toBeInTheDocument();
      expect(await findContentTitle("인기 TV 프로그램")).toBeInTheDocument();
      expect(await findContentTitle("Top 20 TV 프로그램")).toBeInTheDocument();
    });
  });

  describe("react query test", () => {
    it("render hook을 해야하는 경우와 아닌 경우", async () => {
      renderMain();

      await waitFor(async () => {
        const titleEl = await screen.findByRole("heading", {level: 1});
        expect(titleEl).toHaveTextContent(/(바티칸|슈퍼)/);
      });
    });
  });
});
