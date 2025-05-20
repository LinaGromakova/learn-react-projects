import React, { createRef, useRef, useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';

export function ProductFilter({
  companies,
  categories,
  handlerBtnSearchClick,
  handlerBtnResetClick,
}) {
  const [rangeValue, setRangeValue] = useState(1000000);
  const [checkbox, setCheckbox] = useState('of');

  const refs = useRef([...Array(6)].map(() => createRef()));

  let priceValue;
  if (rangeValue == 0) {
    priceValue = '0.00';
  } else if (rangeValue == 1000000) {
    priceValue = '1,000.000';
  } else {
    priceValue = parseInt(rangeValue).toLocaleString('id').slice(0, -1);
  }
  return (
    <form className='form-search' action='#' onSubmit={(e) => e.preventDefault()}>
      <label className='label-search'>
        search product
        <input
          type='search'
          name='search'
          className='input-search'
          ref={refs.current[0]}
          data-reset-value=''
        />
      </label>
      <label className='label-search'>
        select category
        <div className='wrapper-select'>
          <GoTriangleDown className='icon-select'></GoTriangleDown>
          <select
            name='category'
            className='filter-select'
            ref={refs.current[1]}
            data-reset-value={categories[0]}
          >
            {categories.map((category, index) => {
              return (
                <option value={category} key={index}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
      </label>
      <label className='label-search'>
        select company
        <div className='wrapper-select'>
          <GoTriangleDown className='icon-select'></GoTriangleDown>
          <select
            name='company'
            className='filter-select'
            ref={refs.current[2]}
            data-reset-value={companies[0]}
          >
            {companies.map((company, index) => {
              return (
                <option value={company} key={index}>
                  {company}
                </option>
              );
            })}
          </select>
        </div>
      </label>
      <label className='label-search'>
        sort by
        <div className='wrapper-select'>
          <GoTriangleDown className='icon-select'></GoTriangleDown>
          <select
            name='order'
            className='filter-select'
            ref={refs.current[3]}
            data-reset-value='a-z'
          >
            <option value='a-z'>a-z</option>
            <option value='z-a'>z-a</option>
            <option value='high'>high</option>
            <option value='low'>low</option>
          </select>
        </div>
      </label>
      <label className='label-search'>
        <div className='label-row'>
          <span> select price</span>
          <span>${priceValue}</span>
        </div>
        <div className='range-wrapper'>
          <div className='range-bar' style={{ width: `${Math.max(rangeValue / 10000, 8.3)}%` }}>
            <div className='range-thumb'></div>
          </div>
          <div className='range-track'></div>
          <input
            type='range'
            name='price'
            ref={refs.current[4]}
            value={rangeValue}
            min='0'
            max='1000000'
            step='10000'
            data-reset-value='1000000'
            onChange={(e) => setRangeValue(e.target.value)}
          />
        </div>

        <div className='label-row'>
          <span>0</span>
          <span>Max : $1,000.00</span>
        </div>
      </label>
      <label className='label-search'>
        free shipping
        <input
          type='checkbox'
          data-reset-value='of'
          name='shipping'
          value={checkbox}
          onChange={(e) => setCheckbox(e.target.value === 'on' ? 'of' : 'on')}
          id='shipping'
          ref={refs.current[5]}
        />
      </label>
      <button
        type='button'
        className='btn-apply search'
        onClick={() => handlerBtnSearchClick(refs)}
      >
        search
      </button>
      <button
        type='button'
        className='btn-apply reset'
        onClick={() => {
          handlerBtnResetClick(refs);
          setRangeValue(1000000);
          setCheckbox('of');
        }}
      >
        reset
      </button>
    </form>
  );
}
