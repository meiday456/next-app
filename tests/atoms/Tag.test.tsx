import {render, screen} from "@testing-library/react";
import Tag from "@/components/atoms/Tag";
import userEvent from "@testing-library/user-event";

describe("Tag", () => {
  const setup = (text: string) => {
    return {...render(<Tag>{text}</Tag>)};
  };
  context("render width text", () => {
    it("text='태그'를 출력한다.", () => {
      const text = "태그";
      setup(text);
      const el = screen.getByText(text);
      expect(el).toBeInTheDocument();
    });
  });
  context("click", () => {
    it("click handler가 호출된다.", async () => {
      const text = "태그";
      setup(text);
      const el = screen.getByText(text);
      await userEvent.click(el);

      expect(el).toBeInTheDocument();
    });
  });
});
