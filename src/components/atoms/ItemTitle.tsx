import styled from "@emotion/styled";
import {ChildrenProps} from "@/types/common";

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;

const ItemTitle = ({children}: ChildrenProps): React.ReactElement => {
  return <Title>{children}</Title>;
};

export default ItemTitle;
