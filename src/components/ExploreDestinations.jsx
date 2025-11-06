import React from "react";
import { Percent, Search, Clock, ShieldCheck } from "lucide-react";

export default function ExploreDestinations() {
    const features = [
        {
            icon: <Percent className="w-6 h-6 text-blue-600" />,
            title: " Quick & Easy Flight Booking",
            desc: "Book your domestic or international flights in just a few clicks—fast, simple, and secure.",
        },
        {
            icon: <Search className="w-6 h-6 text-indigo-600" />,
            title: " Unbeatable Airfare Deals",
            desc: "Get exclusive discounts on USA, Europe, and Canada routes with no hidden charges.",
        },
        {
            icon: <Clock className="w-6 h-6 text-purple-600" />,
            title: " 24/7 Travel Assistance",
            desc: "Our dedicated support team is available around the clock to help you plan or modify your trip..",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
            title: " Top Airlines, Trusted Service",
            desc: "Fly with globally recognized airlines and enjoy smooth, reliable travel every time.",
        },
    ];

    const continents = [
        {
            name: "Rome",
            img: "https://i.postimg.cc/RVX7xtMY/Explore-Your-Dream-Destinations-rome.jpg",
            link: "/north-america",
        },

        {
            name: "Las Vegas ",
            img: "https://i.postimg.cc/KvJPhTZJ/Explore-Your-Dream-Destinations-las-vegas.jpg",
            link: "/australia",
        },
        {
            name: "London",
            img: "https://i.postimg.cc/9FJdH9W6/Explore-Your-Dream-Destinations-london.jpg",
            link: "/south-america",
        },
        {
            name: "New York",
            img: "https://i.postimg.cc/BQMTfFqh/Explore-Your-Dream-Destinations-new-york.jpg",
            link: "/europe",
        },
        {
            name: "Paris ",
            img: "https://i.postimg.cc/dt42cCsK/Explore-Your-Dream-Destinations-Paris.jpg",
            link: "/asia",
        },
        {
            name: "Chicago",
            img: "https://i.postimg.cc/YSGq8v2b/Explore-Your-Dream-Destinations-chicago.jpg",
            link: "/asia",
        },
        // https://postimg.cc/gallery/K2p4TZg
        // https://postimg.cc/gallery/kq1wTnB
    ];

    return (
        <section className="py-20 bg-white">
            {/* Top Features */}
            <div className="text-center">

                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
                    Fly to Your Favorite Destinations at Unbeatable Prices!


                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed max-w-7xl mx-auto">
                    Discover cheap flights from the USA to Europe and Canada with top airlines. Enjoy smooth booking, flexible fares, and travel without breaking your budget.

                </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">

                {features.map((f, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow-2xl hover:shadow-xl shadow-[#1A2E48]  border-white border-2 p-6 transition-all duration-300 text-center"
                    >
                        <div className="flex justify-center mb-4">{f.icon}</div>
                        <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>

            {/* Heading */}
            <div className="text-center mt-20 mb-10 px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Explore Your Dream Destinations Without Spending a Fortune!
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover the most affordable flights to incredible destinations around the world with Fareslist.
                    Experience the thrill of travel without the hefty price tag.
                    Without compromising your budget, fly to Paris, Singapore, Australia, & more!
                </p>
            </div>

            {/* Continents Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
                {continents.map((item, i) => (
                    <a
                        href={`https://www.fareslist.com${item.link}`}
                        key={i}
                        className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
                        <h3 className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-2xl uppercase tracking-wide drop-shadow-lg">
                            {item.name}
                        </h3>
                    </a>
                ))}
            </div>
        </section>
    );
}
