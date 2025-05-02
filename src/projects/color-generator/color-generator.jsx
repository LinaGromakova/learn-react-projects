import './style.css';
import { SingleColor } from './single-color';
import { useState, useLayoutEffect } from 'react';
import { ModalUi } from './modal-ui';
import { useSwipeable } from 'react-swipeable';

export function ColorGenerator() {
  const [color, setColor] = useState('');
  const [userColor, setUserColor] = useState('#f15025');
  const [alert, setAlert] = useState(false);
  const [modalContent, setmodalContent] = useState({});

  const reg = new RegExp(/^#([0-9a-fA-F]{3}){1,2}$/);

  const handlers = useSwipeable({
    onSwiped: (e) => {
      if (e.dir === 'Left' || e.dir === 'Right') {
        setAlert(false);
      }
      console.log('swiped', e);
    },
  });

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  function handlerSubmit(e) {
    e.preventDefault();
    if (color === '' || !reg.test(color)) {
      setmodalContent({ type: 'error', text: `Unable to parse color from string: ${color}` });
      setAlert(true);
    } else {
      setUserColor(color);
    }
  }
  return (
    <>
      <header>
        <h1>color generator</h1>
        <form action='#' className='form' onSubmit={(e) => handlerSubmit(e)}>
          <input
            type='color'
            name='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type='text'
            name='color-text'
            value={color}
            minLength={7}
            maxLength={7}
            placeholder='#f15025'
            onChange={(e) => setColor(e.target.value)}
          />
          <button type='submit' className='btn' style={{ backgroundColor: color }}>
            Submit
          </button>
        </form>
      </header>
      <SingleColor
        colorValue={userColor}
        onCLick={() => {
          setAlert(true);
          setmodalContent({ type: 'success', text: 'Color copied to clipboard!' });
        }}
      ></SingleColor>
      {alert && (
        <div {...handlers}>
          <ModalUi key={Date.now()} {...modalContent} onClick={() => setAlert(false)} />
        </div>
      )}
    </>
  );
}
