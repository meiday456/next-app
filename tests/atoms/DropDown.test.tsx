import {render, screen} from "@testing-library/react";
import DropDown from "@/components/atoms/DropDown";
import userEvent from "@testing-library/user-event";
describe("DropDown", () => {
  const setup = () => {
    const clickHandler = jest.fn();
    const view = render(<DropDown onClick={clickHandler} />);
    const signOut = screen.getByRole("option", {name: "Sign Out"});
    return {
      ...view,
      clickHandler,
      signOut,
    };
  };
  context("Sign Out 메뉴가 포함되어있는가?", () => {
    it("Sign Out render?", () => {
      const {signOut} = setup();

      expect(signOut).toBeInTheDocument();
    });

    it("Sign Out click 시 handler 가 호출되는가?", async () => {
      const {clickHandler, signOut} = setup();
      await userEvent.click(signOut);
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });
  });
});
