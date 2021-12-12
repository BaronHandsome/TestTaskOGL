import _ from 'lodash';

import { Layout, BasketItem } from '../../components/exports';
import { IItem } from '../../utils/typing';
import { Container } from './style';

interface IProps {
  state: IItem[];
}

export const BasketPage = ({ state }: IProps) => {
  return (
    <Layout page="basket">
      <Container>
        {_.map(
          state,
          (item, index) =>
            !item.isDone && (
              <BasketItem
                key={`basketItem-${item?.name}-${index}`}
                item={item}
              />
            ),
        )}
      </Container>
    </Layout>
  );
};
