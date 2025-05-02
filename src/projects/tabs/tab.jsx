export function Tab({ title, dates, duties, company }) {
  return (
    <div className='tab'>
      <h1>{title}</h1>
      <h2>{company}</h2>
      <h3>{dates}</h3>
      <ul>
        {duties.map((dutie) => {
          return (
            <li>
              <span className='marker'>»</span>
              <p className='text-info'>{dutie}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
