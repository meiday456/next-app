import styled from "@emotion/styled";
import {ReactElement} from "react";

const FadeStyle = styled.div<Props>`
  height: ${props => props.height}rem;
  position: relative;
  z-index: 2;
  background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
`;

interface Props {
  height: number;
}

const FadeArea = ({height}: Props): ReactElement => {
  return <FadeStyle height={height} role={"presentation"} aria-hidden />;
};

FadeArea.defaultProps = {
  height: 1,
};

export default FadeArea;
