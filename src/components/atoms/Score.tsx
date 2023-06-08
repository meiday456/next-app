import {ReactElement, useMemo} from "react";
import styled from "@emotion/styled";

interface Props {
  value: number;
  width: number;
  height?: number;
}

const ScoreStyle = styled.div<Props & {color: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  border-radius: 50%;
  background: radial-gradient(closest-side, #040714 79%, transparent 80% 100%),
    conic-gradient(var(${({color}) => "--color-" + color}) ${props => props.value}%, #c7e1f3 0);

  &::before {
    content: "${props => props.value}%";
  }

  progress {
    visibility: hidden;
    height: 0;
    width: 0;
  }
`;

const Score = ({value, width, height}: Props): ReactElement => {
  if (width !== height && height === 100) {
    height = +width;
  }
  const getColor = (value: number) => {
    return value <= 30 ? "red" : value <= 50 ? "yellow" : "green";
  };
  const color = useMemo(() => getColor(value), [value]);

  return (
    <ScoreStyle value={value} width={width} height={height} color={color} role={"progressbar"}>
      <progress value={value} max="100">
        {value}%
      </progress>
    </ScoreStyle>
  );
};

Score.defaultProps = {
  value: 0,
  width: 100,
  height: 100,
};

export default Score;
