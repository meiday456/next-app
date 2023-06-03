export const DEFAULT_TIME_ZONE = "Asia/Seoul";
export const DEFAULT_REGION = "KR";

export const BREAK_POINTS = [600, 864, 1200, 1800];
export const MQ = BREAK_POINTS.map(bp => `@media(max-width: ${bp}px)`);
