import React from "react";
import styled from "@emotion/styled";
import {ButtonProps} from "@/types/ButtonType";

const LoginStyle = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #808080;
    border-color: transparent;
  }
`;

const Login = ({onClick}: ButtonProps): React.ReactElement => {
  return (
    <LoginStyle onClick={onClick} href={"#"}>
      LOGIN
    </LoginStyle>
  );
};

export default Login;
