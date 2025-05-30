import { Card } from '../components/card';
import { CardsWrapper } from '../components/cards-wrapper';
import { ProductFilter } from '../components/product-filter';
import { Pagination } from '../uikit/pagination';
import { RxHamburgerMenu as IconBurger } from 'react-icons/rx';
import { PiSquaresFourFill as IconSquares } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

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
    id: 12,
    attributes: {
      title: 'chic chair',
      company: 'Luxora',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      featured: false,
      createdAt: '2023-08-10T09:32:58.392Z',
      updatedAt: '2023-08-10T09:33:03.728Z',
      publishedAt: '2023-08-10T09:33:03.598Z',
      category: 'Chairs',
      image:
        'https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: '33999',
      shipping: true,
      colors: ['#FF5733', '#33FF57', '#3366FF'],
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
  {
    id: 13,
    attributes: {
      title: 'contemporary sofa',
      company: 'Comfora',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      featured: false,
      createdAt: '2023-08-10T09:34:24.429Z',
      updatedAt: '2023-08-10T09:34:27.095Z',
      publishedAt: '2023-08-10T09:34:26.981Z',
      category: 'Sofas',
      image:
        'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: '15999',
      shipping: false,
      colors: ['#FFFF00'],
    },
  },
  {
    id: 20,
    attributes: {
      title: 'cutting-edge bed',
      company: 'Homestead',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      featured: false,
      createdAt: '2023-08-10T10:08:58.922Z',
      updatedAt: '2023-08-10T10:09:01.251Z',
      publishedAt: '2023-08-10T10:09:01.135Z',
      category: 'Beds',
      image:
        'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: '8499',
      shipping: true,
      colors: ['#FFFF00', '#3366FF'],
    },
  },
  {
    id: 16,
    attributes: {
      title: 'futuristic shelves',
      company: 'Luxora',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      featured: false,
      createdAt: '2023-08-10T10:02:51.583Z',
      updatedAt: '2023-08-10T10:02:53.797Z',
      publishedAt: '2023-08-10T10:02:53.674Z',
      category: 'Kids',
      image:
        'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: '9499',
      shipping: true,
      colors: ['#33FF57', '#FFFF00'],
    },
  },
  {
    id: 21,
    attributes: {
      title: 'glass table',
      company: 'Modenza',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      featured: false,
      createdAt: '2023-08-10T10:10:46.803Z',
      updatedAt: '2023-08-10T10:10:48.971Z',
      publishedAt: '2023-08-10T10:10:48.858Z',
      category: 'Tables',
      image:
        'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: '15999',
      shipping: false,
      colors: ['#FF5733', '#3366FF'],
    },
  },
  {
    id: 22,
    attributes: {
      title: 'King Bed',
      company: 'Homestead',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      featured: false,
      createdAt: '2023-08-10T10:11:38.696Z',
      updatedAt: '2023-08-10T10:11:40.915Z',
      publishedAt: '2023-08-10T10:11:40.802Z',
      category: 'Beds',
      image:
        'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: '18999',
      shipping: true,
      colors: ['#FF5733'],
    },
  },
  {
    id: 24,
    attributes: {
      title: 'Lounge Chair',
      company: 'Luxora',
      description:
        'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      featured: false,
      createdAt: '2023-08-10T10:13:29.629Z',
      updatedAt: '2023-08-10T10:15:29.354Z',
      publishedAt: '2023-08-10T10:13:31.792Z',
      category: 'Chairs',
      image:
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: '25999',
      shipping: false,
      colors: ['#FF5733', '#33FF57', '#3366FF'],
    },
  },
];
const arr = {
  pagination: {
    page: 1,
    pageSize: 10,
    pageCount: 3,
    total: 22,
  },
  categories: ['all', 'Tables', 'Chairs', 'Kids', 'Sofas', 'Beds'],
  companies: ['all', 'Modenza', 'Luxora', 'Artifex', 'Comfora', 'Homestead'],
};
export function Products() {
  const [products, setProducts] = useState(data);
  const [filtersValues, setFiltersValues] = useState(arr);
  const [typeCard, setCardType] = useState('basic');
  const [filters, setFilters] = useState('');

  function getFilters(refsArr) {
    const filtersObj = {};
    refsArr.current.map((ref) => {
      filtersObj[ref.current.name] = ref.current.value;
    });
    return setFilters(
      Object.entries(filtersObj).join('&').replaceAll(',', '=').replace('&shipping=of', '')
    );
  }

  function resetFilters(refsArr) {
    refsArr.current.map((ref) => {
      ref.current.checked = false;
      ref.current.value = ref.current.dataset.resetValue;
    });
    setFilters('');
  }
  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products?${filters}`)
      .then((response) => response.json())
      .then((data) => {
        setFiltersValues(data.meta);
        setProducts(data.data);
      });
  }, [filters]);

  return (
    <section className='products-page'>
      <div className='container'>
        <ProductFilter
          categories={filtersValues.categories}
          companies={filtersValues.companies}
          handlerBtnSearchClick={getFilters}
          handlerBtnResetClick={resetFilters}
        ></ProductFilter>
        <div className='control-panel'>
          <h5 className='panel-title'>{filtersValues.pagination.total} products</h5>
          <div className='control-panel-btn-wrapper'>
            <button
              type='button'
              className={clsx('btn-control-panel', typeCard === 'basic' && 'active')}
              onClick={() => setCardType('basic')}
            >
              <IconSquares></IconSquares>
            </button>
            <button
              type='button'
              className={clsx('btn-control-panel', typeCard === 'row' && 'active')}
              onClick={() => setCardType('row')}
            >
              <IconBurger></IconBurger>
            </button>
          </div>
        </div>
        <div className='line-decoration'></div>
        <CardsWrapper
          children={
            <>
              {products.map((el) => {
                const { image, title, price, company } = el.attributes;
                return (
                  <Card
                    img={image}
                    title={title}
                    price={price / 100}
                    key={el.id}
                    id={el.id}
                    type={typeCard}
                    company={company}
                  ></Card>
                );
              })}
            </>
          }
        ></CardsWrapper>
        <Pagination></Pagination>
      </div>
    </section>
  );
}
