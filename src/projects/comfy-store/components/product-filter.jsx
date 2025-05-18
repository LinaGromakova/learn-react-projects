import { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';

export function ProductFilter({ companies, categories }) {
  const [rangeValue, setRangeValue] = useState(0);
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
        <input type='search' className='input-search' />
      </label>
      <label className='label-search'>
        select category
        <div className='wrapper-select'>
          <GoTriangleDown className='icon-select'></GoTriangleDown>
          <select name='categories' id='categories' className='filter-select'>
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
          <select name='company' id='company' className='filter-select'>
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
          <select name='sort' id='sort' className='filter-select'>
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
            name='range-price'
            id='range-price'
            value={rangeValue}
            min='0'
            max='1000000'
            step='10000'
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
        <input type='checkbox' name='free-shipping' id='shipping' />
      </label>
      <button type='button' className='btn-apply search'>
        search
      </button>
      <button type='button' className='btn-apply reset'>
        reset
      </button>
    </form>
  );
}
