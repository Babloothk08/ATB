import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Calendar, Tag } from 'lucide-react';

import { Helmet } from 'react-helmet';

const blogPosts = [
    {
        id: 1,
        title: "7 Insider Tips for Finding the Cheapest International Flights",
        summary: "Learn how to leverage incognito mode, flexible dates, and alternative airports for maximum savings.",
        category: "Tips & Tricks",
        date: "Dec 1, 2025",
        img: "https://i.postimg.cc/Qd0g0t6F/blog-flight-tips.jpg",
        slug: "cheapest-international-flights"
    },
    {
        id: 2,
        title: "Destination Spotlight: Why Berlin Should Be Your Next European Trip",
        summary: "A deep dive into Berlin's history, vibrant nightlife, and affordable cultural attractions.",
        category: "Destination Guide",
        date: "Nov 15, 2025",
        img: "https://i.postimg.cc/028Y4nqV/Worldwide-Destinations-berlin.jpg",
        slug: "berlin-european-trip"
    },
    {
        id: 3,
        title: "Navigating Baggage Fees: What You Need to Know Before You Fly",
        summary: "A comprehensive guide to major airline baggage policies and how to avoid unexpected costs.",
        category: "Airline Info",
        date: "Nov 5, 2025",
        img: "https://i.postimg.cc/gJ5S2K9M/blog-baggage.jpg",
        slug: "navigating-baggage-fees"
    },
    {
        id: 4,
        title: "The Ultimate Guide to Flying with Kids: Stress-Free Travel",
        summary: "From packing essentials to in-flight entertainment, make your family trip smooth and enjoyable.",
        category: "Family Travel",
        date: "Oct 20, 2025",
        img: "https://i.postimg.cc/JnR3Lg2k/package-na-family.jpg",
        slug: "flying-with-kids-guide"
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BlogPage() {
    return (
        <>
            {/* <SEO 
             title='Travel Blog | Flight Booking, Visa & Travel Guides'
             description='Explore Airlines ticket booking travel blog for flight booking tips, airline fare insights, visa guidance, travel insurance advice and budget travel ideas.'
             canonical='https://www.airlinesticketbooking.com/blog'
            /> */}
            <Helmet>
                <title>Travel Blog | Flight Booking, Visa & Travel Guides</title>
                <meta name='description' content='Explore Airlines ticket booking travel blog for flight booking tips, airline fare insights, visa guidance, travel insurance advice and budget travel ideas.' />
                <link rel="canonical" href="https://www.airlinesticketbooking.com/blog" />
            </Helmet>
            <div className="py-24 md:py-32 bg-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Travel Smarter, Not Harder
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto flex items-center justify-center gap-2">
                        <Bookmark className='w-6 h-6 text-teal-600' /> Expert guides, destination reviews, and money-saving tips from our travel team.
                    </p>
                </motion.div>

                {/* Blog Post Grid */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, boxShadow: '0 15px 25px -5px rgba(0, 0, 0, 0.1)' }}
                            className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 block transition-all duration-300"
                        >
                            <a href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            </a>
                            <div className="p-6">
                                <div className='flex items-center text-xs font-semibold text-teal-600 mb-2'>
                                    <Tag className='w-3 h-3 mr-1' /> {post.category}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                                    <a href={`/blog/${post.slug}`} className='hover:text-teal-700 transition-colors'>{post.title}</a>
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.summary}</p>
                                <div className='flex items-center justify-between text-xs text-gray-500 border-t pt-4'>
                                    <span className='flex items-center'>
                                        <Calendar className='w-4 h-4 mr-1' /> {post.date}
                                    </span>
                                    <a href={`/blog/${post.slug}`} className='text-teal-600 font-semibold hover:underline'>
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action for More Content */}
                <div className="text-center mt-16 p-8 bg-white rounded-xl shadow-inner">
                    <h2 className='text-2xl font-bold text-gray-800 mb-3'>Ready to book your dream flight?</h2>
                    <p className='text-lg text-gray-600 mb-4'>Don't just read about the world—experience it. Find your best deal now.</p>
                    <a
                        href="/"
                        className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-teal-700 transition-all text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Flight Search
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}