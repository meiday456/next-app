import {render} from "@testing-library/react";
import Main from "../pages/main";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "@testing-library/jest-dom";

describe("home test", () => {
  it("화면 출력이 되는가?", async () => {
    const queryClient = new QueryClient();
    const {container} = render(
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>,
    );
    expect(container).toHaveTextContent(/설명/);
  });
});
