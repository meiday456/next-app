import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Logo from "@/components/atoms/Logo";
import Login from "@/components/atoms/Login";

const NavigationStyle = styled.nav<{show: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4.3rem;
  background-color: ${props => (props.show ? "#090b13" : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
interface Props {
  show: boolean;
}

const Navigation = (): React.ReactElement => {
  const [show, setShow] = useState(false);

  const handleScrollY = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  return (
    <NavigationStyle show={show}>
      <Logo onClick={() => {}} />
      <Login onClick={() => {}}></Login>
      {/*<UserInfo></UserInfo>*/}
    </NavigationStyle>
  );
};

export default Navigation;
