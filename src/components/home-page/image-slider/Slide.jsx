/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import './slide.scss'

const Slide = ({ content, imgdetails }) => (
  <div className="slide" css={css`
      background-image: url('${content}');`}>
    <div className="carousel-caption">
      <h2>{imgdetails.description}</h2>
      <h1>{imgdetails.title}</h1>
    </div>
    <div className="img-slider-bottom-btn">
      <button type="button" className="btn btn-default">Learn More</button>
    </div>
  </div>
)

export default Slide