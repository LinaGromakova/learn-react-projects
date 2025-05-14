import { GoTriangleDown } from 'react-icons/go';
export function ProductFilter() {
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
          <select name='' id='' className='filter-select'>
            <option value='' className='filter-option'>
              1
            </option>
            <option value='' className='filter-option'>
              1
            </option>
            <option value='' className='filter-option'>
              1
            </option>
          </select>
        </div>
      </label>
      <label className='label-search'>
        select company
        <div className='wrapper-select'>
          <GoTriangleDown className='icon-select'></GoTriangleDown>
          <select name='' id='' className='filter-select'>
            <option value='' className='filter-option'>
              1
            </option>
          </select>
        </div>
      </label>
      <label className='label-search'>
        sort by
        <div className='wrapper-select'>
          <GoTriangleDown className='icon-select'></GoTriangleDown>
          <select name='' id='' className='filter-select'>
            <option value='' className='filter-option'>
              1
            </option>
          </select>
        </div>
      </label>
      <label className='label-search'>
        <div className='label-row'>
          <span> select price</span>
          <span>$1,000.00</span>
        </div>
        <input type='range' name='' id='' />
        <div className='label-row'>
          <span>0</span>
          <span>Max : $1,000.00</span>
        </div>
      </label>
      <label className='label-search'>
        free shipping
        <input type='checkbox' name='' id='' />
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
