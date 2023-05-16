import {ReactElement, ReactNode} from "react";
import styled from "@emotion/styled";
import {ChildrenProps} from "@/types/common";

const DescriptionStyle = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  max-width: 400px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

const Description = ({children}: ChildrenProps): ReactElement => {
  return <DescriptionStyle>{children}</DescriptionStyle>;
};

export default Description;
