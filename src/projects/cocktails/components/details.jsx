import { Link } from 'react-router';
import { useGlobalContext } from '../model/context';

export function Details() {
  const { selectCocktail } = useGlobalContext();
  const { img, name, category, char, glass, ingredients, instructions } = selectCocktail;
  return (
    <>
      <Link to='/'>
        <button type='button' className='btn-back'>
          back home
        </button>
      </Link>
      <h1 className='details-title'>{name}</h1>
      <article className='cocktails-info'>
        <div className='info-img-col'>
          <img src={img} alt={name} className='cocktail-img-info' />
        </div>
        <div className='info-main-col'>
          <div className='info-row'>
            <span className='category-title'>name :</span>
            <span className='category-info'>{name}</span>
          </div>
          <div className='info-row'>
            <span className='category-title'>category :</span>
            <span className='category-info'>{category}</span>
          </div>
          <div className='info-row'>
            <span className='category-title'>info :</span>
            <span className='category-info'>{char}</span>
          </div>
          <div className='info-row'>
            <span className='category-title'>glass :</span>
            <span className='category-info'>{glass}</span>
          </div>
          <div className='info-row'>
            <span className='category-title'>ingredients :</span>
            <span className='category-info'>{ingredients}</span>
          </div>
          <div className='info-row'>
            <span className='category-title'>instructions :</span>
            <span className='category-info'>{instructions}</span>
          </div>
        </div>
      </article>
    </>
  );
}
