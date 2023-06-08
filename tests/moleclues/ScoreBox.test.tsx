import ScoreBox from "@/components/molecules/ScoreBox";
import {screen} from "@testing-library/react";
import {renderWithProvider} from "$/tests/testUtils";

describe("ScoreBox", () => {
  context("render width props", () => {
    context(`label="점수", value=50 width=200`, () => {
      const label = "점수";
      const value = 50;
      const width = 200;
      it("label이 출연진으로 출력되고, 화면에 보여지는가?", () => {
        renderWithProvider(<ScoreBox label={label} value={value} width={width} />);
        const labelEl = screen.queryByText(label);
        expect(labelEl).toBeInTheDocument();
      });
    });
  });
});
