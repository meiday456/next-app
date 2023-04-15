import styled from "@emotion/styled";
import React from "react";

const UserImgStyle = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const UserImg = (): React.ReactElement => {
  return <UserImgStyle />;
};

export default UserImg;
