import {render, screen} from "@testing-library/react";
import Logo from "@/components/atoms/Logo";
import userEvent from "@testing-library/user-event";

describe("Logo", () => {
  const setup = (width: number) => {
    const clickHandler = jest.fn();
    const view = render(<Logo onClick={clickHandler} width={width} />);

    const image = screen.getByRole("img");
    return {
      ...view,
      clickHandler,
      image,
    };
  };

  context("width 500", () => {
    it("have width 500px", () => {
      setup(500);
      const logoAreaEl = screen.queryByRole("link");
      expect(logoAreaEl).toHaveStyle("width:500px");
    });
  });

  const user = userEvent.setup();
  context("logo 를 클릭한 경우", () => {
    it("click handler가 호출되는가?", async () => {
      const width = 300;
      const {image, clickHandler} = setup(width);
      await user.click(image);
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });
    it.todo("동작 구현 후 기능 테스트");
  });
});
