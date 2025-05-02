import { useGlobalContext } from './context';

export function Modal() {
  const { modalClose, isModalOpen } = useGlobalContext();
  return (
    <div className='overlay' data-modal={isModalOpen}>
      <div className='modal'>
        <button type='button' className='btn-close' onClick={() => modalClose()}>
          ×
        </button>
        <p className='modal-content'>Modal Content</p>
      </div>
    </div>
  );
}
