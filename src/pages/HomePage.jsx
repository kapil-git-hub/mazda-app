import React from 'react';
import Header from '../components/shared/Header.jsx';
import Slider from '../components/image-slider/Slider.jsx';
import TextGrid from '../components/home-page/TextGrid.jsx';
import JsonData from '../data/data.json';

var loadData = JSON.parse(JsonData);

class HomePage extends React.Component {
    render() {
        return (
            <div id="home-page-container">
                <Header />
                <Slider slides={loadData.Slides} />
                <TextGrid grid_data={loadData.ImageTextGrid} />
            </div>
        );
    }
}
export default HomePage;