import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, PlaneTakeoff, MapPin, Phone } from 'lucide-react';

// Consolidated Destination Data
const allDestinations = {
    "USA": [
        { name: "New York", img: "https://i.postimg.cc/BQMTfFqh/Explore-Your-Dream-Destinations-new-york.jpg", desc: "The city that never sleeps, with unbeatable airfare deals." },
        { name: "Los Angeles", img: "https://i.postimg.cc/KYkvQ1cC/Worldwide-Destinations-los-angeles.jpg", desc: "Fly to the West Coast for Hollywood glamour and beautiful beaches." },
        { name: "Chicago", img: "https://i.postimg.cc/YSGq8v2b/Explore-Your-Dream-Destinations-chicago.jpg", desc: "Experience the Windy City's architecture and culinary scene." },
        { name: "Las Vegas", img: "https://i.postimg.cc/KvJPhTZJ/Explore-Your-Dream-Destinations-las-vegas.jpg", desc: "Find cheap flights for your desert entertainment escape." },
        { name: "Washington D.C.", img: "https://i.postimg.cc/4NJ60PTq/Worldwide-Destinations-washington.jpg", desc: "The nation's capital, rich in history and culture." },
        { name: "San Francisco", img: "https://i.postimg.cc/GhcFfK1N/Worldwide-Destinations-san-fransisco.jpg", desc: "Gateway to Northern California and the Golden Gate." },
    ],
    "Europe": [
        { name: "London", img: "https://i.postimg.cc/9FJdH9W6/Explore-Your-Dream-Destinations-london.jpg", desc: "Book your flight to the heart of the UK." },
        { name: "Paris", img: "https://i.postimg.cc/dt42cCsK/Explore-Your-Dream-Destinations-Paris.jpg", desc: "Romantic flights to the City of Light." },
        { name: "Rome", img: "https://i.postimg.cc/RVX7xtMY/Explore-Your-Dream-Destinations-rome.jpg", desc: "Ancient history and modern wonders await." },
        { name: "Barcelona", img: "https://i.postimg.cc/X7VfPL02/Worldwide-Destinations-barcelona.jpg", desc: "Sun, art, and Spanish culture—all in one trip." },
        { name: "Berlin", img: "https://i.postimg.cc/028Y4nqV/Worldwide-Destinations-berlin.jpg", desc: "Discover Germany's vibrant, historic capital." },
        { name: "Venice", img: "https://i.postimg.cc/dtq2f6Km/Worldwide-Destinations-venice.jpg", desc: "Affordable travel to the city on the water." },
    ],
    "Canada": [
        { name: "Toronto", img: "https://i.postimg.cc/VL4b370W/destination-toronto.jpg", desc: "Canada's largest city and cultural hub." },
        { name: "Vancouver", img: "https://i.postimg.cc/D0m6fHw3/destination-vancouver.jpg", desc: "Coastal mountains and metropolitan charm." },
        { name: "Montreal", img: "https://i.postimg.cc/9F7d2rLp/destination-montreal.jpg", desc: "North America's taste of Europe." },
    ],
};

const regions = ["USA", "Europe", "Canada"];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function DestinationsPage() {
    const [activeRegion, setActiveRegion] = useState('USA');

    return (
        <div className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Discover Your Next Cheap Flight
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto flex items-center justify-center gap-2">
                        <Globe className='w-6 h-6 text-teal-600' /> Explore the best airfare routes across the USA, Europe, and Canada.
                    </p>
                </motion.div>

                {/* Region Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-gray-100 p-2 rounded-full shadow-inner">
                        {regions.map(region => (
                            <button
                                key={region}
                                onClick={() => setActiveRegion(region)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
                                    ${activeRegion === region
                                        ? 'bg-teal-600 text-white shadow-lg'
                                        : 'text-gray-700 hover:bg-white hover:text-teal-700'
                                    }`}
                            >
                                <MapPin className='w-5 h-5' /> {region}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Destinations Grid */}
                <motion.div
                    key={activeRegion} // Key changes to trigger animation when region tab switches
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {allDestinations[activeRegion].map((city, index) => (
                        <motion.a
                            key={index}
                            href={`/flights?to=${city.name.replace(/\s/g, '+')}`} // Link back to the flight form
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                            className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 block group"
                        >
                            <div className="relative h-48">
                                <img
                                    src={city.img}
                                    alt={city.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-teal-700/50 transition-colors flex items-center justify-center">
                                    <PlaneTakeoff className='w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity' />
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{city.name}</h3>
                                <p className="text-gray-600 text-sm">{city.desc}</p>
                                <span className="mt-3 inline-block text-teal-600 font-semibold text-sm">
                                    Explore Flights →
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <div className="text-center mt-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className='text-lg text-gray-700 max-w-xl mx-auto'
                    >
                        Can't find your destination? Call us now for exclusive routes and private deals!
                    </motion.p>
                    <motion.a
                        href="tel:+1-844-821-5950"
                        className="mt-6 inline-block bg-teal-700 text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-teal-800 transition-all text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Phone className='inline-block w-5 h-5 mr-2' /> Call +1-844-821-5950
                    </motion.a>
                </div>
            </div>
        </div>
    );
}