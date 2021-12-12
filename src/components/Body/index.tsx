import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { BasketPage, AllItemsPage, EditPage } from '../exports';
import { AppContext } from '../../state/context';

import { Container } from './style';

export const Body = () => {
  const { state } = useContext(AppContext);

  return (
    <Container>
      <Routes>
        <Route
          path={'/basket'}
          element={<BasketPage state={state.products} />}
        />
        <Route
          path={'/allItems'}
          element={<AllItemsPage state={state.products} />}
        />
        <Route path={'/'} element={<AllItemsPage state={state.products} />} />
        <Route
          path={'/editing'}
          element={<EditPage state={state.products} />}
        />
      </Routes>
    </Container>
  );
};
