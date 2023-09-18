import React from 'react';
import './App.css';

import Stylesheet from './components/react-basic/styles/Stylesheet';
import Inline from './components/react-basic/styles/Inline';
import CSSModule from './components/react-basic/styles/CSSModule';

const App = () => {
  return (
    <div className="App">
      <Stylesheet primary={true} />
      <Inline />
      <CSSModule />
    </div>
  );
};

export default App;
