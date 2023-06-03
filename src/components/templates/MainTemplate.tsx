import Container from "@/components/atoms/Container";
import Banner from "@/components/organisms/Banner";
import ContentsContainer from "@/components/organisms/ContentsContainer";

const MainTemplate = () => {
  return (
    <>
      <Container bgImg={"/images/home-background.png"}>
        <Banner></Banner>
        <ContentsContainer></ContentsContainer>
      </Container>
    </>
  );
};

export default MainTemplate;
