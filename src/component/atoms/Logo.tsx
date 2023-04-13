import React from "react";
import styled from "@emotion/styled";
import {ButtonProps} from "@/types/ButtonType";

const LogoStyle = styled.a`
  padding:0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  diplay: inline-block;

  img {
    display: block;
    width: 100%;
  }
`

const Logo = ({onClick}:ButtonProps):React.ReactElement=>{

    return <LogoStyle>
        <img
            alt="Disney Plus Logo"
            src="/images/logo.svg"
            onClick={onClick}
        />
    </LogoStyle>
}

export default Logo;