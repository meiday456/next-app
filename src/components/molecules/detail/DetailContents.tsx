import React, {ReactElement} from "react";
import styled from "@emotion/styled";

import Title from "@/components/atoms/Title";
import Description from "@/components/atoms/Description";
import {ContentType, Genre} from "@/types/data/CommonType";
import Tags from "@/components/molecules/Tags";
import {useGetActors} from "@/hooks/query/queries/commonQueries";
import ScoreBox from "@/components/molecules/ScoreBox";

interface Props {
  id: number;
  type: ContentType;
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
  const genresNameList = props.genres.map(genres => genres.name);
  const {data: actors} = useGetActors(props.type, props.id);

  return (
    <DetailContentsStyle>
      <Title>{props.title}</Title>
      <Description content={props.overview} />
      <ScoreBox label={"회원점수"} value={props.score} width={50}></ScoreBox>
      <Tags label={"출연진"} list={actors?.slice(0, 3) || []} />
      <Tags label={"장르"} list={genresNameList.slice(0, 3)} />
    </DetailContentsStyle>
  );
};

export default DetailContents;
