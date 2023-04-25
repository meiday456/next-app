import {ReactElement} from "react";
import styled from "@emotion/styled";
import BannerContents from "@/component/organisms/BannerContents";
import FadeArea from "@/component/atoms/FadeArea";

const BannerStyle = styled.header`
  color: #fff;
  object-fit: contain;
  height: 448px;
  background-position: top;
  background-size: cover;
`;

const Banner = (): ReactElement => {
  return (
    <BannerStyle>
      <BannerContents></BannerContents>
      <FadeArea height={7.4} />
    </BannerStyle>
  );
};

export default Banner;
