import {render, screen} from "@testing-library/react";
import Main from "../pages/main";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "@testing-library/jest-dom";

describe("home test", () => {
  const queryClient = new QueryClient();

  const renderMain = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>,
    );

  it("화면 출력이 되는가?", () => {
    const {container} = renderMain();
    expect(container).toHaveTextContent(/설명/);
  });
  it.todo("단위 테스트 작성을 하시오.");
  context("배너가 출력된다면", () => {
    it("설명 문구가 출력되는가?", () => {
      const {container} = renderMain();
      return expect(screen.getByText(/설명/)).toBeInTheDocument();
    });
  });
});
