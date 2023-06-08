import {waitFor} from "@testing-library/react";

import movieFixture from "$/fixture/movie/detail.json";
import {MovieDetail} from "@/types/data/MovieType";
import {renderWithProvider} from "$/tests/testUtils";
import DetailPage, {getServerSideProps} from "$/pages/detail/[id]";
import {GetServerSidePropsContext} from "next";
import {ParsedUrlQuery} from "querystring";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({children}: {children: React.ReactElement[]}) => {
      return <>{children}</>;
    },
  };
});
describe("detail [id] page", () => {
  context("title이 주어졌을때", () => {
    it("title 이 정상 출력된다.", async () => {
      renderWithProvider(<DetailPage info={movieFixture as MovieDetail} type={"MOVIE"}></DetailPage>);

      const title = `${movieFixture.title} | Meiday`;

      await waitFor(() => expect(document.title).toBe(title));
    });
  });
  context("title이 없을때", () => {
    it("title은 detail | Meiday 가 정상 출력된다.", async () => {
      movieFixture.title = "";
      renderWithProvider(<DetailPage info={movieFixture as MovieDetail} type={"MOVIE"}></DetailPage>);

      const title = `detail | Meiday`;

      await waitFor(() => expect(document.title).toBe(title));
    });
  });

  describe("getServerSideProps", () => {
    const ctx = (id: string) => ({
      params: {
        id,
      } as ParsedUrlQuery,
    });

    context("id가 M667538 일때", () => {
      it("movie 정보가 반환되는가?", async () => {
        const serverProps = (await getServerSideProps(ctx("M667538") as GetServerSidePropsContext<{id: string}>)) as {
          props: {type: string; info: object};
        };

        const type = serverProps.props.type;
        const info = serverProps.props.info;

        expect(type).toBe("MOVIE");
        expect(info).toHaveProperty("title");
      });
    });
    context("id가 P125988 일때", () => {
      it("TV 정보가 반환되는가?", async () => {
        const serverProps = (await getServerSideProps(ctx("P125988") as GetServerSidePropsContext<{id: string}>)) as {
          props: {type: string; info: object};
        };

        const type = serverProps.props.type;
        const info = serverProps.props.info;

        expect(type).toBe("TV");
        expect(info).toHaveProperty("name");
      });
    });
  });
});
