import {ReactElement, ReactNode} from "react";
import styled from "@emotion/styled";

const DescriptionStyle = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  max-width: 400px;
  height: 80px;
`;

interface Props {
  children: ReactNode;
}

const Description = ({children}: Props): ReactElement => {
  return <DescriptionStyle>{children}</DescriptionStyle>;
};

export default Description;
