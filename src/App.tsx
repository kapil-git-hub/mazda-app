import React from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'

const images = [
  require('./assets/images/2020-cx5-desktop-hero-retouchedv3.jpg'),
  require('./assets/images/2020-mx5rf-desktop-static-homepage.jpg'),
  require('./assets/images/desktop-100thanniversary-v1.3.jpg'),
  require('./assets/images/hp_mazda_cx30_hero_desktop_1.jpg')
]
function App() {
  return (
    <div id="home-page-container">
      <Header />
      <Slider slides={images} />
    </div>
  );
}

export default App
