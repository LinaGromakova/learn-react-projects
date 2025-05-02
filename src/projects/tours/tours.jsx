import { useEffect, useState } from 'react';
import { DATA } from './data';
import './style.css';
import { Tour } from './tour';
import { Refresh } from './refresh';
import { Loading } from './loading';

export function Tours() {
  const [tours, setTours] = useState(DATA);
  const [loading, setLoading] = useState(false);

  function handlerDelete(id) {
    setTours(() => {
      const newTours = tours.filter((tour) => tour.id !== id);
      return newTours;
    });
  }
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setTours(DATA);
        setLoading(!loading);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [loading]);
  console.log(loading);
  if (tours.length === 0 && !loading) {
    return <Refresh handlerRefresh={() => setLoading(!loading)} />;
  }
  if (loading) {
    return <Loading></Loading>;
  } else
    return (
      <div className='wrapper'>
        <h1 className='title-under'>Our Tours</h1>
        <div className='card-wrapper'>
          {tours.map((tour) => {
            return (
              <Tour key={tour.id} {...tour} handlerDelete={() => handlerDelete(tour.id)}></Tour>
            );
          })}
        </div>
      </div>
    );
}
