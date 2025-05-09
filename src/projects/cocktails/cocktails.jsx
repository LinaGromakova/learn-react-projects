import { Details } from './components/details';
import { Header } from './components/header';
import { Modal } from './uikit/modal';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { Page } from './pages/page';
import './style.css';
import { Carts } from './components/carts';
import { About } from './pages/about';
import { Subscribe } from './pages/subscribe';
import { useGlobalContext } from './model/context';
import { Loading } from './uikit/loading';
import { Error } from './uikit/error';

export function Cocktails() {
  const { isModal, modalType, modalMessage, loading, error } = useGlobalContext();

  return (
    <>
      <Router>
        <Header></Header>
        {(error && (
          <h1 className='error-title'>
            Sorry, the service not is not available at the moment, please try again later
          </h1>
        )) || (
          <Page
            children={
              <>
                <Routes>
                  <Route path='/' element={<Carts />}></Route>
                </Routes>
                <Routes>
                  <Route path='about' element={<About />}></Route>
                </Routes>
                <Routes>
                  <Route path='newsletter' element={<Subscribe />}></Route>
                </Routes>
                <Routes>
                  <Route path='cocktail/:id' element={<Details />}></Route>
                </Routes>
                <Routes path='*' element={<Error />}></Routes>
              </>
            }
          ></Page>
        )}
      </Router>
      {loading && <Loading></Loading>}
      {isModal && <Modal type={modalType} message={modalMessage}></Modal>}
    </>
  );
}
