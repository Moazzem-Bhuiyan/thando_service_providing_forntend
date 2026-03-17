import React from 'react';
// import { Search, ArrowRightLeft, ClipboardList, Users, MessageSquareShare } from 'lucide-react';
import { Search, GitCompare, ClipboardList, Users, Star } from 'lucide-react';
import boxicons from "@/assets/home/how-to-work-icons/boxicons_compare.svg"
import vector from "@/assets/home/how-to-work-icons/Vector.svg"
import carbon from "@/assets/home/how-to-work-icons/carbon_review.svg"
import fluentPeople from "@/assets/home/how-to-work-icons/fluent_people-communication-24-regular.svg"
import search from "@/assets/home/how-to-work-icons/material-symbols_search.svg"
import Image from 'next/image';

const steps = [
  { icon: <Image src={search} alt="Search" className='h-12 w-12' />, title: 'Search', description: 'Find the service you need' },
  { icon: <Image src={boxicons} alt="Search" className='h-12 w-12' />, title: 'Compare', description: 'Check ratings, reviews, and prices' },
  { icon: <Image src={vector} alt="Search" className='h-12 w-12' />, title: 'Book', description: 'Schedule and pay securely' },
  { icon: <Image src={fluentPeople} alt="Search" className='h-12 w-12' />, title: 'Communicate', description: 'Service delivered hassle-free' },
  { icon: <Image src={carbon} alt="Search" className='h-12 w-12' />, title: 'Review', description: 'Share your feedback easily' },
//   {
//     icon: <Search className="w-8 h-8 text-blue-800" />,
//     title: "Search",
//     description: "Find the service you need",
//   },
//   {
//     icon: <ArrowRightLeft className="w-8 h-8 text-blue-800" />,
//     title: "Compare",
//     description: "Check ratings, reviews, and prices",
//   },
//   {
//     icon: <ClipboardList className="w-8 h-8 text-blue-800" />,
//     title: "Book",
//     description: "Schedule and pay securely",
//   },
//   {
//     icon: <Users className="w-8 h-8 text-blue-800" />,
//     title: "Communicate",
//     description: "Service delivered hassle-free",
//   },
//   {
//     icon: <MessageSquareShare className="w-8 h-8 text-blue-800" />,
//     title: "Review",
//     description: "Share your feedback easily",
//   },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h3 className="text-blue-700 font-bold uppercase tracking-wider text-sm mb-2">
            How It Works
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Your Trusted Service Journey
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-center md:items-start md:justify-between gap-8 md:gap-0">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 border-t-2 border-dotted border-blue-300 -z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center flex-1 px-2 group">
              
              {/* Icon Circle */}
              <div className="relative mb-6">
                {/* Connector dots for mobile (optional) */}
                {index !== steps.length - 1 && (
                    <div className="hidden absolute left-1/2 top-full h-8 w-0.5 border-l-2 border-dotted border-blue-300 -translate-x-1/2 mt-2" />
                )}

                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-blue-900/5 border border-slate-100 transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>

                {/* Small Blue Dots on the line (Desktop) */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute -right-[4%] top-1/2 -translate-y-1/2">
                     <div className="w-2 h-2 bg-blue-800 rounded-full" />
                  </div>
                )}
                {index !== 0 && (
                   <div className="hidden md:block absolute -left-[4%] top-1/2 -translate-y-1/2">
                     <div className="w-2 h-2 bg-blue-800 rounded-full" />
                  </div>
                )}
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {step.title}
              </h4>
              <p className="text-slate-500 text-sm max-w-[160px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}