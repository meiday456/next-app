import React from "react";
import Container from "@/components/atoms/Container";
import {ContentType} from "@/types/data/CommonType";
import {TvDetail} from "@/types/data/TvType";
import {MovieDetail} from "@/types/data/MovieType";
import DetailBanner from "@/components/organisms/detail/DetailBanner";

interface Props {
  type: ContentType;
  info: TvDetail | MovieDetail;
}

const DetailTemplate = (props: Props): React.ReactElement => {
  return (
    <Container>
      <DetailBanner {...props}></DetailBanner>
    </Container>
  );
};

export default DetailTemplate;
