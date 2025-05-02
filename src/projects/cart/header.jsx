import CartSvg from '../../assets/cart.svg?react';
export function Header({ count }) {
  return (
    <header className='header'>
      <div className='header-container'>
        <h3 className='header-title'>UseReducer</h3>
        <div className='cart-items-count'>
          <CartSvg className='cart-icon' />
          <div className='cart-icon-count'>{count}</div>
        </div>
      </div>
    </header>
  );
}
