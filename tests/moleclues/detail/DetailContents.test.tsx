import fixture from "$/fixture/movie/detail.json";
import {renderWithProvider} from "$/tests/testUtils";
import DetailContents from "@/components/molecules/detail/DetailContents";
import {screen} from "@testing-library/react";
import {truncateStr} from "@/utils/CommonUtils";

describe("DetailContents", () => {
  const setup = () => {
    return {
      ...renderWithProvider(
        <DetailContents
          id={fixture.id}
          type={"MOVIE"}
          title={fixture.title}
          overview={fixture.overview}
          score={fixture.vote_average}
          genres={fixture.genres}
        />,
      ),
    };
  };

  context("render with fixture props", () => {
    it("title이 정상 출력되는가?", () => {
      setup();
      const titleEl = screen.queryByRole("heading", {level: 1});
      expect(titleEl).toHaveTextContent(fixture.title);
    });
    it("description이 정상 출력되는가?", () => {
      setup();
      expect(screen.getByText(truncateStr(fixture.overview, 100))).toBeInTheDocument();
    });

    it("Score Box가 정상 출력되는가?", () => {
      setup();
      const scoreBoxEl = screen.queryByText("회원점수");
      expect(scoreBoxEl).toBeInTheDocument();

      const scoreEl = screen.queryByRole("progressbar");
      expect(scoreEl).toHaveTextContent(new RegExp(fixture.vote_average.toString()));
    });

    it("출연진 Tags가 정상 출력되는가?", () => {
      setup();
      const scoreBoxEl = screen.queryByText(/출연진/);
      expect(scoreBoxEl).toBeInTheDocument();
    });

    it("장르 Tags가 정상 출력되는가?", () => {
      setup();
      const scoreBoxEl = screen.queryByText(/장르/);
      expect(scoreBoxEl).toBeInTheDocument();
    });
  });
});
