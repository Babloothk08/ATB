import { Phone } from 'lucide-react'
import React from 'react'
import HeroSection from '../components/HeroSection'
import ExploreDestinations from '../components/ExploreDestinations'
import WorldwideDestinations from '../components/WorldwideDestinations'
import TourPackages from '../components/TourPackages'
import SocialsSection from '../components/SocialsSection'
import Footer from '../components/Footer'
import ATBFAQ from '../components/ATBFAQ'

export default function Home() {
    return (
        <>
            
            <section>
                <HeroSection />
            </section>
            <section>
                <ExploreDestinations />
            </section>
            <section>
                <WorldwideDestinations />
            </section>
            <section>
                <TourPackages />
            </section>
            <section>
                <SocialsSection />
            </section>
            <section>
                <ATBFAQ />
            </section>
       
        </>
    )
}
