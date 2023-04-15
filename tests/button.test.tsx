import {render, screen} from "@testing-library/react";
import Button from "@/component/atoms/Button";

describe("button test", () => {
  it("버튼의 text 출력 확인", () => {
    const text = "문자출력";
    const {container} = render(
      <Button
        onClick={() => {
          return;
        }}
      >
        {text}
      </Button>,
    );

    const buttonEl = screen.getByText(text);
    expect(buttonEl).toBeInTheDocument();
  });
});
