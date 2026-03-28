// @ts-nocheck
'use client';

import { Service } from "./types";


interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, string> = {
  cleaning: '🧹',
  residential: '🏠',
  commercial: '🏢',
  surface: '🛁',
};

export function ServiceCard({ service }: ServiceCardProps) {
  const icon = iconMap[service.icon.toLowerCase()] || '✨';

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 transition hover:shadow-md">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-2xl">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900">{service.name}</h3>
      <p className="mt-2 text-sm text-gray-600">{service.description}</p>
    </div>
  );
}
