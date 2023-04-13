import React, { useEffect, useState } from 'react';

const UseEffectIncorrectDependency = () => {
  const [count, setCount] = useState(0);

  // 방법 1
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const tick = () => {
    setCount(count + 1);
  };

  // 방법 2
  //   useEffect(() => {
  //     const interval = setInterval(tick, 1000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  //   const tick = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  return <div>{count}</div>;
};

export default UseEffectIncorrectDependency;
