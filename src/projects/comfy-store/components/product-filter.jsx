export function ProductFilter() {
  return (
    <form className='form-search' action='#' onSubmit={(e) => e.preventDefault()}>
      <label className='label-search'>
        <input type='text' className='input-search' />
      </label>
      <label className='label-search'>
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
      </label>
      <label className='label-search'>
        <select name='' id='' className='filter-select'>
          <option value='' className='filter-option'>
            1
          </option>
        </select>
      </label>
      <label className='label-search'>
        <select name='' id='' className='filter-select'>
          <option value='' className='filter-option'>
            1
          </option>
        </select>
      </label>
      <label className='label-search'>
        <input type='range' name='' id='' />
      </label>
      <label className='label-search'>
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
