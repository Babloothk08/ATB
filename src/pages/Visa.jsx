import React from "react";
import "../../public/CSS/style.css";
import { FileCheck, ShieldCheck, Globe2 } from "lucide-react";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
const visaResults = [
  {
    country: "UAE",
    type: "Tourist Visa",
    processingTime: "3-5 Working Days",
    stay: "30 Days",
    fees: "₹6,500",
  },
  {
    country: "USA",
    type: "Tourist Visa",
    processingTime: "7-10 Working Days",
    stay: "90 Days",
    fees: "₹12,000",
  },
];

const visaDocuments = [
  {
    title: "Passport",
    desc: "Valid for at least 6 months from travel date",
    icon: "🛂",
  },
  {
    title: "Photograph",
    desc: "Recent passport size photograph",
    icon: "📷",
  },
  {
    title: "Flight Ticket",
    desc: "Confirmed return flight ticket",
    icon: "✈️",
  },
  {
    title: "Hotel Booking",
    desc: "Proof of accommodation",
    icon: "🏨",
  },
  {
    title: "Bank Statement",
    desc: "Last 6 months financial statement",
    icon: "💳",
  },
  {
    title: "Travel Insurance",
    desc: "Mandatory for some countries",
    icon: "🛡️",
  },
];

const visaSteps = [
  {
    step: "01",
    title: "Fill Application",
    desc: "Enter your personal and travel details",
    icon: "📝",
  },
  {
    step: "02",
    title: "Upload Documents",
    desc: "Upload passport and required documents",
    icon: "📤",
  },
  {
    step: "03",
    title: "Make Payment",
    desc: "Pay visa fees securely online",
    icon: "💳",
  },
  {
    step: "04",
    title: "Get Visa",
    desc: "Receive your visa on email",
    icon: "📩",
  },
];

const testimonials = [
  {
    name: "Rohit Sharma",
    country: "India",
    review:
      "Very smooth visa process. I got my Dubai visa in just 3 days. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ananya Verma",
    country: "USA",
    review: "The team guided me at every step. Super professional service.",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    country: "UAE",
    review:
      "Best visa service platform. Transparent pricing and fast response.",
    rating: 4,
  },
  {
    name: "Jessica Brown",
    country: "UK",
    review:
      "I was worried about documentation but everything was handled smoothly.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    country: "India",
    review: "Very user-friendly website and quick approval. Great experience!",
    rating: 4,
  },
];

export default function Visa() {
  return (
    <>
      {/* <SEO
        title="Travel Visa Assistance Services | Airlines Ticket Booking"
        description="Get professional travel visa assistance for tourist, business and multi-entry visas. Fast, reliable support for US and international visa applications."
        canonical="https://www.airlinesticketbooking.com/visa-service"
      /> */}
      <Helmet>
        <title>Travel Visa Assistance Services | Airlines Ticket Booking</title>
        <meta name="description" content="Get professional travel visa assistance for tourist, business and multi-entry visas. Fast, reliable support for US and international visa applications." />
        <link rel="canonical" href="https://www.airlinesticketbooking.com/visa-service" />
        <script type="application/ld+json">
{ `{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Service",
      "@id": "https://www.airlinesticketbooking.com/visa-service#service",
      "name": "Travel Visa Assistance Services",
      "description": "Professional travel visa assistance services to help you secure tourist, business, and other travel visas. We guide travelers from the USA through document preparation, application processing, and complete support for international visa approval.",
      "serviceType": [
        "Visa Assistance",
        "Travel Visa Support",
        "Tourist Visa Processing",
        "Business Visa Services"
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
        "serviceUrl": "https://www.airlinesticketbooking.com/visa-service",
        "availableLanguage": ["English"]
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.airlinesticketbooking.com/visa-service#webpage",
      "url": "https://www.airlinesticketbooking.com/visa-service",
      "name": "Visa Service | Travel Visa Assistance from USA",
      "description": "Find professional travel visa assistance services for tourist, business, and international visas from a trusted USA-based travel agency. Get help with documents, processing, and approvals.",
      "isPartOf": {
        "@id": "https://www.airlinesticketbooking.com/#website"
      },
      "about": {
        "@id": "https://www.airlinesticketbooking.com/#organization"
      },
      "mainEntity": {
        "@id": "https://www.airlinesticketbooking.com/visa-service#service"
      },
      "breadcrumb": {
        "@id": "https://www.airlinesticketbooking.com/visa-service#breadcrumb"
      },
      "inLanguage": "en-US"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.airlinesticketbooking.com/visa-service#breadcrumb",
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
          "name": "Visa Service",
          "item": "https://www.airlinesticketbooking.com/visa-service"
        }
      ]
    }

  ]
}
  `}
</script>


      </Helmet>
      <section
        className="min-h-[95vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url(/photos/visa-service.jpg.jpeg)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative bg-white/20 backdrop-blur-lg p-10 rounded-2xl w-[90%] md:w-[70%] lg:w-[60%] shadow-2xl">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
            Apply Visa Online
          </h1>
          <p className="text-white/90 text-center mt-3">
            Check eligibility, documents and get your visa in few steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <select
              className="p-3 rounded-lg  focus:outline-none bg-white/80 outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="UAE">UAE</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>

            <select
              className="p-3 rounded-lg focus:outline-none bg-white/80 outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Visa Type
              </option>
              <option value="Tourist">Tourist</option>
              <option value="Business">Business</option>
              <option value="Student">Student</option>
            </select>

            <select
              className="p-3 rounded-lg bg-white/80 outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Nationality
              </option>
              <option value="Indian">Indian</option>
              <option value="American">American</option>
            </select>

            <input
              type="date"
              placeholder="Choose Date"
              className="p-3 rounded-lg bg-white/80 outline-none"
            />
          </div>

          <div className="text-center mt-8">
            <button className="bg-teal-600 hover:bg-teal-700 transition text-white px-10 py-3 rounded-xl font-semibold shadow-lg">
              Check Eligibility
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white my-8 mt-10 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Reliable Travel Visa Services from the USA
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Applying for a visa can be complex and time-consuming. Our
              professional visa assistance services simplify the process for
              travelers across the United States — whether you’re planning
              domestic or international travel.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We assist with tourist visas, business visas, and other travel
              documentation in a timely and efficient manner. Our experienced
              Visa Specialists guide you through every step — from document
              preparation to submission support.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              With secure handling of your information and up-to-date visa
              regulation knowledge, we ensure your international travel plans
              move forward with transparency and minimal delays.
            </p>
          </div>

          {/* Right Feature Card */}
          <div className=" p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Our Visa Assistance?
            </h3>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 mt-1" />
                Secure and confidential document handling
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 mt-1" />
                Up-to-date visa regulations & compliance
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 mt-1" />
                End-to-end professional support
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 mt-1" />
                Faster processing with minimal delays
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Visa Results
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {visaResults.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.country} - {item.type}
              </h3>

              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium">Processing Time:</span>{" "}
                  {item.processingTime}
                </p>
                <p>
                  <span className="font-medium">Stay Duration:</span>{" "}
                  {item.stay}
                </p>
                <p>
                  <span className="font-medium">Fees:</span>{" "}
                  <span className="text-blue-600 font-semibold">
                    {item.fees}
                  </span>
                </p>
              </div>

              <button className="mt-6 w-full bg-teal-600 hover:bg-teal-700 transition text-white py-3 rounded-xl font-semibold">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-3 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Documents Required
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-14">
            Keep these documents ready to avoid delays in your visa application
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {visaDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition flex items-start gap-4"
              >
                <div className="text-3xl">{doc.icon}</div>

                <div>
                  <h3 className="text-lg font-semibold mb-1">{doc.title}</h3>
                  <p className="text-gray-600 text-sm">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-16">
            Apply for your visa in just 4 simple steps
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {visaSteps.map((item, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>

                <div className="text-blue-600 font-bold text-sm mb-2">
                  STEP {item.step}
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Visa Application Form
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-16">
            Please fill in the details exactly as per your passport
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border rounded-lg focus:outline-none"
              />

              <input
                type="date"
                className="p-3 border rounded-lg focus:outline-none"
              />

              <input
                type="text"
                placeholder="Passport Number"
                className="p-3 border rounded-lg focus:outline-none"
              />

              <input
                type="text"
                placeholder="Email Address"
                className="p-3 border rounded-lg focus:outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 border rounded-lg focus:outline-none"
              />

              <input
                type="text"
                placeholder="Current Address"
                className="p-3 border rounded-lg focus:outline-none"
              />
            </div>

            {/* Upload */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Upload Passport
              </label>
              <input type="file" className="p-3 border rounded-lg w-full" />
            </div>

            {/* Button */}
            <div className="text-center mt-10">
              <button className="bg-teal-600 hover:bg-teal-700 transition text-white px-12 py-3 rounded-xl font-semibold shadow-lg">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Trusted by thousands of travelers across the globe.
          </p>

          <div className="relative">
            <div className="flex gap-6 animate-scroll">
              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[300px] bg-gray-50 rounded-2xl shadow p-6"
                >
                  <p className="text-gray-700 mb-4">“{item.review}”</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.country}</p>
                    </div>
                    <p className="text-yellow-400">{"★".repeat(item.rating)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
