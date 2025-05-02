export function Refresh({ handlerRefresh }) {
  return (
    <>
      <h1>No Tours Left</h1>
      <button type='button' className='btn-refresh' onClick={handlerRefresh}>
        Refresh
      </button>
    </>
  );
}
