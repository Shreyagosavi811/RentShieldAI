import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import FeaturesSection from './FeaturesSection'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import Footer from './Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FeaturesSection/>
    <HowItWorks/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Home