/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? 'transparent' : '#d5d5d5'};
      border:2px solid #d5d5d5; 
      width: ${active ? '5px' : '1px'};
	  height: ${active ? '5px' : '1px'};
    `}
  />
)

const Dots = ({ slides, activeIndex }) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
)

export default Dots