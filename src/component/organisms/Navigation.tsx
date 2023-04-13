import React from "react";
import styled from "@emotion/styled";
import Logo from "@/component/atoms/Logo";
import Login from "@/component/atoms/Login";
import UserInfo from "@/component/molecules/UserInfo";


const NavigationStyle = styled.nav<{show:boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => props.show ? "#090b13" : "transparent"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`
interface Props {
    show: boolean
}


const Navigation = ({show}:Props):React.ReactElement=>{

    return (
    <NavigationStyle show={show}>
        <Logo onClick={()=>{}}/>
        <Login onClick={()=>{}}></Login>
        {/*<UserInfo></UserInfo>*/}
    </NavigationStyle>
    )
}
Navigation.defaultProps = {
    show: true
}

export default Navigation