import { useState } from 'react';
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'Reading',
  });

  const changePerson = () => {
    setPerson({ name: 'Krishnam', age: 22, hobby: 'dancing and acting' });
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>Enjoys: {person.hobby}</h1>
      <button type="button" onClick={changePerson}>
        show john
      </button>
    </div>
  );
};

export default UseStateObject;
