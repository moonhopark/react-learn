import React, { createContext, useReducer } from 'react';
import './App.css';

import ComponentA from './components/react-basic/UseReducerUseContext/ComponentA';
import ComponentB from './components/react-basic/UseReducerUseContext/ComponentB';
import ComponentC from './components/react-basic/UseReducerUseContext/ComponentC';

export const CountContext = createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        Count = {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
};

export default App;
