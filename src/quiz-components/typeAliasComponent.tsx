import React from 'react';

type InputType = string | number | { prop1: string; prop2: number };

interface TypeAliasProps {
  inputData: InputType;
}

const TypeAliasComponent: React.FC<TypeAliasProps> = ({ inputData }) => {
  return (
    <div>
      <h2>Type Alias and Union Types</h2>
      {typeof inputData === 'object' && !Array.isArray(inputData) ? (
        <div>
          {Object.entries(inputData).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      ) : (
        <p>Input Data: {inputData}</p>
      )}
    </div>
  );
};

export default TypeAliasComponent;