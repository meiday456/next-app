import React, {ReactElement} from "react";
import styled from "@emotion/styled";
import {MQ} from "@/constants/common";
import {ChildrenProps} from "@/types/common";

type Props = Partial<ChildrenProps>;

const ContainerStyle = styled.main`
  position: relative;
  padding: 0 10px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }

  ${MQ[0]} {
    padding: 0;
  }
`;

const Container = ({children}: Props): ReactElement => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
