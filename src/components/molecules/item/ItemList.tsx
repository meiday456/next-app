import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Mousewheel} from "swiper";
import Item from "@/components/molecules/item/Item";
import styled from "@emotion/styled";
import ListTitle from "@/components/molecules/item/ListTitle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ItemListSection = styled.section`
  margin-bottom: 1.5rem;
`;

const ItemList = (): React.ReactElement => {
  const breakpoints = {
    0: {
      spaceBetween: 6,
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    600: {
      spaceBetween: 8,
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1000: {
      spaceBetween: 9,
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
    1400: {
      spaceBetween: 10,
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
    2000: {
      spaceBetween: 11,
      slidesPerView: 7,
      slidesPerGroup: 7,
    },
  };
  return (
    <ItemListSection className={"item-list"}>
      <ListTitle title={"임의로 삽입한 제목"} />
      <Swiper
        modules={[Navigation, Pagination, A11y, Mousewheel]}
        spaceBetween={50}
        slidesPerView={"auto"} //viewport에 따라서 표출하는 갯수를 다르게 해야한다.
        onSlideChange={() => console.log("slide change")}
        navigation
        mousewheel={{forceToAxis: true}}
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        breakpoints={breakpoints}
        watchOverflow
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
      </Swiper>
    </ItemListSection>
  );
};

export default ItemList;
