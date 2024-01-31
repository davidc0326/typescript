import React from 'react';

interface ConditionalProps {
  message?: string;
}

const ConditionalComponent: React.FC<ConditionalProps> = ({ message }) => {
  return (
    <div>
      <h2>Conditional Rendering</h2>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ConditionalComponent;