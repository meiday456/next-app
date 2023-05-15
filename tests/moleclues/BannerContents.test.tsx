import {render, renderHook, screen} from "@testing-library/react";
import BannerContents from "@/components/molecules/BannerContents";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactNode} from "react";
import {useMovieNowContents} from "@/hooks/query/queries/movieQueries";

describe("BannerContents", () => {
  const queryClient = new QueryClient();
  const wrapper = (children: ReactNode) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

  const setup = () => {
    const {container} = render(wrapper(<BannerContents nowPlayMovieId={333339} />));
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
