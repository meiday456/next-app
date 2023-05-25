import styled from "@emotion/styled";
import {CommonBtnStyle} from "@/styles/sty/BtnSty";
import {ReactElement, ReactNode} from "react";
import {ButtonProps} from "@/types/ButtonType";

const BtnStyle = styled.button`
  ${CommonBtnStyle};
  background-color: #fff;
  color: #000;
`;

interface Props extends ButtonProps {
  children: ReactNode;
}

const Button = ({children, onClick}: Props): ReactElement => {
  return <BtnStyle onClick={onClick}>{children}</BtnStyle>;
};

export default Button;
