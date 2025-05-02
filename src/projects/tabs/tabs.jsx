import { useState } from 'react';
import { DATA } from './data';
import './style.css';
import { Tab } from './tab';
import { Loading } from './loading';

export function Tabs() {
  const [jobs, setJobs] = useState(DATA);
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  function handlerTabCLick(id) {
    setTabIndex(() => {
      const newIndex = jobs.findIndex((job) => job.id === id);
      return newIndex;
    });
  }
  if (loading) {
    return <Loading></Loading>;
  } else
    return (
      <div className='wrapper'>
        <nav className='nav'>
          {jobs.map((btn, index) => {
            return (
              <button
                className={`btn-nav ${index === tabIndex ? 'active' : null}`}
                key={btn.id}
                onClick={() => handlerTabCLick(btn.id)}
              >
                {btn.company}
              </button>
            );
          })}
        </nav>
        <Tab {...jobs[tabIndex]}></Tab>
      </div>
    );
}
