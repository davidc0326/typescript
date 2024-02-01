import React from 'react';

interface GenericListProps<T> {
  items: T[];
}

const GenericList: React.FC<GenericListProps<any>> = ({ items }) => {
  return (
    <div>
      <h2>Generic List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {typeof item === 'object' && item !== null ? (
              <div>
                {Object.entries(item).map(([key, value]) => (
                  <p key={key}>{`${key}: ${value}`}</p>
                ))}
              </div>
            ) : (
              <span key={index}>{item.toString()}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenericList;