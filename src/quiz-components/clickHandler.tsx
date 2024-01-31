
import React, { useState } from 'react';

const ClickHandler: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleClick = () => {
    setMessage('Button Clicked!');
  };

  return (
    <div>
      <h2>Event Handling</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ClickHandler;