import { useGlobalContext } from '../model/context';

export function SearchForm() {
  const { searchValue, handlerInputChange, handlerApplySearch } = useGlobalContext();

  return (
    <form action='#' onSubmit={(e) => handlerApplySearch(e)}>
      <div className='search-wrapper'>
        <input
          type='search'
          className='input-form'
          value={searchValue}
          onChange={(e) => handlerInputChange(e)}
        />
        <button type='submit' className='btn-submit'>
          Search
        </button>
      </div>
    </form>
  );
}
