import { Header } from './components/header';
import { Product } from './components/product';
import { About } from './pages/about';
import { Cart } from './pages/cart';
import { Checkout } from './pages/checkout';
import { Error } from './pages/error';
import { Home } from './pages/home';
import { Orders } from './pages/orders';
import { Products } from './pages/products';

import './style.css';
import { FormLogin } from './uikit/form-login';
import { Loading } from './uikit/loading';
import { Modal } from './uikit/modal';
export function ComfyStore() {
  return (
    <>
      <Header />
      <Orders></Orders>
      {/* <Modal></Modal> */}
    </>
  );
}
