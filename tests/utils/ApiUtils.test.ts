import {getNowMovie} from "@/hooks/query/apis/movie";
import {rest} from "msw";
import {server} from "@/mocks/server";
import Urls from "@/utils/Urls";
import ApiUtils from "@/utils/ApiUtils";
import {AxiosError} from "axios";

/*
  테스트 block에 따른 실행 순서가 존재함으로
  context내부가 아닌 it 내부에 테스트 코드를 작성하여야 독립적인 테스트가 가능하다.
 */
describe("Api utils", () => {
  context("response를 받지 못한 경우", () => {
    it("request error 를 반환한다.", async () => {
      let errorName = "";
      await ApiUtils.get("http://localhost:3000/empty").catch((error: AxiosError) => {
        if (error.request) {
          errorName = error.name;
        }
      });

      expect(errorName).not.toBe("");
    });
  });

  context("response 실패시", () => {
    it("Promise reject error", async () => {
      server.use(
        rest.get(`${Urls.common.base}${Urls.movie.now}`, (req, res, context) => {
          return res(context.status(500), context.json(`error`));
        }),
      );

      let body = "success";
      await getNowMovie().catch((error: AxiosError) => {
        body = error.response?.data as string;
      });
      expect(body).toBe("error");
    });
  });

  context("동작하지않는 API 호출시", () => {
    it("Promise reject error 를 반환한다.", async () => {
      let message = "";
      await ApiUtils.get("http://localhost:3000/api/empty_url").catch((error: Error) => {
        message = error.message;
      });
      expect(message).not.toBe("");
    });
  });
});
