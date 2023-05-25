import MainTemplate from "@/components/templates/MainTemplate";
import React from "react";
import Head from "next/head";

const Main = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Meiday | Main</title>
      </Head>
      <MainTemplate />
    </>
  );
};

export default Main;
