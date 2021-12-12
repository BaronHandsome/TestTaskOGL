import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Container = styled.div`
  height: 100%;
`;

export const ContentContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 30px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3``;

export const StyledLabel = styled.label`
  display: block;
  width: 100%;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid ${colors.black};
  &:focus {
    outline: none;
  }
`;

export const CharactersLeft = styled.p`
  width: 100%;
  text-align: end;
`;
