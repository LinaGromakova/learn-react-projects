import { Header } from './components/header';
import { Product } from './components/product';
import { About } from './pages/about';
import { Cart } from './pages/cart';
import { Home } from './pages/home';
import { Products } from './pages/products';

import './style.css';
import { FormLogin } from './uikit/form-login';
import { Loading } from './uikit/loading';
import { Modal } from './uikit/modal';
export function ComfyStore() {
  return (
    <>
      <Header />
      <Products></Products>
      {/* <Modal></Modal> */}
    </>
  );
}
