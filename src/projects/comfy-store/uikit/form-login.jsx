import clsx from 'clsx';
export function FormLogin({ title = 'Login' }) {
  const typeForm = title === 'Login' ? false : true;
  return (
    <section className='form-wrapper'>
      <form action='#' className='form' onSubmit={(e) => e.preventDefault()}>
        <h2 className='title_main'>{title}</h2>
        {typeForm && (
          <label className='label-form'>
            <p> Username</p>
            <input type='text' className='input-form' />
          </label>
        )}
        <label className='label-form'>
          <p> Email</p>
          <input type='email' className='input-form' />
        </label>
        <label className='label-form'>
          <p> Password</p>
          <input type='password' className='input-form' />
        </label>
        <button type='button' className='btn-form'>
          {title}
        </button>
        {!typeForm && (
          <button type='button' className='btn-form violet'>
            Guest user
          </button>
        )}
        <div className='form-link-wrapper'>
          <span className='form-link-message'>
            {clsx((typeForm && 'Already a member?') || 'Not a member yet?')}
          </span>
          <a href='#' className='form-link'>
            {clsx(title === 'Register' ? 'Login' : 'Register')}
          </a>
        </div>
      </form>
    </section>
  );
}
