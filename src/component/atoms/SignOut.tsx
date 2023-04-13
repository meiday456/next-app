import styled from "@emotion/styled";
import React from "react";
import {ButtonProps} from "@/types/ButtonType";


const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius:  4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100%;
  opacity: 0;
`;

const SignOut = ({onClick}:ButtonProps):React.ReactElement=>{
    return (<DropDown>
            <span onClick={onClick}>Sign Out</span>
    </DropDown>)
}

export default SignOut