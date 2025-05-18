import { Link } from 'react-router';
export function Card({ img, title, price, id, type = 'basic', company }) {
  return (
    <Link to={`/product/${id}`} className='card-link'>
      <article className={`card-item ${type}`}>
        <img src={img} alt={title} className='card-img' />
        <div className='card-main'>
          <div className='card-titles'>
            <h2 className='card-title'>{title}</h2>
            {company && type === 'row' && <h3 className='card-company'>{company}</h3>}
          </div>

          <span className='card-price'>${price}</span>
        </div>
      </article>
    </Link>
  );
}
