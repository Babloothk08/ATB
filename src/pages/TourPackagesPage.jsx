import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mountain, Users, Plane, Star, Filter } from 'lucide-react';

const packagesData = [
    { id: 1, name: "Luxury European Capitals Tour", price: 2999, category: "Luxury", duration: 10, img: "https://www.luxurygold.com/media/epsotnsb/czech-republic-luxury-tours-travel-guide.jpeg?center=0.4923572164072419%2C0.500010000200004&format=webp&mode=crop&width=900&height=600&quality=80", rating: 5.0, popular: true },
    { id: 2, name: "Budget-Friendly Asia Explorer", price: 999, category: "Budget", duration: 7, img: "https://www.hindustantimes.com/ht-img/img/2025/07/03/550x309/Screenshot_2025-07-03_150459_1751535319094_1751535330793.png", rating: 4.2, popular: false },
    { id: 3, name: "North American Family Getaway", price: 1850, category: "Family", duration: 5, img: "https://www.travelandleisure.com/thmb/2P5V1BlrWY0AF1ZGggtcV7XlMbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-four-seasons-resort-orlando-at-walt-disney-world-resort-USFAMRESORTS0324-dfd4be173ce9417fa7d8869c13550bca.jpg", rating: 4.8, popular: true },
    { id: 4, name: "Solo South America Adventure", price: 1499, category: "Solo", duration: 8, img: "https://thegreenvoyage.com/wp-content/uploads/2024/01/shutterstock_1585486450-1.jpg", rating: 4.5, popular: false },
    { id: 5, name: "Canadian Rockies Hiking Trip", price: 2200, category: "Adventure", duration: 6, img: "https://canadianrockieshiking.com/wp-content/uploads/2015/09/Specialty-Program-Scrambling-2-Homepage-Slider-Size.jpg", rating: 4.9, popular: true },
];

const categories = ["All", "Luxury", "Budget", "Family", "Adventure", "Solo"];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function TourPackagesPage() {
    const [filter, setFilter] = useState('All');

    const filteredPackages = packagesData.filter(pkg =>
        filter === 'All' ? true : pkg.category === filter
    );

    const getIcon = (category) => {
        switch (category) {
            case "Luxury": return <Star className="w-5 h-5" />;
            case "Budget": return <Plane className="w-5 h-5" />;
            case "Family": return <Users className="w-5 h-5" />;
            case "Adventure": return <Mountain className="w-5 h-5" />;
            default: return <Plane className="w-5 h-5" />;
        }
    }

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
                        Curated Tour Packages
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore handpicked, affordable vacation packages for every traveler—from family getaways to solo adventures.
                    </p>
                </motion.div>

                {/* Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 rounded-xl mb-12 shadow-inner"
                >
                    <Filter className="w-6 h-6 text-gray-500 hidden sm:block mt-2" />
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
                                ${filter === cat
                                    ? 'bg-teal-600 text-white shadow-md'
                                    : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-700'
                                }`}
                        >
                            {getIcon(cat)}
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Packages Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredPackages.map((pkg, index) => (
                        <motion.a
                            key={pkg.id}
                            href={`/packages/${pkg.id}`} // Link to a detail page
                            variants={cardVariants}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                            className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100 block"
                        >
                            <div className="relative h-60">
                                <img
                                    src={pkg.img}
                                    alt={pkg.name}
                                    className="w-full h-full object-cover"
                                />
                                {pkg.popular && (
                                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        POPULAR
                                    </span>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <div className='flex items-center text-yellow-500 mb-3'>
                                    <Star className='w-4 h-4 mr-1' />
                                    <span className='text-gray-600 text-sm font-medium'>{pkg.rating} Rating ({pkg.duration} Days)</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <p className="text-sm text-gray-500">Starting From</p>
                                    <p className="text-3xl font-extrabold text-teal-600">
                                        ${pkg.price}
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    ))}

                    {filteredPackages.length === 0 && (
                        <div className="lg:col-span-3 text-center p-10 text-gray-600 bg-gray-50 rounded-lg">
                            No packages found for the selected category.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}