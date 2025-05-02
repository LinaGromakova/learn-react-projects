import clsx from 'clsx';
import { useState } from 'react';
import { useGlobalContext } from './context';

export function SubmenuItem({ link }) {
  const [isOpen, setIsOpen] = useState(false);
  const { menuIsOpen } = useGlobalContext();

  function hoverToggle() {
    return setIsOpen(!isOpen);
  }
  const layout = (
    <div className='submenu-wrapper'>
      <h3 className='submenu-title'>{link.page}</h3>
      <ul className={clsx('submenu-list', link.links.length < 4 ? 'one-col' : 'two-col')}>
        {link.links.map((link, i) => {
          return (
            <li className='submenu-item' key={i}>
              <a href={link.url}>
                {link.icon}
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
  if (menuIsOpen) {
    return layout;
  } else
    return (
      <div onMouseEnter={() => hoverToggle()} onMouseLeave={() => hoverToggle()}>
        <li className='menu-link'>{link.page}</li>
        {isOpen && layout}
      </div>
    );
}
