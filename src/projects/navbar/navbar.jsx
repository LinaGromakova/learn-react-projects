import { links, social } from './data';
import Logo from '../../assets/logo.svg?react';
import './style.css';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='header' data-open={isOpen}>
      <nav className='navbar'>
        <Logo className='logo' />
        <button type='button' className='btn-hamburger' onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className='navigation-wrap' data-open={isOpen}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} className='nav-el'>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <ul className='social-wrap'>
          {social.map((el) => {
            const { id, url, icon } = el;
            return (
              <li key={id} className='social'>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
