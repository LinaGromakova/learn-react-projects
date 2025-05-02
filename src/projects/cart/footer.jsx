import { useGlobalContext } from './context';

export function Footer() {
  const { clear, totalPrice } = useGlobalContext();
  return (
    <footer className='footer'>
      <div className='footer-total'>
        <h4 className='total'>Total</h4>
        <h4 className='total-value'>${totalPrice}</h4>
      </div>
      <button className='btn-clear' onClick={() => clear()}>
        clear cart
      </button>
    </footer>
  );
}
