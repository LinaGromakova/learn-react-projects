import { useEffect, useState } from 'react';
import { Pagination } from '../uikit/pagination';

export function Orders() {
  const [orders, setOrders] = useState({ orders: [], meta: [] });
  useEffect(() => {
    fetch('https://strapi-store-server.onrender.com/api/orders', {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzQ3NzUzMDU3LCJleHAiOjE3NTAzNDUwNTd9.3zF60uNfJdiBPTWG_d9xzbOMQz-hnya2sCbtGbwMkTY',
      },
    })
      .then((response) => response.json())
      .then((data) => setOrders({ orders: data.data, meta: data.meta }));
  }, []);

  function getDateFormat(hours) {
    let hour = hours.slice(0, 2);
    let min = hours.slice(-3);
    let str = hour >= 12 ? '0' + (hour - 12) + min + ' pm' : hour + min + ' am';
    return str.length === 9 ? str.slice(1) : str;
  }

  function getDate(date) {
    return date[0] + (' ' + date[1] + 'th, ') + date[2];
  }
  console.log(orders.orders);
  return (
    <section className='orders-page'>
      <div className='container'>
        <h2 className='title_main'>Your Orders</h2>
        <div className='line-decoration'></div>
        <p className='orders-total'>total orders : {orders.meta.pagination?.total} </p>
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
            {orders.orders.map((order) => {
              const { name, address, numItemsInCart, orderTotal, createdAt } = order.attributes;
              const date = new Date(createdAt) + '';
              const arrDate = date.slice(4, 21).split(' ');
              const time = getDateFormat(arrDate[3]) + ' - ' + getDate(arrDate);
              return (
                <tr key={order.id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td>{time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination></Pagination>
      </div>
    </section>
  );
}
