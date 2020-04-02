import React from 'react'
import './TextGrid.scss'

const TextGrid = ({ grid_data }) => (
  <div className="container-fluid">
    <div className="row">
      {grid_data.map((grid) => (
        <div className="col-sm-3" >
          <div className="col-items">
            <div className="icon-container">
              <img src={grid.imageUrl} />
            </div>
            <div className="icon-description">
              {grid.imageTitle}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default TextGrid