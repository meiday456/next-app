import {render, screen} from "@testing-library/react";
import Login from "@/components/atoms/Login";
import userEvent from "@testing-library/user-event";

describe("Login Button", () => {
  const setup = () => {
    const clickHandler = jest.fn();
    const {container} = render(<Login onClick={clickHandler} />);
    const button = screen.getByRole("link", {name: "LOGIN"});

    return {
      container,
      button,
      clickHandler,
    };
  };

  context("render", () => {
    it("LOGIN 문구의 버튼이 출력이 되는가?", () => {
      const {button} = setup();
      expect(button).toBeInTheDocument();
    });

    const user = userEvent.setup();
    it("버튼 클릭시 clickHandler가 호출되는가?", async () => {
      const {button, clickHandler} = setup();
      await user.click(button);
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });
  });

  it.todo("로그인 구현 및 버튼 활성화 후 기능테스트 작성");
});
