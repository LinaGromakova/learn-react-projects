export function UiModal({ type, text, handlerModalClose }) {
  return (
    <div className='modal' onClick={() => handlerModalClose()}>
      <button type='button' className='btn-modal-close' onClick={() => handlerModalClose()}>
        ⨉
      </button>
      <div className={`modal-content ${type}`}>{text}</div>
      <div className={`modal-progress-bar ${type}`}></div>
    </div>
  );
}
