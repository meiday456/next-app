import {render, screen} from "@testing-library/react";
import FadeArea from "@/components/atoms/FadeArea";

describe("Fade Area", () => {
  context("render", () => {
    it("height 25로 지정 했을때 css properties가 25rem 으로 되는가?", () => {
      const {container} = render(<FadeArea height={25} />);
      const fadeAreaEl = screen.queryByRole("presentation", {hidden: true});

      expect(fadeAreaEl).toHaveStyle("height:25rem");
    });
  });
});
