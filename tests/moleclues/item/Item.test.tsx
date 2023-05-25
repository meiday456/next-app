import {render, screen} from "@testing-library/react";
import Item from "@/components/molecules/item/Item";
import popularMovieFixture from "$/fixture/movie/popular.json";
import {CommonResult} from "@/types/data/CommonType";

interface Props extends CommonResult {
  title?: string;
  name?: string;
}

describe("Item", () => {
  const itemFixture = popularMovieFixture.results[0] as Props;

  const setup = (info: Props) => {
    render(<Item {...info} />);
  };

  context("rendering width props", () => {
    const altTxt = "alt";
    it("props.title 이 falsy하고 props.name 이 있는경우 alt = props.name 인가?", () => {
      const fixture = {...itemFixture};
      fixture.title = "";
      fixture.name = altTxt;
      setup(fixture);
      expect(screen.getByAltText(altTxt)).toBeInTheDocument();
    });

    it("props.title & props.name 이 falsy 한경우 alt=대체이미지 인가?", () => {
      const fixture = {...itemFixture};
      fixture.title = "";
      fixture.name = "";
      setup(fixture);
      expect(screen.getByAltText(/대체이미지/)).toBeInTheDocument();
    });

    it("props.name 이 falsy하고 props.title 이 있는경우 alt = props.title 인가?", () => {
      setup(itemFixture);
      const reg = new RegExp(itemFixture.title!);
      const imageEl = screen.getByAltText(reg);
      expect(imageEl).toBeInTheDocument();
    });
  });
});
