import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
    justify-content: space-between;
    border-bottom: 1px solid ${colors.inputGrey};
  }
`;

export const Title = styled.span`
  color: ${colors.black};
`;

export const Editing = styled.img`
  width: 30px;
  height: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    ${Editing} {
      transform: scale(1.2);
    }
  }
`;

export const CancelButton = styled.div``;

export const DoneButton = styled.div``;
