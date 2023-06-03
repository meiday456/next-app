import React from "react";

import urls from "@/utils/Urls";
import Container from "@/components/atoms/Container";
import {ContentType} from "@/types/data/CommonType";
import {TvDetail} from "@/types/data/TvType";
import {MovieDetail} from "@/types/data/MovieType";
import DetailBanner from "@/components/organisms/detail/DetailBanner";

interface Props {
  type: ContentType;
  info: TvDetail | MovieDetail;
}

const DetailTemplate = ({type, info}: Props): React.ReactElement => {
  return (
    <Container bgImg={urls.common.image(info.backdrop_path, "banner")}>
      <DetailBanner></DetailBanner>
    </Container>
  );
};

export default DetailTemplate;
