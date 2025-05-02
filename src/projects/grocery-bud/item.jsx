import { useState } from 'react';

export function Item({ text, handlerDelete }) {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <article className={`item ${isCheck ? 'check' : null}`}>
      <input
        type='checkbox'
        name='checkbox'
        className='checkbox'
        onChange={() => setIsCheck(!isCheck)}
      />
      <span className='desc'>{text}</span>
      <button type='button' className='btn-delete' onClick={() => handlerDelete()}>
        delete
      </button>
    </article>
  );
}
