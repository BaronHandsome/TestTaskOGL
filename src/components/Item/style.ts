import styled from 'styled-components';

import { colors } from '../../utils/colors';

type ItemProps = {
  isDone: boolean;
};

export const Container = styled.div<ItemProps>`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ isDone }) => (isDone ? 'row' : 'row-reverse')};
  padding: ${({ isDone }) => (isDone ? '0 0 0 20px' : '0 20px 0 0')};
  border-bottom: 1px solid ${colors.inputGrey};
`;

export const ItemName = styled.span`
  color: ${colors.black};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50px;
  background-color: ${colors.divider};
`;

export const ProgressIcon = styled.img`
  height: 30px;
  width: 30px;
`;
