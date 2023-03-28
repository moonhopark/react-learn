import { useCallback, useState, useTransition } from 'react';

const UseTransition = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [result, setResult] = useState('');
  const [loading, startTransition] = useTransition();

  const handleChange = useCallback((e) => {
    startTransition(() => {
      setName(e.target.value);
      setResult(e.target.value + '의 결과');
    });
  }, []);

  console.log('render', name);

  return (
    <div>
      <input value={name} onChange={handleChange} />
      {name
        ? Array(1000)
            .fill()
            .map((v, i) => <div key={i}>{result}</div>)
        : null}
    </div>
  );
};

export default UseTransition;
