import {ReactElement} from "react";
import styled from "@emotion/styled";
import Title from "@/components/atoms/Title";
import Description from "@/components/atoms/Description";
import {useMovieDetail, useMovieDetailVideos} from "@/hooks/query/queries/movieQueries";
import Button from "@/components/atoms/Button";
import {Detail} from "@/types/data/MovieType";
import urls from "@/utils/Urls";
import BannerImage from "@/components/molecules/BannerImage";

const BannerContentsStyle = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  z-index: 2;
`;

interface Props {
  info: Detail;
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
