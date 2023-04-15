import styled from "@emotion/styled";
import {CommonBtnStyle} from "@/styles/sty/BtnSty";
import {ReactElement, ReactNode} from "react";
import {ButtonProps} from "@/types/ButtonType";

const PlayBtnStyle = styled.button`
  ${CommonBtnStyle};
  background-color: white;
  color: black;
`;

interface Props extends ButtonProps {
  children: ReactNode;
}

const Button = ({children, onClick}: Props): ReactElement => {
  return <PlayBtnStyle onClick={onClick}>{children}</PlayBtnStyle>;
};

export default Button;
