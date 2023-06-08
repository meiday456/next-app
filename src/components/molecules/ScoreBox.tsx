import {ReactElement} from "react";
import styled from "@emotion/styled";
import Score from "@/components/atoms/Score";

interface Props {
  label: string;
  value: number;
  width: number;
  height?: number;
}

const Container = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 0;
  right: 0;
`;
const Label = styled.span`
  margin-right: 0.2vw;
`;

const ScoreBox = (props: Props): ReactElement => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Score {...props} />
    </Container>
  );
};
export default ScoreBox;
