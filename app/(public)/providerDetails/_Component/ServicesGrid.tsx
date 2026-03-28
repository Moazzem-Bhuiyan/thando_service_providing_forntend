'use client';


import { ServiceCard } from './ServiceCard';
import { ServiceProvider } from './types';

interface ServicesGridProps {
  provider: ServiceProvider;
}

export function ServicesGrid({ provider }: ServicesGridProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h2 className="mb-6 text-xl font-bold text-gray-900">Services</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {provider.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
