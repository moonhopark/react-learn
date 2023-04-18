import React, { useContext } from 'react';
import { CountContext } from './RootComponent';

const ComponentF = () => {
  const countContext = useContext(CountContext);
  const { countDispatch } = countContext;

  return (
    <div>
      ComponentF
      <button onClick={() => countDispatch('increment')}>Increment</button>
      <button onClick={() => countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
    </div>
  );
};

export default ComponentF;
