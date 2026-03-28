'use client';

import Image from 'next/image';
import { Star, Download, Heart, Phone, MessageCircleCheck } from 'lucide-react';
import { ServiceProvider } from './types';


interface ProfileHeaderProps {
  provider: ServiceProvider;
}

export function ProfileHeader({ provider }: ProfileHeaderProps) {
  return (
    <div className="border-b border-gray-200 ">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Left: Image and Info */}
          <div className="flex gap-4">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32">
              <Image
                src={provider.image}
                alt={provider.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{provider.name}</h1>
                <p className="mt-1 text-sm text-gray-600">{provider.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">{provider.rating}</span>
                <span className="text-sm text-gray-600">({provider.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Right: Price and Actions */}
          <div className="flex flex-col gap-3 sm:items-end">
            <div>
              <p className="text-xs text-gray-600">Starting Price</p>
              <p className="text-3xl font-bold text-gray-900">${provider.startingPrice}</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                <MessageCircleCheck size={16} />
                Message
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
               <Phone size={16} />
                Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
