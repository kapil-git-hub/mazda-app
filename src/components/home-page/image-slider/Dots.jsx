/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styles from './dots.scss'

const color = (styles.color)
const Dot = ({ active }) => (
  <span className="dots"
    css={css`
      background: ${active ? 'transparent' : color};
      width: ${active ? (styles.active_width_or_height) : (styles.inactive_width_or_height)};
	    height: ${active ? '5px' : '1px'};
    `}
  />
)

const Dots = ({ slides, activeIndex }) => (
  <div className="slides-map-dots" >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
)

export default Dots