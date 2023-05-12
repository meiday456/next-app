import {ReactElement} from "react";
import styled from "@emotion/styled";
import Title from "@/components/atoms/Title";
import Description from "@/components/atoms/Description";
import {useMovieDetail, useMovieDetailVideos} from "@/hooks/query/queries/movieQueries";
import Button from "@/components/atoms/Button";

const BannerContentsStyle = styled.div`
  margin-left: 40px;
  padding-top: 140px;
  height: 190px;
`;

interface Props {
  nowPlayMovieId: number;
}

//보여줄 비디오가 없다면 포스터를 표출하게 한다.
const BannerContents = ({nowPlayMovieId}: Props): ReactElement => {
  const {isLoading, isError, data, error} = useMovieDetail(nowPlayMovieId, {
    enabled: !!nowPlayMovieId,
  });

  const {data: videos} = useMovieDetailVideos(nowPlayMovieId, {
    enabled: !!nowPlayMovieId,
  });

  return (
    <BannerContentsStyle>
      <Title>{data?.title || data?.original_title || "제목"}</Title>
      <Button onClick={() => {}}>Play</Button>
      <Description>설명</Description>
    </BannerContentsStyle>
  );
};
export default BannerContents;
