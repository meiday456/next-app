import React, {ReactElement} from "react";
import styled from "@emotion/styled";
import urls from "@/utils/Urls";
import BannerImage from "@/components/molecules/BannerImage";
import {ContentType} from "@/types/data/CommonType";
import {TvDetail} from "@/types/data/TvType";
import {MovieDetail} from "@/types/data/MovieType";
import DetailContents from "@/components/organisms/detail/DetailContents";

interface Props {
  type: ContentType;
  info: TvDetail | MovieDetail;
}

const BannerStyle = styled.div`
  color: #fff;
  padding: 0 2%;
  position: relative;
`;
const DetailBanner = ({type, info}: Props): ReactElement => {
  return (
    <BannerStyle>
      <BannerImage
        src={info.backdrop_path ? urls.common.image(info.backdrop_path, "banner") : "/images/no_image.png"}
        alt={`${info.title || info.name || ""}_이미지`}
        bottom={40}
      />
      <DetailContents
        title={info.title || info.name || ""}
        overview={info.overview}
        score={Math.round(info.vote_average * 10)}
        genres={info.genres}
      />
    </BannerStyle>
  );
};

export default DetailBanner;
