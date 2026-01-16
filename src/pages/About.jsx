import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Clock } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
    // Reusing the feature icons for consistency
    const coreValues = [
        { icon: <Globe className="w-8 h-8 text-teal-600" />, title: "Global Reach", desc: "Connecting you to over 500+ worldwide destinations with ease." },
        { icon: <TrendingUp className="w-8 h-8 text-blue-600" />, title: "Unbeatable Value", desc: "We guarantee the lowest fares without compromising on service or quality." },
        { icon: <Clock className="w-8 h-8 text-purple-600" />, title: "24/7 Support", desc: "Our dedicated travel experts are always available for hassle-free assistance." },
    ];

    return (
        <motion.div 
            initial="hidden" 
            animate="show" 
            variants={containerVariants}
        >
            {/* 1. Hero Section: Company Identity */}
            <div 
                className='pt-72 pb-24 bg-cover bg-center text-white ' 
                style={{ backgroundImage: "url(https://i.postimg.cc/HkRLv3XR/about-banner.png)" }}
            >
                <div className='container mx-auto px-6 text-center rounded-xl'>
                    <motion.h1 
                        variants={itemVariants}
                        className='text-5xl font-extrabold mb-4'
                    >
                        Your Journey Starts With Trust
                    </motion.h1>
                    <motion.p 
                        variants={itemVariants}
                        className='text-xl max-w-3xl mx-auto'
                    >
                        At Airlines Ticket Booking, we are dedicated to making your dream vacation an affordable reality.
                    </motion.p>
                </div>
            </div>

            {/* 2. Our Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div 
                        variants={itemVariants}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            The Airlines Ticket Booking Story
                        </h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            Born from a passion for travel and a commitment to affordability, we strive to remove the financial barriers to exploring the world.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div 
                            variants={itemVariants}
                            className="text-lg text-gray-700 space-y-6 leading-relaxed"
                        >
                            <p>
                                Since our founding, Airlines Ticket Booking has grown to become a trusted source for discounted international and domestic flights. We partner directly with major airlines, allowing us to secure exclusive deals that traditional booking sites often overlook. Our focus is simple: **deliver the best value, reliably and securely.**
                            </p>
                            <p>
                                Our team of seasoned travel professionals works tirelessly to ensure every interaction, from the first search to landing at your destination, is seamless. We believe that booking a flight should be as exciting as the trip itself.
                            </p>
                            <p className="font-semibold text-teal-700">
                                Travel more, pay less. That's the Airlines Ticket Booking promise.
                            </p>
                        </motion.div>
                        <motion.img
                            variants={itemVariants}
                            src="https://www.cleartrip.com/collections/wp-content/uploads/2019/06/flight-booking-5.jpg" 
                            alt="A group of people collaborating on a travel plan"
                            className="rounded-2xl shadow-2xl object-cover w-full h-80"
                        />
                    </div>
                </div>
            </section>

            {/* 3. Core Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <motion.h2 
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
                    >
                        Our Core Values
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <motion.div 
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500 transform hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}