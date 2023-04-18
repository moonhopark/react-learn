import React, { useContext } from 'react';
import { CountContext } from './RootComponent';

const ComponentA = () => {
  const countContext = useContext(CountContext);
  const { countState, countDispatch } = countContext;

  return (
    <div>
      ComponentA - {countState}
      <button onClick={() => countDispatch('increment')}>Increment</button>
      <button onClick={() => countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
    </div>
  );
};

export default ComponentA;
