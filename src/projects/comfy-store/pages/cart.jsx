import { CartItem } from '../components/cart-item';
import { Total } from '../components/total';

export function Cart() {
  return (
    <section className='page-cart'>
      <div className='container'>
        <h2 className='title_main'>Shopping Cart</h2>
        <div className='line-decoration'></div>
        <div className='cart-wrapper'>
          <div className='cart-items-wrapper'>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
          </div>
          <Total></Total>
        </div>
      </div>
    </section>
  );
}
