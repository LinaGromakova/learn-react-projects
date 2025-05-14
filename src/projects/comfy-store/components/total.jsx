export function Total() {
  return (
    
      <div className='total-wrapper'>
        <p className='total-row'>
          <span className='total-name'>Subtotal</span>
          <span className='total-price'>$3,479.79</span>
        </p>
        <p className='total-row'>
          <span className='total-name'>Shipping</span>
          <span className='total-price'>$5.00</span>
        </p>
        <p className='total-row'>
          <span className='total-name'>Tax</span>
          <span className='total-price'>$347.98</span>
        </p>
        <p className='total-row last'>
          <span className='total-name'>Order Total</span>
          <span className='total-price'>$3,832.77</span>
        </p>
      </div>
     
 
  );
}
