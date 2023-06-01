import styled from "@emotion/styled";
import Image from "next/image";
import {CommonResult} from "@/types/data/CommonType";
import urls from "@/utils/Urls";
import {ImageLoaderProps} from "next/dist/shared/lib/image-config";
import Link from "next/link";

const ItemStyle = styled.div`
  position: relative;
  width: 100%;
  padding: 70% 0;
  border-radius: 7px;
  overflow: hidden;

  a {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    transform: translateY(-50%);
    z-index: 5;
  }

  .image {
    display: block;
    inset: 0;
    object-fit: cover;
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
      <Link href={"#"}></Link>
      <Image
        src={props.poster_path}
        alt={`${props.title || props.name || "대체이미지"}`}
        fill={true}
        loader={imageLoader}
        placeholder={"blur"}
        loading={"lazy"}
        blurDataURL={
          "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsaWm5AQAFZgJe6m0qkAAAAABJRU5ErkJggg=="
        }
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
