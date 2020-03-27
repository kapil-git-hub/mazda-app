/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import leftArrow from '../assets/images/left-arrow.png'
import rightArrow from '../assets/images/right-arrow.jpg'

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        height: 49px;
        border-radius: 50%;
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === 'right' ? <img src={rightArrow} alt="right arrow icon" /> : <img src={leftArrow} alt="left arrow icon" />}
  </div>
)

export default Arrow