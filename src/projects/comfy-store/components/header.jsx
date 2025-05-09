import { IoIosMoon } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
export function Header() {
  return (
    <header className='header'>
      <section className='header-login-container'>
        <div className='container'>
          <a href='#' className='login-link'>
            Sign in / Guest
          </a>
          <a href='#' className='login-link'>
            Create Account
          </a>
        </div>
      </section>
      <section className='header-navbar-container'>
        <div className='container'>
          <div className='logo'>C</div>
          <nav className='navbar'>
            <ul className='list-links'>
              <li className='nav-link link-active'>home</li>
              <li className='nav-link'>about</li>
              <li className='nav-link'>products</li>
              <li className='nav-link'>cart</li>
            </ul>
          </nav>
          <div className='btn-nav'>
            <button className='btn-theme-change'>
              <IoIosMoon></IoIosMoon>
            </button>
            <button className='btn-cart'>
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
              <div className='btn-cart-count'>0</div>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
