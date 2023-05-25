import styled from "@emotion/styled";
import Banner from "@/components/organisms/Banner";
import ContentsContainer from "@/components/organisms/ContentsContainer";

const Container = styled.main`
  position: relative;

  /* top: 4.3rem; */

  &::after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

const MainTemplate = () => {
  return (
    <>
      <Container>
        <Banner></Banner>
        <ContentsContainer></ContentsContainer>
      </Container>
    </>
  );
};

export default MainTemplate;
