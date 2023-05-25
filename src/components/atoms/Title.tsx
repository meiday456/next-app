import {ReactElement, ReactNode} from "react";
import styled from "@emotion/styled";

const TitleStyle = styled.h1`
  font-size: 5vw;
  font-weight: 800;
  padding-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;
interface Props {
  children: ReactNode;
}

const Title = ({children}: Props): ReactElement => {
  return <TitleStyle>{children}</TitleStyle>;
};

export default Title;
