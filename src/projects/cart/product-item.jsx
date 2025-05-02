import ArrowTop from '../../assets/arrow-top.svg?react';
import ArrowBottom from '../../assets/arrow-bottom.svg?react';
import { useGlobalContext } from './context';

export function ProductItem({ id, img, title, price, amount }) {
  const { removeItem, inc, dec } = useGlobalContext();
  return (
    <article className='product-item'>
      <img src={img} alt={title} className='product-img' />
      <div className='product-info'>
        <h5 className='product-title'>{title}</h5>
        <p className='price-product'>${price}</p>
        <button className='btn-product-remove' onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div className='amount-control-wrapper'>
        <button className='btn-mount-change' onClick={() => inc(id)}>
          <ArrowTop></ArrowTop>
        </button>
        <p className='amount-product'>{amount}</p>
        <button className='btn-mount-change' onClick={() => dec(id)}>
          <ArrowBottom></ArrowBottom>
        </button>
      </div>
    </article>
  );
}
