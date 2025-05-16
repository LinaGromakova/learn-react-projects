import { Link } from 'react-router';
import { Card } from '../components/card';
import { CardsWrapper } from '../components/cards-wrapper';

export function Home() {
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
            <div className='slider'></div>
          </div>
        </section>
        <section className='home-page-main'>
          <h2 className='title_main'>featured products</h2>
          <div className='line-decoration'></div>
          <CardsWrapper
            children={
              <>
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </>
            }
          />
        </section>
      </div>
    </section>
  );
}
