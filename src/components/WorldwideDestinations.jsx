import React from "react";
import {
    PlaneTakeoff,
    RotateCcw,
    CreditCard,
    Undo2,
} from "lucide-react";

export default function WorldwideDestinations() {
    const destinations = [
        {
            name: "Barcelona ",
            img: "https://i.postimg.cc/X7VfPL02/Worldwide-Destinations-barcelona.jpg",
        },
        {
            name: "Berlin ",
            img: "https://i.postimg.cc/028Y4nqV/Worldwide-Destinations-berlin.jpg",
        },
        {
            name: "San Francisco. ",
            img: "https://i.postimg.cc/GhcFfK1N/Worldwide-Destinations-san-fransisco.jpg",
        },
        {
            name: "Venice",
            img: "https://i.postimg.cc/dtq2f6Km/Worldwide-Destinations-venice.jpg",
        },
        {
            name: "Washington",
            img: "https://i.postimg.cc/4NJ60PTq/Worldwide-Destinations-washington.jpg",
        },
        {
            name: "Los Angeles",
            img: "https://i.postimg.cc/KYkvQ1cC/Worldwide-Destinations-los-angeles.jpg",
        },
    ];

    const benefits = [
        { icon: <CreditCard className="w-5 h-5 text-teal-600" />, text: "Easy Bookings" },
        { icon: <RotateCcw className="w-5 h-5 text-teal-600" />, text: "Cheapest Airfare" },
        { icon: <PlaneTakeoff className="w-5 h-5 text-teal-600" />, text: "Flexible Changes" },
        { icon: <Undo2 className="w-5 h-5 text-teal-600" />, text: "Fast Cancellations" },
    ];

    return (
        <section className="bg-gray-50">
            {/* Worldwide Destinations */}
            <div className="py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-3"> Top Flight Routes from the USA to Europe & Canada</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    Discover the most popular air routes at unbeatable prices. Fly from major U.S. cities to top European and Canadian destinations without overspending.
                </p>

                <div className="flex flex-wrap justify-center gap-8 mb-10 px-6">
                    {destinations.map((city, i) => (
                        <div key={i} className="text-center">
                            <div className="w-28 h-28 rounded-full overflow-hidden shadow-md border-4 border-white mx-auto mb-3 hover:scale-105 transition-all">
                                <img
                                    src={city.img}
                                    alt={city.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="font-semibold text-gray-800">{city.name}</p>
                        </div>
                    ))}
                </div>

                <a href="tel:+"> <button className="bg-teal-700 text-white px-8 py-3 rounded-md font-semibold shadow hover:bg-teal-800 transition-all animate-bounce">
                    Call Us 
                </button></a>
            </div>

            {/* Choosing Fareslist Section */}
            <div className="bg-white py-20 px-6 md:px-16 lg:px-24">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Side Text */}
                    <div>
                        <p className="italic text-gray-700 mb-2">Choosing Air Travel Booking</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
                            Your Path to Affordable Flights & Dream Vacations

                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Finding great flight deals has never been this easy! With Air Travel Booking, you can explore worldwide destinations and book flights at unbeatable prices in just a few clicks. Whether you’re flying across the USA or to Europe and Canada, enjoy the lowest fares, flexible booking options, and trusted service—all in one place.

                        </p>

                        {/* Benefits grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((b, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 hover:shadow-md transition-all"
                                >
                                    {b.icon}
                                    <span className="font-medium text-gray-800">{b.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Images */}
                    <div className="flex flex-col gap-6">
                        <img
                            src="https://i.postimg.cc/xdchzHjk/Your-Path-to-the-Best-Flight-Deals-1.jpg"
                            alt="Airport Traveler"
                            className="rounded-br-4xl object-contain w-full h-64 md:h-72"
                        />
                        <img
                            src="https://i.postimg.cc/VNdpCMsN/Your-Path-to-the-Best-Flight-Deals-2.jpg"
                            alt="Airplane in Sky"
                            className="rounded-br-4xl object-contain w-full h-64 md:h-72"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
