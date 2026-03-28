import { ServiceProviderProfile } from "./ServiceProviderProfile";
import { ServiceProvider } from "./types";


const sampleProvider: ServiceProvider = {
  id: '1',
  name: 'All House Cleaners',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  rating: 4.8,
  reviews: 128,
  startingPrice: 50,
  category: 'House Cleaning',
  description:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  experience: 5,
  hires: 100,
  teamSize: 5,
  responseTime: '1hr',
  businessHours: [
    { day: 'Mon-Fri', start: '8:00 AM', end: '8:00 PM', isClosed: false },
    { day: 'Saturday', start: '8:00 AM', end: '8:00 PM', isClosed: false },
    { day: 'Sunday', start: '', end: '', isClosed: true },
  ],
  services: [
    {
      id: '1',
      name: 'Cleaning',
      description: 'Comprehensive cleaning for maintained homes. Interior, clean extraction for unique and designer rugs.',
      icon: 'cleaning',
    },
    {
      id: '2',
      name: 'Residential Cleaning',
      description: 'Comprehensive cleaning for maintained homes. Interior, clean extraction for unique and designer rugs.',
      icon: 'residential',
    },
    {
      id: '3',
      name: 'Commercial Cleaning',
      description: 'Comprehensive cleaning for maintained homes. Interior, clean extraction for unique and designer rugs.',
      icon: 'commercial',
    },
    {
      id: '4',
      name: 'Surface & Area Cleaning',
      description: 'Comprehensive cleaning for maintained homes. Interior, clean extraction for unique and designer rugs.',
      icon: 'surface',
    },
  ],
  availability: [],
};

export default function ProviderDetailsContainer() {
  return (
    <main className="bg-gray-50">
      <ServiceProviderProfile provider={sampleProvider} />
    </main>
  );
}
