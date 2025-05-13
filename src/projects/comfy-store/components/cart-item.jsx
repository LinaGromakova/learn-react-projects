import { GoTriangleDown } from 'react-icons/go';
export function CartItem() {
  return (
    <article className='cart-item'>
      <img
        src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHitjkJAaFBFoJLejL6y9WtezGTFDtC5gs-J65K8O_JXwT_78T'
        alt=''
        className='cart-img'
      />
      <div>
        <h4 className='cart-item-title'>avant-garde lamp</h4>
        <h5 className='cart-item-title_category'>Modenza</h5>
        <div className='cart-item-color'>
          <span className='color-title'>Color : </span>
          <div className='color-cart'></div>
        </div>
      </div>
      <div>
        <label className='cart-item-label'>
          Amount
          <div className='wrapper-select'>
            <GoTriangleDown className='icon-select'></GoTriangleDown>
            <select name='' id='' className='select-cart-item'>
              <option value=''>1</option>
              <option value=''>2</option>
              <option value=''>3</option>
            </select>
          </div>
        </label>
        <button className='btn-remove-cart'>remove</button>
      </div>
      <p className='cart-item-price'>$179.99</p>
    </article>
  );
}
