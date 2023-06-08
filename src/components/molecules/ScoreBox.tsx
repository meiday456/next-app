import {ReactElement} from "react";
import styled from "@emotion/styled";
import Score from "@/components/atoms/Score";
import Label from "@/components/atoms/Label";

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

const ScoreBox = (props: Props): ReactElement => {
  return (
    <Container>
      <Label content={props.label} />
      <Score {...props} />
    </Container>
  );
};
export default ScoreBox;
