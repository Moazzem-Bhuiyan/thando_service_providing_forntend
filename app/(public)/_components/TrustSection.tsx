import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  BadgeCheck, 
  CircleDollarSign, 
  CreditCard, 
  Headset 
} from 'lucide-react'; 
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Verified Experts",
    description: "All providers are vetted and reliable.",
    className: "md:mt-0" // First column top
  },
  {
    icon: <CircleDollarSign className="w-6 h-6 text-white" />,
    title: "Transparent Pricing",
    description: "See costs upfront no hidden fees.",
    className: "md:mt-12" // Second column offset down
  },
  {
    icon: <CreditCard className="w-6 h-6 text-white" />,
    title: "Secure Payments",
    description: "Pay safely money released after completion.",
    className: "md:-mt-0" // First column bottom
  },
  {
    icon: <Headset className="w-6 h-6 text-white" />,
    title: "Customer Support",
    description: "Friendly support is here to help anytime.",
    className: "md:mt-6" // Second column bottom
  },
];

const checklist = [
  "Verified Professionals",
  "Transparent Pricing",
  "Secure Payments",
  "Quality Assurance"
];

export default function TrustSection() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Side */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-blue-700 font-bold text-lg tracking-tight">
              Trusted & Secure
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Why You Can Trust Us
            </h2>
          </div>
          
          <p className="text-slate-500 text-lg max-w-lg leading-relaxed">
            We connect you with carefully verified professionals, offer transparent pricing 
            with no hidden fees, and ensure secure payments for every booking.
          </p>

          <ul className="space-y-4 pt-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 font-bold text-slate-800">
                <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-50" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Cards Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-[#FFFFFF] shadow-[#1877F266] h-55 shadow-sm hover:shadow-md transition-shadow duration-300 ${feature.className}`}
            >
              <CardContent className="p-8 space-y-4">
                {/* Icon Container */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
                  {feature.icon}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}