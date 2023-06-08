import {ReactElement, useState} from "react";
import styled from "@emotion/styled";
import BannerContents from "@/components/molecules/BannerContents";
import {useMovieNowContents} from "@/hooks/query/queries/movieQueries";
import urls from "@/utils/Urls";
import BannerImage from "@/components/molecules/BannerImage";
import {MovieResult} from "@/types/data/MovieType";

const BannerStyle = styled.header`
  color: #fff;
  padding: 0 2%;
  position: relative;
`;

const Banner = (): ReactElement => {
  const [bannerMovie, setBannerMovie] = useState<MovieResult>();
  useMovieNowContents({
    onSuccess: data => {
      const index = Math.floor(Math.random() * data.results.length);
      setBannerMovie(data.results[index]);
    },
  });

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
