import {ReactElement, useState} from "react";
import styled from "@emotion/styled";
import BannerContents from "@/components/molecules/BannerContents";
import {useMovieNowContents} from "@/hooks/query/queries/movieQueries";
import urls from "@/utils/Urls";
import BannerImage from "@/components/molecules/BannerImage";
import {MovieResult} from "@/types/data/MovieType";

const BannerStyle = styled.header`
  color: #fff;
  height: 0;
  padding: 0 calc(3.5vw + 5px) calc(45vw);
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
  const [bannerMovie, setBannerMovie] = useState<MovieResult>();
  const {isLoading, isError, data, error} = useMovieNowContents({}, data => {
    const index = Math.floor(Math.random() * data.results.length);
    setBannerMovie(data.results[index]);
  });

  // const {data: detail} = useMovieDetail(detailMovieId!, {
  //   enabled: !!detailMovieId,
  // });
  //
  // const {data: videos} = useMovieDetailVideos(detailMovieId!, {
  //   enabled: !!detailMovieId,
  // });

  return (
    <BannerStyle>
      <BannerImage
        src={
          bannerMovie?.backdrop_path ? urls.common.image(bannerMovie.backdrop_path, "banner") : "/images/no_image.png"
        }
        alt={`${bannerMovie?.title ?? ""}_이미지`}
      />
      <BannerContents info={bannerMovie}></BannerContents>
    </BannerStyle>
  );
};

export default Banner;
