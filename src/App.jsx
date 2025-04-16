import Cohort from "./componnets/Cohort"
import ConnnectNow from "./componnets/ConnnectNow"
import Course from "./componnets/Course"
import FAQ from "./componnets/FAQ"
import Feature from "./componnets/Feature"
import Footer from "./componnets/Footer"
import HeroSection from "./componnets/HeroSection"
import Mantors from "./componnets/Mantors"
import Navbar from "./componnets/Navbar"
import OurProgram from "./componnets/OurProgram"
import Stories from "./componnets/Stories"
import Team from "./componnets/Team"



function App() {

  return (
    <div className="bg-[#FEFEFE]">
    <Navbar/>
    <HeroSection/>
    <Feature/>
    <OurProgram/>
    <Team/>
    <ConnnectNow/>
    <Course/>
    <Cohort/>
    <Mantors/>
    <Stories/>
    <FAQ/>
    <Footer/>
    </div>
  )
}

export default App
