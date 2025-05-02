import './style.css';

export function Review({ name, image, job, text }) {
  return (
    <>
      <div className='avatar-img'>
        <img src={image} alt={name} />
      </div>

      <h3 className='review-name'>{name}</h3>
      <p className='review-job'>{job}</p>
      <span className='description'>{text}</span>
     
    </>
  );
}
