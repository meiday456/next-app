import {render, screen} from "@testing-library/react";
import Button from "@/components/atoms/Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  const setup = () => {
    const clickHandler = jest.fn();
    const children = "표출문구";
    const {container} = render(<Button onClick={clickHandler}>{children}</Button>);

    return {
      clickHandler,
      children,
      container,
    };
  };

  context("rendering", () => {
    it("지정된 문구가 출력이 되는가?", () => {
      const {children} = setup();
      const findEl = screen.getByText(children);
      expect(findEl).toBeInTheDocument();
    });
  });

  context("사용자가 클릭을 했을때", () => {
    it("on Click handler call?", async () => {
      const {clickHandler, children} = setup();

      const btnEl = screen.getByRole("button", {name: children});
      await userEvent.click(btnEl);

      expect(clickHandler).toHaveBeenCalledTimes(1);
    });
  });
});
