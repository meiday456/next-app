import styled from "@emotion/styled";
import Image from "next/image";
import {CommonResult} from "@/types/data/CommonType";
import urls from "@/utils/Urls";
import {ImageLoaderProps} from "next/dist/shared/lib/image-config";

const ItemStyle = styled.div`
  position: relative;
  width: 100%;
  height: 25vh;
  border-radius: 7px;
  overflow: hidden;
  object-fit: contain;

  & .image {
    position: relative !important;
  }
`;

interface Props extends CommonResult {
  title?: string;
  name?: string;
}
const Item = (props: Props): React.ReactElement => {
  const imageLoader = ({src, width, quality}: ImageLoaderProps) => {
    return `${urls.common.image(src, "content", width)}?w=${width}&q=${quality || 75}`;
  };

  return (
    <ItemStyle>
      <Image
        src={props.poster_path!}
        alt={`${props.title || props.name || "대체이미지"}`}
        fill={true}
        priority={true}
        loader={imageLoader}
        // placeholder={"blur"}
        sizes="(max-width: 600) 200px,
                (max-width: 1000px) 300px,
                (max-width: 1400px) 400px,
                (max-width: 2000px) 500px, 100vw"
        className={"image"}
      ></Image>
    </ItemStyle>
  );
};

export default Item;
