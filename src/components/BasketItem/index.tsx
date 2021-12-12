import { Container, ItemName } from './style';
import { IItem } from '../../utils/typing';

interface IProps {
  item: IItem;
}

export const BasketItem = ({ item }: IProps) => {
  return (
    <Container>
      <ItemName>{item.name}</ItemName>
    </Container>
  );
};
