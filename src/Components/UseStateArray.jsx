import { data } from './data';
import { useState } from 'react';
const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const item = people.filter((person) => person.id != id);
    setPeople(item);
  };
  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
            ;
          </div>
        );
      })}
      <button
        type="button"
        style={{ backgroundColor: 'grey' }}
        onClick={clearAll}
      >
        Clear Items
      </button>
      ;
    </div>
  );
};
export default UseStateArray;
