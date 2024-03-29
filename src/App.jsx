import React from 'react';

const wishes = [
  {
    id: 0,
    text: 'Travel to the moon',
    completed: true,
  },
  {
    id: 1,
    text: 'Eat fries',
    completed: false,
  },
  {
    id: 2,
    text: 'Aprobar Julio',
    completed: false,
  },
];

export default function App() {
  return (
    <div>
      <h1>My Whishlist</h1>
      <fieldset>
        <legend>New Wish:</legend>
        <input
          type="text"
          placeholder="My new wish"
          id=""
        />
      </fieldset>
      <ul>
        {wishes.map((wish) => (
          <li key={wish.id}>
            <input
              type="checkbox"
              checked={wish.completed}
              id={wish.id}
            />
            <label htmlFor={wish.id}>{wish.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
