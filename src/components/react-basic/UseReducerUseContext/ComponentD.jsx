import React, { useContext } from 'react';
import { CountContext } from '../../../App';

const ComponentD = () => {
  const countContext = useContext(CountContext);
  const { countDispatch } = countContext;

  return (
    <div>
      ComponentD
      <button onClick={() => countDispatch('increment')}>Increment</button>
      <button onClick={() => countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
    </div>
  );
};

export default ComponentD;
