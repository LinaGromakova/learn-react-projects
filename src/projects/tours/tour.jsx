import { useState } from 'react';

export function Tour({ id, image, name, price, info, handlerDelete }) {
  const [moreOpen, setMoreOpen] = useState(false);
  return (
    <article className='card' key={id}>
      <div className='card-img-wrap'>
        <img src={image} alt={name} />
        <div className='card-price'>${price}</div>
      </div>
      <div className='card-content'>
        <h3>{name}</h3>
        <span className='description'>{!moreOpen ? info.substring(0, 200) + '...' : info}</span>
        <button className='btn-info' onClick={() => setMoreOpen(!moreOpen)}>
          {moreOpen ? 'Show Less' : 'Read more'}
        </button>
        <button className='btn-del' type='button' onClick={handlerDelete}>
          Not Interested
        </button>
      </div>
    </article>
  );
}
