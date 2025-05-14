import { Card } from '../components/card';
import { CardsWrapper } from '../components/cards-wrapper';
import { ProductFilter } from '../components/product-filter';
import { Pagination } from '../uikit/pagination';
import { RxHamburgerMenu as IconBurger } from 'react-icons/rx';
import { PiSquaresFourFill as IconSquares } from 'react-icons/pi';

export function Products() {
  return (
    <section className='products-page'>
      <div className='container'>
        <ProductFilter></ProductFilter>
        <div className='control-panel'>
          <h5 className='panel-title'>22 products</h5>
          <div className='control-panel-btn-wrapper'>
            <button type='button' className='btn-control-panel active'>
              <IconSquares></IconSquares>
            </button>
            <button type='button' className='btn-control-panel'>
              <IconBurger></IconBurger>
            </button>
          </div>
        </div>
        <div className='line-decoration '></div>
        <CardsWrapper
          children={
            <>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </>
          }
        ></CardsWrapper>
        <Pagination></Pagination>
      </div>
    </section>
  );
}
