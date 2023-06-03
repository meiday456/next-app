import React, {ReactElement} from "react";
import styled from "@emotion/styled";
import {MQ} from "@/constants/common";

const BannerStyle = styled.div`
  padding-top: 30%;

  ${MQ[0]} {
    padding-top: 40%;
  }
  ${MQ[1]} {
    padding-top: 40%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: -1rem;
    right: -1rem;
    height: 5rem;
    background-image: linear-gradient(to top, #040714, rgba(0, 0, 0, 0));
  }
`;
const DetailBanner = (): ReactElement => {
  return <BannerStyle></BannerStyle>;
};

export default DetailBanner;
