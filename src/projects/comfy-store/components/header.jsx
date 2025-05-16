import { IoIosMoon } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router';

export function Header() {
  return (
    <header className='header'>
      <section className='header-login-container'>
        <div className='container'>
          <NavLink to='login' className='login-link'>
            Sign in / Guest
          </NavLink>
          <NavLink to='login' className='login-link'>
            Create Account
          </NavLink>
        </div>
      </section>
      <section className='header-navbar-container'>
        <div className='container'>
          <div className='logo'>C</div>
          <nav className='list-links'>
            <NavLink className='nav-link link-active' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/about'>
              About
            </NavLink>
            <NavLink className='nav-link' to='/products'>
              products
            </NavLink>
            <NavLink className='nav-link' to='/cart'>
              cart
            </NavLink>
          </nav>

          <div className='btn-nav'>
            <button className='btn-theme-change'>
              <IoIosMoon></IoIosMoon>
            </button>
            <button className='btn-cart'>
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
              <NavLink to='/cart'>
                <div className='btn-cart-count'>0</div>
              </NavLink>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
