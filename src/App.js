import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import Store from './utils/Store';

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Head/>
        <Body/>
      </div>
    </Provider>
  );
}

export default App;
