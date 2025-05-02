import './style.css';

import { Header } from './header';
import { Main } from './main';
import { useGlobalContext } from './context';

export function Cart() {
  const { totalAmount } = useGlobalContext();
  return (
    <>
      <Header count={totalAmount}></Header>
      <Main></Main>
    </>
  );
}
