import React from "react";
import styled from "@emotion/styled";
import {ButtonProps} from "@/types/ButtonType";

const LogoStyle = styled.a<{width: number}>`
  padding: 0;
  width: ${props => props.width}px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

interface Props extends ButtonProps {
  width: number;
}

const Logo = ({width, onClick}: Props): React.ReactElement => {
  return (
    <LogoStyle width={width}>
      <img alt="Disney Plus Logo" src="/images/logo.svg" onClick={onClick} />
    </LogoStyle>
  );
};

Logo.defaultProps = {
  width: 80,
};

export default Logo;
