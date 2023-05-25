import {ReactElement} from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const Container = styled.div`
  position: absolute;
  width: calc(100% - 7vw - 10px);
  height: 100%;

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
    <Container>
      <Image className={"image"} src={src} alt={alt} fill={true}></Image>
    </Container>
  );
};
export default BannerImage;
