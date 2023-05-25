import UserInfo from "@/components/molecules/UserInfo";
import {render} from "@testing-library/react";

describe("UserInfo", () => {
  context("render", () => {
    it("요소가 정상 출력되는가?", () => {
      const {container} = render(<UserInfo />);
      expect(container).toBeInTheDocument();
    });
  });

  it.todo("컴포넌트 사용 결정 및 기능 구현이 안되어있기때문에 추후 수정바람");
});
