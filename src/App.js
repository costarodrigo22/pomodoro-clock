import React,{useState, createContext} from 'react';

import GlobalStyles from './assets/styles/Global';
import Page from './components/Page';

export const ModeContext = createContext('break');

function App() {
  const [mode, setMode] = useState('break');

  

  return (
    <ModeContext.Provider value={{ mode : mode, setMode: setMode}}>
      <GlobalStyles />
      <Page />
    </ModeContext.Provider>
  );
}

export default App;
