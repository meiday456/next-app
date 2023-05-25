import {render, screen} from "@testing-library/react";
import Home from "$/pages/index";

describe("index", () => {
  context("rednering", () => {
    it("정상 출력되는가?", () => {
      const {container} = render(<Home />);
      expect(container).toBeInTheDocument();
    });

    it.todo("메인 로그인 및 회원가입 구현 후 테스트 코드 작성");
  });
});
