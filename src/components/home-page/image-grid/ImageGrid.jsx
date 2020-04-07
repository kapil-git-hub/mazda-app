import React from 'react'
import './index.scss'

const ImageGrid = ({ img_grid_data }) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12">
                <div >
                    <div className="media-container">
                        <img src={img_grid_data.bgImage} />
                    </div>
                    <div className="description-container">
                        <header>
                            <h1>
                                <img alt="" src={img_grid_data.headerImage} />
                            </h1>
                        </header>
                        <div>
                            <p>{img_grid_data.paragraph}</p>
                            <p><button type="button" className="btn btn-default">{img_grid_data.buttonText1}</button></p>
                            <p><button type="button" className="btn btn-default">{img_grid_data.buttonText2}</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ImageGrid