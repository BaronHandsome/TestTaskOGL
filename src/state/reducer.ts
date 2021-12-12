import _ from 'lodash';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Create = 'CREATE_PRODUCT',
  SetProgress = 'SET_PROGRESS',
}

type ProductType = {
  id: number;
  name: string;
  isDone: boolean;
};

type ProductPayload = {
  [Types.Create]: {
    id: number;
    name: string;
    isDone: boolean;
  };
  [Types.SetProgress]: {
    id: number;
    name: string;
    isDone: boolean;
  };
};

export type Action = {
  type: string;
  payload: any;
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions,
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          isDone: action.payload.isDone,
        },
      ];
    case Types.SetProgress:
      return _.map(state, (item) => {
        if (item.id === action.payload.id) {
          return { ...item, isDone: !action.payload.isDone };
        }
        return item;
      });

    default:
      return state;
  }
};
