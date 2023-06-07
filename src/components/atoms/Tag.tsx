import {ReactElement} from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import {ChildrenProps} from "@/types/common";

const TagStyle = styled(Link)`
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Tag = (props: ChildrenProps): ReactElement => {
  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <TagStyle href={"#"} onClick={clickHandler}>
      {props.children}
    </TagStyle>
  );
};

export default Tag;
