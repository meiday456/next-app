import {ReactElement} from "react";
import styled from "@emotion/styled";
import {truncateStr} from "@/utils/CommonUtils";

interface Props {
  content: string;
}

const DescriptionStyle = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  max-width: 400px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

const Description = (props: Props): ReactElement => {
  return <DescriptionStyle>{truncateStr(props.content, 50)}</DescriptionStyle>;
};

export default Description;
