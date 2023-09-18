import React from 'react';
import './App.css';

import InsertDelete from './components/react-basic/List/InsertDelete';
import Modify from './components/react-basic/List/Modify';

const App = () => {
  return (
    <div className="App">
      {/* <InsertDelete /> */}
      <Modify />
    </div>
  );
};

export default App;
