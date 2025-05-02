import Values from 'values.js';
import { convertToHex } from './converter';

export function SingleColor({ colorValue = '#f15025', onCLick }) {
  const colors = new Values(colorValue).all(10);
  return (
    <>
      <section className='palette-wrapper'>
        {colors.map((color, index) => {
          return (
            <div
              className='palette'
              style={{
                backgroundColor: `rgb(${color.rgb.join(',')})`,
                color: index > 10 ? '#fff' : '#000',
              }}
              key={index}
              onClick={() => {
                onCLick();
                navigator.clipboard.writeText(convertToHex(...color.rgb));
              }}
            >
              <p className='color-satur'>{color.weight}%</p>
              <p className='color-name'>{convertToHex(...color.rgb)}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
