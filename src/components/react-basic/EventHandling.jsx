import React from 'react';

const EventHandling = () => {
  const clickHandler = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <button onClick={clickHandler()}>Click</button>
    </div>
  );
};

export default EventHandling;
