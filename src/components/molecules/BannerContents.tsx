import React, {ReactElement} from "react";
import styled from "@emotion/styled";
import Title from "@/components/atoms/Title";
import Description from "@/components/atoms/Description";
import Button from "@/components/atoms/Button";
import {MovieResult} from "@/types/data/MovieType";
import {useRouter} from "next/router";

const BannerContentsStyle = styled.div`
  position: absolute;
  width: 82%;
  bottom: 8%;
  left: 8%;
  z-index: 2;
`;
const ButtonWrapperStyle = styled.div`
  position: absolute;
  right: -1rem;
  bottom: 0.5rem;
`;

interface Props {
  info: MovieResult;
}

const BannerContents = ({info}: Props): ReactElement => {
  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substring(0, n) + "..." : str;
  };

  const router = useRouter();

  const detailBtnClickHandler = () => {
    void router.push(`/detail/${info.id}`);
  };

  return (
    <BannerContentsStyle>
      <Title>{info.title || info.original_title}</Title>
      <Description>{truncate(info.overview, 50)}</Description>
      <ButtonWrapperStyle>
        <Button onClick={() => detailBtnClickHandler()}>상세정보</Button>
      </ButtonWrapperStyle>
    </BannerContentsStyle>
  );
};
export default BannerContents;

BannerContents.defaultProps = {
  info: {title: "제목", overview: "설명"},
};
