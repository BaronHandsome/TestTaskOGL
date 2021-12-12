import { createContext, useReducer } from 'react';

import { productReducer, ProductActions } from './reducer';

export type ProductType = {
  id: number;
  name: string;
  isDone: boolean;
};

export type InitialStateType = {
  products: ProductType[];
};

let itemsList = [
  {
    id: 1,
    name: 'Milk',
    isDone: true,
  },
  {
    id: 2,
    name: 'Eggs Medium 12 pack',
    isDone: false,
  },
  {
    id: 3,
    name: 'Fresh Brasil',
    isDone: true,
  },
  {
    id: 4,
    name: 'Wholegrain Bread 1pkg',
    isDone: false,
  },
  {
    id: 5,
    name: 'Ground Cofee 200g',
    isDone: false,
  },
  {
    id: 6,
    name: 'Red Wine',
    isDone: true,
  },
  {
    id: 7,
    name: 'Mozzarella Cheese 150g',
    isDone: true,
  },
  {
    id: 8,
    name: 'Orange Juice 1l',
    isDone: false,
  },
  {
    id: 9,
    name: 'Tomatoes',
    isDone: true,
  },
];

const initialState = {
  products: itemsList,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { products }: InitialStateType,
  action: ProductActions,
) => ({
  products: productReducer(products, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
