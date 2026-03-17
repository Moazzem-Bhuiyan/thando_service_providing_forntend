"use client"

import * as React from "react"
import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Wade Warren",
    role: "User",
    content: "A blog website UI design focuses on creating a clean, engaging, and user-friendly experience to enhance readability and user interaction.",
    avatar: "https://i.pravatar.cc/150?u=wade",
    rating: 5,
  },
  {
    name: "Jane Cooper",
    role: "User",
    content: "A blog website UI design focuses on creating a clean, engaging, and user-friendly experience to enhance readability and user interaction.",
    avatar: "https://i.pravatar.cc/150?u=jane",
    rating: 5,
  },
  {
    name: "Guy Hawkins",
    role: "User",
    content: "A blog website UI design focuses on creating a clean, engaging, and user-friendly experience to enhance readability and user interaction.",
    avatar: "https://i.pravatar.cc/150?u=guy",
    rating: 5,
  },
  {
      name: "Esther Howard",
      role: "User",
      content: "A blog website UI design focuses on creating a clean, engaging, and user-friendly experience to enhance readability and user interaction.",
      avatar: "https://i.pravatar.cc/150?u=esther",
      rating: 5,
    },
]

export default function TestimonialCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  // Set up carousel state for custom dots
  React.useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-20 px-6 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h3 className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-2">
            Real Feedback
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            What Our Customers Say
          </h2>
        </div>

        {/* Carousel Container */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2 my-5">
                <Card className="border-blue-200 bg-white shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-8">
                    {/* Top Row: User Info and Rating */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-4 text-left">
                        <Avatar className="h-12 w-12 border border-slate-100">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-slate-900 leading-tight">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-slate-500 text-left leading-relaxed text-[15px]">
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Dots Pagination */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  current === index 
                  ? "bg-blue-800 w-6" // Active state is wider
                  : "bg-slate-200"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}