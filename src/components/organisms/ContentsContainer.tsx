import ItemList from "@/components/molecules/item/ItemList";
import styled from "@emotion/styled";
import {useContentsList} from "@/hooks/query/queries/commonQueries";

const Container = styled.section`
  padding: 0 2.3vw;
`;

const ContentsContainer = (): React.ReactElement => {
  //TODO 전체리스트를 가져와서 데이터를 표출

  const {data, isLoading, isError, isFetching} = useContentsList();

  return (
    <Container>
      {data &&
        data.map(con => {
          return <ItemList key={con.title} info={con}></ItemList>;
        })}
    </Container>
  );
};
export default ContentsContainer;
