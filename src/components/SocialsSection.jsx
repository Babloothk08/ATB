import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

export default function SocialsSection() {
    const socials = [
        {
            name: "Facebook",
            icon: <FaFacebookF className="w-5 h-5 text-[#1877F2]" />,
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            text: "We are here to help you recall your best times and create new unforgettable moments! Follow our FB page for a daily dose of inspiration, travel tips, and exclusive deals.",
        },
        {
            name: "Instagram",
            icon: <FaInstagram className="w-5 h-5 text-[#E4405F]" />,
            img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
            text: "Connect with us on Insta for recent updates on airline industry and even get all the latest & exclusive flight deals from our company! While scrolling reels and memes, don't miss out on airline deets.",
        },
        {
            name: "Twitter",
            icon: <FaTwitter className="w-5 h-5 text-[#1DA1F2]" />,
            img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
            text: "Looking for instant answers or the latest buzz from Fareslist? Follow us for latest tweets from airline, where your queries get quick answers and updates are just a tweet away.",
        },
        {
            name: "Pinterest",
            icon: <FaPinterestP className="w-5 h-5 text-[#BD081C]" />,
            img: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=800&q=80",
            text: "Stay in the loop with the latest news and updates! From exciting promotions to insider tips on travel destinations, our company pins you about airlines in every step of the way.",
        },
    ];

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute left-0 top-0 w-40 h-40 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')] opacity-20"></div>

            <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Connect with us in our Socials, y’all!
                </h2>
                <p className="text-gray-600 mb-12">
                    Reach out to us in our venture to network in all of the leading social media platforms!
                </p>

                {/* Social Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {socials.map((social, i) => (
                        <div
                            key={i}
                            className="relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative w-full h-48">
                                <img
                                    src={social.img}
                                    alt={social.name}
                                    className="object-cover w-full h-full rounded-t-3xl"
                                />
                                {/* Floating Icon */}
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-200 rounded-full p-3 shadow-md">
                                    {social.icon}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="pt-10 pb-6 px-6 text-left">
                                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                    {social.text}
                                </p>
                                {/* <button className="font-semibold text-gray-800 flex items-center gap-2 hover:gap-3 transition-all">
                                    <span className="italic">View More</span>
                                    <span className="text-gray-500 text-sm">→</span>
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Follow Button */}
                <button className="bg-teal-700 text-white px-8 py-3 rounded-md font-semibold shadow hover:bg-teal-800 transition-all">
                    FOLLOW OUR SOCIALS
                </button>
            </div>
        </section>
    );
}
