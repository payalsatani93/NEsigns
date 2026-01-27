import React from 'react'
import AboutHero from '../../components/sections/aboutUs/AboutHero.jsx'
import BestAgency from '../../components/sections/aboutUs/BestAgency.jsx'
import AboutServices from '../../components/sections/aboutUs/AboutServices.jsx'
import Footer from '../../components/layout/Footer.jsx'
import HightqytPrinting from '../../components/sections/aboutUs/HightQytPrinting.jsx'
import KnowMoreAboutUs from '../../components/sections/aboutUs/KnowMoreAboutUs.jsx'

export default function About() {
  return (
    <>
      <AboutHero />
      <BestAgency />
      <AboutServices/>
      <KnowMoreAboutUs/>
      <HightqytPrinting/>
      <Footer/>
      
    </>
  )
}
