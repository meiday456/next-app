import {ReactElement} from "react";
import styled from "@emotion/styled";
import Title from "@/component/atoms/Title";
import BannerBtns from "@/component/molecules/BannerBtns";
import Description from "@/component/atoms/Description";

const BannerContentsStyle = styled.div`
  margin-left: 40px;
  padding-top: 140px;
  height: 190px;
`

const BannerContents = ():ReactElement=>{
    return (
        <BannerContentsStyle>
            <Title>타이틀</Title>
            <BannerBtns></BannerBtns>
            <Description>설명</Description>
        </BannerContentsStyle>
    )
}
export default BannerContents;