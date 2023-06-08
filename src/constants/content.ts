import {ContentType} from "@/types/data/CommonType";

export const CONTENT_TYPE: {
  [key in "M" | "P"]: ContentType;
} = {
  M: "MOVIE",
  P: "TV",
};
