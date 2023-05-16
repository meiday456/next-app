import styled from "@emotion/styled";
import Image from "next/image";
import {CommonResult} from "@/types/data/CommonType";
import urls from "@/utils/Urls";

const ItemStyle = styled.div`
  width: 100%;
  height: 25vh;
  border-radius: 7px;
  overflow: hidden;

  & .image {
    position: relative !important;
  }
`;

interface Props extends CommonResult {
  title?: string;
  name?: string;
}
const Item = (props: Props): React.ReactElement => {
  return (
    <ItemStyle>
      <Image
        src={urls.common.image(props.backdrop_path ?? "")}
        alt={`${props.title || props.name || "대체이미지"}`}
        fill={true}
        className={"image"}
      ></Image>
    </ItemStyle>
  );
};

export default Item;
