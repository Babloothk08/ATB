import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  ShieldCheck,
  CalendarDays,
  DollarSign,
  Car,
  MapPin,
  Headphones,
} from "lucide-react";

const carsData = [
  {
    name: "Swift Dzire",
    type: "Sedan",
    seater: 5,
    pricePerDay: 12,
    image: "/photos/Swift Dzire.jpg.jpeg",
  },
  {
    name: "Hyundai Creta",
    type: "SUV",
    seater: 5,
    pricePerDay: 13,
    image: "/photos/hyundai creta.jpg.jpeg",
  },
  {
    name: "Toyota Fortuner",
    type: "Luxury SUV",
    seater: 7,
    pricePerDay: 16,
    image: "/photos/toyota fortuner.jpg.jpeg",
  },
  {
    name: "Maruti Alto",
    type: "Hatchback",
    seater: 4,
    pricePerDay: 11,
    image: "/photos/maruti alto.jpg.jpeg",
  },
  {
    name: "BMW 5 Series",
    type: "Luxury Sedan",
    seater: 5,
    pricePerDay: 22,
    image: "/photos/bmw.jpg.jpeg",
  },
];

export default function CarRental() {
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [carType, setCarType] = useState("Any");
  const [selectedCar, setSelectedCar] = useState(null);

  // Calculate days
  const days =
    pickupDate && dropDate
      ? Math.max(
          1,
          Math.ceil(
            (new Date(dropDate) - new Date(pickupDate)) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const totalPrice =
    selectedCar && days ? selectedCar.pricePerDay * days : 0;

  // Filter cars
  const filteredCars =
    carType === "Any"
      ? carsData
      : carsData.filter((car) => car.type.includes(carType));

  return (
    <>
      <Helmet>
        <title>Car Rental Services in USA</title>
        <meta
          name="description"
          content="Book affordable car rental services across the USA."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/photos/car-rental.jpg.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl w-full mx-4">
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-6 md:p-10">
            <div className="text-center text-white mb-10">
              <h1 className="text-4xl md:text-5xl font-bold">
                Rent a Car Anytime, Anywhere
              </h1>
              <p className="mt-3 text-white/80">
                Best prices · Trusted drivers · 24/7 Support
              </p>
            </div>

            {/* SEARCH BAR */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="p-3 rounded-xl bg-white"
              />

              <input
                type="date"
                value={dropDate}
                onChange={(e) => setDropDate(e.target.value)}
                className="p-3 rounded-xl bg-white"
              />

              <select
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="p-3 rounded-xl bg-white"
              >
                <option>Any</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Luxury</option>
                <option>Hatchback</option>
              </select>

              <div className="flex items-center text-white font-semibold">
                {days > 0 && <span>{days} Days</span>}
              </div>

              <button
                disabled={!pickupDate || !dropDate}
                className="bg-teal-600 text-white py-3 rounded-xl hover:scale-105 transition disabled:opacity-50"
              >
                Search Cars
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AVAILABLE CARS */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Available Cars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{car.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {car.type} · {car.seater} Seater
                  </p>
                  <p className="text-blue-600 font-bold mt-2">
                    ${car.pricePerDay} / day
                  </p>

                  <button
                    onClick={() => setSelectedCar(car)}
                    className="mt-4 w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* BOOKING SUMMARY */}
          {selectedCar && days > 0 && (
            <div className="mt-16 bg-white p-8 rounded-2xl shadow-xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Booking Summary
              </h3>

              <p>
                <strong>Car:</strong> {selectedCar.name}
              </p>
              <p>
                <strong>Rental Days:</strong> {days}
              </p>
              <p className="text-xl font-bold text-blue-600 mt-3">
                Total Price: ${totalPrice}
              </p>

              <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
                Confirm Booking
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}