import { useState } from 'react';
import './style.css';
import { text as DATA } from './data';

export function LoremIpsum() {
  const [text, setText] = useState([]);
  const [value, setValue] = useState(1);
  function generateText(e) {
    e.preventDefault();
    setText(DATA.slice(0, value));
  }
  return (
    <section className='wrapper'>
      <h1>tired of boring lorem ipsum?</h1>
      <form action='#' onSubmit={(e) => generateText(e)}>
        <label htmlFor='num'>Paragraphs: </label>
        <input
          type='number'
          value={value}
          name='num'
          id='num'
          min={1}
          max={DATA.length - 1}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'>Generate</button>
      </form>
      <article className='par-wrapper'>
        {text.map((text, index) => {
          return (
            <p className='paragraph' key={index}>
              {text}
            </p>
          );
        })}
      </article>
    </section>
  );
}
