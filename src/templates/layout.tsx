import React from 'react';

import TypeScriptBasics from '../quiz-components/typeScriptBasics'
import UserProfile from '../quiz-components/userProfile';
import Counter from '../quiz-components/counter';
import ClickHandler from '../quiz-components/clickHandler';
import ConditionalComponent from '../quiz-components/conditionalComponent';
import  { ThemeProvider, ThemeConsumer } from '../quiz-components/themeProvider'; 
import GenericList from '../quiz-components/genericList';
import ReadonlyArrayComponent from '../quiz-components/readonlyArrayComponen';
import TypeAliasComponent from '../quiz-components/typeAliasComponent';
import TupleComponent from '../quiz-components/tupleComponent';


const Layout: React.FC = () => {
    const basicsList = ['Variables', 'Interfaces', 'Functions', 'Generics'];
    const user = {
      name: 'John Doe',
      age: 25,
      hobbies: ['Reading', 'Coding', 'Traveling'],
    };
    const genericListItems = [
        1,
        'two',
        { prop1: 'value1', prop2: 42 },
        'four',
        { prop1: 'value2', prop2: 55 },
      ];
    const readonlyArrayItems: readonly string[] = ['a', 'b', 'c'];
    const typeAliasInputData = { prop1: 'value1', prop2: 42 };
  
    return (
      <ThemeProvider theme="light">
        <div>
          <h1>React TypeScript Components</h1>
          <TypeScriptBasics basics={basicsList} />
          <UserProfile {...user} />
          <Counter />
          <ClickHandler />
          <ConditionalComponent message="This is a conditional message." />
          <ThemeConsumer />
          <GenericList items={genericListItems} />
          <ReadonlyArrayComponent items={readonlyArrayItems} />
          <TypeAliasComponent inputData={typeAliasInputData} />
          <TupleComponent />
        </div>
      </ThemeProvider>
    );
  };
  
  export default Layout;