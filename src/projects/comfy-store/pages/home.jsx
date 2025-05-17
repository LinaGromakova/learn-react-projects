import { Link } from 'react-router';
import { Card } from '../components/card';
import { CardsWrapper } from '../components/cards-wrapper';
import { useEffect, useState } from 'react';
const data = [
  {
    id: 19,
    attributes: {
      title: 'avant-garde lamp',
      company: 'Modenza',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      featured: true,
      createdAt: '2023-08-10T10:07:41.876Z',
      updatedAt: '2023-08-10T10:16:43.298Z',
      publishedAt: '2023-08-10T10:07:44.157Z',
      category: 'Kids',
      image:
        'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: '17999',
      shipping: false,
      colors: ['#33FF57', '#3366FF'],
    },
  },
  {
    id: 6,
    attributes: {
      title: 'coffee table',
      company: 'Modenza',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      featured: true,
      createdAt: '2023-08-02T14:32:02.775Z',
      updatedAt: '2023-08-04T07:35:16.880Z',
      publishedAt: '2023-08-02T14:32:05.491Z',
      category: 'Tables',
      image:
        'https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '17999',
      shipping: false,
      colors: ['#FF5733', '#FFFF00'],
    },
  },
  {
    id: 7,
    attributes: {
      title: 'comfy bed',
      company: 'Homestead',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      featured: true,
      createdAt: '2023-08-02T14:34:10.146Z',
      updatedAt: '2023-08-08T14:06:28.575Z',
      publishedAt: '2023-08-02T14:34:13.604Z',
      category: 'Beds',
      image:
        'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: '12999',
      shipping: false,
      colors: ['#FF5733'],
    },
  },
];
export function Home() {
  const [products, setProducts] = useState(data);

  // useEffect(() => {
  //   fetch('https://strapi-store-server.onrender.com/api/products?featured=true')
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data.data));
  // }, []);

  return (
    <section className='home-page'>
      <div className='container'>
        <section className='fullcreen'>
          <div className='fullscreen-column'>
            <h1 className='title_big'>We are changing the way people shop</h1>
            <p className='main-subtitle'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo
              enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
            </p>
            <Link to='/products'>
              <button type='button' className='btn-main'>
                our Products
              </button>
            </Link>
          </div>
          <div className='fullscreen-column'>
            <div className='slider'>
              <img src='/comfy-store/hero1-deae5a1f.webp' alt='' className='slide' />
              <img src='/comfy-store/hero2-2271e3ad.webp' alt='' className='slide' />
              <img src='/comfy-store/hero3-a83f0357.webp' alt='' className='slide' />
              <img src='/comfy-store/hero4-4b9de90e.webp' alt='' className='slide' />
            </div>
          </div>
        </section>
        <section className='home-page-main'>
          <h2 className='title_main'>featured products</h2>
          <div className='line-decoration'></div>
          <CardsWrapper
            children={
              <>
                {products.map((product) => {
                  const { title, image, price } = product.attributes;

                  return (
                    <Card
                      key={product.id}
                      id={product.id}
                      title={title}
                      img={image}
                      price={price / 100}
                    ></Card>
                  );
                })}
              </>
            }
          />
        </section>
      </div>
    </section>
  );
}
