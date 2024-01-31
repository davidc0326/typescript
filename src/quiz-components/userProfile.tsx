import React from 'react';

interface UserProfileProps {
  name: string;
  age: number;
  hobbies: string[];
}

const UserProfile: React.FC<UserProfileProps> = ({ name, age, hobbies }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Hobbies: {hobbies.join(', ')}</p>
    </div>
  );
};

// Example usage:
const App: React.FC = () => {
  const user = {
    name: 'John Doe',
    age: 25,
    hobbies: ['Reading', 'Coding', 'Traveling'],
  };
  return <UserProfile {...user} />;
};

export default UserProfile;