import {ReactElement} from "react";
import styled from "@emotion/styled";
import Tag from "@/components/atoms/Tag";
import {getRandomKey} from "@/utils/CommonUtils";

interface Props {
  label: string;
  list: string[];
}

const TagLabelStyle = styled.span(props => ({
  color: props.theme.colors.white50,
  fontSize: "14px",
}));
const Tags = (props: Props): ReactElement => {
  return (
    <>
      <TagLabelStyle>{props.label} : </TagLabelStyle>
      {props.list.map((content, index) => {
        return (
          <Tag key={getRandomKey("Tag")}>
            {content}
            {index !== props.list.length - 1 ? "," : ""}
          </Tag>
        );
      })}
    </>
  );
};

export default Tags;
