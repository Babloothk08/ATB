import React from "react";
import { Percent, Search, Clock, ShieldCheck } from "lucide-react";

export default function ExploreDestinations() {
    const features = [
        {
            icon: <Percent className="w-6 h-6 text-blue-600" />,
            title: "Cheap Flights",
            desc: "Fly at cheap prices. Book at the most affordable prices stress-free!",
        },
        {
            icon: <Search className="w-6 h-6 text-indigo-600" />,
            title: "Search & Compare",
            desc: "Weigh and compare from 1000+ options for your flight journeys!",
        },
        {
            icon: <Clock className="w-6 h-6 text-purple-600" />,
            title: "Help 24/7",
            desc: "We are always here for you — reach us 24 hours a day, 7 days a week.",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
            title: "Deals Everyday",
            desc: "Check out with confidence. Our users always get our new deals.",
        },
    ];

    const continents = [
        {
            name: "North America",
            img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
            link: "/north-america",
        },
        {
            name: "Africa",
            img: "https://images.unsplash.com/photo-1588361861040-15f8c27b4d9b?auto=format&fit=crop&w=800&q=80",
            link: "/africa",
        },
        {
            name: "Australia",
            img: "https://images.unsplash.com/photo-1506976785307-8732e854ad89?auto=format&fit=crop&w=800&q=80",
            link: "/australia",
        },
        {
            name: "South America",
            img: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&w=800&q=80",
            link: "/south-america",
        },
        {
            name: "Europe",
            img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
            link: "/europe",
        },
        {
            name: "Asia",
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            link: "/asia",
        },
    ];

    return (
        <section className="py-20 bg-white">
            {/* Top Features */}
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-6 transition-all duration-300 text-center"
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
