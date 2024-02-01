import React from 'react';

interface BasicsProps {
  basics: string[];
}

const TypeScriptBasics: React.FC<BasicsProps> = ({ basics }) => {
  return (
    <div>
      <h2>TypeScript Basics</h2>
      <ul>
        {basics.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// // Example usage:
// const App: React.FC = () => {
//   const basicsList = ['Variables', 'Interfaces', 'Functions', 'Generics'];
//   return <TypeScriptBasics basics={basicsList} />;
// };

export default TypeScriptBasics;