import React from 'react'
import Form from './Form'

export default function HeroSection() {
    return (
        <>
            <div className='min-h-screen pt-28'
                style={{
                    backgroundImage: "url(https://www.fareslist.com/static/media/Farelist-banner.88845d631478a0d102fc.webp)"
                }}>
                <section className='sm:flex sm:justify-evenly p-5 items-center'>
                    <Form />
                    <div className=' rounded-3xl shadow-2xl  md:p-10  backdrop-blur-xm border border-gray-100 mx-auto max-w-xl bg-[#1A2E48] text-white  p-5 text-xl'>
                        <h2 className='font-semibold'>  Most Incredible Flights in just a click!</h2>
                        <ul className='space-y-1  mt-2 list-disc  p-4 text-lg'>
                            <li> Compare and weigh up all the available best flights leaving for your destinations</li>

                            <li> Get unbelievable cheap fares on your flight deals</li>

                            <li> No hidden charges for using our user-friendly website</li>

                            <li>  Safest and fastest way to get flight bookings</li>
                        </ul>

                        *From our partners
                    </div>
                </section>
            </div>
        </>
    )
}
