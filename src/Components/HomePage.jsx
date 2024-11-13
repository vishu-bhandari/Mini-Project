import React from 'react'
import Navbar from './Navbar'
import SearchComponent from './SearchComponent'
import AboutSection from './AboutSection'
import Pricing from './Pricing'
import Banner from './Banner'
import Footer from './Footer'



function HomePage() {
  return (
    <>
     <Navbar />
      <SearchComponent />
      <AboutSection />
      <Pricing />
      <Banner />
      <Footer/>
    </>
  )
}

export default HomePage