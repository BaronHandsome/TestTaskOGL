import { Header, Footer } from '../exports';
import { Container } from './style';
import { IItem } from '../../utils/typing';

interface IProps {
  children?:
    | React.ReactElement
    | React.ReactElement[]
    | undefined[]
    | React.ReactNode[];
  page: string;
  newItem?: IItem;
}

export const Layout = ({ children, page, newItem }: IProps) => {
  return (
    <Container>
      <Header page={page} newItem={newItem} />
      {children}
      <Footer />
    </Container>
  );
};
