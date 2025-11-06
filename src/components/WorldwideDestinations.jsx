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
            name: "New York",
            img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80",
        },
        {
            name: "Argentina",
            img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
        },
        {
            name: "Amsterdam",
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
        },
        {
            name: "Barcelona",
            img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=400&q=80",
        },
        {
            name: "Dubai",
            img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=400&q=80",
        },
        {
            name: "Bangkok",
            img: "https://images.unsplash.com/photo-1526481280691-7bdb1f4e05d4?auto=format&fit=crop&w=400&q=80",
        },
    ];

    const benefits = [
        { icon: <CreditCard className="w-5 h-5 text-teal-600" />, text: "Easy Bookings" },
        { icon: <RotateCcw className="w-5 h-5 text-teal-600" />, text: "Flight Changes" },
        { icon: <PlaneTakeoff className="w-5 h-5 text-teal-600" />, text: "Cheapest Airfare" },
        { icon: <Undo2 className="w-5 h-5 text-teal-600" />, text: "Fast Cancellations" },
    ];

    return (
        <section className="bg-gray-50">
            {/* Worldwide Destinations */}
            <div className="py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Worldwide Destinations</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    We offer countless destinations to suit various interests from history and culture to natural beauty and gastronomy.
                </p>

                <div className="flex flex-wrap justify-center gap-8 mb-10 px-6">
                    {destinations.map((city, i) => (
                        <div key={i} className="text-center">
                            <div className="w-28 h-28 rounded-full overflow-hidden shadow-md border-4 border-white mx-auto mb-3 hover:scale-105 transition-all">
                                <img
                                    src={city.img}
                                    alt={city.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="font-semibold text-gray-800">{city.name}</p>
                        </div>
                    ))}
                </div>

                <button className="bg-teal-700 text-white px-8 py-3 rounded-md font-semibold shadow hover:bg-teal-800 transition-all">
                    VIEW MORE
                </button>
            </div>

            {/* Choosing Fareslist Section */}
            <div className="bg-white py-20 px-6 md:px-16 lg:px-24">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Side Text */}
                    <div>
                        <p className="italic text-gray-700 mb-2">Choosing Fareslist is</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
                            Your Path to the Best Flight Deals
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Finding the cheapest flights has never been simpler! With Fareslist, score amazing
                            travel deals in just a few clicks. Choose your next journey and enjoy the savings
                            while you fly to your favorite destinations around the globe. Be it last minute or
                            from the top airlines, you get the most affordable airfares right here with us.
                            Just give us a call — we’ll handle the rest!
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
                            src="https://www.fareslist.com/static/media/flight2.ca3907c89d7032c7c7b1.webp"
                            alt="Airport Traveler"
                            className="rounded-br-4xl object-cover w-full h-64 md:h-72"
                        />
                        <img
                            src="https://www.fareslist.com/static/media/FlightW.6d0bf689e82367f6fee5.webp"
                            alt="Airplane in Sky"
                            className="rounded-br-4xl object-cover w-full h-64 md:h-72"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
