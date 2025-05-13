import { ProductFilter } from '../components/product-filter';
import { Pagination } from '../uikit/pagination';

export function Products() {
  return (
    <>
      <div className='container'>
        <ProductFilter></ProductFilter> <Pagination></Pagination>
      </div>
    </>
  );
}
