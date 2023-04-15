import styled from "@emotion/styled";
import Banner from "@/component/organisms/Banner";

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const MainTemplate = () => {
  return (
    <Container>
      <Banner></Banner>
    </Container>
  );
};

export default MainTemplate;
