import MainTemplate from "@/components/templates/MainTemplate";
import React from "react";

const Main = (): React.ReactElement => {
  return <MainTemplate />;
};

export default Main;

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext,
// ) => {
//   const nowMovies = await getMovieNow();
//   console.log(nowMovies.results.length);
//   const index = Math.floor(Math.random() * nowMovies.results.length);
//
//   return {
//     props: {
//       nowPlayMovieId: index,
//     },
//   };
// };
