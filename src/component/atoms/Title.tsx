import {Children, ReactElement, ReactNode} from "react";
import styled from "@emotion/styled";

const TitleStyle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.5rem;
`
interface Props {
    children : ReactNode
}

const Title = ({children}:Props):ReactElement=>{
    return (
        <TitleStyle>{children}</TitleStyle>
    )
}



export default Title;