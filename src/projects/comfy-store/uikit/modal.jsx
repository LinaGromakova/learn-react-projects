import { IoIosClose } from 'react-icons/io';
import { MdError as IconError } from 'react-icons/md';
import { IoIosCheckmarkCircle as IconSuccess } from 'react-icons/io';
import clsx from 'clsx';

export function Modal({ type = 'success', message = 'Lorem' }) {
  return (
    <div className='modal'>
      <button className='btn-close-modal'>
        <IoIosClose className='icon-close-modal'></IoIosClose>
      </button>
      <div className='modal-content'>
        {(type === 'success' && <IconSuccess className='icon-modal success'></IconSuccess>) || (
          <IconError className='icon-modal error'></IconError>
        )}
        <p className='modal-text'> {message}</p>
      </div>
      <div className={clsx('modal-progress-bar', type)}></div>
    </div>
  );
}
