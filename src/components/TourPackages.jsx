import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import data from "../../data/destinations.json";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";


const tours = [
    {
        id: 1,
        country: "Greece",
        title: "Santorini, Oia",
        rating: 5,
        reviews: 38,
        duration: "9 Days Tours",
        price: 180,
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60",
    },
    {
        id: 2,
        country: "Maldives",
        title: "Hurawalhi Island",
        rating: 5,
        reviews: 18,
        duration: "9 Days Tours",
        price: 260,
        image:
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=60",
    },
    {
        id: 3,
        country: "Greece",
        title: "Santorini, Oia",
        rating: 5,
        reviews: 38,
        duration: "5 Days Tours",
        price: 180,
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
    },
    {
        id: 4,
        country: "Greece",
        title: "Santorini, Oia",
        rating: 5,
        reviews: 38,
        duration: "5 Days Tours",
        price: 180,
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
    },
    {
        id: 5,
        country: "Greece",
        title: "Santorini, Oia",
        rating: 5,
        reviews: 38,
        duration: "5 Days Tours",
        price: 180,
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
    },
    {
        id: 6,
        country: "Greece",
        title: "Santorini, Oia",
        rating: 5,
        reviews: 38,
        duration: "5 Days Tours",
        price: 180,
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
    },
    // add more items to test sliding
];

export default function TourPackages() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // const packages =
    //     data[0]?.state?.flatMap((state) => state.packages.map((p) => ({
    //         ...p,
    //         stateName: state.state,
    //         country: data[0].country,
    //     }))) || [];
    return (
        <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6  ">
                <div className="max-w-xl">
                    <h2 className="text-black font-semibold"> Top Flight Routes from the USA to Europe & Canada</h2>
                  
                    <p className="text-gray-500 mt-2">
                      Discover the most popular air routes at unbeatable prices. Fly from major U.S. cities to top European and Canadian destinations without overspending.

                    </p>
                </div>

                {/* Nav buttons container */}
                <div className="ml-auto flex gap-3">
                    <button
                        ref={prevRef}
                        aria-label="Previous"
                        className="w-10 h-10 rounded-lg border bg-white shadow flex items-center justify-center hover:bg-gray-50"
                    >
                        ‹
                    </button>
                    <button
                        ref={nextRef}
                        aria-label="Next"
                        className="w-10 h-10 rounded-lg border bg-white shadow flex items-center justify-center hover:bg-gray-50"
                    >
                        ›
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={28}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                onInit={(swiper) => {
                    // attach custom navigation elements after Swiper init
                    // (this pattern prevents timing issues with refs)
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                style={{ paddingBottom: 24 }}
            >
                {tours.map((pkg) => (
                    <SwiperSlide key={pkg.id}>
                       
                            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">

                                <div className="relative">
                                    <img
                                        src={pkg.img}
                                        alt={pkg.title}
                                        className="w-full h-56 object-cover"
                                    />

                                  
                                </div>

                                <div className="p-6">
                                <p className="text-[#1A2E48] font-medium">{pkg.country}</p>
                                    <h3 className="font-serif text-2xl text-gray-800 mt-1 line-clamp-1">
                                        {pkg.title}
                                    </h3>

                                 
                                    <p className="text-gray-500 text-sm mt-3 line-clamp-4">
                                        {pkg.description}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between">
                                      
                                        
                                      
                                    </div>
                                </div>
                            </article>
                      
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
