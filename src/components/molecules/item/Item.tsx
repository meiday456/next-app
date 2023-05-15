import styled from "@emotion/styled";
import Image from "next/image";

const ItemStyle = styled.div`
  width: 100%;
  height: 25vh;
  border-radius: 7px;
  overflow: hidden;

  & .image {
    position: relative !important;
  }
`;

const Item = (): React.ReactElement => {
  return (
    <ItemStyle>
      <Image
        src={"https://image.tmdb.org/t/p/original/m321d503h4Ydnv6V2I5QTU96PCq.jpg"}
        alt={"대체 텍스트"}
        fill={true}
        className={"image"}
      ></Image>
    </ItemStyle>
  );
};

export default Item;
