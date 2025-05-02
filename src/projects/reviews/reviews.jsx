import { Review } from './review';
import { reviews } from './data';
import { useState } from 'react';
export function Reviews() {
  const [indexPeople, setIndexPeople] = useState(0);
  function handlerNext() {
    if (indexPeople === reviews.length - 1) {
      return setIndexPeople(0);
    }
    return setIndexPeople(indexPeople + 1);
  }
  function handlerPrev() {
    if (indexPeople === 0) {
      return setIndexPeople(reviews.length - 1);
    }
    return setIndexPeople(indexPeople - 1);
  }
  return (
    <div className='review-card'>
      <Review {...reviews[indexPeople]}></Review>
      <div className='btn-control-wrapper'>
        <button type='button' className='btn-control' onClick={() => handlerPrev()}>
          {'<'}
        </button>
        <button type='button' className='btn-control' onClick={() => handlerNext()}>
          {'>'}
        </button>
      </div>
      <button
        type='button'
        className='btn-random'
        onClick={() => setIndexPeople(Math.floor(Math.random() * reviews.length))}
      >
        Surprise Me
      </button>
    </div>
  );
}
