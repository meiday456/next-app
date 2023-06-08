import React from "react";
import Head from "next/head";
import type {GetServerSideProps, InferGetServerSidePropsType} from "next";

import {TvDetail} from "@/types/data/TvType";
import {MovieDetail} from "@/types/data/MovieType";
import {getDetailMovie} from "@/hooks/query/apis/movie";
import {getDetailTv} from "@/hooks/query/apis/tv";
import {ContentType} from "@/types/data/CommonType";
import {CONTENT_TYPE} from "@/constants/content";
import DetailTemplate from "@/components/templates/DetailTemplate";

interface Props {
  type: ContentType;
  info: TvDetail | MovieDetail;
}

const DetailPage = ({type, info}: InferGetServerSidePropsType<typeof getServerSideProps>): React.ReactElement => {
  const title = `${info.name || info.title || "detail"} | Meiday`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <DetailTemplate type={type} info={info} />
    </>
  );
};

export default DetailPage;

export const getServerSideProps: GetServerSideProps<Props, {id: string}> = async context => {
  const fullId = context.params!.id;

  const idPrefix = fullId.at(0);
  const id = +fullId.slice(1, fullId.length);

  let response;
  let type: ContentType;

  if (idPrefix === "P") {
    //tv program
    type = CONTENT_TYPE.P;
    response = await getDetailTv(id);
  } else {
    //movie
    type = CONTENT_TYPE.M;
    response = await getDetailMovie(id);
  }

  return {
    props: {
      type,
      info: response,
    },
  };
};
