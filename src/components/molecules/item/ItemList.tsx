import {A11y, Navigation, Pagination, Mousewheel} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Item from "@/components/molecules/item/Item";
import styled from "@emotion/styled";
import ListTitle from "@/components/molecules/item/ListTitle";

import {ContentsList} from "@/types/data/CommonType";

const ItemListSection = styled.section`
  margin-bottom: 1.5rem;
`;

interface Props {
  info: ContentsList;
}

const ItemList = ({info}: Props): React.ReactElement => {
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
      <ListTitle title={info.title} />
      {info.list.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination, A11y, Mousewheel]}
          spaceBetween={50}
          slidesPerView={"auto"}
          navigation
          mousewheel={{forceToAxis: true}}
          pagination={{clickable: true}}
          scrollbar={{draggable: true}}
          breakpoints={breakpoints}
          watchOverflow
        >
          {info.list.map(contents => {
            return (
              <SwiperSlide key={contents.id}>
                <Item {...contents} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </ItemListSection>
  );
};

export default ItemList;
