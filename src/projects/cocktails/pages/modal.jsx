import { useGlobalContext } from '../context';

export function Modal({ type, message }) {
  const { handlerCloseModal } = useGlobalContext();
  return (
    <div className='modal'>
      <button type='button' className='btn-close' onClick={() => handlerCloseModal()}>
        ⨉
      </button>
      <p>
        <span className='modal-icon' data-icon={type}></span>
        <span className='modal-text'>{message}</span>
      </p>
      <div className='progress-bar' data-bar-type={type}></div>
    </div>
  );
}
