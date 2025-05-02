import { Link, useNavigate } from 'react-router';
import { useGlobalContext } from '../model/context';
import { useState } from 'react';
import { useRef } from 'react';

export function Subscribe() {
  const [value, setValue] = useState('test@test.com');
  const { handlerSubscribe, submitting, handlerSumbitting } = useGlobalContext();
  const emailValue = useRef(null);
  const navigate = useNavigate();
  return (
    <form action='#'>
      <h4 className='form-title'>our newsletter</h4>
      <label className='label-form'>
        name
        <input type='text' className='input-form' required />
      </label>
      <label className='label-form'>
        last name
        <input type='text' className='input-form' required />
      </label>
      <label className='label-form'>
        email
        <input
          type='email'
          className='input-form'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={emailValue}
        />
      </label>

      <button type='submit' className='btn-submit'>
        <Link
          to='/'
          onClick={(e) => {
            e.preventDefault();
            handlerSumbitting();
            setTimeout(() => {
              handlerSubscribe(emailValue.current.value);
              navigate('/');
            }, 1000);
          }}
        >
          <div className='btn-wrapper-container'>{submitting}</div>
        </Link>
      </button>
    </form>
  );
}
