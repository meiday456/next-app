import {render, screen} from "@testing-library/react";
import BannerContents from "@/components/molecules/BannerContents";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactNode} from "react";

describe("BannerContents", () => {
  const queryClient = new QueryClient();
  const wrapper = (children: ReactNode) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

  const setup = () => {
    const info = {title: "제목", overview: "내용"};

    const {container} = render(wrapper(<BannerContents {...info} />));
    return {container};
  };

  context("렌더링", () => {
    it("title 표출", () => {
      setup();
      const mustHaveTxt = screen.getByText("설명");
      expect(mustHaveTxt).toBeInTheDocument();
    });
  });
});
