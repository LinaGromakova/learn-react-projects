import { Link } from 'react-router';
export function Error() {
  return (
    <>
      <section className='error-section'>
        <h1 className='error-title'>oops! it's a dead end</h1>
        <Link to='/'>
          <button className='btn-back'>back home</button>
        </Link>
      </section>
    </>
  );
}
