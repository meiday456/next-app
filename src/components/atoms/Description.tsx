import {ReactElement} from "react";
import styled from "@emotion/styled";
import {MQ} from "@/constants/common";
import {truncateStr} from "@/utils/CommonUtils";

interface Props {
  content: string;
}

const DescriptionStyle = styled.p`
  width: 45rem;
  max-width: 100%;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  word-break: keep-all;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;

  ${MQ[3]} {
    width: 60rem;
  }
  ${MQ[2]} {
    width: 45rem;
  }
  ${MQ[1]} {
    width: 35rem;
  }
`;

const Description = (props: Props): ReactElement => {
  return <DescriptionStyle>{truncateStr(props.content, 100)}</DescriptionStyle>;
};

export default Description;
