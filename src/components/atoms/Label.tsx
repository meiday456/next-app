import {ReactElement} from "react";
import styled from "@emotion/styled";

interface Props {
  content: string;
}
const LabelStyle = styled.span(props => ({
  color: props.theme.colors.white50,
  fontSize: "14px",
  marginRight: "0.2vw",
}));
const Label = (props: Props): ReactElement => {
  return <LabelStyle>{props.content}</LabelStyle>;
};

export default Label;
