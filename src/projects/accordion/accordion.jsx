import { useState } from 'react';
import { questions as DATA } from './data';
import { Question } from './question';
import './style.css';
export function Accordion() {
  const [questions, setQuestions] = useState(DATA);
  return (
    <section className='wrapper'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return <Question key={question.id} {...question}></Question>;
      })}
    </section>
  );
}
