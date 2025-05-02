import { useGlobalContext } from '../context';
import { CartItem } from './cart-item';
import { SearchForm } from './search';

export function Carts() {
  const { cocktails, loading } = useGlobalContext();
  let layout;
  if (cocktails.length === 0 && !loading) {
    layout = <h1 className='error-title'>Sorry, not found...</h1>;
  } else {
    layout = (
      <div className='cart-wrapper'>
        {cocktails.map((cocktail) => {
          const { id, img, name, glass, char } = cocktail;
          return (
            <CartItem key={id} id={id} img={img} name={name} glass={glass} char={char}></CartItem>
          );
        })}
      </div>
    );
  }
  return (
    <>
      <SearchForm></SearchForm>
      {layout}
    </>
  );
}
