import React from 'react'
import Header from '../components/shared/Header.jsx'
import Slider from '../components/home-page/image-slider/Slider.jsx'
import TextGrid from '../components/home-page/image-text-grid/TextGrid.jsx'
import ImageGrid from '../components/home-page/image-grid/ImageGrid.jsx'
import JsonData from '../data/data.json'
import PostForm from '../components/home-page/post-form/PostForm.jsx'
import AllPost from '../components/home-page/post-form/AllPost.jsx'

var loadData = JSON.parse(JsonData);

class HomePage extends React.Component {
    render() {
        return (
            <div id="home-page-container">
                <Header />
                <Slider slides={loadData.Slides} />
                <TextGrid grid_data={loadData.ImageTextGrid} />
                <ImageGrid img_grid_data={loadData.ImageGrid} />
                <button data-toggle="collapse" data-target="#collapse-div">Create Post</button>
                <div id="collapse-div" className="collapse">
                <PostForm />
                <AllPost />
                </div>
            </div>
        );
    }
}
export default HomePage;