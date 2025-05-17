import { useEffect, useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link, useParams } from 'react-router';
import { GoTriangleDown } from 'react-icons/go';

const amountArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export function Product() {
  const [product, setProduct] = useState({ colors: [] });
  const param = useParams();

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${param.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.data.attributes);
      });
  }, []);

  return (
    <section className='product-item-page'>
      <div className='container'>
        <nav className='link-back-nav'>
          <Link to='/' className='link-back'>
            Home
          </Link>
          <GoChevronRight className='arrow-link'></GoChevronRight>
          <Link to='/products' className='link-back'>
            Products
          </Link>
        </nav>
        <article className='product-content-wrapper'>
          <img src={product.image} alt={product.title} className='product-img' />
          <div className='product-info'>
            <h3 className='product-title'>{product.title}</h3>
            <h4 className='product-company'>{product.company}</h4>
            <span className='product-price'>${product.price / 100}</span>
            <p className='product-desc'>{product.description}</p>
            <h5 className='info-title'>Colors</h5>
            <div className='colors-wrapper'>
              {product.colors.map((color, index) => {
                return (
                  <button className='color' key={index} style={{ backgroundColor: color }}></button>
                );
              })}
              {/* <button className='color color-current'></button> */}
            </div>
            <label className='info-label'>
              Amount
              <div className='wrapper-select'>
                <GoTriangleDown className='icon-select'></GoTriangleDown>
                <select className='product-select'>
                  {amountArr.map((el, index) => {
                    return (
                      <option value={el} key={index}>
                        {el}
                      </option>
                    );
                  })}
                </select>
              </div>
            </label>
            <button type='button' className='product-btn'>
              Add to bag
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
