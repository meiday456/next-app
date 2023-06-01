import {renderHook, waitFor} from "@testing-library/react";

import {wrapper} from "../../testUtils";
import {useMovieDetail, useMovieDetailVideos, useMovieNowContents} from "@/hooks/query/queries/movieQueries";
import {UseQueryOptions} from "@tanstack/react-query";
import {Now, Video} from "@/types/data/MovieType";
import {AxiosError} from "axios";

describe("movieQueries", () => {
  describe("useMovieNowContents", () => {
    const executeQuery = (
      options: UseQueryOptions<Now, AxiosError> = {},
      onSuccess: (data: Now) => void = () => {},
    ) => {
      return {
        ...renderHook(() => useMovieNowContents(options, onSuccess), {wrapper}),
      };
    };
    context("파라미터 없이 호출 시", () => {
      it("정상 호출이 된다", async () => {
        const {result} = executeQuery();
        await waitFor(() => {
          expect(result.current.isSuccess).toBe(true);
        });
      });
    });
    context("onSuccess가 할당되었을때", () => {
      it("정상 호출되고, onSuccess를 수행된다.", async () => {
        const onSuccess = jest.fn();
        executeQuery({}, (data: Now) => {
          onSuccess();
        });
        await waitFor(() => {
          expect(onSuccess).toHaveBeenCalledTimes(1);
        });
      });
    });
  });

  describe("useMovieDetail", () => {
    const executeQuery = (id: number) => {
      return {
        ...renderHook(() => useMovieDetail(id), {wrapper}),
      };
    };

    context("id가 333339가 할당되었을때", () => {
      it("333339 의 detail 정보가 반환된다.", async () => {
        const {result} = executeQuery(333339);

        await waitFor(() => {
          const id = result.current.data?.id;
          expect(id).toBe(333339);
        });
      });
    });
  });

  describe("useMovieDetailVideos", () => {
    const executeQuery = (id: number, options: UseQueryOptions<Video, AxiosError> = {}) => {
      return {
        ...renderHook(() => useMovieDetailVideos(id, options), {wrapper}),
      };
    };

    context("id가 333339가 할당되었을때", () => {
      it("333339 의 videos 정보가 반환된다.", async () => {
        const {result} = executeQuery(333339);

        await waitFor(() => {
          const id = result.current.data?.id;
          expect(id).toBe(333339);
        });
      });
    });
  });
});
