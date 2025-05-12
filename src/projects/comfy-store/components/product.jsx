import { GoChevronRight } from 'react-icons/go';
export function Product() {
  return (
    <section className='product-item-page'>
      <div className='container'>
        <nav className='link-back-nav'>
          <a href='' className='link-back'>
            Home
          </a>

          <GoChevronRight className='arrow-link'></GoChevronRight>

          <a href='' className='link-back'>
            Products
          </a>
        </nav>
        <article className='product-content-wrapper'>
          <img
            src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHitjkJAaFBFoJLejL6y9WtezGTFDtC5gs-J65K8O_JXwT_78T'
            alt=''
            className='product-img'
          />
          <div className='product-info'>
            <h3 className='product-title'>avant-garde lamp</h3>
            <h4 className='product-company'>Modenza</h4>
            <span className='product-price'>$179.99</span>
            <p className='product-desc'>
              Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok
              pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund.
              Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
              carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing
              gochujang live-edge
            </p>
            <h5 className='info-title'>Colors</h5>
            <div className='colors-wrapper'>
              <button className='color color-current'></button>
              <button className='color'></button>
            </div>
            <label className='info-label'>Amount</label>
            <button type='button' className='product-btn'>
              Add to bag
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
