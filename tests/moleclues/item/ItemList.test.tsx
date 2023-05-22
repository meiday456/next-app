import NowMovieFixture from "$/fixture/movie/now.json";
import {render, screen} from "@testing-library/react";
import ItemList from "@/components/molecules/item/ItemList";
import {ContentsList} from "@/types/data/CommonType";

describe("Item List", () => {
  const fixture: ContentsList = {
    type: "MOVIE",
    title: "title",
    list: NowMovieFixture.results,
  };
  const setup = (info: ContentsList) => {
    const view = render(<ItemList info={info} />);
    return {...view};
  };

  context("info.list의 length가 0이 아닐때", () => {
    it("swiper 생성이 되는가?", () => {
      setup(fixture);
      const swiperEl = screen.getByTestId("Swiper-testId");
      const swiperSlideAllEl = screen.getAllByTestId("SwiperSlide-testId");
      expect(swiperEl).toBeInTheDocument();
      expect(swiperSlideAllEl.length).toBeGreaterThan(0);
    });
  });

  context("info.list의 length가 0일때", () => {
    it("swiper 없이 render 되는가?", () => {
      const modifyFixture = {...fixture};
      modifyFixture.list = [];
      setup(modifyFixture);
      const swiperEl = screen.queryByTestId("Swiper-testId");
      const swiperSlideEl = screen.queryByTestId("SwiperSlide-testId");

      expect(swiperEl).not.toBeInTheDocument();
      expect(swiperSlideEl).not.toBeInTheDocument();
    });
  });
});
