import styled from "@emotion/styled";
import ItemTitle from "@/components/atoms/ItemTitle";

const ListTitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-bottom: 0.7rem;
`;

interface Props {
  title: string;
}

const ListTitle = ({title}: Props): React.ReactElement => {
  return (
    <ListTitleStyle>
      <ItemTitle>{title}</ItemTitle>
    </ListTitleStyle>
  );
};
export default ListTitle;
