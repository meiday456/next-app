export function getItemImgWPath(width: number, type: "banner" | "content" = "content") {
  let w = "w500";
  if (type === "banner") {
    return "original";
  }
  if (0 <= width && width <= 600) {
    w = "w200";
  } else if (601 <= width && width <= 1000) {
    w = "w300";
  } else if (1001 <= width && width <= 1400) {
    w = "w400";
  } else {
    w = "w500";
  }
  return w;
}
