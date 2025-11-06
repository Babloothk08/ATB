import React from 'react'
import Form from './Form'

export default function HeroSection() {
    return (
        <>
            <div className='min-h-screen pt-28 bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage: "url(https://i.postimg.cc/MKd7JBWh/Banner-final-1.jpg)"
                }}>
                <section className='sm:flex sm:justify-evenly p-5 items-center'>
                    <Form />
                    <div className=' rounded-3xl shadow-2xl  md:p-10  backdrop-blur-xm border border-gray-100 mx-auto max-w-xl bg-[#1A2E48] text-white  p-5 text-xl'>
                        <h2 className='font-semibold'>  Your Trusted Partner for USA & International Flight Bookings
                        </h2>
                        <ul className='space-y-1  mt-2 list-disc  p-4 text-lg'>
                            <li> Compare fares, choose top-rated airlines, and book your flight in minutes.
                            </li>

                            <li> AirTravelBooking.com makes travel simple, secure, and affordable.
                            </li>

                            <li>
                                Enjoy 24/7 customer support for hassle-free flight assistance anytime, anywhere.
                            </li>

                            <li> Unlock exclusive deals and last-minute offers for both domestic and international routes.</li>
                        </ul>

                        *From our partners
                    </div>
                </section>
            </div>
        </>
    )
}
