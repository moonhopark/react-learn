import { useState, useLayoutEffect } from 'react';

const UseLayoutEffect = () => {
  const [name, setName] = useState('');

  useLayoutEffect(() => {
    setName('박문호');
  }, []);

  return (
    <div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
      <div>안녕하세요. {name}입니다.</div>
    </div>
  );
};

export default UseLayoutEffect;
