import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {useRouter} from "next/router";

import BannerContents from "@/components/molecules/BannerContents";
import {MovieResult} from "@/types/data/MovieType";
import nowMovieList from "$/fixture/movie/now.json";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

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
    const mockPush = jest.fn();

    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush,
    }));

    it("click", async () => {
      setup(fixture);

      const buttonElement = screen.getByText("상세정보");
      await userEvent.click(buttonElement);

      expect(mockPush).toHaveBeenCalledWith(`/detail/${fixture.id}`);
    });
  });
});
