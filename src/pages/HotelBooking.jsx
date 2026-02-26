import React, { useState } from "react";
import {
  ShieldCheck,
  Wallet,
  Headphones,
  Clock,
  Hotel,
  Globe2,
} from "lucide-react";
import { Wifi, Utensils, Dumbbell, Car, Waves, Coffee, Tv } from "lucide-react";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
export default function HotelBooking() {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [open, setOpen] = useState(false);

  const destinations = [
    {
      city: "Dubai",
      country: "UAE",
      image: "/photos/Dubai.jpg.jpeg",
    },
    {
      city: "Paris",
      country: "France",
      image: "/photos/Paris.jpg.jpeg",
    },
    {
      city: "Bali",
      country: "Indonesia",
      image: "/photos/Bali.jpg.jpeg",
    },
    {
      city: "New York",
      country: "USA",
      image: "/photos/london.jpg.jpeg",
    },
    {
      city: "Maldives",
      country: "Maldives",
      image: "/photos/maldives.jpg.jpeg",
    },
    {
      city: "London",
      country: "UK",
      image: "/photos/london.jpg.jpeg",
    },
  ];

  const amenities = [
    {
      icon: <Wifi size={36} className="text-blue-600" />,
      title: "Free High-Speed WiFi",
      desc: "Stay connected with complimentary internet access.",
    },
    {
      icon: <Utensils size={36} className="text-orange-600" />,
      title: "Restaurant & Dining",
      desc: "Enjoy world-class cuisine from top chefs.",
    },
    {
      icon: <Dumbbell size={36} className="text-green-600" />,
      title: "Fitness Center",
      desc: "Fully equipped gym for your daily workouts.",
    },
    {
      icon: <Car size={36} className="text-purple-600" />,
      title: "Free Parking",
      desc: "Convenient and secure parking space available.",
    },
    {
      icon: <Waves size={36} className="text-cyan-600" />,
      title: "Swimming Pool",
      desc: "Relax and unwind in our luxury pool.",
    },
    {
      icon: <Coffee size={36} className="text-yellow-600" />,
      title: "Complimentary Breakfast",
      desc: "Start your day with delicious meals.",
    },
    {
      icon: <ShieldCheck size={36} className="text-red-600" />,
      title: "24/7 Security",
      desc: "Round-the-clock safety and surveillance.",
    },
    {
      icon: <Tv size={36} className="text-indigo-600" />,
      title: "Smart TV",
      desc: "Enjoy entertainment with premium channels.",
    },
  ];

  const deals = [
    {
      title: "Flat 30% Off on Luxury Hotels",
      desc: "Valid for international bookings only",
      price: "From $41.1/night",
      image: "/photos/luxary-vila-1.jfif",
      badge: "30% OFF",
    },
    {
      title: "Weekend Special Deals",
      desc: "Save big on short trips",
      price: "From $37.5/night",
      image: "/photos/luxy-hotel-1.jfif",
      badge: "HOT DEAL",
    },
    {
      title: "Honeymoon Packages",
      desc: "Romantic stays with premium benefits",
      price: "From $110.2/night",
      image: "/photos/luxaru-hotel-2.jfif",
      badge: "LIMITED",
    },
  ];

  const features = [
    {
      icon: <ShieldCheck size={40} className="text-blue-600" />,
      title: "Secure & Safe Payments",
      desc: "All transactions are protected with industry-grade encryption and secure gateways.",
    },
    {
      icon: <Wallet size={40} className="text-green-600" />,
      title: "Best Price Guarantee",
      desc: "We compare prices across multiple platforms to give you the lowest fares possible.",
    },
    {
      icon: <Headphones size={40} className="text-purple-600" />,
      title: "24/7 Customer Support",
      desc: "Our travel experts are available round the clock to assist you anytime.",
    },
    {
      icon: <Clock size={40} className="text-orange-600" />,
      title: "Fast & Easy Booking",
      desc: "Book your flights and hotels in just a few clicks with our smooth interface.",
    },
  ];

  // const hotelSchema = {
  //   "@context": "https://schema.org",
  // "@graph": [

  //   {
  //     "@type": "Service",
  //     "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#service",
  //     "name": "Hotel Booking Services",
  //     "description": "Reliable hotel booking services for both domestic and international travel. Compare hotel deals, find affordable rooms, and reserve accommodations online with expert support from a trusted USA travel agency.",
  //     "serviceType": [
  //       "Hotel Booking",
  //       "International Hotel Reservations",
  //       "Domestic Hotel Reservations",
  //       "Affordable Hotel Deals",
  //       "Hotel Price Comparison"
  //     ],
  //     "provider": {
  //       "@id": "https://www.airlinesticketbooking.com/#organization"
  //     },
  //     "areaServed": {
  //       "@type": "Country",
  //       "name": "United States"
  //     },
  //     "availableChannel": {
  //       "@type": "ServiceChannel",
  //       "serviceUrl": "https://www.airlinesticketbooking.com/hotel-booking-services",
  //       "availableLanguage": ["English"]
  //     }
  //   },

  //   {
  //     "@type": "WebPage",
  //     "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#webpage",
  //     "url": "https://www.airlinesticketbooking.com/hotel-booking-services",
  //     "name": "Hotel Booking Services | Affordable Hotel Reservations",
  //     "description": "Book affordable hotels for domestic and international travel with our trusted USA travel agency. Compare prices, find great deals on rooms, and reserve hotel stays easily online.",
  //     "isPartOf": {
  //       "@id": "https://www.airlinesticketbooking.com/#website"
  //     },
  //     "about": {
  //       "@id": "https://www.airlinesticketbooking.com/#organization"
  //     },
  //     "mainEntity": {
  //       "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#service"
  //     },
  //     "breadcrumb": {
  //       "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#breadcrumb"
  //     },
  //     "inLanguage": "en-US"
  //   },

  //   {
  //     "@type": "BreadcrumbList",
  //     "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#breadcrumb",
  //     "itemListElement": [
  //       {
  //         "@type": "ListItem",
  //         "position": 1,
  //         "name": "Home",
  //         "item": "https://www.airlinesticketbooking.com/"
  //       },
  //       {
  //         "@type": "ListItem",
  //         "position": 2,
  //         "name": "Hotel Booking Services",
  //         "item": "https://www.airlinesticketbooking.com/hotel-booking-services"
  //       }
  //     ]
  //   }

  // ]

  // }

  return (
    <>
      {/* <SEO
        title="Affordable Hotel Booking for International Travel | Airline Ticket Booking"
        description="Book affordable hotels for international and domestic travel. Compare hotel prices, find exclusive deals and reserve rooms easily with our trusted US travel agency."
        canonical="https://www.airlinesticketbooking.com/hotel-booking-services"
        
      /> */}
      <Helmet>
        <title>Affordable Hotel Booking for International Travel | Airline Ticket Booking</title>
        <meta name="description" content="Book affordable hotels for international and domestic travel. Compare hotel prices, find exclusive deals and reserve rooms easily with our trusted US travel agency." />
        <link rel="canonical" href="https://www.airlinesticketbooking.com/hotel-booking-services" />
        <script type="application/ld+json">
{ `{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Service",
      "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#service",
      "name": "Hotel Booking Services",
      "description": "Reliable hotel booking services for both domestic and international travel. Compare hotel deals, find affordable rooms, and reserve accommodations online with expert support from a trusted USA travel agency.",
      "serviceType": [
        "Hotel Booking",
        "International Hotel Reservations",
        "Domestic Hotel Reservations",
        "Affordable Hotel Deals",
        "Hotel Price Comparison"
      ],
      "provider": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.airlinesticketbooking.com/hotel-booking-services",
        "availableLanguage": ["English"]
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#webpage",
      "url": "https://www.airlinesticketbooking.com/hotel-booking-services",
      "name": "Hotel Booking Services | Affordable Hotel Reservations",
      "description": "Book affordable hotels for domestic and international travel with our trusted USA travel agency. Compare prices, find great deals on rooms, and reserve hotel stays easily online.",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "about": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "mainEntity": {
        "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#service"
      },
      "breadcrumb": {
        "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#breadcrumb"
      },
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.airlinesticketbooking.com/hotel-booking-services#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.airlinesticketbooking.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hotel Booking Services",
          "item": "https://www.airlinesticketbooking.com/hotel-booking-services"
        }
      ]
    }

  ]
} 
  `}
</script>


      </Helmet>
      <section className="relative w-full h-screen flex items-center justify-center py-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/photos/Hotel-booking.jpg.jpeg)",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Glass Card */}
        <div className="relative z-10 max-w-6xl w-full mx-4">
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-6 md:p-10">
            {/* Heading */}
            <div className="text-center text-white mb-10">
              <h1 className="text-3xl md:text-5xl font-bold">
                Affordable Hotel Booking for International & Domestic Travel
              </h1>
              <p className="mt-3 text-white/80">
                Premium stays · Best prices · Trusted by 10M+ travellers
              </p>
            </div>

            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-gray-800 ">
              {/* City */}
              <div className="md:col-span-2">
                <label className="text-sm text-white">Destination</label>
                <input
                  type="text"
                  placeholder="City or Hotel"
                  className="w-full mt-1 p-3 rounded-xl bg-white/80 outline-none"
                />
              </div>

              {/* Check-in */}
              <div>
                <label className="text-sm text-white">Check-in</label>
                <input
                  type="date"
                  className="w-full mt-1 p-3 rounded-xl bg-white/80 outline-none"
                />
              </div>

              {/* Check-out */}
              <div>
                <label className="text-sm text-white">Check-out</label>
                <input
                  type="date"
                  className="w-full mt-1 p-3 rounded-xl bg-white/80 outline-none"
                />
              </div>

              {/* Rooms & Guests Dropdown */}
              <div className="relative">
                <label className="text-sm text-white">Rooms & Guests</label>
                <div
                  onClick={() => setOpen(!open)}
                  className="w-full mt-1 p-3 rounded-xl bg-white/80 cursor-pointer"
                >
                  {rooms} Room · {adults} Adults · {children} Children
                </div>

                {open && (
                  <div className="absolute mt-2 w-full bg-white rounded-xl shadow-xl p-4 space-y-3 z-20">
                    {[
                      ["Rooms", rooms, setRooms, 1],
                      ["Adults", adults, setAdults, 1],
                      ["Children", children, setChildren, 0],
                    ].map(([label, value, setter, min], i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center"
                      >
                        <span>{label}</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setter(Math.max(min, value - 1))}
                            className="w-7 h-7 bg-gray-200 rounded-full"
                          >
                            -
                          </button>
                          <span>{value}</span>
                          <button
                            onClick={() => setter(value + 1)}
                            className="w-7 h-7 bg-gray-200 rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Budget */}
              <div>
                <label className="text-sm text-white">Budget</label>
                <select className="w-full mt-1 p-3 rounded-xl bg-white/80 outline-none">
                  <option>Any</option>
                  <option>₹2,000</option>
                  <option>₹5,000</option>
                  <option>₹10,000</option>
                  <option>₹20,000+</option>
                </select>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <button className="bg-linear-to-r from-teal-600 to-teal-700 hover:scale-105 transition text-white px-12 py-4 rounded-2xl text-lg font-semibold shadow-xl">
                Search Hotels
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="from-indigo-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-20 shadow rounded-2xl m-5 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* <Hotel className="w-8 h-8 text-indigo-600" /> */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Find the Best Hotel Deals Worldwide
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Looking for affordable hotel bookings for your next trip? Whether
              you’re traveling internationally or domestically, our platform
              helps you discover and secure great hotel rates in your favorite
              destinations.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From business trips and family vacations to spontaneous getaways,
              we partner with trusted global hotel providers to give you access
              to properties in major cities and top attractions worldwide — from
              luxury hotels to budget-friendly stays.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-teal-600 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-700 transition duration-300">
                Search Hotels
              </button>

              <button className="border border-teal-600 text-teal-600 px-7 py-3 rounded-full font-semibold hover:bg-teal-700 hover:text-white transition duration-300">
                View Deals
              </button>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-10 backdrop-blur-md">
              <Globe2 className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Global Hotel Partnerships
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access thousands of hotels worldwide with competitive pricing,
                flexible booking options, and secure online reservations.
                Whether you prefer luxury comfort or budget stays, we have
                accommodations tailored to your travel style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Book With Us?
            </h2>
            <p className="text-gray-600 mt-2">
              Trusted by thousands of travelers for seamless experiences
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl shadow hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Popular Destinations
            </h2>
            <p className="text-gray-600 mt-2">
              Explore the most loved travel destinations worldwide
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.map((item, index) => (
              <div
                key={index}
                className="group relative  border rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.city}
                  className="w-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                {/* Text */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{item.city}</h3>
                  <p className="text-sm opacity-90">{item.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold  ">
                Deals & Offers
              </h2>
              <p className="text-gray-600 mt-2">
                Grab the best offers before they're gone
              </p>
            </div>
            <button className="mt-4 md:mt-0 text-blue-600 font-semibold hover:underline">
              View All Deals →
            </button>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deals.map((deal, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {deal.badge}
                </div>

                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="font-semibold text-lg mb-1">{deal.title}</h4>
                  <p className="text-sm text-gray-600">{deal.desc}</p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-blue-600">
                      {deal.price}
                    </span>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-teal-700 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Premium Amenities
            </h2>
            <p className="text-gray-600 mt-2">
              Everything you need for a comfortable stay
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl shadow bg-gray-50 hover:bg-white hover:shadow-xl transition text-center"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 mt-2">
              Real experiences from real travelers
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review Card */}
            {[
              {
                name: "Michael Johnson",
                location: "New York, USA",
                review:
                  "Amazing experience! The hotel booking was smooth and I got the best price compared to other platforms.",
                rating: 5,
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Emily Thompson",
                location: "London, United Kingdom",
                review:
                  "Customer support is really helpful. They resolved my issue within minutes. Highly recommended!",
                rating: 5,
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Daniel Martinez",
                location: "Toronto, Canada",
                review:
                  "Loved the UI and easy booking process. The deals section saved me a lot of money.",
                rating: 4,
                image: "https://randomuser.me/api/portraits/men/76.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow ">
                {/* User */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < item.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  “{item.review}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
