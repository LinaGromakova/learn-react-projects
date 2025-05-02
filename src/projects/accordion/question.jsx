import { useState } from 'react';

export function Question({ title, info }) {
  const [isOpen, setIsOpen] = useState(false);

  function handlerClick() {
    setIsOpen(!isOpen);
  }
  return (
    <article className='question-wrapper'>
      <header className='question-header'>
        <h3 className='question-title'>{title}</h3>
        <button type='button' className='btn' onClick={() => handlerClick()}>
          {!isOpen ? '🞢' : '⎯'}
        </button>
      </header>
      {isOpen && <p className='question-info'>{info}</p>}
    </article>
  );
}
