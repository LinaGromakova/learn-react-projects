import './style.css';
import Logo from '../../assets/logo.svg?react';
import { links, social } from './data';
import { useGlobalContext } from './context';

export function Sidebar() {
  const { sidebarClose, isSidebarOpen } = useGlobalContext();
  return (
    <aside className='sidebar' data-sidebar={isSidebarOpen}>
      <header className='sidebar-header'>
        <Logo className='logo' />
        <button type='button' className='btn-close' onClick={() => sidebarClose()}>
          ×
        </button>
      </header>
      <ul className='links-wrapper'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <a href={url} key={id}>
              <li className='link'>
                {icon}
                {text}
              </li>
            </a>
          );
        })}
      </ul>
      <footer className='footer-sidebar'>
        <ul className='socials-wrapper'>
          {social.map((el) => {
            const { id, url, icon } = el;
            return (
              <li className='social-el' key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </footer>
    </aside>
  );
}
