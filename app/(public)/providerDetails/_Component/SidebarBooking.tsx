'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SidebarBookingProps {
  onRequestQuote: (data: QuoteData) => void;
}

export interface QuoteData {
  zipCode: string;
  frequency: string;
  serviceType: string;
}

export function SidebarBooking({ onRequestQuote }: SidebarBookingProps) {
  const [formData, setFormData] = useState<QuoteData>({
    zipCode: '',
    frequency: 'One-time',
    serviceType: 'Standard',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRequestQuote(formData);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="mb-6 text-lg font-bold text-gray-900">Request a Quote</h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Zip Code */}
        <div>
          <label className="block text-sm font-semibold text-gray-900">Zip Code</label>
          <input
            type="text"
            placeholder="Enter zip code"
            value={formData.zipCode}
            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-600 focus:outline-none"
          />
        </div>

        {/* Frequency */}
        <div>
          <label className="block text-sm font-semibold text-gray-900">Frequency</label>
          <div className="relative mt-2">
            <select
              value={formData.frequency}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
              className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:border-blue-600 focus:outline-none"
            >
              <option>One-time</option>
              <option>Weekly</option>
              <option>Bi-weekly</option>
              <option>Monthly</option>
            </select>
            <ChevronDown size={18} className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-900">Service Type</label>
          <div className="relative mt-2">
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:border-blue-600 focus:outline-none"
            >
              <option>Standard</option>
              <option>Premium</option>
              <option>Deep Clean</option>
            </select>
            <ChevronDown size={18} className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700"
        >
          Request Quote
        </button>
      </form>
    </div>
  );
}
