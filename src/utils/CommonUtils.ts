export function getItemImgWPath(width: number, type: "banner" | "content" = "content") {
  let w = "w500";
  if (type === "banner") {
    return "original";
  }
  if (0 <= width && width <= 1000) {
    w = "w300";
  } else if (1001 <= width && width <= 1400) {
    w = "w400";
  } else {
    w = "w500";
  }
  return w;
}

export const truncateStr = (str: string, n: number) => {
  return str.length > n ? str.substring(0, n) + "..." : str;
};
