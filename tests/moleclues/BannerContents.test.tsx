import {render, screen} from "@testing-library/react";
import BannerContents from "@/components/molecules/BannerContents";
import {queryRender} from "../testUtils";
import {MovieResult} from "@/types/data/MovieType";
import nowMovieList from "$/fixture/movie/now.json";
import userEvent from "@testing-library/user-event";

describe("BannerContents", () => {
  const fixture: MovieResult = nowMovieList.results[0];

  const setup = (info: typeof fixture) => {
    const view = render(<BannerContents info={info} />);
    return {...view};
  };

  context("title 요소", () => {
    it("original_title 없을 때 title 문구 표출?", () => {
      fixture.original_title = "";
      setup(fixture);
      const contentTitle = screen.queryByRole("heading", {
        level: 1,
        name: fixture.title,
      });
      expect(contentTitle).toBeInTheDocument();
    });

    it("title이 없을때 original_title 문구 표출?", () => {
      fixture.title = "";
      setup(fixture);
      const contentTitle = screen.queryByRole("heading", {
        level: 1,
        name: fixture.original_title,
      });
      expect(contentTitle).toBeInTheDocument();
    });
  });

  context("상세정보 버튼", () => {
    it("click", async () => {
      setup(fixture);

      await userEvent.click(screen.getByRole("button"));

      //TODO button 클릭 후 페이지 전환 테스트 코드를 작성해야함
    });
  });
});
