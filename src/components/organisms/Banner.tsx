import {ReactElement, useEffect, useState} from "react";
import styled from "@emotion/styled";
import BannerContents from "@/components/molecules/BannerContents";
import FadeArea from "@/components/atoms/FadeArea";
import {useMovieDetail, useMovieDetailVideos, useMovieNowContents} from "@/hooks/query/queries/movieQueries";
import urls from "@/utils/Urls";
import Image from "next/image";
import BannerImage from "@/components/molecules/BannerImage";

const BannerStyle = styled.header`
  color: #fff;
  height: 0;
  padding: 0 calc(3.5vw + 5px) calc(35vw);
  position: relative;
  overflow-x: hidden;
  display: block;
  box-sizing: border-box;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: calc(100% - 7vw - 10px);
    padding-bottom: 5vw;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  }
`;

const Banner = (): ReactElement => {
  const [detailMovieId, setDetailMovieId] = useState<number>();
  const {isLoading, isError, data, error} = useMovieNowContents({}, data => {
    setDetailMovieId(data.results[Math.floor(Math.random() * data.results.length)].id);
  });

  const {data: detail} = useMovieDetail(detailMovieId!, {
    enabled: !!detailMovieId,
  });

  const {data: videos} = useMovieDetailVideos(detailMovieId!, {
    enabled: !!detailMovieId,
  });

  return (
    <BannerStyle>
      <BannerImage src={urls.movie.image(detail?.backdrop_path ?? "")} alt={`${detail?.title ?? ""}_이미지`} />
      <BannerContents info={detail}></BannerContents>
    </BannerStyle>
  );
};

export default Banner;
