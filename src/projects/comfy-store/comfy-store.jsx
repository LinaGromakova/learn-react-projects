import { Header } from './components/header';
import { Product } from './components/product';
import { About } from './pages/about';
import { Cart } from './pages/cart';
import { Checkout } from './pages/checkout';
import { Error } from './pages/error';
import { Home } from './pages/home';
import { Orders } from './pages/orders';
import { Products } from './pages/products';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import './style.css';
import { FormLogin } from './uikit/form-login';
import { Loading } from './uikit/loading';
import { Modal } from './uikit/modal';

export function ComfyStore() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
        <Routes>
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Routes>
          <Route path='/products' element={<Products />} />
        </Routes>
        <Routes>
          <Route path='/login' element={<FormLogin />} />
        </Routes>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Routes>
          <Route path='/orders' element={<Orders />} />
        </Routes>
        <Routes>
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}
