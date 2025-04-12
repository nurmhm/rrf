import Feature from "./componnets/Feature"
import HeroSection from "./componnets/HeroSection"
import Navbar from "./componnets/Navbar"
import OurProgram from "./componnets/OurProgram"
import Team from "./componnets/Team"



function App() {

  return (
    <div className="bg-[#FEFEFE]">
    <Navbar/>
    <HeroSection/>
    <Feature/>
    <OurProgram/>
    <Team/>
    </div>
  )
}

export default App
