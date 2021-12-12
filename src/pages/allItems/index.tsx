import _ from 'lodash';

import { IItem } from '../../utils/typing';
import { Layout, Item } from '../../components/exports';
import { Container } from './style';

interface IProps {
  state: IItem[];
}

export const AllItemsPage = ({ state }: IProps) => {
  return (
    <Layout page="allItems">
      <Container>
        {_.map(state, (item, index) => (
          <Item key={`item-${item.name}-${index}`} item={item} />
        ))}
      </Container>
    </Layout>
  );
};
