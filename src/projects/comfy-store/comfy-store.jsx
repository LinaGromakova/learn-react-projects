import { Header } from './components/header';
import { About } from './pages/about';
import { Home } from './pages/home';

import './style.css';
export function ComfyStore() {
  return (
    <>
      <Header />
      <Home></Home>
    </>
  );
}
