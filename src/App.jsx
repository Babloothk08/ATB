import { Phone } from 'lucide-react'
import React from 'react'
import HeroSection from './components/HeroSection'
import ExploreDestinations from './components/ExploreDestinations'
import WorldwideDestinations from './components/WorldwideDestinations'
import TourPackages from './components/TourPackages'
import SocialsSection from './components/SocialsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <nav>
        <nav className={"fixed w-full z-40 transition-all duration-500 bg-slate-100 "}>
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4">
            <div className={"flex items-center gap-2 text-xl md:text-2xl font-bold transition-colors"}>
              <a href="/">  <img className='h-16' src="https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png" alt="" /> </a>
            </div>
            <div className={"flex items-center gap-2 text-xl md:text-2xl font-bold transition-colors"}>
              <Phone className='h-8 w-8 text-black animate-wiggle animate-pulse' /> 844-821-5950
            </div>
            <div className={"invisible items-center gap-2 text-xl md:text-2xl font-bold transition-colors"}>

              <a href="/">  <img className='h-16' src="https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png" alt="" /> </a>
            </div>

          </div>
        </nav>
      </nav >
      <section>
        <HeroSection/>
      </section>
      <section>
        <ExploreDestinations/>
      </section>
      <section>
        <WorldwideDestinations/>
      </section>
      <section>
        <TourPackages/>
      </section>
      <section>
        <SocialsSection/>
      </section>
      <Footer/>
    </>
  )
}
