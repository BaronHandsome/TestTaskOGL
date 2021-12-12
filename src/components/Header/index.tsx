import { useContext } from 'react';

import {
  Container,
  Title,
  Editing,
  StyledNavLink,
  CancelButton,
  DoneButton,
} from './style';
import { IItem } from '../../utils/typing';
import { AppContext } from '../../state/context';
import { Types } from '../../state/reducer';
import { IMAGES } from '../../assets';

interface IProps {
  page: string;
  newItem?: IItem;
}

export const Header = ({ page, newItem }: IProps) => {
  const { dispatch } = useContext(AppContext);

  const getHeaderContent = (page: string) => {
    switch (page) {
      case 'basket':
        return (
          <Container>
            <div></div>
            <Title>Gloseries</Title>
            <StyledNavLink to="/editing">
              <Editing src={IMAGES.EDITING} />
            </StyledNavLink>
          </Container>
        );
      case 'allItems':
        return (
          <Container>
            <div></div>
            <Title>Gloseries</Title>
            <StyledNavLink to="/editing">
              <Editing src={IMAGES.EDITING} />
            </StyledNavLink>
          </Container>
        );
      case 'editing':
        return (
          <Container>
            <CancelButton>Cancel</CancelButton>
            <Title>Add new item</Title>
            <DoneButton
              onClick={() => {
                dispatch({
                  type: Types.Create,
                  payload: newItem,
                });
                //@ts-ignore
                document.getElementById('editingInput').value = '';
              }}
            >
              Done
            </DoneButton>
          </Container>
        );
    }
  };

  return <>{getHeaderContent(page)}</>;
};
