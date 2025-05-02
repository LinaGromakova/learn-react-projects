export function Slide({ image, name, title, quote }) {
  return (
    <article className='slide'>
      <div className='img-wrapper'>
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p className='desc'>{quote}</p>
    </article>
  );
}
