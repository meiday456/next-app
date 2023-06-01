import {getItemImgWPath} from "@/utils/CommonUtils";

describe("CommonUtils", () => {
  describe("getItemImgWPath", () => {
    context("width가 600 일때", () => {
      it("w300 을 반환한다.", () => {
        const path = getItemImgWPath(600);
        expect(path).toBe("w300");
      });
    });

    context("width가 1001 일때", () => {
      it("w400 을 반환한다.", () => {
        const path = getItemImgWPath(1001);
        expect(path).toBe("w400");
      });
    });

    context("width가 2000 일때", () => {
      it("w500 을 반환한다.", () => {
        const path = getItemImgWPath(2000);
        expect(path).toBe("w500");
      });
    });

    context("type이 banner 일때", () => {
      it("original 을 반환한다.", () => {
        const path = getItemImgWPath(600, "banner");
        expect(path).toBe("original");
      });
    });
  });
});
