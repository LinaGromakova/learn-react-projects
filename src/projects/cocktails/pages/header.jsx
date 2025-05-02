import { NavLink } from 'react-router';

export function Header() {
  return (
    <header className='header'>
      <nav className='navigation'>
        <h1 className='header-logo'>MixMaster</h1>
        <ul className='list-nav'>
          <li className='nav-item '>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/newsletter'>Newsletter</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
