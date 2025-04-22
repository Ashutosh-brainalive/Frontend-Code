import { useState } from 'react'
import React from 'react'
import './App.css'
import Footer from './Footer'

import HeroSection from './HeroSection'
import SaleSection from './Sales'
import TeamSection from './TeamSection'
import FAQComponent from './FAQComponent'
function App() {
  return (
    <>
    <HeroSection/>
    <SaleSection/>
    <FAQComponent/>
    <TeamSection/>
    <Footer/>
    </>
  )
}

export default App
