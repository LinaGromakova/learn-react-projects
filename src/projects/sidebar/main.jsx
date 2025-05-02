import { useGlobalContext } from './context';
import { Modal } from './modal';
import { Sidebar } from './sidebar';
export function Main() {
  const { modalOpen, sidebarOpen } = useGlobalContext();
  return (
    <>
      <main className='main'>
        <button type='button' className='hamburger-btn' onClick={() => sidebarOpen()}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button type='button' className='btn-main' onClick={() => modalOpen()}>
          show modal
        </button>
        <Sidebar />
      </main>
      <Modal></Modal>
    </>
  );
}
