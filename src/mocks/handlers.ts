import {movieHandlers} from "@/mocks/movieHandlers";
import {commonHandlers} from "@/mocks/commonHandlers";
import {tvHandlers} from "@/mocks/tvHandlers";

export const handlers = [...movieHandlers, ...commonHandlers, ...tvHandlers];
