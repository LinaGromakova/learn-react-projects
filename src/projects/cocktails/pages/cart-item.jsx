import { Link } from 'react-router';
import { useGlobalContext } from '../context';

export function CartItem({ id, img, name, glass, char }) {
  const { handlerOpenInfo } = useGlobalContext();
  return (
    <article className='cart-item'>
      <img src={img} alt={name} className='cart-img' />
      <footer className='cart-footer'>
        <h3 className='cart-title'>{name}</h3>
        <h5 className='cart-subtitle'>{glass}</h5>
        <p className='cart-char'>{char}</p>
        <Link to={`/cocktail/:${id}`}>
          <button type='button' className='btn-cart' onClick={() => handlerOpenInfo(id)}>
            Details
          </button>
        </Link>
      </footer>
    </article>
  );
}
