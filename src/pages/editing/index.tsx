import { useState } from 'react';

import { Layout } from '../../components/exports';
import { IItem } from '../../utils/typing';

import {
  Container,
  StyledLabel,
  StyledInput,
  ContentContainer,
  Title,
  CharactersLeft,
} from './style';

interface IProps {
  state: IItem[];
}

const initialValue = { name: '', isDone: false, id: 0 };

export const EditPage = ({ state }: IProps) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [lettersNumber, setLettersNumber] = useState(0);
  const lettersLimit = 20;

  const getInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLettersNumber(e.target.value.length);
    setInputValue({
      name: e.target.value,
      isDone: false,
      id: state.length + 1,
    });
  };

  return (
    <Layout page="editing" newItem={inputValue}>
      <Container>
        <ContentContainer>
          <Title>Add new list item</Title>
          <StyledLabel>
            <StyledInput
              onChange={(e) => getInputText(e)}
              type="text"
              maxLength={lettersLimit}
              id="editingInput"
            />
          </StyledLabel>
          <CharactersLeft>
            Characters left: {lettersLimit - lettersNumber}
          </CharactersLeft>
        </ContentContainer>
      </Container>
    </Layout>
  );
};
