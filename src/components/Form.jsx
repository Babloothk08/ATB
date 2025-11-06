import React, { useState, useEffect } from 'react';
import {
    Plane, Search, MapPin, Calendar, Users, ArrowRight,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Form() {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [passengers, setPassengers] = useState('1');
    const [animatedIn, setAnimatedIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimatedIn(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();

        if (!fromCity || !toCity || !departDate) {
            alert('Please fill in all required fields');
            return;
        }

        // Prepare template parameters for EmailJS
        const templateParams = {
            from_city: fromCity,
            to_city: toCity,
            depart_date: departDate,
            passengers,
        };

        // EmailJS service
        emailjs
            .send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
                templateParams,
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    alert(`Request sent! Searching flights from ${fromCity} to ${toCity}`);
                },
                (err) => {
                    console.error('Failed to send email:', err);
                    alert('Failed to send request. Please try again later.');
                }
            );
    };

    return (
        <div className="py-10 px-4">
            {/* Premium Flight Search Card */}
            <form
                onSubmit={handleSearch}
                className={`bg-white/50 rounded-3xl shadow-2xl p-6 md:p-10 max-w-5xl mx-auto backdrop-blur-xm border border-gray-100 transition-all duration-1000 delay-300 ${animatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        {/* From City */}
                        <div className="group">
                            <label className="block text-lg font-semibold text-black mb-3 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                From
                            </label>
                            <input
                                type="text"
                                value={fromCity}
                                onChange={(e) => setFromCity(e.target.value)}
                                placeholder="Departure city"
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 font-medium group-hover:border-blue-300"
                            />
                        </div>

                        {/* To City */}
                        <div className="group">
                            <label className="block text-lg font-semibold text-black mb-3 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-indigo-600" />
                                To
                            </label>
                            <input
                                type="text"
                                value={toCity}
                                onChange={(e) => setToCity(e.target.value)}
                                placeholder="Destination city"
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-900 font-medium group-hover:border-indigo-300"
                            />
                        </div>
                    </div>

                    {/* Dates & Passengers */}
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div className="group">
                            <label className="block text-lg font-semibold text-black mb-3 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-purple-600" />
                                Departure Date
                            </label>
                            <input
                                type="date"
                                value={departDate}
                                onChange={(e) => setDepartDate(e.target.value)}
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-900 font-medium group-hover:border-purple-300"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-lg font-semibold text-black mb-3 flex items-center gap-2">
                                <Users className="w-4 h-4 text-pink-600" />
                                Passengers
                            </label>
                            <select
                                value={passengers}
                                onChange={(e) => setPassengers(e.target.value)}
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-gray-900 font-medium group-hover:border-pink-300"
                            >
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <option key={num} value={num}>
                                        {num} {num === 1 ? 'Passenger' : 'Passengers'}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="group w-full bg-[#1A2E48] text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 text-lg"
                    >
                        <Search className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        Search Cheap Flights
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </form>
        </div>
    );
}
