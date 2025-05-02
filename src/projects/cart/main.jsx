import { ProductItem } from './product-item';
import { Footer } from './footer';
import { useGlobalContext } from './context';

export function Main() {
  const { cart } = useGlobalContext();

  return (
    <main className='main'>
      <section className='section-bag'>
        <h1 className='section-title'>your bag</h1>
        {(cart.length !== 0 && (
          <>
            <div className='product-wrapper'>
              {cart.map((cartItem) => {
                return <ProductItem {...cartItem} key={cartItem.id}></ProductItem>;
              })}
            </div>
            <Footer></Footer>
          </>
        )) || <p className='empty'>is currently empty</p>}
      </section>
    </main>
  );
}
