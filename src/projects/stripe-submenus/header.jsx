import clsx from 'clsx';
import { useGlobalContext } from './context';
import { sublinks } from './data';
import { SubmenuItem } from './submenu-item';

export function Header() {
  const { menuIsOpen, setMenuIsOpen } = useGlobalContext();
  return (
    <header className='header'>
      <div className='logo'>strapi</div>
      <nav className='navigation'>
        <ul className={clsx('menu-link-wrapper', menuIsOpen ? 'open' : null)}>
          {sublinks.map((link, index) => {
            return <SubmenuItem link={link} key={index}></SubmenuItem>;
          })}
        </ul>
      </nav>
      <div className='hamburger'>
        <button
          type='button'
          className={clsx('btn-hamburger', menuIsOpen ? 'open' : null)}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
