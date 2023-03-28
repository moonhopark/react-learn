import { useCallback, useDeferredValue, useMemo, useState } from 'react';

const UseDeferredValue = () => {
  const [name, setName] = useState('');
  const deferredName = useDeferredValue(name);
  const result = useMemo(() => deferredName + '의 결과', [deferredName]);

  const handleChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  console.log('render', deferredName);

  return (
    <div>
      <input value={name} onChange={handleChange} />
      {deferredName
        ? Array(1000)
            .fill()
            .map((v, i) => <div key={i}>{result}</div>)
        : null}
    </div>
  );
};

export default UseDeferredValue;
