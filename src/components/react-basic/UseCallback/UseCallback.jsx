import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const UseCallback = () => {
  const [age, setAge] = useState(26);
  const [salary, setSalary] = useState(5000);

  const handleIncrementAge = () => {
    setAge(age + 1);
  };

  const handleIncrementSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={handleIncrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={handleIncrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default UseCallback;
