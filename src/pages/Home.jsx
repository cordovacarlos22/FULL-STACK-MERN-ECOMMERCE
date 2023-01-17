import React from 'react'
import Annoncement from '../components/Annoncement'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
//! home container

const Home = () => {
  return (
    <div>
      <Annoncement/>
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default Home
