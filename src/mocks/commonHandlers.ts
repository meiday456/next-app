import {rest} from "msw";
import contents from "$/fixture/common/contents.json";
export const commonHandlers = [
  rest.get(`/api/contents`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(contents));
  }),
];
