import { Body } from './components/exports';
import { AppProvider } from './state/context';

function App() {
  return (
    <AppProvider>
      <Body />
    </AppProvider>
  );
}

export default App;
