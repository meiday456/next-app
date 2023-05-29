import {wrapper} from "../../testUtils";
import {renderHook, waitFor} from "@testing-library/react";
import {useCommonTrending} from "@/hooks/query/queries/commonQueries";

describe("commonQueries", () => {
  describe("useCommonTrending", () => {
    context("tw 가 week 일때", () => {
      it("정상 호출 되는가?", async () => {
        const view = renderHook(() => useCommonTrending(), {wrapper});
        await waitFor(() => {
          expect(view.result.current.isSuccess).toBe(true);
        });
      });
    });
  });
});
