import './home.css';
import Hero from '../../components/sections/home/Hero'
import BrandStandOut from '../../components/sections/home/BrandStandOut'
import ServicesSection from '../../components/sections/home/ServicesSection'
import PortfolioSection from '../../components/sections/home/PortfolioSection'
import AboutCompany from '../../components/sections/home/AboutCompany'
import BlogSection from '../../components/sections/home/BlogSection'
import HeroSlider from '../../components/sections/home/HeroSlider'
import TestimonialSlider from '../../components/sections/home/TestimonialSlider'
import PlayVideo from '../../components/sections/home/PlayVideo'
import OurWorkExperience from '../../components/sections/home/OurWorkExperience';

export default function Home() {
  return (
    <>
      <Hero/>
      <HeroSlider/>
      <BrandStandOut/>
      <OurWorkExperience/>
      <AboutCompany/>
      <ServicesSection/>
      <PortfolioSection/>
      <PlayVideo/>
      <TestimonialSlider/>
      <BlogSection/>
    </>
  )
}
