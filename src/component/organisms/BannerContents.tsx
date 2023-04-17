import {ReactElement} from "react";
import styled from "@emotion/styled";
import Title from "@/component/atoms/Title";
import BannerBtns from "@/component/molecules/BannerBtns";
import Description from "@/component/atoms/Description";
import {
  useMovieDetail,
  useMovieNowContents,
} from "@/hooks/query/queries/movieQueries";

const BannerContentsStyle = styled.div`
  margin-left: 40px;
  padding-top: 140px;
  height: 190px;
`;

const BannerContents = (): ReactElement => {
  const {
    isLoading: nowIsLoading,
    isError: nowIsError,
    data: nowData,
    error: nowError,
  } = useMovieNowContents();

  const {
    isLoading: detailIsLoading,
    isError: detailIsError,
    data: detailData,
    error: detailError,
  } = useMovieDetail(
    nowData?.results[Math.floor(Math.random() * nowData.results.length)].id ??
      333339,
  );

  return (
    <BannerContentsStyle>
      <Title>{detailData?.title || detailData?.original_title}</Title>
      <BannerBtns></BannerBtns>
      <Description>설명</Description>
    </BannerContentsStyle>
  );
};
export default BannerContents;
