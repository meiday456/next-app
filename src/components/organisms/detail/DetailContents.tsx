import React, {ReactElement} from "react";
import styled from "@emotion/styled";

import Title from "@/components/atoms/Title";
import Description from "@/components/atoms/Description";
import ScoreBox from "@/components/atoms/ScoreBox";
import {Genre} from "@/types/data/CommonType";
import Tags from "@/components/molecules/Tags";

interface Props {
  title: string;
  overview: string;
  score: number;
  genres: Genre[];
}

const DetailContentsStyle = styled.div`
  position: absolute;
  width: 82%;
  bottom: 8%;
  left: 8%;
  z-index: 2;
`;

const DetailContents = (props: Props): ReactElement => {
  return (
    <DetailContentsStyle>
      <Title>{props.title}</Title>
      <Description content={props.overview} />
      {/*  평점 */}
      <ScoreBox value={props.score} width={50} />
      {/*  출연진*/}
      {/*  장르 정보*/}
      <Tags label={"장르"} list={props.genres.map(generes => generes.name)} />
    </DetailContentsStyle>
  );
};

export default DetailContents;
