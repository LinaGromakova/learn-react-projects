import { Pagination } from '../uikit/pagination';

export function Orders() {
  return (
    <section className='orders-page'>
      <div className='container'>
        <h2 className='title_main'>Your Orders</h2>
        <div className='line-decoration'></div>
        <p className='orders-total'>total orders : 8611</p>
        <table className='table-orders'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Address</td>
              <td>Products</td>
              <td>Cost</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Giggle Gary</td>
              <td>Wit Way, Snickerston</td>
              <td>1</td>
              <td>$378.99</td>
              <td>04:49 pm - May 14th, 2025</td>
            </tr>
            <tr>
              <td>Giggle Gary</td>
              <td>Wit Way, Snickerston</td>
              <td>1</td>
              <td>$378.99</td>
              <td>04:49 pm - May 14th, 2025</td>
            </tr>
          </tbody>
        </table>
        <Pagination></Pagination>
      </div>
    </section>
  );
}
