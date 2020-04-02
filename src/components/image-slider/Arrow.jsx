/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import leftArrow from '../../assets/images/left-arrow.png'
import rightArrow from '../../assets/images/right-arrow.jpg'
import styles from './arrow.scss'

const left = (styles.distance)
const Arrow = ({ direction, handleClick }) => (
  <div className="arrow"
    onClick={handleClick}
    css={css`
      ${direction === 'right' ? `right: ${left}` : `left: ${left}`};
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
      }
    `}
  >
    {direction === 'right' ? <img src={rightArrow} alt="right arrow icon" /> : <img src={leftArrow} alt="left arrow icon" />}
  </div>
)

export default Arrow