import { useState } from 'react';
import { DATA } from './data';
import './style.css';

export function BirthdayReminder() {
  const [people, setPeople] = useState(DATA);
  return (
    <div className='wrapper'>
      <h1>{people.length} Birthdays Today</h1>
      <ul>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <li key={id}>
              <img src={image} alt={name} />
              <div className='column-wrap'>
                <p className='name'>{name}</p>
                <p className='age'>{age} years</p>
              </div>
            </li>
          );
        })}
      </ul>
      <button type='button' onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
}
