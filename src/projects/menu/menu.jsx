import './style.css';
import { BTN_CONFIG, menu as DATA } from './data';
import { useState } from 'react';
import { MenuCard } from './menu-card';

export function Menu() {
  const [menu, setMenu] = useState(DATA);
  function handlerBtnFilter(e) {
    const category = e.target.name;
    if (category === 'all') {
      setMenu(DATA);
    } else {
      setMenu(() => {
        const newList = DATA.filter((el) => el.category === category);
        return newList;
      });
    }
  }
  return (
    <main className='main'>
      <h1>our menu</h1>
      <div className='filters-wrapper'>
        {BTN_CONFIG.map((btn, index) => {
          return (
            <button
              type='button'
              className='btn-filter'
              key={index}
              name={btn}
              onClick={(e) => handlerBtnFilter(e)}
            >
              {btn}
            </button>
          );
        })}
      </div>
      <section className='card-wrapper'>
        {menu.map((el) => {
          return <MenuCard key={el.id} {...el} />;
        })}
      </section>
    </main>
  );
}
