export function MenuCard({ title, price, img, desc }) {
  return (
    <article className='card'>
      <img src={img} alt={title} />
      <section className='card-content'>
        <div className='card-title'>
          <h3>{title}</h3>
          <p className='card-price'>${price}</p>
        </div>
        <span className='desk'>{desc}</span>
      </section>
    </article>
  );
}
