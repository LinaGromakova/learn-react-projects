import { Header } from './components/header';
import { Product } from './components/product';
import { About } from './pages/about';
import { Home } from './pages/home';

import './style.css';
import { Loading } from './uikit/loading';
export function ComfyStore() {
  return (
    <>
      <Header />
      <Loading></Loading>
    </>
  );
}
