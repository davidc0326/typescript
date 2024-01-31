import React from 'react';

interface ReadonlyArrayProps {
  items: readonly string[];
}

const ReadonlyArrayComponent: React.FC<ReadonlyArrayProps> = ({ items }) => {
  return (
    <div>
      <h2>Readonly Array Display</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReadonlyArrayComponent;