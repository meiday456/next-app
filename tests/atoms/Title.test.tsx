import {render} from "@testing-library/react";
import Title from "@/components/atoms/Title";

describe("atom title 컴포넌트", () => {
  context("rendering 될때", () => {
    it("with txt", () => {
      const txt = "타이틀 문구";
      const {container} = render(<Title>{txt}</Title>);

      expect(container).toHaveTextContent(txt);
    });
  });
});
