import {fireEvent, render, screen} from "@testing-library/react";
import Button from "@/component/atoms/Button";
import BannerBtns from "@/component/molecules/BannerBtns";

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

describe("Banner Btn", () => {
  it("Banner Btn show?", () => {
    const {container} = render(<BannerBtns />);
    expect(container).toHaveTextContent("Play");
    fireEvent.click(container);
  });
});
