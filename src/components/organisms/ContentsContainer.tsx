import ItemList from "@/components/molecules/item/ItemList";
import styled from "@emotion/styled";

const Container = styled.section`
  padding: 0 2.3vw;
`;

const ContentsContainer = (): React.ReactElement => {
  return (
    <Container>
      <ItemList></ItemList>
      <ItemList></ItemList>
      <ItemList></ItemList>
      <ItemList></ItemList>
      <ItemList></ItemList>
    </Container>
  );
};
export default ContentsContainer;
