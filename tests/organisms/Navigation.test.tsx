import {fireEvent, render, screen} from "@testing-library/react";
import Navigation from "@/components/organisms/Navigation";
import spyOn = jest.spyOn;
import userEvent from "@testing-library/user-event";

describe("Navigation", () => {
  const setup = () => {
    const view = render(<Navigation />);
    const navEl = screen.queryByRole("navigation");
    return {...view, navigation: navEl};
  };

  context("scroll 이동 시 ", () => {
    it("스크롤을 이동하지않은 경우 background-color가 transparent 인가?", () => {
      const {navigation} = setup();

      expect(navigation).toBeInTheDocument();
      expect(navigation).toHaveStyle("background-color:transparent");
    });

    it("scroll down 시 background-color가 #090b13로 지정되는가?", () => {
      const {navigation} = setup();
      fireEvent.scroll(window, {target: {scrollY: 300}});
      expect(navigation).toHaveStyle("background-color:#090b13");
    });

    it("scroll down 후 다시 스크롤을 끝까지 올린경우 background-color 상항에 맞게 지정되는가?", () => {
      const {navigation} = setup();
      fireEvent.scroll(window, {target: {scrollY: 300}});
      expect(navigation).toHaveStyle("background-color:#090b13");

      fireEvent.scroll(window, {target: {scrollY: 0}});
      expect(navigation).toHaveStyle("background-color:transparent");
    });
  });

  context("btns", () => {
    it("click", async () => {
      //TODO 기능 구현이 아직 되지않아 테스트 코드를 다시 작성해야한다.
      setup();
      const buttonEls = screen.queryAllByRole("link");
      for (const btn of buttonEls) {
        await userEvent.click(btn);
      }
      expect(buttonEls).toHaveLength(2);
      expect(global.location.href).toContain("#");
    });
  });

  context("logo", () => {
    it("click 시", async () => {
      //TODO 기능 구현이 아직 되지않아 테스트 코드를 다시 작성해야한다.
      setup();
      const logoImageEl = screen.getByRole("img");
      expect(logoImageEl).toBeInTheDocument();

      await userEvent.click(logoImageEl);

      expect(global.location.href).toContain("#");
    });
  });
});
