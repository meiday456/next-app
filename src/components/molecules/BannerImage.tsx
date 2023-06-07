import {ReactElement} from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const BannerImageStyle = styled.div<{bottom: number}>`
  position: relative;
  top: 0;
  left: 0;
  padding-bottom: ${({bottom}) => bottom}%;

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
  bottom: number;
}

const BannerImage = ({src, alt, bottom}: Props): ReactElement => {
  return (
    <BannerImageStyle bottom={bottom}>
      <Image className={"image"} src={src} alt={alt} fill={true}></Image>
    </BannerImageStyle>
  );
};

BannerImage.defaultProps = {
  bottom: 50,
};

export default BannerImage;
