import {renderWithProvider} from "$/tests/testUtils";
import {screen} from "@testing-library/react";
import Tags from "@/components/molecules/Tags";

describe("Tags", () => {
  context("render width props", () => {
    const label = "출연진";
    const list = ["tag1", "tag2"];
    context(`label="출연진", list[]`, () => {
      it("label이 출연진으로 출력되고, tag가 없는가?", () => {
        renderWithProvider(<Tags label={label} list={[]} />);
        const labelEl = screen.queryByText(new RegExp(label));
        expect(labelEl).toBeInTheDocument();

        const tagAllEl = screen.queryByRole("link");
        expect(tagAllEl).not.toBeInTheDocument();
      });
    });
    context(`label="출연진", list=2개`, () => {
      const label = "출연진";
      it("label이 출연진으로 출력되고, tag 2개가 출력되는가?", () => {
        renderWithProvider(<Tags label={label} list={list} />);
        const labelEl = screen.queryByText(new RegExp(label));
        expect(labelEl).toBeInTheDocument();

        const tagAllEl = screen.queryAllByRole("link");
        expect(tagAllEl).toHaveLength(2);
      });
    });
  });
});
