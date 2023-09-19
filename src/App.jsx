import React from 'react';
import './App.css';

import UseCallback from './components/react-basic/UseCallback/UseCallback';
import UseCallbackOptimized from './components/react-basic/UseCallbackOptimized/UseCallbackOptimized';

const App = () => {
  return (
    <div className="App">
      {/* <UseCallback /> */}
      <UseCallbackOptimized />
    </div>
  );
};

export default App;
