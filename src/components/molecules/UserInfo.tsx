import React from "react";
import styled from "@emotion/styled";

const UserInfoStyle = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const UserInfo = (): React.ReactElement => {
  return <UserInfoStyle></UserInfoStyle>;
};

export default UserInfo;
