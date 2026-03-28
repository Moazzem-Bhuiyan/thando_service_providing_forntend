 // @ts-nocheck

'use client';

import { ServiceProvider } from "./types";


interface BusinessHoursTableProps {
  provider: ServiceProvider;
}

export function BusinessHoursTable({ provider }: BusinessHoursTableProps) {
  // Split hours into two columns
  const firstHalf = provider.businessHours.slice(0, Math.ceil(provider.businessHours.length / 2));
  const secondHalf = provider.businessHours.slice(Math.ceil(provider.businessHours.length / 2));

  const HoursColumn = ({ hours }: { hours: typeof firstHalf }) => (
    <div className="space-y-3">
      {hours.map((hour) => (
        <div key={hour.day} className="flex items-center justify-between">
          <span className="font-medium text-gray-900">{hour.day}</span>
          <span className={hour.isClosed ? 'text-red-600 font-medium' : 'text-gray-700'}>
            {hour.isClosed ? 'Closed' : `${hour.start} - ${hour.end}`}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h2 className="mb-6 text-xl font-bold text-gray-900">Business Hours</h2>
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <HoursColumn hours={firstHalf} />
          <HoursColumn hours={secondHalf} />
        </div>
      </div>
    </div>
  );
}
