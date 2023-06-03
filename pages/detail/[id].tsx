import React from "react";
import type {GetServerSideProps, InferGetServerSidePropsType} from "next";

import {TvDetail} from "@/types/data/TvType";
import {MovieDetail} from "@/types/data/MovieType";
import {getDetailMovie} from "@/hooks/query/apis/movie";
import {getDetailTv} from "@/hooks/query/apis/tv";
import {ContentType} from "@/types/data/CommonType";
import {CONTENT_TYPE} from "@/constants/content";

interface Props {
  type: ContentType;
  info: TvDetail | MovieDetail;
}

const DetailPage = ({type, info}: InferGetServerSidePropsType<typeof getServerSideProps>): React.ReactElement => {
  return <div>detail page</div>;
};

export default DetailPage;

export const getServerSideProps: GetServerSideProps<Props, {id: string}> = async context => {
  const id = context.params!.id;
  let response;
  let type: ContentType;
  if (id.startsWith(CONTENT_TYPE.TV)) {
    //tv program
    type = CONTENT_TYPE.TV;
    response = await getDetailTv(+id);
  } else {
    //movie
    type = CONTENT_TYPE.MOVIE;
    response = await getDetailMovie(+id);
  }

  return {
    props: {
      type,
      info: response,
    },
  };
};
