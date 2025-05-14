import { Total } from '../components/total';

export function Checkout() {
  return (
    <section className='checkout-page'>
      <div className='container'>
        <h2 className='title_main'>place your order</h2>
        <div className='line-decoration'></div>
        <div className='checkout-main'>
          <form action='#' className='form-checkout' onSubmit={(e) => e.preventDefault()}>
            <h3 className='form-checkout-title'>shipping information</h3>
            <label className='label-checkout'>
              <span>first name</span>

              <input type='text' name='' className='input-checkout' />
            </label>
            <label className='label-checkout'>
              <span> address</span>

              <input type='text' name='' className='input-checkout' />
            </label>
            <button type='submit' className='btn-checkout-submit'>
              Place your order
            </button>
          </form>
          <Total></Total>
        </div>
      </div>
    </section>
  );
}
