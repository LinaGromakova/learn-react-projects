export function Pagination() {
  return (
    <div className='pagination'>
      <button type='button' className='btn-pagination'>
        prev
      </button>
      <button type='button' className='btn-pagination btn-page_active'>
        1
      </button>
      <button type='button' className='btn-pagination'>
        2
      </button>
      <button type='button' className='btn-pagination'>
        3
      </button>
      <button type='button' className='btn-pagination'>
        next
      </button>
    </div>
  );
}
