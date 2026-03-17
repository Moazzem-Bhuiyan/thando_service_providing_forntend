'use client';

import { MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Hero = () => {
  const [searchValue, setSearchValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    'Recent searches',
    'Popular services',
    'Suggested categories',
    'Auto-complete dropdown as user types',
  ];

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('images/home/hero-bg.png')`, // ← Replace with your actual woman-cleaning image
        backgroundColor: '',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Dark overlay to match screenshot */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001a4d]/70 via-[#001a4d]/40 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32 text-center">
        {/* Headline - exact match */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tighter mb-10 md:mb-14">
          Reliable Home Services, Delivered Professionally
        </h1>

        {/* Search Bar - exact visual match */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-2 flex flex-col md:flex-row items-center gap-3 md:gap-0">
            
            {/* Services Search Input */}
            <div className="flex-1 relative w-full">
              <div className="flex items-center px-5 py-3 md:py-4">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <Input
                  type="text"
                  placeholder="Search your services"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className="border-0 text-base placeholder:text-gray-400 focus-visible:ring-0 p-0 text-gray-700"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-gray-200" />

            {/* Location Input */}
            <div className="flex-1 md:flex-none w-full md:w-auto">
              <div className="flex items-center px-5 py-3 md:py-4 gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Location"
                  value={locationValue}
                  onChange={(e) => setLocationValue(e.target.value)}
                  className="border-0 text-base placeholder:text-gray-400 focus-visible:ring-0 p-0 text-gray-700"
                />
              </div>
            </div>

            {/* Search Button */}
            <Button
              className="bg-[#001a4d] hover:bg-[#000d33] text-white px-8 md:px-12 py-6 md:py-7 rounded-xl font-semibold text-base md:text-lg whitespace-nowrap w-full md:w-auto"
            >
              Search
            </Button>
          </div>

          {/* Suggestions Dropdown - exactly like screenshot */}
          {showSuggestions && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100">
              {suggestions.filter((item) =>
                item.toLowerCase().includes(searchValue)
                ).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer border-b last:border-b-0 text-left"
                  onClick={() => {
                    setSearchValue(item);
                    setShowSuggestions(false);
                  }}
                >
                  <span className="text-[#001a4d] font-medium text-lg">Q</span>
                  <span className="text-gray-700 text-base">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;