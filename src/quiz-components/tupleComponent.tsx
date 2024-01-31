import React, { useState } from 'react';

const TupleComponent: React.FC = () => {
  const [state, setState] = useState<[boolean, string]>([false, '']);

  const handleClick = () => {
    setState([true, 'Clicked!']);
  };

  return (
    <div>
      <h2>Tuple and Type Assertion</h2>
      <p>State: {state[0] ? state[1] : 'Not Clicked'}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default TupleComponent;