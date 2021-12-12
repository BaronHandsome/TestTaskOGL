import { Container, AllItemsIcon, ShopListIcon, StyledNavLink } from './style';
import { IMAGES } from '../../assets';

export const Footer = () => {
  return (
    <Container>
      <StyledNavLink to="/allItems">
        <AllItemsIcon src={IMAGES.MENU} />
      </StyledNavLink>
      <StyledNavLink to="/basket">
        <ShopListIcon src={IMAGES.BASKET} />
      </StyledNavLink>
    </Container>
  );
};
