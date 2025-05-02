export function ModalUi({ text, type, onClick }) {
  return (
    <div className='modal'>
      <button type='button' className='btn-close' onClick={onClick}>
        ⨯
      </button>
      <div className='modal-content'>
        <span className={type}></span>
        <span>{text}</span>
      </div>
      <div className={`progress-bar ${type}`}></div>
    </div>
  );
}
