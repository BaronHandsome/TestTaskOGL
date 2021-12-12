import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-bottom: 1px solid ${colors.inputGrey};
`;

export const ItemName = styled.span`
  color: ${colors.black};
`;
