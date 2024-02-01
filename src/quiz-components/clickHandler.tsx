
import React from 'react';

function ClickHandler() {
  const [message, setMessage] = React.useState<string>('');

  const handleClick = (e: React.MouseEvent) => {
    setMessage('Button Clicked!');
  };

  return (
    <div>
      <h2>Click Handler</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ClickHandler;