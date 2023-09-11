import React from 'react';

const Destructuring = ({ firstName, lastName }) => {
  return (
    <div>
      <h1>
        Hello {firstName} {lastName}
      </h1>
    </div>
  );
};

export default Destructuring;
