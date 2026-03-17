'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Link from 'next/link'

interface ServiceCard {
  id: string
  title: string
  image: string
}

const allServices: ServiceCard[] = [
  {
    id: 'cleaning',
    title: 'Cleaning',
    image: '/images/services/cleaning.png',
  },
  {
    id: 'home-services',
    title: 'Home Services',
    image: '/images/services/home-services.png',
  },
  {
    id: 'installation',
    title: 'Installation',
    image: '/images/services/installation.png',
  },
  {
    id: 'repairs',
    title: 'Repairs',
    image: '/images/services/painting.png',
  },
  {
    id: 'touch-ups',
    title: 'Touch-Ups',
    image: '/images/services/touch-ups.png',
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    image: '/images/services/landscaping.png',
  },
  {
    id: 'lifting',
    title: 'Lifting',
    image: '/images/services/lifting.png',
  },
  {
    id: 'oven-repair',
    title: 'Oven Repair',
    image: '/images/services/oven-repair.png',
  },
]

export default function ServicesSection() {
  const [showMore, setShowMore] = useState(false)
  const displayedServices = showMore ? allServices : allServices.slice(0, 8)

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            className="px-15 py-8 border-2 border-[#084399] text-lg text-[#084399] bg-transparent hover:bg-[#084399] hover:text-white hover:cursor-pointer transform-fill duration-500"
          >
            {showMore ? 'Show Less' : 'Load more'}
          </Button>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: ServiceCard }) {
  return (
     <Link
      href={"/particular_provider"}
      className="group block w-full max-w-[320px] mx-auto"
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#F3F8FF] shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
        {/* Image Section */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 320px"
            priority
          />
          
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </div>

        {/* White Bottom Bar - exact match to screenshot */}
        <div className="bg-white px-8 py-5 text-center">
          <h3 className="font-bold text-2xl text-[#001a4d] tracking-tight">
            {service.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
