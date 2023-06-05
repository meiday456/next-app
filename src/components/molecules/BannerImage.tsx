import {ReactElement} from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const BannerImageStyle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  padding-bottom: 50%;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 13vw;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  }

  & .image {
    inset: 0;
    object-fit: cover;
  }
`;

interface Props {
  src: string;
  alt: string;
}

const BannerImage = ({src, alt}: Props): ReactElement => {
  return (
    <BannerImageStyle>
      <Image className={"image"} src={src} alt={alt} fill={true}></Image>
    </BannerImageStyle>
  );
};
export default BannerImage;
