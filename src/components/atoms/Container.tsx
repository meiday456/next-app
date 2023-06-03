import React, {ReactElement} from "react";
import styled from "@emotion/styled";
import {MQ} from "@/constants/common";
import {ChildrenProps} from "@/types/common";

interface Props extends Partial<ChildrenProps> {
  bgImg: string;
}

const ContainerStyle = styled.main<{bgImg: string}>`
  position: relative;
  padding: 0 10px;

  &::after {
    background: url(${({bgImg}) => bgImg}) center center / cover no-repeat;
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

const Container = ({children, bgImg}: Props): ReactElement => {
  return <ContainerStyle bgImg={bgImg}>{children}</ContainerStyle>;
};

export default Container;
