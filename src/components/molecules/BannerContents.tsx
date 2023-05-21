import {ReactElement} from "react";
import styled from "@emotion/styled";
import Title from "@/components/atoms/Title";
import Description from "@/components/atoms/Description";
import Button from "@/components/atoms/Button";
import {MovieResult} from "@/types/data/MovieType";

const BannerContentsStyle = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  z-index: 2;
`;

interface Props {
  info: MovieResult;
}

const BannerContents = ({info}: Props): ReactElement => {
  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substring(0, n) + "..." : str;
  };

  return (
    <BannerContentsStyle>
      <Title>{info.title || info.original_title}</Title>
      <Button onClick={() => {}}>상세정보</Button>
      <Description>{truncate(info.overview, 50)}</Description>
    </BannerContentsStyle>
  );
};
export default BannerContents;

BannerContents.defaultProps = {
  info: {title: "제목", overview: "설명"},
};
