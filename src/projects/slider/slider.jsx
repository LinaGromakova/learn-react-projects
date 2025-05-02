import './style.css';
import { PEOPLE } from './data';
import { useState } from 'react';
import { Slide } from './slide';

export function Slider() {
  const [slide, setSlide] = useState(0);
  function handlerBtnNext() {
    if (PEOPLE.length - 1 === slide) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  }
  function handlerBtnPrev() {
    if (slide === 0) {
      setSlide(PEOPLE.length - 1);
    } else {
      setSlide(slide - 1);
    }
  }
  return (
    <div className='slider'>
      <Slide {...PEOPLE[slide]}></Slide>
      <div className='btn-controller'>
        <button type='button' className='btn-control' onClick={() => handlerBtnPrev()}>
          {'<'}
        </button>
        <button type='button' className='btn-control' onClick={() => handlerBtnNext()}>
          {'>'}
        </button>
      </div>
    </div>
  );
}
