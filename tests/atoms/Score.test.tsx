import Score from "@/components/atoms/Score";
import {render, screen} from "@testing-library/react";

describe("Score", () => {
  context("default Props", () => {
    it("width, height 는 100 value 는 0이다", () => {
      render(<Score />);
      const progressbarEl = screen.queryByRole("progressbar");
      expect(progressbarEl).toHaveTextContent(/0/);
    });
  });

  context("provided Props", () => {
    context("value=50, width=200 일때", () => {
      const value = 50;
      const width = 200;
      it("50%가 출력되고, width,height=200이다.", () => {
        render(<Score value={value} width={width} />);
        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toHaveTextContent(new RegExp(value.toString()));
        expect(progressBar).toHaveStyle(`width:${width}px`);
        expect(progressBar).toHaveStyle(`height:${width}px`);
      });
    });
    context("value=100, width=200 ,height=300 일때", () => {
      const value = 100;
      const width = 200;
      const height = 300;
      it("100%가 출력되고, width=200, height=300이다.", () => {
        render(<Score value={value} width={width} height={height} />);
        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toHaveTextContent(new RegExp(value.toString()));
        expect(progressBar).toHaveStyle(`width:${width}px`);
        expect(progressBar).toHaveStyle(`height:${height}px`);
      });
    });
  });
});
