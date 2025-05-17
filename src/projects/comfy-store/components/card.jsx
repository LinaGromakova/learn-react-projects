import { Link } from 'react-router';
export function Card({ img, title, price, id }) {
  return (
    <Link to={`/product/${id}`} className='card-link'>
      <article className='card-item'>
        <img src={img} alt={title} className='card-img' />
        <div className='card-main'>
          <h2 className='card-title'>{title}</h2>
          <span className='card-price'>${price}</span>
        </div>
      </article>
    </Link>
  );
}
