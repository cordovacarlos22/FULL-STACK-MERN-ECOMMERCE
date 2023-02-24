import React from 'react'
import Annoncement from '../components/Annoncement'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter  from '../components/Newsletter';
import Footer from '../components/Footer';
//! home container

const Home = () => {
  return (
    <div>
      <Annoncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
