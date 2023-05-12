import {ReactElement, useEffect} from "react";
import styled from "@emotion/styled";
import BannerContents from "@/components/organisms/BannerContents";
import FadeArea from "@/components/atoms/FadeArea";
import {useMovieNowContents} from "@/hooks/query/queries/movieQueries";

const BannerStyle = styled.header`
  color: #fff;
  object-fit: contain;
  height: 448px;
  background-position: top;
  background-size: cover;
`;

const Banner = (): ReactElement => {
  const {isLoading, isError, data, error} = useMovieNowContents();

  const nowPlayMovieId =
    data?.results[Math.floor(Math.random() * data.results.length)].id;

  return (
    <BannerStyle>
      <BannerContents nowPlayMovieId={nowPlayMovieId!}></BannerContents>
      <FadeArea height={7.4} />
    </BannerStyle>
  );
};

export default Banner;
