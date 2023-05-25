import React from "react";
import styled from "@emotion/styled";
import {ButtonProps} from "@/types/ButtonType";
import Image from "next/image";

const LogoStyle = styled.a<{width: number}>`
  position: relative;
  width: ${props => props.width}px;
  height: 100%;
  margin-top: 4px;
  max-height: 70px;
  padding: 0;
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
    <LogoStyle width={width} href={"#"}>
      <Image alt="Logo" src="/images/logo2.svg" onClick={onClick} fill />
    </LogoStyle>
  );
};

Logo.defaultProps = {
  width: 140,
};

export default Logo;
