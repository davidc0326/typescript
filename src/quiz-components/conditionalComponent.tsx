import React from 'react';

interface ConditionalProps {
  message?: string;
}

function ConditionalComponent({ message }: ConditionalProps) {
  return (
    <div>
      <h2>Conditional Component</h2>
      {message && <p>{message}</p>}
      {!message && <p>No message available</p>}
    </div>
  );
}

export default ConditionalComponent;