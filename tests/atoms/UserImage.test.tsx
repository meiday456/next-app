import UserImg from "@/components/atoms/UserImg";
import {render, screen} from "@testing-library/react";

describe("UserImage", () => {
  it("정상 출력이 되는가??", () => {
    render(<UserImg />);
    const image = screen.queryByRole("img");
    expect(image).toBeInTheDocument();
  });
});
