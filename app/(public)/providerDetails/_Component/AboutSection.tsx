'use client';

import { Users, Clock, Briefcase, MessageCircle } from 'lucide-react';
import { ServiceProvider } from './types';


interface AboutSectionProps {
  provider: ServiceProvider;
}

export function AboutSection({ provider }: AboutSectionProps) {
  const stats = [
    { icon: Briefcase, label: 'Experience', value: `${provider.experience}years` },
    { icon: Users, label: 'Hires', value: `${provider.hires} times` },
    { icon: Users, label: 'Team', value: `${provider.teamSize} members` },
    { icon: MessageCircle, label: 'Response', value: provider.responseTime },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900">About the Service</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">{provider.description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                  <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
