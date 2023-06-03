import {css} from "@emotion/react";
import {BREAK_POINTS} from "@/constants/common";

const mq = BREAK_POINTS.map(bp => `@media(max-width: ${bp}px)`);

export const CommonBtnStyle = css`
  justify-content: start;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.4rem 1rem;

  &:hover {
    color: #000;
    background-color: rgba(170, 170, 170, 0.9);
    transition: all 0.2s;
  }

  ${mq[0]} {
    padding: 0.2rem 0.5rem;
  }
`;
