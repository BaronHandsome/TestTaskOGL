import { useContext } from 'react';
import { Container, ItemName, IconContainer, ProgressIcon } from './style';

import { IMAGES } from '../../assets';
import { IItem } from '../../utils/typing';
import { AppContext } from '../../state/context';
import { Types } from '../../state/reducer';

interface IProps {
  item: IItem;
}

export const Item = ({ item }: IProps) => {
  const { dispatch } = useContext(AppContext);
  return (
    <Container isDone={item.isDone}>
      <ItemName>{item.name}</ItemName>
      <IconContainer>
        <ProgressIcon
          src={item.isDone ? IMAGES.HOME : IMAGES.BASKET}
          onClick={() =>
            dispatch({
              type: Types.SetProgress,
              payload: item,
            })
          }
        />
      </IconContainer>
    </Container>
  );
};
