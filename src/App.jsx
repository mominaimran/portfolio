import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import SkillsSection from './sections/SkillsSection'
import ProjectSection from './sections/ProjectSection'
import Services from './sections/ServiceSection'
import Contact from './sections/ContactSection'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import TechStrip from './components/TechStrip'

const App = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <TechStrip />
      <SkillsSection />
      <ProjectSection />
      <Services />
      <Contact />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App