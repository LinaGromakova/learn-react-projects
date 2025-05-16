import { Link } from 'react-router';
export function Card({ id = 1 }) {
  return (
    <Link to={`/product/:${id}`}>
      <article className='card-item'>
        <img
          src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHitjkJAaFBFoJLejL6y9WtezGTFDtC5gs-J65K8O_JXwT_78T'
          alt=''
          className='card-img'
        />
        <div className='card-main'>
          <h2 className='card-title'>avant-garde lamp</h2>
          <span className='card-price'>$179.99</span>
        </div>
      </article>
    </Link>
  );
}
