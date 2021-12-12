import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { sizes } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Container = styled.div`
  @media (max-width: ${sizes.S}) {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    background-color: ${colors.divider};
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid ${colors.inputGrey};
  }
`;

export const AllItemsIcon = styled.img`
  width: 30px;
  height: 30px;
  transition: 500ms;
`;

export const ShopListIcon = styled.img`
  width: 30px;
  height: 30px;
  transition: 500ms;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    ${ShopListIcon} {
      transform: scale(1.2);
    }
    ${AllItemsIcon} {
      transform: scale(1.2);
    }
  }
`;
