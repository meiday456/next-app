import {ReactElement} from "react";
import Tag from "@/components/atoms/Tag";
import {getRandomKey} from "@/utils/CommonUtils";
import Label from "@/components/atoms/Label";

interface Props {
  label: string;
  list: string[];
}

const Tags = (props: Props): ReactElement => {
  return (
    <>
      <Label content={`${props.label} :`} />
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
